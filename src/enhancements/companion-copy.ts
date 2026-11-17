import { getLocale, interpolate } from "./i18n";

const labels = {
  actions: ["泷奈的动作", "Takina's actions"], stretch: ["伸懒腰", "Stretch"], think: ["认真思考", "Think"], look: ["左右张望", "Look around"],
  wink: ["眨眨眼", "Wink"], doze: ["打瞌睡", "Doze"], happy: ["开心晃动", "Happy sway"], wave: ["招手", "Wave"],
  surprised: ["小小惊讶", "Surprised"], pout: ["有点不满", "Pout"], speaking: ["说句话", "Say hello"],
  sleep: ["休息一下", "Rest"], wake: ["叫醒泷奈", "Wake up"], home: ["回到 Dock", "Return to Dock"],
  random: ["随机小动作", "Random actions"], autoReturn: ["松手后自动归位", "Return after release"], roam: ["短距离漫游", "Short strolls"],
  tools: ["天气与本地待办", "Weather & local tasks"], close: ["关闭", "Close"],
  greeting: ["我在这里。右键可以点播动作。", "I'm here. Right-click to choose an action."],
  hello: ["稍微休息一下，再继续吧。", "Take a little break before carrying on."],
  resting: ["休息一会儿，点击就能叫醒我。", "Resting. Click to wake me up."],
  awake: ["醒啦，继续陪着你。", "Awake and ready to keep you company."],
  fallback: ["这段动作暂不可用，先用表情回应你。", "That clip is unavailable. Here's an expression instead."],
  city: ["城市", "City"], search: ["查询天气", "Find weather"], weather: ["天气", "Weather"],
  weatherPrivacy: ["查询时将城市发送至 Open-Meteo；不自动定位。", "City searches go to Open-Meteo. No automatic location access."],
  loading: ["正在查询…", "Loading…"], chooseCity: ["请选择城市", "Choose a city"], noCity: ["没有找到城市，请补充省份或国家。", "No cities found. Try adding a region or country."],
  weatherError: ["天气查询失败，请稍后重试。", "Weather unavailable. Please try again."],
  conditions: ["{city}：{weather}，{temperature}°C", "{city}: {weather}, {temperature}°C"],
  weatherDetails: ["体感 {feels}°C · 湿度 {humidity}% · 风速 {wind} km/h", "Feels like {feels}°C · Humidity {humidity}% · Wind {wind} km/h"],
  updated: ["当地数据时间：{time}", "Local observation time: {time}"],
  clear: ["晴", "Clear"], cloudy: ["多云", "Cloudy"], fog: ["雾", "Fog"], rain: ["雨", "Rain"], snow: ["雪", "Snow"], storm: ["雷雨", "Thunderstorm"], unknownWeather: ["天气数据", "Weather"],
  tasks: ["本地待办", "Local tasks"], taskTitle: ["待办内容", "Task"], due: ["到期时间（可选）", "Due date (optional)"],
  add: ["添加", "Add"], save: ["保存修改", "Save changes"], cancel: ["取消编辑", "Cancel editing"],
  empty: ["还没有待办。", "No tasks yet."], edit: ["编辑", "Edit"], remove: ["删除", "Delete"],
  complete: ["标为完成", "Mark complete"], reopen: ["恢复待办", "Mark incomplete"],
  localOnly: ["仅保存到当前浏览器；网页打开时提供气泡提醒。", "Saved in this browser only. Reminders appear while this page is open."],
  storageError: ["浏览器无法保存；本次操作仅在当前页面有效。", "Storage unavailable. Changes will last only on this page."],
  taskLimit: ["最多保存 50 条待办，请先清理已完成项目。", "Up to 50 tasks. Remove completed tasks first."],
  dueReminder: ["有 {count} 项待办已到期，记得看看。", "{count} tasks are due. Take a look when you're ready."],
  taskDone: ["完成一项，做得不错。", "One task done. Nice work."],
  dragHint: ["拖动移动，点击互动；右键或 Shift+F10 打开动作菜单。", "Drag to move, click to interact; right-click or Shift+F10 for actions."],
} as const;

export type CompanionLabel = keyof typeof labels;
export function copy(key: CompanionLabel, params?: Record<string, string | number>): string {
  return interpolate(labels[key][getLocale().startsWith("zh") ? 0 : 1], params);
}
