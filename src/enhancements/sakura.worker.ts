interface Particle {
  x: number;
  y: number;
  size: number;
  speed: number;
  drift: number;
  phase: number;
}

let canvas: OffscreenCanvas;
let context: OffscreenCanvasRenderingContext2D | null;
let width = 0;
let height = 0;
let particles: Particle[] = [];
let running = true;

function reset(particle: Particle, initial = false): void {
  particle.x = Math.random() * width;
  particle.y = initial ? Math.random() * height : -20;
  particle.size = 3 + Math.random() * 5;
  particle.speed = 0.35 + Math.random() * 0.7;
  particle.drift = -0.35 + Math.random() * 0.7;
  particle.phase = Math.random() * Math.PI * 2;
}

function draw(): void {
  if (!running || !context) return;
  context.clearRect(0, 0, width, height);
  context.fillStyle = "rgba(182, 178, 255, .68)";
  for (const particle of particles) {
    particle.y += particle.speed;
    particle.x += particle.drift + Math.sin(particle.phase + particle.y / 45) * 0.25;
    if (particle.y > height + 20 || particle.x < -30 || particle.x > width + 30) reset(particle);
    context.save();
    context.translate(particle.x, particle.y);
    context.rotate(particle.y / 80 + particle.phase);
    context.beginPath();
    context.ellipse(0, 0, particle.size, particle.size * 0.55, 0, 0, Math.PI * 2);
    context.fill();
    context.restore();
  }
  setTimeout(draw, 33);
}

self.onmessage = (event: MessageEvent) => {
  const data = event.data as {
    type: "init" | "resize" | "pause" | "resume";
    canvas?: OffscreenCanvas;
    width?: number;
    height?: number;
    dpr?: number;
    count?: number;
  };
  if (data.type === "init" && data.canvas) {
    canvas = data.canvas;
    context = canvas.getContext("2d");
    width = data.width ?? 0;
    height = data.height ?? 0;
    const dpr = data.dpr ?? 1;
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    context?.scale(dpr, dpr);
    particles = Array.from({ length: data.count ?? 24 }, () => ({ x: 0, y: 0, size: 0, speed: 0, drift: 0, phase: 0 }));
    particles.forEach((particle) => reset(particle, true));
    draw();
  } else if (data.type === "pause") running = false;
  else if (data.type === "resume") {
    if (!running) {
      running = true;
      draw();
    }
  }
};
