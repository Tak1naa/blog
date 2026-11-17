var sa = document.createElement("script");
document.head.append(sa), sa.append(`
var __NONECONSOLE = {log(){}};(function(){var j=true;function aa(){if(j){return;}this._$MT=null;this._$5S=null;this._$NP=0;aa._$42++;this._$5S=new y(this);}aa._$0s=1;aa._$4s=2;aa._$42=0;aa._$62=function(aQ,aU){try{if(aU instanceof ArrayBuffer){aU=new DataView(aU);}if(!(aU instanceof DataView)){throw new J("_$SS#loadModel(b) / b _$x be DataView or ArrayBuffer");}var aS=new K(aU);var aM=aS._$ST();var aK=aS._$ST();var aJ=aS._$ST();var aN;if(aM==109&&aK==111&&aJ==99){aN=aS._$ST();}else{throw new J("_$gi _$C _$li , _$Q0 _$P0.");}aS._$gr(aN);if(aN>ay._$T7){aQ._$NP|=aa._$4s;var aR=ay._$T7;var aI="_$gi _$C _$li , _$n0 _$_ version _$li ( SDK : "+aR+" < _$f0 : "+aN+" )@_$SS#loadModel()\\
";throw new J(aI);}var aL=aS._$nP();if(aN>=ay._$s7){var aH=aS._$9T();var aT=aS._$9T();if(aH!=-30584||aT!=-30584){aQ._$NP|=aa._$0s;throw new J("_$gi _$C _$li , _$0 _$6 _$Ui.");}}aQ._$KS(aL);var aP=aQ.getModelContext();aP.setDrawParam(aQ.getDrawParam());aP.init();}catch(aO){q._$Rb(aO);}};aa.prototype._$KS=function(aH){this._$MT=aH;};aa.prototype.getModelImpl=function(){if(this._$MT==null){this._$MT=new w();this._$MT._$zP();}return this._$MT;};aa.prototype.getCanvasWidth=function(){if(this._$MT==null){return 0;}return this._$MT.getCanvasWidth();};aa.prototype.getCanvasHeight=function(){if(this._$MT==null){return 0;}return this._$MT.getCanvasHeight();};aa.prototype.getParamFloat=function(aH){if(typeof aH!="number"){aH=this._$5S.getParamIndex(z.getID(aH));}return this._$5S.getParamFloat(aH);};aa.prototype.setParamFloat=function(aH,aJ,aI){if(typeof aH!="number"){aH=this._$5S.getParamIndex(z.getID(aH));}if(arguments.length<3){aI=1;}this._$5S.setParamFloat(aH,this._$5S.getParamFloat(aH)*(1-aI)+aJ*aI);};aa.prototype.addToParamFloat=function(aH,aJ,aI){if(typeof aH!="number"){aH=this._$5S.getParamIndex(z.getID(aH));}if(arguments.length<3){aI=1;}this._$5S.setParamFloat(aH,this._$5S.getParamFloat(aH)+aJ*aI);};aa.prototype.multParamFloat=function(aH,aJ,aI){if(typeof aH!="number"){aH=this._$5S.getParamIndex(z.getID(aH));}if(arguments.length<3){aI=1;}this._$5S.setParamFloat(aH,this._$5S.getParamFloat(aH)*(1+(aJ-1)*aI));};aa.prototype.getParamIndex=function(aH){return this._$5S.getParamIndex(z.getID(aH));};aa.prototype.loadParam=function(){this._$5S.loadParam();};aa.prototype.saveParam=function(){this._$5S.saveParam();};aa.prototype.init=function(){this._$5S.init();};aa.prototype.update=function(){this._$5S.update();};aa.prototype._$Rs=function(){q._$li("_$60 _$PT _$Rs()");return -1;};aa.prototype._$Ds=function(aH){q._$li("_$60 _$PT _$SS#_$Ds() \\n");};aa.prototype._$K2=function(){};aa.prototype.draw=function(){};aa.prototype.getModelContext=function(){return this._$5S;};aa.prototype._$s2=function(){return this._$NP;};aa.prototype._$P7=function(aK,aR,aH,a0){var aU=-1;var aY=0;var aM=this;var aJ=0.5;var aI=0.15;var aX=true;if(aH==0){for(var aV=0;aV<aK.length;aV++){var aP=aK[aV];var aO=aR[aV];var aS=(aM.getParamFloat(aP)!=0);aM.setPartsOpacity(aO,(aS?1:0));}return;}else{if(aK.length==1){var aP=aK[0];var aT=(aM.getParamFloat(aP)!=0);var aO=aR[0];var aQ=aM.getPartsOpacity(aO);var aW=aH/a0;if(aT){aQ+=aW;if(aQ>1){aQ=1;}}else{aQ-=aW;if(aQ<0){aQ=0;}}aM.setPartsOpacity(aO,aQ);}else{for(var aV=0;aV<aK.length;aV++){var aP=aK[aV];var aS=(aM.getParamFloat(aP)!=0);if(aS){if(aU>=0){break;}aU=aV;var aO=aR[aV];aY=aM.getPartsOpacity(aO);aY+=aH/a0;if(aY>1){aY=1;}}}if(aU<0){__NONECONSOLE.log("No _$wi _$q0/ _$U default[%s]",aK[0]);aU=0;aY=1;aM.loadParam();aM.setParamFloat(aK[aU],aY);aM.saveParam();}for(var aV=0;aV<aK.length;aV++){var aO=aR[aV];if(aU==aV){aM.setPartsOpacity(aO,aY);}else{var aL=aM.getPartsOpacity(aO);var aZ;if(aY<aJ){aZ=aY*(aJ-1)/aJ+1;}else{aZ=(1-aY)*aJ/(1-aJ);}if(aX){var aN=(1-aZ)*(1-aY);if(aN>aI){aZ=1-aI/(1-aY);}}if(aL>aZ){aL=aZ;}aM.setPartsOpacity(aO,aL);}}}}};aa.prototype.setPartsOpacity=function(aI,aH){if(typeof aI!="number"){aI=this._$5S.getPartsDataIndex(i.getID(aI));}this._$5S.setPartsOpacity(aI,aH);};aa.prototype.getPartsDataIndex=function(aH){if(!(aH instanceof i)){aH=i.getID(aH);}return this._$5S.getPartsDataIndex(aH);};aa.prototype.getPartsOpacity=function(aH){if(typeof aH!="number"){aH=this._$5S.getPartsDataIndex(i.getID(aH));}if(aH<0){return 0;}return this._$5S.getPartsOpacity(aH);};aa.prototype.getDrawParam=function(){};aa.prototype.getDrawDataIndex=function(aH){return this._$5S.getDrawDataIndex(Z.getID(aH));};aa.prototype.getDrawData=function(aH){return this._$5S.getDrawData(aH);};aa.prototype.getTransformedPoints=function(aH){var aI=this._$5S._$C2(aH);if(aI instanceof ag){return(aI).getTransformedPoints();}return null;};aa.prototype.getIndexArray=function(aI){if(aI<0||aI>=this._$5S._$aS.length){return null;}var aH=this._$5S._$aS[aI];if(aH!=null&&aH.getType()==a._$wb){if(aH instanceof b){return aH.getIndexArray();}}return null;};function W(aJ){if(j){return;}this.clipContextList=new Array();this.glcontext=aJ.gl;this.dp_webgl=aJ;this.curFrameNo=0;this.firstError_clipInNotUpdate=true;this.colorBuffer=0;this.isInitGLFBFunc=false;this.tmpBoundsOnModel=new av();if(Q.glContext.length>Q.frameBuffers.length){this.curFrameNo=this.getMaskRenderTexture();}else{}this.tmpModelToViewMatrix=new ac();this.tmpMatrix2=new ac();this.tmpMatrixForMask=new ac();this.tmpMatrixForDraw=new ac();this.CHANNEL_COLORS=new Array();var aI=new o();aI=new o();aI.r=0;aI.g=0;aI.b=0;aI.a=1;this.CHANNEL_COLORS.push(aI);aI=new o();aI.r=1;aI.g=0;aI.b=0;aI.a=0;this.CHANNEL_COLORS.push(aI);aI=new o();aI.r=0;aI.g=1;aI.b=0;aI.a=0;this.CHANNEL_COLORS.push(aI);aI=new o();aI.r=0;aI.g=0;aI.b=1;aI.a=0;this.CHANNEL_COLORS.push(aI);for(var aH=0;aH<this.CHANNEL_COLORS.length;aH++){this.dp_webgl.setChannelFlagAsColor(aH,this.CHANNEL_COLORS[aH]);}}W.CHANNEL_COUNT=4;W.RENDER_TEXTURE_USE_MIPMAP=false;W.NOT_USED_FRAME=-100;W.prototype._$L7=function(){if(this.tmpModelToViewMatrix){this.tmpModelToViewMatrix=null;}if(this.tmpMatrix2){this.tmpMatrix2=null;}if(this.tmpMatrixForMask){this.tmpMatrixForMask=null;}if(this.tmpMatrixForDraw){this.tmpMatrixForDraw=null;}if(this.tmpBoundsOnModel){this.tmpBoundsOnModel=null;}if(this.CHANNEL_COLORS){for(var aH=this.CHANNEL_COLORS.length-1;aH>=0;--aH){this.CHANNEL_COLORS.splice(aH,1);}this.CHANNEL_COLORS=[];}this.releaseShader();};W.prototype.releaseShader=function(){var aI=Q.frameBuffers.length;for(var aH=0;aH<aI;aH++){this.gl.deleteFramebuffer(Q.frameBuffers[aH].framebuffer);}Q.frameBuffers=[];Q.glContext=[];};W.prototype.init=function(aO,aN,aL){for(var aM=0;aM<aN.length;aM++){var aH=aN[aM].getClipIDList();if(aH==null){continue;}var aJ=this.findSameClip(aH);if(aJ==null){aJ=new U(this,aO,aH);this.clipContextList.push(aJ);}var aI=aN[aM].getDrawDataID();var aK=aO.getDrawDataIndex(aI);aJ.addClippedDrawData(aI,aK);var aP=aL[aM];aP.clipBufPre_clipContext=aJ;}};W.prototype.getMaskRenderTexture=function(){var aH=null;aH=this.dp_webgl.createFramebuffer();Q.frameBuffers[this.dp_webgl.glno]=aH;return this.dp_webgl.glno;};W.prototype.setupClip=function(a1,aQ){var aK=0;for(var aO=0;aO<this.clipContextList.length;aO++){var aP=this.clipContextList[aO];this.calcClippedDrawTotalBounds(a1,aP);if(aP.isUsing){aK++;}}if(aK>0){var aM=aQ.gl.getParameter(aQ.gl.FRAMEBUFFER_BINDING);var aW=new Array(4);aW[0]=0;aW[1]=0;aW[2]=aQ.gl.canvas.width;aW[3]=aQ.gl.canvas.height;aQ.gl.viewport(0,0,Q.clippingMaskBufferSize,Q.clippingMaskBufferSize);this.setupLayoutBounds(aK);aQ.gl.bindFramebuffer(aQ.gl.FRAMEBUFFER,Q.frameBuffers[this.curFrameNo].framebuffer);aQ.gl.clearColor(0,0,0,0);aQ.gl.clear(aQ.gl.COLOR_BUFFER_BIT);for(var aO=0;aO<this.clipContextList.length;aO++){var aP=this.clipContextList[aO];var aT=aP.allClippedDrawRect;var aN=aP.layoutChannelNo;var aV=aP.layoutBounds;var aJ=0.05;this.tmpBoundsOnModel._$jL(aT);this.tmpBoundsOnModel.expand(aT.width*aJ,aT.height*aJ);var aZ=aV.width/this.tmpBoundsOnModel.width;var aY=aV.height/this.tmpBoundsOnModel.height;this.tmpMatrix2.identity();this.tmpMatrix2.translate(-1,-1,0);this.tmpMatrix2.scale(2,2,1);this.tmpMatrix2.translate(aV.x,aV.y,0);this.tmpMatrix2.scale(aZ,aY,1);this.tmpMatrix2.translate(-this.tmpBoundsOnModel.x,-this.tmpBoundsOnModel.y,0);this.tmpMatrixForMask.setMatrix(this.tmpMatrix2.m);this.tmpMatrix2.identity();this.tmpMatrix2.translate(aV.x,aV.y,0);this.tmpMatrix2.scale(aZ,aY,1);this.tmpMatrix2.translate(-this.tmpBoundsOnModel.x,-this.tmpBoundsOnModel.y,0);this.tmpMatrixForDraw.setMatrix(this.tmpMatrix2.m);var aH=this.tmpMatrixForMask.getArray();for(var aX=0;aX<16;aX++){aP.matrixForMask[aX]=aH[aX];}var a0=this.tmpMatrixForDraw.getArray();for(var aX=0;aX<16;aX++){aP.matrixForDraw[aX]=a0[aX];}var aS=aP.clippingMaskDrawIndexList.length;for(var aU=0;aU<aS;aU++){var aR=aP.clippingMaskDrawIndexList[aU];var aI=a1.getDrawData(aR);var aL=a1._$C2(aR);aQ.setClipBufPre_clipContextForMask(aP);aI.draw(aQ,a1,aL);}}aQ.gl.bindFramebuffer(aQ.gl.FRAMEBUFFER,aM);aQ.setClipBufPre_clipContextForMask(null);aQ.gl.viewport(aW[0],aW[1],aW[2],aW[3]);}};W.prototype.getColorBuffer=function(){return this.colorBuffer;};W.prototype.findSameClip=function(aK){for(var aN=0;aN<this.clipContextList.length;aN++){var aO=this.clipContextList[aN];var aH=aO.clipIDList.length;if(aH!=aK.length){continue;}var aI=0;for(var aM=0;aM<aH;aM++){var aL=aO.clipIDList[aM];for(var aJ=0;aJ<aH;aJ++){if(aK[aJ]==aL){aI++;break;}}}if(aI==aH){return aO;}}return null;};W.prototype.calcClippedDrawTotalBounds=function(a6,aV){var aU=a6._$Ri.getModelImpl().getCanvasWidth();var a5=a6._$Ri.getModelImpl().getCanvasHeight();var aJ=aU>a5?aU:a5;var aT=aJ;var aR=aJ;var aS=0;var aP=0;var aL=aV.clippedDrawContextList.length;for(var aM=0;aM<aL;aM++){var aW=aV.clippedDrawContextList[aM];var aN=aW.drawDataIndex;var aK=a6._$C2(aN);if(aK._$yo()){var aX=aK.getTransformedPoints();var a4=aX.length;var aI=[];var aH=[];var aO=0;for(var a3=aw._$i2;a3<a4;a3+=aw._$No){aI[aO]=aX[a3];aH[aO]=aX[a3+1];aO++;}var a2=Math.min.apply(null,aI);var a1=Math.min.apply(null,aH);var a0=Math.max.apply(null,aI);var aZ=Math.max.apply(null,aH);if(a2<aT){aT=a2;}if(a1<aR){aR=a1;}if(a0>aS){aS=a0;}if(aZ>aP){aP=aZ;}}}if(aT==aJ){aV.allClippedDrawRect.x=0;aV.allClippedDrawRect.y=0;aV.allClippedDrawRect.width=0;aV.allClippedDrawRect.height=0;aV.isUsing=false;}else{var aQ=aS-aT;var aY=aP-aR;aV.allClippedDrawRect.x=aT;aV.allClippedDrawRect.y=aR;aV.allClippedDrawRect.width=aQ;aV.allClippedDrawRect.height=aY;aV.isUsing=true;}};W.prototype.setupLayoutBounds=function(aQ){var aI=aQ/W.CHANNEL_COUNT;var aP=aQ%W.CHANNEL_COUNT;aI=~~aI;aP=~~aP;var aH=0;for(var aJ=0;aJ<W.CHANNEL_COUNT;aJ++){var aM=aI+(aJ<aP?1:0);if(aM==0){}else{if(aM==1){var aL=this.clipContextList[aH++];aL.layoutChannelNo=aJ;aL.layoutBounds.x=0;aL.layoutBounds.y=0;aL.layoutBounds.width=1;aL.layoutBounds.height=1;}else{if(aM==2){for(var aO=0;aO<aM;aO++){var aN=aO%2;var aK=0;aN=~~aN;var aL=this.clipContextList[aH++];aL.layoutChannelNo=aJ;aL.layoutBounds.x=aN*0.5;aL.layoutBounds.y=0;aL.layoutBounds.width=0.5;aL.layoutBounds.height=1;}}else{if(aM<=4){for(var aO=0;aO<aM;aO++){var aN=aO%2;var aK=aO/2;aN=~~aN;aK=~~aK;var aL=this.clipContextList[aH++];aL.layoutChannelNo=aJ;aL.layoutBounds.x=aN*0.5;aL.layoutBounds.y=aK*0.5;aL.layoutBounds.width=0.5;aL.layoutBounds.height=0.5;}}else{if(aM<=9){for(var aO=0;aO<aM;aO++){var aN=aO%3;var aK=aO/3;aN=~~aN;aK=~~aK;var aL=this.clipContextList[aH++];aL.layoutChannelNo=aJ;aL.layoutBounds.x=aN/3;aL.layoutBounds.y=aK/3;aL.layoutBounds.width=1/3;aL.layoutBounds.height=1/3;}}else{q._$li("_$6 _$0P mask count : %d",aM);}}}}}}};function U(aH,aK,aI){this.clipIDList=new Array();this.clipIDList=aI;this.clippingMaskDrawIndexList=new Array();for(var aJ=0;aJ<aI.length;aJ++){this.clippingMaskDrawIndexList.push(aK.getDrawDataIndex(aI[aJ]));}this.clippedDrawContextList=new Array();this.isUsing=true;this.layoutChannelNo=0;this.layoutBounds=new av();this.allClippedDrawRect=new av();this.matrixForMask=new Float32Array(16);this.matrixForDraw=new Float32Array(16);this.owner=aH;}U.prototype.addClippedDrawData=function(aJ,aI){var aH=new R(aJ,aI);this.clippedDrawContextList.push(aH);};function R(aI,aH){this._$gP=aI;this.drawDataIndex=aH;}function I(){if(j){return;}this.color=null;}function ah(){if(j){return;}this._$dP=null;this._$eo=null;this._$V0=null;this._$dP=1000;this._$eo=1000;this._$V0=1;this._$a0();}ah._$JT=function(aP,aN,aO){var aQ=aP/aN;var a1=aO/aN;var aU=a1;var aZ=1/3;var aR=2/3;var a0=1-(1-a1)*(1-a1);var a2=1-(1-aU)*(1-aU);var aM=0;var aL=((1-a1)*aZ)*a0+(aU*aR+(1-aU)*aZ)*(1-a0);var aK=(aU+(1-aU)*aR)*a2+(a1*aZ+(1-a1)*aR)*(1-a2);var aJ=1;var aY=aJ-3*aK+3*aL-aM;var aX=3*aK-6*aL+3*aM;var aW=3*aL-3*aM;var aV=aM;if(aQ<=0){return 0;}else{if(aQ>=1){return 1;}}var aS=aQ;var aI=aS*aS;var aH=aS*aI;var aT=aY*aH+aX*aI+aW*aS+aV;return aT;};ah.prototype._$a0=function(){};ah.prototype.setFadeIn=function(aH){this._$dP=aH;};ah.prototype.setFadeOut=function(aH){this._$eo=aH;};ah.prototype._$pT=function(aH){this._$V0=aH;};ah.prototype.getFadeOut=function(){return this._$eo;};ah.prototype._$4T=function(){return this._$eo;};ah.prototype._$mT=function(){return this._$V0;};ah.prototype.getDurationMSec=function(){return -1;};ah.prototype.getLoopDurationMSec=function(){return -1;};ah.prototype.updateParam=function(aJ,aN){if(!aN._$AT||aN._$9L){return;}var aL=P.getUserTimeMSec();if(aN._$z2<0){aN._$z2=aL;aN._$bs=aL;var aM=this.getDurationMSec();if(aN._$Do<0){aN._$Do=(aM<=0)?-1:aN._$z2+aM;}}var aI=this._$V0;var aH=(this._$dP==0)?1:A._$r2(((aL-aN._$bs)/(this._$dP)));var aK=(this._$eo==0||aN._$Do<0)?1:A._$r2(((aN._$Do-aL)/(this._$eo)));aI=aI*aH*aK;if(!((0<=aI&&aI<=1))){__NONECONSOLE.log("### assert!! ### ");}this.updateParamExe(aJ,aL,aI,aN);if(aN._$Do>0&&aN._$Do<aL){aN._$9L=true;}};ah.prototype.updateParamExe=function(aH,aI,aJ,aK){};function q(){}q._$8s=0;q._$fT=new Object();q.start=function(aI){var aH=q._$fT[aI];if(aH==null){aH=new af();aH._$r=aI;q._$fT[aI]=aH;}aH._$0S=P.getSystemTimeMSec();};q.dump=function(aJ){var aH=q._$fT[aJ];if(aH!=null){var aI=P.getSystemTimeMSec();var aK=aI-aH._$0S;__NONECONSOLE.log(aJ+" : "+aK+"ms");return aK;}else{return -1;}};q.end=function(aJ){var aH=q._$fT[aJ];if(aH!=null){var aI=P.getSystemTimeMSec();return aI-aH._$0S;}else{return -1;}};q._$li=function(aI,aH){__NONECONSOLE.log("_$li : "+aI+"\\n",aH);};q._$Ji=function(aI,aH){__NONECONSOLE.log(aI,aH);};q._$dL=function(aI,aH){__NONECONSOLE.log(aI,aH);__NONECONSOLE.log("\\n");};q._$KL=function(aJ,aI){for(var aH=0;aH<aI;aH++){if(aH%16==0&&aH>0){__NONECONSOLE.log("\\n");}else{if(aH%8==0&&aH>0){__NONECONSOLE.log("  ");}}__NONECONSOLE.log("%02X ",(aJ[aH]&255));}__NONECONSOLE.log("\\n");};q._$nr=function(aL,aI,aK){__NONECONSOLE.log("%s\\n",aL);var aH=aI.length;for(var aJ=0;aJ<aH;++aJ){__NONECONSOLE.log("%5d",aI[aJ]);__NONECONSOLE.log("%s\\n",aK);__NONECONSOLE.log(",");}__NONECONSOLE.log("\\n");};q._$Rb=function(aH){__NONECONSOLE.log("dump exception : "+aH);__NONECONSOLE.log("stack :: "+aH.stack);};function af(){this._$r=null;this._$0S=null;}function F(){if(j){return;}this.x=null;this.y=null;this.width=null;this.height=null;}F.prototype._$8P=function(){return 0.5*(this.x+this.x+this.width);};F.prototype._$6P=function(){return 0.5*(this.y+this.y+this.height);};F.prototype._$EL=function(){return this.x+this.width;};F.prototype._$5T=function(){return this.y+this.height;};F.prototype._$jL=function(aI,aK,aJ,aH){this.x=aI;this.y=aK;this.width=aJ;this.height=aH;};F.prototype._$jL=function(aH){this.x=aH.x;this.y=aH.y;this.width=aH.width;this.height=aH.height;};function i(aH){if(j){return;}ak.prototype.constructor.call(this,aH);}i.prototype=new ak();i._$tP=new Object();i._$27=function(){i._$tP.clear();};i.getID=function(aH){var aI=i._$tP[aH];if(aI==null){aI=new i(aH);i._$tP[aH]=aI;}return aI;};i.prototype._$3s=function(){return new i();};function S(){}function z(aH){if(j){return;}ak.prototype.constructor.call(this,aH);}z.prototype=new ak();z._$tP=new Object();z._$27=function(){z._$tP.clear();};z.getID=function(aH){var aI=z._$tP[aH];if(aI==null){aI=new z(aH);z._$tP[aH]=aI;}return aI;};z.prototype._$3s=function(){return new z();};function w(){if(j){return;}this._$vo=null;this._$F2=null;this._$ao=400;this._$1S=400;w._$42++;}w._$42=0;w.prototype._$zP=function(){if(this._$vo==null){this._$vo=new an();}if(this._$F2==null){this._$F2=new Array();}};w.prototype.getCanvasWidth=function(){return this._$ao;};w.prototype.getCanvasHeight=function(){return this._$1S;};w.prototype._$F0=function(aH){this._$vo=aH._$nP();this._$F2=aH._$nP();this._$ao=aH._$6L();this._$1S=aH._$6L();};w.prototype._$6S=function(aH){this._$F2.push(aH);};w.prototype._$Xr=function(){return this._$F2;};w.prototype._$E2=function(){return this._$vo;};function u(){if(j){return;}this.p1=new N();this.p2=new N();this._$Fo=0;this._$Db=0;this._$L2=0;this._$M2=0;this._$ks=0;this._$9b=0;this._$iP=0;this._$iT=0;this._$lL=new Array();this._$qP=new Array();this.setup(0.3,0.5,0.1);}u.prototype.setup=function(aJ,aI,aH){this._$ks=this._$Yb();this.p2._$xT();if(arguments.length==3){this._$Fo=aJ;this._$L2=aI;this.p1._$p=aH;this.p2._$p=aH;this.p2.y=aJ;this.setup();}};u.prototype.getPhysicsPoint1=function(){return this.p1;};u.prototype.getPhysicsPoint2=function(){return this.p2;};u.prototype._$qr=function(){return this._$Db;};u.prototype._$pr=function(aH){this._$Db=aH;};u.prototype._$5r=function(){return this._$M2;};u.prototype._$Cs=function(){return this._$9b;};u.prototype._$Yb=function(){return(-180*(Math.atan2(this.p1.x-this.p2.x,-(this.p1.y-this.p2.y)))/Math.PI);};u.prototype.addSrcParam=function(aJ,aH,aL,aI){var aK=new h(aJ,aH,aL,aI);this._$lL.push(aK);};u.prototype.addTargetParam=function(aJ,aH,aK,aI){var aL=new aF(aJ,aH,aK,aI);this._$qP.push(aL);};u.prototype.update=function(aI,aL){if(this._$iP==0){this._$iP=this._$iT=aL;this._$Fo=(Math.sqrt((this.p1.x-this.p2.x)*(this.p1.x-this.p2.x)+(this.p1.y-this.p2.y)*(this.p1.y-this.p2.y)));return;}var aK=(aL-this._$iT)/1000;if(aK!=0){for(var aJ=this._$lL.length-1;aJ>=0;--aJ){var aM=this._$lL[aJ];aM._$oP(aI,this);}this._$oo(aI,aK);this._$M2=this._$Yb();this._$9b=(this._$M2-this._$ks)/aK;this._$ks=this._$M2;}for(var aJ=this._$qP.length-1;aJ>=0;--aJ){var aH=this._$qP[aJ];aH._$YS(aI,this);}this._$iT=aL;};u.prototype._$oo=function(aN,aI){if(aI<0.033){aI=0.033;}var aU=1/aI;this.p1.vx=(this.p1.x-this.p1._$s0)*aU;this.p1.vy=(this.p1.y-this.p1._$70)*aU;this.p1.ax=(this.p1.vx-this.p1._$7L)*aU;this.p1.ay=(this.p1.vy-this.p1._$HL)*aU;this.p1.fx=this.p1.ax*this.p1._$p;this.p1.fy=this.p1.ay*this.p1._$p;this.p1._$xT();var aM=-(Math.atan2((this.p1.y-this.p2.y),this.p1.x-this.p2.x));var aL;var aV;var aR=Math.cos(aM);var aH=Math.sin(aM);var aW=9.8*this.p2._$p;var aQ=(this._$Db*aC._$bS);var aP=(aW*Math.cos(aM-aQ));aL=(aP*aH);aV=(aP*aR);var aK=(-this.p1.fx*aH*aH);var aT=(-this.p1.fy*aH*aR);var aJ=((-this.p2.vx*this._$L2));var aS=((-this.p2.vy*this._$L2));this.p2.fx=((aL+aK+aJ));this.p2.fy=((aV+aT+aS));this.p2.ax=this.p2.fx/this.p2._$p;this.p2.ay=this.p2.fy/this.p2._$p;this.p2.vx+=this.p2.ax*aI;this.p2.vy+=this.p2.ay*aI;this.p2.x+=this.p2.vx*aI;this.p2.y+=this.p2.vy*aI;var aO=(Math.sqrt((this.p1.x-this.p2.x)*(this.p1.x-this.p2.x)+(this.p1.y-this.p2.y)*(this.p1.y-this.p2.y)));this.p2.x=this.p1.x+this._$Fo*(this.p2.x-this.p1.x)/aO;this.p2.y=this.p1.y+this._$Fo*(this.p2.y-this.p1.y)/aO;this.p2.vx=(this.p2.x-this.p2._$s0)*aU;this.p2.vy=(this.p2.y-this.p2._$70)*aU;this.p2._$xT();};function N(){this._$p=1;this.x=0;this.y=0;this.vx=0;this.vy=0;this.ax=0;this.ay=0;this.fx=0;this.fy=0;this._$s0=0;this._$70=0;this._$7L=0;this._$HL=0;}N.prototype._$xT=function(){this._$s0=this.x;this._$70=this.y;this._$7L=this.vx;this._$HL=this.vy;};function at(aJ,aI,aH){this._$wL=null;this.scale=null;this._$V0=null;this._$wL=aJ;this.scale=aI;this._$V0=aH;}at.prototype._$oP=function(aI,aH){};function h(aJ,aK,aI,aH){at.prototype.constructor.call(this,aK,aI,aH);this._$tL=null;this._$tL=aJ;}h.prototype=new at();h.prototype._$oP=function(aJ,aH){var aK=this.scale*aJ.getParamFloat(this._$wL);var aL=aH.getPhysicsPoint1();switch(this._$tL){default:case u.Src.SRC_TO_X:aL.x=aL.x+(aK-aL.x)*this._$V0;break;case u.Src.SRC_TO_Y:aL.y=aL.y+(aK-aL.y)*this._$V0;break;case u.Src.SRC_TO_G_ANGLE:var aI=aH._$qr();aI=aI+(aK-aI)*this._$V0;aH._$pr(aI);break;}};function d(aJ,aI,aH){this._$wL=null;this.scale=null;this._$V0=null;this._$wL=aJ;this.scale=aI;this._$V0=aH;}d.prototype._$YS=function(aI,aH){};function aF(aI,aK,aJ,aH){d.prototype.constructor.call(this,aK,aJ,aH);this._$YP=null;this._$YP=aI;}aF.prototype=new d();aF.prototype._$YS=function(aI,aH){switch(this._$YP){default:case u.Target.TARGET_FROM_ANGLE:aI.setParamFloat(this._$wL,this.scale*aH._$5r(),this._$V0);break;case u.Target.TARGET_FROM_ANGLE_V:aI.setParamFloat(this._$wL,this.scale*aH._$Cs(),this._$V0);break;}};u.Src=function(){};u.Src.SRC_TO_X="SRC_TO_X";u.Src.SRC_TO_Y="SRC_TO_Y";u.Src.SRC_TO_G_ANGLE="SRC_TO_G_ANGLE";u.Target=function(){};u.Target.TARGET_FROM_ANGLE="TARGET_FROM_ANGLE";u.Target.TARGET_FROM_ANGLE_V="TARGET_FROM_ANGLE_V";function X(){if(j){return;}this._$fL=0;this._$gL=0;this._$B0=1;this._$z0=1;this._$qT=0;this.reflectX=false;this.reflectY=false;}X.prototype.init=function(aH){this._$fL=aH._$fL;this._$gL=aH._$gL;this._$B0=aH._$B0;this._$z0=aH._$z0;this._$qT=aH._$qT;this.reflectX=aH.reflectX;this.reflectY=aH.reflectY;};X.prototype._$F0=function(aH){this._$fL=aH._$_T();this._$gL=aH._$_T();this._$B0=aH._$_T();this._$z0=aH._$_T();this._$qT=aH._$_T();if(aH.getFormatVersion()>=ay.LIVE2D_FORMAT_VERSION_V2_10_SDK2){this.reflectX=aH._$po();this.reflectY=aH._$po();}};X.prototype._$e=function(){};var ad=function(){};ad._$ni=function(aL,aJ,aR,aQ,aK,aI,aH,aS,aN){var aM=(aH*aI-aS*aK);if(aM==0){return null;}else{var aO=((aL-aR)*aI-(aJ-aQ)*aK)/aM;var aP;if(aK!=0){aP=(aL-aR-aO*aH)/aK;}else{aP=(aJ-aQ-aO*aS)/aI;}if(isNaN(aP)){aP=(aL-aR-aO*aH)/aK;if(isNaN(aP)){aP=(aJ-aQ-aO*aS)/aI;}if(isNaN(aP)){__NONECONSOLE.log("a is NaN @UtVector#_$ni() ");__NONECONSOLE.log("v1x : "+aK);__NONECONSOLE.log("v1x != 0 ? "+(aK!=0));}}if(aN==null){return new Array(aP,aO);}else{aN[0]=aP;aN[1]=aO;return aN;}}};function av(){if(j){return;}this.x=null;this.y=null;this.width=null;this.height=null;}av.prototype._$8P=function(){return this.x+0.5*this.width;};av.prototype._$6P=function(){return this.y+0.5*this.height;};av.prototype._$EL=function(){return this.x+this.width;};av.prototype._$5T=function(){return this.y+this.height;};av.prototype._$jL=function(aI,aK,aJ,aH){this.x=aI;this.y=aK;this.width=aJ;this.height=aH;};av.prototype._$jL=function(aH){this.x=aH.x;this.y=aH.y;this.width=aH.width;this.height=aH.height;};av.prototype.contains=function(aH,aI){return this.x<=this.x&&this.y<=this.y&&(this.x<=this.x+this.width)&&(this.y<=this.y+this.height);};av.prototype.expand=function(aH,aI){this.x-=aH;this.y-=aI;this.width+=aH*2;this.height+=aI*2;};function aG(){}aG._$Z2=function(bb,bo,bp,a2){var a1=bo._$Q2(bb,bp);var a3=bb._$vs();var ba=bb._$Tr();bo._$zr(a3,ba,a1);if(a1<=0){return a2[a3[0]];}else{if(a1==1){var bj=a2[a3[0]];var bi=a2[a3[1]];var a9=ba[0];return(bj+(bi-bj)*a9)|0;}else{if(a1==2){var bj=a2[a3[0]];var bi=a2[a3[1]];var a0=a2[a3[2]];var aZ=a2[a3[3]];var a9=ba[0];var a8=ba[1];var br=(bj+(bi-bj)*a9)|0;var bq=(a0+(aZ-a0)*a9)|0;return(br+(bq-br)*a8)|0;}else{if(a1==3){var aP=a2[a3[0]];var aO=a2[a3[1]];var bn=a2[a3[2]];var bm=a2[a3[3]];var aK=a2[a3[4]];var aJ=a2[a3[5]];var bg=a2[a3[6]];var bf=a2[a3[7]];var a9=ba[0];var a8=ba[1];var a6=ba[2];var bj=(aP+(aO-aP)*a9)|0;var bi=(bn+(bm-bn)*a9)|0;var a0=(aK+(aJ-aK)*a9)|0;var aZ=(bg+(bf-bg)*a9)|0;var br=(bj+(bi-bj)*a8)|0;var bq=(a0+(aZ-a0)*a8)|0;return(br+(bq-br)*a6)|0;}else{if(a1==4){var aT=a2[a3[0]];var aS=a2[a3[1]];var bu=a2[a3[2]];var bt=a2[a3[3]];var aN=a2[a3[4]];var aM=a2[a3[5]];var bl=a2[a3[6]];var bk=a2[a3[7]];var be=a2[a3[8]];var bc=a2[a3[9]];var aX=a2[a3[10]];var aW=a2[a3[11]];var a7=a2[a3[12]];var a5=a2[a3[13]];var aR=a2[a3[14]];var aQ=a2[a3[15]];var a9=ba[0];var a8=ba[1];var a6=ba[2];var a4=ba[3];var aP=(aT+(aS-aT)*a9)|0;var aO=(bu+(bt-bu)*a9)|0;var bn=(aN+(aM-aN)*a9)|0;var bm=(bl+(bk-bl)*a9)|0;var aK=(be+(bc-be)*a9)|0;var aJ=(aX+(aW-aX)*a9)|0;var bg=(a7+(a5-a7)*a9)|0;var bf=(aR+(aQ-aR)*a9)|0;var bj=(aP+(aO-aP)*a8)|0;var bi=(bn+(bm-bn)*a8)|0;var a0=(aK+(aJ-aK)*a8)|0;var aZ=(bg+(bf-bg)*a8)|0;var br=(bj+(bi-bj)*a6)|0;var bq=(a0+(aZ-a0)*a6)|0;return(br+(bq-br)*a4)|0;}else{var aV=1<<a1;var aY=new Float32Array(aV);for(var bh=0;bh<aV;bh++){var aI=bh;var aH=1;for(var aL=0;aL<a1;aL++){aH*=(aI%2==0)?(1-ba[aL]):ba[aL];aI/=2;}aY[bh]=aH;}var bs=new Float32Array(aV);for(var aU=0;aU<aV;aU++){bs[aU]=a2[a3[aU]];}var bd=0;for(var aU=0;aU<aV;aU++){bd+=aY[aU]*bs[aU];}return(bd+0.5)|0;}}}}}};aG._$br=function(ba,bo,bp,bg){var a1=bo._$Q2(ba,bp);var a2=ba._$vs();var a9=ba._$Tr();bo._$zr(a2,a9,a1);if(a1<=0){return bg[a2[0]];}else{if(a1==1){var bj=bg[a2[0]];var bi=bg[a2[1]];var a8=a9[0];return bj+(bi-bj)*a8;}else{if(a1==2){var bj=bg[a2[0]];var bi=bg[a2[1]];var a0=bg[a2[2]];var aZ=bg[a2[3]];var a8=a9[0];var a7=a9[1];return(1-a7)*(bj+(bi-bj)*a8)+a7*(a0+(aZ-a0)*a8);}else{if(a1==3){var aP=bg[a2[0]];var aO=bg[a2[1]];var bn=bg[a2[2]];var bm=bg[a2[3]];var aK=bg[a2[4]];var aJ=bg[a2[5]];var bf=bg[a2[6]];var be=bg[a2[7]];var a8=a9[0];var a7=a9[1];var a5=a9[2];return(1-a5)*((1-a7)*(aP+(aO-aP)*a8)+a7*(bn+(bm-bn)*a8))+a5*((1-a7)*(aK+(aJ-aK)*a8)+a7*(bf+(be-bf)*a8));}else{if(a1==4){var aT=bg[a2[0]];var aS=bg[a2[1]];var bs=bg[a2[2]];var br=bg[a2[3]];var aN=bg[a2[4]];var aM=bg[a2[5]];var bl=bg[a2[6]];var bk=bg[a2[7]];var bd=bg[a2[8]];var bb=bg[a2[9]];var aX=bg[a2[10]];var aW=bg[a2[11]];var a6=bg[a2[12]];var a4=bg[a2[13]];var aR=bg[a2[14]];var aQ=bg[a2[15]];var a8=a9[0];var a7=a9[1];var a5=a9[2];var a3=a9[3];return(1-a3)*((1-a5)*((1-a7)*(aT+(aS-aT)*a8)+a7*(bs+(br-bs)*a8))+a5*((1-a7)*(aN+(aM-aN)*a8)+a7*(bl+(bk-bl)*a8)))+a3*((1-a5)*((1-a7)*(bd+(bb-bd)*a8)+a7*(aX+(aW-aX)*a8))+a5*((1-a7)*(a6+(a4-a6)*a8)+a7*(aR+(aQ-aR)*a8)));}else{var aV=1<<a1;var aY=new Float32Array(aV);for(var bh=0;bh<aV;bh++){var aI=bh;var aH=1;for(var aL=0;aL<a1;aL++){aH*=(aI%2==0)?(1-a9[aL]):a9[aL];aI/=2;}aY[bh]=aH;}var bq=new Float32Array(aV);for(var aU=0;aU<aV;aU++){bq[aU]=bg[a2[aU]];}var bc=0;for(var aU=0;aU<aV;aU++){bc+=aY[aU]*bq[aU];}return bc;}}}}}};aG._$Vr=function(bV,bW,a5,aI,bC,a3,bX,bH){var aN=bW._$Q2(bV,a5);var bw=bV._$vs();var a2=bV._$Tr();bW._$zr(bw,a2,aN);var aJ=aI*2;var aQ=bX;if(aN<=0){var bI=bw[0];var bq=bC[bI];if(bH==2&&bX==0){P._$jT(bq,0,a3,0,aJ);}else{for(var bt=0;bt<aJ;){a3[aQ]=bq[bt++];a3[aQ+1]=bq[bt++];aQ+=bH;}}}else{if(aN==1){var bq=bC[bw[0]];var bp=bC[bw[1]];var b3=a2[0];var bT=1-b3;for(var bt=0;bt<aJ;){a3[aQ]=bq[bt]*bT+bp[bt]*b3;++bt;a3[aQ+1]=bq[bt]*bT+bp[bt]*b3;++bt;aQ+=bH;}}else{if(aN==2){var bq=bC[bw[0]];var bp=bC[bw[1]];var aZ=bC[bw[2]];var aY=bC[bw[3]];var b3=a2[0];var b1=a2[1];var bT=1-b3;var bP=1-b1;var b2=bP*bT;var b0=bP*b3;var bM=b1*bT;var bL=b1*b3;for(var bt=0;bt<aJ;){a3[aQ]=b2*bq[bt]+b0*bp[bt]+bM*aZ[bt]+bL*aY[bt];++bt;a3[aQ+1]=b2*bq[bt]+b0*bp[bt]+bM*aZ[bt]+bL*aY[bt];++bt;aQ+=bH;}}else{if(aN==3){var ba=bC[bw[0]];var a9=bC[bw[1]];var aP=bC[bw[2]];var aO=bC[bw[3]];var a6=bC[bw[4]];var a4=bC[bw[5]];var aL=bC[bw[6]];var aK=bC[bw[7]];var b3=a2[0];var b1=a2[1];var bZ=a2[2];var bT=1-b3;var bP=1-b1;var bN=1-bZ;var b8=bN*bP*bT;var b7=bN*bP*b3;var bU=bN*b1*bT;var bS=bN*b1*b3;var b6=bZ*bP*bT;var b5=bZ*bP*b3;var bQ=bZ*b1*bT;var bO=bZ*b1*b3;for(var bt=0;bt<aJ;){a3[aQ]=b8*ba[bt]+b7*a9[bt]+bU*aP[bt]+bS*aO[bt]+b6*a6[bt]+b5*a4[bt]+bQ*aL[bt]+bO*aK[bt];++bt;a3[aQ+1]=b8*ba[bt]+b7*a9[bt]+bU*aP[bt]+bS*aO[bt]+b6*a6[bt]+b5*a4[bt]+bQ*aL[bt]+bO*aK[bt];++bt;aQ+=bH;}}else{if(aN==4){var bD=bC[bw[0]];var bB=bC[bw[1]];var bo=bC[bw[2]];var bm=bC[bw[3]];var by=bC[bw[4]];var bx=bC[bw[5]];var be=bC[bw[6]];var bd=bC[bw[7]];var bG=bC[bw[8]];var bE=bC[bw[9]];var bv=bC[bw[10]];var bu=bC[bw[11]];var bA=bC[bw[12]];var bz=bC[bw[13]];var bn=bC[bw[14]];var bl=bC[bw[15]];var b3=a2[0];var b1=a2[1];var bZ=a2[2];var bY=a2[3];var bT=1-b3;var bP=1-b1;var bN=1-bZ;var bK=1-bY;var bk=bK*bN*bP*bT;var bi=bK*bN*bP*b3;var aW=bK*bN*b1*bT;var aV=bK*bN*b1*b3;var bc=bK*bZ*bP*bT;var bb=bK*bZ*bP*b3;var aS=bK*bZ*b1*bT;var aR=bK*bZ*b1*b3;var bs=bY*bN*bP*bT;var br=bY*bN*bP*b3;var a1=bY*bN*b1*bT;var a0=bY*bN*b1*b3;var bh=bY*bZ*bP*bT;var bf=bY*bZ*bP*b3;var aU=bY*bZ*b1*bT;var aT=bY*bZ*b1*b3;for(var bt=0;bt<aJ;){a3[aQ]=bk*bD[bt]+bi*bB[bt]+aW*bo[bt]+aV*bm[bt]+bc*by[bt]+bb*bx[bt]+aS*be[bt]+aR*bd[bt]+bs*bG[bt]+br*bE[bt]+a1*bv[bt]+a0*bu[bt]+bh*bA[bt]+bf*bz[bt]+aU*bn[bt]+aT*bl[bt];++bt;a3[aQ+1]=bk*bD[bt]+bi*bB[bt]+aW*bo[bt]+aV*bm[bt]+bc*by[bt]+bb*bx[bt]+aS*be[bt]+aR*bd[bt]+bs*bG[bt]+br*bE[bt]+a1*bv[bt]+a0*bu[bt]+bh*bA[bt]+bf*bz[bt]+aU*bn[bt]+aT*bl[bt];++bt;aQ+=bH;}}else{var b4=1<<aN;var bJ=new Float32Array(b4);for(var bj=0;bj<b4;bj++){var aH=bj;var aM=1;for(var bF=0;bF<aN;bF++){aM*=(aH%2==0)?(1-a2[bF]):a2[bF];aH/=2;}bJ[bj]=aM;}var bg=new Float32Array(b4);for(var aX=0;aX<b4;aX++){bg[aX]=bC[bw[aX]];}for(var bt=0;bt<aJ;){var a8=0,a7=0;var bR=bt+1;for(var aX=0;aX<b4;aX++){a8+=bJ[aX]*bg[aX][bt];a7+=bJ[aX]*bg[aX][bR];}bt+=2;a3[aQ]=a8;a3[aQ+1]=a7;aQ+=bH;}}}}}}};function e(){if(j){return;}this.x=null;this.y=null;}e.prototype._$HT=function(aH,aI){this.x=aH;this.y=aI;};e.prototype._$HT=function(aH){this.x=aH.x;this.y=aH.y;};function ae(){if(j){return;}this._$gP=null;this._$dr=null;this._$GS=null;this._$qb=null;this._$Lb=null;this._$mS=null;this.clipID=null;this.clipIDList=new Array();}ae._$ur=-2;ae._$ES=500;ae._$wb=2;ae._$8S=3;ae._$52=ae._$ES;ae._$R2=ae._$ES;ae._$or=function(){return ae._$52;};ae._$Pr=function(){return ae._$R2;};ae.prototype.convertClipIDForV2_11=function(aI){var aH=[];if(aI==null){return null;}if(aI.length==0){return null;}if(!/,/.test(aI)){aH.push(aI.id);return aH;}aH=aI.id.split(",");return aH;};ae.prototype._$F0=function(aH){this._$gP=aH._$nP();this._$dr=aH._$nP();this._$GS=aH._$nP();this._$qb=aH._$6L();this._$Lb=aH._$cS();this._$mS=aH._$Tb();if(aH.getFormatVersion()>=ay._$T7){this.clipID=aH._$nP();this.clipIDList=this.convertClipIDForV2_11(this.clipID);}else{this.clipIDList=[];}this._$MS(this._$Lb);};ae.prototype.getClipIDList=function(){return this.clipIDList;};ae.prototype.init=function(aH){};ae.prototype._$Nr=function(aH,aI){aI._$IS[0]=false;aI._$Us=aG._$Z2(aH,this._$GS,aI._$IS,this._$Lb);if(Q._$Zs){}else{if(aI._$IS[0]){return;}}aI._$7s=aG._$br(aH,this._$GS,aI._$IS,this._$mS);};ae.prototype._$2b=function(aH,aI){};ae.prototype.getDrawDataID=function(){return this._$gP;};ae.prototype._$j2=function(aH){this._$gP=aH;};ae.prototype.getOpacity=function(aH,aI){return aI._$7s;};ae.prototype._$zS=function(aH,aI){return aI._$Us;};ae.prototype._$MS=function(aJ){for(var aI=aJ.length-1;aI>=0;--aI){var aH=aJ[aI];if(aH<ae._$52){ae._$52=aH;}else{if(aH>ae._$R2){ae._$R2=aH;}}}};ae.prototype.getTargetBaseDataID=function(){return this._$dr;};ae.prototype._$gs=function(aH){this._$dr=aH;};ae.prototype._$32=function(){return(this._$dr!=null&&(this._$dr!=n._$2o()));};ae.prototype.preDraw=function(aJ,aH,aI){};ae.prototype.draw=function(aJ,aH,aI){};ae.prototype.getType=function(){};ae.prototype._$B2=function(aI,aH,aJ){};function ax(){if(j){return;}this._$Eb=ax._$ps;this._$lT=1;this._$C0=1;this._$tT=1;this._$WL=1;this.culling=false;this.matrix4x4=new Float32Array(16);this.premultipliedAlpha=false;this.anisotropy=0;this.clippingProcess=ax.CLIPPING_PROCESS_NONE;this.clipBufPre_clipContextMask=null;this.clipBufPre_clipContextDraw=null;this.CHANNEL_COLORS=new Array();}ax._$ps=32;ax.CLIPPING_PROCESS_NONE=0;ax.CLIPPING_PROCESS_OVERWRITE_ALPHA=1;ax.CLIPPING_PROCESS_MULTIPLY_ALPHA=2;ax.CLIPPING_PROCESS_DRAW=3;ax.CLIPPING_PROCESS_CLEAR_ALPHA=4;ax.prototype.setChannelFlagAsColor=function(aH,aI){this.CHANNEL_COLORS[aH]=aI;};ax.prototype.getChannelFlagAsColor=function(aH){return this.CHANNEL_COLORS[aH];};ax.prototype._$ZT=function(){};ax.prototype._$Uo=function(aM,aK,aJ,aL,aN,aI,aH){};ax.prototype._$Rs=function(){return -1;};ax.prototype._$Ds=function(aH){};ax.prototype.setBaseColor=function(aK,aJ,aI,aH){if(aK<0){aK=0;}else{if(aK>1){aK=1;}}if(aJ<0){aJ=0;}else{if(aJ>1){aJ=1;}}if(aI<0){aI=0;}else{if(aI>1){aI=1;}}if(aH<0){aH=0;}else{if(aH>1){aH=1;}}this._$lT=aK;this._$C0=aJ;this._$tT=aI;this._$WL=aH;};ax.prototype._$WP=function(aH){this.culling=aH;};ax.prototype.setMatrix=function(aH){for(var aI=0;aI<16;aI++){this.matrix4x4[aI]=aH[aI];}};ax.prototype._$IT=function(){return this.matrix4x4;};ax.prototype.setPremultipliedAlpha=function(aH){this.premultipliedAlpha=aH;};ax.prototype.isPremultipliedAlpha=function(){return this.premultipliedAlpha;};ax.prototype.setAnisotropy=function(aH){this.anisotropy=aH;};ax.prototype.getAnisotropy=function(){return this.anisotropy;};ax.prototype.getClippingProcess=function(){return this.clippingProcess;};ax.prototype.setClippingProcess=function(aH){this.clippingProcess=aH;};ax.prototype.setClipBufPre_clipContextForMask=function(aH){this.clipBufPre_clipContextMask=aH;};ax.prototype.getClipBufPre_clipContextMask=function(){return this.clipBufPre_clipContextMask;};ax.prototype.setClipBufPre_clipContextForDraw=function(aH){this.clipBufPre_clipContextDraw=aH;};ax.prototype.getClipBufPre_clipContextDraw=function(){return this.clipBufPre_clipContextDraw;};function o(){if(j){return;}this.a=1;this.r=1;this.g=1;this.b=1;this.scale=1;this._$ho=1;this.blendMode=Q.L2D_COLOR_BLEND_MODE_MULT;}function c(){if(j){return;}this._$kP=null;this._$dr=null;this._$Ai=true;this._$mS=null;}c._$ur=-2;c._$c2=1;c._$_b=2;c.prototype._$F0=function(aH){this._$kP=aH._$nP();this._$dr=aH._$nP();};c.prototype.readV2_opacity=function(aH){if(aH.getFormatVersion()>=ay.LIVE2D_FORMAT_VERSION_V2_10_SDK2){this._$mS=aH._$Tb();}};c.prototype.init=function(aH){};c.prototype._$Nr=function(aI,aH){};c.prototype.interpolateOpacity=function(aJ,aK,aI,aH){if(this._$mS==null){aI.setInterpolatedOpacity(1);}else{aI.setInterpolatedOpacity(aG._$br(aJ,aK,aH,this._$mS));}};c.prototype._$2b=function(aI,aH){};c.prototype._$nb=function(aL,aK,aM,aH,aI,aJ,aN){};c.prototype.getType=function(){};c.prototype._$gs=function(aH){this._$dr=aH;};c.prototype._$a2=function(aH){this._$kP=aH;};c.prototype.getTargetBaseDataID=function(){return this._$dr;};c.prototype.getBaseDataID=function(){return this._$kP;};c.prototype._$32=function(){return(this._$dr!=null&&(this._$dr!=n._$2o()));};function P(){}P._$W2=0;P._$CS=P._$W2;P._$Mo=function(){return true;};P._$XP=function(aI){try{var aJ=getTimeMSec();while(getTimeMSec()-aJ<aI){}}catch(aH){aH._$Rb();}};P.getUserTimeMSec=function(){return(P._$CS==P._$W2)?P.getSystemTimeMSec():P._$CS;};P.setUserTimeMSec=function(aH){P._$CS=aH;};P.updateUserTimeMSec=function(){return(P._$CS=P.getSystemTimeMSec());};P.getTimeMSec=function(){return new Date().getTime();};P.getSystemTimeMSec=function(){return new Date().getTime();};P._$Q=function(aH){};P._$jT=function(aM,aJ,aI,aL,aH){for(var aK=0;aK<aH;aK++){aI[aL+aK]=aM[aJ+aK];}};function aA(){if(j){return;}this._$VP=0;this._$wL=null;this._$GP=null;this._$8o=aA._$ds;this._$2r=-1;this._$O2=0;this._$ri=0;}aA._$ds=-2;aA.prototype._$F0=function(aH){this._$wL=aH._$nP();this._$VP=aH._$6L();this._$GP=aH._$nP();};aA.prototype.getParamIndex=function(aH){if(this._$2r!=aH){this._$8o=aA._$ds;}return this._$8o;};aA.prototype._$Pb=function(aI,aH){this._$8o=aI;this._$2r=aH;};aA.prototype.getParamID=function(){return this._$wL;};aA.prototype._$yP=function(aH){this._$wL=aH;};aA.prototype._$N2=function(){return this._$VP;};aA.prototype._$d2=function(){return this._$GP;};aA.prototype._$t2=function(aI,aH){this._$VP=aI;this._$GP=aH;};aA.prototype._$Lr=function(){return this._$O2;};aA.prototype._$wr=function(aH){this._$O2=aH;};aA.prototype._$SL=function(){return this._$ri;};aA.prototype._$AL=function(aH){this._$ri=aH;};function G(){}G.startsWith=function(aJ,aL,aK){var aH=aL+aK.length;if(aH>=aJ.length){return false;}for(var aI=aL;aI<aH;aI++){if(G.getChar(aJ,aI)!=aK.charAt(aI-aL)){return false;}}return true;};G.getChar=function(aI,aH){return String.fromCharCode(aI.getUint8(aH));};G.createString=function(aM,aL,aJ){var aH=new ArrayBuffer(aJ*2);var aK=new Uint16Array(aH);for(var aI=0;aI<aJ;aI++){aK[aI]=aM.getUint8(aL+aI);}return String.fromCharCode.apply(null,aK);};G._$LS=function(aP,aM,aR,aK){if(aP instanceof ArrayBuffer){aP=new DataView(aP);}var aL=aR;var aJ=false;var aQ=false;var aS=0;var aO=G.getChar(aP,aL);if(aO=="-"){aJ=true;aL++;}var aN=false;for(;aL<aM;aL++){aO=G.getChar(aP,aL);switch(aO){case"0":aS=aS*10;break;case"1":aS=aS*10+1;break;case"2":aS=aS*10+2;break;case"3":aS=aS*10+3;break;case"4":aS=aS*10+4;break;case"5":aS=aS*10+5;break;case"6":aS=aS*10+6;break;case"7":aS=aS*10+7;break;case"8":aS=aS*10+8;break;case"9":aS=aS*10+9;break;case".":aQ=true;aL++;aN=true;break;default:aN=true;break;}if(aN){break;}}if(aQ){var aI=0.1;var aH=false;for(;aL<aM;aL++){aO=G.getChar(aP,aL);switch(aO){case"0":break;case"1":aS+=aI*1;break;case"2":aS+=aI*2;break;case"3":aS+=aI*3;break;case"4":aS+=aI*4;break;case"5":aS+=aI*5;break;case"6":aS+=aI*6;break;case"7":aS+=aI*7;break;case"8":aS+=aI*8;break;case"9":aS+=aI*9;break;default:aH=true;break;}aI*=0.1;if(aH){break;}}}if(aJ){aS=-aS;}aK[0]=aL;return aS;};function g(){if(j){return;}this._$Ob=null;}g.prototype._$zP=function(){this._$Ob=new Array();};g.prototype._$F0=function(aH){this._$Ob=aH._$nP();};g.prototype._$Ur=function(aK){if(aK._$WS()){return true;}var aH=aK._$v2();for(var aJ=this._$Ob.length-1;aJ>=0;--aJ){var aI=this._$Ob[aJ].getParamIndex(aH);if(aI==aA._$ds){aI=aK.getParamIndex(this._$Ob[aJ].getParamID());}if(aK._$Xb(aI)){return true;}}return false;};g.prototype._$Q2=function(aL,aV){var aX=this._$Ob.length;var aJ=aL._$v2();var aN=0;var aI;var aQ;for(var aK=0;aK<aX;aK++){var aH=this._$Ob[aK];aI=aH.getParamIndex(aJ);if(aI==aA._$ds){aI=aL.getParamIndex(aH.getParamID());aH._$Pb(aI,aJ);}if(aI<0){throw new Exception("err 23242 : "+aH.getParamID());}var aU=aI<0?0:aL.getParamFloat(aI);aQ=aH._$N2();var aM=aH._$d2();var aP=-1;var aT=0;var aS;var aR;if(aQ<1){}else{if(aQ==1){aS=aM[0];if(aS-aw._$J<aU&&aU<aS+aw._$J){aP=0;aT=0;}else{aP=0;aV[0]=true;}}else{aS=aM[0];if(aU<aS-aw._$J){aP=0;aV[0]=true;}else{if(aU<aS+aw._$J){aP=0;}else{var aW=false;for(var aO=1;aO<aQ;++aO){aR=aM[aO];if(aU<aR+aw._$J){if(aR-aw._$J<aU){aP=aO;}else{aP=aO-1;aT=(aU-aS)/(aR-aS);aN++;}aW=true;break;}aS=aR;}if(!aW){aP=aQ-1;aT=0;aV[0]=true;}}}}}aH._$wr(aP);aH._$AL(aT);}return aN;};g.prototype._$zr=function(aN,aT,aP){var aR=1<<aP;if(aR+1>aw._$Qb){__NONECONSOLE.log("err 23245\\n");}var aS=this._$Ob.length;var aK=1;var aH=1;var aJ=0;for(var aQ=0;aQ<aR;++aQ){aN[aQ]=0;}for(var aL=0;aL<aS;++aL){var aI=this._$Ob[aL];if(aI._$SL()==0){var aO=aI._$Lr()*aK;if(aO<0&&Q._$3T){throw new Exception("err 23246");}for(var aQ=0;aQ<aR;++aQ){aN[aQ]+=aO;}}else{var aO=aK*aI._$Lr();var aM=aK*(aI._$Lr()+1);for(var aQ=0;aQ<aR;++aQ){aN[aQ]+=((aQ/aH|0)%2==0)?aO:aM;}aT[aJ++]=aI._$SL();aH*=2;}aK*=aI._$N2();}aN[aR]=65535;aT[aJ]=-1;};g.prototype._$h2=function(aJ,aH,aK){var aM=new Float32Array(aH);for(var aL=0;aL<aH;++aL){aM[aL]=aK[aL];}var aI=new aA();aI._$yP(aJ);aI._$t2(aH,aM);this._$Ob.push(aI);};g.prototype._$J2=function(aO){var aN=aO;var aM=this._$Ob.length;for(var aK=0;aK<aM;++aK){var aI=this._$Ob[aK];var aH=aI._$N2();var aJ=aN%aI._$N2();var aL=aI._$d2()[aJ];__NONECONSOLE.log("%s[%d]=%7.2f / ",aI.getParamID(),aJ,aL);aN/=aH;}__NONECONSOLE.log("\\n");};g.prototype.getParamCount=function(){return this._$Ob.length;};g.prototype._$zs=function(){return this._$Ob;};function ac(){this.m=new Float32Array(16);this.identity();}ac.prototype.identity=function(){for(var aH=0;aH<16;aH++){this.m[aH]=((aH%5)==0)?1:0;}};ac.prototype.getArray=function(){return this.m;};ac.prototype.getCopyMatrix=function(){return new Float32Array(this.m);};ac.prototype.setMatrix=function(aI){if(aI==null||aI.length!=16){return;}for(var aH=0;aH<16;aH++){this.m[aH]=aI[aH];}};ac.prototype.mult=function(aH,aJ,aI){if(aJ==null){return null;}if(this==aJ){this.mult_safe(this.m,aH.m,aJ.m,aI);}else{this.mult_fast(this.m,aH.m,aJ.m,aI);}return aJ;};ac.prototype.mult_safe=function(aI,aH,aM,aJ){if(aI==aM){var aL=new Array(16);this.mult_fast(aI,aH,aL,aJ);for(var aK=15;aK>=0;--aK){aM[aK]=aL[aK];}}else{this.mult_fast(aI,aH,aM,aJ);}};ac.prototype.mult_fast=function(aI,aH,aK,aJ){if(aJ){aK[0]=aI[0]*aH[0]+aI[4]*aH[1]+aI[8]*aH[2];aK[4]=aI[0]*aH[4]+aI[4]*aH[5]+aI[8]*aH[6];aK[8]=aI[0]*aH[8]+aI[4]*aH[9]+aI[8]*aH[10];aK[12]=aI[0]*aH[12]+aI[4]*aH[13]+aI[8]*aH[14]+aI[12];aK[1]=aI[1]*aH[0]+aI[5]*aH[1]+aI[9]*aH[2];aK[5]=aI[1]*aH[4]+aI[5]*aH[5]+aI[9]*aH[6];aK[9]=aI[1]*aH[8]+aI[5]*aH[9]+aI[9]*aH[10];aK[13]=aI[1]*aH[12]+aI[5]*aH[13]+aI[9]*aH[14]+aI[13];aK[2]=aI[2]*aH[0]+aI[6]*aH[1]+aI[10]*aH[2];aK[6]=aI[2]*aH[4]+aI[6]*aH[5]+aI[10]*aH[6];aK[10]=aI[2]*aH[8]+aI[6]*aH[9]+aI[10]*aH[10];aK[14]=aI[2]*aH[12]+aI[6]*aH[13]+aI[10]*aH[14]+aI[14];aK[3]=aK[7]=aK[11]=0;aK[15]=1;}else{aK[0]=aI[0]*aH[0]+aI[4]*aH[1]+aI[8]*aH[2]+aI[12]*aH[3];aK[4]=aI[0]*aH[4]+aI[4]*aH[5]+aI[8]*aH[6]+aI[12]*aH[7];aK[8]=aI[0]*aH[8]+aI[4]*aH[9]+aI[8]*aH[10]+aI[12]*aH[11];aK[12]=aI[0]*aH[12]+aI[4]*aH[13]+aI[8]*aH[14]+aI[12]*aH[15];aK[1]=aI[1]*aH[0]+aI[5]*aH[1]+aI[9]*aH[2]+aI[13]*aH[3];aK[5]=aI[1]*aH[4]+aI[5]*aH[5]+aI[9]*aH[6]+aI[13]*aH[7];aK[9]=aI[1]*aH[8]+aI[5]*aH[9]+aI[9]*aH[10]+aI[13]*aH[11];aK[13]=aI[1]*aH[12]+aI[5]*aH[13]+aI[9]*aH[14]+aI[13]*aH[15];aK[2]=aI[2]*aH[0]+aI[6]*aH[1]+aI[10]*aH[2]+aI[14]*aH[3];aK[6]=aI[2]*aH[4]+aI[6]*aH[5]+aI[10]*aH[6]+aI[14]*aH[7];aK[10]=aI[2]*aH[8]+aI[6]*aH[9]+aI[10]*aH[10]+aI[14]*aH[11];aK[14]=aI[2]*aH[12]+aI[6]*aH[13]+aI[10]*aH[14]+aI[14]*aH[15];aK[3]=aI[3]*aH[0]+aI[7]*aH[1]+aI[11]*aH[2]+aI[15]*aH[3];aK[7]=aI[3]*aH[4]+aI[7]*aH[5]+aI[11]*aH[6]+aI[15]*aH[7];aK[11]=aI[3]*aH[8]+aI[7]*aH[9]+aI[11]*aH[10]+aI[15]*aH[11];aK[15]=aI[3]*aH[12]+aI[7]*aH[13]+aI[11]*aH[14]+aI[15]*aH[15];}};ac.prototype.translate=function(aH,aJ,aI){this.m[12]=this.m[0]*aH+this.m[4]*aJ+this.m[8]*aI+this.m[12];this.m[13]=this.m[1]*aH+this.m[5]*aJ+this.m[9]*aI+this.m[13];this.m[14]=this.m[2]*aH+this.m[6]*aJ+this.m[10]*aI+this.m[14];this.m[15]=this.m[3]*aH+this.m[7]*aJ+this.m[11]*aI+this.m[15];};ac.prototype.scale=function(aJ,aI,aH){this.m[0]*=aJ;this.m[4]*=aI;this.m[8]*=aH;this.m[1]*=aJ;this.m[5]*=aI;this.m[9]*=aH;this.m[2]*=aJ;this.m[6]*=aI;this.m[10]*=aH;this.m[3]*=aJ;this.m[7]*=aI;this.m[11]*=aH;};ac.prototype.rotateX=function(aH){var aK=aC.fcos(aH);var aJ=aC._$9(aH);var aI=this.m[4];this.m[4]=aI*aK+this.m[8]*aJ;this.m[8]=aI*-aJ+this.m[8]*aK;aI=this.m[5];this.m[5]=aI*aK+this.m[9]*aJ;this.m[9]=aI*-aJ+this.m[9]*aK;aI=this.m[6];this.m[6]=aI*aK+this.m[10]*aJ;this.m[10]=aI*-aJ+this.m[10]*aK;aI=this.m[7];this.m[7]=aI*aK+this.m[11]*aJ;this.m[11]=aI*-aJ+this.m[11]*aK;};ac.prototype.rotateY=function(aH){var aK=aC.fcos(aH);var aJ=aC._$9(aH);var aI=this.m[0];this.m[0]=aI*aK+this.m[8]*-aJ;this.m[8]=aI*aJ+this.m[8]*aK;aI=this.m[1];this.m[1]=aI*aK+this.m[9]*-aJ;this.m[9]=aI*aJ+this.m[9]*aK;aI=m[2];this.m[2]=aI*aK+this.m[10]*-aJ;this.m[10]=aI*aJ+this.m[10]*aK;aI=m[3];this.m[3]=aI*aK+this.m[11]*-aJ;this.m[11]=aI*aJ+this.m[11]*aK;};ac.prototype.rotateZ=function(aH){var aK=aC.fcos(aH);var aJ=aC._$9(aH);var aI=this.m[0];this.m[0]=aI*aK+this.m[4]*aJ;this.m[4]=aI*-aJ+this.m[4]*aK;aI=this.m[1];this.m[1]=aI*aK+this.m[5]*aJ;this.m[5]=aI*-aJ+this.m[5]*aK;aI=this.m[2];this.m[2]=aI*aK+this.m[6]*aJ;this.m[6]=aI*-aJ+this.m[6]*aK;aI=this.m[3];this.m[3]=aI*aK+this.m[7]*aJ;this.m[7]=aI*-aJ+this.m[7]*aK;};function Z(aH){if(j){return;}ak.prototype.constructor.call(this,aH);}Z.prototype=new ak();Z._$tP=new Object();Z._$27=function(){Z._$tP.clear();};Z.getID=function(aH){var aI=Z._$tP[aH];if(aI==null){aI=new Z(aH);Z._$tP[aH]=aI;}return aI;};Z.prototype._$3s=function(){return new Z();};function aD(){if(j){return;}this._$7=1;this._$f=0;this._$H=0;this._$g=1;this._$k=0;this._$w=0;this._$hi=STATE_IDENTITY;this._$Z=_$pS;}aD._$kS=-1;aD._$pS=0;aD._$hb=1;aD.STATE_IDENTITY=0;aD._$gb=1;aD._$fo=2;aD._$go=4;aD.prototype.transform=function(aK,aI,aH){var aT,aS,aR,aM,aL,aJ;var aQ=0;var aN=0;switch(this._$hi){default:return;case (aD._$go|aD._$fo|aD._$gb):aT=this._$7;aS=this._$H;aR=this._$k;aM=this._$f;aL=this._$g;aJ=this._$w;while(--aH>=0){var aP=aK[aQ++];var aO=aK[aQ++];aI[aN++]=(aT*aP+aS*aO+aR);aI[aN++]=(aM*aP+aL*aO+aJ);}return;case (aD._$go|aD._$fo):aT=this._$7;aS=this._$H;aM=this._$f;aL=this._$g;while(--aH>=0){var aP=aK[aQ++];var aO=aK[aQ++];aI[aN++]=(aT*aP+aS*aO);aI[aN++]=(aM*aP+aL*aO);}return;case (aD._$go|aD._$gb):aS=this._$H;aR=this._$k;aM=this._$f;aJ=this._$w;while(--aH>=0){var aP=aK[aQ++];aI[aN++]=(aS*aK[aQ++]+aR);aI[aN++]=(aM*aP+aJ);}return;case (aD._$go):aS=this._$H;aM=this._$f;while(--aH>=0){var aP=aK[aQ++];aI[aN++]=(aS*aK[aQ++]);aI[aN++]=(aM*aP);}return;case (aD._$fo|aD._$gb):aT=this._$7;aR=this._$k;aL=this._$g;aJ=this._$w;while(--aH>=0){aI[aN++]=(aT*aK[aQ++]+aR);aI[aN++]=(aL*aK[aQ++]+aJ);}return;case (aD._$fo):aT=this._$7;aL=this._$g;while(--aH>=0){aI[aN++]=(aT*aK[aQ++]);aI[aN++]=(aL*aK[aQ++]);}return;case (aD._$gb):aR=this._$k;aJ=this._$w;while(--aH>=0){aI[aN++]=(aK[aQ++]+aR);aI[aN++]=(aK[aQ++]+aJ);}return;case (aD.STATE_IDENTITY):if(aK!=aI||aQ!=aN){P._$jT(aK,aQ,aI,aN,aH*2);}return;}};aD.prototype.update=function(){if(this._$H==0&&this._$f==0){if(this._$7==1&&this._$g==1){if(this._$k==0&&this._$w==0){this._$hi=aD.STATE_IDENTITY;this._$Z=aD._$pS;}else{this._$hi=aD._$gb;this._$Z=aD._$hb;}}else{if(this._$k==0&&this._$w==0){this._$hi=aD._$fo;this._$Z=aD._$kS;}else{this._$hi=(aD._$fo|aD._$gb);this._$Z=aD._$kS;}}}else{if(this._$7==0&&this._$g==0){if(this._$k==0&&this._$w==0){this._$hi=aD._$go;this._$Z=aD._$kS;}else{this._$hi=(aD._$go|aD._$gb);this._$Z=aD._$kS;}}else{if(this._$k==0&&this._$w==0){this._$hi=(aD._$go|aD._$fo);this._$Z=aD._$kS;}else{this._$hi=(aD._$go|aD._$fo|aD._$gb);this._$Z=aD._$kS;}}}};aD.prototype._$RT=function(aK){this._$IT(aK);var aJ=aK[0];var aH=aK[2];var aN=aK[1];var aM=aK[3];var aI=Math.sqrt(aJ*aJ+aN*aN);var aL=aJ*aM-aH*aN;if(aI==0){if(Q._$so){__NONECONSOLE.log("affine._$RT() / rt==0");}}else{aK[0]=aI;aK[1]=aL/aI;aK[2]=(aN*aM+aJ*aH)/aL;aK[3]=Math.atan2(aN,aJ);}};aD.prototype._$ho=function(aN,aM,aI,aH){var aL=new Float32Array(6);var aK=new Float32Array(6);aN._$RT(aL);aM._$RT(aK);var aJ=new Float32Array(6);aJ[0]=aL[0]+(aK[0]-aL[0])*aI;aJ[1]=aL[1]+(aK[1]-aL[1])*aI;aJ[2]=aL[2]+(aK[2]-aL[2])*aI;aJ[3]=aL[3]+(aK[3]-aL[3])*aI;aJ[4]=aL[4]+(aK[4]-aL[4])*aI;aJ[5]=aL[5]+(aK[5]-aL[5])*aI;aH._$CT(aJ);};aD.prototype._$CT=function(aJ){var aI=Math.cos(aJ[3]);var aH=Math.sin(aJ[3]);this._$7=aJ[0]*aI;this._$f=aJ[0]*aH;this._$H=aJ[1]*(aJ[2]*aI-aH);this._$g=aJ[1]*(aJ[2]*aH+aI);this._$k=aJ[4];this._$w=aJ[5];this.update();};aD.prototype._$IT=function(aH){aH[0]=this._$7;aH[1]=this._$f;aH[2]=this._$H;aH[3]=this._$g;aH[4]=this._$k;aH[5]=this._$w;};function Y(){if(j){return;}ah.prototype.constructor.call(this);this.motions=new Array();this._$7r=null;this._$7r=Y._$Co++;this._$D0=30;this._$yT=0;this._$E=true;this.loopFadeIn=true;this._$AS=-1;_$a0();}Y.prototype=new ah();Y._$cs="VISIBLE:";Y._$ar="LAYOUT:";Y._$Co=0;Y._$D2=[];Y._$1T=1;Y.loadMotion=function(aR){var aM=new Y();var aI=[0];var aP=aR.length;aM._$yT=0;for(var aJ=0;aJ<aP;++aJ){var aQ=(aR[aJ]&255);if(aQ=="\\n"||aQ=="\\r"){continue;}if(aQ=="#"){for(;aJ<aP;++aJ){if(aR[aJ]=="\\n"||aR[aJ]=="\\r"){break;}}continue;}if(aQ=="$"){var aT=aJ;var aK=-1;for(;aJ<aP;++aJ){aQ=(aR[aJ]&255);if(aQ=="\\r"||aQ=="\\n"){break;}if(aQ=="="){aK=aJ;break;}}var aO=false;if(aK>=0){if(aK==aT+4&&aR[aT+1]=="f"&&aR[aT+2]=="p"&&aR[aT+3]=="s"){aO=true;}for(aJ=aK+1;aJ<aP;++aJ){aQ=(aR[aJ]&255);if(aQ=="\\r"||aQ=="\\n"){break;}if(aQ==","||aQ==" "||aQ=="	"){continue;}var aL=G._$LS(aR,aP,aJ,aI);if(aI[0]>0){if(aO&&5<aL&&aL<121){aM._$D0=aL;}}aJ=aI[0];}}for(;aJ<aP;++aJ){if(aR[aJ]=="\\n"||aR[aJ]=="\\r"){break;}}continue;}if(("a"<=aQ&&aQ<="z")||("A"<=aQ&&aQ<="Z")||aQ=="_"){var aT=aJ;var aK=-1;for(;aJ<aP;++aJ){aQ=(aR[aJ]&255);if(aQ=="\\r"||aQ=="\\n"){break;}if(aQ=="="){aK=aJ;break;}}if(aK>=0){var aN=new t();if(G.startsWith(aR,aT,Y._$cs)){aN._$RP=t._$hs;aN._$4P=new String(aR,aT,aK-aT);}else{if(G.startsWith(aR,aT,Y._$ar)){aN._$4P=new String(aR,aT+7,aK-aT-7);if(G.startsWith(aR,aT+7,"ANCHOR_X")){aN._$RP=t._$xs;}else{if(G.startsWith(aR,aT+7,"ANCHOR_Y")){aN._$RP=t._$us;}else{if(G.startsWith(aR,aT+7,"SCALE_X")){aN._$RP=t._$qs;}else{if(G.startsWith(aR,aT+7,"SCALE_Y")){aN._$RP=t._$Ys;}else{if(G.startsWith(aR,aT+7,"X")){aN._$RP=t._$ws;}else{if(G.startsWith(aR,aT+7,"Y")){aN._$RP=t._$Ns;}}}}}}}else{aN._$RP=t._$Fr;aN._$4P=new String(aR,aT,aK-aT);}}aM.motions.push(aN);var aS=0;Y._$D2.clear();for(aJ=aK+1;aJ<aP;++aJ){aQ=(aR[aJ]&255);if(aQ=="\\r"||aQ=="\\n"){break;}if(aQ==","||aQ==" "||aQ=="	"){continue;}var aL=G._$LS(aR,aP,aJ,aI);if(aI[0]>0){Y._$D2.push(aL);aS++;var aH=aI[0];if(aH<aJ){__NONECONSOLE.log("_$n0 _$hi . @Live2DMotion loadMotion()\\n");break;}aJ=aH;}}aN._$I0=Y._$D2._$BL();if(aS>aM._$yT){aM._$yT=aS;}}}}aM._$AS=((1000*aM._$yT)/aM._$D0)|0;return aM;};Y.prototype.getDurationMSec=function(){return this._$AS;};Y.prototype.dump=function(){for(var aJ=0;aJ<this.motions.length;aJ++){var aH=this.motions[aJ];__NONECONSOLE.log("_$wL[%s] [%d]. ",aH._$4P,aH._$I0.length);for(var aI=0;aI<aH._$I0.length&&aI<10;aI++){__NONECONSOLE.log("%5.2f ,",aH._$I0[aI]);}__NONECONSOLE.log("\\n");}};Y.prototype.updateParamExe=function(aH,aL,aO,aX){var aM=aL-aX._$z2;var aV=aM*this._$D0/1000;var aJ=aV|0;var aP=aV-aJ;for(var aU=0;aU<this.motions.length;aU++){var aS=this.motions[aU];var aK=aS._$I0.length;var aQ=aS._$4P;if(aS._$RP==t._$hs){var aT=aS._$I0[(aJ>=aK?aK-1:aJ)];aH.setParamFloat(aQ,aT);}else{if(t._$ws<=aS._$RP&&aS._$RP<=t._$Ys){}else{var aR=aH.getParamFloat(aQ);var aY=aS._$I0[(aJ>=aK?aK-1:aJ)];var aW=aS._$I0[(aJ+1>=aK?aK-1:aJ+1)];var aI=aY+(aW-aY)*aP;var aN=aR+(aI-aR)*aO;aH.setParamFloat(aQ,aN);}}}if(aJ>=this._$yT){if(this._$E){aX._$z2=aL;if(this.loopFadeIn){aX._$bs=aL;}}else{aX._$9L=true;}}};Y.prototype._$r0=function(){return this._$E;};Y.prototype._$aL=function(aH){this._$E=aH;};Y.prototype.isLoopFadeIn=function(){return this.loopFadeIn;};Y.prototype.setLoopFadeIn=function(aH){this.loopFadeIn=aH;};function aE(){this._$P=new Float32Array(100);this.size=0;}aE.prototype.clear=function(){this.size=0;};aE.prototype.add=function(aI){if(this._$P.length<=this.size){var aH=new Float32Array(this.size*2);P._$jT(this._$P,0,aH,0,this.size);this._$P=aH;}this._$P[this.size++]=aI;};aE.prototype._$BL=function(){var aH=new Float32Array(this.size);P._$jT(this._$P,0,aH,0,this.size);return aH;};function t(){this._$4P=null;this._$I0=null;this._$RP=null;}t._$Fr=0;t._$hs=1;t._$ws=100;t._$Ns=101;t._$xs=102;t._$us=103;t._$qs=104;t._$Ys=105;function aw(){}aw._$Ms=1;aw._$Qs=2;aw._$i2=0;aw._$No=2;aw._$do=aw._$Ms;aw._$Ls=true;aw._$1r=5;aw._$Qb=65;aw._$J=0.0001;aw._$FT=0.001;aw._$Ss=3;function ay(){}ay._$o7=6;ay._$S7=7;ay._$s7=8;ay._$77=9;ay.LIVE2D_FORMAT_VERSION_V2_10_SDK2=10;ay.LIVE2D_FORMAT_VERSION_V2_11_SDK2_1=11;ay._$T7=ay.LIVE2D_FORMAT_VERSION_V2_11_SDK2_1;ay._$Is=-2004318072;ay._$h0=0;ay._$4L=23;ay._$7P=33;ay._$uT=function(aH){__NONECONSOLE.log("_$bo :: _$6 _$mo _$E0 : %d\\n",aH);};ay._$9o=function(aH){if(aH<40){ay._$uT(aH);return null;}else{if(aH<50){ay._$uT(aH);return null;}else{if(aH<60){ay._$uT(aH);return null;}else{if(aH<100){switch(aH){case 65:return new E();case 66:return new g();case 67:return new aA();case 68:return new ab();case 69:return new X();case 70:return new b();default:ay._$uT(aH);return null;}}else{if(aH<150){switch(aH){case 131:return new f();case 133:return new s();case 136:return new w();case 137:return new an();case 142:return new aq();}}}}}}ay._$uT(aH);return null;};function y(aH){if(j){return;}this._$QT=true;this._$co=-1;this._$qo=0;this._$pb=new Array(y._$is);this._$_2=new Float32Array(y._$is);this._$vr=new Float32Array(y._$is);this._$Rr=new Float32Array(y._$is);this._$Or=new Float32Array(y._$is);this._$fs=new Float32Array(y._$is);this._$Js=new Array(y._$is);this._$3S=new Array();this._$aS=new Array();this._$Bo=null;this._$F2=new Array();this._$db=new Array();this._$8b=new Array();this._$Hr=new Array();this._$Ws=null;this._$Vs=null;this._$Er=null;this._$Es=new Int16Array(aw._$Qb);this._$ZP=new Float32Array(aw._$1r*2);this._$Ri=aH;this._$b0=y._$HP++;this.clipManager=null;this.dp_webgl=null;}y._$HP=0;y._$_0=true;y._$V2=-1;y._$W0=-1;y._$jr=false;y._$ZS=true;y._$tr=(-1000000);y._$lr=(1000000);y._$is=32;y._$e=false;y.prototype.getDrawDataIndex=function(aI){for(var aH=this._$aS.length-1;aH>=0;--aH){if(this._$aS[aH]!=null&&this._$aS[aH].getDrawDataID()==aI){return aH;}}return -1;};y.prototype.getDrawData=function(aH){if(aH instanceof Z){if(this._$Bo==null){this._$Bo=new Object();var aJ=this._$aS.length;for(var aI=0;aI<aJ;aI++){var aL=this._$aS[aI];var aK=aL.getDrawDataID();if(aK==null){continue;}this._$Bo[aK]=aL;}}return this._$Bo[id];}else{if(aH<this._$aS.length){return this._$aS[aH];}else{return null;}}};y.prototype.release=function(){this._$3S.clear();this._$aS.clear();this._$F2.clear();if(this._$Bo!=null){this._$Bo.clear();}this._$db.clear();this._$8b.clear();this._$Hr.clear();};y.prototype.init=function(){this._$co++;if(this._$F2.length>0){this.release();}var aO=this._$Ri.getModelImpl();var aT=aO._$Xr();var aS=aT.length;var aH=new Array();var a3=new Array();for(var aV=0;aV<aS;++aV){var a4=aT[aV];this._$F2.push(a4);this._$Hr.push(a4.init(this));var aK=a4.getBaseData();var aR=aK.length;for(var aU=0;aU<aR;++aU){aH.push(aK[aU]);}for(var aU=0;aU<aR;++aU){var aM=aK[aU].init(this);aM._$l2(aV);a3.push(aM);}var a1=a4.getDrawData();var aP=a1.length;for(var aU=0;aU<aP;++aU){var aZ=a1[aU];var a0=aZ.init(this);a0._$IP=aV;this._$aS.push(aZ);this._$8b.push(a0);}}var aY=aH.length;var aN=n._$2o();while(true){var aX=false;for(var aV=0;aV<aY;++aV){var aL=aH[aV];if(aL==null){continue;}var a2=aL.getTargetBaseDataID();if(a2==null||a2==aN||this.getBaseDataIndex(a2)>=0){this._$3S.push(aL);this._$db.push(a3[aV]);aH[aV]=null;aX=true;}}if(!aX){break;}}var aI=aO._$E2();if(aI!=null){var aJ=aI._$1s();if(aJ!=null){var aW=aJ.length;for(var aV=0;aV<aW;++aV){var aQ=aJ[aV];if(aQ==null){continue;}this._$02(aQ.getParamID(),aQ.getDefaultValue(),aQ.getMinValue(),aQ.getMaxValue());}}}this.clipManager=new W(this.dp_webgl);this.clipManager.init(this,this._$aS,this._$8b);this._$QT=true;};y.prototype.update=function(){if(y._$e){q.start("_$zL");}var aK=this._$_2.length;for(var aW=0;aW<aK;aW++){if(this._$_2[aW]!=this._$vr[aW]){this._$Js[aW]=y._$ZS;this._$vr[aW]=this._$_2[aW];}}var aX=false;var aQ=this._$3S.length;var aN=this._$aS.length;var aS=a._$or();var aZ=a._$Pr();var aU=aZ-aS+1;if(this._$Ws==null||this._$Ws.length<aU){this._$Ws=new Int16Array(aU);this._$Vs=new Int16Array(aU);}for(var aW=0;aW<aU;aW++){this._$Ws[aW]=y._$V2;this._$Vs[aW]=y._$V2;}if(this._$Er==null||this._$Er.length<aN){this._$Er=new Int16Array(aN);}for(var aW=0;aW<aN;aW++){this._$Er[aW]=y._$W0;}if(y._$e){q.dump("_$zL");}if(y._$e){q.start("_$UL");}var aL=null;for(var aV=0;aV<aQ;++aV){var aJ=this._$3S[aV];var aH=this._$db[aV];try{aJ._$Nr(this,aH);aJ._$2b(this,aH);}catch(aY){if(aL==null){aL=aY;}}}if(aL!=null){if(y._$_0){q._$Rb(aL);}}if(y._$e){q.dump("_$UL");}if(y._$e){q.start("_$DL");}var aR=null;for(var aO=0;aO<aN;++aO){var aM=this._$aS[aO];var aI=this._$8b[aO];try{aM._$Nr(this,aI);if(aI._$u2()){continue;}aM._$2b(this,aI);var aT=Math.floor(aM._$zS(this,aI)-aS);var aP;try{aP=this._$Vs[aT];}catch(aY){__NONECONSOLE.log("_$li :: %s / %s 				@@_$fS\\n",aY.toString(),aM.getDrawDataID().toString());aT=Math.floor(aM._$zS(this,aI)-aS);continue;}if(aP==y._$V2){this._$Ws[aT]=aO;}else{this._$Er[aP]=aO;}this._$Vs[aT]=aO;}catch(aY){if(aR==null){aR=aY;Q._$sT(Q._$H7);}}}if(aR!=null){if(y._$_0){q._$Rb(aR);}}if(y._$e){q.dump("_$DL");}if(y._$e){q.start("_$eL");}for(var aW=this._$Js.length-1;aW>=0;aW--){this._$Js[aW]=y._$jr;}this._$QT=false;if(y._$e){q.dump("_$eL");}return aX;};y.prototype.preDraw=function(aH){if(this.clipManager!=null){aH._$ZT();this.clipManager.setupClip(this,aH);}};y.prototype.draw=function(aM){if(this._$Ws==null){q._$li("call _$Ri.update() before _$Ri.draw() ");return;}var aP=this._$Ws.length;aM._$ZT();for(var aK=0;aK<aP;++aK){var aN=this._$Ws[aK];if(aN==y._$V2){continue;}do{var aH=this._$aS[aN];var aI=this._$8b[aN];if(aI._$yo()){var aJ=aI._$IP;var aL=this._$Hr[aJ];aI._$VS=aL.getPartsOpacity();aH.draw(aM,this,aI);}var aO=this._$Er[aN];if(aO<=aN||aO==y._$W0){break;}aN=aO;}while(true);}};y.prototype.getParamIndex=function(aH){for(var aI=this._$pb.length-1;aI>=0;--aI){if(this._$pb[aI]==aH){return aI;}}return this._$02(aH,0,y._$tr,y._$lr);};y.prototype._$BS=function(aH){return this.getBaseDataIndex(aH);};y.prototype.getBaseDataIndex=function(aH){for(var aI=this._$3S.length-1;aI>=0;--aI){if(this._$3S[aI]!=null&&this._$3S[aI].getBaseDataID()==aH){return aI;}}return -1;};y.prototype._$UT=function(aJ,aH){var aI=new Float32Array(aH);P._$jT(aJ,0,aI,0,aJ.length);return aI;};y.prototype._$02=function(aN,aM,aL,aH){if(this._$qo>=this._$pb.length){var aK=this._$pb.length;var aJ=new Array(aK*2);P._$jT(this._$pb,0,aJ,0,aK);this._$pb=aJ;this._$_2=this._$UT(this._$_2,aK*2);this._$vr=this._$UT(this._$vr,aK*2);this._$Rr=this._$UT(this._$Rr,aK*2);this._$Or=this._$UT(this._$Or,aK*2);var aI=new Array();P._$jT(this._$Js,0,aI,0,aK);this._$Js=aI;}this._$pb[this._$qo]=aN;this._$_2[this._$qo]=aM;this._$vr[this._$qo]=aM;this._$Rr[this._$qo]=aL;this._$Or[this._$qo]=aH;this._$Js[this._$qo]=y._$ZS;return this._$qo++;};y.prototype._$Zo=function(aI,aH){this._$3S[aI]=aH;};y.prototype.setParamFloat=function(aH,aI){if(aI<this._$Rr[aH]){aI=this._$Rr[aH];}if(aI>this._$Or[aH]){aI=this._$Or[aH];}this._$_2[aH]=aI;};y.prototype.loadParam=function(){var aH=this._$_2.length;if(aH>this._$fs.length){aH=this._$fs.length;}P._$jT(this._$fs,0,this._$_2,0,aH);};y.prototype.saveParam=function(){var aH=this._$_2.length;if(aH>this._$fs.length){this._$fs=new Float32Array(aH);}P._$jT(this._$_2,0,this._$fs,0,aH);};y.prototype._$v2=function(){return this._$co;};y.prototype._$WS=function(){return this._$QT;};y.prototype._$Xb=function(aH){return this._$Js[aH]==y._$ZS;};y.prototype._$vs=function(){return this._$Es;};y.prototype._$Tr=function(){return this._$ZP;};y.prototype.getBaseData=function(aH){return this._$3S[aH];};y.prototype.getParamFloat=function(aH){return this._$_2[aH];};y.prototype.getParamMax=function(aH){return this._$Or[aH];};y.prototype.getParamMin=function(aH){return this._$Rr[aH];};y.prototype.setPartsOpacity=function(aJ,aH){var aI=this._$Hr[aJ];aI.setPartsOpacity(aH);};y.prototype.getPartsOpacity=function(aI){var aH=this._$Hr[aI];return aH.getPartsOpacity();};y.prototype.getPartsDataIndex=function(aI){for(var aH=this._$F2.length-1;aH>=0;--aH){if(this._$F2[aH]!=null&&this._$F2[aH]._$p2()==aI){return aH;}}return -1;};y.prototype._$q2=function(aH){return this._$db[aH];};y.prototype._$C2=function(aH){return this._$8b[aH];};y.prototype._$Bb=function(aH){return this._$Hr[aH];};y.prototype._$5s=function(aO,aK){var aJ=this._$Ws.length;var aN=aO;for(var aL=0;aL<aJ;++aL){var aI=this._$Ws[aL];if(aI==y._$V2){continue;}do{var aM=this._$8b[aI];if(aM._$yo()){aM._$GT()._$B2(this,aM,aN);aN+=aK;}var aH=this._$Er[aI];if(aH<=aI||aH==y._$W0){break;}aI=aH;}while(true);}};y.prototype.setDrawParam=function(aH){this.dp_webgl=aH;};y.prototype.getDrawParam=function(){return this.dp_webgl;};function ap(){}ap._$0T=function(aH){return ap._$0T(new _$5(aH));};ap._$0T=function(aJ){if(!aJ.exists()){throw new _$ls(aJ._$3b());}var aH=aJ.length();var aI=new Int8Array(aH);var aM=new _$Xs(new _$kb(aJ),8192);var aK;var aL=0;while((aK=aM.read(aI,aL,aH-aL))>0){aL+=aK;}return aI;};ap._$C=function(aJ){var aI=null;var aL=null;try{aI=(aJ instanceof Array)?aJ:new _$Xs(aJ,8192);aL=new _$js();var aM=1000;var aK;var aH=new Int8Array(aM);while((aK=aI.read(aH))>0){aL.write(aH,0,aK);}return aL._$TS();}finally{if(aJ!=null){aJ.close();}if(aL!=null){aL.flush();aL.close();}}};function ar(){if(j){return;}this._$12=null;this._$bb=null;this._$_L=null;this._$jo=null;this._$iL=null;this._$0L=null;this._$Br=null;this._$Dr=null;this._$Cb=null;this._$mr=null;this._$_L=az.STATE_FIRST;this._$Br=4000;this._$Dr=100;this._$Cb=50;this._$mr=150;this._$jo=true;this._$iL="PARAM_EYE_L_OPEN";this._$0L="PARAM_EYE_R_OPEN";}ar.prototype._$T2=function(){var aI=P.getUserTimeMSec();var aH=Math._$10();return(aI+aH*(2*this._$Br-1));};ar.prototype._$uo=function(aH){this._$Br=aH;};ar.prototype._$QS=function(aI,aH,aJ){this._$Dr=aI;this._$Cb=aH;this._$mr=aJ;};ar.prototype._$7T=function(aI){var aK=P.getUserTimeMSec();var aH;var aJ=0;switch(this._$_L){case STATE_CLOSING:aJ=(aK-this._$bb)/this._$Dr;if(aJ>=1){aJ=1;this._$_L=az.STATE_CLOSED;this._$bb=aK;}aH=1-aJ;break;case STATE_CLOSED:aJ=(aK-this._$bb)/this._$Cb;if(aJ>=1){this._$_L=az.STATE_OPENING;this._$bb=aK;}aH=0;break;case STATE_OPENING:aJ=(aK-this._$bb)/this._$mr;if(aJ>=1){aJ=1;this._$_L=az.STATE_INTERVAL;this._$12=this._$T2();}aH=aJ;break;case STATE_INTERVAL:if(this._$12<aK){this._$_L=az.STATE_CLOSING;this._$bb=aK;}aH=1;break;case STATE_FIRST:default:this._$_L=az.STATE_INTERVAL;this._$12=this._$T2();aH=1;break;}if(!this._$jo){aH=-aH;}aI.setParamFloat(this._$iL,aH);aI.setParamFloat(this._$0L,aH);};var az=function(){};az.STATE_FIRST="STATE_FIRST";az.STATE_INTERVAL="STATE_INTERVAL";az.STATE_CLOSING="STATE_CLOSING";az.STATE_CLOSED="STATE_CLOSED";az.STATE_OPENING="STATE_OPENING";function x(){if(j){return;}ax.prototype.constructor.call(this);this._$sb=new Int32Array(x._$As);this._$U2=new Array();this.transform=null;this.gl=null;if(x._$NT==null){x._$NT=x._$9r(256);x._$vS=x._$9r(256);x._$no=x._$vb(256);}}x.prototype=new ax();x._$As=32;x._$Gr=false;x._$NT=null;x._$vS=null;x._$no=null;x._$9r=function(aH){var aI=new Float32Array(aH);return aI;};x._$vb=function(aH){var aI=new Int16Array(aH);return aI;};x._$cr=function(aI,aH){if(aI==null||aI._$yL()<aH.length){aI=x._$9r(aH.length*2);aI.put(aH);aI._$oT(0);}else{aI.clear();aI.put(aH);aI._$oT(0);}return aI;};x._$mb=function(aI,aH){if(aI==null||aI._$yL()<aH.length){aI=x._$vb(aH.length*2);aI.put(aH);aI._$oT(0);}else{aI.clear();aI.put(aH);aI._$oT(0);}return aI;};x._$Hs=function(){return x._$Gr;};x._$as=function(aH){x._$Gr=aH;};x.prototype.setGL=function(aH){this.gl=aH;};x.prototype.setTransform=function(aH){this.transform=aH;};x.prototype._$ZT=function(){};x.prototype._$Uo=function(aO,aH,aP,aI,aQ,aM,aK,aJ){if(aM<0.01){return;}var aL=this._$U2[aO];var aN=aM>0.9?Q.EXPAND_W:0;this.gl.drawElements(aL,aP,aI,aQ,aM,aN,this.transform,aJ);};x.prototype._$Rs=function(){throw new Error("_$Rs");};x.prototype._$Ds=function(aH){throw new Error("_$Ds");};x.prototype._$K2=function(){for(var aH=0;aH<this._$sb.length;aH++){var aI=this._$sb[aH];if(aI!=0){this.gl._$Sr(1,this._$sb,aH);this._$sb[aH]=0;}}};x.prototype.setTexture=function(aI,aH){if(this._$sb.length<aI+1){this._$nS(aI);}this._$sb[aI]=aH;};x.prototype.setTexture=function(aH,aI){if(this._$sb.length<aH+1){this._$nS(aH);}this._$U2[aH]=aI;};x.prototype._$nS=function(aH){var aK=Math.max(this._$sb.length*2,aH+1+10);var aI=new Int32Array(aK);P._$jT(this._$sb,0,aI,0,this._$sb.length);this._$sb=aI;var aJ=new Array();P._$jT(this._$U2,0,aJ,0,this._$U2.length);this._$U2=aJ;};function ab(){if(j){return;}c.prototype.constructor.call(this);this._$GS=null;this._$Y0=null;}ab.prototype=new c();ab._$Xo=new Float32Array(2);ab._$io=new Float32Array(2);ab._$0o=new Float32Array(2);ab._$Lo=new Float32Array(2);ab._$To=new Float32Array(2);ab._$Po=new Float32Array(2);ab._$gT=new Array();ab.prototype._$zP=function(){this._$GS=new g();this._$GS._$zP();this._$Y0=new Array();};ab.prototype.getType=function(){return c._$c2;};ab.prototype._$F0=function(aH){c.prototype._$F0.call(this,aH);this._$GS=aH._$nP();this._$Y0=aH._$nP();c.prototype.readV2_opacity.call(this,aH);};ab.prototype.init=function(aH){var aI=new al(this);aI._$Yr=new X();if(this._$32()){aI._$Wr=new X();}return aI;};ab.prototype._$Nr=function(bf,bx){if(!((this==bx._$GT()))){__NONECONSOLE.log("### assert!! ### ");}var bm=bx;if(!this._$GS._$Ur(bf)){return;}var bw=ab._$gT;bw[0]=false;var a2=this._$GS._$Q2(bf,bw);bx._$Ib(bw[0]);this.interpolateOpacity(bf,this._$GS,bx,bw);var a3=bf._$vs();var ba=bf._$Tr();this._$GS._$zr(a3,ba,a2);if(a2<=0){var bn=this._$Y0[a3[0]];bm._$Yr.init(bn);}else{if(a2==1){var bn=this._$Y0[a3[0]];var bl=this._$Y0[a3[1]];var a9=ba[0];bm._$Yr._$fL=bn._$fL+(bl._$fL-bn._$fL)*a9;bm._$Yr._$gL=bn._$gL+(bl._$gL-bn._$gL)*a9;bm._$Yr._$B0=bn._$B0+(bl._$B0-bn._$B0)*a9;bm._$Yr._$z0=bn._$z0+(bl._$z0-bn._$z0)*a9;bm._$Yr._$qT=bn._$qT+(bl._$qT-bn._$qT)*a9;}else{if(a2==2){var bn=this._$Y0[a3[0]];var bl=this._$Y0[a3[1]];var a1=this._$Y0[a3[2]];var a0=this._$Y0[a3[3]];var a9=ba[0];var a8=ba[1];var bC=bn._$fL+(bl._$fL-bn._$fL)*a9;var bB=a1._$fL+(a0._$fL-a1._$fL)*a9;bm._$Yr._$fL=bC+(bB-bC)*a8;bC=bn._$gL+(bl._$gL-bn._$gL)*a9;bB=a1._$gL+(a0._$gL-a1._$gL)*a9;bm._$Yr._$gL=bC+(bB-bC)*a8;bC=bn._$B0+(bl._$B0-bn._$B0)*a9;bB=a1._$B0+(a0._$B0-a1._$B0)*a9;bm._$Yr._$B0=bC+(bB-bC)*a8;bC=bn._$z0+(bl._$z0-bn._$z0)*a9;bB=a1._$z0+(a0._$z0-a1._$z0)*a9;bm._$Yr._$z0=bC+(bB-bC)*a8;bC=bn._$qT+(bl._$qT-bn._$qT)*a9;bB=a1._$qT+(a0._$qT-a1._$qT)*a9;bm._$Yr._$qT=bC+(bB-bC)*a8;}else{if(a2==3){var aP=this._$Y0[a3[0]];var aO=this._$Y0[a3[1]];var bu=this._$Y0[a3[2]];var bs=this._$Y0[a3[3]];var aK=this._$Y0[a3[4]];var aJ=this._$Y0[a3[5]];var bj=this._$Y0[a3[6]];var bi=this._$Y0[a3[7]];var a9=ba[0];var a8=ba[1];var a6=ba[2];var bC=aP._$fL+(aO._$fL-aP._$fL)*a9;var bB=bu._$fL+(bs._$fL-bu._$fL)*a9;var bz=aK._$fL+(aJ._$fL-aK._$fL)*a9;var by=bj._$fL+(bi._$fL-bj._$fL)*a9;bm._$Yr._$fL=(1-a6)*(bC+(bB-bC)*a8)+a6*(bz+(by-bz)*a8);bC=aP._$gL+(aO._$gL-aP._$gL)*a9;bB=bu._$gL+(bs._$gL-bu._$gL)*a9;bz=aK._$gL+(aJ._$gL-aK._$gL)*a9;by=bj._$gL+(bi._$gL-bj._$gL)*a9;bm._$Yr._$gL=(1-a6)*(bC+(bB-bC)*a8)+a6*(bz+(by-bz)*a8);bC=aP._$B0+(aO._$B0-aP._$B0)*a9;bB=bu._$B0+(bs._$B0-bu._$B0)*a9;bz=aK._$B0+(aJ._$B0-aK._$B0)*a9;by=bj._$B0+(bi._$B0-bj._$B0)*a9;bm._$Yr._$B0=(1-a6)*(bC+(bB-bC)*a8)+a6*(bz+(by-bz)*a8);bC=aP._$z0+(aO._$z0-aP._$z0)*a9;bB=bu._$z0+(bs._$z0-bu._$z0)*a9;bz=aK._$z0+(aJ._$z0-aK._$z0)*a9;by=bj._$z0+(bi._$z0-bj._$z0)*a9;bm._$Yr._$z0=(1-a6)*(bC+(bB-bC)*a8)+a6*(bz+(by-bz)*a8);bC=aP._$qT+(aO._$qT-aP._$qT)*a9;bB=bu._$qT+(bs._$qT-bu._$qT)*a9;bz=aK._$qT+(aJ._$qT-aK._$qT)*a9;by=bj._$qT+(bi._$qT-bj._$qT)*a9;bm._$Yr._$qT=(1-a6)*(bC+(bB-bC)*a8)+a6*(bz+(by-bz)*a8);}else{if(a2==4){var aT=this._$Y0[a3[0]];var aS=this._$Y0[a3[1]];var bE=this._$Y0[a3[2]];var bD=this._$Y0[a3[3]];var aN=this._$Y0[a3[4]];var aM=this._$Y0[a3[5]];var bp=this._$Y0[a3[6]];var bo=this._$Y0[a3[7]];var bh=this._$Y0[a3[8]];var bg=this._$Y0[a3[9]];var aY=this._$Y0[a3[10]];var aW=this._$Y0[a3[11]];var a7=this._$Y0[a3[12]];var a5=this._$Y0[a3[13]];var aR=this._$Y0[a3[14]];var aQ=this._$Y0[a3[15]];var a9=ba[0];var a8=ba[1];var a6=ba[2];var a4=ba[3];var bC=aT._$fL+(aS._$fL-aT._$fL)*a9;var bB=bE._$fL+(bD._$fL-bE._$fL)*a9;var bz=aN._$fL+(aM._$fL-aN._$fL)*a9;var by=bp._$fL+(bo._$fL-bp._$fL)*a9;var bv=bh._$fL+(bg._$fL-bh._$fL)*a9;var bt=aY._$fL+(aW._$fL-aY._$fL)*a9;var br=a7._$fL+(a5._$fL-a7._$fL)*a9;var bq=aR._$fL+(aQ._$fL-aR._$fL)*a9;bm._$Yr._$fL=(1-a4)*((1-a6)*(bC+(bB-bC)*a8)+a6*(bz+(by-bz)*a8))+a4*((1-a6)*(bv+(bt-bv)*a8)+a6*(br+(bq-br)*a8));bC=aT._$gL+(aS._$gL-aT._$gL)*a9;bB=bE._$gL+(bD._$gL-bE._$gL)*a9;bz=aN._$gL+(aM._$gL-aN._$gL)*a9;by=bp._$gL+(bo._$gL-bp._$gL)*a9;bv=bh._$gL+(bg._$gL-bh._$gL)*a9;bt=aY._$gL+(aW._$gL-aY._$gL)*a9;br=a7._$gL+(a5._$gL-a7._$gL)*a9;bq=aR._$gL+(aQ._$gL-aR._$gL)*a9;bm._$Yr._$gL=(1-a4)*((1-a6)*(bC+(bB-bC)*a8)+a6*(bz+(by-bz)*a8))+a4*((1-a6)*(bv+(bt-bv)*a8)+a6*(br+(bq-br)*a8));bC=aT._$B0+(aS._$B0-aT._$B0)*a9;bB=bE._$B0+(bD._$B0-bE._$B0)*a9;bz=aN._$B0+(aM._$B0-aN._$B0)*a9;by=bp._$B0+(bo._$B0-bp._$B0)*a9;bv=bh._$B0+(bg._$B0-bh._$B0)*a9;bt=aY._$B0+(aW._$B0-aY._$B0)*a9;br=a7._$B0+(a5._$B0-a7._$B0)*a9;bq=aR._$B0+(aQ._$B0-aR._$B0)*a9;bm._$Yr._$B0=(1-a4)*((1-a6)*(bC+(bB-bC)*a8)+a6*(bz+(by-bz)*a8))+a4*((1-a6)*(bv+(bt-bv)*a8)+a6*(br+(bq-br)*a8));bC=aT._$z0+(aS._$z0-aT._$z0)*a9;bB=bE._$z0+(bD._$z0-bE._$z0)*a9;bz=aN._$z0+(aM._$z0-aN._$z0)*a9;by=bp._$z0+(bo._$z0-bp._$z0)*a9;bv=bh._$z0+(bg._$z0-bh._$z0)*a9;bt=aY._$z0+(aW._$z0-aY._$z0)*a9;br=a7._$z0+(a5._$z0-a7._$z0)*a9;bq=aR._$z0+(aQ._$z0-aR._$z0)*a9;bm._$Yr._$z0=(1-a4)*((1-a6)*(bC+(bB-bC)*a8)+a6*(bz+(by-bz)*a8))+a4*((1-a6)*(bv+(bt-bv)*a8)+a6*(br+(bq-br)*a8));bC=aT._$qT+(aS._$qT-aT._$qT)*a9;bB=bE._$qT+(bD._$qT-bE._$qT)*a9;bz=aN._$qT+(aM._$qT-aN._$qT)*a9;by=bp._$qT+(bo._$qT-bp._$qT)*a9;bv=bh._$qT+(bg._$qT-bh._$qT)*a9;bt=aY._$qT+(aW._$qT-aY._$qT)*a9;br=a7._$qT+(a5._$qT-a7._$qT)*a9;bq=aR._$qT+(aQ._$qT-aR._$qT)*a9;bm._$Yr._$qT=(1-a4)*((1-a6)*(bC+(bB-bC)*a8)+a6*(bz+(by-bz)*a8))+a4*((1-a6)*(bv+(bt-bv)*a8)+a6*(br+(bq-br)*a8));}else{var aV=Math.pow(2,a2)|0;var aZ=new Float32Array(aV);for(var bk=0;bk<aV;bk++){var aI=bk;var aH=1;for(var aL=0;aL<a2;aL++){aH*=(aI%2==0)?(1-ba[aL]):ba[aL];aI/=2;}aZ[bk]=aH;}var bA=new Array();for(var aU=0;aU<aV;aU++){bA[aU]=this._$Y0[a3[aU]];}var be=0,bc=0,bd=0,bb=0,aX=0;for(var aU=0;aU<aV;aU++){be+=aZ[aU]*bA[aU]._$fL;bc+=aZ[aU]*bA[aU]._$gL;bd+=aZ[aU]*bA[aU]._$B0;bb+=aZ[aU]*bA[aU]._$z0;aX+=aZ[aU]*bA[aU]._$qT;}bm._$Yr._$fL=be;bm._$Yr._$gL=bc;bm._$Yr._$B0=bd;bm._$Yr._$z0=bb;bm._$Yr._$qT=aX;}}}}}var bn=this._$Y0[a3[0]];bm._$Yr.reflectX=bn.reflectX;bm._$Yr.reflectY=bn.reflectY;};ab.prototype._$2b=function(aM,aH){if(!((this==aH._$GT()))){__NONECONSOLE.log("### assert!! ### ");}var aR=aH;aR._$hS(true);if(!this._$32()){aR.setTotalScale_notForClient(aR._$Yr._$B0);aR.setTotalOpacity(aR.getInterpolatedOpacity());}else{var aT=this.getTargetBaseDataID();if(aR._$8r==c._$ur){aR._$8r=aM.getBaseDataIndex(aT);}if(aR._$8r<0){if(Q._$so){q._$li("_$L _$0P _$G :: %s",aT);}aR._$hS(false);}else{var aI=aM.getBaseData(aR._$8r);if(aI!=null){var aL=aM._$q2(aR._$8r);var aS=ab._$Xo;aS[0]=aR._$Yr._$fL;aS[1]=aR._$Yr._$gL;var aJ=ab._$io;aJ[0]=0;aJ[1]=-0.1;var aO=aL._$GT().getType();if(aO==c._$c2){aJ[1]=-10;}else{aJ[1]=-0.1;}var aQ=ab._$0o;this._$Jr(aM,aI,aL,aS,aJ,aQ);var aP=aC._$92(aJ,aQ);aI._$nb(aM,aL,aS,aS,1,0,2);aR._$Wr._$fL=aS[0];aR._$Wr._$gL=aS[1];aR._$Wr._$B0=aR._$Yr._$B0;aR._$Wr._$z0=aR._$Yr._$z0;aR._$Wr._$qT=aR._$Yr._$qT-aP*aC._$NS;var aK=aL.getTotalScale();aR.setTotalScale_notForClient(aK*aR._$Wr._$B0);var aN=aL.getTotalOpacity();aR.setTotalOpacity(aN*aR.getInterpolatedOpacity());aR._$Wr.reflectX=aR._$Yr.reflectX;aR._$Wr.reflectY=aR._$Yr.reflectY;aR._$hS(aL._$yo());}else{aR._$hS(false);}}}};ab.prototype._$nb=function(aJ,aR,aL,a4,aT,aO,a2){if(!((this==aR._$GT()))){__NONECONSOLE.log("### assert!! ### ");}var aH=aR;var aU=aH._$Wr!=null?aH._$Wr:aH._$Yr;var a0=Math.sin(aC._$bS*aU._$qT);var aP=Math.cos(aC._$bS*aU._$qT);var a3=aH.getTotalScale();var aW=aU.reflectX?-1:1;var aV=aU.reflectY?-1:1;var aS=aP*a3*aW;var aQ=-a0*a3*aV;var a1=a0*a3*aW;var aZ=aP*a3*aV;var aY=aU._$fL;var aX=aU._$gL;var aN,aM;var aI=aT*a2;for(var aK=aO;aK<aI;aK+=a2){aN=aL[aK];aM=aL[aK+1];a4[aK]=aS*aN+aQ*aM+aY;a4[aK+1]=a1*aN+aZ*aM+aX;}};ab.prototype._$Jr=function(aP,aK,aI,aR,aQ,aH){if(!((aK==aI._$GT()))){__NONECONSOLE.log("### assert!! ### ");}var aO=ab._$Lo;ab._$Lo[0]=aR[0];ab._$Lo[1]=aR[1];aK._$nb(aP,aI,aO,aO,1,0,2);var aL=ab._$To;var aS=ab._$Po;var aN=10;var aJ=1;for(var aM=0;aM<aN;aM++){aS[0]=aR[0]+aJ*aQ[0];aS[1]=aR[1]+aJ*aQ[1];aK._$nb(aP,aI,aS,aL,1,0,2);aL[0]-=aO[0];aL[1]-=aO[1];if(aL[0]!=0||aL[1]!=0){aH[0]=aL[0];aH[1]=aL[1];return;}aS[0]=aR[0]-aJ*aQ[0];aS[1]=aR[1]-aJ*aQ[1];aK._$nb(aP,aI,aS,aL,1,0,2);aL[0]-=aO[0];aL[1]-=aO[1];if(aL[0]!=0||aL[1]!=0){aL[0]=-aL[0];aL[0]=-aL[0];aH[0]=aL[0];aH[1]=aL[1];return;}aJ*=0.1;}if(Q._$so){__NONECONSOLE.log("_$L0 to transform _$SP\\n");}};function al(aH){B.prototype.constructor.call(this,aH);this._$8r=c._$ur;this._$Yr=null;this._$Wr=null;}al.prototype=new B();function a(){if(j){return;}ae.prototype.constructor.call(this);this._$gP=null;this._$dr=null;this._$GS=null;this._$qb=null;this._$Lb=null;this._$mS=null;}a.prototype=new ae();a._$ur=-2;a._$ES=500;a._$wb=2;a._$8S=3;a._$os=4;a._$52=a._$ES;a._$R2=a._$ES;a._$Sb=function(aJ){for(var aI=aJ.length-1;aI>=0;--aI){var aH=aJ[aI];if(aH<a._$52){a._$52=aH;}else{if(aH>a._$R2){a._$R2=aH;}}}};a._$or=function(){return a._$52;};a._$Pr=function(){return a._$R2;};a.prototype._$F0=function(aH){this._$gP=aH._$nP();this._$dr=aH._$nP();this._$GS=aH._$nP();this._$qb=aH._$6L();this._$Lb=aH._$cS();this._$mS=aH._$Tb();if(aH.getFormatVersion()>=ay._$T7){this.clipID=aH._$nP();this.clipIDList=this.convertClipIDForV2_11(this.clipID);}else{this.clipIDList=null;}a._$Sb(this._$Lb);};a.prototype.getClipIDList=function(){return this.clipIDList;};a.prototype._$Nr=function(aI,aH){aH._$IS[0]=false;aH._$Us=aG._$Z2(aI,this._$GS,aH._$IS,this._$Lb);if(Q._$Zs){}else{if(aH._$IS[0]){return;}}aH._$7s=aG._$br(aI,this._$GS,aH._$IS,this._$mS);};a.prototype._$2b=function(aH){};a.prototype.getDrawDataID=function(){return this._$gP;};a.prototype._$j2=function(aH){this._$gP=aH;};a.prototype.getOpacity=function(aH,aI){return aI._$7s;};a.prototype._$zS=function(aH,aI){return aI._$Us;};a.prototype.getTargetBaseDataID=function(){return this._$dr;};a.prototype._$gs=function(aH){this._$dr=aH;};a.prototype._$32=function(){return(this._$dr!=null&&(this._$dr!=n._$2o()));};a.prototype.getType=function(){};function aq(){if(j){return;}this._$NL=null;this._$3S=null;this._$aS=null;aq._$42++;}aq._$42=0;aq.prototype._$1b=function(){return this._$3S;};aq.prototype.getDrawDataList=function(){return this._$aS;};aq.prototype._$F0=function(aH){this._$NL=aH._$nP();this._$aS=aH._$nP();this._$3S=aH._$nP();};aq.prototype._$kr=function(aH){aH._$Zo(this._$3S);aH._$xo(this._$aS);this._$3S=null;this._$aS=null;};function v(){if(j){return;}aa.prototype.constructor.call(this);this._$zo=new x();}v.prototype=new aa();v.loadModel=function(aI){var aH=new v();aa._$62(aH,aI);return aH;};v.loadModel=function(aI){var aH=new v();aa._$62(aH,aI);return aH;};v._$to=function(){var aH=new v();return aH;};v._$er=function(aM){var aJ=new _$5("../_$_r/_$t0/_$Ri/_$_P._$d");if(aJ.exists()==false){throw new _$ls("_$t0 _$_ _$6 _$Ui :: "+aJ._$PL());}var aH=["../_$_r/_$t0/_$Ri/_$_P.512/_$CP._$1","../_$_r/_$t0/_$Ri/_$_P.512/_$vP._$1","../_$_r/_$t0/_$Ri/_$_P.512/_$EP._$1","../_$_r/_$t0/_$Ri/_$_P.512/_$pP._$1"];var aK=v.loadModel(aJ._$3b());for(var aI=0;aI<aH.length;aI++){var aL=new _$5(aH[aI]);if(aL.exists()==false){throw new _$ls("_$t0 _$_ _$6 _$Ui :: "+aL._$PL());}aK.setTexture(aI,_$nL._$_o(aM,aL._$3b()));}return aK;};v.prototype.setGL=function(aH){this._$zo.setGL(aH);};v.prototype.setTransform=function(aH){this._$zo.setTransform(aH);};v.prototype.draw=function(){this._$5S.draw(this._$zo);};v.prototype._$K2=function(){this._$zo._$K2();};v.prototype.setTexture=function(aI,aH){if(this._$zo==null){q._$li("_$Yi for QT _$ki / _$XS() is _$6 _$ui!!");}this._$zo.setTexture(aI,aH);};v.prototype.setTexture=function(aI,aH){if(this._$zo==null){q._$li("_$Yi for QT _$ki / _$XS() is _$6 _$ui!!");}this._$zo.setTexture(aI,aH);};v.prototype._$Rs=function(){return this._$zo._$Rs();};v.prototype._$Ds=function(aH){this._$zo._$Ds(aH);};v.prototype.getDrawParam=function(){return this._$zo;};function ao(){if(j){return;}ah.prototype.constructor.call(this);this.motions=new Array();this._$o2=null;this._$7r=ao._$Co++;this._$D0=30;this._$yT=0;this._$E=false;this.loopFadeIn=true;this._$rr=-1;this._$eP=0;}ao.prototype=new ah();ao._$cs="VISIBLE:";ao._$ar="LAYOUT:";ao.MTN_PREFIX_FADEIN="FADEIN:";ao.MTN_PREFIX_FADEOUT="FADEOUT:";ao._$Co=0;ao._$1T=1;ao.loadMotion=function(aJ){var aI=ap._$C(aJ);var aH=ao.loadMotion(aI);return aH;};function p(aI,aH){return String.fromCharCode(aI.getUint8(aH));}ao.loadMotion=function(aT){if(aT instanceof ArrayBuffer){aT=new DataView(aT);}var aN=new ao();var aI=[0];var aQ=aT.byteLength;aN._$yT=0;for(var aJ=0;aJ<aQ;++aJ){var aS=p(aT,aJ);var aL=aS.charCodeAt(0);if(aS=="\\n"||aS=="\\r"){continue;}if(aS=="#"){for(;aJ<aQ;++aJ){if(p(aT,aJ)=="\\n"||p(aT,aJ)=="\\r"){break;}}continue;}if(aS=="$"){var aV=aJ;var aK=-1;for(;aJ<aQ;++aJ){aS=p(aT,aJ);if(aS=="\\r"||aS=="\\n"){break;}if(aS=="="){aK=aJ;break;}}var aP=false;if(aK>=0){if(aK==aV+4&&p(aT,aV+1)=="f"&&p(aT,aV+2)=="p"&&p(aT,aV+3)=="s"){aP=true;}for(aJ=aK+1;aJ<aQ;++aJ){aS=p(aT,aJ);if(aS=="\\r"||aS=="\\n"){break;}if(aS==","||aS==" "||aS=="	"){continue;}var aM=G._$LS(aT,aQ,aJ,aI);if(aI[0]>0){if(aP&&5<aM&&aM<121){aN._$D0=aM;}}aJ=aI[0];}}for(;aJ<aQ;++aJ){if(p(aT,aJ)=="\\n"||p(aT,aJ)=="\\r"){break;}}continue;}if((97<=aL&&aL<=122)||(65<=aL&&aL<=90)||aS=="_"){var aV=aJ;var aK=-1;for(;aJ<aQ;++aJ){aS=p(aT,aJ);if(aS=="\\r"||aS=="\\n"){break;}if(aS=="="){aK=aJ;break;}}if(aK>=0){var aO=new t();if(G.startsWith(aT,aV,ao._$cs)){aO._$RP=t._$hs;aO._$4P=G.createString(aT,aV,aK-aV);}else{if(G.startsWith(aT,aV,ao._$ar)){aO._$4P=G.createString(aT,aV+7,aK-aV-7);if(G.startsWith(aT,aV+7,"ANCHOR_X")){aO._$RP=t._$xs;}else{if(G.startsWith(aT,aV+7,"ANCHOR_Y")){aO._$RP=t._$us;}else{if(G.startsWith(aT,aV+7,"SCALE_X")){aO._$RP=t._$qs;}else{if(G.startsWith(aT,aV+7,"SCALE_Y")){aO._$RP=t._$Ys;}else{if(G.startsWith(aT,aV+7,"X")){aO._$RP=t._$ws;}else{if(G.startsWith(aT,aV+7,"Y")){aO._$RP=t._$Ns;}}}}}}}else{aO._$RP=t._$Fr;aO._$4P=G.createString(aT,aV,aK-aV);}}aN.motions.push(aO);var aU=0;var aR=[];for(aJ=aK+1;aJ<aQ;++aJ){aS=p(aT,aJ);if(aS=="\\r"||aS=="\\n"){break;}if(aS==","||aS==" "||aS=="	"){continue;}var aM=G._$LS(aT,aQ,aJ,aI);if(aI[0]>0){aR.push(aM);aU++;var aH=aI[0];if(aH<aJ){__NONECONSOLE.log("_$n0 _$hi . @Live2DMotion loadMotion()\\n");break;}aJ=aH-1;}}aO._$I0=new Float32Array(aR);if(aU>aN._$yT){aN._$yT=aU;}}}}aN._$rr=((1000*aN._$yT)/aN._$D0)|0;return aN;};ao.prototype.getDurationMSec=function(){return this._$E?-1:this._$rr;};ao.prototype.getLoopDurationMSec=function(){return this._$rr;};ao.prototype.dump=function(){for(var aJ=0;aJ<this.motions.length;aJ++){var aH=this.motions[aJ];__NONECONSOLE.log("_$wL[%s] [%d]. ",aH._$4P,aH._$I0.length);for(var aI=0;aI<aH._$I0.length&&aI<10;aI++){__NONECONSOLE.log("%5.2f ,",aH._$I0[aI]);}__NONECONSOLE.log("\\n");}};ao.prototype.updateParamExe=function(aJ,aN,aQ,a3){var aO=aN-a3._$z2;var a0=aO*this._$D0/1000;var aK=a0|0;var aR=a0-aK;for(var aZ=0;aZ<this.motions.length;aZ++){var aV=this.motions[aZ];var aL=aV._$I0.length;var aT=aV._$4P;if(aV._$RP==t._$hs){var aX=aV._$I0[(aK>=aL?aL-1:aK)];aJ.setParamFloat(aT,aX);}else{if(t._$ws<=aV._$RP&&aV._$RP<=t._$Ys){}else{var aH=aJ.getParamIndex(aT);var a4=aJ.getModelContext();var aY=a4.getParamMax(aH);var aW=a4.getParamMin(aH);var aM=0.4;var aS=aM*(aY-aW);var aU=a4.getParamFloat(aH);var a2=aV._$I0[(aK>=aL?aL-1:aK)];var a1=aV._$I0[(aK+1>=aL?aL-1:aK+1)];var aI;if((a2<a1&&a1-a2>aS)||(a2>a1&&a2-a1>aS)){aI=a2;}else{aI=a2+(a1-a2)*aR;}var aP=aU+(aI-aU)*aQ;aJ.setParamFloat(aT,aP);}}}if(aK>=this._$yT){if(this._$E){a3._$z2=aN;if(this.loopFadeIn){a3._$bs=aN;}}else{a3._$9L=true;}}this._$eP=aQ;};ao.prototype._$r0=function(){return this._$E;};ao.prototype._$aL=function(aH){this._$E=aH;};ao.prototype._$S0=function(){return this._$D0;};ao.prototype._$U0=function(aH){this._$D0=aH;};ao.prototype.isLoopFadeIn=function(){return this.loopFadeIn;};ao.prototype.setLoopFadeIn=function(aH){this.loopFadeIn=aH;};function aE(){this._$P=new Float32Array(100);this.size=0;}aE.prototype.clear=function(){this.size=0;};aE.prototype.add=function(aI){if(this._$P.length<=this.size){var aH=new Float32Array(this.size*2);P._$jT(this._$P,0,aH,0,this.size);this._$P=aH;}this._$P[this.size++]=aI;};aE.prototype._$BL=function(){var aH=new Float32Array(this.size);P._$jT(this._$P,0,aH,0,this.size);return aH;};function t(){this._$4P=null;this._$I0=null;this._$RP=null;}t._$Fr=0;t._$hs=1;t._$ws=100;t._$Ns=101;t._$xs=102;t._$us=103;t._$qs=104;t._$Ys=105;function E(){if(j){return;}c.prototype.constructor.call(this);this._$o=0;this._$A=0;this._$GS=null;this._$Eo=null;}E.prototype=new c();E._$gT=new Array();E.prototype._$zP=function(){this._$GS=new g();this._$GS._$zP();};E.prototype._$F0=function(aH){c.prototype._$F0.call(this,aH);this._$A=aH._$6L();this._$o=aH._$6L();this._$GS=aH._$nP();this._$Eo=aH._$nP();c.prototype.readV2_opacity.call(this,aH);};E.prototype.init=function(aH){var aI=new H(this);var aJ=(this._$o+1)*(this._$A+1);if(aI._$Cr!=null){aI._$Cr=null;}aI._$Cr=new Float32Array(aJ*2);if(aI._$hr!=null){aI._$hr=null;}if(this._$32()){aI._$hr=new Float32Array(aJ*2);}else{aI._$hr=null;}return aI;};E.prototype._$Nr=function(aJ,aI){var aK=aI;if(!this._$GS._$Ur(aJ)){return;}var aL=this._$VT();var aH=E._$gT;aH[0]=false;aG._$Vr(aJ,this._$GS,aH,aL,this._$Eo,aK._$Cr,0,2);aI._$Ib(aH[0]);this.interpolateOpacity(aJ,this._$GS,aI,aH);};E.prototype._$2b=function(aK,aJ){var aL=aJ;aL._$hS(true);if(!this._$32()){aL.setTotalOpacity(aL.getInterpolatedOpacity());}else{var aH=this.getTargetBaseDataID();if(aL._$8r==c._$ur){aL._$8r=aK.getBaseDataIndex(aH);}if(aL._$8r<0){if(Q._$so){q._$li("_$L _$0P _$G :: %s",aH);}aL._$hS(false);}else{var aN=aK.getBaseData(aL._$8r);var aI=aK._$q2(aL._$8r);if(aN!=null&&aI._$yo()){var aM=aI.getTotalScale();aL.setTotalScale_notForClient(aM);var aO=aI.getTotalOpacity();aL.setTotalOpacity(aO*aL.getInterpolatedOpacity());aN._$nb(aK,aI,aL._$Cr,aL._$hr,this._$VT(),0,2);aL._$hS(true);}else{aL._$hS(false);}}}};E.prototype._$nb=function(aL,aI,aH,aM,aO,aK,aJ){if(true){var aN=aI;var aP=(aN._$hr!=null)?aN._$hr:aN._$Cr;E.transformPoints_sdk2(aH,aM,aO,aK,aJ,aP,this._$o,this._$A);}else{this.transformPoints_sdk1(aL,aI,aH,aM,aO,aK,aJ);}};E.transformPoints_sdk2=function(a0,bc,a5,aP,aI,aR,aQ,aU){var aW=a5*aI;var aV;var bn,bm;var aT=0;var aS=0;var bl=0;var bk=0;var bf=0;var be=0;var aZ=false;for(var ba=aP;ba<aW;ba+=aI){var bd,a7,a4,aX;a4=a0[ba];aX=a0[ba+1];bd=a4*aQ;a7=aX*aU;if(bd<0||a7<0||aQ<=bd||aU<=a7){var a1=aQ+1;if(!aZ){aZ=true;aT=0.25*(aR[((0)+(0)*a1)*2]+aR[((aQ)+(0)*a1)*2]+aR[((0)+(aU)*a1)*2]+aR[((aQ)+(aU)*a1)*2]);aS=0.25*(aR[((0)+(0)*a1)*2+1]+aR[((aQ)+(0)*a1)*2+1]+aR[((0)+(aU)*a1)*2+1]+aR[((aQ)+(aU)*a1)*2+1]);var aM=aR[((aQ)+(aU)*a1)*2]-aR[((0)+(0)*a1)*2];var aL=aR[((aQ)+(aU)*a1)*2+1]-aR[((0)+(0)*a1)*2+1];var bh=aR[((aQ)+(0)*a1)*2]-aR[((0)+(aU)*a1)*2];var bg=aR[((aQ)+(0)*a1)*2+1]-aR[((0)+(aU)*a1)*2+1];bl=(aM+bh)*0.5;bk=(aL+bg)*0.5;bf=(aM-bh)*0.5;be=(aL-bg)*0.5;if(bl==0&&bk==0){}if(bf==0&&be==0){}aT-=0.5*(bl+bf);aS-=0.5*(bk+be);}if((-2<a4&&a4<3)&&(-2<aX&&aX<3)){if(a4<=0){if(aX<=0){var a3=aR[((0)+(0)*a1)*2];var a2=aR[((0)+(0)*a1)*2+1];var a8=aT-2*bl;var a6=aS-2*bk;var aK=aT-2*bf;var aJ=aS-2*be;var aO=aT-2*bl-2*bf;var aN=aS-2*bk-2*be;var bj=0.5*(a4-(-2));var bi=0.5*(aX-(-2));if(bj+bi<=1){bc[ba]=aO+(aK-aO)*bj+(a8-aO)*bi;bc[ba+1]=aN+(aJ-aN)*bj+(a6-aN)*bi;}else{bc[ba]=a3+(a8-a3)*(1-bj)+(aK-a3)*(1-bi);bc[ba+1]=a2+(a6-a2)*(1-bj)+(aJ-a2)*(1-bi);}}else{if(aX>=1){var aK=aR[((0)+(aU)*a1)*2];var aJ=aR[((0)+(aU)*a1)*2+1];var aO=aT-2*bl+1*bf;var aN=aS-2*bk+1*be;var a3=aT+3*bf;var a2=aS+3*be;var a8=aT-2*bl+3*bf;var a6=aS-2*bk+3*be;var bj=0.5*(a4-(-2));var bi=0.5*(aX-(1));if(bj+bi<=1){bc[ba]=aO+(aK-aO)*bj+(a8-aO)*bi;bc[ba+1]=aN+(aJ-aN)*bj+(a6-aN)*bi;}else{bc[ba]=a3+(a8-a3)*(1-bj)+(aK-a3)*(1-bi);bc[ba+1]=a2+(a6-a2)*(1-bj)+(aJ-a2)*(1-bi);}}else{var aH=(a7|0);if(aH==aU){aH=aU-1;}var bj=0.5*(a4-(-2));var bi=a7-aH;var bb=aH/aU;var a9=(aH+1)/aU;var aK=aR[((0)+(aH)*a1)*2];var aJ=aR[((0)+(aH)*a1)*2+1];var a3=aR[((0)+(aH+1)*a1)*2];var a2=aR[((0)+(aH+1)*a1)*2+1];var aO=aT-2*bl+bb*bf;var aN=aS-2*bk+bb*be;var a8=aT-2*bl+a9*bf;var a6=aS-2*bk+a9*be;if(bj+bi<=1){bc[ba]=aO+(aK-aO)*bj+(a8-aO)*bi;bc[ba+1]=aN+(aJ-aN)*bj+(a6-aN)*bi;}else{bc[ba]=a3+(a8-a3)*(1-bj)+(aK-a3)*(1-bi);bc[ba+1]=a2+(a6-a2)*(1-bj)+(aJ-a2)*(1-bi);}}}}else{if(1<=a4){if(aX<=0){var a8=aR[((aQ)+(0)*a1)*2];var a6=aR[((aQ)+(0)*a1)*2+1];var a3=aT+3*bl;var a2=aS+3*bk;var aO=aT+1*bl-2*bf;var aN=aS+1*bk-2*be;var aK=aT+3*bl-2*bf;var aJ=aS+3*bk-2*be;var bj=0.5*(a4-(1));var bi=0.5*(aX-(-2));if(bj+bi<=1){bc[ba]=aO+(aK-aO)*bj+(a8-aO)*bi;bc[ba+1]=aN+(aJ-aN)*bj+(a6-aN)*bi;}else{bc[ba]=a3+(a8-a3)*(1-bj)+(aK-a3)*(1-bi);bc[ba+1]=a2+(a6-a2)*(1-bj)+(aJ-a2)*(1-bi);}}else{if(aX>=1){var aO=aR[((aQ)+(aU)*a1)*2];var aN=aR[((aQ)+(aU)*a1)*2+1];var aK=aT+3*bl+1*bf;var aJ=aS+3*bk+1*be;var a8=aT+1*bl+3*bf;var a6=aS+1*bk+3*be;var a3=aT+3*bl+3*bf;var a2=aS+3*bk+3*be;var bj=0.5*(a4-(1));var bi=0.5*(aX-(1));if(bj+bi<=1){bc[ba]=aO+(aK-aO)*bj+(a8-aO)*bi;bc[ba+1]=aN+(aJ-aN)*bj+(a6-aN)*bi;}else{bc[ba]=a3+(a8-a3)*(1-bj)+(aK-a3)*(1-bi);bc[ba+1]=a2+(a6-a2)*(1-bj)+(aJ-a2)*(1-bi);}}else{var aH=(a7|0);if(aH==aU){aH=aU-1;}var bj=0.5*(a4-(1));var bi=a7-aH;var bb=aH/aU;var a9=(aH+1)/aU;var aO=aR[((aQ)+(aH)*a1)*2];var aN=aR[((aQ)+(aH)*a1)*2+1];var a8=aR[((aQ)+(aH+1)*a1)*2];var a6=aR[((aQ)+(aH+1)*a1)*2+1];var aK=aT+3*bl+bb*bf;var aJ=aS+3*bk+bb*be;var a3=aT+3*bl+a9*bf;var a2=aS+3*bk+a9*be;if(bj+bi<=1){bc[ba]=aO+(aK-aO)*bj+(a8-aO)*bi;bc[ba+1]=aN+(aJ-aN)*bj+(a6-aN)*bi;}else{bc[ba]=a3+(a8-a3)*(1-bj)+(aK-a3)*(1-bi);bc[ba+1]=a2+(a6-a2)*(1-bj)+(aJ-a2)*(1-bi);}}}}else{if(aX<=0){var aY=(bd|0);if(aY==aQ){aY=aQ-1;}var bj=bd-aY;var bi=0.5*(aX-(-2));var bp=aY/aQ;var bo=(aY+1)/aQ;var a8=aR[((aY)+(0)*a1)*2];var a6=aR[((aY)+(0)*a1)*2+1];var a3=aR[((aY+1)+(0)*a1)*2];var a2=aR[((aY+1)+(0)*a1)*2+1];var aO=aT+bp*bl-2*bf;var aN=aS+bp*bk-2*be;var aK=aT+bo*bl-2*bf;var aJ=aS+bo*bk-2*be;if(bj+bi<=1){bc[ba]=aO+(aK-aO)*bj+(a8-aO)*bi;bc[ba+1]=aN+(aJ-aN)*bj+(a6-aN)*bi;}else{bc[ba]=a3+(a8-a3)*(1-bj)+(aK-a3)*(1-bi);bc[ba+1]=a2+(a6-a2)*(1-bj)+(aJ-a2)*(1-bi);}}else{if(aX>=1){var aY=(bd|0);if(aY==aQ){aY=aQ-1;}var bj=bd-aY;var bi=0.5*(aX-(1));var bp=aY/aQ;var bo=(aY+1)/aQ;var aO=aR[((aY)+(aU)*a1)*2];var aN=aR[((aY)+(aU)*a1)*2+1];var aK=aR[((aY+1)+(aU)*a1)*2];var aJ=aR[((aY+1)+(aU)*a1)*2+1];var a8=aT+bp*bl+3*bf;var a6=aS+bp*bk+3*be;var a3=aT+bo*bl+3*bf;var a2=aS+bo*bk+3*be;if(bj+bi<=1){bc[ba]=aO+(aK-aO)*bj+(a8-aO)*bi;bc[ba+1]=aN+(aJ-aN)*bj+(a6-aN)*bi;}else{bc[ba]=a3+(a8-a3)*(1-bj)+(aK-a3)*(1-bi);bc[ba+1]=a2+(a6-a2)*(1-bj)+(aJ-a2)*(1-bi);}}else{System.err.printf("_$li calc : %.4f , %.4f					@@BDBoxGrid\\n",a4,aX);}}}}}else{bc[ba]=aT+a4*bl+aX*bf;bc[ba+1]=aS+a4*bk+aX*be;}}else{bn=bd-(bd|0);bm=a7-(a7|0);aV=2*((bd|0)+((a7|0))*(aQ+1));if(bn+bm<1){bc[ba]=aR[aV]*(1-bn-bm)+aR[aV+2]*bn+aR[aV+2*(aQ+1)]*bm;bc[ba+1]=aR[aV+1]*(1-bn-bm)+aR[aV+3]*bn+aR[aV+2*(aQ+1)+1]*bm;}else{bc[ba]=aR[aV+2*(aQ+1)+2]*(bn-1+bm)+aR[aV+2*(aQ+1)]*(1-bn)+aR[aV+2]*(1-bm);bc[ba+1]=aR[aV+2*(aQ+1)+3]*(bn-1+bm)+aR[aV+2*(aQ+1)+1]*(1-bn)+aR[aV+3]*(1-bm);}}}};E.prototype.transformPoints_sdk1=function(aJ,aR,aL,a0,aU,aP,aZ){var aH=aR;var aO,aN;var aM=this._$o;var aQ=this._$A;var aI=aU*aZ;var aS,aY;var aV;var aX,aW;var aT=(aH._$hr!=null)?aH._$hr:aH._$Cr;for(var aK=aP;aK<aI;aK+=aZ){if(Q._$ts){aO=aL[aK];aN=aL[aK+1];if(aO<0){aO=0;}else{if(aO>1){aO=1;}}if(aN<0){aN=0;}else{if(aN>1){aN=1;}}aO*=aM;aN*=aQ;aS=(aO|0);aY=(aN|0);if(aS>aM-1){aS=aM-1;}if(aY>aQ-1){aY=aQ-1;}aX=aO-aS;aW=aN-aY;aV=2*(aS+aY*(aM+1));}else{aO=aL[aK]*aM;aN=aL[aK+1]*aQ;aX=aO-(aO|0);aW=aN-(aN|0);aV=2*((aO|0)+(aN|0)*(aM+1));}if(aX+aW<1){a0[aK]=aT[aV]*(1-aX-aW)+aT[aV+2]*aX+aT[aV+2*(aM+1)]*aW;a0[aK+1]=aT[aV+1]*(1-aX-aW)+aT[aV+3]*aX+aT[aV+2*(aM+1)+1]*aW;}else{a0[aK]=aT[aV+2*(aM+1)+2]*(aX-1+aW)+aT[aV+2*(aM+1)]*(1-aX)+aT[aV+2]*(1-aW);a0[aK+1]=aT[aV+2*(aM+1)+3]*(aX-1+aW)+aT[aV+2*(aM+1)+1]*(1-aX)+aT[aV+3]*(1-aW);}}};E.prototype._$VT=function(){return(this._$o+1)*(this._$A+1);};E.prototype.getType=function(){return c._$_b;};function H(aH){B.prototype.constructor.call(this,aH);this._$8r=c._$ur;this._$Cr=null;this._$hr=null;}H.prototype=new B();function s(){if(j){return;}this.visible=true;this._$g0=false;this._$NL=null;this._$3S=null;this._$aS=null;s._$42++;}s._$42=0;s.prototype._$zP=function(){this._$3S=new Array();this._$aS=new Array();};s.prototype._$F0=function(aH){this._$g0=aH._$8L();this.visible=aH._$8L();this._$NL=aH._$nP();this._$3S=aH._$nP();this._$aS=aH._$nP();};s.prototype.init=function(aI){var aH=new aj(this);aH.setPartsOpacity(this.isVisible()?1:0);return aH;};s.prototype._$6o=function(aH){if(this._$3S==null){throw new Error("_$3S _$6 _$Wo@_$6o");}this._$3S.push(aH);};s.prototype._$3o=function(aH){if(this._$aS==null){throw new Error("_$aS _$6 _$Wo@_$3o");}this._$aS.push(aH);};s.prototype._$Zo=function(aH){this._$3S=aH;};s.prototype._$xo=function(aH){this._$aS=aH;};s.prototype.isVisible=function(){return this.visible;};s.prototype._$uL=function(){return this._$g0;};s.prototype._$KP=function(aH){this.visible=aH;};s.prototype._$ET=function(aH){this._$g0=aH;};s.prototype.getBaseData=function(){return this._$3S;};s.prototype.getDrawData=function(){return this._$aS;};s.prototype._$p2=function(){return this._$NL;};s.prototype._$ob=function(aH){this._$NL=aH;};s.prototype.getPartsID=function(){return this._$NL;};s.prototype._$MP=function(aH){this._$NL=aH;};function aj(aH){this._$VS=null;this._$e0=null;this._$e0=aH;}aj.prototype=new S();aj.prototype.getPartsOpacity=function(){return this._$VS;};aj.prototype.setPartsOpacity=function(aH){this._$VS=aH;};function ak(aH){if(j){return;}this.id=aH;}ak._$L7=function(){z._$27();n._$27();Z._$27();i._$27();};ak.prototype.toString=function(){return this.id;};function D(){}D.prototype._$F0=function(aH){};function an(){if(j){return;}this._$4S=null;}an.prototype._$1s=function(){return this._$4S;};an.prototype._$zP=function(){this._$4S=new Array();};an.prototype._$F0=function(aH){this._$4S=aH._$nP();};an.prototype._$Ks=function(aH){this._$4S.push(aH);};function au(aH,aI){this.canvas=aH;this.context=aI;this.viewport=new Array(0,0,aH.width,aH.height);this._$6r=1;this._$xP=0;this._$3r=1;this._$uP=0;this._$Qo=-1;this.cacheImages={};}au.tr=new am();au._$50=new am();au._$Ti=new Array(0,0);au._$Pi=new Array(0,0);au._$B=new Array(0,0);au.prototype._$lP=function(aI,aK,aJ,aH){this.viewport=new Array(aI,aK,aJ,aH);};au.prototype._$bL=function(){this.context.save();var aH=this.viewport;if(aH!=null){this.context.beginPath();this.context._$Li(aH[0],aH[1],aH[2],aH[3]);this.context.clip();}};au.prototype._$ei=function(){this.context.restore();};au.prototype.drawElements=function(bc,bm,aX,aJ,bA,aM,bl,bz){try{if(bA!=this._$Qo){this._$Qo=bA;this.context.globalAlpha=bA;}var a2=bm.length;var aP=bc.width;var a5=bc.height;var bE=this.context;var a7=this._$xP;var a6=this._$uP;var a1=this._$6r;var aZ=this._$3r;var bD=au.tr;var aI=au._$Ti;var aH=au._$Pi;var bu=au._$B;for(var by=0;by<a2;by+=3){bE.save();var aW=bm[by];var aV=bm[by+1];var aT=bm[by+2];var aL=a7+a1*aX[aW*2];var aK=a6+aZ*aX[aW*2+1];var br=a7+a1*aX[aV*2];var bp=a6+aZ*aX[aV*2+1];var bh=a7+a1*aX[aT*2];var bf=a6+aZ*aX[aT*2+1];if(bl){bl._$PS(aL,aK,bu);aL=bu[0];aK=bu[1];bl._$PS(br,bp,bu);br=bu[0];bp=bu[1];bl._$PS(bh,bf,bu);bh=bu[0];bf=bu[1];}var aS=aP*aJ[aW*2];var aQ=a5-a5*aJ[aW*2+1];var bx=aP*aJ[aV*2];var bw=a5-a5*aJ[aV*2+1];var bk=aP*aJ[aT*2];var bj=a5-a5*aJ[aT*2+1];var a3=Math.atan2(bw-aQ,bx-aS);var a0=Math.atan2(bp-aK,br-aL);var aO=br-aL;var aN=bp-aK;var bi=Math.sqrt(aO*aO+aN*aN);var aU=bx-aS;var aR=bw-aQ;var bt=Math.sqrt(aU*aU+aR*aR);var bv=bi/bt;ad._$ni(bk,bj,aS,aQ,(bx-aS),(bw-aQ),-(bw-aQ),(bx-aS),aI);ad._$ni(bh,bf,aL,aK,(br-aL),(bp-aK),-(bp-aK),(br-aL),aH);var aY=(aH[0]-aI[0])/aI[1];var bs=Math.min(aS,bx,bk);var bg=Math.max(aS,bx,bk);var bq=Math.min(aQ,bw,bj);var be=Math.max(aQ,bw,bj);var bo=Math.floor(bs);var bb=Math.floor(bq);var a4=Math.ceil(bg);var bC=Math.ceil(be);bD.identity();bD.translate(aL,aK);bD.rotate(a0);bD.scale(1,aH[1]/aI[1]);bD.shear(aY,0);bD.scale(bv,bv);bD.rotate(-a3);bD.translate(-aS,-aQ);bD.setContext(bE);var a8=true;var a9=1.2;if(!aM){aM=a8?a9:0;}if(Q.IGNORE_EXPAND){aM=0;}if(Q.USE_CACHED_POLYGON_IMAGE){var bd=bz._$e0;bd.gl_cacheImage=bd.gl_cacheImage||{};if(!bd.gl_cacheImage[by]){var bn=au.createCanvas(a4-bo,bC-bb);Q.DEBUG_DATA.LDGL_CANVAS_MB=Q.DEBUG_DATA.LDGL_CANVAS_MB||0;Q.DEBUG_DATA.LDGL_CANVAS_MB+=(a4-bo)*(bC-bb)*4;var ba=bn.getContext("2d");ba.translate(-bo,-bb);au.clip(ba,bD,aM,bi,aS,aQ,bx,bw,bk,bj,aL,aK,br,bp,bh,bf);ba.drawImage(bc,0,0);bd.gl_cacheImage[by]={cacheCanvas:bn,cacheContext:ba};}bE.drawImage(bd.gl_cacheImage[by]["cacheCanvas"],bo,bb);}else{if(!Q.IGNORE_CLIP){au.clip(bE,bD,aM,bi,aS,aQ,bx,bw,bk,bj,aL,aK,br,bp,bh,bf);}if(Q.USE_ADJUST_TRANSLATION){bs=0;bg=aP;bq=0;be=a5;}bE.drawImage(bc,bs,bq,bg-bs,be-bq,bs,bq,bg-bs,be-bq);}bE.restore();}}catch(bB){q._$Rb(bB);}};au.clip=function(aK,aJ,aV,aI,aM,aL,aU,aT,aQ,aP,aO,aN,aH,aW,aS,aR){if(aV>0.02){au.expandClip(aK,aJ,aV,aI,aO,aN,aH,aW,aS,aR);}else{au.clipWithTransform(aK,null,aM,aL,aU,aT,aQ,aP);}};au.expandClip=function(aV,bg,aK,a3,aJ,aI,be,ba,aZ,aX){var aP=be-aJ;var aO=ba-aI;var bi=aZ-aJ;var bh=aX-aI;var bj=aP*bh-aO*bi>0?aK:-aK;var aL=-aO;var aH=aP;var bc=aZ-be;var a8=aX-ba;var a7=-a8;var a6=bc;var aQ=Math.sqrt(bc*bc+a8*a8);var bf=-bh;var bb=bi;var a2=Math.sqrt(bi*bi+bh*bh);var bd=aJ-bj*aL/a3;var a9=aI-bj*aH/a3;var aY=be-bj*aL/a3;var aW=ba-bj*aH/a3;var a5=be-bj*a7/aQ;var a4=ba-bj*a6/aQ;var aS=aZ-bj*a7/aQ;var aR=aX-bj*a6/aQ;var aN=aJ+bj*bf/a2;var aM=aI+bj*bb/a2;var a1=aZ+bj*bf/a2;var a0=aX+bj*bb/a2;var aU=au._$50;var aT=bg._$P2(aU);if(aT==null){return false;}au.clipWithTransform(aV,aU,bd,a9,aY,aW,a5,a4,aS,aR,a1,a0,aN,aM);return true;};au.clipWithTransform=function(aH,aI,aS,aN,aQ,aK,aP,aJ){if(arguments.length<(1+3*2)){q._$li("err : @LDGL.clip()");return;}if(!(arguments[1] instanceof am)){q._$li("err : a[0] is _$6 LDTransform @LDGL.clip()");return;}var aM=au._$B;var aO=aI;var aR=arguments;aH.beginPath();if(aO){aO._$PS(aR[2],aR[3],aM);aH.moveTo(aM[0],aM[1]);for(var aL=4;aL<aR.length;aL+=2){aO._$PS(aR[aL],aR[aL+1],aM);aH.lineTo(aM[0],aM[1]);}}else{aH.moveTo(aR[2],aR[3]);for(var aL=4;aL<aR.length;aL+=2){aH.lineTo(aR[aL],aR[aL+1]);}}aH.clip();};au.createCanvas=function(aH,aJ){var aI=document.createElement("canvas");aI.setAttribute("width",aH);aI.setAttribute("height",aJ);if(!aI){q._$li("err : "+aI);}return aI;};au.dumpValues=function(){var aI="";for(var aH=0;aH<arguments.length;aH++){aI+="["+aH+"]= "+arguments[aH].toFixed(3)+" , ";}__NONECONSOLE.log(aI);};function f(){if(j){return;}this._$TT=null;this._$LT=null;this._$FS=null;this._$wL=null;}f.prototype._$F0=function(aH){this._$TT=aH._$_T();this._$LT=aH._$_T();this._$FS=aH._$_T();this._$wL=aH._$nP();};f.prototype.getMinValue=function(){return this._$TT;};f.prototype.getMaxValue=function(){return this._$LT;};f.prototype.getDefaultValue=function(){return this._$FS;};f.prototype.getParamID=function(){return this._$wL;};function B(aH){if(j){return;}this._$e0=null;this._$IP=null;this._$JS=false;this._$AT=true;this._$e0=aH;this.totalScale=1;this._$7s=1;this.totalOpacity=1;}B.prototype._$yo=function(){return this._$AT&&!this._$JS;};B.prototype._$hS=function(aH){this._$AT=aH;};B.prototype._$GT=function(){return this._$e0;};B.prototype._$l2=function(aH){this._$IP=aH;};B.prototype.getPartsIndex=function(){return this._$IP;};B.prototype._$x2=function(){return this._$JS;};B.prototype._$Ib=function(aH){this._$JS=aH;};B.prototype.getTotalScale=function(){return this.totalScale;};B.prototype.setTotalScale_notForClient=function(aH){this.totalScale=aH;};B.prototype.getInterpolatedOpacity=function(){return this._$7s;};B.prototype.setInterpolatedOpacity=function(aH){this._$7s=aH;};B.prototype.getTotalOpacity=function(aH){return this.totalOpacity;};B.prototype.setTotalOpacity=function(aH){this.totalOpacity=aH;};function Q(){}Q._$2s="2.1.00_1";Q._$Kr=201001000;Q._$sP=true;Q._$so=true;Q._$cb=false;Q._$3T=true;Q._$Ts=true;Q._$fb=true;Q._$ts=true;Q.L2D_DEFORMER_EXTEND=true;Q._$Wb=false;Q._$yr=false;Q._$Zs=false;Q.L2D_NO_ERROR=0;Q._$i7=1000;Q._$9s=1001;Q._$es=1100;Q._$r7=2000;Q._$07=2001;Q._$b7=2002;Q._$H7=4000;Q.L2D_COLOR_BLEND_MODE_MULT=0;Q.L2D_COLOR_BLEND_MODE_ADD=1;Q.L2D_COLOR_BLEND_MODE_INTERPOLATE=2;Q._$6b=true;Q._$cT=0;Q.clippingMaskBufferSize=256;Q.glContext=new Array();Q.frameBuffers=new Array();Q.fTexture=new Array();Q.IGNORE_CLIP=false;Q.IGNORE_EXPAND=false;Q.EXPAND_W=2;Q.USE_ADJUST_TRANSLATION=true;Q.USE_CANVAS_TRANSFORM=true;Q.USE_CACHED_POLYGON_IMAGE=false;Q.DEBUG_DATA={};Q.PROFILE_IOS_SPEED={PROFILE_NAME:"iOS Speed",USE_ADJUST_TRANSLATION:true,USE_CACHED_POLYGON_IMAGE:true,EXPAND_W:4};Q.PROFILE_IOS_QUALITY={PROFILE_NAME:"iOS HiQ",USE_ADJUST_TRANSLATION:true,USE_CACHED_POLYGON_IMAGE:false,EXPAND_W:2};Q.PROFILE_IOS_DEFAULT=Q.PROFILE_IOS_QUALITY;Q.PROFILE_ANDROID={PROFILE_NAME:"Android",USE_ADJUST_TRANSLATION:false,USE_CACHED_POLYGON_IMAGE:false,EXPAND_W:2};Q.PROFILE_DESKTOP={PROFILE_NAME:"Desktop",USE_ADJUST_TRANSLATION:false,USE_CACHED_POLYGON_IMAGE:false,EXPAND_W:2};Q.initProfile=function(){if(r.isIOS()){Q.setupProfile(Q.PROFILE_IOS_DEFAULT);}else{if(r.isAndroid()){Q.setupProfile(Q.PROFILE_ANDROID);}else{Q.setupProfile(Q.PROFILE_DESKTOP);}}};Q.setupProfile=function(aI,aJ){if(typeof aI=="number"){switch(aI){case 9901:aI=Q.PROFILE_IOS_SPEED;break;case 9902:aI=Q.PROFILE_IOS_QUALITY;break;case 9903:aI=Q.PROFILE_IOS_DEFAULT;break;case 9904:aI=Q.PROFILE_ANDROID;break;case 9905:aI=Q.PROFILE_DESKTOP;break;default:alert("profile _$6 _$Ui : "+aI);break;}}if(arguments.length<2){aJ=true;}if(aJ){__NONECONSOLE.log("profile : "+aI.PROFILE_NAME);}for(var aH in aI){Q[aH]=aI[aH];if(aJ){__NONECONSOLE.log("  ["+aH+"] = "+aI[aH]);}}};Q.init=function(){if(Q._$6b){__NONECONSOLE.log("Live2D %s",Q._$2s);Q._$6b=false;var aH=false;aH=true;Q.initProfile();}};Q.getVersionStr=function(){return Q._$2s;};Q.getVersionNo=function(){return Q._$Kr;};Q._$sT=function(aH){Q._$cT=aH;};Q.getError=function(){var aH=Q._$cT;Q._$cT=0;return aH;};Q.dispose=function(){Q.glContext=[];Q.frameBuffers=[];Q.fTexture=[];};Q.setGL=function(aJ,aI){var aH=aI||0;Q.glContext[aH]=aJ;};Q.getGL=function(aH){return Q.glContext[aH];};Q.setClippingMaskBufferSize=function(aH){Q.clippingMaskBufferSize=aH;};Q.getClippingMaskBufferSize=function(){return Q.clippingMaskBufferSize;};Q.deleteBuffer=function(aI){var aH=Q.getGL(aI);aH.deleteFramebuffer(Q.frameBuffers[aI].framebuffer);delete Q.frameBuffers[aI];delete Q.glContext[aI];};function A(){}A._$r2=function(aH){if(aH<0){return 0;}else{if(aH>1){return 1;}}return(0.5-0.5*Math.cos(aH*aC.PI_F));};function J(aH){if(j){return;}this._$ib=aH;}J._$fr=-1;J.prototype.toString=function(){return this._$ib;};function b(){if(j){return;}a.prototype.constructor.call(this);this._$LP=-1;this._$d0=0;this._$Yo=0;this._$JP=null;this._$5P=null;this._$BP=null;this._$Eo=null;this._$Qi=null;this._$6s=b._$ms;this.culling=true;this.gl_cacheImage=null;this.instanceNo=b._$42++;}b.prototype=new a();b._$42=0;b._$Os=30;b._$ms=0;b._$ns=1;b._$_s=2;b._$gT=new Array();b.prototype._$_S=function(aH){this._$LP=aH;};b.prototype.getTextureNo=function(){return this._$LP;};b.prototype._$ZL=function(){return this._$Qi;};b.prototype._$H2=function(){return this._$JP;};b.prototype.getNumPoints=function(){return this._$d0;};b.prototype.getType=function(){return a._$wb;};b.prototype._$B2=function(aL,aH,aO){var aM=aH;var aN=(aM._$hr!=null)?aM._$hr:aM._$Cr;var aK=aw._$do;switch(aK){default:case aw._$Ms:throw new Error("_$L _$ro ");case aw._$Qs:for(var aJ=this._$d0-1;aJ>=0;--aJ){var aI=aJ*aw._$No;aN[aI+4]=aO;}break;}};b.prototype._$zP=function(){this._$GS=new g();this._$GS._$zP();};b.prototype._$F0=function(aK){a.prototype._$F0.call(this,aK);this._$LP=aK._$6L();this._$d0=aK._$6L();this._$Yo=aK._$6L();var aH=aK._$nP();this._$BP=new Int16Array(this._$Yo*3);for(var aJ=this._$Yo*3-1;aJ>=0;--aJ){this._$BP[aJ]=aH[aJ];}this._$Eo=aK._$nP();this._$Qi=aK._$nP();if(aK.getFormatVersion()>=ay._$s7){this._$JP=aK._$6L();if(this._$JP!=0){if((this._$JP&1)!=0){var aI=aK._$6L();if(this._$5P==null){this._$5P=new Object();}this._$5P._$Hb=parseInt(aI);}if((this._$JP&b._$Os)!=0){this._$6s=(this._$JP&b._$Os)>>1;}else{this._$6s=b._$ms;}if((this._$JP&32)!=0){this.culling=false;}}}else{this._$JP=0;}};b.prototype.init=function(aL){var aN=new ag(this);var aI=this._$d0*aw._$No;var aH=this._$32();if(aN._$Cr!=null){aN._$Cr=null;}aN._$Cr=new Float32Array(aI);if(aN._$hr!=null){aN._$hr=null;}aN._$hr=aH?new Float32Array(aI):null;var aM=aw._$do;switch(aM){default:case aw._$Ms:if(aw._$Ls){for(var aJ=this._$d0-1;aJ>=0;--aJ){var aO=aJ<<1;this._$Qi[aO+1]=1-this._$Qi[aO+1];}}break;case aw._$Qs:for(var aJ=this._$d0-1;aJ>=0;--aJ){var aO=aJ<<1;var aK=aJ*aw._$No;var aQ=this._$Qi[aO];var aP=this._$Qi[aO+1];aN._$Cr[aK]=aQ;aN._$Cr[aK+1]=aP;aN._$Cr[aK+4]=0;if(aH){aN._$hr[aK]=aQ;aN._$hr[aK+1]=aP;aN._$hr[aK+4]=0;}}break;}return aN;};b.prototype._$Nr=function(aJ,aH){var aK=aH;if(!((this==aK._$GT()))){__NONECONSOLE.log("### assert!! ### ");}if(!this._$GS._$Ur(aJ)){return;}a.prototype._$Nr.call(this,aJ,aK);if(aK._$IS[0]){return;}var aI=b._$gT;aI[0]=false;aG._$Vr(aJ,this._$GS,aI,this._$d0,this._$Eo,aK._$Cr,aw._$i2,aw._$No);};b.prototype._$2b=function(aK,aI){try{if(!((this==aI._$GT()))){__NONECONSOLE.log("### assert!! ### ");}var aL=false;if(aI._$IS[0]){aL=true;}var aM=aI;if(!aL){a.prototype._$2b.call(this,aK);if(this._$32()){var aH=this.getTargetBaseDataID();if(aM._$8r==a._$ur){aM._$8r=aK.getBaseDataIndex(aH);}if(aM._$8r<0){if(Q._$so){q._$li("_$L _$0P _$G :: %s",aH);}}else{var aO=aK.getBaseData(aM._$8r);var aJ=aK._$q2(aM._$8r);if(aO!=null&&!aJ._$x2()){aO._$nb(aK,aJ,aM._$Cr,aM._$hr,this._$d0,aw._$i2,aw._$No);aM._$AT=true;}else{aM._$AT=false;}aM.baseOpacity=aJ.getTotalOpacity();}}}}catch(aN){throw aN;}};b.prototype.draw=function(aN,aK,aI){if(!((this==aI._$GT()))){__NONECONSOLE.log("### assert!! ### ");}if(aI._$IS[0]){return;}var aL=aI;var aJ=this._$LP;if(aJ<0){aJ=1;}var aH=this.getOpacity(aK,aL)*aI._$VS*aI.baseOpacity;var aM=(aL._$hr!=null)?aL._$hr:aL._$Cr;aN.setClipBufPre_clipContextForDraw(aI.clipBufPre_clipContext);aN._$WP(this.culling);aN._$Uo(aJ,3*this._$Yo,this._$BP,aM,this._$Qi,aH,this._$6s,aL);};b.prototype.dump=function(){__NONECONSOLE.log("  _$yi( %d ) , _$d0( %d ) , _$Yo( %d ) \\n",this._$LP,this._$d0,this._$Yo);__NONECONSOLE.log("  _$Oi _$di = { ");for(var aJ=0;aJ<this._$BP.length;aJ++){__NONECONSOLE.log("%5d ,",this._$BP[aJ]);}__NONECONSOLE.log("\\n  _$5i _$30");for(var aJ=0;aJ<this._$Eo.length;aJ++){__NONECONSOLE.log("\\n    _$30[%d] = ",aJ);var aH=this._$Eo[aJ];for(var aI=0;aI<aH.length;aI++){__NONECONSOLE.log("%6.2f, ",aH[aI]);}}__NONECONSOLE.log("\\n");};b.prototype._$72=function(aH){if(this._$5P==null){return null;}return this._$5P[aH];};b.prototype.getIndexArray=function(){return this._$BP;};function ag(aH){aB.prototype.constructor.call(this,aH);this._$8r=a._$ur;this._$Cr=null;this._$hr=null;}ag.prototype=new aB();ag.prototype.getTransformedPoints=function(){return(this._$hr!=null)?this._$hr:this._$Cr;};function k(){if(j){return;}this.x=null;this.y=null;}k.prototype._$HT=function(aH){this.x=aH.x;this.y=aH.y;};k.prototype._$HT=function(aH,aI){this.x=aH;this.y=aI;};function l(aH){if(j){return;}aa.prototype.constructor.call(this);this.drawParamWebGL=new C(aH);this.drawParamWebGL.setGL(Q.getGL(aH));}l.prototype=new aa();l.loadModel=function(aI){var aH=new l();aa._$62(aH,aI);return aH;};l.loadModel=function(aI,aK){var aJ=aK||0;var aH=new l(aJ);aa._$62(aH,aI);return aH;};l._$to=function(){var aH=new l();return aH;};l._$er=function(aM){var aJ=new _$5("../_$_r/_$t0/_$Ri/_$_P._$d");if(aJ.exists()==false){throw new _$ls("_$t0 _$_ _$6 _$Ui :: "+aJ._$PL());}var aH=["../_$_r/_$t0/_$Ri/_$_P.512/_$CP._$1","../_$_r/_$t0/_$Ri/_$_P.512/_$vP._$1","../_$_r/_$t0/_$Ri/_$_P.512/_$EP._$1","../_$_r/_$t0/_$Ri/_$_P.512/_$pP._$1"];var aK=l.loadModel(aJ._$3b());for(var aI=0;aI<aH.length;aI++){var aL=new _$5(aH[aI]);if(aL.exists()==false){throw new _$ls("_$t0 _$_ _$6 _$Ui :: "+aL._$PL());}aK.setTexture(aI,_$nL._$_o(aM,aL._$3b()));}return aK;};l.prototype.setGL=function(aH){Q.setGL(aH);};l.prototype.setTransform=function(aH){this.drawParamWebGL.setTransform(aH);};l.prototype.update=function(){this._$5S.update();this._$5S.preDraw(this.drawParamWebGL);};l.prototype.draw=function(){this._$5S.draw(this.drawParamWebGL);};l.prototype._$K2=function(){this.drawParamWebGL._$K2();};l.prototype.setTexture=function(aI,aH){if(this.drawParamWebGL==null){q._$li("_$Yi for QT _$ki / _$XS() is _$6 _$ui!!");}this.drawParamWebGL.setTexture(aI,aH);};l.prototype.setTexture=function(aI,aH){if(this.drawParamWebGL==null){q._$li("_$Yi for QT _$ki / _$XS() is _$6 _$ui!!");}this.drawParamWebGL.setTexture(aI,aH);};l.prototype._$Rs=function(){return this.drawParamWebGL._$Rs();};l.prototype._$Ds=function(aH){this.drawParamWebGL._$Ds(aH);};l.prototype.getDrawParam=function(){return this.drawParamWebGL;};l.prototype.setMatrix=function(aH){this.drawParamWebGL.setMatrix(aH);};l.prototype.setPremultipliedAlpha=function(aH){this.drawParamWebGL.setPremultipliedAlpha(aH);};l.prototype.isPremultipliedAlpha=function(){return this.drawParamWebGL.isPremultipliedAlpha();};l.prototype.setAnisotropy=function(aH){this.drawParamWebGL.setAnisotropy(aH);};l.prototype.getAnisotropy=function(){return this.drawParamWebGL.getAnisotropy();};function V(){if(j){return;}this.motions=null;this._$eb=false;this.motions=new Array();}V.prototype._$tb=function(){return this.motions;};V.prototype.startMotion=function(aJ,aI){var aM=null;var aL=null;var aH=this.motions.length;for(var aK=0;aK<aH;++aK){aL=this.motions[aK];if(aL==null){continue;}aL._$qS(aL._$w0.getFadeOut());if(this._$eb){q._$Ji("MotionQueueManager[size:%2d]->startMotion() / start _$K _$3 (m%d)\\n",aH,aL._$sr);}}if(aJ==null){return -1;}aL=new M();aL._$w0=aJ;this.motions.push(aL);var aN=aL._$sr;if(this._$eb){q._$Ji("MotionQueueManager[size:%2d]->startMotion() / new _$w0 (m%d)\\n",aH,aN);}return aN;};V.prototype.updateParam=function(aJ){try{var aI=false;for(var aK=0;aK<this.motions.length;aK++){var aL=this.motions[aK];if(aL==null){this.motions.splice(aK,1);aK--;continue;}var aH=aL._$w0;if(aH==null){this.motions=this.motions.splice(aK,1);aK--;continue;}aH.updateParam(aJ,aL);aI=true;if(aL.isFinished()){if(this._$eb){q._$Ji("MotionQueueManager[size:%2d]->updateParam() / _$T0 _$w0 (m%d)\\n",this.motions.length-1,aL._$sr);}this.motions.splice(aK,1);aK--;}else{}}return aI;}catch(aM){q._$li(aM);return true;}};V.prototype.isFinished=function(aK){if(arguments.length>=1){for(var aI=0;aI<this.motions.length;aI++){var aJ=this.motions[aI];if(aJ==null){continue;}if(aJ._$sr==aK&&!aJ.isFinished()){return false;}}return true;}else{for(var aI=0;aI<this.motions.length;aI++){var aJ=this.motions[aI];if(aJ==null){this.motions.splice(aI,1);aI--;continue;}var aH=aJ._$w0;if(aH==null){this.motions.splice(aI,1);aI--;continue;}if(!aJ.isFinished()){return false;}}return true;}};V.prototype.stopAllMotions=function(){for(var aI=0;aI<this.motions.length;aI++){var aJ=this.motions[aI];if(aJ==null){this.motions.splice(aI,1);aI--;continue;}var aH=aJ._$w0;if(aH==null){this.motions.splice(aI,1);aI--;continue;}if(true){this.motions.splice(aI,1);aI--;}}};V.prototype._$Zr=function(aH){this._$eb=aH;};V.prototype._$e=function(){__NONECONSOLE.log("-- _$R --\\n");for(var aH=0;aH<this.motions.length;aH++){var aI=this.motions[aH];var aJ=aI._$w0;__NONECONSOLE.log("MotionQueueEnt[%d] :: %s\\n",this.motions.length,aJ.toString());}};function M(){this._$w0=null;this._$AT=true;this._$9L=false;this._$z2=-1;this._$bs=-1;this._$Do=-1;this._$sr=null;this._$sr=M._$Gs++;}M._$Gs=0;M.prototype.isFinished=function(){return this._$9L;};M.prototype._$qS=function(aJ){var aI=P.getUserTimeMSec();var aH=aI+aJ;if(this._$Do<0||aH<this._$Do){this._$Do=aH;}};M.prototype._$Bs=function(){return this._$sr;};function am(){this.m=new Array(1,0,0,0,1,0,0,0,1);}am.prototype.setContext=function(aI){var aH=this.m;aI.transform(aH[0],aH[1],aH[3],aH[4],aH[6],aH[7]);};am.prototype.toString=function(){var aI="LDTransform { ";for(var aH=0;aH<9;aH++){aI+=this.m[aH].toFixed(2)+" ,";}aI+=" }";return aI;};am.prototype.identity=function(){var aH=this.m;aH[0]=aH[4]=aH[8]=1;aH[1]=aH[2]=aH[3]=aH[5]=aH[6]=aH[7]=0;};am.prototype._$PS=function(aI,aK,aJ){if(aJ==null){aJ=new Array(0,0);}var aH=this.m;aJ[0]=aH[0]*aI+aH[3]*aK+aH[6];aJ[1]=aH[1]*aI+aH[4]*aK+aH[7];return aJ;};am.prototype._$P2=function(aK){if(!aK){aK=new am();}var aI=this.m;var aT=aI[0];var aS=aI[1];var aR=aI[2];var aQ=aI[3];var aP=aI[4];var aO=aI[5];var aN=aI[6];var aM=aI[7];var aL=aI[8];var aJ=aT*aP*aL+aS*aO*aN+aR*aQ*aM-aT*aO*aM-aR*aP*aN-aS*aQ*aL;if(aJ==0){return null;}else{var aH=1/aJ;aK.m[0]=aH*(aP*aL-aM*aO);aK.m[1]=aH*(aM*aR-aS*aL);aK.m[2]=aH*(aS*aO-aP*aR);aK.m[3]=aH*(aN*aO-aQ*aL);aK.m[4]=aH*(aT*aL-aN*aR);aK.m[5]=aH*(aQ*aR-aT*aO);aK.m[6]=aH*(aQ*aM-aN*aP);aK.m[7]=aH*(aN*aS-aT*aM);aK.m[8]=aH*(aT*aP-aQ*aS);return aK;}};am.prototype.transform=function(aI,aK,aJ){if(aJ==null){aJ=new Array(0,0);}var aH=this.m;aJ[0]=aH[0]*aI+aH[3]*aK+aH[6];aJ[1]=aH[1]*aI+aH[4]*aK+aH[7];return aJ;};am.prototype.translate=function(aI,aJ){var aH=this.m;aH[6]=aH[0]*aI+aH[3]*aJ+aH[6];aH[7]=aH[1]*aI+aH[4]*aJ+aH[7];aH[8]=aH[2]*aI+aH[5]*aJ+aH[8];};am.prototype.scale=function(aJ,aI){var aH=this.m;aH[0]*=aJ;aH[1]*=aJ;aH[2]*=aJ;aH[3]*=aI;aH[4]*=aI;aH[5]*=aI;};am.prototype.shear=function(aM,aL){var aH=this.m;var aK=aH[0]+aH[3]*aL;var aJ=aH[1]+aH[4]*aL;var aI=aH[2]+aH[5]*aL;aH[3]=aH[0]*aM+aH[3];aH[4]=aH[1]*aM+aH[4];aH[5]=aH[2]*aM+aH[5];aH[0]=aK;aH[1]=aJ;aH[2]=aI;};am.prototype.rotate=function(aM){var aH=this.m;var aN=Math.cos(aM);var aL=Math.sin(aM);var aK=aH[0]*aN+aH[3]*aL;var aJ=aH[1]*aN+aH[4]*aL;var aI=aH[2]*aN+aH[5]*aL;aH[3]=-aH[0]*aL+aH[3]*aN;aH[4]=-aH[1]*aL+aH[4]*aN;aH[5]=-aH[2]*aL+aH[5]*aN;aH[0]=aK;aH[1]=aJ;aH[2]=aI;};am.prototype.concatenate=function(aL){var aO=this.m;var aM=aL.m;var aS=aO[0]*aM[0]+aO[3]*aM[1]+aO[6]*aM[2];var aR=aO[1]*aM[0]+aO[4]*aM[1]+aO[7]*aM[2];var aQ=aO[2]*aM[0]+aO[5]*aM[1]+aO[8]*aM[2];var aP=aO[0]*aM[3]+aO[3]*aM[4]+aO[6]*aM[5];var aN=aO[1]*aM[3]+aO[4]*aM[4]+aO[7]*aM[5];var aK=aO[2]*aM[3]+aO[5]*aM[4]+aO[8]*aM[5];var aJ=aO[0]*aM[6]+aO[3]*aM[7]+aO[6]*aM[8];var aI=aO[1]*aM[6]+aO[4]*aM[7]+aO[7]*aM[8];var aH=aO[2]*aM[6]+aO[5]*aM[7]+aO[8]*aM[8];m[0]=aS;m[1]=aR;m[2]=aQ;m[3]=aP;m[4]=aN;m[5]=aK;m[6]=aJ;m[7]=aI;m[8]=aH;};function n(aH){if(j){return;}ak.prototype.constructor.call(this,aH);}n.prototype=new ak();n._$eT=null;n._$tP=new Object();n._$2o=function(){if(n._$eT==null){n._$eT=n.getID("DST_BASE");}return n._$eT;};n._$27=function(){n._$tP.clear();n._$eT=null;};n.getID=function(aH){var aI=n._$tP[aH];if(aI==null){aI=new n(aH);n._$tP[aH]=aI;}return aI;};n.prototype._$3s=function(){return new n();};function C(aH){if(j){return;}ax.prototype.constructor.call(this);this.textures=new Array();this.transform=null;this.gl=null;this.glno=aH;this.firstDraw=true;this.anisotropyExt=null;this.maxAnisotropy=0;this._$As=32;this._$Gr=false;this._$NT=null;this._$vS=null;this._$no=null;this.vertShader=null;this.fragShader=null;this.vertShaderOff=null;this.fragShaderOff=null;}C.prototype=new ax();C._$9r=function(aH){var aI=new Float32Array(aH);return aI;};C._$vb=function(aH){var aI=new Int16Array(aH);return aI;};C._$cr=function(aI,aH){if(aI==null||aI._$yL()<aH.length){aI=C._$9r(aH.length*2);aI.put(aH);aI._$oT(0);}else{aI.clear();aI.put(aH);aI._$oT(0);}return aI;};C._$mb=function(aI,aH){if(aI==null||aI._$yL()<aH.length){aI=C._$vb(aH.length*2);aI.put(aH);aI._$oT(0);}else{aI.clear();aI.put(aH);aI._$oT(0);}return aI;};C._$Hs=function(){return this._$Gr;};C._$as=function(aH){this._$Gr=aH;};C.prototype.getGL=function(){return this.gl;};C.prototype.setGL=function(aH){this.gl=aH;};C.prototype.setTransform=function(aH){this.transform=aH;};C.prototype._$ZT=function(){var aH=this.gl;if(this.firstDraw){this.initShader();this.firstDraw=false;this.anisotropyExt=aH.getExtension("EXT_texture_filter_anisotropic")||aH.getExtension("WEBKIT_EXT_texture_filter_anisotropic")||aH.getExtension("MOZ_EXT_texture_filter_anisotropic");if(this.anisotropyExt){this.maxAnisotropy=aH.getParameter(this.anisotropyExt.MAX_TEXTURE_MAX_ANISOTROPY_EXT);}}aH.disable(aH.SCISSOR_TEST);aH.disable(aH.STENCIL_TEST);aH.disable(aH.DEPTH_TEST);aH.frontFace(aH.CW);aH.enable(aH.BLEND);aH.colorMask(1,1,1,1);aH.bindBuffer(aH.ARRAY_BUFFER,null);aH.bindBuffer(aH.ELEMENT_ARRAY_BUFFER,null);};C.prototype._$Uo=function(aS,aT,aL,aU,aV,aN,aM,aO){if(aN<0.01&&this.clipBufPre_clipContextMask==null){return;}var aH=aN>0.9?Q.EXPAND_W:0;var a0=this.gl;if(this.gl==null){throw new Error("gl is null");}var a1=false;var aQ=1;var aP=1;var a3=1;var aZ=1;var aW=this._$C0*aP*aN;var a2=this._$tT*a3*aN;var a5=this._$WL*aZ*aN;var a7=this._$lT*aN;if(this.clipBufPre_clipContextMask!=null){a0.frontFace(a0.CCW);a0.useProgram(this.shaderProgram);this._$vS=T(a0,this._$vS,aU);this._$no=L(a0,this._$no,aL);a0.enableVertexAttribArray(this.a_position_Loc);a0.vertexAttribPointer(this.a_position_Loc,2,a0.FLOAT,false,0,0);this._$NT=T(a0,this._$NT,aV);a0.activeTexture(a0.TEXTURE1);a0.bindTexture(a0.TEXTURE_2D,this.textures[aS]);a0.uniform1i(this.s_texture0_Loc,1);a0.enableVertexAttribArray(this.a_texCoord_Loc);a0.vertexAttribPointer(this.a_texCoord_Loc,2,a0.FLOAT,false,0,0);a0.uniformMatrix4fv(this.u_matrix_Loc,false,this.getClipBufPre_clipContextMask().matrixForMask);var aY=this.getClipBufPre_clipContextMask().layoutChannelNo;var a4=this.getChannelFlagAsColor(aY);a0.uniform4f(this.u_channelFlag,a4.r,a4.g,a4.b,a4.a);var aI=this.getClipBufPre_clipContextMask().layoutBounds;a0.uniform4f(this.u_baseColor_Loc,aI.x*2-1,aI.y*2-1,aI._$EL()*2-1,aI._$5T()*2-1);a0.uniform1i(this.u_maskFlag_Loc,true);}else{a1=this.getClipBufPre_clipContextDraw()!=null;if(a1){a0.useProgram(this.shaderProgramOff);this._$vS=T(a0,this._$vS,aU);this._$no=L(a0,this._$no,aL);a0.enableVertexAttribArray(this.a_position_Loc_Off);a0.vertexAttribPointer(this.a_position_Loc_Off,2,a0.FLOAT,false,0,0);this._$NT=T(a0,this._$NT,aV);a0.activeTexture(a0.TEXTURE1);a0.bindTexture(a0.TEXTURE_2D,this.textures[aS]);a0.uniform1i(this.s_texture0_Loc_Off,1);a0.enableVertexAttribArray(this.a_texCoord_Loc_Off);a0.vertexAttribPointer(this.a_texCoord_Loc_Off,2,a0.FLOAT,false,0,0);a0.uniformMatrix4fv(this.u_clipMatrix_Loc_Off,false,this.getClipBufPre_clipContextDraw().matrixForDraw);a0.uniformMatrix4fv(this.u_matrix_Loc_Off,false,this.matrix4x4);a0.activeTexture(a0.TEXTURE2);a0.bindTexture(a0.TEXTURE_2D,Q.fTexture[this.glno]);a0.uniform1i(this.s_texture1_Loc_Off,2);var aY=this.getClipBufPre_clipContextDraw().layoutChannelNo;var a4=this.getChannelFlagAsColor(aY);a0.uniform4f(this.u_channelFlag_Loc_Off,a4.r,a4.g,a4.b,a4.a);a0.uniform4f(this.u_baseColor_Loc_Off,aW,a2,a5,a7);}else{a0.useProgram(this.shaderProgram);this._$vS=T(a0,this._$vS,aU);this._$no=L(a0,this._$no,aL);a0.enableVertexAttribArray(this.a_position_Loc);a0.vertexAttribPointer(this.a_position_Loc,2,a0.FLOAT,false,0,0);this._$NT=T(a0,this._$NT,aV);a0.activeTexture(a0.TEXTURE1);a0.bindTexture(a0.TEXTURE_2D,this.textures[aS]);a0.uniform1i(this.s_texture0_Loc,1);a0.enableVertexAttribArray(this.a_texCoord_Loc);a0.vertexAttribPointer(this.a_texCoord_Loc,2,a0.FLOAT,false,0,0);a0.uniformMatrix4fv(this.u_matrix_Loc,false,this.matrix4x4);a0.uniform4f(this.u_baseColor_Loc,aW,a2,a5,a7);a0.uniform1i(this.u_maskFlag_Loc,false);}}if(this.culling){this.gl.enable(a0.CULL_FACE);}else{this.gl.disable(a0.CULL_FACE);}this.gl.enable(a0.BLEND);var a6;var aX;var aR;var aK;if(this.clipBufPre_clipContextMask!=null){a6=a0.ONE;aX=a0.ONE_MINUS_SRC_ALPHA;aR=a0.ONE;aK=a0.ONE_MINUS_SRC_ALPHA;}else{switch(aM){case b._$ms:a6=a0.ONE;aX=a0.ONE_MINUS_SRC_ALPHA;aR=a0.ONE;aK=a0.ONE_MINUS_SRC_ALPHA;break;case b._$ns:a6=a0.ONE;aX=a0.ONE;aR=a0.ZERO;aK=a0.ONE;break;case b._$_s:a6=a0.DST_COLOR;aX=a0.ONE_MINUS_SRC_ALPHA;aR=a0.ZERO;aK=a0.ONE;break;}}a0.blendEquationSeparate(a0.FUNC_ADD,a0.FUNC_ADD);a0.blendFuncSeparate(a6,aX,aR,aK);if(this.anisotropyExt){a0.texParameteri(a0.TEXTURE_2D,this.anisotropyExt.TEXTURE_MAX_ANISOTROPY_EXT,this.maxAnisotropy);}var aJ=aL.length;a0.drawElements(a0.TRIANGLES,aJ,a0.UNSIGNED_SHORT,0);a0.bindTexture(a0.TEXTURE_2D,null);};function T(aJ,aH,aI){if(aH==null){aH=aJ.createBuffer();}aJ.bindBuffer(aJ.ARRAY_BUFFER,aH);aJ.bufferData(aJ.ARRAY_BUFFER,aI,aJ.DYNAMIC_DRAW);return aH;}function L(aJ,aH,aI){if(aH==null){aH=aJ.createBuffer();}aJ.bindBuffer(aJ.ELEMENT_ARRAY_BUFFER,aH);aJ.bufferData(aJ.ELEMENT_ARRAY_BUFFER,aI,aJ.DYNAMIC_DRAW);return aH;}C.prototype._$Rs=function(){throw new Error("_$Rs");};C.prototype._$Ds=function(aH){throw new Error("_$Ds");};C.prototype._$K2=function(){for(var aH=0;aH<this.textures.length;aH++){var aI=this.textures[aH];if(aI!=0){this.gl._$K2(1,this.textures,aH);this.textures[aH]=null;}}};C.prototype.setTexture=function(aH,aI){this.textures[aH]=aI;};C.prototype.initShader=function(){var aH=this.gl;this.loadShaders2();this.a_position_Loc=aH.getAttribLocation(this.shaderProgram,"a_position");this.a_texCoord_Loc=aH.getAttribLocation(this.shaderProgram,"a_texCoord");this.u_matrix_Loc=aH.getUniformLocation(this.shaderProgram,"u_mvpMatrix");this.s_texture0_Loc=aH.getUniformLocation(this.shaderProgram,"s_texture0");this.u_channelFlag=aH.getUniformLocation(this.shaderProgram,"u_channelFlag");this.u_baseColor_Loc=aH.getUniformLocation(this.shaderProgram,"u_baseColor");this.u_maskFlag_Loc=aH.getUniformLocation(this.shaderProgram,"u_maskFlag");this.a_position_Loc_Off=aH.getAttribLocation(this.shaderProgramOff,"a_position");this.a_texCoord_Loc_Off=aH.getAttribLocation(this.shaderProgramOff,"a_texCoord");this.u_matrix_Loc_Off=aH.getUniformLocation(this.shaderProgramOff,"u_mvpMatrix");this.u_clipMatrix_Loc_Off=aH.getUniformLocation(this.shaderProgramOff,"u_ClipMatrix");this.s_texture0_Loc_Off=aH.getUniformLocation(this.shaderProgramOff,"s_texture0");this.s_texture1_Loc_Off=aH.getUniformLocation(this.shaderProgramOff,"s_texture1");this.u_channelFlag_Loc_Off=aH.getUniformLocation(this.shaderProgramOff,"u_channelFlag");this.u_baseColor_Loc_Off=aH.getUniformLocation(this.shaderProgramOff,"u_baseColor");};C.prototype.disposeShader=function(){var aH=this.gl;if(this.shaderProgram){aH.deleteProgram(this.shaderProgram);this.shaderProgram=null;}if(this.shaderProgramOff){aH.deleteProgram(this.shaderProgramOff);this.shaderProgramOff=null;}};C.prototype.compileShader=function(aJ,aN){var aM=this.gl;var aH;var aL=aN;var aK=aM.createShader(aJ);if(aK==null){q._$Ji("_$L0 to create shader");return null;}aM.shaderSource(aK,aL);aM.compileShader(aK);var aH=aM.getShaderParameter(aK,aM.COMPILE_STATUS);if(!aH){var aI=aM.getShaderInfoLog(aK);q._$Ji("_$L0 to compile shader : "+aI);aM.deleteShader(aK);return null;}return aK;};C.prototype.loadShaders2=function(){var aN=this.gl;this.shaderProgram=aN.createProgram();if(!this.shaderProgram){return false;}this.shaderProgramOff=aN.createProgram();if(!this.shaderProgramOff){return false;}var aK="attribute vec4     a_position;attribute vec2     a_texCoord;varying vec2       v_texCoord;varying vec4       v_ClipPos;uniform mat4       u_mvpMatrix;void main(){    gl_Position = u_mvpMatrix * a_position;    v_ClipPos = u_mvpMatrix * a_position;    v_texCoord = a_texCoord;}";var aM="precision mediump float;varying vec2       v_texCoord;varying vec4       v_ClipPos;uniform sampler2D  s_texture0;uniform vec4       u_channelFlag;uniform vec4       u_baseColor;uniform bool       u_maskFlag;void main(){    vec4 smpColor;     if(u_maskFlag){        float isInside =             step(u_baseColor.x, v_ClipPos.x/v_ClipPos.w)          * step(u_baseColor.y, v_ClipPos.y/v_ClipPos.w)          * step(v_ClipPos.x/v_ClipPos.w, u_baseColor.z)          * step(v_ClipPos.y/v_ClipPos.w, u_baseColor.w);        smpColor = u_channelFlag * texture2D(s_texture0 , v_texCoord).a * isInside;    }else{        smpColor = texture2D(s_texture0 , v_texCoord) * u_baseColor;    }    gl_FragColor = smpColor;}";var aL="attribute vec4     a_position;attribute vec2     a_texCoord;varying vec2       v_texCoord;varying vec4       v_ClipPos;uniform mat4       u_mvpMatrix;uniform mat4       u_ClipMatrix;void main(){    gl_Position = u_mvpMatrix * a_position;    v_ClipPos = u_ClipMatrix * a_position;    v_texCoord = a_texCoord ;}";var aJ="precision mediump float ;varying vec2       v_texCoord;varying vec4       v_ClipPos;uniform sampler2D  s_texture0;uniform sampler2D  s_texture1;uniform vec4       u_channelFlag;uniform vec4       u_baseColor ;void main(){    vec4 col_formask = texture2D(s_texture0, v_texCoord) * u_baseColor;    vec4 clipMask = texture2D(s_texture1, v_ClipPos.xy / v_ClipPos.w) * u_channelFlag;    float maskVal = clipMask.r + clipMask.g + clipMask.b + clipMask.a;    col_formask = col_formask * maskVal;    gl_FragColor = col_formask;}";this.vertShader=this.compileShader(aN.VERTEX_SHADER,aK);if(!this.vertShader){q._$Ji("Vertex shader compile _$li!");return false;}this.vertShaderOff=this.compileShader(aN.VERTEX_SHADER,aL);if(!this.vertShaderOff){q._$Ji("OffVertex shader compile _$li!");return false;}this.fragShader=this.compileShader(aN.FRAGMENT_SHADER,aM);if(!this.fragShader){q._$Ji("Fragment shader compile _$li!");return false;}this.fragShaderOff=this.compileShader(aN.FRAGMENT_SHADER,aJ);if(!this.fragShaderOff){q._$Ji("OffFragment shader compile _$li!");return false;}aN.attachShader(this.shaderProgram,this.vertShader);aN.attachShader(this.shaderProgram,this.fragShader);aN.attachShader(this.shaderProgramOff,this.vertShaderOff);aN.attachShader(this.shaderProgramOff,this.fragShaderOff);aN.linkProgram(this.shaderProgram);aN.linkProgram(this.shaderProgramOff);var aH=aN.getProgramParameter(this.shaderProgram,aN.LINK_STATUS);if(!aH){var aI=aN.getProgramInfoLog(this.shaderProgram);q._$Ji("_$L0 to link program: "+aI);if(this.vertShader){aN.deleteShader(this.vertShader);this.vertShader=0;}if(this.fragShader){aN.deleteShader(this.fragShader);this.fragShader=0;}if(this.shaderProgram){aN.deleteProgram(this.shaderProgram);this.shaderProgram=0;}if(this.vertShaderOff){aN.deleteShader(this.vertShaderOff);this.vertShaderOff=0;}if(this.fragShaderOff){aN.deleteShader(this.fragShaderOff);this.fragShaderOff=0;}if(this.shaderProgramOff){aN.deleteProgram(this.shaderProgramOff);this.shaderProgramOff=0;}return false;}return true;};C.prototype.createFramebuffer=function(){var aL=this.gl;var aK=Q.clippingMaskBufferSize;var aJ=aL.createFramebuffer();aL.bindFramebuffer(aL.FRAMEBUFFER,aJ);var aH=aL.createRenderbuffer();aL.bindRenderbuffer(aL.RENDERBUFFER,aH);aL.renderbufferStorage(aL.RENDERBUFFER,aL.RGBA4,aK,aK);aL.framebufferRenderbuffer(aL.FRAMEBUFFER,aL.COLOR_ATTACHMENT0,aL.RENDERBUFFER,aH);var aI=aL.createTexture();aL.bindTexture(aL.TEXTURE_2D,aI);aL.texImage2D(aL.TEXTURE_2D,0,aL.RGBA,aK,aK,0,aL.RGBA,aL.UNSIGNED_BYTE,null);aL.texParameteri(aL.TEXTURE_2D,aL.TEXTURE_MIN_FILTER,aL.LINEAR);aL.texParameteri(aL.TEXTURE_2D,aL.TEXTURE_MAG_FILTER,aL.LINEAR);aL.texParameteri(aL.TEXTURE_2D,aL.TEXTURE_WRAP_S,aL.CLAMP_TO_EDGE);aL.texParameteri(aL.TEXTURE_2D,aL.TEXTURE_WRAP_T,aL.CLAMP_TO_EDGE);aL.framebufferTexture2D(aL.FRAMEBUFFER,aL.COLOR_ATTACHMENT0,aL.TEXTURE_2D,aI,0);aL.bindTexture(aL.TEXTURE_2D,null);aL.bindRenderbuffer(aL.RENDERBUFFER,null);aL.bindFramebuffer(aL.FRAMEBUFFER,null);Q.fTexture[this.glno]=aI;return{framebuffer:aJ,renderbuffer:aH,texture:Q.fTexture[this.glno]};};function K(aH){if(j){return;}this._$P=new Int8Array(8);this._$R0=new DataView(this._$P.buffer);this._$3i=new Int8Array(1000);this._$hL=0;this._$v0=0;this._$S2=0;this._$Ko=new Array();this._$T=aH;this._$F=0;}K.prototype._$fP=function(){var aK=this._$ST();var aJ,aI,aH;if((aK&128)==0){return aK&255;}else{if(((aJ=this._$ST())&128)==0){return((aK&127)<<7)|(aJ&127);}else{if(((aI=this._$ST())&128)==0){return((aK&127)<<14)|((aJ&127)<<7)|(aI&255);}else{if(((aH=this._$ST())&128)==0){return((aK&127)<<21)|((aJ&127)<<14)|((aI&127)<<7)|(aH&255);}else{throw new J("_$L _$0P  _");}}}}};K.prototype.getFormatVersion=function(){return this._$S2;};K.prototype._$gr=function(aH){this._$S2=aH;};K.prototype._$3L=function(){return this._$fP();};K.prototype._$mP=function(){this._$zT();this._$F+=8;return this._$T.getFloat64(this._$F-8);};K.prototype._$_T=function(){this._$zT();this._$F+=4;return this._$T.getFloat32(this._$F-4);};K.prototype._$6L=function(){this._$zT();this._$F+=4;return this._$T.getInt32(this._$F-4);};K.prototype._$ST=function(){this._$zT();return this._$T.getInt8(this._$F++);};K.prototype._$9T=function(){this._$zT();this._$F+=2;return this._$T.getInt16(this._$F-2);};K.prototype._$2T=function(){this._$zT();this._$F+=8;throw new J("_$L _$q read long");};K.prototype._$po=function(){this._$zT();return this._$T.getInt8(this._$F++)!=0;};var O=true;K.prototype._$bT=function(){this._$zT();var aH=this._$3L();var aK=null;if(O){try{var aM=new ArrayBuffer(aH*2);aK=new Uint16Array(aM);for(var aJ=0;aJ<aH;++aJ){aK[aJ]=this._$T.getUint8(this._$F++);}return String.fromCharCode.apply(null,aK);}catch(aL){O=false;}}try{var aI=new Array();if(aK==null){for(var aJ=0;aJ<aH;++aJ){aI[aJ]=this._$T.getUint8(this._$F++);}}else{for(var aJ=0;aJ<aH;++aJ){aI[aJ]=aK[aJ];}}return String.fromCharCode.apply(null,aI);}catch(aL){__NONECONSOLE.log("read utf8 / _$rT _$L0 !! : "+aL);}};K.prototype._$cS=function(){this._$zT();var aI=this._$3L();var aH=new Int32Array(aI);for(var aJ=0;aJ<aI;aJ++){aH[aJ]=this._$T.getInt32(this._$F);this._$F+=4;}return aH;};K.prototype._$Tb=function(){this._$zT();var aI=this._$3L();var aH=new Float32Array(aI);for(var aJ=0;aJ<aI;aJ++){aH[aJ]=this._$T.getFloat32(this._$F);this._$F+=4;}return aH;};K.prototype._$5b=function(){this._$zT();var aI=this._$3L();var aH=new Float64Array(aI);for(var aJ=0;aJ<aI;aJ++){aH[aJ]=this._$T.getFloat64(this._$F);this._$F+=8;}return aH;};K.prototype._$nP=function(){return this._$Jb(-1);};K.prototype._$Jb=function(aJ){this._$zT();if(aJ<0){aJ=this._$3L();}if(aJ==ay._$7P){var aH=this._$6L();if(0<=aH&&aH<this._$Ko.length){return this._$Ko[aH];}else{throw new J("_$sL _$4i @_$m0");}}else{var aI=this._$4b(aJ);this._$Ko.push(aI);return aI;}};K.prototype._$4b=function(aN){if(aN==0){return null;}if(aN==50){var aK=this._$bT();var aI=Z.getID(aK);return aI;}else{if(aN==51){var aK=this._$bT();var aI=n.getID(aK);return aI;}else{if(aN==134){var aK=this._$bT();var aI=i.getID(aK);return aI;}else{if(aN==60){var aK=this._$bT();var aI=z.getID(aK);return aI;}}}}if(aN>=48){var aL=ay._$9o(aN);if(aL!=null){aL._$F0(this);return aL;}else{return null;}}switch(aN){case 1:return this._$bT();case 10:var aM=this._$6L();return new I(aM,true);case 11:return new av(this._$mP(),this._$mP(),this._$mP(),this._$mP());case 12:return new av(this._$_T(),this._$_T(),this._$_T(),this._$_T());case 13:return new e(this._$mP(),this._$mP());case 14:return new e(this._$_T(),this._$_T());case 15:var aH=this._$3L();var aI=new Array(aH);for(var aJ=0;aJ<aH;aJ++){aI[aJ]=this._$nP();}return aI;case 17:var aI=new aD(this._$mP(),this._$mP(),this._$mP(),this._$mP(),this._$mP(),this._$mP());return aI;case 21:return new F(this._$6L(),this._$6L(),this._$6L(),this._$6L());case 22:return new k(this._$6L(),this._$6L());case 23:throw new Error("_$L _$ro ");case 16:case 25:return this._$cS();case 26:return this._$5b();case 27:return this._$Tb();case 2:case 3:case 4:case 5:case 6:case 7:case 8:case 9:case 18:case 19:case 20:case 24:case 28:throw new J("_$6 _$q : _$nP() of 2-9 ,18,19,20,24,28 : "+aN);default:throw new J("_$6 _$q : _$nP() NO _$i : "+aN);}};K.prototype._$8L=function(){if(this._$hL==0){this._$v0=this._$ST();}else{if(this._$hL==8){this._$v0=this._$ST();this._$hL=0;}}return((this._$v0>>(7-this._$hL++))&1)==1;};K.prototype._$zT=function(){if(this._$hL!=0){this._$hL=0;}};function ai(){}ai.prototype._$wP=function(aM,aI,aK){for(var aL=0;aL<aK;aL++){for(var aH=0;aH<aI;aH++){var aJ=2*(aH+aL*aI);__NONECONSOLE.log("(% 7.3f , % 7.3f) , ",aM[aJ],aM[aJ+1]);}__NONECONSOLE.log("\\n");}__NONECONSOLE.log("\\n");};function aC(){}aC._$2S=Math.PI/180;aC._$bS=(Math.PI/180);aC._$wS=180/Math.PI;aC._$NS=(180/Math.PI);aC.PI_F=Math.PI;aC._$kT=[0,0.012368,0.024734,0.037097,0.049454,0.061803,0.074143,0.086471,0.098786,0.111087,0.12337,0.135634,0.147877,0.160098,0.172295,0.184465,0.196606,0.208718,0.220798,0.232844,0.244854,0.256827,0.268761,0.280654,0.292503,0.304308,0.316066,0.327776,0.339436,0.351044,0.362598,0.374097,0.385538,0.396921,0.408243,0.419502,0.430697,0.441826,0.452888,0.463881,0.474802,0.485651,0.496425,0.507124,0.517745,0.528287,0.538748,0.549126,0.559421,0.56963,0.579752,0.589785,0.599728,0.609579,0.619337,0.629,0.638567,0.648036,0.657406,0.666676,0.675843,0.684908,0.693867,0.70272,0.711466,0.720103,0.72863,0.737045,0.745348,0.753536,0.76161,0.769566,0.777405,0.785125,0.792725,0.800204,0.807561,0.814793,0.821901,0.828884,0.835739,0.842467,0.849066,0.855535,0.861873,0.868079,0.874153,0.880093,0.885898,0.891567,0.897101,0.902497,0.907754,0.912873,0.917853,0.922692,0.92739,0.931946,0.936359,0.940629,0.944755,0.948737,0.952574,0.956265,0.959809,0.963207,0.966457,0.96956,0.972514,0.97532,0.977976,0.980482,0.982839,0.985045,0.987101,0.989006,0.990759,0.992361,0.993811,0.995109,0.996254,0.997248,0.998088,0.998776,0.999312,0.999694,0.999924,1];aC._$92=function(aK,aI){var aH=Math.atan2(aK[1],aK[0]);var aJ=Math.atan2(aI[1],aI[0]);return aC._$tS(aH,aJ);};aC._$tS=function(aI,aH){var aJ=aI-aH;while(aJ<-Math.PI){aJ+=2*Math.PI;}while(aJ>Math.PI){aJ-=2*Math.PI;}return aJ;};aC._$9=function(aH){return Math.sin(aH);};aC.fcos=function(aH){return Math.cos(aH);};function aB(aH){if(j){return;}this._$e0=null;this._$IP=null;this._$Us=null;this._$7s=null;this._$IS=[false];this._$VS=null;this._$AT=true;this.baseOpacity=1;this.clipBufPre_clipContext=null;this._$e0=aH;}aB.prototype._$u2=function(){return this._$IS[0];};aB.prototype._$yo=function(){return this._$AT&&!this._$IS[0];};aB.prototype._$GT=function(){return this._$e0;};function r(){}r._$W2=0;r.SYSTEM_INFO=null;r.USER_AGENT=navigator.userAgent;r.isIPhone=function(){if(!r.SYSTEM_INFO){r.setup();}return r.SYSTEM_INFO._isIPhone;};r.isIOS=function(){if(!r.SYSTEM_INFO){r.setup();}return r.SYSTEM_INFO._isIPhone||r.SYSTEM_INFO._isIPad;};r.isAndroid=function(){if(!r.SYSTEM_INFO){r.setup();}return r.SYSTEM_INFO._isAndroid;};r.getOSVersion=function(){if(!r.SYSTEM_INFO){r.setup();}return r.SYSTEM_INFO.version;};r.getOS=function(){if(!r.SYSTEM_INFO){r.setup();}if(r.SYSTEM_INFO._isIPhone||r.SYSTEM_INFO._isIPad){return"iOS";}if(r.SYSTEM_INFO._isAndroid){return"Android";}else{return"_$Q0 OS";}};r.setup=function(){var aK=r.USER_AGENT;function aI(aO,aR){var aN=aO.substring(aR).split(/[ _,;.]/);var aQ=0;for(var aM=0;aM<=2;aM++){if(isNaN(aN[aM])){break;}var aP=parseInt(aN[aM]);if(aP<0||aP>999){q._$li("err : "+aP+" @UtHtml5.setup()");aQ=0;break;}aQ+=aP*Math.pow(1000,(2-aM));}return aQ;}var aL;var aH;var aJ=r.SYSTEM_INFO={userAgent:aK};if((aL=aK.indexOf("iPhone OS "))>=0){aJ.os="iPhone";aJ._isIPhone=true;aJ.version=aI(aK,aL+"iPhone OS ".length);}else{if((aL=aK.indexOf("iPad"))>=0){aL=aK.indexOf("CPU OS");if(aL<0){q._$li(" err : "+aK+" @UtHtml5.setup()");return;}aJ.os="iPad";aJ._isIPad=true;aJ.version=aI(aK,aL+"CPU OS ".length);}else{if((aL=aK.indexOf("Android"))>=0){aJ.os="Android";aJ._isAndroid=true;aJ.version=aI(aK,aL+"Android ".length);}else{aJ.os="-";aJ.version=-1;}}}};window.UtSystem=P;window.UtDebug=q;window.LDTransform=am;window.LDGL=au;window.Live2D=Q;window.Live2DModelWebGL=l;window.Live2DModelJS=v;window.Live2DMotion=ao;window.MotionQueueManager=V;window.PhysicsHair=u;window.AMotion=ah;window.PartsDataID=i;window.DrawDataID=Z;window.BaseDataID=n;window.ParamID=z;Q.init();var j=false;})();
`);
function Ka(t) {
  if (!t.style.width && !t.style.height) {
    let e = getComputedStyle(t);
    e.width === `${t.width}px` && e.height === `${t.height}px` && (t.style.width = `${t.width}px`, t.style.height = `${t.height}px`);
  }
}
function zr(t) {
  let e = document.createElement("canvas");
  return e.id = t.id, e.className = t.className, e.style.cssText = t.style.cssText, e.width = t.width, e.height = t.height, t.parentNode?.replaceChild(e, t), e;
}
var V = {
  MOTION_START: "live2d:motionstart",
  MOTION_END: "live2d:motionend",
  EXPRESSION_START: "live2d:expressionchange",
  LOAD_START: "live2d:loadstart",
  LOAD_PROGRESS: "live2d:loadprogress",
  TAP_BODY: "live2d:tapbody"
}, Qr = class {
  _listeners = {};
  on(t, e) {
    return this._listeners[t] || (this._listeners[t] = []), this._listeners[t].push(e), this;
  }
  emit(t, ...e) {
    this._listeners[t]?.forEach((a) => a(...e));
  }
}, st = new class Be {
  static levelOrder = {
    error: 0,
    warn: 1,
    info: 2,
    trace: 3
  };
  level;
  constructor(e = "warn") {
    this.level = e;
  }
  setLevel(e) {
    e && (this.level = e);
  }
  shouldLog(e) {
    return Be.levelOrder[e] <= Be.levelOrder[this.level];
  }
  error(e, ...a) {
    this.shouldLog("error") && console.error("[L2D][ERROR]", e, ...a);
  }
  warn(e, ...a) {
    this.shouldLog("warn") && console.warn("[L2D][WARN]", e, ...a);
  }
  info(e, ...a) {
    this.shouldLog("info") && console.log("[L2D][INFO]", e, ...a);
  }
  trace(e, ...a) {
    this.shouldLog("trace") && console.log("[L2D][TRACE]", e, ...a);
  }
}(), Wr = class {
  constructor(t) {
    this.state = t;
  }
  isReady(t) {
    return this.state.currentVersion !== null || (st.warn(`${t}: model not loaded yet, call this after the loaded event.`), !1);
  }
  getExpressions() {
    return this.isReady("getExpressions") ? this.state.currentVersion === 2 ? this.state.l2d2Model.getExpressions() : this.state.l2d6Model.getExpressions() : [];
  }
  setExpression(t) {
    this.isReady("setExpression") && (this.state.currentVersion === 2 ? this.state.l2d2Model.setExpression(t) : this.state.l2d6Model.setExpression(t));
  }
};
function qr(t) {
  return t.Version || t.FileReferences ? t.Version || 3 : 2;
}
var B = {
  VIEW_MAX_SCALE: 100,
  VIEW_MIN_SCALE: 0.01,
  VIEW_LOGICAL_LEFT: -1,
  VIEW_LOGICAL_RIGHT: 1,
  VIEW_LOGICAL_MAX_LEFT: -2,
  VIEW_LOGICAL_MAX_RIGHT: 2,
  VIEW_LOGICAL_MAX_BOTTOM: -2,
  VIEW_LOGICAL_MAX_TOP: 2,
  PRIORITY_IDLE: 1,
  PRIORITY_NORMAL: 2,
  PRIORITY_FORCE: 3,
  MOTION_GROUP_IDLE: "idle",
  MOTION_GROUP_PINCH_IN: "pinch_in",
  MOTION_GROUP_PINCH_OUT: "pinch_out"
}, Zr = class {
  constructor() {
    this.live2DModel = null, this.modelMatrix = null, this.eyeBlink = null, this.physics = null, this.pose = null, this.initialized = !1, this.updating = !1, this.alpha = 1, this.accAlpha = 0, this.lipSync = !1, this.lipSyncValue = 0, this.accelX = 0, this.accelY = 0, this.accelZ = 0, this.dragX = 0, this.dragY = 0, this.startTimeMSec = null, this.mainMotionManager = new na(), this.expressionManager = new na(), this.motions = {}, this.expressions = {}, this.isTexLoaded = !1;
  }
  getModelMatrix() {
    return this.modelMatrix;
  }
  setAlpha(t) {
    t > 0.999 && (t = 1), t < 1e-3 && (t = 0), this.alpha = t;
  }
  getAlpha() {
    return this.alpha;
  }
  isInitialized() {
    return this.initialized;
  }
  setInitialized(t) {
    this.initialized = t;
  }
  isUpdating() {
    return this.updating;
  }
  setUpdating(t) {
    this.updating = t;
  }
  getLive2DModel() {
    return this.live2DModel;
  }
  setLipSync(t) {
    this.lipSync = t;
  }
  setLipSyncValue(t) {
    this.lipSyncValue = t;
  }
  setAccel(t, e, a) {
    this.accelX = t, this.accelY = e, this.accelZ = a;
  }
  setDrag(t, e) {
    this.dragX = t, this.dragY = e;
  }
  getMainMotionManager() {
    return this.mainMotionManager;
  }
  getExpressionManager() {
    return this.expressionManager;
  }
  loadModelData(t, e) {
    q.getPlatformManager().loadLive2DModel(t, (a) => {
      this.live2DModel = a, this.live2DModel.saveParam(), Live2D.getError() == 0 && (this.modelMatrix = new ai(this.live2DModel.getCanvasWidth(), this.live2DModel.getCanvasHeight()), this.modelMatrix.setHeight(2), this.modelMatrix.setCenterPosition(0, 0), e(this.live2DModel));
    });
  }
  loadTexture(t, e, a) {
    Se++, q.getPlatformManager().loadTexture(this.live2DModel, t, e, () => {
      Se--, Se == 0 && (this.isTexLoaded = !0), typeof a == "function" && a();
    });
  }
  loadMotion(t, e, a) {
    let r = q.getPlatformManager(), i = null;
    r.loadBytes(e, (s) => {
      i = Live2DMotion.loadMotion(s), t != null && (this.motions[t] = i), a(i);
    });
  }
  loadExpression(t, e, a) {
    q.getPlatformManager().loadBytes(e, (r) => {
      t != null && (this.expressions[t] = Zt.loadJson(r)), typeof a == "function" && a();
    });
  }
  loadPose(t, e) {
    q.getPlatformManager().loadBytes(t, (a) => {
      this.pose = ii.load(a), typeof e == "function" && e();
    });
  }
  loadPhysics(t, e) {
    q.getPlatformManager().loadBytes(t, (a) => {
      this.physics = ri.load(a), typeof e == "function" && e();
    });
  }
  hitTestSimple(t, e, a) {
    let r = this.live2DModel.getDrawDataIndex(t);
    if (r < 0) return !1;
    let i = this.live2DModel.getTransformedPoints(r), s = this.live2DModel.getCanvasWidth(), n = 0, o = this.live2DModel.getCanvasHeight(), l = 0;
    for (let g = 0; g < i.length; g += 2) {
      let u = i[g], d = i[g + 1];
      u < s && (s = u), u > n && (n = u), d < o && (o = d), d > l && (l = d);
    }
    let h = this.modelMatrix.invertTransformX(e), _ = this.modelMatrix.invertTransformY(a);
    return s <= h && h <= n && o <= _ && _ <= l;
  }
}, Se = 0, Zt = class tt extends AMotion {
  constructor() {
    super(), this.paramList = [];
  }
  static loadJson(e) {
    let a = new tt(), r = q.getPlatformManager().jsonParseFromBytes(e);
    if (a.setFadeIn(Number.parseInt(r.fade_in) > 0 ? Number.parseInt(r.fade_in) : 1e3), a.setFadeOut(Number.parseInt(r.fade_out) > 0 ? Number.parseInt(r.fade_out) : 1e3), r.params == null) return a;
    let i = r.params, s = i.length;
    a.paramList = [];
    for (let n = 0; n < s; n++) {
      let o = i[n], l = o.id.toString(), h = Number.parseFloat(o.val), _ = tt.TYPE_ADD, g = o.calc == null ? "add" : o.calc.toString();
      if (_ = g === "add" ? tt.TYPE_ADD : g === "mult" ? tt.TYPE_MULT : g === "set" ? tt.TYPE_SET : tt.TYPE_ADD, _ == tt.TYPE_ADD) {
        let d = o.def == null ? 0 : Number.parseFloat(o.def);
        h -= d;
      } else if (_ == tt.TYPE_MULT) {
        let d = o.def == null ? 1 : Number.parseFloat(o.def);
        d == 0 && (d = 1), h /= d;
      }
      let u = new ti();
      u.id = l, u.type = _, u.value = h, a.paramList.push(u);
    }
    return a;
  }
  updateParamExe(e, a, r, i) {
    for (let s = this.paramList.length - 1; s >= 0; --s) {
      let n = this.paramList[s];
      n.type == tt.TYPE_ADD ? e.addToParamFloat(n.id, n.value, r) : n.type == tt.TYPE_MULT ? e.multParamFloat(n.id, n.value, r) : n.type == tt.TYPE_SET && e.setParamFloat(n.id, n.value, r);
    }
  }
};
Zt.EXPRESSION_DEFAULT = "DEFAULT", Zt.TYPE_SET = 0, Zt.TYPE_ADD = 1, Zt.TYPE_MULT = 2;
function ti() {
  this.id = "", this.type = -1, this.value = null;
}
var ei = class {
  constructor() {
    this.nextBlinkTime = null, this.stateStartTime = null, this.blinkIntervalMsec = null, this.eyeState = k.STATE_FIRST, this.blinkIntervalMsec = 4e3, this.closingMotionMsec = 100, this.closedMotionMsec = 50, this.openingMotionMsec = 150, this.closeIfZero = !0, this.eyeID_L = "PARAM_EYE_L_OPEN", this.eyeID_R = "PARAM_EYE_R_OPEN";
  }
  calcNextBlink() {
    return UtSystem.getUserTimeMSec() + Math.random() * (2 * this.blinkIntervalMsec - 1);
  }
  setInterval(t) {
    this.blinkIntervalMsec = t;
  }
  setEyeMotion(t, e, a) {
    this.closingMotionMsec = t, this.closedMotionMsec = e, this.openingMotionMsec = a;
  }
  updateParam(t) {
    let e = UtSystem.getUserTimeMSec(), a, r = 0;
    switch (this.eyeState) {
      case k.STATE_CLOSING:
        r = (e - this.stateStartTime) / this.closingMotionMsec, r >= 1 && (r = 1, this.eyeState = k.STATE_CLOSED, this.stateStartTime = e), a = 1 - r;
        break;
      case k.STATE_CLOSED:
        r = (e - this.stateStartTime) / this.closedMotionMsec, r >= 1 && (this.eyeState = k.STATE_OPENING, this.stateStartTime = e), a = 0;
        break;
      case k.STATE_OPENING:
        r = (e - this.stateStartTime) / this.openingMotionMsec, r >= 1 && (r = 1, this.eyeState = k.STATE_INTERVAL, this.nextBlinkTime = this.calcNextBlink()), a = r;
        break;
      case k.STATE_INTERVAL:
        this.nextBlinkTime < e && (this.eyeState = k.STATE_CLOSING, this.stateStartTime = e), a = 1;
        break;
      case k.STATE_FIRST:
      default:
        this.eyeState = k.STATE_INTERVAL, this.nextBlinkTime = this.calcNextBlink(), a = 1;
    }
    this.closeIfZero || (a = -a), t.setParamFloat(this.eyeID_L, a), t.setParamFloat(this.eyeID_R, a);
  }
};
function k() {
}
k.STATE_FIRST = "STATE_FIRST", k.STATE_INTERVAL = "STATE_INTERVAL", k.STATE_CLOSING = "STATE_CLOSING", k.STATE_CLOSED = "STATE_CLOSED", k.STATE_OPENING = "STATE_OPENING";
var ct = class De {
  constructor() {
    this.tr = /* @__PURE__ */ new Float32Array(16), this.identity();
  }
  static mul(e, a, r) {
    let i = [
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0
    ], s, n, o;
    for (s = 0; s < 4; s++) for (n = 0; n < 4; n++) for (o = 0; o < 4; o++) i[s + n * 4] += e[s + o * 4] * a[o + n * 4];
    for (s = 0; s < 16; s++) r[s] = i[s];
  }
  identity() {
    for (let e = 0; e < 16; e++) this.tr[e] = +(e % 5 == 0);
  }
  getArray() {
    return this.tr;
  }
  getCopyMatrix() {
    return new Float32Array(this.tr);
  }
  setMatrix(e) {
    if (this.tr != null && this.tr.length == this.tr.length) for (let a = 0; a < 16; a++) this.tr[a] = e[a];
  }
  getScaleX() {
    return this.tr[0];
  }
  getScaleY() {
    return this.tr[5];
  }
  transformX(e) {
    return this.tr[0] * e + this.tr[12];
  }
  transformY(e) {
    return this.tr[5] * e + this.tr[13];
  }
  invertTransformX(e) {
    return (e - this.tr[12]) / this.tr[0];
  }
  invertTransformY(e) {
    return (e - this.tr[13]) / this.tr[5];
  }
  multTranslate(e, a) {
    let r = [
      1,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1,
      0,
      e,
      a,
      0,
      1
    ];
    De.mul(r, this.tr, this.tr);
  }
  translate(e, a) {
    this.tr[12] = e, this.tr[13] = a;
  }
  translateX(e) {
    this.tr[12] = e;
  }
  translateY(e) {
    this.tr[13] = e;
  }
  multScale(e, a) {
    let r = [
      e,
      0,
      0,
      0,
      0,
      a,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1
    ];
    De.mul(r, this.tr, this.tr);
  }
  scale(e, a) {
    this.tr[0] = e, this.tr[5] = a;
  }
}, ai = class extends ct {
  constructor(t, e) {
    super(), this.width = t, this.height = e;
  }
  setPosition(t, e) {
    this.translate(t, e);
  }
  setCenterPosition(t, e) {
    let a = this.width * this.getScaleX(), r = this.height * this.getScaleY();
    this.translate(t - a / 2, e - r / 2);
  }
  top(t) {
    this.setY(t);
  }
  bottom(t) {
    let e = this.height * this.getScaleY();
    this.translateY(t - e);
  }
  left(t) {
    this.setX(t);
  }
  right(t) {
    let e = this.width * this.getScaleX();
    this.translateX(t - e);
  }
  centerX(t) {
    let e = this.width * this.getScaleX();
    this.translateX(t - e / 2);
  }
  centerY(t) {
    let e = this.height * this.getScaleY();
    this.translateY(t - e / 2);
  }
  setX(t) {
    this.translateX(t);
  }
  setY(t) {
    this.translateY(t);
  }
  setHeight(t) {
    let e = t / this.height, a = -e;
    this.scale(e, a);
  }
  setWidth(t) {
    let e = t / this.width, a = -e;
    this.scale(e, a);
  }
}, na = class extends MotionQueueManager {
  constructor() {
    super(), this.currentPriority = null, this.reservePriority = null, this.super = MotionQueueManager.prototype;
  }
  getCurrentPriority() {
    return this.currentPriority;
  }
  getReservePriority() {
    return this.reservePriority;
  }
  reserveMotion(t) {
    return this.reservePriority >= t || this.currentPriority >= t ? !1 : (this.reservePriority = t, !0);
  }
  setReservePriority(t) {
    this.reservePriority = t;
  }
  updateParam(t) {
    let e = MotionQueueManager.prototype.updateParam.call(this, t);
    return this.isFinished() && (this.currentPriority = 0), e;
  }
  startMotionPrio(t, e) {
    return e == this.reservePriority && (this.reservePriority = 0), this.currentPriority = e, this.startMotion(t, !1);
  }
}, ri = class Ga {
  constructor() {
    this.physicsList = [], this.startTimeMSec = UtSystem.getUserTimeMSec();
  }
  static load(e) {
    let a = new Ga(), r = q.getPlatformManager().jsonParseFromBytes(e).physics_hair, i = r.length;
    for (let s = 0; s < i; s++) {
      let n = r[s], o = new PhysicsHair(), l = n.setup, h = Number.parseFloat(l.length), _ = Number.parseFloat(l.regist), g = Number.parseFloat(l.mass);
      o.setup(h, _, g);
      let u = n.src, d = u.length;
      for (let f = 0; f < d; f++) {
        let m = u[f], v = m.id, b = PhysicsHair.Src.SRC_TO_X, y = m.ptype;
        y === "x" ? b = PhysicsHair.Src.SRC_TO_X : y === "y" ? b = PhysicsHair.Src.SRC_TO_Y : y === "angle" ? b = PhysicsHair.Src.SRC_TO_G_ANGLE : UtDebug.error("live2d", "Invalid parameter:PhysicsHair.Src");
        let S = Number.parseFloat(m.scale), C = Number.parseFloat(m.weight);
        o.addSrcParam(b, v, S, C);
      }
      let c = n.targets, p = c.length;
      for (let f = 0; f < p; f++) {
        let m = c[f], v = m.id, b = PhysicsHair.Target.TARGET_FROM_ANGLE, y = m.ptype;
        y === "angle" ? b = PhysicsHair.Target.TARGET_FROM_ANGLE : y === "angle_v" ? b = PhysicsHair.Target.TARGET_FROM_ANGLE_V : UtDebug.error("live2d", "Invalid parameter:PhysicsHair.Target");
        let S = Number.parseFloat(m.scale), C = Number.parseFloat(m.weight);
        o.addTargetParam(b, v, S, C);
      }
      a.physicsList.push(o);
    }
    return a;
  }
  updateParam(e) {
    let a = UtSystem.getUserTimeMSec() - this.startTimeMSec;
    for (let r = 0; r < this.physicsList.length; r++) this.physicsList[r].update(e, a);
  }
}, ii = class Ya {
  constructor() {
    this.lastTime = 0, this.lastModel = null, this.partsGroups = [];
  }
  static load(e) {
    let a = new Ya(), r = q.getPlatformManager().jsonParseFromBytes(e).parts_visible, i = r.length;
    for (let s = 0; s < i; s++) {
      let n = r[s].group, o = n.length, l = [];
      for (let h = 0; h < o; h++) {
        let _ = n[h], g = new oa(_.id);
        if (l[h] = g, _.link == null) continue;
        let u = _.link, d = u.length;
        g.link = [];
        for (let c = 0; c < d; c++) {
          let p = new oa(u[c]);
          g.link.push(p);
        }
      }
      a.partsGroups.push(l);
    }
    return a;
  }
  updateParam(e) {
    if (e == null) return;
    e != this.lastModel && this.initParam(e), this.lastModel = e;
    let a = UtSystem.getUserTimeMSec(), r = this.lastTime == 0 ? 0 : (a - this.lastTime) / 1e3;
    this.lastTime = a, r < 0 && (r = 0);
    for (let i = 0; i < this.partsGroups.length; i++) this.normalizePartsOpacityGroup(e, this.partsGroups[i], r), this.copyOpacityOtherParts(e, this.partsGroups[i]);
  }
  initParam(e) {
    if (e != null) for (let a = 0; a < this.partsGroups.length; a++) {
      let r = this.partsGroups[a];
      for (let i = 0; i < r.length; i++) {
        r[i].initIndex(e);
        let s = r[i].partsIndex, n = r[i].paramIndex;
        if (s < 0) continue;
        let o = e.getParamFloat(n) != 0;
        if (e.setPartsOpacity(s, +!!o), e.setParamFloat(n, +!!o), r[i].link != null) for (let l = 0; l < r[i].link.length; l++) r[i].link[l].initIndex(e);
      }
    }
  }
  normalizePartsOpacityGroup(e, a, r) {
    let i = -1, s = 1, n = 0.5, o = 0.15;
    for (let l = 0; l < a.length; l++) {
      let h = a[l].partsIndex, _ = a[l].paramIndex;
      if (!(h < 0) && e.getParamFloat(_) != 0) {
        if (i >= 0) break;
        i = l, s = e.getPartsOpacity(h), s += r / 0.5, s > 1 && (s = 1);
      }
    }
    i < 0 && (i = 0, s = 1);
    for (let l = 0; l < a.length; l++) {
      let h = a[l].partsIndex;
      if (!(h < 0))
        if (i == l) e.setPartsOpacity(h, s);
        else {
          let _ = e.getPartsOpacity(h), g;
          g = s < n ? s * -0.5 / n + 1 : (1 - s) * n / 0.5, (1 - g) * (1 - s) > o && (g = 1 - o / (1 - s)), _ > g && (_ = g), e.setPartsOpacity(h, _);
        }
    }
  }
  copyOpacityOtherParts(e, a) {
    for (let r = 0; r < a.length; r++) {
      let i = a[r];
      if (i.link == null || i.partsIndex < 0) continue;
      let s = e.getPartsOpacity(i.partsIndex);
      for (let n = 0; n < i.link.length; n++) {
        let o = i.link[n];
        o.partsIndex < 0 || e.setPartsOpacity(o.partsIndex, s);
      }
    }
  }
}, oa = class {
  constructor(t) {
    this.paramIndex = -1, this.partsIndex = -1, this.link = null, this.id = t;
  }
  initIndex(t) {
    this.paramIndex = t.getParamIndex(`VISIBLE:${this.id}`), this.partsIndex = t.getPartsDataIndex(PartsDataID.getID(this.id)), t.setParamFloat(this.paramIndex, 1);
  }
}, ja = class ue {
  constructor() {
    this.EPSILON = 0.01, this.faceTargetX = 0, this.faceTargetY = 0, this.faceX = 0, this.faceY = 0, this.faceVX = 0, this.faceVY = 0, this.lastTimeSec = 0;
  }
  setPoint(e, a) {
    this.faceTargetX = e, this.faceTargetY = a;
  }
  getX() {
    return this.faceX;
  }
  getY() {
    return this.faceY;
  }
  update() {
    let e = 5.333333333333333 / ue.FRAME_RATE;
    if (this.lastTimeSec == 0) {
      this.lastTimeSec = UtSystem.getUserTimeMSec();
      return;
    }
    let a = UtSystem.getUserTimeMSec(), r = (a - this.lastTimeSec) * ue.FRAME_RATE / 1e3;
    this.lastTimeSec = a;
    let i = 0.15 * ue.FRAME_RATE, s = r * e / i, n = this.faceTargetX - this.faceX, o = this.faceTargetY - this.faceY;
    if (Math.abs(n) <= this.EPSILON && Math.abs(o) <= this.EPSILON) return;
    let l = Math.sqrt(n * n + o * o), h = e * n / l, _ = e * o / l, g = h - this.faceVX, u = _ - this.faceVY, d = Math.sqrt(g * g + u * u);
    (d < -s || d > s) && (g *= s / d, u *= s / d, d = s), this.faceVX += g, this.faceVY += u;
    {
      let c = 0.5 * (Math.sqrt(s * s + 16 * s * l - 8 * s * l) - s), p = Math.sqrt(this.faceVX * this.faceVX + this.faceVY * this.faceVY);
      p > c && (this.faceVX *= c / p, this.faceVY *= c / p);
    }
    this.faceX += this.faceVX, this.faceY += this.faceVY;
  }
};
ja.FRAME_RATE = 30;
var la = class extends ct {
  constructor() {
    super(), this.screenLeft = null, this.screenRight = null, this.screenTop = null, this.screenBottom = null, this.maxLeft = null, this.maxRight = null, this.maxTop = null, this.maxBottom = null, this.max = Number.MAX_VALUE, this.min = 0;
  }
  getMaxScale() {
    return this.max;
  }
  getMinScale() {
    return this.min;
  }
  setMaxScale(t) {
    this.max = t;
  }
  setMinScale(t) {
    this.min = t;
  }
  isMaxScale() {
    return this.getScaleX() == this.max;
  }
  isMinScale() {
    return this.getScaleX() == this.min;
  }
  adjustTranslate(t, e) {
    this.tr[0] * this.maxLeft + (this.tr[12] + t) > this.screenLeft && (t = this.screenLeft - this.tr[0] * this.maxLeft - this.tr[12]), this.tr[0] * this.maxRight + (this.tr[12] + t) < this.screenRight && (t = this.screenRight - this.tr[0] * this.maxRight - this.tr[12]), this.tr[5] * this.maxTop + (this.tr[13] + e) < this.screenTop && (e = this.screenTop - this.tr[5] * this.maxTop - this.tr[13]), this.tr[5] * this.maxBottom + (this.tr[13] + e) > this.screenBottom && (e = this.screenBottom - this.tr[5] * this.maxBottom - this.tr[13]);
    let a = [
      1,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1,
      0,
      t,
      e,
      0,
      1
    ];
    ct.mul(a, this.tr, this.tr);
  }
  adjustScale(t, e, a) {
    let r = a * this.tr[0];
    r < this.min ? this.tr[0] > 0 && (a = this.min / this.tr[0]) : r > this.max && this.tr[0] > 0 && (a = this.max / this.tr[0]);
    let i = [
      1,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1,
      0,
      t,
      e,
      0,
      1
    ], s = [
      a,
      0,
      0,
      0,
      0,
      a,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1
    ], n = [
      1,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1,
      0,
      -t,
      -e,
      0,
      1
    ];
    ct.mul(n, this.tr, this.tr), ct.mul(s, this.tr, this.tr), ct.mul(i, this.tr, this.tr);
  }
  setScreenRect(t, e, a, r) {
    this.screenLeft = t, this.screenRight = e, this.screenTop = r, this.screenBottom = a;
  }
  setMaxScreenRect(t, e, a, r) {
    this.maxLeft = t, this.maxRight = e, this.maxTop = r, this.maxBottom = a;
  }
  getScreenLeft() {
    return this.screenLeft;
  }
  getScreenRight() {
    return this.screenRight;
  }
  getScreenBottom() {
    return this.screenBottom;
  }
  getScreenTop() {
    return this.screenTop;
  }
  getMaxLeft() {
    return this.maxLeft;
  }
  getMaxRight() {
    return this.maxRight;
  }
  getMaxBottom() {
    return this.maxBottom;
  }
  getMaxTop() {
    return this.maxTop;
  }
}, q = class He {
  static getPlatformManager() {
    return He.platformManager;
  }
  static setPlatformManager(e) {
    He.platformManager = e;
  }
};
q.platformManager = null;
var X = class {
  static reset() {
    this.depth = 0;
  }
  static loadIdentity() {
    for (let t = 0; t < 16; t++) this.currentMatrix[t] = +(t % 5 == 0);
  }
  static push() {
    this.depth * 16;
    let t = (this.depth + 1) * 16;
    this.matrixStack.length < t + 16 && (this.matrixStack.length = t + 16);
    for (let e = 0; e < 16; e++) this.matrixStack[t + e] = this.currentMatrix[e];
    this.depth++;
  }
  static pop() {
    this.depth--, this.depth < 0 && (this.depth = 0);
    let t = this.depth * 16;
    for (let e = 0; e < 16; e++) this.currentMatrix[e] = this.matrixStack[t + e];
  }
  static getMatrix() {
    return this.currentMatrix;
  }
  static multMatrix(t) {
    let e, a, r;
    for (e = 0; e < 16; e++) this.tmp[e] = 0;
    for (e = 0; e < 4; e++) for (a = 0; a < 4; a++) for (r = 0; r < 4; r++) this.tmp[e + a * 4] += this.currentMatrix[e + r * 4] * t[r + a * 4];
    for (e = 0; e < 16; e++) this.currentMatrix[e] = this.tmp[e];
  }
};
X.matrixStack = [
  1,
  0,
  0,
  0,
  0,
  1,
  0,
  0,
  0,
  0,
  1,
  0,
  0,
  0,
  0,
  1
], X.depth = 0, X.currentMatrix = [
  1,
  0,
  0,
  0,
  0,
  1,
  0,
  0,
  0,
  0,
  1,
  0,
  0,
  0,
  0,
  1
], X.tmp = Array.from({ length: 16 });
var ha = class {
  constructor() {
    this.NAME = "name", this.ID = "id", this.MODEL = "model", this.TEXTURES = "textures", this.HIT_AREAS = "hit_areas", this.HIT_AREAS_CUSTOM = "hit_areas_custom", this.PHYSICS = "physics", this.POSE = "pose", this.EXPRESSIONS = "expressions", this.MOTION_GROUPS = "motions", this.SOUND = "sound", this.FADE_IN = "fade_in", this.FADE_OUT = "fade_out", this.LAYOUT = "layout", this.INIT_PARAM = "init_param", this.INIT_PARTS_VISIBLE = "init_parts_visible", this.VALUE = "val", this.FILE = "file", this.json = {};
  }
  loadModelSetting(t, e) {
    q.getPlatformManager().loadBytes(t, (a) => {
      let r = String.fromCharCode.apply(null, new Uint8Array(a));
      this.json = JSON.parse(r), e();
    });
  }
  getTextureFile(t) {
    return this.json[this.TEXTURES] == null || this.json[this.TEXTURES][t] == null ? null : this.json[this.TEXTURES][t];
  }
  getModelFile() {
    return this.json[this.MODEL];
  }
  getTextureNum() {
    return this.json[this.TEXTURES] == null ? 0 : this.json[this.TEXTURES].length;
  }
  getHitAreaNum() {
    return this.json[this.HIT_AREAS] == null ? 0 : this.json[this.HIT_AREAS].length;
  }
  getHitAreaCustom() {
    return this.json[this.HIT_AREAS_CUSTOM];
  }
  getHitAreaID(t) {
    return this.json[this.HIT_AREAS] == null || this.json[this.HIT_AREAS][t] == null ? null : this.json[this.HIT_AREAS][t][this.ID];
  }
  getHitAreaName(t) {
    return this.json[this.HIT_AREAS] == null || this.json[this.HIT_AREAS][t] == null ? null : this.json[this.HIT_AREAS][t][this.NAME];
  }
  getPhysicsFile() {
    return this.json[this.PHYSICS];
  }
  getPoseFile() {
    return this.json[this.POSE];
  }
  getExpressionNum() {
    return this.json[this.EXPRESSIONS] == null ? 0 : this.json[this.EXPRESSIONS].length;
  }
  getExpressionFile(t) {
    return this.json[this.EXPRESSIONS] == null ? null : this.json[this.EXPRESSIONS][t][this.FILE];
  }
  getExpressionName(t) {
    return this.json[this.EXPRESSIONS] == null ? null : this.json[this.EXPRESSIONS][t][this.NAME];
  }
  getLayout() {
    return this.json[this.LAYOUT];
  }
  getInitParamNum() {
    return this.json[this.INIT_PARAM] == null ? 0 : this.json[this.INIT_PARAM].length;
  }
  getMotionNum(t) {
    return this.json[this.MOTION_GROUPS] == null || this.json[this.MOTION_GROUPS][t] == null ? 0 : this.json[this.MOTION_GROUPS][t].length;
  }
  getMotionFile(t, e) {
    return this.json[this.MOTION_GROUPS] == null || this.json[this.MOTION_GROUPS][t] == null || this.json[this.MOTION_GROUPS][t][e] == null ? null : this.json[this.MOTION_GROUPS][t][e][this.FILE];
  }
  getMotionSound(t, e) {
    return this.json[this.MOTION_GROUPS] == null || this.json[this.MOTION_GROUPS][t] == null || this.json[this.MOTION_GROUPS][t][e] == null || this.json[this.MOTION_GROUPS][t][e][this.SOUND] == null ? null : this.json[this.MOTION_GROUPS][t][e][this.SOUND];
  }
  getMotionFadeIn(t, e) {
    return this.json[this.MOTION_GROUPS] == null || this.json[this.MOTION_GROUPS][t] == null || this.json[this.MOTION_GROUPS][t][e] == null || this.json[this.MOTION_GROUPS][t][e][this.FADE_IN] == null ? 1e3 : this.json[this.MOTION_GROUPS][t][e][this.FADE_IN];
  }
  getMotionFadeOut(t, e) {
    return this.json[this.MOTION_GROUPS] == null || this.json[this.MOTION_GROUPS][t] == null || this.json[this.MOTION_GROUPS][t][e] == null || this.json[this.MOTION_GROUPS][t][e][this.FADE_OUT] == null ? 1e3 : this.json[this.MOTION_GROUPS][t][e][this.FADE_OUT];
  }
  getInitParamID(t) {
    return this.json[this.INIT_PARAM] == null || this.json[this.INIT_PARAM][t] == null ? null : this.json[this.INIT_PARAM][t][this.ID];
  }
  getInitParamValue(t) {
    return this.json[this.INIT_PARAM] == null || this.json[this.INIT_PARAM][t] == null ? NaN : this.json[this.INIT_PARAM][t][this.VALUE];
  }
  getInitPartsVisibleNum() {
    return this.json[this.INIT_PARTS_VISIBLE] == null ? 0 : this.json[this.INIT_PARTS_VISIBLE].length;
  }
  getInitPartsVisibleID(t) {
    return this.json[this.INIT_PARTS_VISIBLE] == null || this.json[this.INIT_PARTS_VISIBLE][t] == null ? null : this.json[this.INIT_PARTS_VISIBLE][t][this.ID];
  }
  getInitPartsVisibleValue(t) {
    return this.json[this.INIT_PARTS_VISIBLE] == null || this.json[this.INIT_PARTS_VISIBLE][t] == null ? NaN : this.json[this.INIT_PARTS_VISIBLE][t][this.VALUE];
  }
}, ua = class extends Zr {
  constructor() {
    super(), this.modelHomeDir = "", this.modelSetting = null, this.tmpMatrix = [];
  }
  loadJSON(t) {
    let e = this.modelSetting.getTextureNum(), a = this.modelSetting.getPoseFile() == null ? 0 : 1, r = 1 + e + a, i = 0;
    this._progressFn = (n) => this.onProgress?.(++i, r, n), this.onLoadStart?.(r);
    let s = this.modelHomeDir + this.modelSetting.getModelFile();
    this.loadModelData(s, (n) => {
      this.onModelFileLoaded?.(), this._progressFn?.(s);
      for (let o = 0; o < e; o++) {
        let l = this.modelHomeDir + this.modelSetting.getTextureFile(o);
        this.loadTexture(o, l, () => {
          if (this._progressFn?.(l), this.isTexLoaded) {
            if (this.onTexturesLoaded?.(), this.modelSetting.getExpressionNum() > 0) {
              this.expressions = {};
              for (let _ = 0; _ < this.modelSetting.getExpressionNum(); _++) {
                let g = this.modelSetting.getExpressionName(_), u = this.modelHomeDir + this.modelSetting.getExpressionFile(_);
                this.loadExpression(g, u);
              }
            } else this.expressionManager = null, this.expressions = {};
            if (this.eyeBlink ??= new ei(), this.modelSetting.getPhysicsFile() != null) {
              let _ = this.modelHomeDir + this.modelSetting.getPhysicsFile();
              this.loadPhysics(_);
            } else this.physics = null;
            if (this.modelSetting.getLayout() != null) {
              let _ = this.modelSetting.getLayout();
              _.width != null && this.modelMatrix.setWidth(_.width), _.height != null && this.modelMatrix.setHeight(_.height), _.x != null && this.modelMatrix.setX(_.x), _.y != null && this.modelMatrix.setY(_.y), _.center_x != null && this.modelMatrix.centerX(_.center_x), _.center_y != null && this.modelMatrix.centerY(_.center_y), _.top != null && this.modelMatrix.top(_.top), _.bottom != null && this.modelMatrix.bottom(_.bottom), _.left != null && this.modelMatrix.left(_.left), _.right != null && this.modelMatrix.right(_.right);
            }
            for (let _ = 0; _ < this.modelSetting.getInitParamNum(); _++) this.live2DModel.setParamFloat(this.modelSetting.getInitParamID(_), this.modelSetting.getInitParamValue(_));
            for (let _ = 0; _ < this.modelSetting.getInitPartsVisibleNum(); _++) this.live2DModel.setPartsOpacity(this.modelSetting.getInitPartsVisibleID(_), this.modelSetting.getInitPartsVisibleValue(_));
            this.live2DModel.saveParam(), this.preloadMotionGroup(B.MOTION_GROUP_IDLE), this.mainMotionManager.stopAllMotions();
            let h = () => {
              this.setUpdating(!1), this.setInitialized(!0), typeof t == "function" && t();
            };
            if (this.modelSetting.getPoseFile() != null) {
              let _ = this.modelHomeDir + this.modelSetting.getPoseFile();
              this.loadPose(_, () => {
                this.pose.updateParam(this.live2DModel), this._progressFn?.(_), h();
              });
            } else this.pose = null, h();
          }
        });
      }
    });
  }
  async loadModelSetting(t, e) {
    this.setUpdating(!0), this.setInitialized(!1), this.modelHomeDir = t.substring(0, t.lastIndexOf("/") + 1), this.modelSetting = new ha(), this.modelSetting.json = e, await new Promise((a) => this.loadJSON(a));
  }
  load(t, e, a) {
    this.setUpdating(!0), this.setInitialized(!1), this.modelHomeDir = e.substring(0, e.lastIndexOf("/") + 1), this.modelSetting = new ha(), this.modelSetting.loadModelSetting(e, () => {
      this.loadJSON(a);
    });
  }
  release(t) {
    let e = q.getPlatformManager();
    t.deleteTexture(e.texture);
  }
  preloadMotionGroup(t) {
    for (let e = 0; e < this.modelSetting.getMotionNum(t); e++) {
      let a = this.modelSetting.getMotionFile(t, e), r = this.modelHomeDir + a, i = `${t}_${e}`;
      this.loadMotion(i, r, (s) => {
        s.setFadeIn(this.modelSetting.getMotionFadeIn(t, e)), s.setFadeOut(this.modelSetting.getMotionFadeOut(t, e));
      });
    }
  }
  update() {
    if (this.live2DModel == null) return;
    let t = (UtSystem.getUserTimeMSec() - this.startTimeMSec) / 1e3 * 2 * Math.PI;
    if (this.mainMotionManager.isFinished() && (this._motionIsPlaying && (this._motionIsPlaying = !1, this.onMotionEnd?.({
      group: this._currentMotionGroup,
      index: this._currentMotionIndex,
      file: this.modelSetting.getMotionFile(this._currentMotionGroup, this._currentMotionIndex)
    })), this.startRandomMotion(B.MOTION_GROUP_IDLE, B.PRIORITY_IDLE)), this.live2DModel.loadParam(), this.mainMotionManager.updateParam(this.live2DModel) || this.eyeBlink != null && this.eyeBlink.updateParam(this.live2DModel), this.live2DModel.saveParam(), this.expressionManager != null && this.expressions != null && !this.expressionManager.isFinished() && this.expressionManager.updateParam(this.live2DModel), this.live2DModel.addToParamFloat("PARAM_ANGLE_X", this.dragX * 30, 1), this.live2DModel.addToParamFloat("PARAM_ANGLE_Y", this.dragY * 30, 1), this.live2DModel.addToParamFloat("PARAM_ANGLE_Z", this.dragX * this.dragY * -30, 1), this.live2DModel.addToParamFloat("PARAM_BODY_ANGLE_X", this.dragX * 10, 1), this.live2DModel.addToParamFloat("PARAM_EYE_BALL_X", this.dragX, 1), this.live2DModel.addToParamFloat("PARAM_EYE_BALL_Y", this.dragY, 1), this.live2DModel.addToParamFloat("PARAM_ANGLE_X", Number(15 * Math.sin(t / 6.5345)), 0.5), this.live2DModel.addToParamFloat("PARAM_ANGLE_Y", Number(8 * Math.sin(t / 3.5345)), 0.5), this.live2DModel.addToParamFloat("PARAM_ANGLE_Z", Number(10 * Math.sin(t / 5.5345)), 0.5), this.live2DModel.addToParamFloat("PARAM_BODY_ANGLE_X", Number(4 * Math.sin(t / 15.5345)), 0.5), this.live2DModel.setParamFloat("PARAM_BREATH", Number(0.5 + 0.5 * Math.sin(t / 3.2345)), 1), this.physics != null && this.physics.updateParam(this.live2DModel), this.lipSync ?? this.live2DModel.setParamFloat("PARAM_MOUTH_OPEN_Y", this.lipSyncValue), this.pose != null && this.pose.updateParam(this.live2DModel), this._forcedParams != null) for (let [e, a] of Object.entries(this._forcedParams)) this.live2DModel.setParamFloat(e, a, 1);
    this.live2DModel.update();
  }
  setRandomExpression() {
    let t = [];
    for (let a in this.expressions) t.push(a);
    let e = Number.parseInt(Math.random() * t.length);
    this.setExpression(t[e]);
  }
  startRandomMotion(t, e) {
    let a = this.modelSetting.getMotionNum(t), r = Number.parseInt(Math.random() * a);
    this.startMotion(t, r, e);
  }
  startMotion(t, e, a) {
    let r = this.modelSetting.getMotionFile(t, e);
    if (r == null || r == "") return;
    if (a == B.PRIORITY_FORCE) this.mainMotionManager.setReservePriority(a);
    else if (!this.mainMotionManager.reserveMotion(a)) return;
    this._currentMotionGroup = t, this._currentMotionIndex = e;
    let i = `${t}_${e}`;
    if (this.motions[i] == null) this.loadMotion(i, this.modelHomeDir + r, (s) => {
      let n = s?.getDurationMSec?.(), o = n != null && n >= 0 ? n / 1e3 : -1;
      this.onMotionStart?.({
        group: t,
        index: e,
        duration: o,
        file: r
      }), this.setFadeInFadeOut(t, e, a, s);
    });
    else {
      let s = this.motions[i]?.getDurationMSec?.(), n = s != null && s >= 0 ? s / 1e3 : -1;
      this.onMotionStart?.({
        group: t,
        index: e,
        duration: n,
        file: r
      }), this.setFadeInFadeOut(t, e, a, this.motions[i]);
    }
  }
  setFadeInFadeOut(t, e, a, r) {
    if (r.setFadeIn(this.modelSetting.getMotionFadeIn(t, e)), r.setFadeOut(this.modelSetting.getMotionFadeOut(t, e)), this._motionIsPlaying = !0, this.modelSetting.getMotionSound(t, e) == null) this.mainMotionManager.startMotionPrio(r, a);
    else {
      let i = this.modelSetting.getMotionSound(t, e), s = document.createElement("audio");
      s.src = this.modelHomeDir + i, s.volume = this._volume ?? 0, s.play().catch(() => {
      }), this.mainMotionManager.startMotionPrio(r, a);
    }
  }
  setExpression(t) {
    let e, a = this.expressions[t];
    (e = this.expressionManager) == null || e.startMotion(a, !1), this.onExpressionStart?.({ id: t });
  }
  draw(t) {
    X.push(), X.multMatrix(this.modelMatrix.getArray()), this.tmpMatrix = X.getMatrix(), this.live2DModel.setMatrix(this.tmpMatrix), this.live2DModel.draw(), X.pop();
  }
  hitTest(t, e, a) {
    let r = this.modelSetting.getHitAreaNum();
    if (r == 0) {
      let i = this.modelSetting.getHitAreaCustom();
      if (i) {
        let s = i[`${t}_x`], n = i[`${t}_y`];
        if (e > Math.min(...s) && e < Math.max(...s) && a > Math.min(...n) && a < Math.max(...n)) return !0;
      }
    }
    for (let i = 0; i < r; i++) if (t == this.modelSetting.getHitAreaName(i)) {
      let s = this.modelSetting.getHitAreaID(i);
      return this.hitTestSimple(s, e, a);
    }
    return !1;
  }
}, si = class {
  constructor(t, e = 0) {
    this.cache = {}, this.canvas = t, this.glContextIndex = e;
  }
  loadBytes(t, e) {
    if (t in this.cache) return e(this.cache[t]);
    fetch(t).then((a) => a.arrayBuffer()).then((a) => {
      this.cache[t] = a, e(a);
    });
  }
  loadLive2DModel(t, e) {
    let a = null;
    this.loadBytes(t, (r) => {
      a = Live2DModelWebGL.loadModel(r, this.glContextIndex), e(a);
    });
  }
  loadTexture(t, e, a, r) {
    let i = new Image();
    i.crossOrigin = "anonymous", i.src = a, i.onload = () => {
      let s = this.canvas;
      if (!s) throw Error("无法找到 canvas 元素");
      let n = s.getContext("webgl2", {
        premultipliedAlpha: !0,
        preserveDrawingBuffer: !0
      });
      if (!n) throw Error("无法获取 WebGL 上下文");
      let o = n.createTexture();
      if (!o) throw Error("Failed to generate gl texture name.");
      t.isPremultipliedAlpha() == 0 && n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 1), n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL, 1), n.activeTexture(n.TEXTURE0), n.bindTexture(n.TEXTURE_2D, o), n.texImage2D(n.TEXTURE_2D, 0, n.RGBA, n.RGBA, n.UNSIGNED_BYTE, i), n.texParameteri(n.TEXTURE_2D, n.TEXTURE_MAG_FILTER, n.LINEAR), n.texParameteri(n.TEXTURE_2D, n.TEXTURE_MIN_FILTER, n.LINEAR_MIPMAP_NEAREST), n.generateMipmap(n.TEXTURE_2D), t.setTexture(e, o), o = null, typeof r == "function" && r();
    }, i.onerror = () => {
    };
  }
  jsonParseFromBytes(t) {
    let e, a = new Uint8Array(t, 0, 3);
    return e = a[0] == 239 && a[1] == 187 && a[2] == 191 ? String.fromCharCode.apply(null, new Uint8Array(t, 3)) : String.fromCharCode.apply(null, new Uint8Array(t)), JSON.parse(e);
  }
}, ni = class {
  constructor(t, e = 0) {
    this.model = null, this.reloading = !1, this.platformManager = new si(t, e), Live2D.init();
  }
  activatePlatformManager() {
    q.setPlatformManager(this.platformManager);
  }
  getModel() {
    return this.model;
  }
  releaseModel(t) {
    this.model &&= (this.model.release(t), null);
  }
  async changeModel(t, e) {
    return new Promise((a, r) => {
      if (this.reloading) return;
      this.reloading = !0;
      let i = this.model, s = new ua();
      s.load(t, e, () => {
        i && i.release(t), this.model = s, this.reloading = !1, a();
      });
    });
  }
  async changeModelWithJSON(t, e, a) {
    if (this.reloading) return;
    this.reloading = !0;
    let r = this.model, i = new ua();
    i.onModelFileLoaded = this.onModelFileLoaded, i.onTexturesLoaded = this.onTexturesLoaded, i.onLoadStart = this.onLoadStart, i.onProgress = this.onProgress, i.onMotionStart = this.onMotionStart, i.onMotionEnd = this.onMotionEnd, i.onExpressionStart = this.onExpressionStart, await i.loadModelSetting(e, a), r && r.release(t), this.model = i, this.reloading = !1;
  }
  setDrag(t, e) {
    this.model && this.model.setDrag(t, e);
  }
  maxScaleEvent() {
    this.model && this.model.startRandomMotion(B.MOTION_GROUP_PINCH_IN, B.PRIORITY_NORMAL);
  }
  minScaleEvent() {
    this.model && this.model.startRandomMotion(B.MOTION_GROUP_PINCH_OUT, B.PRIORITY_NORMAL);
  }
}, Me = Promise.resolve(), oi = 0, li = class {
  constructor(t) {
    this._glContextIndex = oi++, this.live2DMgr = new ni(t, this._glContextIndex), this._destroyed = !1, this.isDrawStart = !1, this.gl = null, this.canvas = null, this.dragMgr = null, this.viewMatrix = null, this.projMatrix = null, this.deviceToScreen = null, this._boundMouseEvent = this.mouseEvent.bind(this), this._boundTouchEvent = this.touchEvent.bind(this), this._resizeRafId = null;
  }
  initL2dCanvas(t) {
    this.canvas = t, this.canvas.addEventListener && (this.canvas.addEventListener("click", this._boundMouseEvent, !1), document.addEventListener("mousemove", this._boundMouseEvent, !1), document.addEventListener("mouseout", this._boundMouseEvent, !1), this.canvas.addEventListener("contextmenu", this._boundMouseEvent, !1), this.canvas.addEventListener("touchstart", this._boundTouchEvent, !1), this.canvas.addEventListener("touchend", this._boundTouchEvent, !1), this.canvas.addEventListener("touchmove", this._boundTouchEvent, !1)), Ka(this.canvas), this._resizeObserver = new ResizeObserver(() => {
      this._resizeRafId ||= requestAnimationFrame(() => {
        this._resizeRafId = null, this.resize();
      });
    }), this._resizeObserver.observe(this.canvas);
  }
  async init(t, e, a) {
    return Me = Me.then(async () => {
      this.initL2dCanvas(t);
      let r = this.canvas.width, i = this.canvas.height;
      this.dragMgr = new ja();
      let s = i / r, n = B.VIEW_LOGICAL_LEFT, o = B.VIEW_LOGICAL_RIGHT, l = -s, h = s;
      if (this.viewMatrix = new la(), this.viewMatrix.setScreenRect(n, o, l, h), this.viewMatrix.setMaxScreenRect(B.VIEW_LOGICAL_MAX_LEFT, B.VIEW_LOGICAL_MAX_RIGHT, B.VIEW_LOGICAL_MAX_BOTTOM, B.VIEW_LOGICAL_MAX_TOP), this.viewMatrix.setMaxScale(B.VIEW_MAX_SCALE), this.viewMatrix.setMinScale(B.VIEW_MIN_SCALE), this.projMatrix = new ct(), this.projMatrix.multScale(1, r / i), this.deviceToScreen = new ct(), this.deviceToScreen.multTranslate(-r / 2, -i / 2), this.deviceToScreen.multScale(2 / r, -2 / r), this.gl = this.canvas.getContext("webgl2", {
        premultipliedAlpha: !0,
        preserveDrawingBuffer: !0
      }), !this.gl) throw Error("Failed to create WebGL context.");
      this.live2DMgr.activatePlatformManager(), Live2D.setGL(this.gl, this._glContextIndex), this.live2DMgr.onLoadStart = (g) => window.dispatchEvent(new CustomEvent(V.LOAD_START, { detail: {
        canvas: this.canvas,
        total: g
      } })), this.live2DMgr.onProgress = (g, u, d) => window.dispatchEvent(new CustomEvent(V.LOAD_PROGRESS, { detail: {
        canvas: this.canvas,
        loaded: g,
        total: u,
        file: d
      } })), this.live2DMgr.onMotionStart = ({ group: g, index: u, duration: d, file: c }) => window.dispatchEvent(new CustomEvent(V.MOTION_START, { detail: {
        canvas: this.canvas,
        group: g,
        index: u,
        duration: d,
        file: c
      } })), this.live2DMgr.onMotionEnd = ({ group: g, index: u, file: d }) => window.dispatchEvent(new CustomEvent(V.MOTION_END, { detail: {
        canvas: this.canvas,
        group: g,
        index: u,
        file: d
      } })), this.live2DMgr.onExpressionStart = ({ id: g }) => window.dispatchEvent(new CustomEvent(V.EXPRESSION_START, { detail: {
        canvas: this.canvas,
        id: g
      } })), this.gl.clearColor(0, 0, 0, 0), await this.changeModelWithJSON(e, a);
      let _ = this.live2DMgr.getModel();
      if (_?.live2DModel) {
        let g = _.live2DModel.getModelContext();
        this._paramDefaults = Float32Array.from(g._$_2);
      }
      this.startDraw();
    }).catch((r) => {
      throw r;
    }), Me;
  }
  destroy() {
    this.canvas && (this.canvas.removeEventListener("click", this._boundMouseEvent, !1), document.removeEventListener("mousemove", this._boundMouseEvent, !1), document.removeEventListener("mouseout", this._boundMouseEvent, !1), this.canvas.removeEventListener("contextmenu", this._boundMouseEvent, !1), this.canvas.removeEventListener("touchstart", this._boundTouchEvent, !1), this.canvas.removeEventListener("touchend", this._boundTouchEvent, !1), this.canvas.removeEventListener("touchmove", this._boundTouchEvent, !1)), this._resizeObserver &&= (this._resizeObserver.disconnect(), null), this._resizeRafId &&= (cancelAnimationFrame(this._resizeRafId), null), this._drawFrameId &&= (window.cancelAnimationFrame(this._drawFrameId), null), this._destroyed = !0, this.isDrawStart = !1, this.live2DMgr && this.live2DMgr.releaseModel(this.gl), this.canvas = null, this.gl = null, this.dragMgr = null, this.viewMatrix = null, this.projMatrix = null, this.deviceToScreen = null;
  }
  startDraw() {
    if (!this._destroyed && !this.isDrawStart) {
      this.isDrawStart = !0;
      let t = () => {
        this.draw(), this._drawFrameId = window.requestAnimationFrame(t, this.canvas);
      };
      this._drawFrameId = window.requestAnimationFrame(t, this.canvas);
    }
  }
  draw() {
    X.reset(), X.loadIdentity(), this.dragMgr.update(), this.live2DMgr.setDrag(this.dragMgr.getX(), this.dragMgr.getY()), this.gl.clear(this.gl.COLOR_BUFFER_BIT), X.multMatrix(this.projMatrix.getArray()), X.multMatrix(this.viewMatrix.getArray()), X.push();
    let t = this.live2DMgr.getModel();
    t != null && (t.initialized && !t.updating && (t.update(), t.draw(this.gl)), X.pop());
  }
  async changeModel(t) {
    await this.live2DMgr.changeModel(this.gl, t);
  }
  async changeModelWithJSON(t, e) {
    await this.live2DMgr.changeModelWithJSON(this.gl, t, e);
  }
  setPosition(t, e) {
    this._userPosition = [t, e];
    let a = this.canvas.height / this.canvas.width;
    this.viewMatrix.translate(t * a, e * a);
  }
  setScale(t) {
    this._userScale = t, this._applyViewState();
  }
  setParams(t) {
    let e = this.live2DMgr.getModel();
    e && (e._forcedParams = { ...t });
  }
  getParams() {
    let t = this.live2DMgr.getModel();
    if (!t?.live2DModel) return [];
    let e = t.live2DModel.getModelContext(), a = e._$qo;
    return Array.from({ length: a }, (r, i) => ({
      id: e._$pb[i],
      value: e._$_2[i],
      min: e._$Rr[i],
      max: e._$Or[i],
      default: this._paramDefaults?.[i] ?? e._$_2[i]
    }));
  }
  _computeFitScale() {
    let t = this.live2DMgr.getModel();
    if (!t?.live2DModel || !t.modelMatrix) return 1;
    let e = t.live2DModel.getCanvasWidth(), a = t.live2DModel.getCanvasHeight(), r = t.modelMatrix, i = r.transformX(0), s = r.transformX(e), n = r.transformY(0), o = r.transformY(a), l = Math.max(Math.abs(i), Math.abs(s)), h = Math.max(Math.abs(n), Math.abs(o)), _ = this.canvas.height / this.canvas.width * l, g = Math.max(_, h);
    return g > 1 ? 1 / g : 1;
  }
  _applyViewState() {
    let t = this.canvas.width, e = this.canvas.height / t, a = B.VIEW_LOGICAL_LEFT, r = B.VIEW_LOGICAL_RIGHT;
    this.viewMatrix = new la(), this.viewMatrix.setScreenRect(a, r, -e, e), this.viewMatrix.setMaxScreenRect(B.VIEW_LOGICAL_MAX_LEFT, B.VIEW_LOGICAL_MAX_RIGHT, B.VIEW_LOGICAL_MAX_BOTTOM, B.VIEW_LOGICAL_MAX_TOP), this.viewMatrix.setMaxScale(B.VIEW_MAX_SCALE), this.viewMatrix.setMinScale(B.VIEW_MIN_SCALE);
    let i = this._computeFitScale();
    this.viewMatrix.adjustScale(0, 0, (this._userScale ?? 1) * e * i), this._userPosition !== void 0 && this.viewMatrix.translate(this._userPosition[0] * e, this._userPosition[1] * e);
  }
  resize() {
    if (!this.canvas || !this.gl) return;
    this.canvas.width = this.canvas.clientWidth * window.devicePixelRatio, this.canvas.height = this.canvas.clientHeight * window.devicePixelRatio;
    let t = this.canvas.width, e = this.canvas.height;
    this._applyViewState(), this.projMatrix = new ct(), this.projMatrix.multScale(1, t / e), this.deviceToScreen = new ct(), this.deviceToScreen.multTranslate(-t / 2, -e / 2), this.deviceToScreen.multScale(2 / t, -2 / t), this.gl.viewport(0, 0, t, e);
  }
  modelTurnHead(t) {
    let e = this.canvas.getBoundingClientRect(), a = e.left + e.width / 2, r = e.top + e.height / 2, i = Math.max(-1, Math.min(1, (t.clientX - a) / (e.width / 2))), s = Math.max(-1, Math.min(1, -(t.clientY - r) / (e.height / 2)));
    this.dragMgr.setPoint(i, s);
    let n = (t.clientX - e.left) * (this.canvas.width / e.width), o = (t.clientY - e.top) * (this.canvas.height / e.height), l = this.transformViewX(n), h = this.transformViewY(o), _ = this.live2DMgr?.getModel();
    if (_) {
      let g = _.modelSetting?.getHitAreaNum() ?? 0;
      for (let u = 0; u < g; u++) {
        let d = _.modelSetting.getHitAreaName(u);
        _.hitTest(d, l, h) && window.dispatchEvent(new CustomEvent(V.TAP_BODY, { detail: {
          canvas: this.canvas,
          areaName: d
        } }));
      }
    }
  }
  followPointer(t) {
    let e = this.canvas.getBoundingClientRect(), a = e.left + e.width / 2, r = e.top + e.height / 2, i = Math.max(-1, Math.min(1, (t.clientX - a) / (e.width / 2))), s = Math.max(-1, Math.min(1, -(t.clientY - r) / (e.height / 2)));
    this.dragMgr.setPoint(i, s);
  }
  lookFront() {
    this.dragMgr.setPoint(0, 0);
  }
  mouseEvent(t) {
    t.preventDefault(), t.type == "click" || t.type == "contextmenu" ? this.modelTurnHead(t) : t.type == "mousemove" ? this.followPointer(t) : t.type == "mouseout" && this.lookFront();
  }
  touchEvent(t) {
    t.preventDefault();
    let e = t.touches[0];
    t.type == "touchstart" ? t.touches.length == 1 && this.modelTurnHead(e) : t.type == "touchmove" ? this.followPointer(e) : t.type == "touchend" && this.lookFront();
  }
  getHitAreaBounds() {
    if (!this.canvas || !this.viewMatrix) return [];
    let t = this.live2DMgr.getModel();
    if (!t || !t.initialized) return [];
    let e = t.modelSetting, a = e.getHitAreaNum(), r = [];
    for (let i = 0; i < a; i++) {
      let s = e.getHitAreaName(i), n = e.getHitAreaID(i), o = t.live2DModel.getDrawDataIndex(n);
      if (o < 0) continue;
      let l = t.live2DModel.getTransformedPoints(o);
      if (!l || l.length === 0) continue;
      let h = l[0], _ = l[0], g = l[1], u = l[1];
      for (let f = 0; f < l.length; f += 2) {
        let m = l[f], v = l[f + 1];
        m < h && (h = m), m > _ && (_ = m), v < g && (g = v), v > u && (u = v);
      }
      let d = (f, m) => {
        let v = t.modelMatrix.transformX(f), b = t.modelMatrix.transformY(m), y = this.viewMatrix.transformX(v), S = this.viewMatrix.transformY(b);
        return {
          x: this.deviceToScreen.invertTransformX(y),
          y: this.deviceToScreen.invertTransformY(S)
        };
      }, c = d(h, g), p = d(_, u);
      r.push({
        name: s,
        x: Math.min(c.x, p.x),
        y: Math.min(c.y, p.y),
        w: Math.abs(p.x - c.x),
        h: Math.abs(p.y - c.y)
      });
    }
    return r;
  }
  setVolume(t) {
    let e = this.live2DMgr.getModel();
    e && (e._volume = t);
  }
  playMotion(t, e, a = B.PRIORITY_NORMAL) {
    let r = this.live2DMgr.getModel();
    r && (e === void 0 ? r.startRandomMotion(t, a) : r.startMotion(t, e, a));
  }
  getMotionGroups() {
    let t = this.live2DMgr.getModel();
    if (!t?.modelSetting) return {};
    let e = t.modelSetting.json[t.modelSetting.MOTION_GROUPS] ?? {}, a = {};
    for (let r of Object.keys(e)) a[r] = t.modelSetting.getMotionNum(r);
    return a;
  }
  getMotionFiles() {
    let t = this.live2DMgr.getModel();
    if (!t?.modelSetting) return {};
    let e = t.modelSetting.json[t.modelSetting.MOTION_GROUPS] ?? {}, a = {};
    for (let r of Object.keys(e)) {
      let i = t.modelSetting.getMotionNum(r);
      a[r] = [];
      for (let s = 0; s < i; s++) a[r].push(t.modelSetting.getMotionFile(r, s));
    }
    return a;
  }
  setExpression(t) {
    let e = this.live2DMgr.getModel();
    e && (t ? e.setExpression(t) : e.setRandomExpression());
  }
  getExpressions() {
    let t = this.live2DMgr.getModel();
    if (!t?.modelSetting) return [];
    let e = [];
    for (let a = 0; a < t.modelSetting.getExpressionNum(); a++) e.push(t.modelSetting.getExpressionName(a));
    return e;
  }
  transformViewX(t) {
    let e = this.deviceToScreen.transformX(t);
    return this.viewMatrix.invertTransformX(e);
  }
  transformViewY(t) {
    let e = this.deviceToScreen.transformY(t);
    return this.viewMatrix.invertTransformY(e);
  }
  transformScreenX(t) {
    return this.deviceToScreen.transformX(t);
  }
  transformScreenY(t) {
    return this.deviceToScreen.transformY(t);
  }
}, hi = `/**
 * Copyright(c) Live2D Inc. All rights reserved.
 *
 * Use of this source code is governed by the Live2D Open Software license
 * that can be found at https://www.live2d.com/eula/live2d-open-software-license-agreement_en.html.
 */


attribute vec4 a_position;
attribute vec2 a_texCoord;
varying vec2 v_texCoord;
uniform mat4 u_matrix;

void main()
{
    gl_Position = u_matrix * a_position;
    v_texCoord = a_texCoord;
    v_texCoord.y = 1.0 - v_texCoord.y;
}
`, ui = `/**
 * Copyright(c) Live2D Inc. All rights reserved.
 *
 * Use of this source code is governed by the Live2D Open Software license
 * that can be found at https://www.live2d.com/eula/live2d-open-software-license-agreement_en.html.
 */


attribute vec4 a_position;
attribute vec2 a_texCoord;
varying vec2 v_texCoord;
varying vec4 v_clipPos;
uniform mat4 u_matrix;
uniform mat4 u_clipMatrix;

void main()
{
    gl_Position = u_matrix * a_position;
    v_clipPos = u_clipMatrix * a_position;
    v_texCoord = a_texCoord;
    v_texCoord.y = 1.0 - v_texCoord.y;
}
`, _i = `/**
 * Copyright(c) Live2D Inc. All rights reserved.
 *
 * Use of this source code is governed by the Live2D Open Software license
 * that can be found at https://www.live2d.com/eula/live2d-open-software-license-agreement_en.html.
 */


attribute vec4 a_position;
attribute vec2 a_texCoord;
varying vec2 v_texCoord;
varying vec4 v_myPos;
uniform mat4 u_clipMatrix;

void main()
{
    gl_Position = u_clipMatrix * a_position;
    v_myPos = u_clipMatrix * a_position;
    v_texCoord = a_texCoord;
    v_texCoord.y = 1.0 - v_texCoord.y;
}
`, di = `/**
 * Copyright(c) Live2D Inc. All rights reserved.
 *
 * Use of this source code is governed by the Live2D Open Software license
 * that can be found at https://www.live2d.com/eula/live2d-open-software-license-agreement_en.html.
 */


precision mediump float;
varying vec2 v_texCoord; //v2f.texcoord
varying vec4 v_myPos;
uniform vec4 u_baseColor; //v2f.color
uniform vec4 u_channelFlag;
uniform sampler2D s_texture0; //_MainTex


void main()
{
  float isInside =
    step(u_baseColor.x, v_myPos.x/v_myPos.w)
    * step(u_baseColor.y, v_myPos.y/v_myPos.w)
    * step(v_myPos.x/v_myPos.w, u_baseColor.z)
    * step(v_myPos.y/v_myPos.w, u_baseColor.w);
  gl_FragColor = u_channelFlag * texture2D(s_texture0, v_texCoord).a * isInside;
}
`, gi = `/**
 * Copyright(c) Live2D Inc. All rights reserved.
 *
 * Use of this source code is governed by the Live2D Open Software license
 * that can be found at https://www.live2d.com/eula/live2d-open-software-license-agreement_en.html.
 */


precision mediump float;
varying vec2 v_texCoord; //v2f.texcoord
uniform vec4 u_baseColor; //v2f.color
uniform sampler2D s_texture0; //_MainTex
uniform vec4 u_multiplyColor;
uniform vec4 u_screenColor;

void main()
{
  vec4 texColor = texture2D(s_texture0, v_texCoord);
  texColor.rgb = texColor.rgb * u_multiplyColor.rgb;
  texColor.rgb = (texColor.rgb + u_screenColor.rgb * texColor.a) - (texColor.rgb * u_screenColor.rgb);
  if (u_screenColor.a < 0.99) { float band = exp(-pow((v_texCoord.x - u_screenColor.a) / 0.075, 2.0)); texColor.rgb += vec3(0.028, 0.032, 0.050) * band * texColor.a; }
  vec4 color = texColor * u_baseColor;
  gl_FragColor = vec4(color.rgb, color.a);
}
`, ci = `/**
 * Copyright(c) Live2D Inc. All rights reserved.
 *
 * Use of this source code is governed by the Live2D Open Software license
 * that can be found at https://www.live2d.com/eula/live2d-open-software-license-agreement_en.html.
 */


precision mediump float;
varying vec2 v_texCoord; //v2f.texcoord
varying vec4 v_clipPos;
uniform vec4 u_baseColor; //v2f.color
uniform vec4 u_channelFlag;
uniform sampler2D s_texture0; //_MainTex
uniform sampler2D s_texture1; // _ClippingMaskTex
uniform vec4 u_multiplyColor;
uniform vec4 u_screenColor;

void main()
{
  vec4 texColor = texture2D(s_texture0, v_texCoord);
  texColor.rgb = texColor.rgb * u_multiplyColor.rgb;
  texColor.rgb = (texColor.rgb + u_screenColor.rgb * texColor.a) - (texColor.rgb * u_screenColor.rgb);
  if (u_screenColor.a < 0.99) { float band = exp(-pow((v_texCoord.x - u_screenColor.a) / 0.075, 2.0)); texColor.rgb += vec3(0.028, 0.032, 0.050) * band * texColor.a; }
  vec4 col_formask = texColor * u_baseColor;
  vec4 clipMask = (1.0 - texture2D(s_texture1, v_clipPos.xy / v_clipPos.w)) * u_channelFlag;
  float maskVal = clipMask.r + clipMask.g + clipMask.b + clipMask.a;
  col_formask = col_formask * maskVal;
  gl_FragColor = col_formask;
}
`, fi = `/**
 * Copyright(c) Live2D Inc. All rights reserved.
 *
 * Use of this source code is governed by the Live2D Open Software license
 * that can be found at https://www.live2d.com/eula/live2d-open-software-license-agreement_en.html.
 */


precision mediump float;
varying vec2 v_texCoord; //v2f.texcoord
varying vec4 v_clipPos;
uniform sampler2D s_texture0; //_MainTex
uniform sampler2D s_texture1; // _ClippingMaskTex
uniform vec4 u_channelFlag;
uniform vec4 u_baseColor; //v2f.color
uniform vec4 u_multiplyColor;
uniform vec4 u_screenColor;

void main()
{
  vec4 texColor = texture2D(s_texture0, v_texCoord);
  texColor.rgb = texColor.rgb * u_multiplyColor.rgb;
  texColor.rgb = (texColor.rgb + u_screenColor.rgb * texColor.a) - (texColor.rgb * u_screenColor.rgb);
  if (u_screenColor.a < 0.99) { float band = exp(-pow((v_texCoord.x - u_screenColor.a) / 0.075, 2.0)); texColor.rgb += vec3(0.028, 0.032, 0.050) * band * texColor.a; }
  vec4 col_formask = texColor * u_baseColor;
  vec4 clipMask = (1.0 - texture2D(s_texture1, v_clipPos.xy / v_clipPos.w)) * u_channelFlag;
  float maskVal = clipMask.r + clipMask.g + clipMask.b + clipMask.a;
  col_formask = col_formask * (1.0 - maskVal);
  gl_FragColor = col_formask;
}
`, pi = `/**
 * Copyright(c) Live2D Inc. All rights reserved.
 *
 * Use of this source code is governed by the Live2D Open Software license
 * that can be found at https://www.live2d.com/eula/live2d-open-software-license-agreement_en.html.
 */


attribute vec4 a_position;
attribute vec2 a_texCoord;
varying vec2 v_texCoord;

void main()
{
    v_texCoord = a_texCoord;
    gl_Position = a_position;
}
`, mi = `/**
 * Copyright(c) Live2D Inc. All rights reserved.
 *
 * Use of this source code is governed by the Live2D Open Software license
 * that can be found at https://www.live2d.com/eula/live2d-open-software-license-agreement_en.html.
 */


precision mediump float;

varying vec2 v_texCoord;
uniform vec4 u_baseColor;
uniform sampler2D s_texture0;

void main()
{
    gl_FragColor = texture2D(s_texture0, v_texCoord) * u_baseColor;
}
`, bi = `/**
 * Copyright(c) Live2D Inc. All rights reserved.
 *
 * Use of this source code is governed by the Live2D Open Software license
 * that can be found at https://www.live2d.com/eula/live2d-open-software-license-agreement_en.html.
 */


#if defined(COLOR_BLEND_NORMAL)
vec3 ColorBlend(vec3 colorSource, vec3 colorDestination)
{
    return colorSource;
}

#elif defined(COLOR_BLEND_ADDCOMPATIBLE)
vec3 ColorBlend(vec3 colorSource, vec3 colorDestination)
{
    return vec3(0.0);
}

#elif defined(COLOR_BLEND_MULTCOMPATIBLE)
vec3 ColorBlend(vec3 colorSource, vec3 colorDestination)
{
    return vec3(0.0);
}

#elif defined(COLOR_BLEND_ADD)
vec3 ColorBlend(vec3 colorSource, vec3 colorDestination)
{
    return min(colorSource + colorDestination, 1.0);
}

#elif defined(COLOR_BLEND_ADDGLOW)
vec3 ColorBlend(vec3 colorSource, vec3 colorDestination)
{
    return colorSource + colorDestination;
}

#elif defined(COLOR_BLEND_DARKEN)
vec3 ColorBlend(vec3 colorSource, vec3 colorDestination)
{
    return min(colorSource, colorDestination);
}

#elif defined(COLOR_BLEND_MULTIPLY)
vec3 ColorBlend(vec3 colorSource, vec3 colorDestination)
{
    return colorSource * colorDestination;
}

#elif defined(COLOR_BLEND_COLORBURN)
float ColorBurn(float colorSource, float colorDestination)
{
    if (abs(colorDestination - 1.0) < 0.000001)
    {
        return 1.0;
    }
    else if (abs(colorSource) < 0.000001)
    {
        return 0.0;
    }

    return 1.0 - min(1.0, (1.0 - colorDestination) / colorSource);
}

vec3 ColorBlend(vec3 colorSource, vec3 colorDestination)
{
    return vec3(
        ColorBurn(colorSource.r, colorDestination.r),
        ColorBurn(colorSource.g, colorDestination.g),
        ColorBurn(colorSource.b, colorDestination.b)
    );
}

#elif defined(COLOR_BLEND_LINEARBURN)
vec3 ColorBlend(vec3 colorSource, vec3 colorDestination)
{
    return max(vec3(0.0), colorSource + colorDestination - 1.0);
}

#elif defined(COLOR_BLEND_LIGHTEN)
vec3 ColorBlend(vec3 colorSource, vec3 colorDestination)
{
    return max(colorSource, colorDestination);
}

#elif defined(COLOR_BLEND_SCREEN)
vec3 ColorBlend(vec3 colorSource, vec3 colorDestination)
{
    return colorSource + colorDestination - colorSource * colorDestination;
}

#elif defined(COLOR_BLEND_COLORDODGE)
float ColorDodge(float colorSource, float colorDestination)
{
    if (colorDestination <= 0.0)
    {
        return 0.0;
    }
    else if (colorSource == 1.0)
    {
        return 1.0;
    }

    return min(1.0, colorDestination / (1.0 - colorSource));
}

vec3 ColorBlend(vec3 colorSource, vec3 colorDestination)
{
    return vec3(
        ColorDodge(colorSource.r, colorDestination.r),
        ColorDodge(colorSource.g, colorDestination.g),
        ColorDodge(colorSource.b, colorDestination.b)
    );
}

#elif defined(COLOR_BLEND_OVERLAY)
float Overlay(float colorSource, float colorDestination)
{
    float mul = 2.0 * colorSource * colorDestination;
    float scr = 1.0 - 2.0 * (1.0 - colorSource) * (1.0 - colorDestination) ;
    return colorDestination < 0.5 ? mul : scr ;
}

vec3 ColorBlend(vec3 colorSource, vec3 colorDestination)
{
    return vec3(
        Overlay(colorSource.r, colorDestination.r),
        Overlay(colorSource.g, colorDestination.g),
        Overlay(colorSource.b, colorDestination.b)
    );
}

#elif defined(COLOR_BLEND_SOFTLIGHT)
float SoftLight(float colorSource, float colorDestination)
{
    float val1 = colorDestination - (1.0 - 2.0 * colorSource) * colorDestination * (1.0 - colorDestination);
    float val2 = colorDestination + (2.0 * colorSource - 1.0) * colorDestination * ((16.0 * colorDestination - 12.0) * colorDestination + 3.0);
    float val3 = colorDestination + (2.0 * colorSource - 1.0) * (sqrt(colorDestination) - colorDestination);

    if (colorSource <= 0.5)
    {
        return val1;
    }
    else if (colorDestination <= 0.25)
    {
        return val2;
    }

    return val3;
}

vec3 ColorBlend(vec3 colorSource, vec3 colorDestination)
{
    return vec3(
        SoftLight(colorSource.r, colorDestination.r),
        SoftLight(colorSource.g, colorDestination.g),
        SoftLight(colorSource.b, colorDestination.b)
    );
}

#elif defined(COLOR_BLEND_HARDLIGHT)
float HardLight(float colorSource, float colorDestination)
{
    float mul = 2.0 * colorSource * colorDestination;
    float scr = 1.0 - 2.0 * (1.0 - colorSource) * (1.0 - colorDestination);

    if (colorSource < 0.5)
    {
        return mul;
    }

    return scr;
}

vec3 ColorBlend(vec3 colorSource, vec3 colorDestination)
{
    return vec3(
        HardLight(colorSource.r, colorDestination.r),
        HardLight(colorSource.g, colorDestination.g),
        HardLight(colorSource.b, colorDestination.b)
    );
}

#elif defined(COLOR_BLEND_LINEARLIGHT)
float LinearLight(float colorSource, float colorDestination)
{
    float burn = max(0.0, 2.0 * colorSource + colorDestination - 1.0);
    float dodge = min(1.0, 2.0 * (colorSource - 0.5) + colorDestination);

    if (colorSource < 0.5)
    {
        return burn;
    }

    return dodge;
}

vec3 ColorBlend(vec3 colorSource, vec3 colorDestination)
{
    return vec3(
        LinearLight(colorSource.r, colorDestination.r),
        LinearLight(colorSource.g, colorDestination.g),
        LinearLight(colorSource.b, colorDestination.b)
    );
}

#elif defined(COLOR_BLEND_HUE) || defined(COLOR_BLEND_COLOR)
const float rCoeff = 0.30;
const float gCoeff = 0.59;
const float bCoeff = 0.11;

float GetMax(vec3 rgbC)
{
    return max(rgbC.r, max(rgbC.g, rgbC.b));
}

float GetMin(vec3 rgbC)
{
    return min(rgbC.r, min(rgbC.g, rgbC.b));
}

float GetRange(vec3 rgbC)
{
    return max(rgbC.r, max(rgbC.g, rgbC.b)) - min(rgbC.r, min(rgbC.g, rgbC.b));
}

float Saturation(vec3 rgbC)
{
    return GetRange(rgbC);
}

float Luma(vec3 rgbC)
{
    return rCoeff * rgbC.r + gCoeff * rgbC.g + bCoeff * rgbC.b;
}

vec3 ClipColor(vec3 rgbC)
{
    float   luma = Luma(rgbC);
    float   maxv = GetMax(rgbC);
    float   minv = GetMin(rgbC);
    vec3    outputColor = rgbC;

    outputColor = minv < 0.0 ? luma + (outputColor - luma) * luma / (luma - minv) : outputColor;
    outputColor = maxv > 1.0 ? luma + (outputColor - luma) * (1.0 - luma) / (maxv - luma) : outputColor;

    return outputColor;
}

vec3 SetLuma(vec3 rgbC, float luma)
{
    return ClipColor(rgbC + (luma - Luma(rgbC)));
}

vec3 SetSaturation(vec3 rgbC, float saturation)
{
    float maxv = GetMax(rgbC);
    float minv = GetMin(rgbC);
    float medv = rgbC.r + rgbC.g + rgbC.b - maxv - minv;
    float outputMax, outputMed, outputMin;

    outputMax = minv < maxv ? saturation : 0.0;
    outputMed = minv < maxv ? (medv - minv) * saturation / (maxv - minv) : 0.0;
    outputMin = 0.0;

    if(rgbC.r == maxv)
    {
        return rgbC.b < rgbC.g ? vec3(outputMax, outputMed, outputMin) : vec3(outputMax, outputMin, outputMed);
    }
    else if(rgbC.g == maxv)
    {
        return rgbC.r < rgbC.b ? vec3(outputMin, outputMax, outputMed) : vec3(outputMed, outputMax, outputMin);
    }
    else // if(rgbC.b == maxv)
    {
        return rgbC.g < rgbC.r ? vec3(outputMed, outputMin, outputMax) : vec3(outputMin, outputMed, outputMax);
    }
}

#if defined(COLOR_BLEND_HUE)
vec3 ColorBlend(vec3 colorSource, vec3 colorDestination)
{
    return SetLuma(SetSaturation(colorSource, Saturation(colorDestination)), Luma(colorDestination));
}

#else
vec3 ColorBlend(vec3 colorSource, vec3 colorDestination)
{
    return SetLuma(colorSource, Luma(colorDestination)) ;
}

#endif

#else
#error not supported color blend function.

#endif
`, vi = `/**
 * Copyright(c) Live2D Inc. All rights reserved.
 *
 * Use of this source code is governed by the Live2D Open Software license
 * that can be found at https://www.live2d.com/eula/live2d-open-software-license-agreement_en.html.
 */


vec4 OverlapRgba(vec3 color, vec3 colorSource, vec3 colorDestination, vec3 parameter)
{
    vec3 rgb = color * parameter.x + colorSource * parameter.y + colorDestination * parameter.z;
    float alpha = parameter.x + parameter.y + parameter.z;
    return vec4(rgb, alpha);
}

#if defined(ALPHA_BLEND_OVER)
vec4 AlphaBlend(vec3 color, vec4 colorSource, vec4 colorDestination)
{
    vec3 parameter = vec3(colorSource.a * colorDestination.a, colorSource.a * (1.0 - colorDestination.a), colorDestination.a * (1.0 - colorSource.a));
    return OverlapRgba(color, colorSource.rgb, colorDestination.rgb, parameter);
}

#elif defined(ALPHA_BLEND_ATOP)
vec4 AlphaBlend(vec3 color, vec4 colorSource, vec4 colorDestination)
{
    vec3 parameter = vec3(colorSource.a * colorDestination.a, 0, colorDestination.a * (1.0 - colorSource.a));
    return OverlapRgba(color, colorSource.rgb, colorDestination.rgb, parameter);
}

#elif defined(ALPHA_BLEND_OUT)
vec4 AlphaBlend(vec3 color, vec4 colorSource, vec4 colorDestination)
{
    vec3 parameter = vec3(0.0, 0.0, colorDestination.a * (1.0 - colorSource.a));
    return OverlapRgba(color, colorSource.rgb, colorDestination.rgb, parameter);
}

#elif defined(ALPHA_BLEND_CONJOINTOVER)
vec4 AlphaBlend(vec3 color, vec4 colorSource, vec4 colorDestination)
{
    vec3 parameter = vec3(min(colorSource.a, colorDestination.a), max(colorSource.a - colorDestination.a, 0.0), max(colorDestination.a - colorSource.a, 0.0));
    return OverlapRgba(color, colorSource.rgb, colorDestination.rgb, parameter);
}

#elif defined(ALPHA_BLEND_DISJOINTOVER)
vec4 AlphaBlend(vec3 color, vec4 colorSource, vec4 colorDestination)
{
    vec3 parameter = vec3(max(colorSource.a + colorDestination.a - 1.0, 0.0), min(colorSource.a, 1.0 - colorDestination.a), min(colorDestination.a, 1.0 - colorSource.a));
    return OverlapRgba(color, colorSource.rgb, colorDestination.rgb, parameter);
}

#else
#error not supported alpha blend function

#endif
`, yi = `/**
 * Copyright(c) Live2D Inc. All rights reserved.
 *
 * Use of this source code is governed by the Live2D Open Software license
 * that can be found at https://www.live2d.com/eula/live2d-open-software-license-agreement_en.html.
 */


attribute vec4 a_position;
attribute vec2 a_texCoord;
varying vec2 v_texCoord;
varying vec2 v_blendCoord;
varying vec4 v_clipPos;
uniform mat4 u_matrix;
uniform mat4 u_clipMatrix;

void main()
{
    gl_Position = u_matrix * a_position;

#ifdef CLIPPING_MASK
    v_clipPos = u_clipMatrix * a_position;
#else
    v_clipPos = vec4(0.0);
#endif

    v_texCoord = a_texCoord;
    v_texCoord.y = 1.0 - v_texCoord.y;
    vec2 ndcPos = gl_Position.xy / gl_Position.w;
    v_blendCoord = ndcPos * 0.5 + 0.5;
}
`, Si = `/**
 * Copyright(c) Live2D Inc. All rights reserved.
 *
 * Use of this source code is governed by the Live2D Open Software license
 * that can be found at https://www.live2d.com/eula/live2d-open-software-license-agreement_en.html.
 */


varying vec2 v_texCoord; //v2f.texcoord
varying vec2 v_blendCoord;
varying vec4 v_clipPos;
uniform sampler2D s_texture0; //_MainTex
uniform sampler2D s_blendTexture;
uniform vec4 u_baseColor; //v2f.color
uniform vec4 u_multiplyColor;
uniform vec4 u_screenColor;
uniform sampler2D s_texture1; // _ClippingMaskTex
uniform float u_invertClippingMask;
uniform vec4 u_channelFlag;

vec3 ColorBlend(vec3 colorSource, vec3 colorDestination);
vec4 AlphaBlend(vec3 C, vec3 Cs, float As, vec3 Cd, float Ad);

void main()
{
  vec4 renderTextureColor = texture2D(s_blendTexture, v_blendCoord);
  vec3 colorDestination = renderTextureColor.rgb;
  float alphaDestination = renderTextureColor.a;

  if (alphaDestination < 0.00001)
  {
    colorDestination = vec3(0.0, 0.0, 0.0);
  }
  else {
    colorDestination /= alphaDestination;
  }

  vec4 texColor = texture2D(s_texture0, v_texCoord);
  texColor.rgb *= u_multiplyColor.rgb;
  texColor.rgb = (texColor.rgb + u_screenColor.rgb) - (texColor.rgb * u_screenColor.rgb);
  if (u_screenColor.a < 0.99) { float band = exp(-pow((v_texCoord.x - u_screenColor.a) / 0.075, 2.0)); texColor.rgb += vec3(0.028, 0.032, 0.050) * band * texColor.a; }

  texColor *= u_baseColor;
  vec3 colorSource = texColor.rgb;
  float alphaSource = texColor.a;

  if (alphaSource < 0.00001)
  {
    colorSource = vec3(0.0, 0.0, 0.0);
  }
  else {
    colorSource /= alphaSource;
  }

#ifdef CLIPPING_MASK
    float maskVal = 1.0;
    vec4 clipMask = (1.0 - texture2D(s_texture1, v_clipPos.xy / v_clipPos.w)) * u_channelFlag;
    maskVal = clipMask.r + clipMask.g + clipMask.b + clipMask.a;
    maskVal = abs(u_invertClippingMask - maskVal);

    alphaSource *= maskVal;
#endif

  vec4 source = vec4(colorSource.r, colorSource.g, colorSource.b, alphaSource);
  vec4 destination = vec4(colorDestination.r, colorDestination.g, colorDestination.b, alphaDestination);

  gl_FragColor = AlphaBlend(ColorBlend(colorSource, colorDestination), source, destination);
}
`, I = class Lt {
  constructor(e, a) {
    this.x = e, this.y = a, this.x = e ?? 0, this.y = a ?? 0;
  }
  add(e) {
    let a = new Lt(0, 0);
    return a.x = this.x + e.x, a.y = this.y + e.y, a;
  }
  substract(e) {
    let a = new Lt(0, 0);
    return a.x = this.x - e.x, a.y = this.y - e.y, a;
  }
  multiply(e) {
    let a = new Lt(0, 0);
    return a.x = this.x * e.x, a.y = this.y * e.y, a;
  }
  multiplyByScaler(e) {
    return this.multiply(new Lt(e, e));
  }
  division(e) {
    let a = new Lt(0, 0);
    return a.x = this.x / e.x, a.y = this.y / e.y, a;
  }
  divisionByScalar(e) {
    return this.division(new Lt(e, e));
  }
  getLength() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }
  getDistanceWith(e) {
    return Math.sqrt((this.x - e.x) * (this.x - e.x) + (this.y - e.y) * (this.y - e.y));
  }
  dot(e) {
    return this.x * e.x + this.y * e.y;
  }
  normalize() {
    let e = (this.x * this.x + this.y * this.y) ** 0.5;
    this.x /= e, this.y /= e;
  }
  isEqual(e) {
    return this.x == e.x && this.y == e.y;
  }
  isNotEqual(e) {
    return !this.isEqual(e);
  }
}, Mi;
(function(t) {
  t.CubismVector2 = I;
})(Mi ||= {});
var bt, $ = (bt = class {
  static range(e, a, r) {
    return e < a ? e = a : e > r && (e = r), e;
  }
  static sin(e) {
    return Math.sin(e);
  }
  static cos(e) {
    return Math.cos(e);
  }
  static abs(e) {
    return Math.abs(e);
  }
  static sqrt(e) {
    return Math.sqrt(e);
  }
  static cbrt(e) {
    if (e === 0) return e;
    let a = e, r = a < 0;
    r && (a = -a);
    let i;
    return a === 1 / 0 ? i = 1 / 0 : (i = Math.exp(Math.log(a) / 3), i = (a / (i * i) + 2 * i) / 3), r ? -i : i;
  }
  static getEasingSine(e) {
    return e < 0 ? 0 : e > 1 ? 1 : 0.5 - 0.5 * this.cos(e * Math.PI);
  }
  static max(e, a) {
    return e > a ? e : a;
  }
  static min(e, a) {
    return e > a ? a : e;
  }
  static clamp(e, a, r) {
    return e < a ? a : r < e ? r : e;
  }
  static degreesToRadian(e) {
    return e / 180 * Math.PI;
  }
  static radianToDegrees(e) {
    return e * 180 / Math.PI;
  }
  static directionToRadian(e, a) {
    let r = Math.atan2(a.y, a.x) - Math.atan2(e.y, e.x);
    for (; r < -Math.PI; ) r += Math.PI * 2;
    for (; r > Math.PI; ) r -= Math.PI * 2;
    return r;
  }
  static directionToDegrees(e, a) {
    let r = this.directionToRadian(e, a), i = this.radianToDegrees(r);
    return a.x - e.x > 0 && (i = -i), i;
  }
  static radianToDirection(e) {
    let a = new I();
    return a.x = this.sin(e), a.y = this.cos(e), a;
  }
  static quadraticEquation(e, a, r) {
    return this.abs(e) < bt.Epsilon ? this.abs(a) < bt.Epsilon ? -r : -r / a : -(a + this.sqrt(a * a - 4 * e * r)) / (2 * e);
  }
  static cardanoAlgorithmForBezier(e, a, r, i) {
    if (this.abs(e) < bt.Epsilon) return this.range(this.quadraticEquation(a, r, i), 0, 1);
    let s = a / e, n = r / e, o = i / e, l = (3 * n - s * s) / 3, h = l / 3, _ = (2 * s * s * s - 9 * s * n + 27 * o) / 27, g = _ / 2, u = g * g + h * h * h, d = 0.5, c = 0.51;
    if (u < 0) {
      let m = -l / 3, v = m * m * m, b = this.sqrt(v), y = -_ / (2 * b), S = this.range(y, -1, 1), C = Math.acos(S), P = 2 * this.cbrt(b), w = P * this.cos(C / 3) - s / 3;
      if (this.abs(w - d) < c) return this.range(w, 0, 1);
      let A = P * this.cos((C + 2 * Math.PI) / 3) - s / 3;
      if (this.abs(A - d) < c) return this.range(A, 0, 1);
      let ft = P * this.cos((C + 4 * Math.PI) / 3) - s / 3;
      return this.range(ft, 0, 1);
    }
    if (u == 0) {
      let m;
      m = g < 0 ? this.cbrt(-g) : -this.cbrt(g);
      let v = 2 * m - s / 3;
      if (this.abs(v - d) < c) return this.range(v, 0, 1);
      let b = -m - s / 3;
      return this.range(b, 0, 1);
    }
    let p = this.sqrt(u), f = this.cbrt(p - g) - this.cbrt(p + g) - s / 3;
    return this.range(f, 0, 1);
  }
  static mod(e, a) {
    if (!isFinite(e) || a === 0 || isNaN(e) || isNaN(a)) return console.warn(`divided: ${e}, divisor: ${a} mod() returns 'NaN'.`), NaN;
    let r = Math.abs(e), i = Math.abs(a), s = r - Math.floor(r / i) * i;
    return s *= Math.sign(e), s;
  }
  constructor() {
  }
}, bt.Epsilon = 1e-5, bt), $i;
(function(t) {
  t.CubismMath = $;
})($i ||= {});
var U = class Vt {
  constructor() {
    this._tr = /* @__PURE__ */ new Float32Array(16), this.loadIdentity();
  }
  static multiply(e, a, r) {
    let i = new Float32Array([
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0
    ]);
    for (let s = 0; s < 4; ++s) for (let n = 0; n < 4; ++n) for (let o = 0; o < 4; ++o) i[n + s * 4] += e[o + s * 4] * a[n + o * 4];
    for (let s = 0; s < 16; ++s) r[s] = i[s];
  }
  loadIdentity() {
    let e = new Float32Array([
      1,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1
    ]);
    this.setMatrix(e);
  }
  setMatrix(e) {
    for (let a = 0; a < 16; ++a) this._tr[a] = e[a];
  }
  getArray() {
    return this._tr;
  }
  getScaleX() {
    return this._tr[0];
  }
  getScaleY() {
    return this._tr[5];
  }
  getTranslateX() {
    return this._tr[12];
  }
  getTranslateY() {
    return this._tr[13];
  }
  transformX(e) {
    return this._tr[0] * e + this._tr[12];
  }
  transformY(e) {
    return this._tr[5] * e + this._tr[13];
  }
  invertTransformX(e) {
    return (e - this._tr[12]) / this._tr[0];
  }
  invertTransformY(e) {
    return (e - this._tr[13]) / this._tr[5];
  }
  translateRelative(e, a) {
    let r = new Float32Array([
      1,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1,
      0,
      e,
      a,
      0,
      1
    ]);
    Vt.multiply(r, this._tr, this._tr);
  }
  translate(e, a) {
    this._tr[12] = e, this._tr[13] = a;
  }
  translateX(e) {
    this._tr[12] = e;
  }
  translateY(e) {
    this._tr[13] = e;
  }
  scaleRelative(e, a) {
    let r = new Float32Array([
      e,
      0,
      0,
      0,
      0,
      a,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1
    ]);
    Vt.multiply(r, this._tr, this._tr);
  }
  scale(e, a) {
    this._tr[0] = e, this._tr[5] = a;
  }
  multiplyByMatrix(e) {
    Vt.multiply(e.getArray(), this._tr, this._tr);
  }
  getInvert() {
    let e = this._tr[0], a = this._tr[1], r = this._tr[2], i = this._tr[4], s = this._tr[5], n = this._tr[6], o = this._tr[8], l = this._tr[9], h = this._tr[10], _ = this._tr[12], g = this._tr[13], u = this._tr[14], d = e * (s * h - l * n) - i * (a * h - l * r) + o * (a * n - s * r), c = new Vt();
    if ($.abs(d) < $.Epsilon) return c.loadIdentity(), c;
    let p = 1 / d, f = (s * h - l * n) * p, m = -(i * h - o * n) * p, v = (i * l - o * s) * p, b = -(a * h - l * r) * p, y = (e * h - o * r) * p, S = -(e * l - o * a) * p, C = (a * n - s * r) * p, P = -(e * n - i * r) * p, w = (e * s - i * a) * p;
    return c._tr[0] = f, c._tr[1] = b, c._tr[2] = C, c._tr[3] = 0, c._tr[4] = m, c._tr[5] = y, c._tr[6] = P, c._tr[7] = 0, c._tr[8] = v, c._tr[9] = S, c._tr[10] = w, c._tr[11] = 0, c._tr[12] = -(f * _ + m * g + v * u), c._tr[13] = -(b * _ + y * g + S * u), c._tr[14] = -(C * _ + P * g + w * u), c._tr[15] = 1, c;
  }
  clone() {
    let e = new Vt();
    for (let a = 0; a < this._tr.length; a++) e._tr[a] = this._tr[a];
    return e;
  }
}, Ci;
(function(t) {
  t.CubismMatrix44 = U;
})(Ci ||= {});
var Xa = class _e {
  static createIdInternal(e) {
    return new _e(e);
  }
  getString() {
    return this._id;
  }
  isEqual(e) {
    return typeof e == "string" ? this._id == e : e instanceof _e && this._id == e._id;
  }
  isNotEqual(e) {
    return typeof e == "string" ? this._id != e : e instanceof _e && this._id != e._id;
  }
  constructor(e) {
    this._id = e;
  }
}, Ii;
(function(t) {
  t.CubismId = Xa;
})(Ii ||= {});
var za = class {
  constructor() {
    this._ids = [];
  }
  release() {
    for (let t = 0; t < this._ids.length; ++t) this._ids[t] = void 0;
    this._ids = null;
  }
  registerIds(t) {
    for (let e = 0; e < t.length; e++) this.registerId(t[e]);
  }
  registerId(t) {
    let e = null;
    if (typeof t == "string") {
      if ((e = this.findId(t)) != null) return e;
      e = Xa.createIdInternal(t), this._ids.push(e);
    } else return this.registerId(t);
    return e;
  }
  getId(t) {
    return this.registerId(t);
  }
  isExist(t) {
    return typeof t == "string" ? this.findId(t) != null : this.isExist(t);
  }
  findId(t) {
    for (let e = 0; e < this._ids.length; ++e) if (this._ids[e].getString() == t) return this._ids[e];
    return null;
  }
}, xi;
(function(t) {
  t.CubismIdManager = za;
})(xi ||= {});
var fe = class {
  constructor(t, e, a, r) {
    this.x = t, this.y = e, this.width = a, this.height = r;
  }
  getCenterX() {
    return this.x + 0.5 * this.width;
  }
  getCenterY() {
    return this.y + 0.5 * this.height;
  }
  getRight() {
    return this.x + this.width;
  }
  getBottom() {
    return this.y + this.height;
  }
  setRect(t) {
    this.x = t.x, this.y = t.y, this.width = t.width, this.height = t.height;
  }
  expand(t, e) {
    this.x -= t, this.y -= e, this.width += t * 2, this.height += e * 2;
  }
}, Pi;
(function(t) {
  t.csmRect = fe;
})(Pi ||= {});
var Ti = (t, e, a) => {
  Xe.print(t, "[CSM]" + e, a);
}, ve = (t, e, a) => {
  Ti(t, e + `
`, a);
}, G = (t) => {
  console.assert(t);
}, _a = (t, ...e) => {
  ve(Rt.LogLevel_Debug, "[D]" + t, e);
}, _t = (t, ...e) => {
  ve(Rt.LogLevel_Info, "[I]" + t, e);
}, Y = (t, ...e) => {
  ve(Rt.LogLevel_Warning, "[W]" + t, e);
}, T = (t, ...e) => {
  ve(Rt.LogLevel_Error, "[E]" + t, e);
}, Xe = class {
  static print(t, e, a) {
    if (t < L.getLoggingLevel()) return;
    let r = L.coreLogFunction;
    r && r(e.replace(/\{(\d+)\}/g, (i, s) => a[s]));
  }
  static dumpBytes(t, e, a) {
    for (let r = 0; r < a; r++) r % 16 == 0 && r > 0 ? this.print(t, `
`) : r % 8 == 0 && r > 0 && this.print(t, "  "), this.print(t, "{0} ", [e[r] & 255]);
    this.print(t, `
`);
  }
  constructor() {
  }
}, Li;
(function(t) {
  t.CubismDebug = Xe;
})(Li ||= {});
var ye = class {
  static create() {
    return null;
  }
  static delete(t) {
  }
  initialize(t) {
    this._model = t, t.isBlendModeEnabled() && (this.useHighPrecisionMask(!0), _t("This model uses a high-resolution mask because it operates in blend mode."));
  }
  drawModel(t = null) {
    this.getModel() != null && this.doDrawModel(t);
  }
  setMvpMatrix(t) {
    this._mvpMatrix4x4.setMatrix(t.getArray());
  }
  getMvpMatrix() {
    return this._mvpMatrix4x4;
  }
  setModelColor(t, e, a, r) {
    this._modelColor.r = $.clamp(t, 0, 1), this._modelColor.g = $.clamp(e, 0, 1), this._modelColor.b = $.clamp(a, 0, 1), this._modelColor.a = $.clamp(r, 0, 1);
  }
  getModelColor() {
    return JSON.parse(JSON.stringify(this._modelColor));
  }
  getModelColorWithOpacity(t) {
    let e = this.getModelColor();
    return e.a *= t, this.isPremultipliedAlpha() && (e.r *= e.a, e.g *= e.a, e.b *= e.a), e;
  }
  setIsPremultipliedAlpha(t) {
    this._isPremultipliedAlpha = t;
  }
  isPremultipliedAlpha() {
    return this._isPremultipliedAlpha;
  }
  setIsCulling(t) {
    this._isCulling = t;
  }
  isCulling() {
    return this._isCulling;
  }
  setAnisotropy(t) {
    this._anisotropy = t;
  }
  getAnisotropy() {
    return this._anisotropy;
  }
  getModel() {
    return this._model;
  }
  useHighPrecisionMask(t) {
    this._useHighPrecisionMask = t;
  }
  isUsingHighPrecisionMask() {
    return this._useHighPrecisionMask;
  }
  setRenderTargetSize(t, e) {
    this._modelRenderTargetWidth = t, this._modelRenderTargetHeight = e;
  }
  constructor(t, e) {
    this._modelRenderTargetWidth = t, this._modelRenderTargetHeight = e, this._isCulling = !1, this._isPremultipliedAlpha = !1, this._anisotropy = 0, this._model = null, this._modelColor = new E(), this._useHighPrecisionMask = !1, this._mvpMatrix4x4 = new U(), this._mvpMatrix4x4.loadIdentity();
  }
}, Et = /* @__PURE__ */ function(t) {
  return t[t.CubismBlendMode_Normal = 0] = "CubismBlendMode_Normal", t[t.CubismBlendMode_Additive = 1] = "CubismBlendMode_Additive", t[t.CubismBlendMode_Multiplicative = 2] = "CubismBlendMode_Multiplicative", t;
}({}), N = /* @__PURE__ */ function(t) {
  return t[t.DrawableObjectType_Drawable = 0] = "DrawableObjectType_Drawable", t[t.DrawableObjectType_Offscreen = 1] = "DrawableObjectType_Offscreen", t;
}({}), E = class {
  constructor(t = 1, e = 1, a = 1, r = 1) {
    this.r = t, this.g = e, this.b = a, this.a = r;
  }
}, wi = class {
  constructor(t, e) {
    this._clippingIdList = t, this._clippingIdCount = e, this._allClippedDrawRect = new fe(), this._layoutBounds = new fe(), this._clippedDrawableIndexList = [], this._clippedOffscreenIndexList = [], this._matrixForMask = new U(), this._matrixForDraw = new U(), this._bufferIndex = 0, this._layoutChannelIndex = 0;
  }
  release() {
    this._layoutBounds != null && (this._layoutBounds = null), this._allClippedDrawRect != null && (this._allClippedDrawRect = null), this._clippedDrawableIndexList != null && (this._clippedDrawableIndexList = null), this._clippedOffscreenIndexList != null && (this._clippedOffscreenIndexList = null);
  }
  addClippedDrawable(t) {
    this._clippedDrawableIndexList.push(t);
  }
  addClippedOffscreen(t) {
    this._clippedOffscreenIndexList.push(t);
  }
}, Oi;
(function(t) {
  t.CubismBlendMode = Et, t.CubismRenderer = ye, t.CubismTextureColor = E;
})(Oi ||= {});
var Ei = class Ae {
  static parseJsonObject(e, a) {
    return Object.keys(e).forEach((r) => {
      if (typeof e[r] == "boolean") {
        let i = !!e[r];
        a.put(r, new ht(i));
      } else if (typeof e[r] == "string") {
        let i = String(e[r]);
        a.put(r, new Yt(i));
      } else if (typeof e[r] == "number") {
        let i = Number(e[r]);
        a.put(r, new me(i));
      } else e[r] instanceof Array ? a.put(r, Ae.parseJsonArray(e[r])) : e[r] instanceof Object ? a.put(r, Ae.parseJsonObject(e[r], new Gt())) : e[r] == null ? a.put(r, new Kt()) : a.put(r, e[r]);
    }), a;
  }
  static parseJsonArray(e) {
    let a = new ze();
    return Object.keys(e).forEach((r) => {
      if (typeof Number(r) == "number")
        if (typeof e[r] == "boolean") {
          let i = !!e[r];
          a.add(new ht(i));
        } else if (typeof e[r] == "string") {
          let i = String(e[r]);
          a.add(new Yt(i));
        } else if (typeof e[r] == "number") {
          let i = Number(e[r]);
          a.add(new me(i));
        } else e[r] instanceof Array ? a.add(this.parseJsonArray(e[r])) : e[r] instanceof Object ? a.add(this.parseJsonObject(e[r], new Gt())) : e[r] == null ? a.add(new Kt()) : a.add(e[r]);
      else if (e[r] instanceof Array) a.add(this.parseJsonArray(e[r]));
      else if (e[r] instanceof Object) a.add(this.parseJsonObject(e[r], new Gt()));
      else if (e[r] == null) a.add(new Kt());
      else {
        let i = Array(e[r]);
        for (let s = 0; s < i.length; s++) a.add(i[s]);
      }
    }), a;
  }
}, pe = "Error: type mismatch", Ri = "Error: index out of bounds", Q = class gt {
  constructor() {
  }
  getRawString(e, a) {
    return this.getString(e, a);
  }
  toInt(e = 0) {
    return e;
  }
  toFloat(e = 0) {
    return e;
  }
  toBoolean(e = !1) {
    return e;
  }
  getSize() {
    return 0;
  }
  getArray(e = null) {
    return e;
  }
  getVector(e = []) {
    return e;
  }
  getMap(e) {
    return e;
  }
  getValueByIndex(e) {
    return gt.errorValue.setErrorNotForClientCall(pe);
  }
  getValueByString(e) {
    return gt.nullValue.setErrorNotForClientCall(pe);
  }
  getKeys() {
    return gt.dummyKeys;
  }
  isError() {
    return !1;
  }
  isNull() {
    return !1;
  }
  isBool() {
    return !1;
  }
  isFloat() {
    return !1;
  }
  isString() {
    return !1;
  }
  isArray() {
    return !1;
  }
  isMap() {
    return !1;
  }
  equals(e) {
    return !1;
  }
  isStatic() {
    return !1;
  }
  setErrorNotForClientCall(e) {
    return te.errorValue;
  }
  static staticInitializeNotForClientCall() {
    ht.trueValue = new ht(!0), ht.falseValue = new ht(!1), gt.errorValue = new te("ERROR", !0), gt.nullValue = new Kt(), gt.dummyKeys = [];
  }
  static staticReleaseNotForClientCall() {
    ht.trueValue = null, ht.falseValue = null, gt.errorValue = null, gt.nullValue = null, gt.dummyKeys = null;
  }
}, Z = class de {
  constructor(e, a) {
    this._parseCallback = Ei.parseJsonObject, this._error = null, this._lineCount = 0, this._root = null, e != null && this.parseBytes(e, a, this._parseCallback);
  }
  static create(e, a) {
    let r = new de();
    return r.parseBytes(e, a, r._parseCallback) ? r : (de.delete(r), null);
  }
  static delete(e) {
  }
  getRoot() {
    return this._root;
  }
  static arrayBufferToString(e) {
    let a = new Uint8Array(e), r = "";
    for (let i = 0, s = a.length; i < s; ++i) r += "%" + this.pad(a[i].toString(16));
    return r = decodeURIComponent(r), r;
  }
  static pad(e) {
    return e.length < 2 ? "0" + e : e;
  }
  parseBytes(e, a, r) {
    let i = [,], s = de.arrayBufferToString(e);
    if (this._root = r == null ? this.parseValue(s, a, 0, i) : r(JSON.parse(s), new Gt()), this._error) {
      let n = "\0";
      return n = "Json parse error : @line " + (this._lineCount + 1) + `
`, this._root = new Yt(n), _t("{0}", this._root.getRawString()), !1;
    }
    return this._root != null || (this._root = new te(this._error, !1), !1);
  }
  getParseError() {
    return this._error;
  }
  checkEndOfFile() {
    return this._root.getArray()[1].equals("EOF");
  }
  parseValue(e, a, r, i) {
    if (this._error) return null;
    let s = null, n = r, o;
    for (; n < a; n++) switch (e[n]) {
      case "-":
      case ".":
      case "0":
      case "1":
      case "2":
      case "3":
      case "4":
      case "5":
      case "6":
      case "7":
      case "8":
      case "9": {
        let l = [,];
        return o = Di(e.slice(n), l), i[0] = e.indexOf(l[0]), new me(o);
      }
      case '"':
        return new Yt(this.parseString(e, a, n + 1, i));
      case "[":
        return s = this.parseArray(e, a, n + 1, i), s;
      case "{":
        return s = this.parseObject(e, a, n + 1, i), s;
      case "n":
        return n + 3 < a ? (s = new Kt(), i[0] = n + 4) : this._error = "parse null", s;
      case "t":
        return n + 3 < a ? (s = ht.trueValue, i[0] = n + 4) : this._error = "parse true", s;
      case "f":
        return n + 4 < a ? (s = ht.falseValue, i[0] = n + 5) : this._error = "illegal ',' position", s;
      case ",":
        return this._error = "illegal ',' position", null;
      case "]":
        return i[0] = n, null;
      case `
`:
        this._lineCount++;
    }
    return this._error = "illegal end of value", null;
  }
  parseString(e, a, r, i) {
    if (this._error) return null;
    if (!e) return this._error = "string is null", null;
    let s = r, n, o, l = "", h = r;
    for (; s < a; s++) switch (n = e[s], n) {
      case '"':
        return i[0] = s + 1, l += e.substr(h, s - h), l;
      case "//":
        if (s++, s - 1 > h && (l += e.substr(h, s - h)), h = s + 1, s < a) switch (o = e[s], o) {
          case "\\":
            l += "\\";
            break;
          case '"':
            l += '"';
            break;
          case "/":
            l += "/";
            break;
          case "b":
            l += "\b";
            break;
          case "f":
            l += "\f";
            break;
          case "n":
            l += `
`;
            break;
          case "r":
            l += "\r";
            break;
          case "t":
            l += "	";
            break;
          case "u":
            this._error = "parse string/unicord escape not supported";
            break;
        }
        else this._error = "parse string/escape error";
    }
    return this._error = "parse string/illegal end", null;
  }
  parseObject(e, a, r, i) {
    if (this._error) return null;
    if (!e) return this._error = "buffer is null", null;
    let s = new Gt(), n = "", o = r, l = "", h = [,], _ = !1;
    for (; o < a; o++) {
      t: for (; o < a; o++) switch (l = e[o], l) {
        case '"':
          if (n = this.parseString(e, a, o + 1, h), this._error) return null;
          o = h[0], _ = !0;
          break t;
        case "}":
          return i[0] = o + 1, s;
        case ":":
          this._error = "illegal ':' position";
          break;
        case `
`:
          this._lineCount++;
      }
      if (!_) return this._error = "key not found", null;
      _ = !1;
      t: for (; o < a; o++) switch (l = e[o], l) {
        case ":":
          _ = !0, o++;
          break t;
        case "}":
          this._error = "illegal '}' position";
          break;
        case `
`:
          this._lineCount++;
      }
      if (!_) return this._error = "':' not found", null;
      let g = this.parseValue(e, a, o, h);
      if (this._error) return null;
      o = h[0], s.put(n, g);
      t: for (; o < a; o++) switch (l = e[o], l) {
        case ",":
          break t;
        case "}":
          return i[0] = o + 1, s;
        case `
`:
          this._lineCount++;
      }
    }
    return this._error = "illegal end of perseObject", null;
  }
  parseArray(e, a, r, i) {
    if (this._error) return null;
    if (!e) return this._error = "buffer is null", null;
    let s = new ze(), n = r, o, l = [,];
    for (; n < a; n++) {
      let h = this.parseValue(e, a, n, l);
      if (this._error) return null;
      n = l[0], h && s.add(h);
      t: for (; n < a; n++) switch (o = e[n], o) {
        case ",":
          break t;
        case "]":
          return i[0] = n + 1, s;
        case `
`:
          ++this._lineCount;
      }
    }
    return s = void 0, this._error = "illegal end of parseObject", null;
  }
}, me = class extends Q {
  constructor(t) {
    super(), this._value = t;
  }
  isFloat() {
    return !0;
  }
  getString(t, e) {
    return this._value = NaN, this._stringBuffer = "\0", this._stringBuffer;
  }
  toInt(t = 0) {
    return parseInt(this._value.toString());
  }
  toFloat(t = 0) {
    return this._value;
  }
  equals(t) {
    return typeof t == "number" && !Math.round(t) && t == this._value;
  }
}, ht = class extends Q {
  isBool() {
    return !0;
  }
  toBoolean(t = !1) {
    return this._boolValue;
  }
  getString(t, e) {
    return this._stringBuffer = this._boolValue ? "true" : "false", this._stringBuffer;
  }
  equals(t) {
    return typeof t == "boolean" && t == this._boolValue;
  }
  isStatic() {
    return !0;
  }
  constructor(t) {
    super(), this._boolValue = t;
  }
}, Yt = class extends Q {
  constructor(t) {
    super(), this._stringBuffer = t;
  }
  isString() {
    return !0;
  }
  getString(t, e) {
    return this._stringBuffer;
  }
  equals(t) {
    return typeof t == "string" && this._stringBuffer == t;
  }
}, te = class extends Yt {
  isStatic() {
    return this._isStatic;
  }
  setErrorNotForClientCall(t) {
    return this._stringBuffer = t, this;
  }
  constructor(t, e) {
    super(t), this._isStatic = e;
  }
  isError() {
    return !0;
  }
}, Kt = class extends Q {
  isNull() {
    return !0;
  }
  getString(t, e) {
    return this._stringBuffer;
  }
  isStatic() {
    return !0;
  }
  setErrorNotForClientCall(t) {
    return this._stringBuffer = t, te.nullValue;
  }
  constructor() {
    super(), this._stringBuffer = "NullValue";
  }
}, ze = class extends Q {
  constructor() {
    super(), this._array = [];
  }
  release() {
    for (let t = 0; t < this._array.length; t++) {
      let e = this._array[t];
      e && !e.isStatic() && (e = void 0, e = null);
    }
  }
  isArray() {
    return !0;
  }
  getValueByIndex(t) {
    return t < 0 || this._array.length <= t ? Q.errorValue.setErrorNotForClientCall(Ri) : this._array[t] ?? Q.nullValue;
  }
  getValueByString(t) {
    return Q.errorValue.setErrorNotForClientCall(pe);
  }
  getString(t, e) {
    let a = e + `[
`;
    for (let r = 0; r < this._array.length; r++) {
      let i = this._array[r];
      this._stringBuffer += e + "" + i.getString(e + " ") + `
`;
    }
    return this._stringBuffer = a + e + `]
`, this._stringBuffer;
  }
  add(t) {
    this._array.push(t);
  }
  getVector(t = null) {
    return this._array;
  }
  getSize() {
    return this._array.length;
  }
}, Gt = class extends Q {
  constructor() {
    super(), this._map = /* @__PURE__ */ new Map();
  }
  release() {
    this._map.clear();
  }
  isMap() {
    return !0;
  }
  getValueByString(t) {
    return this._map.get(t) ?? Q.nullValue;
  }
  getValueByIndex(t) {
    return Q.errorValue.setErrorNotForClientCall(pe);
  }
  getString(t, e) {
    this._stringBuffer = e + `{
`;
    for (let a of this._map) {
      let r = a[0], i = a[1];
      this._stringBuffer += e + " " + r + " : " + i.getString(e + "   ") + ` 
`;
    }
    return this._stringBuffer += e + `}
`, this._stringBuffer;
  }
  getMap(t) {
    return this._map;
  }
  put(t, e) {
    this._map.set(t, e);
  }
  getKeys() {
    return this._keys ||= [...this._map.keys()], this._keys;
  }
  getSize() {
    return this._keys.length;
  }
}, Bi;
(function(t) {
  t.CubismJson = Z, t.JsonArray = ze, t.JsonBoolean = ht, t.JsonError = te, t.JsonFloat = me, t.JsonMap = Gt, t.JsonNullvalue = Kt, t.JsonString = Yt, t.Value = Q;
})(Bi ||= {});
function Di(t, e) {
  let a = 0;
  for (let i = 1; ; i++) {
    let s = t.slice(i - 1, i);
    if (s == "e" || s == "-" || s == "E") continue;
    let n = t.substring(0, i), o = Number(n);
    if (isNaN(o)) break;
    a = i;
  }
  let r = parseFloat(t);
  return isNaN(r) && (r = NaN), e[0] = t.slice(a), r;
}
var nt = !1, Dt = !1, Ht = null, zt = null, ut = Object.freeze({
  vertexOffset: 0,
  vertexStep: 2
});
function Hi(t) {
}
var L = class {
  static startUp(t = null) {
    if (nt) return _t("CubismFramework.startUp() is already done."), nt;
    if (Ht = t, Ht != null && Live2DCubismCore.Logging.csmSetLogFunction(Ht.logFunction), nt = !0, nt) {
      let e = Live2DCubismCore.Version.csmGetVersion(), a = (e & 4278190080) >> 24, r = (e & 16711680) >> 16, i = e & 65535, s = e;
      _t("Live2D Cubism Core version: {0}.{1}.{2} ({3})", ("00" + a).slice(-2), ("00" + r).slice(-2), ("0000" + i).slice(-4), s);
    }
    return _t("CubismFramework.startUp() is complete."), nt;
  }
  static cleanUp() {
    nt = !1, Dt = !1, Ht = null, zt = null;
  }
  static initialize(t = 0) {
    if (G(nt), !nt) {
      Y("CubismFramework is not started.");
      return;
    }
    if (Dt) {
      Y("CubismFramework.initialize() skipped, already initialized.");
      return;
    }
    Q.staticInitializeNotForClientCall(), zt = new za(), Live2DCubismCore.Memory.initializeAmountOfMemory(t), Dt = !0, _t("CubismFramework.initialize() is complete.");
  }
  static dispose() {
    if (G(nt), !nt) {
      Y("CubismFramework is not started.");
      return;
    }
    if (!Dt) {
      Y("CubismFramework.dispose() skipped, not initialized.");
      return;
    }
    Q.staticReleaseNotForClientCall(), zt.release(), zt = null, ye.staticRelease(), Dt = !1, _t("CubismFramework.dispose() is complete.");
  }
  static isStarted() {
    return nt;
  }
  static isInitialized() {
    return Dt;
  }
  static coreLogFunction(t) {
    Live2DCubismCore.Logging.csmGetLogFunction() && Live2DCubismCore.Logging.csmGetLogFunction()(t);
  }
  static getLoggingLevel() {
    return Ht == null ? Rt.LogLevel_Off : Ht.loggingLevel;
  }
  static getIdManager() {
    return zt;
  }
  constructor() {
  }
}, Ai = class {
}, Rt = /* @__PURE__ */ function(t) {
  return t[t.LogLevel_Verbose = 0] = "LogLevel_Verbose", t[t.LogLevel_Debug = 1] = "LogLevel_Debug", t[t.LogLevel_Info = 2] = "LogLevel_Info", t[t.LogLevel_Warning = 3] = "LogLevel_Warning", t[t.LogLevel_Error = 4] = "LogLevel_Error", t[t.LogLevel_Off = 5] = "LogLevel_Off", t;
}({}), Ni;
(function(t) {
  t.Constant = ut, t.csmDelete = Hi, t.CubismFramework = L;
})(Ni ||= {});
var St = class {
  constructor(t = !1, e = new E()) {
    this.isOverridden = t, this.color = e;
  }
}, Fi = class {
  constructor(t) {
    this._model = t, this._isOverriddenModelMultiplyColors = !1, this._isOverriddenModelScreenColors = !1, this._userPartScreenColors = [], this._userPartMultiplyColors = [], this._userDrawableScreenColors = [], this._userDrawableMultiplyColors = [], this._userOffscreenScreenColors = [], this._userOffscreenMultiplyColors = [];
  }
  initialize(t, e, a) {
    let r = new St(!1, new E(1, 1, 1, 1)), i = new St(!1, new E(0, 0, 0, 1));
    this._userPartMultiplyColors = Array(t), this._userPartScreenColors = Array(t);
    for (let s = 0; s < t; s++) this._userPartMultiplyColors[s] = new St(r.isOverridden, new E(r.color.r, r.color.g, r.color.b, r.color.a)), this._userPartScreenColors[s] = new St(i.isOverridden, new E(i.color.r, i.color.g, i.color.b, i.color.a));
    this._userDrawableMultiplyColors = Array(e), this._userDrawableScreenColors = Array(e);
    for (let s = 0; s < e; s++) this._userDrawableMultiplyColors[s] = new St(r.isOverridden, new E(r.color.r, r.color.g, r.color.b, r.color.a)), this._userDrawableScreenColors[s] = new St(i.isOverridden, new E(i.color.r, i.color.g, i.color.b, i.color.a));
    this._userOffscreenMultiplyColors = Array(a), this._userOffscreenScreenColors = Array(a);
    for (let s = 0; s < a; s++) this._userOffscreenMultiplyColors[s] = new St(r.isOverridden, new E(r.color.r, r.color.g, r.color.b, r.color.a)), this._userOffscreenScreenColors[s] = new St(i.isOverridden, new E(i.color.r, i.color.g, i.color.b, i.color.a));
  }
  warnIndexOutOfRange(t, e, a) {
    Y(`${t}: index is out of range. index=${e}, valid range=[0, ${a}].`);
  }
  isValidPartIndex(t, e) {
    return t < 0 || t >= this._model.getPartCount() ? (this.warnIndexOutOfRange(e, t, this._model.getPartCount() - 1), !1) : !0;
  }
  isValidDrawableIndex(t, e) {
    return t < 0 || t >= this._model.getDrawableCount() ? (this.warnIndexOutOfRange(e, t, this._model.getDrawableCount() - 1), !1) : !0;
  }
  isValidOffscreenIndex(t, e) {
    return t < 0 || t >= this._model.getOffscreenCount() ? (this.warnIndexOutOfRange(e, t, this._model.getOffscreenCount() - 1), !1) : !0;
  }
  setMultiplyColorEnabled(t) {
    this._isOverriddenModelMultiplyColors = t;
  }
  getMultiplyColorEnabled() {
    return this._isOverriddenModelMultiplyColors;
  }
  setScreenColorEnabled(t) {
    this._isOverriddenModelScreenColors = t;
  }
  getScreenColorEnabled() {
    return this._isOverriddenModelScreenColors;
  }
  setPartMultiplyColorEnabled(t, e) {
    this.isValidPartIndex(t, "setPartMultiplyColorEnabled") && this.setPartColorEnabled(t, e, this._userPartMultiplyColors, this._userDrawableMultiplyColors, this._userOffscreenMultiplyColors);
  }
  getPartMultiplyColorEnabled(t) {
    return this.isValidPartIndex(t, "getPartMultiplyColorEnabled") ? this._userPartMultiplyColors[t].isOverridden : !1;
  }
  setPartScreenColorEnabled(t, e) {
    this.isValidPartIndex(t, "setPartScreenColorEnabled") && this.setPartColorEnabled(t, e, this._userPartScreenColors, this._userDrawableScreenColors, this._userOffscreenScreenColors);
  }
  getPartScreenColorEnabled(t) {
    return this.isValidPartIndex(t, "getPartScreenColorEnabled") ? this._userPartScreenColors[t].isOverridden : !1;
  }
  setPartMultiplyColorByTextureColor(t, e) {
    this.isValidPartIndex(t, "setPartMultiplyColorByTextureColor") && this.setPartMultiplyColorByRGBA(t, e.r, e.g, e.b, e.a);
  }
  setPartMultiplyColorByRGBA(t, e, a, r, i = 1) {
    this.isValidPartIndex(t, "setPartMultiplyColorByRGBA") && this.setPartColor(t, e, a, r, i, this._userPartMultiplyColors, this._userDrawableMultiplyColors, this._userOffscreenMultiplyColors);
  }
  getPartMultiplyColor(t) {
    return this.isValidPartIndex(t, "getPartMultiplyColor") ? this._userPartMultiplyColors[t].color : new E(1, 1, 1, 1);
  }
  setPartScreenColorByTextureColor(t, e) {
    this.isValidPartIndex(t, "setPartScreenColorByTextureColor") && this.setPartScreenColorByRGBA(t, e.r, e.g, e.b, e.a);
  }
  setPartScreenColorByRGBA(t, e, a, r, i = 1) {
    this.isValidPartIndex(t, "setPartScreenColorByRGBA") && this.setPartColor(t, e, a, r, i, this._userPartScreenColors, this._userDrawableScreenColors, this._userOffscreenScreenColors);
  }
  getPartScreenColor(t) {
    return this.isValidPartIndex(t, "getPartScreenColor") ? this._userPartScreenColors[t].color : new E(0, 0, 0, 1);
  }
  setDrawableMultiplyColorEnabled(t, e) {
    this.isValidDrawableIndex(t, "setDrawableMultiplyColorEnabled") && (this._userDrawableMultiplyColors[t].isOverridden = e);
  }
  getDrawableMultiplyColorEnabled(t) {
    return this.isValidDrawableIndex(t, "getDrawableMultiplyColorEnabled") ? this._userDrawableMultiplyColors[t].isOverridden : !1;
  }
  setDrawableScreenColorEnabled(t, e) {
    this.isValidDrawableIndex(t, "setDrawableScreenColorEnabled") && (this._userDrawableScreenColors[t].isOverridden = e);
  }
  getDrawableScreenColorEnabled(t) {
    return this.isValidDrawableIndex(t, "getDrawableScreenColorEnabled") ? this._userDrawableScreenColors[t].isOverridden : !1;
  }
  setDrawableMultiplyColorByTextureColor(t, e) {
    this.isValidDrawableIndex(t, "setDrawableMultiplyColorByTextureColor") && this.setDrawableMultiplyColorByRGBA(t, e.r, e.g, e.b, e.a);
  }
  setDrawableMultiplyColorByRGBA(t, e, a, r, i = 1) {
    this.isValidDrawableIndex(t, "setDrawableMultiplyColorByRGBA") && (this._userDrawableMultiplyColors[t].color.r = e, this._userDrawableMultiplyColors[t].color.g = a, this._userDrawableMultiplyColors[t].color.b = r, this._userDrawableMultiplyColors[t].color.a = i);
  }
  getDrawableMultiplyColor(t) {
    return this.isValidDrawableIndex(t, "getDrawableMultiplyColor") ? this.getMultiplyColorEnabled() || this.getDrawableMultiplyColorEnabled(t) ? this._userDrawableMultiplyColors[t].color : this._model.getDrawableMultiplyColor(t) : new E(1, 1, 1, 1);
  }
  setDrawableScreenColorByTextureColor(t, e) {
    this.isValidDrawableIndex(t, "setDrawableScreenColorByTextureColor") && this.setDrawableScreenColorByRGBA(t, e.r, e.g, e.b, e.a);
  }
  setDrawableScreenColorByRGBA(t, e, a, r, i = 1) {
    this.isValidDrawableIndex(t, "setDrawableScreenColorByRGBA") && (this._userDrawableScreenColors[t].color.r = e, this._userDrawableScreenColors[t].color.g = a, this._userDrawableScreenColors[t].color.b = r, this._userDrawableScreenColors[t].color.a = i);
  }
  getDrawableScreenColor(t) {
    return this.isValidDrawableIndex(t, "getDrawableScreenColor") ? this.getScreenColorEnabled() || this.getDrawableScreenColorEnabled(t) ? this._userDrawableScreenColors[t].color : this._model.getDrawableScreenColor(t) : new E(0, 0, 0, 1);
  }
  setOffscreenMultiplyColorEnabled(t, e) {
    this.isValidOffscreenIndex(t, "setOffscreenMultiplyColorEnabled") && (this._userOffscreenMultiplyColors[t].isOverridden = e);
  }
  getOffscreenMultiplyColorEnabled(t) {
    return this.isValidOffscreenIndex(t, "getOffscreenMultiplyColorEnabled") ? this._userOffscreenMultiplyColors[t].isOverridden : !1;
  }
  setOffscreenScreenColorEnabled(t, e) {
    this.isValidOffscreenIndex(t, "setOffscreenScreenColorEnabled") && (this._userOffscreenScreenColors[t].isOverridden = e);
  }
  getOffscreenScreenColorEnabled(t) {
    return this.isValidOffscreenIndex(t, "getOffscreenScreenColorEnabled") ? this._userOffscreenScreenColors[t].isOverridden : !1;
  }
  setOffscreenMultiplyColorByTextureColor(t, e) {
    this.isValidOffscreenIndex(t, "setOffscreenMultiplyColorByTextureColor") && this.setOffscreenMultiplyColorByRGBA(t, e.r, e.g, e.b, e.a);
  }
  setOffscreenMultiplyColorByRGBA(t, e, a, r, i = 1) {
    this.isValidOffscreenIndex(t, "setOffscreenMultiplyColorByRGBA") && (this._userOffscreenMultiplyColors[t].color.r = e, this._userOffscreenMultiplyColors[t].color.g = a, this._userOffscreenMultiplyColors[t].color.b = r, this._userOffscreenMultiplyColors[t].color.a = i);
  }
  getOffscreenMultiplyColor(t) {
    return this.isValidOffscreenIndex(t, "getOffscreenMultiplyColor") ? this.getMultiplyColorEnabled() || this.getOffscreenMultiplyColorEnabled(t) ? this._userOffscreenMultiplyColors[t].color : this._model.getOffscreenMultiplyColor(t) : new E(1, 1, 1, 1);
  }
  setOffscreenScreenColorByTextureColor(t, e) {
    this.isValidOffscreenIndex(t, "setOffscreenScreenColorByTextureColor") && this.setOffscreenScreenColorByRGBA(t, e.r, e.g, e.b, e.a);
  }
  setOffscreenScreenColorByRGBA(t, e, a, r, i = 1) {
    this.isValidOffscreenIndex(t, "setOffscreenScreenColorByRGBA") && (this._userOffscreenScreenColors[t].color.r = e, this._userOffscreenScreenColors[t].color.g = a, this._userOffscreenScreenColors[t].color.b = r, this._userOffscreenScreenColors[t].color.a = i);
  }
  getOffscreenScreenColor(t) {
    return this.isValidOffscreenIndex(t, "getOffscreenScreenColor") ? this.getScreenColorEnabled() || this.getOffscreenScreenColorEnabled(t) ? this._userOffscreenScreenColors[t].color : this._model.getOffscreenScreenColor(t) : new E(0, 0, 0, 1);
  }
  setPartColor(t, e, a, r, i, s, n, o) {
    if (s[t].color.r = e, s[t].color.g = a, s[t].color.b = r, s[t].color.a = i, s[t].isOverridden) {
      let l = this._model.getPartOffscreenIndices()[t];
      if (l == -1) {
        let h = this._model.getPartsHierarchy();
        if (h && h[t]) for (let _ = 0; _ < h[t].objects.length; ++_) {
          let g = h[t].objects[_];
          if (g.objectType === kt.CubismModelObjectType_Drawable) {
            let u = g.objectIndex;
            n[u].color.r = e, n[u].color.g = a, n[u].color.b = r, n[u].color.a = i;
          } else {
            let u = g.objectIndex;
            this.setPartColor(u, e, a, r, i, s, n, o);
          }
        }
      } else o[l].color.r = e, o[l].color.g = a, o[l].color.b = r, o[l].color.a = i;
    }
  }
  setPartColorEnabled(t, e, a, r, i) {
    a[t].isOverridden = e;
    let s = this._model.getPartOffscreenIndices()[t];
    if (s == -1) {
      let n = this._model.getPartsHierarchy();
      if (n && n[t]) for (let o = 0; o < n[t].objects.length; ++o) {
        let l = n[t].objects[o];
        if (l.objectType === kt.CubismModelObjectType_Drawable) {
          let h = l.objectIndex;
          r[h].isOverridden = e, e && (r[h].color.r = a[t].color.r, r[h].color.g = a[t].color.g, r[h].color.b = a[t].color.b, r[h].color.a = a[t].color.a);
        } else {
          let h = l.objectIndex;
          e && (a[h].color.r = a[t].color.r, a[h].color.g = a[t].color.g, a[h].color.b = a[t].color.b, a[h].color.a = a[t].color.a), this.setPartColorEnabled(h, e, a, r, i);
        }
      }
    } else i[s].isOverridden = e, e && (i[s].color.r = a[t].color.r, i[s].color.g = a[t].color.g, i[s].color.b = a[t].color.b, i[s].color.a = a[t].color.a);
  }
}, H = /* @__PURE__ */ function(t) {
  return t[t.ColorBlend_None = -1] = "ColorBlend_None", t[t.ColorBlend_Normal = Live2DCubismCore.ColorBlendType_Normal] = "ColorBlend_Normal", t[t.ColorBlend_AddGlow = Live2DCubismCore.ColorBlendType_AddGlow] = "ColorBlend_AddGlow", t[t.ColorBlend_Add = Live2DCubismCore.ColorBlendType_Add] = "ColorBlend_Add", t[t.ColorBlend_Darken = Live2DCubismCore.ColorBlendType_Darken] = "ColorBlend_Darken", t[t.ColorBlend_Multiply = Live2DCubismCore.ColorBlendType_Multiply] = "ColorBlend_Multiply", t[t.ColorBlend_ColorBurn = Live2DCubismCore.ColorBlendType_ColorBurn] = "ColorBlend_ColorBurn", t[t.ColorBlend_LinearBurn = Live2DCubismCore.ColorBlendType_LinearBurn] = "ColorBlend_LinearBurn", t[t.ColorBlend_Lighten = Live2DCubismCore.ColorBlendType_Lighten] = "ColorBlend_Lighten", t[t.ColorBlend_Screen = Live2DCubismCore.ColorBlendType_Screen] = "ColorBlend_Screen", t[t.ColorBlend_ColorDodge = Live2DCubismCore.ColorBlendType_ColorDodge] = "ColorBlend_ColorDodge", t[t.ColorBlend_Overlay = Live2DCubismCore.ColorBlendType_Overlay] = "ColorBlend_Overlay", t[t.ColorBlend_SoftLight = Live2DCubismCore.ColorBlendType_SoftLight] = "ColorBlend_SoftLight", t[t.ColorBlend_HardLight = Live2DCubismCore.ColorBlendType_HardLight] = "ColorBlend_HardLight", t[t.ColorBlend_LinearLight = Live2DCubismCore.ColorBlendType_LinearLight] = "ColorBlend_LinearLight", t[t.ColorBlend_Hue = Live2DCubismCore.ColorBlendType_Hue] = "ColorBlend_Hue", t[t.ColorBlend_Color = Live2DCubismCore.ColorBlendType_Color] = "ColorBlend_Color", t[t.ColorBlend_AddCompatible = Live2DCubismCore.ColorBlendType_AddCompatible] = "ColorBlend_AddCompatible", t[t.ColorBlend_MultiplyCompatible = Live2DCubismCore.ColorBlendType_MultiplyCompatible] = "ColorBlend_MultiplyCompatible", t;
}({}), j = /* @__PURE__ */ function(t) {
  return t[t.AlphaBlend_None = -1] = "AlphaBlend_None", t[t.AlphaBlend_Over = 0] = "AlphaBlend_Over", t[t.AlphaBlend_Atop = 1] = "AlphaBlend_Atop", t[t.AlphaBlend_Out = 2] = "AlphaBlend_Out", t[t.AlphaBlend_ConjointOver = 3] = "AlphaBlend_ConjointOver", t[t.AlphaBlend_DisjointOver = 4] = "AlphaBlend_DisjointOver", t;
}({}), kt = /* @__PURE__ */ function(t) {
  return t[t.CubismModelObjectType_Drawable = 0] = "CubismModelObjectType_Drawable", t[t.CubismModelObjectType_Parts = 1] = "CubismModelObjectType_Parts", t;
}({}), Vi = class {
  constructor(t = !1, e = !1) {
    this.isOverridden = t, this.isParameterRepeated = e;
  }
}, da = class {
  constructor(t = !1, e = !1) {
    this.isOverridden = t, this.isCulling = e;
  }
}, Ui = class {
  constructor(t = [], e = []) {
    this.drawableIndices = t, this.offscreenIndices = e;
  }
}, ga = class {
  constructor(t, e) {
    this.objectIndex = t, this.objectType = e;
  }
}, ki = class {
  constructor(t = [], e = new Ui()) {
    this.objects = t, this.childDrawObjects = e;
  }
  getChildObjectCount() {
    return this.objects.length;
  }
}, Qa = class {
  update() {
    this._model.update(), this._model.drawables.resetDynamicFlags();
  }
  getPixelsPerUnit() {
    return this._model == null ? 0 : this._model.canvasinfo.PixelsPerUnit;
  }
  getCanvasWidth() {
    return this._model == null ? 0 : this._model.canvasinfo.CanvasWidth / this._model.canvasinfo.PixelsPerUnit;
  }
  getCanvasHeight() {
    return this._model == null ? 0 : this._model.canvasinfo.CanvasHeight / this._model.canvasinfo.PixelsPerUnit;
  }
  saveParameters() {
    let t = this._model.parameters.count, e = this._savedParameters.length;
    for (let a = 0; a < t; ++a) a < e ? this._savedParameters[a] = this._parameterValues[a] : this._savedParameters.push(this._parameterValues[a]);
  }
  getOverrideMultiplyAndScreenColor() {
    return this._overrideMultiplyAndScreenColor;
  }
  getOverrideFlagForModelParameterRepeat() {
    return this._isOverriddenParameterRepeat;
  }
  setOverrideFlagForModelParameterRepeat(t) {
    this._isOverriddenParameterRepeat = t;
  }
  getOverrideFlagForParameterRepeat(t) {
    return this._userParameterRepeatDataList[t].isOverridden;
  }
  setOverrideFlagForParameterRepeat(t, e) {
    this._userParameterRepeatDataList[t].isOverridden = e;
  }
  getRepeatFlagForParameterRepeat(t) {
    return this._userParameterRepeatDataList[t].isParameterRepeated;
  }
  setRepeatFlagForParameterRepeat(t, e) {
    this._userParameterRepeatDataList[t].isParameterRepeated = e;
  }
  getDrawableCulling(t) {
    if (this.getOverrideFlagForModelCullings() || this.getOverrideFlagForDrawableCullings(t)) return this._userDrawableCullings[t].isCulling;
    let e = this._model.drawables.constantFlags;
    return !Live2DCubismCore.Utils.hasIsDoubleSidedBit(e[t]);
  }
  setDrawableCulling(t, e) {
    this._userDrawableCullings[t].isCulling = e;
  }
  getOffscreenCulling(t) {
    if (this.getOverrideFlagForModelCullings() || this.getOverrideFlagForOffscreenCullings(t)) return this._userOffscreenCullings[t].isCulling;
    let e = this._model.offscreens.constantFlags;
    return !Live2DCubismCore.Utils.hasIsDoubleSidedBit(e[t]);
  }
  setOffscreenCulling(t, e) {
    this._userOffscreenCullings[t].isCulling = e;
  }
  getOverrideFlagForModelCullings() {
    return this._isOverriddenCullings;
  }
  setOverrideFlagForModelCullings(t) {
    this._isOverriddenCullings = t;
  }
  getOverrideFlagForDrawableCullings(t) {
    return this._userDrawableCullings[t].isOverridden;
  }
  getOverrideFlagForOffscreenCullings(t) {
    return this._userOffscreenCullings[t].isOverridden;
  }
  setOverrideFlagForDrawableCullings(t, e) {
    this._userDrawableCullings[t].isOverridden = e;
  }
  getModelOapcity() {
    return this._modelOpacity;
  }
  setModelOapcity(t) {
    this._modelOpacity = t;
  }
  getModel() {
    return this._model;
  }
  getPartIndex(t) {
    let e, a = this._model.parts.count;
    for (e = 0; e < a; ++e) if (t == this._partIds[e]) return e;
    return this._notExistPartId.has(t) ? this._notExistPartId.get(t) : (e = a + this._notExistPartId.size, this._notExistPartId.set(t, e), this._notExistPartOpacities.set(e, null), e);
  }
  getPartId(t) {
    let e = this._model.parts.ids[t];
    return L.getIdManager().getId(e);
  }
  getPartCount() {
    return this._model.parts.count;
  }
  getPartOffscreenIndices() {
    return this._model.parts.offscreenIndices;
  }
  getPartParentPartIndices() {
    return this._model.parts.parentIndices;
  }
  setPartOpacityByIndex(t, e) {
    if (this._notExistPartOpacities.has(t)) {
      this._notExistPartOpacities.set(t, e);
      return;
    }
    G(0 <= t && t < this.getPartCount()), this._partOpacities[t] = e;
  }
  setPartOpacityById(t, e) {
    let a = this.getPartIndex(t);
    a < 0 || this.setPartOpacityByIndex(a, e);
  }
  getPartOpacityByIndex(t) {
    return this._notExistPartOpacities.has(t) ? this._notExistPartOpacities.get(t) : (G(0 <= t && t < this.getPartCount()), this._partOpacities[t]);
  }
  getPartOpacityById(t) {
    let e = this.getPartIndex(t);
    return e < 0 ? 0 : this.getPartOpacityByIndex(e);
  }
  getParameterIndex(t) {
    let e, a = this._model.parameters.count;
    for (e = 0; e < a; ++e) if (t == this._parameterIds[e]) return e;
    return this._notExistParameterId.has(t) ? this._notExistParameterId.get(t) : (e = this._model.parameters.count + this._notExistParameterId.size, this._notExistParameterId.set(t, e), this._notExistParameterValues.set(e, null), e);
  }
  getParameterCount() {
    return this._model.parameters.count;
  }
  getParameterType(t) {
    return this._model.parameters.types[t];
  }
  getParameterMaximumValue(t) {
    return this._model.parameters.maximumValues[t];
  }
  getParameterMinimumValue(t) {
    return this._model.parameters.minimumValues[t];
  }
  getParameterDefaultValue(t) {
    return this._model.parameters.defaultValues[t];
  }
  getParameterId(t) {
    return L.getIdManager().getId(this._model.parameters.ids[t]);
  }
  getParameterValueByIndex(t) {
    return this._notExistParameterValues.has(t) ? this._notExistParameterValues.get(t) : (G(0 <= t && t < this.getParameterCount()), this._parameterValues[t]);
  }
  getParameterValueById(t) {
    let e = this.getParameterIndex(t);
    return this.getParameterValueByIndex(e);
  }
  setParameterValueByIndex(t, e, a = 1) {
    if (this._notExistParameterValues.has(t)) {
      this._notExistParameterValues.set(t, a == 1 ? e : this._notExistParameterValues.get(t) * (1 - a) + e * a);
      return;
    }
    G(0 <= t && t < this.getParameterCount()), e = this.isRepeat(t) ? this.getParameterRepeatValue(t, e) : this.getParameterClampValue(t, e), this._parameterValues[t] = a == 1 ? e : this._parameterValues[t] = this._parameterValues[t] * (1 - a) + e * a;
  }
  setParameterValueById(t, e, a = 1) {
    let r = this.getParameterIndex(t);
    this.setParameterValueByIndex(r, e, a);
  }
  addParameterValueByIndex(t, e, a = 1) {
    this.setParameterValueByIndex(t, this.getParameterValueByIndex(t) + e * a);
  }
  addParameterValueById(t, e, a = 1) {
    let r = this.getParameterIndex(t);
    this.addParameterValueByIndex(r, e, a);
  }
  isRepeat(t) {
    if (this._notExistParameterValues.has(t)) return !1;
    G(0 <= t && t < this.getParameterCount());
    let e;
    return e = this._isOverriddenParameterRepeat || this._userParameterRepeatDataList[t].isOverridden ? this._userParameterRepeatDataList[t].isParameterRepeated : this._model.parameters.repeats[t] != 0, e;
  }
  getParameterRepeatValue(t, e) {
    if (this._notExistParameterValues.has(t)) return e;
    G(0 <= t && t < this.getParameterCount());
    let a = this._model.parameters.maximumValues[t], r = this._model.parameters.minimumValues[t], i = a - r;
    if (a < e) {
      let s = $.mod(e - a, i);
      e = Number.isNaN(s) ? a : r + s;
    }
    if (e < r) {
      let s = $.mod(r - e, i);
      e = Number.isNaN(s) ? r : a - s;
    }
    return e;
  }
  getParameterClampValue(t, e) {
    if (this._notExistParameterValues.has(t)) return e;
    G(0 <= t && t < this.getParameterCount());
    let a = this._model.parameters.maximumValues[t], r = this._model.parameters.minimumValues[t];
    return $.clamp(e, r, a);
  }
  getParameterRepeats(t) {
    return this._model.parameters.repeats[t] != 0;
  }
  multiplyParameterValueById(t, e, a = 1) {
    let r = this.getParameterIndex(t);
    this.multiplyParameterValueByIndex(r, e, a);
  }
  multiplyParameterValueByIndex(t, e, a = 1) {
    this.setParameterValueByIndex(t, this.getParameterValueByIndex(t) * (1 + (e - 1) * a));
  }
  getDrawableIndex(t) {
    let e = this._model.drawables.count;
    for (let a = 0; a < e; ++a) if (this._drawableIds[a] == t) return a;
    return -1;
  }
  getDrawableCount() {
    return this._model.drawables.count;
  }
  getDrawableId(t) {
    let e = this._model.drawables.ids;
    return L.getIdManager().getId(e[t]);
  }
  getRenderOrders() {
    return this._model.getRenderOrders();
  }
  getDrawableTextureIndex(t) {
    return this._model.drawables.textureIndices[t];
  }
  getDrawableDynamicFlagVertexPositionsDidChange(t) {
    let e = this._model.drawables.dynamicFlags;
    return Live2DCubismCore.Utils.hasVertexPositionsDidChangeBit(e[t]);
  }
  getDrawableVertexIndexCount(t) {
    return this._model.drawables.indexCounts[t];
  }
  getDrawableVertexCount(t) {
    return this._model.drawables.vertexCounts[t];
  }
  getDrawableVertices(t) {
    return this.getDrawableVertexPositions(t);
  }
  getDrawableVertexIndices(t) {
    return this._model.drawables.indices[t];
  }
  getDrawableVertexPositions(t) {
    return this._model.drawables.vertexPositions[t];
  }
  getDrawableVertexUvs(t) {
    return this._model.drawables.vertexUvs[t];
  }
  getDrawableOpacity(t) {
    return this._model.drawables.opacities[t];
  }
  getDrawableMultiplyColor(t) {
    this._drawableMultiplyColors ?? (this._drawableMultiplyColors = Array(this._model.drawables.count), this._drawableMultiplyColors.fill(new E()));
    let e = this._model.drawables.multiplyColors, a = t * 4;
    return this._drawableMultiplyColors[t].r = e[a], this._drawableMultiplyColors[t].g = e[a + 1], this._drawableMultiplyColors[t].b = e[a + 2], this._drawableMultiplyColors[t].a = e[a + 3], this._drawableMultiplyColors[t];
  }
  getDrawableScreenColor(t) {
    this._drawableScreenColors ?? (this._drawableScreenColors = Array(this._model.drawables.count), this._drawableScreenColors.fill(new E()));
    let e = this._model.drawables.screenColors, a = t * 4;
    return this._drawableScreenColors[t].r = e[a], this._drawableScreenColors[t].g = e[a + 1], this._drawableScreenColors[t].b = e[a + 2], this._drawableScreenColors[t].a = e[a + 3], this._drawableScreenColors[t];
  }
  getOffscreenMultiplyColor(t) {
    this._offscreenMultiplyColors ?? (this._offscreenMultiplyColors = Array(this._model.offscreens.count), this._offscreenMultiplyColors.fill(new E()));
    let e = this._model.offscreens.multiplyColors, a = t * 4;
    return this._offscreenMultiplyColors[t].r = e[a], this._offscreenMultiplyColors[t].g = e[a + 1], this._offscreenMultiplyColors[t].b = e[a + 2], this._offscreenMultiplyColors[t].a = e[a + 3], this._offscreenMultiplyColors[t];
  }
  getOffscreenScreenColor(t) {
    this._offscreenScreenColors ?? (this._offscreenScreenColors = Array(this._model.offscreens.count), this._offscreenScreenColors.fill(new E()));
    let e = this._model.offscreens.screenColors, a = t * 4;
    return this._offscreenScreenColors[t].r = e[a], this._offscreenScreenColors[t].g = e[a + 1], this._offscreenScreenColors[t].b = e[a + 2], this._offscreenScreenColors[t].a = e[a + 3], this._offscreenScreenColors[t];
  }
  getDrawableParentPartIndex(t) {
    return this._model.drawables.parentPartIndices[t];
  }
  getDrawableBlendMode(t) {
    let e = this._model.drawables.constantFlags;
    return Live2DCubismCore.Utils.hasBlendAdditiveBit(e[t]) ? Et.CubismBlendMode_Additive : Live2DCubismCore.Utils.hasBlendMultiplicativeBit(e[t]) ? Et.CubismBlendMode_Multiplicative : Et.CubismBlendMode_Normal;
  }
  getDrawableColorBlend(t) {
    return this._drawableColorBlends[t] == H.ColorBlend_None && (this._drawableColorBlends[t] = this._model.drawables.blendModes[t] & 255), this._drawableColorBlends[t];
  }
  getDrawableAlphaBlend(t) {
    return this._drawableAlphaBlends[t] == j.AlphaBlend_None && (this._drawableAlphaBlends[t] = this._model.drawables.blendModes[t] >> 8 & 255), this._drawableAlphaBlends[t];
  }
  getDrawableInvertedMaskBit(t) {
    let e = this._model.drawables.constantFlags;
    return Live2DCubismCore.Utils.hasIsInvertedMaskBit(e[t]);
  }
  getDrawableMasks() {
    return this._model.drawables.masks;
  }
  getDrawableMaskCounts() {
    return this._model.drawables.maskCounts;
  }
  isUsingMasking() {
    for (let t = 0; t < this._model.drawables.count; ++t) if (!(this._model.drawables.maskCounts[t] <= 0)) return !0;
    return !1;
  }
  isUsingMaskingForOffscreen() {
    for (let t = 0; t < this.getOffscreenCount(); ++t) if (!(this._model.offscreens.maskCounts[t] <= 0)) return !0;
    return !1;
  }
  getDrawableDynamicFlagIsVisible(t) {
    let e = this._model.drawables.dynamicFlags;
    return Live2DCubismCore.Utils.hasIsVisibleBit(e[t]);
  }
  getDrawableDynamicFlagVisibilityDidChange(t) {
    let e = this._model.drawables.dynamicFlags;
    return Live2DCubismCore.Utils.hasVisibilityDidChangeBit(e[t]);
  }
  getDrawableDynamicFlagOpacityDidChange(t) {
    let e = this._model.drawables.dynamicFlags;
    return Live2DCubismCore.Utils.hasOpacityDidChangeBit(e[t]);
  }
  getDrawableDynamicFlagRenderOrderDidChange(t) {
    let e = this._model.drawables.dynamicFlags;
    return Live2DCubismCore.Utils.hasRenderOrderDidChangeBit(e[t]);
  }
  getDrawableDynamicFlagBlendColorDidChange(t) {
    let e = this._model.drawables.dynamicFlags;
    return Live2DCubismCore.Utils.hasBlendColorDidChangeBit(e[t]);
  }
  getOffscreenCount() {
    return this._model.offscreens.count;
  }
  getOffscreenColorBlend(t) {
    return this._offscreenColorBlends[t] == H.ColorBlend_None && (this._offscreenColorBlends[t] = this._model.offscreens.blendModes[t] & 255), this._offscreenColorBlends[t];
  }
  getOffscreenAlphaBlend(t) {
    return this._offscreenAlphaBlends[t] == j.AlphaBlend_None && (this._offscreenAlphaBlends[t] = this._model.offscreens.blendModes[t] >> 8 & 255), this._offscreenAlphaBlends[t];
  }
  getOffscreenOwnerIndices() {
    return this._model.offscreens.ownerIndices;
  }
  getOffscreenOpacity(t) {
    return t < 0 || t >= this._model.offscreens.count ? 1 : this._model.offscreens.opacities[t];
  }
  getOffscreenMasks() {
    return this._model.offscreens.masks;
  }
  getOffscreenMaskCounts() {
    return this._model.offscreens.maskCounts;
  }
  getOffscreenInvertedMask(t) {
    let e = this._model.offscreens.constantFlags;
    return Live2DCubismCore.Utils.hasIsInvertedMaskBit(e[t]);
  }
  isBlendModeEnabled() {
    return this._isBlendModeEnabled;
  }
  loadParameters() {
    let t = this._model.parameters.count, e = this._savedParameters.length;
    t > e && (t = e);
    for (let a = 0; a < t; ++a) this._parameterValues[a] = this._savedParameters[a];
  }
  initialize() {
    G(this._model), this._parameterValues = this._model.parameters.values, this._partOpacities = this._model.parts.opacities, this._offscreenOpacities = this._model.offscreens.opacities, this._parameterMaximumValues = this._model.parameters.maximumValues, this._parameterMinimumValues = this._model.parameters.minimumValues;
    {
      let e = this._model.parameters.ids, a = this._model.parameters.count;
      this._parameterIds.length = a, this._userParameterRepeatDataList.length = a;
      for (let r = 0; r < a; ++r) this._parameterIds[r] = L.getIdManager().getId(e[r]), this._userParameterRepeatDataList[r] = new Vi(!1, !1);
    }
    let t = this._model.parts.count;
    {
      let e = this._model.parts.ids;
      this._partIds.length = t;
      for (let a = 0; a < t; ++a) this._partIds[a] = L.getIdManager().getId(e[a]);
    }
    {
      let e = this._model.drawables.ids, a = this._model.drawables.count;
      this._userDrawableCullings.length = a;
      let r = new da(!1, !1);
      this._userOffscreenCullings.length = this._model.offscreens.count;
      let i = new da(!1, !1);
      for (let n = 0; n < a; ++n) this._drawableIds.push(L.getIdManager().getId(e[n])), this._userDrawableCullings[n] = r;
      for (let n = 0; n < this._model.offscreens.count; ++n) this._userOffscreenCullings[n] = i;
      if (this.getOffscreenCount() > 0) this._isBlendModeEnabled = !0;
      else {
        this._model.drawables.blendModes;
        for (let n = 0; n < a; ++n) {
          let o = this.getDrawableColorBlend(n), l = this.getDrawableAlphaBlend(n);
          if ((o != H.ColorBlend_Normal || l != j.AlphaBlend_Over) && o != H.ColorBlend_AddCompatible && o != H.ColorBlend_MultiplyCompatible) {
            this._isBlendModeEnabled = !0;
            break;
          }
        }
      }
      this.setupPartsHierarchy();
      let s = this.getOffscreenCount();
      this._overrideMultiplyAndScreenColor.initialize(t, a, s);
    }
  }
  getPartsHierarchy() {
    return this._partsHierarchy;
  }
  setupPartsHierarchy() {
    this._partsHierarchy.length = 0;
    let t = this.getPartCount();
    this._partsHierarchy.length = t;
    for (let a = 0; a < t; ++a) {
      let r = new ki();
      this._partsHierarchy[a] = r;
    }
    for (let a = 0; a < t; ++a) {
      let r = this.getPartParentPartIndices()[a];
      if (r !== -1) {
        for (let i = 0; i < this._partsHierarchy.length; ++i) if (i === r) {
          let s = new ga(a, kt.CubismModelObjectType_Parts);
          this._partsHierarchy[i].objects.push(s);
          break;
        }
      }
    }
    let e = this.getDrawableCount();
    for (let a = 0; a < e; ++a) {
      let r = this.getDrawableParentPartIndex(a);
      if (r !== -1) {
        for (let i = 0; i < this._partsHierarchy.length; ++i) if (i === r) {
          let s = new ga(a, kt.CubismModelObjectType_Drawable);
          this._partsHierarchy[i].objects.push(s);
          break;
        }
      }
    }
    for (let a = 0; a < this._partsHierarchy.length; ++a) this.getPartChildDrawObjects(a);
  }
  getPartChildDrawObjects(t) {
    if (this._partsHierarchy[t].getChildObjectCount() < 1) return this._partsHierarchy[t].childDrawObjects;
    let e = this._partsHierarchy[t].childDrawObjects;
    if (e.drawableIndices.length !== 0 || e.offscreenIndices.length !== 0) return e;
    let a = this._partsHierarchy[t].objects;
    for (let r = 0; r < a.length; ++r) {
      let i = a[r];
      if (i.objectType === kt.CubismModelObjectType_Parts) {
        this.getPartChildDrawObjects(i.objectIndex);
        let s = this._partsHierarchy[i.objectIndex].childDrawObjects;
        e.drawableIndices.push(...s.drawableIndices), e.offscreenIndices.push(...s.offscreenIndices);
        let n = this.getOffscreenIndices(), o = n ? n[i.objectIndex] : -1;
        o !== -1 && e.offscreenIndices.push(o);
      } else i.objectType === kt.CubismModelObjectType_Drawable && e.drawableIndices.push(i.objectIndex);
    }
    return e;
  }
  getOffscreenIndices() {
    return this._model.parts.offscreenIndices;
  }
  constructor(t) {
    this._model = t, this._parameterValues = null, this._parameterMaximumValues = null, this._parameterMinimumValues = null, this._partOpacities = null, this._offscreenOpacities = null, this._savedParameters = [], this._parameterIds = [], this._drawableIds = [], this._partIds = [], this._isOverriddenParameterRepeat = !0, this._isOverriddenCullings = !1, this._modelOpacity = 1, this._overrideMultiplyAndScreenColor = new Fi(this), this._isBlendModeEnabled = !1, this._drawableColorBlends = null, this._drawableAlphaBlends = null, this._offscreenColorBlends = null, this._offscreenAlphaBlends = null, this._drawableMultiplyColors = null, this._drawableScreenColors = null, this._offscreenMultiplyColors = null, this._offscreenScreenColors = null, this._userParameterRepeatDataList = [], this._userDrawableCullings = [], this._userOffscreenCullings = [], this._partsHierarchy = [], this._notExistPartId = /* @__PURE__ */ new Map(), this._notExistParameterId = /* @__PURE__ */ new Map(), this._notExistParameterValues = /* @__PURE__ */ new Map(), this._notExistPartOpacities = /* @__PURE__ */ new Map(), this._drawableColorBlends = Array(t.drawables.count).fill(H.ColorBlend_None), this._drawableAlphaBlends = Array(t.drawables.count).fill(j.AlphaBlend_None), this._offscreenColorBlends = Array(t.offscreens.count).fill(H.ColorBlend_None), this._offscreenAlphaBlends = Array(t.offscreens.count).fill(j.AlphaBlend_None);
  }
  release() {
    this._model.release(), this._model = null, this._drawableColorBlends = null, this._drawableAlphaBlends = null, this._offscreenColorBlends = null, this._offscreenAlphaBlends = null, this._drawableMultiplyColors = null, this._drawableScreenColors = null, this._offscreenMultiplyColors = null, this._offscreenScreenColors = null;
  }
}, Ji;
(function(t) {
  t.CubismModel = Qa;
})(Ji ||= {});
var Mt = class {
  static copyBuffer(t, e, a) {
    if (e == null || a == null) return;
    if (!(t instanceof WebGL2RenderingContext)) throw Error("WebGL2RenderingContext is required for buffer copy.");
    let r = t.getParameter(t.FRAMEBUFFER_BINDING);
    t.bindFramebuffer(t.READ_FRAMEBUFFER, e.getRenderTexture()), t.bindFramebuffer(t.DRAW_FRAMEBUFFER, a.getRenderTexture()), t.blitFramebuffer(0, 0, e.getBufferWidth(), e.getBufferHeight(), 0, 0, a.getBufferWidth(), a.getBufferHeight(), t.COLOR_BUFFER_BIT, t.NEAREST), t.bindFramebuffer(t.FRAMEBUFFER, r);
  }
  beginDraw(t = null) {
    if (this._renderTexture == null) {
      console.error("_renderTexture is null");
      return;
    }
    this._oldFbo = t ?? this._gl.getParameter(this._gl.FRAMEBUFFER_BINDING), this._gl.bindFramebuffer(this._gl.FRAMEBUFFER, this._renderTexture);
  }
  endDraw() {
    this._gl.bindFramebuffer(this._gl.FRAMEBUFFER, this._oldFbo);
  }
  clear(t, e, a, r) {
    this._gl.clearColor(t, e, a, r), this._gl.clear(this._gl.COLOR_BUFFER_BIT);
  }
  createRenderTarget(t, e, a, r) {
    this.destroyRenderTarget(), this._colorBuffer = t.createTexture(), t.bindTexture(t.TEXTURE_2D, this._colorBuffer), t.texImage2D(t.TEXTURE_2D, 0, t.RGBA, e, a, 0, t.RGBA, t.UNSIGNED_BYTE, null), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_S, t.CLAMP_TO_EDGE), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_T, t.CLAMP_TO_EDGE), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MIN_FILTER, t.LINEAR), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MAG_FILTER, t.LINEAR), t.bindTexture(t.TEXTURE_2D, null);
    let i = t.createFramebuffer();
    return i == null ? (T("Failed to create framebuffer"), !1) : (t.bindFramebuffer(t.FRAMEBUFFER, i), t.framebufferTexture2D(t.FRAMEBUFFER, t.COLOR_ATTACHMENT0, t.TEXTURE_2D, this._colorBuffer, 0), t.checkFramebufferStatus(t.FRAMEBUFFER) === t.FRAMEBUFFER_COMPLETE ? (this._renderTexture = i, this._bufferWidth = e, this._bufferHeight = a, this._gl = t, !0) : (T("Framebuffer is not complete"), t.bindFramebuffer(t.FRAMEBUFFER, r), t.deleteFramebuffer(i), this.destroyRenderTarget(), !1));
  }
  destroyRenderTarget() {
    this._colorBuffer &&= (this._gl.bindTexture(this._gl.TEXTURE_2D, null), this._gl.deleteTexture(this._colorBuffer), null), this._renderTexture &&= (this._gl.bindFramebuffer(this._gl.FRAMEBUFFER, null), this._gl.deleteFramebuffer(this._renderTexture), null);
  }
  getGL() {
    return this._gl;
  }
  getRenderTexture() {
    return this._renderTexture;
  }
  getColorBuffer() {
    return this._colorBuffer;
  }
  getBufferWidth() {
    return this._bufferWidth;
  }
  getBufferHeight() {
    return this._bufferHeight;
  }
  isValid() {
    return this._renderTexture != null;
  }
  getOldFBO() {
    return this._oldFbo;
  }
  constructor() {
    this._gl = null, this._colorBuffer = null, this._renderTexture = null, this._bufferWidth = 0, this._bufferHeight = 0, this._oldFbo = null;
  }
}, Ki;
(function(t) {
  t.CubismOffscreenSurface_WebGL = Mt;
})(Ki ||= {});
var Gi = "vertshadersrc.vert", Yi = "vertshadersrcmasked.vert", ji = "vertshadersrcsetupmask.vert", Xi = "fragshadersrcsetupmask.frag", zi = "fragshadersrcpremultipliedalpha.frag", Qi = "fragshadersrcmaskpremultipliedalpha.frag", Wi = "fragshadersrcmaskinvertedpremultipliedalpha.frag", qi = "vertshadersrccopy.vert", Zi = "fragshadersrccopy.frag", ts = "fragshadersrccolorblend.frag", es = "fragshadersrcalphablend.frag", as = "vertshadersrcblend.vert", rs = "fragshadersrcpremultipliedalphablend.frag", is = "ColorBlend_", ss = "AlphaBlend_", ae, ca = new Float32Array([
  -1,
  -1,
  1,
  -1,
  -1,
  1,
  1,
  1
]), ns = new Float32Array([
  0,
  0,
  1,
  0,
  0,
  1,
  1,
  1
]), os = new Float32Array([
  0,
  1,
  1,
  1,
  0,
  0,
  1,
  0
]), Qe = class {
  async loadShader(t) {
    return await (await fetch(t)).text();
  }
  async loadShaders() {
    let t = this._shaderPath ?? this._defaultShaderPath, e = [
      {
        path: t + Gi,
        prop: "_vertShaderSrc"
      },
      {
        path: t + Yi,
        prop: "_vertShaderSrcMasked"
      },
      {
        path: t + ji,
        prop: "_vertShaderSrcSetupMask"
      },
      {
        path: t + Xi,
        prop: "_fragShaderSrcSetupMask"
      },
      {
        path: t + zi,
        prop: "_fragShaderSrcPremultipliedAlpha"
      },
      {
        path: t + Qi,
        prop: "_fragShaderSrcMaskPremultipliedAlpha"
      },
      {
        path: t + Wi,
        prop: "_fragShaderSrcMaskInvertedPremultipliedAlpha"
      },
      {
        path: t + qi,
        prop: "_vertShaderSrcCopy"
      },
      {
        path: t + Zi,
        prop: "_fragShaderSrcCopy"
      },
      {
        path: t + ts,
        prop: "_fragShaderSrcColorBlend"
      },
      {
        path: t + es,
        prop: "_fragShaderSrcAlphaBlend"
      },
      {
        path: t + as,
        prop: "_vertShaderSrcBlend"
      },
      {
        path: t + rs,
        prop: "_fragShaderSrcBlend"
      }
    ];
    (await Promise.all(e.map((a) => this.loadShader(a.path).then((r) => ({
      prop: a.prop,
      data: r
    })).catch((r) => (console.error(`Error loading ${a.path} shader:`, r), {
      prop: a.prop,
      data: ""
    }))))).forEach((a) => {
      this[a.prop] = a.data;
    });
  }
  constructor() {
    this._shaderSets = [], this._isShaderLoading = !1, this._isShaderLoaded = !1, this._colorBlendMap = /* @__PURE__ */ new Map(), this._colorBlendValues = [];
    let t = Object.keys(H), e = Object.keys(H).map((i) => H[i]);
    for (let i = 0; i < t.length; i++) {
      let s = t[i];
      if (s.includes(is)) {
        let n = s.slice(11), o = parseInt(e[i].toString());
        this._colorBlendMap.set(o, n), this._colorBlendValues.push(o);
      }
    }
    this._alphaBlendMap = /* @__PURE__ */ new Map(), this._alphaBlendValues = [];
    let a = Object.keys(j), r = Object.keys(j).map((i) => j[i]);
    for (let i = 0; i < a.length; i++) {
      let s = a[i];
      if (s.includes(ss)) {
        let n = s.slice(11), o = parseInt(r[i].toString());
        this._alphaBlendMap.set(o, n), this._alphaBlendValues.push(o);
      }
    }
    this._blendShaderSetMap = /* @__PURE__ */ new Map(), this._shaderCount = at.ShaderNames_ShaderCount + 1 + (this._colorBlendValues.length - 3) * (this._alphaBlendValues.length - 1) * 3, this._defaultShaderPath = "../../Framework/Shaders/WebGL/", this._shaderPath = this._defaultShaderPath;
  }
  release() {
    this.releaseShaderProgram();
  }
  setupShaderProgramForDrawable(t, e, a) {
    if (t.isPremultipliedAlpha() || T("NoPremultipliedAlpha is not allowed"), this._shaderSets.length == 0 && this.generateShaders(), this._isShaderLoaded == 0) {
      Y("Shader program is not initialized.");
      return;
    }
    let r, i, s, n, o = t.getClippingContextBufferForDrawable() != null, l = e.getDrawableInvertedMaskBit(a), h = o ? l ? 2 : 1 : 0, _, g = !0;
    if (e.isBlendModeEnabled()) {
      let C = e.getDrawableColorBlend(a), P = e.getDrawableAlphaBlend(a);
      if (C == H.ColorBlend_None || P == j.AlphaBlend_None || C == H.ColorBlend_Normal && P == j.AlphaBlend_Over) _ = this._shaderSets[at.ShaderNames_NormalPremultipliedAlpha + h], r = this.gl.ONE, i = this.gl.ONE_MINUS_SRC_ALPHA, s = this.gl.ONE, n = this.gl.ONE_MINUS_SRC_ALPHA;
      else switch (C) {
        case H.ColorBlend_AddCompatible:
          _ = this._shaderSets[at.ShaderNames_AddPremultipliedAlpha + h], r = this.gl.ONE, i = this.gl.ONE, s = this.gl.ZERO, n = this.gl.ONE;
          break;
        case H.ColorBlend_MultiplyCompatible:
          _ = this._shaderSets[at.ShaderNames_MultPremultipliedAlpha + h], r = this.gl.DST_COLOR, i = this.gl.ONE_MINUS_SRC_ALPHA, s = this.gl.ZERO, n = this.gl.ONE;
          break;
        default:
          {
            let w = t._currentOffscreen == null ? t.getModelRenderTarget(0) : t._currentOffscreen;
            Mt.copyBuffer(this.gl, w, t.getModelRenderTarget(1));
            let A = this._blendShaderSetMap.get(this._colorBlendMap.get(C) + this._alphaBlendMap.get(P));
            _ = this._shaderSets[A + h], r = this.gl.ONE, i = this.gl.ZERO, s = this.gl.ONE, n = this.gl.ZERO, g = !1;
          }
          break;
      }
    } else switch (e.getDrawableBlendMode(a)) {
      case Et.CubismBlendMode_Normal:
      default:
        _ = this._shaderSets[at.ShaderNames_NormalPremultipliedAlpha + h], r = this.gl.ONE, i = this.gl.ONE_MINUS_SRC_ALPHA, s = this.gl.ONE, n = this.gl.ONE_MINUS_SRC_ALPHA;
        break;
      case Et.CubismBlendMode_Additive:
        _ = this._shaderSets[at.ShaderNames_AddPremultipliedAlpha + h], r = this.gl.ONE, i = this.gl.ONE, s = this.gl.ZERO, n = this.gl.ONE;
        break;
      case Et.CubismBlendMode_Multiplicative:
        _ = this._shaderSets[at.ShaderNames_MultPremultipliedAlpha + h], r = this.gl.DST_COLOR, i = this.gl.ONE_MINUS_SRC_ALPHA, s = this.gl.ZERO, n = this.gl.ONE;
        break;
    }
    this.gl.useProgram(_.shaderProgram), t._bufferData.vertex ?? (t._bufferData.vertex = this.gl.createBuffer()), this.gl.bindBuffer(this.gl.ARRAY_BUFFER, t._bufferData.vertex);
    let u = e.getDrawableVertices(a);
    this.gl.bufferData(this.gl.ARRAY_BUFFER, u, this.gl.DYNAMIC_DRAW), this.gl.enableVertexAttribArray(_.attributePositionLocation), this.gl.vertexAttribPointer(_.attributePositionLocation, 2, this.gl.FLOAT, !1, 0, 0), t._bufferData.uv ?? (t._bufferData.uv = this.gl.createBuffer()), this.gl.bindBuffer(this.gl.ARRAY_BUFFER, t._bufferData.uv);
    let d = e.getDrawableVertexUvs(a);
    if (this.gl.bufferData(this.gl.ARRAY_BUFFER, d, this.gl.DYNAMIC_DRAW), this.gl.enableVertexAttribArray(_.attributeTexCoordLocation), this.gl.vertexAttribPointer(_.attributeTexCoordLocation, 2, this.gl.FLOAT, !1, 0, 0), o) {
      this.gl.activeTexture(this.gl.TEXTURE1);
      let C = t.getDrawableMaskBuffer(t.getClippingContextBufferForDrawable()._bufferIndex).getColorBuffer();
      this.gl.bindTexture(this.gl.TEXTURE_2D, C), this.gl.uniform1i(_.samplerTexture1Location, 1), this.gl.uniformMatrix4fv(_.uniformClipMatrixLocation, !1, t.getClippingContextBufferForDrawable()._matrixForDraw.getArray());
      let P = t.getClippingContextBufferForDrawable()._layoutChannelIndex, w = t.getClippingContextBufferForDrawable().getClippingManager().getChannelFlagAsColor(P);
      this.gl.uniform4f(_.uniformChannelFlagLocation, w.r, w.g, w.b, w.a), e.isBlendModeEnabled() && this.gl.uniform1f(_.uniformInvertMaskFlagLocation, +!!l);
    }
    let c = e.getDrawableTextureIndex(a), p = t.getBindedTextures().get(c);
    this.gl.activeTexture(this.gl.TEXTURE0), this.gl.bindTexture(this.gl.TEXTURE_2D, p), this.gl.uniform1i(_.samplerTexture0Location, 0);
    let f = t.getMvpMatrix();
    this.gl.uniformMatrix4fv(_.uniformMatrixLocation, !1, f.getArray());
    let m = null;
    if (e.isBlendModeEnabled()) {
      let C = e.getDrawableOpacity(a);
      m = new E(C, C, C, C);
    } else m = t.getModelColorWithOpacity(e.getDrawableOpacity(a));
    let v = e.getOverrideMultiplyAndScreenColor(), b = v.getDrawableMultiplyColor(a), y = v.getDrawableScreenColor(a);
    if (this.gl.uniform4f(_.uniformBaseColorLocation, m.r, m.g, m.b, m.a), this.gl.uniform4f(_.uniformMultiplyColorLocation, b.r, b.g, b.b, b.a), this.gl.uniform4f(_.uniformScreenColorLocation, y.r, y.g, y.b, y.a), e.isBlendModeEnabled() && (this.gl.activeTexture(this.gl.TEXTURE2), !g)) {
      let C = t.getModelRenderTarget(1).getColorBuffer();
      this.gl.bindTexture(this.gl.TEXTURE_2D, C), this.gl.uniform1i(_.samplerFrameBufferTextureLocation, 2);
    }
    t._bufferData.index ?? (t._bufferData.index = this.gl.createBuffer());
    let S = e.getDrawableVertexIndices(a);
    this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER, t._bufferData.index), this.gl.bufferData(this.gl.ELEMENT_ARRAY_BUFFER, S, this.gl.DYNAMIC_DRAW), this.gl.blendFuncSeparate(r, i, s, n);
  }
  setupShaderProgramForOffscreen(t, e, a) {
    if (t.isPremultipliedAlpha() || T("NoPremultipliedAlpha is not allowed"), this._shaderSets.length == 0 && this.generateShaders(), this._isShaderLoaded == 0) {
      Y("Shader program is not initialized.");
      return;
    }
    let r, i, s, n, o = a.getOffscreenIndex(), l = t.getClippingContextBufferForOffscreen() != null, h = e.getOffscreenInvertedMask(o), _ = l ? h ? 2 : 1 : 0, g, u = !0, d = e.getOffscreenColorBlend(o), c = e.getOffscreenAlphaBlend(o);
    if (d == H.ColorBlend_None || c == j.AlphaBlend_None || d == H.ColorBlend_Normal && c == j.AlphaBlend_Over) g = this._shaderSets[at.ShaderNames_NormalPremultipliedAlpha + _], r = this.gl.ONE, i = this.gl.ONE_MINUS_SRC_ALPHA, s = this.gl.ONE, n = this.gl.ONE_MINUS_SRC_ALPHA;
    else switch (d) {
      case H.ColorBlend_AddCompatible:
        g = this._shaderSets[at.ShaderNames_AddPremultipliedAlpha + _], r = this.gl.ONE, i = this.gl.ONE, s = this.gl.ZERO, n = this.gl.ONE;
        break;
      case H.ColorBlend_MultiplyCompatible:
        g = this._shaderSets[at.ShaderNames_MultPremultipliedAlpha + _], r = this.gl.DST_COLOR, i = this.gl.ONE_MINUS_SRC_ALPHA, s = this.gl.ZERO, n = this.gl.ONE;
        break;
      default:
        {
          let C = a.getOldOffscreen() == null ? t.getModelRenderTarget(0) : a.getOldOffscreen();
          Mt.copyBuffer(this.gl, C, t.getModelRenderTarget(1));
          let P = this._blendShaderSetMap.get(this._colorBlendMap.get(d) + this._alphaBlendMap.get(c));
          g = this._shaderSets[P + _], r = this.gl.ONE, i = this.gl.ZERO, s = this.gl.ONE, n = this.gl.ZERO, u = !1;
        }
        break;
    }
    this.gl.useProgram(g.shaderProgram), Mt.copyBuffer(this.gl, a, t.getModelRenderTarget(2)), this.gl.activeTexture(this.gl.TEXTURE0);
    let p = t.getModelRenderTarget(2).getColorBuffer();
    this.gl.bindTexture(this.gl.TEXTURE_2D, p), this.gl.uniform1i(g.samplerTexture0Location, 0);
    let f = new U();
    f.loadIdentity(), this.gl.uniformMatrix4fv(g.uniformMatrixLocation, !1, f.getArray());
    let m = e.getOffscreenOpacity(o), v = new E(m, m, m, m), b = e.getOverrideMultiplyAndScreenColor(), y = b.getOffscreenMultiplyColor(o), S = b.getOffscreenScreenColor(o);
    if (this.gl.uniform4f(g.uniformBaseColorLocation, v.r, v.g, v.b, v.a), this.gl.uniform4f(g.uniformMultiplyColorLocation, y.r, y.g, y.b, y.a), this.gl.uniform4f(g.uniformScreenColorLocation, S.r, S.g, S.b, S.a), this.gl.activeTexture(this.gl.TEXTURE2), !u) {
      let C = t.getModelRenderTarget(1).getColorBuffer();
      this.gl.bindTexture(this.gl.TEXTURE_2D, C), this.gl.uniform1i(g.samplerFrameBufferTextureLocation, 2);
    }
    if (l) {
      this.gl.activeTexture(this.gl.TEXTURE1);
      let C = t.getOffscreenMaskBuffer(t.getClippingContextBufferForOffscreen()._bufferIndex).getColorBuffer();
      this.gl.bindTexture(this.gl.TEXTURE_2D, C), this.gl.uniform1i(g.samplerTexture1Location, 1), this.gl.uniformMatrix4fv(g.uniformClipMatrixLocation, !1, t.getClippingContextBufferForOffscreen()._matrixForDraw.getArray());
      let P = t.getClippingContextBufferForOffscreen()._layoutChannelIndex, w = t.getClippingContextBufferForOffscreen().getClippingManager().getChannelFlagAsColor(P);
      this.gl.uniform4f(g.uniformChannelFlagLocation, w.r, w.g, w.b, w.a), e.isBlendModeEnabled() && this.gl.uniform1f(g.uniformInvertMaskFlagLocation, +!!h);
    }
    t._bufferData.vertex || (t._bufferData.vertex = this.gl.createBuffer()), this.gl.bindBuffer(this.gl.ARRAY_BUFFER, t._bufferData.vertex), this.gl.bufferData(this.gl.ARRAY_BUFFER, ca, this.gl.STATIC_DRAW), this.gl.enableVertexAttribArray(g.attributePositionLocation), this.gl.vertexAttribPointer(g.attributePositionLocation, 2, this.gl.FLOAT, !1, Float32Array.BYTES_PER_ELEMENT * 2, 0), t._bufferData.uv || (t._bufferData.uv = this.gl.createBuffer()), this.gl.bindBuffer(this.gl.ARRAY_BUFFER, t._bufferData.uv), this.gl.bufferData(this.gl.ARRAY_BUFFER, os, this.gl.STATIC_DRAW), this.gl.enableVertexAttribArray(g.attributeTexCoordLocation), this.gl.vertexAttribPointer(g.attributeTexCoordLocation, 2, this.gl.FLOAT, !1, Float32Array.BYTES_PER_ELEMENT * 2, 0), this.gl.blendFuncSeparate(r, i, s, n);
  }
  setupShaderProgramForMask(t, e, a) {
    if (t.isPremultipliedAlpha() || T("NoPremultipliedAlpha is not allowed"), this._shaderSets.length == 0 && this.generateShaders(), this._isShaderLoaded == 0) {
      Y("Shader program is not initialized.");
      return;
    }
    let r = this._shaderSets[at.ShaderNames_SetupMask];
    this.gl.useProgram(r.shaderProgram), t._bufferData.vertex ?? (t._bufferData.vertex = this.gl.createBuffer()), this.gl.bindBuffer(this.gl.ARRAY_BUFFER, t._bufferData.vertex);
    let i = e.getDrawableVertices(a);
    this.gl.bufferData(this.gl.ARRAY_BUFFER, i, this.gl.DYNAMIC_DRAW), this.gl.enableVertexAttribArray(r.attributePositionLocation), this.gl.vertexAttribPointer(r.attributePositionLocation, 2, this.gl.FLOAT, !1, 0, 0), t._bufferData.uv ?? (t._bufferData.uv = this.gl.createBuffer()), this.gl.bindBuffer(this.gl.ARRAY_BUFFER, t._bufferData.uv);
    let s = e.getDrawableTextureIndex(a), n = t.getBindedTextures().get(s);
    this.gl.activeTexture(this.gl.TEXTURE0), this.gl.bindTexture(this.gl.TEXTURE_2D, n), this.gl.uniform1i(r.samplerTexture0Location, 0), t._bufferData.uv ?? (t._bufferData.uv = this.gl.createBuffer()), this.gl.bindBuffer(this.gl.ARRAY_BUFFER, t._bufferData.uv);
    let o = e.getDrawableVertexUvs(a);
    this.gl.bufferData(this.gl.ARRAY_BUFFER, o, this.gl.DYNAMIC_DRAW), this.gl.enableVertexAttribArray(r.attributeTexCoordLocation), this.gl.vertexAttribPointer(r.attributeTexCoordLocation, 2, this.gl.FLOAT, !1, 0, 0);
    let l = t.getClippingContextBufferForMask()._layoutChannelIndex, h = t.getClippingContextBufferForMask().getClippingManager().getChannelFlagAsColor(l);
    this.gl.uniform4f(r.uniformChannelFlagLocation, h.r, h.g, h.b, h.a), this.gl.uniformMatrix4fv(r.uniformClipMatrixLocation, !1, t.getClippingContextBufferForMask()._matrixForMask.getArray());
    let _ = t.getClippingContextBufferForMask()._layoutBounds;
    this.gl.uniform4f(r.uniformBaseColorLocation, _.x * 2 - 1, _.y * 2 - 1, _.getRight() * 2 - 1, _.getBottom() * 2 - 1);
    let g = this.gl.ZERO, u = this.gl.ONE_MINUS_SRC_COLOR, d = this.gl.ZERO, c = this.gl.ONE_MINUS_SRC_ALPHA;
    t._bufferData.index ?? (t._bufferData.index = this.gl.createBuffer());
    let p = e.getDrawableVertexIndices(a);
    this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER, t._bufferData.index), this.gl.bufferData(this.gl.ELEMENT_ARRAY_BUFFER, p, this.gl.DYNAMIC_DRAW), this.gl.blendFuncSeparate(g, u, d, c);
  }
  setupShaderProgramForOffscreenRenderTarget(t) {
    if (this._shaderSets.length == 0 && this.generateShaders(), this._isShaderLoaded == 0) {
      Y("Shader program is not initialized.");
      return;
    }
    let e = t.getModelColor();
    e.r *= e.a, e.g *= e.a, e.b *= e.a, this.copyTexture(t, e);
  }
  copyTexture(t, e) {
    let a = this.gl.ONE, r = this.gl.ONE_MINUS_SRC_ALPHA, i = this.gl.ONE, s = this.gl.ONE_MINUS_SRC_ALPHA, n = this._shaderSets[10];
    this.gl.useProgram(n.shaderProgram), this.gl.uniform4f(n.uniformBaseColorLocation, e.r, e.g, e.b, e.a), this.gl.activeTexture(this.gl.TEXTURE0);
    let o = t.getModelRenderTarget(0).getColorBuffer();
    this.gl.bindTexture(this.gl.TEXTURE_2D, o), this.gl.uniform1i(n.samplerTexture0Location, 0), t._bufferData.vertex || (t._bufferData.vertex = this.gl.createBuffer()), this.gl.bindBuffer(this.gl.ARRAY_BUFFER, t._bufferData.vertex), this.gl.bufferData(this.gl.ARRAY_BUFFER, ca, this.gl.STATIC_DRAW), this.gl.enableVertexAttribArray(n.attributePositionLocation), this.gl.vertexAttribPointer(n.attributePositionLocation, 2, this.gl.FLOAT, !1, Float32Array.BYTES_PER_ELEMENT * 2, 0), t._bufferData.uv || (t._bufferData.uv = this.gl.createBuffer()), this.gl.bindBuffer(this.gl.ARRAY_BUFFER, t._bufferData.uv), this.gl.bufferData(this.gl.ARRAY_BUFFER, ns, this.gl.STATIC_DRAW), this.gl.enableVertexAttribArray(n.attributeTexCoordLocation), this.gl.vertexAttribPointer(n.attributeTexCoordLocation, 2, this.gl.FLOAT, !1, Float32Array.BYTES_PER_ELEMENT * 2, 0), this.gl.blendFuncSeparate(a, r, i, s);
  }
  releaseShaderProgram() {
    for (let t = 0; t < this._shaderSets.length; t++) this.gl.deleteProgram(this._shaderSets[t].shaderProgram), this._shaderSets[t].shaderProgram = 0, this._shaderSets[t] = void 0, this._shaderSets[t] = null;
  }
  generateShaders() {
    if (!this._isShaderLoading) {
      this._isShaderLoading = !0, this._isShaderLoaded = !1, this._shaderSets.length = this._shaderCount;
      for (let t = 0; t < this._shaderCount; t++) this._shaderSets[t] = new qa();
      this.loadShaders().then(() => {
        this.registerShader(), this.registerBlendShader(), this._isShaderLoading = !1, this._isShaderLoaded = !0;
      }).catch((t) => {
        this._isShaderLoading = !1, console.error("Failed to load shaders:", t);
      });
    }
  }
  registerShader() {
    let t = this._vertShaderSrc, e = this._vertShaderSrcMasked, a = this._vertShaderSrcSetupMask, r = this._fragShaderSrcSetupMask, i = this._fragShaderSrcPremultipliedAlpha, s = this._fragShaderSrcMaskPremultipliedAlpha, n = this._fragShaderSrcMaskInvertedPremultipliedAlpha;
    this._shaderSets[0].shaderProgram = this.loadShaderProgram(a, r), this._shaderSets[1].shaderProgram = this.loadShaderProgram(t, i), this._shaderSets[2].shaderProgram = this.loadShaderProgram(e, s), this._shaderSets[3].shaderProgram = this.loadShaderProgram(e, n), this._shaderSets[4].shaderProgram = this._shaderSets[1].shaderProgram, this._shaderSets[5].shaderProgram = this._shaderSets[2].shaderProgram, this._shaderSets[6].shaderProgram = this._shaderSets[3].shaderProgram, this._shaderSets[7].shaderProgram = this._shaderSets[1].shaderProgram, this._shaderSets[8].shaderProgram = this._shaderSets[2].shaderProgram, this._shaderSets[9].shaderProgram = this._shaderSets[3].shaderProgram, this._shaderSets[0].attributePositionLocation = this.gl.getAttribLocation(this._shaderSets[0].shaderProgram, "a_position"), this._shaderSets[0].attributeTexCoordLocation = this.gl.getAttribLocation(this._shaderSets[0].shaderProgram, "a_texCoord"), this._shaderSets[0].samplerTexture0Location = this.gl.getUniformLocation(this._shaderSets[0].shaderProgram, "s_texture0"), this._shaderSets[0].uniformClipMatrixLocation = this.gl.getUniformLocation(this._shaderSets[0].shaderProgram, "u_clipMatrix"), this._shaderSets[0].uniformChannelFlagLocation = this.gl.getUniformLocation(this._shaderSets[0].shaderProgram, "u_channelFlag"), this._shaderSets[0].uniformBaseColorLocation = this.gl.getUniformLocation(this._shaderSets[0].shaderProgram, "u_baseColor"), this._shaderSets[1].attributePositionLocation = this.gl.getAttribLocation(this._shaderSets[1].shaderProgram, "a_position"), this._shaderSets[1].attributeTexCoordLocation = this.gl.getAttribLocation(this._shaderSets[1].shaderProgram, "a_texCoord"), this._shaderSets[1].samplerTexture0Location = this.gl.getUniformLocation(this._shaderSets[1].shaderProgram, "s_texture0"), this._shaderSets[1].uniformMatrixLocation = this.gl.getUniformLocation(this._shaderSets[1].shaderProgram, "u_matrix"), this._shaderSets[1].uniformBaseColorLocation = this.gl.getUniformLocation(this._shaderSets[1].shaderProgram, "u_baseColor"), this._shaderSets[1].uniformMultiplyColorLocation = this.gl.getUniformLocation(this._shaderSets[1].shaderProgram, "u_multiplyColor"), this._shaderSets[1].uniformScreenColorLocation = this.gl.getUniformLocation(this._shaderSets[1].shaderProgram, "u_screenColor"), this._shaderSets[2].attributePositionLocation = this.gl.getAttribLocation(this._shaderSets[2].shaderProgram, "a_position"), this._shaderSets[2].attributeTexCoordLocation = this.gl.getAttribLocation(this._shaderSets[2].shaderProgram, "a_texCoord"), this._shaderSets[2].samplerTexture0Location = this.gl.getUniformLocation(this._shaderSets[2].shaderProgram, "s_texture0"), this._shaderSets[2].samplerTexture1Location = this.gl.getUniformLocation(this._shaderSets[2].shaderProgram, "s_texture1"), this._shaderSets[2].uniformMatrixLocation = this.gl.getUniformLocation(this._shaderSets[2].shaderProgram, "u_matrix"), this._shaderSets[2].uniformClipMatrixLocation = this.gl.getUniformLocation(this._shaderSets[2].shaderProgram, "u_clipMatrix"), this._shaderSets[2].uniformChannelFlagLocation = this.gl.getUniformLocation(this._shaderSets[2].shaderProgram, "u_channelFlag"), this._shaderSets[2].uniformBaseColorLocation = this.gl.getUniformLocation(this._shaderSets[2].shaderProgram, "u_baseColor"), this._shaderSets[2].uniformMultiplyColorLocation = this.gl.getUniformLocation(this._shaderSets[2].shaderProgram, "u_multiplyColor"), this._shaderSets[2].uniformScreenColorLocation = this.gl.getUniformLocation(this._shaderSets[2].shaderProgram, "u_screenColor"), this._shaderSets[3].attributePositionLocation = this.gl.getAttribLocation(this._shaderSets[3].shaderProgram, "a_position"), this._shaderSets[3].attributeTexCoordLocation = this.gl.getAttribLocation(this._shaderSets[3].shaderProgram, "a_texCoord"), this._shaderSets[3].samplerTexture0Location = this.gl.getUniformLocation(this._shaderSets[3].shaderProgram, "s_texture0"), this._shaderSets[3].samplerTexture1Location = this.gl.getUniformLocation(this._shaderSets[3].shaderProgram, "s_texture1"), this._shaderSets[3].uniformMatrixLocation = this.gl.getUniformLocation(this._shaderSets[3].shaderProgram, "u_matrix"), this._shaderSets[3].uniformClipMatrixLocation = this.gl.getUniformLocation(this._shaderSets[3].shaderProgram, "u_clipMatrix"), this._shaderSets[3].uniformChannelFlagLocation = this.gl.getUniformLocation(this._shaderSets[3].shaderProgram, "u_channelFlag"), this._shaderSets[3].uniformBaseColorLocation = this.gl.getUniformLocation(this._shaderSets[3].shaderProgram, "u_baseColor"), this._shaderSets[3].uniformMultiplyColorLocation = this.gl.getUniformLocation(this._shaderSets[3].shaderProgram, "u_multiplyColor"), this._shaderSets[3].uniformScreenColorLocation = this.gl.getUniformLocation(this._shaderSets[3].shaderProgram, "u_screenColor"), this._shaderSets[4].attributePositionLocation = this.gl.getAttribLocation(this._shaderSets[4].shaderProgram, "a_position"), this._shaderSets[4].attributeTexCoordLocation = this.gl.getAttribLocation(this._shaderSets[4].shaderProgram, "a_texCoord"), this._shaderSets[4].samplerTexture0Location = this.gl.getUniformLocation(this._shaderSets[4].shaderProgram, "s_texture0"), this._shaderSets[4].uniformMatrixLocation = this.gl.getUniformLocation(this._shaderSets[4].shaderProgram, "u_matrix"), this._shaderSets[4].uniformBaseColorLocation = this.gl.getUniformLocation(this._shaderSets[4].shaderProgram, "u_baseColor"), this._shaderSets[4].uniformMultiplyColorLocation = this.gl.getUniformLocation(this._shaderSets[4].shaderProgram, "u_multiplyColor"), this._shaderSets[4].uniformScreenColorLocation = this.gl.getUniformLocation(this._shaderSets[4].shaderProgram, "u_screenColor"), this._shaderSets[5].attributePositionLocation = this.gl.getAttribLocation(this._shaderSets[5].shaderProgram, "a_position"), this._shaderSets[5].attributeTexCoordLocation = this.gl.getAttribLocation(this._shaderSets[5].shaderProgram, "a_texCoord"), this._shaderSets[5].samplerTexture0Location = this.gl.getUniformLocation(this._shaderSets[5].shaderProgram, "s_texture0"), this._shaderSets[5].samplerTexture1Location = this.gl.getUniformLocation(this._shaderSets[5].shaderProgram, "s_texture1"), this._shaderSets[5].uniformMatrixLocation = this.gl.getUniformLocation(this._shaderSets[5].shaderProgram, "u_matrix"), this._shaderSets[5].uniformClipMatrixLocation = this.gl.getUniformLocation(this._shaderSets[5].shaderProgram, "u_clipMatrix"), this._shaderSets[5].uniformChannelFlagLocation = this.gl.getUniformLocation(this._shaderSets[5].shaderProgram, "u_channelFlag"), this._shaderSets[5].uniformBaseColorLocation = this.gl.getUniformLocation(this._shaderSets[5].shaderProgram, "u_baseColor"), this._shaderSets[5].uniformMultiplyColorLocation = this.gl.getUniformLocation(this._shaderSets[5].shaderProgram, "u_multiplyColor"), this._shaderSets[5].uniformScreenColorLocation = this.gl.getUniformLocation(this._shaderSets[5].shaderProgram, "u_screenColor"), this._shaderSets[6].attributePositionLocation = this.gl.getAttribLocation(this._shaderSets[6].shaderProgram, "a_position"), this._shaderSets[6].attributeTexCoordLocation = this.gl.getAttribLocation(this._shaderSets[6].shaderProgram, "a_texCoord"), this._shaderSets[6].samplerTexture0Location = this.gl.getUniformLocation(this._shaderSets[6].shaderProgram, "s_texture0"), this._shaderSets[6].samplerTexture1Location = this.gl.getUniformLocation(this._shaderSets[6].shaderProgram, "s_texture1"), this._shaderSets[6].uniformMatrixLocation = this.gl.getUniformLocation(this._shaderSets[6].shaderProgram, "u_matrix"), this._shaderSets[6].uniformClipMatrixLocation = this.gl.getUniformLocation(this._shaderSets[6].shaderProgram, "u_clipMatrix"), this._shaderSets[6].uniformChannelFlagLocation = this.gl.getUniformLocation(this._shaderSets[6].shaderProgram, "u_channelFlag"), this._shaderSets[6].uniformBaseColorLocation = this.gl.getUniformLocation(this._shaderSets[6].shaderProgram, "u_baseColor"), this._shaderSets[6].uniformMultiplyColorLocation = this.gl.getUniformLocation(this._shaderSets[6].shaderProgram, "u_multiplyColor"), this._shaderSets[6].uniformScreenColorLocation = this.gl.getUniformLocation(this._shaderSets[6].shaderProgram, "u_screenColor"), this._shaderSets[7].attributePositionLocation = this.gl.getAttribLocation(this._shaderSets[7].shaderProgram, "a_position"), this._shaderSets[7].attributeTexCoordLocation = this.gl.getAttribLocation(this._shaderSets[7].shaderProgram, "a_texCoord"), this._shaderSets[7].samplerTexture0Location = this.gl.getUniformLocation(this._shaderSets[7].shaderProgram, "s_texture0"), this._shaderSets[7].uniformMatrixLocation = this.gl.getUniformLocation(this._shaderSets[7].shaderProgram, "u_matrix"), this._shaderSets[7].uniformBaseColorLocation = this.gl.getUniformLocation(this._shaderSets[7].shaderProgram, "u_baseColor"), this._shaderSets[7].uniformMultiplyColorLocation = this.gl.getUniformLocation(this._shaderSets[7].shaderProgram, "u_multiplyColor"), this._shaderSets[7].uniformScreenColorLocation = this.gl.getUniformLocation(this._shaderSets[7].shaderProgram, "u_screenColor"), this._shaderSets[8].attributePositionLocation = this.gl.getAttribLocation(this._shaderSets[8].shaderProgram, "a_position"), this._shaderSets[8].attributeTexCoordLocation = this.gl.getAttribLocation(this._shaderSets[8].shaderProgram, "a_texCoord"), this._shaderSets[8].samplerTexture0Location = this.gl.getUniformLocation(this._shaderSets[8].shaderProgram, "s_texture0"), this._shaderSets[8].samplerTexture1Location = this.gl.getUniformLocation(this._shaderSets[8].shaderProgram, "s_texture1"), this._shaderSets[8].uniformMatrixLocation = this.gl.getUniformLocation(this._shaderSets[8].shaderProgram, "u_matrix"), this._shaderSets[8].uniformClipMatrixLocation = this.gl.getUniformLocation(this._shaderSets[8].shaderProgram, "u_clipMatrix"), this._shaderSets[8].uniformChannelFlagLocation = this.gl.getUniformLocation(this._shaderSets[8].shaderProgram, "u_channelFlag"), this._shaderSets[8].uniformBaseColorLocation = this.gl.getUniformLocation(this._shaderSets[8].shaderProgram, "u_baseColor"), this._shaderSets[8].uniformMultiplyColorLocation = this.gl.getUniformLocation(this._shaderSets[8].shaderProgram, "u_multiplyColor"), this._shaderSets[8].uniformScreenColorLocation = this.gl.getUniformLocation(this._shaderSets[8].shaderProgram, "u_screenColor"), this._shaderSets[9].attributePositionLocation = this.gl.getAttribLocation(this._shaderSets[9].shaderProgram, "a_position"), this._shaderSets[9].attributeTexCoordLocation = this.gl.getAttribLocation(this._shaderSets[9].shaderProgram, "a_texCoord"), this._shaderSets[9].samplerTexture0Location = this.gl.getUniformLocation(this._shaderSets[9].shaderProgram, "s_texture0"), this._shaderSets[9].samplerTexture1Location = this.gl.getUniformLocation(this._shaderSets[9].shaderProgram, "s_texture1"), this._shaderSets[9].uniformMatrixLocation = this.gl.getUniformLocation(this._shaderSets[9].shaderProgram, "u_matrix"), this._shaderSets[9].uniformClipMatrixLocation = this.gl.getUniformLocation(this._shaderSets[9].shaderProgram, "u_clipMatrix"), this._shaderSets[9].uniformChannelFlagLocation = this.gl.getUniformLocation(this._shaderSets[9].shaderProgram, "u_channelFlag"), this._shaderSets[9].uniformBaseColorLocation = this.gl.getUniformLocation(this._shaderSets[9].shaderProgram, "u_baseColor"), this._shaderSets[9].uniformMultiplyColorLocation = this.gl.getUniformLocation(this._shaderSets[9].shaderProgram, "u_multiplyColor"), this._shaderSets[9].uniformScreenColorLocation = this.gl.getUniformLocation(this._shaderSets[9].shaderProgram, "u_screenColor");
  }
  registerBlendShader() {
    let t = this._vertShaderSrcCopy, e = this._fragShaderSrcCopy, a = this._shaderSets[10];
    a.shaderProgram = this.loadShaderProgram(t, e), a.attributeTexCoordLocation = this.gl.getAttribLocation(a.shaderProgram, "a_texCoord"), a.attributePositionLocation = this.gl.getAttribLocation(a.shaderProgram, "a_position"), a.uniformBaseColorLocation = this.gl.getUniformLocation(a.shaderProgram, "u_baseColor");
    let r = 11;
    for (let i = 0; i < this._colorBlendValues.length; i++) {
      if (this._colorBlendValues[i] == H.ColorBlend_None || this._colorBlendValues[i] == H.ColorBlend_AddCompatible || this._colorBlendValues[i] == H.ColorBlend_MultiplyCompatible) continue;
      let s = this._colorBlendValues[i], n = `#define COLOR_BLEND_${this._colorBlendMap.get(s).toUpperCase()}
`;
      for (let o = 0; o < this._alphaBlendValues.length; o++) {
        if (this._alphaBlendValues[o] == j.AlphaBlend_None || this._colorBlendValues[i] == H.ColorBlend_Normal && this._alphaBlendValues[o] == j.AlphaBlend_Over) continue;
        let l = this._alphaBlendValues[o], h = `#define ALPHA_BLEND_${this._alphaBlendMap.get(l).toUpperCase()}
`;
        this.generateBlendShader(n, h, r), this._blendShaderSetMap.set(this._colorBlendMap.get(this._colorBlendValues[i]) + this._alphaBlendMap.get(this._alphaBlendValues[o]), r), r += At.ShaderType_Count;
      }
    }
  }
  generateBlendShader(t, e, a) {
    for (let r = 0; r < At.ShaderType_Count; r++) {
      let i = "", s = `precision mediump float;
`, n = a + r;
      if (s += t, s += e, s += this._fragShaderSrcColorBlend, s += this._fragShaderSrcAlphaBlend, r == At.ShaderType_Masked || r == At.ShaderType_MaskedInverted) {
        let o = `#define CLIPPING_MASK
`;
        i += o, s += o;
      }
      i += this._vertShaderSrcBlend, s += this._fragShaderSrcBlend, this._shaderSets[n].shaderProgram = this.loadShaderProgram(i, s), this._shaderSets[n].attributePositionLocation = this.gl.getAttribLocation(this._shaderSets[n].shaderProgram, "a_position"), this._shaderSets[n].attributeTexCoordLocation = this.gl.getAttribLocation(this._shaderSets[n].shaderProgram, "a_texCoord"), this._shaderSets[n].samplerTexture0Location = this.gl.getUniformLocation(this._shaderSets[n].shaderProgram, "s_texture0"), this._shaderSets[n].uniformMatrixLocation = this.gl.getUniformLocation(this._shaderSets[n].shaderProgram, "u_matrix"), this._shaderSets[n].uniformBaseColorLocation = this.gl.getUniformLocation(this._shaderSets[n].shaderProgram, "u_baseColor"), this._shaderSets[n].uniformMultiplyColorLocation = this.gl.getUniformLocation(this._shaderSets[n].shaderProgram, "u_multiplyColor"), this._shaderSets[n].uniformScreenColorLocation = this.gl.getUniformLocation(this._shaderSets[n].shaderProgram, "u_screenColor"), this._shaderSets[n].samplerFrameBufferTextureLocation = this.gl.getUniformLocation(this._shaderSets[n].shaderProgram, "s_blendTexture"), (r == At.ShaderType_Masked || r == At.ShaderType_MaskedInverted) && (this._shaderSets[n].samplerTexture1Location = this.gl.getUniformLocation(this._shaderSets[n].shaderProgram, "s_texture1"), this._shaderSets[n].uniformClipMatrixLocation = this.gl.getUniformLocation(this._shaderSets[n].shaderProgram, "u_clipMatrix"), this._shaderSets[n].uniformChannelFlagLocation = this.gl.getUniformLocation(this._shaderSets[n].shaderProgram, "u_channelFlag"), this._shaderSets[n].uniformInvertMaskFlagLocation = this.gl.getUniformLocation(this._shaderSets[n].shaderProgram, "u_invertClippingMask"));
    }
  }
  loadShaderProgram(t, e) {
    let a = this.gl.createProgram(), r = this.compileShaderSource(this.gl.VERTEX_SHADER, t);
    if (!r) return T("Vertex shader compile error!"), 0;
    let i = this.compileShaderSource(this.gl.FRAGMENT_SHADER, e);
    return i ? (this.gl.attachShader(a, r), this.gl.attachShader(a, i), this.gl.linkProgram(a), this.gl.getProgramParameter(a, this.gl.LINK_STATUS) ? (this.gl.deleteShader(r), this.gl.deleteShader(i), a) : (T("Failed to link program: {0}", a), this.gl.deleteShader(r), r = 0, this.gl.deleteShader(i), i = 0, a &&= (this.gl.deleteProgram(a), 0), 0)) : (T("Fragment shader compile error!"), 0);
  }
  compileShaderSource(t, e) {
    let a = e, r = this.gl.createShader(t);
    return this.gl.shaderSource(r, a), this.gl.compileShader(r), r || T("Shader compile log: {0} ", this.gl.getShaderInfoLog(r)), this.gl.getShaderParameter(r, this.gl.COMPILE_STATUS) ? r : (T("Shader compile log: {0} ", this.gl.getShaderInfoLog(r)), this.gl.deleteShader(r), null);
  }
  setGl(t) {
    this.gl = t;
  }
  setShaderPath(t) {
    this._shaderPath = t;
  }
  getShaderPath() {
    return this._shaderPath;
  }
}, et = class Wa {
  static getInstance() {
    return ae ??= new Wa(), ae;
  }
  static deleteInstance() {
    ae &&= (ae.release(), null);
  }
  constructor() {
    this._shaderMap = /* @__PURE__ */ new Map();
  }
  release() {
    for (let e of this._shaderMap) e[1].release();
    this._shaderMap.clear();
  }
  getShader(e) {
    return this._shaderMap.get(e);
  }
  setGlContext(e) {
    if (!this._shaderMap.has(e)) {
      let a = new Qe();
      a.setGl(e), this._shaderMap.set(e, a);
    }
  }
}, qa = class {
}, at = /* @__PURE__ */ function(t) {
  return t[t.ShaderNames_SetupMask = 0] = "ShaderNames_SetupMask", t[t.ShaderNames_NormalPremultipliedAlpha = 1] = "ShaderNames_NormalPremultipliedAlpha", t[t.ShaderNames_NormalMaskedPremultipliedAlpha = 2] = "ShaderNames_NormalMaskedPremultipliedAlpha", t[t.ShaderNames_NomralMaskedInvertedPremultipliedAlpha = 3] = "ShaderNames_NomralMaskedInvertedPremultipliedAlpha", t[t.ShaderNames_AddPremultipliedAlpha = 4] = "ShaderNames_AddPremultipliedAlpha", t[t.ShaderNames_AddMaskedPremultipliedAlpha = 5] = "ShaderNames_AddMaskedPremultipliedAlpha", t[t.ShaderNames_AddMaskedPremultipliedAlphaInverted = 6] = "ShaderNames_AddMaskedPremultipliedAlphaInverted", t[t.ShaderNames_MultPremultipliedAlpha = 7] = "ShaderNames_MultPremultipliedAlpha", t[t.ShaderNames_MultMaskedPremultipliedAlpha = 8] = "ShaderNames_MultMaskedPremultipliedAlpha", t[t.ShaderNames_MultMaskedPremultipliedAlphaInverted = 9] = "ShaderNames_MultMaskedPremultipliedAlphaInverted", t[t.ShaderNames_ShaderCount = 10] = "ShaderNames_ShaderCount", t;
}({}), At = /* @__PURE__ */ function(t) {
  return t[t.ShaderType_Normal = 0] = "ShaderType_Normal", t[t.ShaderType_Masked = 1] = "ShaderType_Masked", t[t.ShaderType_MaskedInverted = 2] = "ShaderType_MaskedInverted", t[t.ShaderType_Count = 3] = "ShaderType_Count", t;
}({}), ls;
(function(t) {
  t.CubismShaderSet = qa, t.CubismShader_WebGL = Qe, t.CubismShaderManager_WebGL = et, t.ShaderNames = at;
})(ls ||= {});
var vt, D = (vt = class {
  static loadFileAsBytes(e, a) {
    fetch(e).then((r) => r.arrayBuffer()).then((r) => a(r, r.byteLength));
  }
  static getDeltaTime() {
    return this.deltaTime;
  }
  static updateTime() {
    this.currentFrame = Date.now(), this.deltaTime = (this.currentFrame - this.lastFrame) / 1e3, this.lastFrame = this.currentFrame;
  }
  static printMessage(e) {
    console.log(e);
  }
}, vt.lastUpdate = Date.now(), vt.currentFrame = 0, vt.lastFrame = 0, vt.deltaTime = 0, vt), hs = 0.01, Za = "../../Resources/", $e = "../../Framework/Shaders/WebGL/", us = "back_class_normal.png", _s = "icon_gear.png", Ne = [
  "Haru",
  "Hiyori",
  "Mark",
  "Natori",
  "Rice",
  "Mao",
  "Wanko",
  "Ren"
], ds = Ne.length, gs = "Idle", cs = "TapBody", fs = "Head", ps = "Body", ms = Rt.LogLevel_Verbose, bs = class {
  constructor() {
    this._gl = null, this._gl = null;
  }
  initialize(t) {
    return this._gl = t.getContext("webgl2"), this._gl ? !0 : (alert("Cannot initialize WebGL. This browser does not support."), this._gl = null, !1);
  }
  release() {
  }
  getGl() {
    return this._gl;
  }
};
function z(t, e, a = null, r = null) {
  if (t.length < e)
    if (r) for (let i = t.length; i < e; i++) typeof a == "function" ? t[i] = JSON.parse(JSON.stringify(new a())) : t[i] = a;
    else for (let i = t.length; i < e; i++) t[i] = a;
  else t.length = e;
}
var vs = class {
  constructor(t = null, e = null, a = !1) {
    this.colorBuffer = t, this.renderTexture = e, this.inUse = a;
  }
  clear() {
    this.colorBuffer = null, this.renderTexture = null, this.inUse = !1;
  }
  getColorBuffer() {
    return this.colorBuffer;
  }
  getRenderTexture() {
    return this.renderTexture;
  }
}, ys = class {
  constructor(t) {
    this.gl = t, this.offscreenRenderTargetContainers = [], this.previousActiveRenderTextureMaxCount = 0, this.currentActiveRenderTextureCount = 0, this.hasResetThisFrame = !1, this.width = 0, this.height = 0;
  }
  release() {
    if (this.offscreenRenderTargetContainers != null) {
      for (let t = 0; t < this.offscreenRenderTargetContainers.length; ++t) {
        let e = this.offscreenRenderTargetContainers[t];
        this.gl.deleteTexture(e.colorBuffer), this.gl.deleteFramebuffer(e.renderTexture);
      }
      this.offscreenRenderTargetContainers.length = 0, this.offscreenRenderTargetContainers = null;
    }
  }
}, ge = class Fe {
  constructor() {
    this._contextManagers = /* @__PURE__ */ new Map();
  }
  release() {
    if (this._contextManagers != null) {
      for (let e of this._contextManagers.values()) e.release();
      this._contextManagers.clear(), this._contextManagers = null;
    }
    Fe._instance = null;
  }
  static getInstance() {
    return this._instance ??= new Fe(), this._instance;
  }
  getContextManager(e) {
    return this._contextManagers.has(e) || this._contextManagers.set(e, new ys(e)), this._contextManagers.get(e);
  }
  removeContext(e) {
    this._contextManagers.has(e) && (this._contextManagers.get(e).release(), this._contextManagers.delete(e));
  }
  initialize(e, a, r) {
    let i = this.getContextManager(e);
    if (i.offscreenRenderTargetContainers != null) {
      for (let s = 0; s < i.offscreenRenderTargetContainers.length; ++s) {
        let n = i.offscreenRenderTargetContainers[s];
        i.gl.deleteTexture(n.colorBuffer), i.gl.deleteFramebuffer(n.renderTexture), n.clear();
      }
      i.offscreenRenderTargetContainers.length = 0;
    } else i.offscreenRenderTargetContainers = [];
    i.width = a, i.height = r, i.previousActiveRenderTextureMaxCount = 0, i.currentActiveRenderTextureCount = 0, i.hasResetThisFrame = !1;
  }
  beginFrameProcess(e) {
    let a = this.getContextManager(e);
    a.hasResetThisFrame ||= (a.previousActiveRenderTextureMaxCount = 0, !0);
  }
  endFrameProcess(e) {
    let a = this.getContextManager(e);
    a.hasResetThisFrame = !1;
  }
  getContainerSize(e) {
    let a = this.getContextManager(e);
    return a.offscreenRenderTargetContainers == null ? 0 : a.offscreenRenderTargetContainers.length;
  }
  getOffscreenRenderTargetContainers(e, a, r, i) {
    let s = this.getContextManager(e);
    return (s.width != a || s.height != r || s.offscreenRenderTargetContainers == null) && this.initialize(e, a, r), this.updateRenderTargetContainerCount(e), this.getUnusedOffscreenRenderTargetContainer(e) ?? this.createOffscreenRenderTargetContainer(e, a, r, i);
  }
  getUsingRenderTextureState(e, a) {
    let r = this.getContextManager(e);
    for (let i = 0; i < r.offscreenRenderTargetContainers.length; ++i) if (r.offscreenRenderTargetContainers[i].renderTexture == a) return r.offscreenRenderTargetContainers[i].inUse;
    return !0;
  }
  startUsingRenderTexture(e, a) {
    let r = this.getContextManager(e);
    for (let i = 0; i < r.offscreenRenderTargetContainers.length; ++i) if (r.offscreenRenderTargetContainers[i].renderTexture == a) {
      r.offscreenRenderTargetContainers[i].inUse = !0, this.updateRenderTargetContainerCount(e);
      break;
    }
  }
  stopUsingRenderTexture(e, a) {
    let r = this.getContextManager(e);
    for (let i = 0; i < r.offscreenRenderTargetContainers.length; ++i) if (r.offscreenRenderTargetContainers[i].renderTexture == a) {
      r.offscreenRenderTargetContainers[i].inUse = !1, r.currentActiveRenderTextureCount--, r.currentActiveRenderTextureCount < 0 && (r.currentActiveRenderTextureCount = 0);
      break;
    }
  }
  stopUsingAllRenderTextures(e) {
    let a = this.getContextManager(e);
    for (let r = 0; r < a.offscreenRenderTargetContainers.length; ++r) a.offscreenRenderTargetContainers[r].inUse = !1;
    a.currentActiveRenderTextureCount = 0;
  }
  releaseStaleRenderTextures(e) {
    let a = this.getContextManager(e), r = a.offscreenRenderTargetContainers.length;
    if (a.hasResetThisFrame || r === 0) return;
    let i = 0, s = a.previousActiveRenderTextureMaxCount;
    for (let n = r; a.previousActiveRenderTextureMaxCount < n; --n) {
      let o = n - 1;
      if (a.offscreenRenderTargetContainers[o].inUse) {
        let h = !1;
        for (; i < a.previousActiveRenderTextureMaxCount; ++i) if (!a.offscreenRenderTargetContainers[i].inUse) {
          let _ = a.offscreenRenderTargetContainers[i];
          a.offscreenRenderTargetContainers[i] = a.offscreenRenderTargetContainers[o], a.offscreenRenderTargetContainers[i].inUse = !0, a.offscreenRenderTargetContainers[o] = _, a.offscreenRenderTargetContainers[o].inUse = !1, h = !0;
          break;
        }
        if (!h) {
          s = n;
          break;
        }
      }
      let l = a.offscreenRenderTargetContainers[o];
      a.gl.bindTexture(a.gl.TEXTURE_2D, null), a.gl.deleteTexture(l.colorBuffer), a.gl.bindFramebuffer(a.gl.FRAMEBUFFER, null), a.gl.deleteFramebuffer(l.renderTexture), l.clear();
    }
    z(a.offscreenRenderTargetContainers, s);
  }
  getPreviousActiveRenderTextureCount(e) {
    return this.getContextManager(e).previousActiveRenderTextureMaxCount;
  }
  getCurrentActiveRenderTextureCount(e) {
    return this.getContextManager(e).currentActiveRenderTextureCount;
  }
  updateRenderTargetContainerCount(e) {
    let a = this.getContextManager(e);
    ++a.currentActiveRenderTextureCount, a.previousActiveRenderTextureMaxCount = a.currentActiveRenderTextureCount > a.previousActiveRenderTextureMaxCount ? a.currentActiveRenderTextureCount : a.previousActiveRenderTextureMaxCount;
  }
  getUnusedOffscreenRenderTargetContainer(e) {
    let a = this.getContextManager(e);
    for (let r = 0; r < a.offscreenRenderTargetContainers.length; ++r) {
      let i = a.offscreenRenderTargetContainers[r];
      if (i.inUse == 0) return i.inUse = !0, i;
    }
    return null;
  }
  createOffscreenRenderTargetContainer(e, a, r, i) {
    let s = new Mt();
    if (!s.createRenderTarget(e, a, r, i)) return T("Failed to create offscreen render texture."), null;
    let n = new vs(s.getColorBuffer(), s.getRenderTexture(), !0);
    return this.getContextManager(e).offscreenRenderTargetContainers.push(n), n;
  }
}, M = Object.freeze({
  HitAreaPrefix: "HitArea",
  HitAreaHead: "Head",
  HitAreaBody: "Body",
  PartsIdCore: "Parts01Core",
  PartsArmPrefix: "Parts01Arm_",
  PartsArmLPrefix: "Parts01ArmL_",
  PartsArmRPrefix: "Parts01ArmR_",
  ParamAngleX: "ParamAngleX",
  ParamAngleY: "ParamAngleY",
  ParamAngleZ: "ParamAngleZ",
  ParamEyeLOpen: "ParamEyeLOpen",
  ParamEyeLSmile: "ParamEyeLSmile",
  ParamEyeROpen: "ParamEyeROpen",
  ParamEyeRSmile: "ParamEyeRSmile",
  ParamEyeBallX: "ParamEyeBallX",
  ParamEyeBallY: "ParamEyeBallY",
  ParamEyeBallForm: "ParamEyeBallForm",
  ParamBrowLY: "ParamBrowLY",
  ParamBrowRY: "ParamBrowRY",
  ParamBrowLX: "ParamBrowLX",
  ParamBrowRX: "ParamBrowRX",
  ParamBrowLAngle: "ParamBrowLAngle",
  ParamBrowRAngle: "ParamBrowRAngle",
  ParamBrowLForm: "ParamBrowLForm",
  ParamBrowRForm: "ParamBrowRForm",
  ParamMouthForm: "ParamMouthForm",
  ParamMouthOpenY: "ParamMouthOpenY",
  ParamCheek: "ParamCheek",
  ParamBodyAngleX: "ParamBodyAngleX",
  ParamBodyAngleY: "ParamBodyAngleY",
  ParamBodyAngleZ: "ParamBodyAngleZ",
  ParamBreath: "ParamBreath",
  ParamArmLA: "ParamArmLA",
  ParamArmRA: "ParamArmRA",
  ParamArmLB: "ParamArmLB",
  ParamArmRB: "ParamArmRB",
  ParamHandL: "ParamHandL",
  ParamHandR: "ParamHandR",
  ParamHairFront: "ParamHairFront",
  ParamHairSide: "ParamHairSide",
  ParamHairBack: "ParamHairBack",
  ParamHairFluffy: "ParamHairFluffy",
  ParamShoulderY: "ParamShoulderY",
  ParamBustX: "ParamBustX",
  ParamBustY: "ParamBustY",
  ParamBaseX: "ParamBaseX",
  ParamBaseY: "ParamBaseY",
  ParamNONE: "NONE:"
}), Ss;
(function(t) {
  t.HitAreaBody = M.HitAreaBody, t.HitAreaHead = M.HitAreaHead, t.HitAreaPrefix = M.HitAreaPrefix, t.ParamAngleX = M.ParamAngleX, t.ParamAngleY = M.ParamAngleY, t.ParamAngleZ = M.ParamAngleZ, t.ParamArmLA = M.ParamArmLA, t.ParamArmLB = M.ParamArmLB, t.ParamArmRA = M.ParamArmRA, t.ParamArmRB = M.ParamArmRB, t.ParamBaseX = M.ParamBaseX, t.ParamBaseY = M.ParamBaseY, t.ParamBodyAngleX = M.ParamBodyAngleX, t.ParamBodyAngleY = M.ParamBodyAngleY, t.ParamBodyAngleZ = M.ParamBodyAngleZ, t.ParamBreath = M.ParamBreath, t.ParamBrowLAngle = M.ParamBrowLAngle, t.ParamBrowLForm = M.ParamBrowLForm, t.ParamBrowLX = M.ParamBrowLX, t.ParamBrowLY = M.ParamBrowLY, t.ParamBrowRAngle = M.ParamBrowRAngle, t.ParamBrowRForm = M.ParamBrowRForm, t.ParamBrowRX = M.ParamBrowRX, t.ParamBrowRY = M.ParamBrowRY, t.ParamBustX = M.ParamBustX, t.ParamBustY = M.ParamBustY, t.ParamCheek = M.ParamCheek, t.ParamEyeBallForm = M.ParamEyeBallForm, t.ParamEyeBallX = M.ParamEyeBallX, t.ParamEyeBallY = M.ParamEyeBallY, t.ParamEyeLOpen = M.ParamEyeLOpen, t.ParamEyeLSmile = M.ParamEyeLSmile, t.ParamEyeROpen = M.ParamEyeROpen, t.ParamEyeRSmile = M.ParamEyeRSmile, t.ParamHairBack = M.ParamHairBack, t.ParamHairFluffy = M.ParamHairFluffy, t.ParamHairFront = M.ParamHairFront, t.ParamHairSide = M.ParamHairSide, t.ParamHandL = M.ParamHandL, t.ParamHandR = M.ParamHandR, t.ParamMouthForm = M.ParamMouthForm, t.ParamMouthOpenY = M.ParamMouthOpenY, t.ParamNONE = M.ParamNONE, t.ParamShoulderY = M.ParamShoulderY, t.PartsArmLPrefix = M.PartsArmLPrefix, t.PartsArmPrefix = M.PartsArmPrefix, t.PartsArmRPrefix = M.PartsArmRPrefix, t.PartsIdCore = M.PartsIdCore;
})(Ss ||= {});
var tr = class {
}, Ms;
(function(t) {
  t.ICubismModelSetting = tr;
})(Ms ||= {});
var x = /* @__PURE__ */ function(t) {
  return t[t.FrequestNode_Groups = 0] = "FrequestNode_Groups", t[t.FrequestNode_Moc = 1] = "FrequestNode_Moc", t[t.FrequestNode_Motions = 2] = "FrequestNode_Motions", t[t.FrequestNode_Expressions = 3] = "FrequestNode_Expressions", t[t.FrequestNode_Textures = 4] = "FrequestNode_Textures", t[t.FrequestNode_Physics = 5] = "FrequestNode_Physics", t[t.FrequestNode_Pose = 6] = "FrequestNode_Pose", t[t.FrequestNode_HitAreas = 7] = "FrequestNode_HitAreas", t;
}({}), er = class extends tr {
  constructor(t, e) {
    super(), this.version = "Version", this.fileReferences = "FileReferences", this.groups = "Groups", this.layout = "Layout", this.hitAreas = "HitAreas", this.moc = "Moc", this.textures = "Textures", this.physics = "Physics", this.pose = "Pose", this.expressions = "Expressions", this.motions = "Motions", this.userData = "UserData", this.name = "Name", this.filePath = "File", this.id = "Id", this.ids = "Ids", this.target = "Target", this.idle = "Idle", this.tapBody = "TapBody", this.pinchIn = "PinchIn", this.pinchOut = "PinchOut", this.shake = "Shake", this.flickHead = "FlickHead", this.parameter = "Parameter", this.soundPath = "Sound", this.fadeInTime = "FadeInTime", this.fadeOutTime = "FadeOutTime", this.centerX = "CenterX", this.centerY = "CenterY", this.x = "X", this.y = "Y", this.width = "Width", this.height = "Height", this.lipSync = "LipSync", this.eyeBlink = "EyeBlink", this.initParameter = "init_param", this.initPartsVisible = "init_parts_visible", this.val = "val", this._json = Z.create(t, e), this.getJson() && (this._jsonValue = [
      this.getJson().getRoot().getValueByString(this.groups),
      this.getJson().getRoot().getValueByString(this.fileReferences).getValueByString(this.moc),
      this.getJson().getRoot().getValueByString(this.fileReferences).getValueByString(this.motions),
      this.getJson().getRoot().getValueByString(this.fileReferences).getValueByString(this.expressions),
      this.getJson().getRoot().getValueByString(this.fileReferences).getValueByString(this.textures),
      this.getJson().getRoot().getValueByString(this.fileReferences).getValueByString(this.physics),
      this.getJson().getRoot().getValueByString(this.fileReferences).getValueByString(this.pose),
      this.getJson().getRoot().getValueByString(this.hitAreas)
    ]);
  }
  release() {
    Z.delete(this._json), this._jsonValue = null;
  }
  getJson() {
    return this._json;
  }
  getModelFileName() {
    return this.isExistModelFile() ? this._jsonValue[x.FrequestNode_Moc].getRawString() : "";
  }
  getTextureCount() {
    return this.isExistTextureFiles() ? this._jsonValue[x.FrequestNode_Textures].getSize() : 0;
  }
  getTextureDirectory() {
    let t = this._jsonValue[x.FrequestNode_Textures].getValueByIndex(0).getRawString().split("/"), e = t.length - 1, a = "";
    for (let r = 0; r < e; r++) a += t[r], r < e - 1 && (a += "/");
    return a;
  }
  getTextureFileName(t) {
    return this._jsonValue[x.FrequestNode_Textures].getValueByIndex(t).getRawString();
  }
  getHitAreasCount() {
    return this.isExistHitAreas() ? this._jsonValue[x.FrequestNode_HitAreas].getSize() : 0;
  }
  getHitAreaId(t) {
    return L.getIdManager().getId(this._jsonValue[x.FrequestNode_HitAreas].getValueByIndex(t).getValueByString(this.id).getRawString());
  }
  getHitAreaName(t) {
    return this._jsonValue[x.FrequestNode_HitAreas].getValueByIndex(t).getValueByString(this.name).getRawString();
  }
  getPhysicsFileName() {
    return this.isExistPhysicsFile() ? this._jsonValue[x.FrequestNode_Physics].getRawString() : "";
  }
  getPoseFileName() {
    return this.isExistPoseFile() ? this._jsonValue[x.FrequestNode_Pose].getRawString() : "";
  }
  getExpressionCount() {
    return this.isExistExpressionFile() ? this._jsonValue[x.FrequestNode_Expressions].getSize() : 0;
  }
  getExpressionName(t) {
    return this._jsonValue[x.FrequestNode_Expressions].getValueByIndex(t).getValueByString(this.name).getRawString();
  }
  getExpressionFileName(t) {
    return this._jsonValue[x.FrequestNode_Expressions].getValueByIndex(t).getValueByString(this.filePath).getRawString();
  }
  getMotionGroupCount() {
    return this.isExistMotionGroups() ? this._jsonValue[x.FrequestNode_Motions].getKeys().length : 0;
  }
  getMotionGroupName(t) {
    return this.isExistMotionGroups() ? this._jsonValue[x.FrequestNode_Motions].getKeys()[t] : null;
  }
  getMotionCount(t) {
    return this.isExistMotionGroupName(t) ? this._jsonValue[x.FrequestNode_Motions].getValueByString(t).getSize() : 0;
  }
  getMotionFileName(t, e) {
    return this.isExistMotionGroupName(t) ? this._jsonValue[x.FrequestNode_Motions].getValueByString(t).getValueByIndex(e).getValueByString(this.filePath).getRawString() : "";
  }
  getMotionSoundFileName(t, e) {
    return this.isExistMotionSoundFile(t, e) ? this._jsonValue[x.FrequestNode_Motions].getValueByString(t).getValueByIndex(e).getValueByString(this.soundPath).getRawString() : "";
  }
  getMotionFadeInTimeValue(t, e) {
    return this.isExistMotionFadeIn(t, e) ? this._jsonValue[x.FrequestNode_Motions].getValueByString(t).getValueByIndex(e).getValueByString(this.fadeInTime).toFloat() : -1;
  }
  getMotionFadeOutTimeValue(t, e) {
    return this.isExistMotionFadeOut(t, e) ? this._jsonValue[x.FrequestNode_Motions].getValueByString(t).getValueByIndex(e).getValueByString(this.fadeOutTime).toFloat() : -1;
  }
  getUserDataFile() {
    return this.isExistUserDataFile() ? this.getJson().getRoot().getValueByString(this.fileReferences).getValueByString(this.userData).getRawString() : "";
  }
  getLayoutMap(t) {
    let e = this.getJson().getRoot().getValueByString(this.layout).getMap();
    if (e == null) return !1;
    let a = !1;
    for (let r of e) t.set(r[0], r[1].toFloat()), a = !0;
    return a;
  }
  getEyeBlinkParameterCount() {
    if (!this.isExistEyeBlinkParameters()) return 0;
    let t = 0;
    for (let e = 0; e < this._jsonValue[x.FrequestNode_Groups].getSize(); e++) {
      let a = this._jsonValue[x.FrequestNode_Groups].getValueByIndex(e);
      if (!(a.isNull() || a.isError()) && a.getValueByString(this.name).getRawString() == this.eyeBlink) {
        t = a.getValueByString(this.ids).getVector().length;
        break;
      }
    }
    return t;
  }
  getEyeBlinkParameterId(t) {
    if (!this.isExistEyeBlinkParameters()) return null;
    for (let e = 0; e < this._jsonValue[x.FrequestNode_Groups].getSize(); e++) {
      let a = this._jsonValue[x.FrequestNode_Groups].getValueByIndex(e);
      if (!(a.isNull() || a.isError()) && a.getValueByString(this.name).getRawString() == this.eyeBlink) return L.getIdManager().getId(a.getValueByString(this.ids).getValueByIndex(t).getRawString());
    }
    return null;
  }
  getLipSyncParameterCount() {
    if (!this.isExistLipSyncParameters()) return 0;
    let t = 0;
    for (let e = 0; e < this._jsonValue[x.FrequestNode_Groups].getSize(); e++) {
      let a = this._jsonValue[x.FrequestNode_Groups].getValueByIndex(e);
      if (!(a.isNull() || a.isError()) && a.getValueByString(this.name).getRawString() == this.lipSync) {
        t = a.getValueByString(this.ids).getVector().length;
        break;
      }
    }
    return t;
  }
  getLipSyncParameterId(t) {
    if (!this.isExistLipSyncParameters()) return null;
    for (let e = 0; e < this._jsonValue[x.FrequestNode_Groups].getSize(); e++) {
      let a = this._jsonValue[x.FrequestNode_Groups].getValueByIndex(e);
      if (!(a.isNull() || a.isError()) && a.getValueByString(this.name).getRawString() == this.lipSync) return L.getIdManager().getId(a.getValueByString(this.ids).getValueByIndex(t).getRawString());
    }
    return null;
  }
  isExistModelFile() {
    let t = this._jsonValue[x.FrequestNode_Moc];
    return !t.isNull() && !t.isError();
  }
  isExistTextureFiles() {
    let t = this._jsonValue[x.FrequestNode_Textures];
    return !t.isNull() && !t.isError();
  }
  isExistHitAreas() {
    let t = this._jsonValue[x.FrequestNode_HitAreas];
    return !t.isNull() && !t.isError();
  }
  isExistPhysicsFile() {
    let t = this._jsonValue[x.FrequestNode_Physics];
    return !t.isNull() && !t.isError();
  }
  isExistPoseFile() {
    let t = this._jsonValue[x.FrequestNode_Pose];
    return !t.isNull() && !t.isError();
  }
  isExistExpressionFile() {
    let t = this._jsonValue[x.FrequestNode_Expressions];
    return !t.isNull() && !t.isError();
  }
  isExistMotionGroups() {
    let t = this._jsonValue[x.FrequestNode_Motions];
    return !t.isNull() && !t.isError();
  }
  isExistMotionGroupName(t) {
    let e = this._jsonValue[x.FrequestNode_Motions].getValueByString(t);
    return !e.isNull() && !e.isError();
  }
  isExistMotionSoundFile(t, e) {
    let a = this._jsonValue[x.FrequestNode_Motions].getValueByString(t).getValueByIndex(e).getValueByString(this.soundPath);
    return !a.isNull() && !a.isError();
  }
  isExistMotionFadeIn(t, e) {
    let a = this._jsonValue[x.FrequestNode_Motions].getValueByString(t).getValueByIndex(e).getValueByString(this.fadeInTime);
    return !a.isNull() && !a.isError();
  }
  isExistMotionFadeOut(t, e) {
    let a = this._jsonValue[x.FrequestNode_Motions].getValueByString(t).getValueByIndex(e).getValueByString(this.fadeOutTime);
    return !a.isNull() && !a.isError();
  }
  isExistUserDataFile() {
    let t = this.getJson().getRoot().getValueByString(this.fileReferences).getValueByString(this.userData);
    return !t.isNull() && !t.isError();
  }
  isExistEyeBlinkParameters() {
    if (this._jsonValue[x.FrequestNode_Groups].isNull() || this._jsonValue[x.FrequestNode_Groups].isError()) return !1;
    for (let t = 0; t < this._jsonValue[x.FrequestNode_Groups].getSize(); ++t) if (this._jsonValue[x.FrequestNode_Groups].getValueByIndex(t).getValueByString(this.name).getRawString() == this.eyeBlink) return !0;
    return !1;
  }
  isExistLipSyncParameters() {
    if (this._jsonValue[x.FrequestNode_Groups].isNull() || this._jsonValue[x.FrequestNode_Groups].isError()) return !1;
    for (let t = 0; t < this._jsonValue[x.FrequestNode_Groups].getSize(); ++t) if (this._jsonValue[x.FrequestNode_Groups].getValueByIndex(t).getValueByString(this.name).getRawString() == this.lipSync) return !0;
    return !1;
  }
}, $s;
(function(t) {
  t.CubismModelSettingJson = er, t.FrequestNode = x;
})($s ||= {});
var We = class ar {
  static create() {
    return new ar();
  }
  static delete(e) {
  }
  setParameters(e) {
    this._breathParameters = e;
  }
  getParameters() {
    return this._breathParameters;
  }
  updateParameters(e, a) {
    this._currentTime += a;
    let r = this._currentTime * 2 * Math.PI;
    for (let i = 0; i < this._breathParameters.length; ++i) {
      let s = this._breathParameters[i];
      e.addParameterValueById(s.parameterId, s.offset + s.peak * Math.sin(r / s.cycle), s.weight);
    }
  }
  constructor() {
    this._currentTime = 0;
  }
}, Ut = class {
  constructor(t, e, a, r, i) {
    this.parameterId = t ?? null, this.offset = e ?? 0, this.peak = a ?? 0, this.cycle = r ?? 0, this.weight = i ?? 0;
  }
}, Cs;
(function(t) {
  t.BreathParameterData = Ut, t.CubismBreath = We;
})(Cs ||= {});
var Ve = class rr {
  static create() {
    return new rr();
  }
  static delete(e) {
  }
  setParameters(e) {
    this._lookParameters = e;
  }
  getParameters() {
    return this._lookParameters;
  }
  updateParameters(e, a, r) {
    for (let i = 0; i < this._lookParameters.length; ++i) {
      let s = this._lookParameters[i];
      e.addParameterValueById(s.parameterId, s.factorX * a + s.factorY * r + s.factorXY * a * r);
    }
  }
  constructor() {
    this._lookParameters = [];
  }
}, wt = class {
  constructor(t, e, a, r) {
    this.parameterId = t ?? null, this.factorX = e ?? 0, this.factorY = a ?? 0, this.factorXY = r ?? 0;
  }
}, Is;
(function(t) {
  t.LookParameterData = wt, t.CubismLook = Ve;
})(Is ||= {});
var $t, qe = ($t = class {
  static create(e = null) {
    return new $t(e);
  }
  static delete(e) {
  }
  setBlinkingInterval(e) {
    this._blinkingIntervalSeconds = e;
  }
  setBlinkingSetting(e, a, r) {
    this._closingSeconds = e, this._closedSeconds = a, this._openingSeconds = r;
  }
  setParameterIds(e) {
    this._parameterIds = e;
  }
  getParameterIds() {
    return this._parameterIds;
  }
  updateParameters(e, a) {
    this._userTimeSeconds += a;
    let r, i = 0;
    switch (this._blinkingState) {
      case rt.EyeState_Closing:
        i = (this._userTimeSeconds - this._stateStartTimeSeconds) / this._closingSeconds, i >= 1 && (i = 1, this._blinkingState = rt.EyeState_Closed, this._stateStartTimeSeconds = this._userTimeSeconds), r = 1 - i;
        break;
      case rt.EyeState_Closed:
        i = (this._userTimeSeconds - this._stateStartTimeSeconds) / this._closedSeconds, i >= 1 && (this._blinkingState = rt.EyeState_Opening, this._stateStartTimeSeconds = this._userTimeSeconds), r = 0;
        break;
      case rt.EyeState_Opening:
        i = (this._userTimeSeconds - this._stateStartTimeSeconds) / this._openingSeconds, i >= 1 && (i = 1, this._blinkingState = rt.EyeState_Interval, this._nextBlinkingTime = this.determinNextBlinkingTiming()), r = i;
        break;
      case rt.EyeState_Interval:
        this._nextBlinkingTime < this._userTimeSeconds && (this._blinkingState = rt.EyeState_Closing, this._stateStartTimeSeconds = this._userTimeSeconds), r = 1;
        break;
      case rt.EyeState_First:
      default:
        this._blinkingState = rt.EyeState_Interval, this._nextBlinkingTime = this.determinNextBlinkingTiming(), r = 1;
    }
    $t.CloseIfZero || (r = -r);
    for (let s = 0; s < this._parameterIds.length; ++s) e.setParameterValueById(this._parameterIds[s], r);
  }
  constructor(e) {
    if (this._blinkingState = rt.EyeState_First, this._nextBlinkingTime = 0, this._stateStartTimeSeconds = 0, this._blinkingIntervalSeconds = 4, this._closingSeconds = 0.1, this._closedSeconds = 0.05, this._openingSeconds = 0.15, this._userTimeSeconds = 0, this._parameterIds = [], e != null) {
      this._parameterIds.length = e.getEyeBlinkParameterCount();
      for (let a = 0; a < e.getEyeBlinkParameterCount(); ++a) this._parameterIds[a] = e.getEyeBlinkParameterId(a);
    }
  }
  determinNextBlinkingTiming() {
    let e = Math.random();
    return this._userTimeSeconds + e * (2 * this._blinkingIntervalSeconds - 1);
  }
}, $t.CloseIfZero = !0, $t), rt = /* @__PURE__ */ function(t) {
  return t[t.EyeState_First = 0] = "EyeState_First", t[t.EyeState_Interval = 1] = "EyeState_Interval", t[t.EyeState_Closing = 2] = "EyeState_Closing", t[t.EyeState_Closed = 3] = "EyeState_Closed", t[t.EyeState_Opening = 4] = "EyeState_Opening", t;
}({}), xs;
(function(t) {
  t.CubismEyeBlink = qe, t.EyeState = rt;
})(xs ||= {});
var Ps = 1e-3, Ce = 0.5, fa = "FadeInTime", pa = "Link", Ts = "Groups", Ls = "Id", Ue = class ir {
  static create(e, a) {
    let r = Z.create(e, a);
    if (!r) return null;
    let i = new ir(), s = r.getRoot();
    s.getValueByString(fa).isNull() || (i._fadeTimeSeconds = s.getValueByString(fa).toFloat(Ce), i._fadeTimeSeconds < 0 && (i._fadeTimeSeconds = Ce));
    let n = s.getValueByString(Ts), o = n.getSize();
    i._partGroupCounts.length = o;
    for (let l = 0; l < o; ++l) {
      let h = n.getValueByIndex(l), _ = h.getSize(), g = 0;
      for (let u = 0; u < _; ++u) {
        let d = h.getValueByIndex(u), c = new ke();
        if (c.partId = L.getIdManager().getId(d.getValueByString(Ls).getRawString()), !d.getValueByString(pa).isNull()) {
          let p = d.getValueByString(pa), f = p.getSize();
          for (let m = 0; m < f; ++m) {
            let v = new ke();
            v.partId = L.getIdManager().getId(p.getValueByIndex(m).getString()), c.link.push(v);
          }
        }
        i._partGroups.push(c.clone()), ++g;
      }
      i._partGroupCounts[l] = g;
    }
    return Z.delete(r), i;
  }
  static delete(e) {
  }
  updateParameters(e, a) {
    e != this._lastModel && this.reset(e), this._lastModel = e, a < 0 && (a = 0);
    let r = 0;
    for (let i = 0; i < this._partGroupCounts.length; i++) {
      let s = this._partGroupCounts[i];
      this.doFade(e, a, r, s), r += s;
    }
    this.copyPartOpacities(e);
  }
  reset(e) {
    let a = 0;
    for (let r = 0; r < this._partGroupCounts.length; ++r) {
      let i = this._partGroupCounts[r];
      for (let s = a; s < a + i; ++s) {
        this._partGroups[s].initialize(e);
        let n = this._partGroups[s].partIndex, o = this._partGroups[s].parameterIndex;
        if (!(n < 0)) {
          e.setPartOpacityByIndex(n, +(s == a)), e.setParameterValueByIndex(o, +(s == a));
          for (let l = 0; l < this._partGroups[s].link.length; ++l) this._partGroups[s].link[l].initialize(e);
        }
      }
      a += i;
    }
  }
  copyPartOpacities(e) {
    for (let a = 0; a < this._partGroups.length; ++a) {
      let r = this._partGroups[a];
      if (r.link.length == 0) continue;
      let i = this._partGroups[a].partIndex, s = e.getPartOpacityByIndex(i);
      for (let n = 0; n < r.link.length; ++n) {
        let o = r.link[n].partIndex;
        o < 0 || e.setPartOpacityByIndex(o, s);
      }
    }
  }
  doFade(e, a, r, i) {
    let s = -1, n = 1, o = 0.5, l = 0.15;
    for (let h = r; h < r + i; ++h) {
      let _ = this._partGroups[h].partIndex, g = this._partGroups[h].parameterIndex;
      if (e.getParameterValueByIndex(g) > Ps) {
        if (s >= 0) break;
        if (s = h, this._fadeTimeSeconds == 0) {
          n = 1;
          continue;
        }
        n = e.getPartOpacityByIndex(_), n += a / this._fadeTimeSeconds, n > 1 && (n = 1);
      }
    }
    s < 0 && (s = 0, n = 1);
    for (let h = r; h < r + i; ++h) {
      let _ = this._partGroups[h].partIndex;
      if (s == h) e.setPartOpacityByIndex(_, n);
      else {
        let g = e.getPartOpacityByIndex(_), u;
        u = n < o ? n * -0.5 / o + 1 : (1 - n) * o / 0.5, (1 - u) * (1 - n) > l && (u = 1 - l / (1 - n)), g > u && (g = u), e.setPartOpacityByIndex(_, g);
      }
    }
  }
  constructor() {
    this._fadeTimeSeconds = Ce, this._lastModel = null, this._partGroups = [], this._partGroupCounts = [];
  }
}, ke = class sr {
  constructor(e) {
    if (this.parameterIndex = 0, this.partIndex = 0, this.link = [], e != null) {
      this.partId = e.partId, this.link.length = e.link.length;
      for (let a = 0; a < e.link.length; a++) this.link[a] = e.link[a].clone();
    }
  }
  assignment(e) {
    this.partId = e.partId;
    let a = this.link.length;
    this.link.length += e.link.length;
    for (let r of e.link) this.link[a++] = r.clone();
    return this;
  }
  initialize(e) {
    this.parameterIndex = e.getParameterIndex(this.partId), this.partIndex = e.getPartIndex(this.partId), e.setParameterValueByIndex(this.parameterIndex, 1);
  }
  clone() {
    let e = new sr();
    e.partId = this.partId, e.parameterIndex = this.parameterIndex, e.partIndex = this.partIndex, e.link = [], e.link.length = this.link.length;
    for (let a = 0; a < this.link.length; a++) e.link[a] = this.link[a].clone();
    return e;
  }
}, ws;
(function(t) {
  t.CubismPose = Ue, t.PartData = ke;
})(ws ||= {});
var nr = class extends U {
  constructor(t, e) {
    super(), this._width = t === void 0 ? 0 : t, this._height = e === void 0 ? 0 : e, this.setHeight(2);
  }
  setWidth(t) {
    let e = t / this._width, a = e;
    this.scale(e, a);
  }
  setHeight(t) {
    let e = t / this._height, a = e;
    this.scale(e, a);
  }
  setPosition(t, e) {
    this.translate(t, e);
  }
  setCenterPosition(t, e) {
    this.centerX(t), this.centerY(e);
  }
  top(t) {
    this.setY(t);
  }
  bottom(t) {
    let e = this._height * this.getScaleY();
    this.translateY(t - e);
  }
  left(t) {
    this.setX(t);
  }
  right(t) {
    let e = this._width * this.getScaleX();
    this.translateX(t - e);
  }
  centerX(t) {
    let e = this._width * this.getScaleX();
    this.translateX(t - e / 2);
  }
  setX(t) {
    this.translateX(t);
  }
  centerY(t) {
    let e = this._height * this.getScaleY();
    this.translateY(t - e / 2);
  }
  setY(t) {
    this.translateY(t);
  }
  setupFromLayout(t) {
    for (let e of t) {
      let a = e[0], r = e[1];
      a == "width" ? this.setWidth(r) : a == "height" && this.setHeight(r);
    }
    for (let e of t) {
      let a = e[0], r = e[1];
      a == "x" ? this.setX(r) : a == "y" ? this.setY(r) : a == "center_x" ? this.centerX(r) : a == "center_y" ? this.centerY(r) : a == "top" ? this.top(r) : a == "bottom" ? this.bottom(r) : a == "left" ? this.left(r) : a == "right" && this.right(r);
    }
  }
}, Os;
(function(t) {
  t.CubismModelMatrix = nr;
})(Os ||= {});
var Ie = 30, ma = 0.01, or = class {
  constructor() {
    this._faceTargetX = 0, this._faceTargetY = 0, this._faceX = 0, this._faceY = 0, this._faceVX = 0, this._faceVY = 0, this._lastTimeSeconds = 0, this._userTimeSeconds = 0;
  }
  update(t) {
    this._userTimeSeconds += t;
    let e = 4 / Ie;
    if (this._lastTimeSeconds == 0) {
      this._lastTimeSeconds = this._userTimeSeconds;
      return;
    }
    let a = (this._userTimeSeconds - this._lastTimeSeconds) * Ie;
    this._lastTimeSeconds = this._userTimeSeconds;
    let r = 0.15 * Ie, i = a * e / r, s = this._faceTargetX - this._faceX, n = this._faceTargetY - this._faceY;
    if ($.abs(s) <= ma && $.abs(n) <= ma) return;
    let o = $.sqrt(s * s + n * n), l = e * s / o, h = e * n / o, _ = l - this._faceVX, g = h - this._faceVY, u = $.sqrt(_ * _ + g * g);
    (u < -i || u > i) && (_ *= i / u, g *= i / u), this._faceVX += _, this._faceVY += g;
    {
      let d = 0.5 * ($.sqrt(i * i + 16 * i * o - 8 * i * o) - i), c = $.sqrt(this._faceVX * this._faceVX + this._faceVY * this._faceVY);
      c > d && (this._faceVX *= d / c, this._faceVY *= d / c);
    }
    this._faceX += this._faceVX, this._faceY += this._faceVY;
  }
  getX() {
    return this._faceX;
  }
  getY() {
    return this._faceY;
  }
  set(t, e) {
    this._faceTargetX = t, this._faceTargetY = e;
  }
}, Es;
(function(t) {
  t.CubismTargetPoint = or;
})(Es ||= {});
var jt = class {
  static delete(t) {
    t.release(), t = null;
  }
  constructor() {
    this.setBeganMotionHandler = (t) => this._onBeganMotion = t, this.getBeganMotionHandler = () => this._onBeganMotion, this.setFinishedMotionHandler = (t) => this._onFinishedMotion = t, this.getFinishedMotionHandler = () => this._onFinishedMotion, this._fadeInSeconds = -1, this._fadeOutSeconds = -1, this._weight = 1, this._offsetSeconds = 0, this._isLoop = !1, this._isLoopFadeIn = !0, this._previousLoopState = this._isLoop, this._firedEventValues = [];
  }
  release() {
    this._weight = 0;
  }
  updateParameters(t, e, a) {
    if (!e.isAvailable() || e.isFinished()) return;
    this.setupMotionQueueEntry(e, a);
    let r = this.updateFadeWeight(e, a);
    this.doUpdateParameters(t, a, r, e), e.getEndTime() > 0 && e.getEndTime() < a && e.setIsFinished(!0);
  }
  setupMotionQueueEntry(t, e) {
    t == null || t.isStarted() || t.isAvailable() && (t.setIsStarted(!0), t.setStartTime(e - this._offsetSeconds), t.setFadeInStartTime(e), t.getEndTime() < 0 && this.adjustEndTime(t), t._motion._onBeganMotion && t._motion._onBeganMotion(t._motion));
  }
  updateFadeWeight(t, e) {
    t ?? Xe.print(Rt.LogLevel_Error, "motionQueueEntry is null.");
    let a = this._weight, r = this._fadeInSeconds == 0 ? 1 : $.getEasingSine((e - t.getFadeInStartTime()) / this._fadeInSeconds), i = this._fadeOutSeconds == 0 || t.getEndTime() < 0 ? 1 : $.getEasingSine((t.getEndTime() - e) / this._fadeOutSeconds);
    return a = a * r * i, t.setState(e, a), G(0 <= a && a <= 1), a;
  }
  setFadeInTime(t) {
    this._fadeInSeconds = t;
  }
  setFadeOutTime(t) {
    this._fadeOutSeconds = t;
  }
  getFadeOutTime() {
    return this._fadeOutSeconds;
  }
  getFadeInTime() {
    return this._fadeInSeconds;
  }
  setWeight(t) {
    this._weight = t;
  }
  getWeight() {
    return this._weight;
  }
  getDuration() {
    return -1;
  }
  getLoopDuration() {
    return -1;
  }
  setOffsetTime(t) {
    this._offsetSeconds = t;
  }
  setLoop(t) {
    this._isLoop = t;
  }
  getLoop() {
    return this._isLoop;
  }
  setLoopFadeIn(t) {
    this._isLoopFadeIn = t;
  }
  getLoopFadeIn() {
    return this._isLoopFadeIn;
  }
  getFiredEvent(t, e) {
    return this._firedEventValues;
  }
  isExistModelOpacity() {
    return !1;
  }
  getModelOpacityIndex() {
    return -1;
  }
  getModelOpacityId(t) {
    return null;
  }
  getModelOpacityValue() {
    return 1;
  }
  adjustEndTime(t) {
    let e = this.getDuration(), a = e <= 0 ? -1 : t.getStartTime() + e;
    t.setEndTime(a);
  }
}, Rs;
(function(t) {
  t.ACubismMotion = jt;
})(Rs ||= {});
var Bs = "FadeInTime", Ds = "FadeOutTime", ba = "Parameters", Hs = "Id", As = "Value", re = "Blend", Ns = "Add", Fs = "Multiply", Vs = "Overwrite", va = 1, J, Jt = (J = class extends jt {
  static create(e, a) {
    let r = new J();
    return r.parse(e, a), r;
  }
  doUpdateParameters(e, a, r, i) {
    for (let s = 0; s < this._parameters.length; ++s) {
      let n = this._parameters[s];
      switch (n.blendType) {
        case ot.Additive:
          e.addParameterValueById(n.parameterId, n.value, r);
          break;
        case ot.Multiply:
          e.multiplyParameterValueById(n.parameterId, n.value, r);
          break;
        case ot.Overwrite:
          e.setParameterValueById(n.parameterId, n.value, r);
      }
    }
  }
  calculateExpressionParameters(e, a, r, i, s, n) {
    if (r != null && i != null && r.isAvailable()) for (let o = 0; o < i.length; ++o) {
      let l = i[o];
      if (l.parameterId == null) continue;
      let h = l.overwriteValue = e.getParameterValueById(l.parameterId), _ = this.getExpressionParameters(), g = -1;
      for (let f = 0; f < _.length; ++f) if (l.parameterId == _[f].parameterId) {
        g = f;
        break;
      }
      if (g < 0) {
        s == 0 ? (l.additiveValue = J.DefaultAdditiveValue, l.multiplyValue = J.DefaultMultiplyValue, l.overwriteValue = h) : (l.additiveValue = this.calculateValue(l.additiveValue, J.DefaultAdditiveValue, n), l.multiplyValue = this.calculateValue(l.multiplyValue, J.DefaultMultiplyValue, n), l.overwriteValue = this.calculateValue(l.overwriteValue, h, n));
        continue;
      }
      let u = _[g].value, d, c, p;
      switch (_[g].blendType) {
        case ot.Additive:
          d = u, c = J.DefaultMultiplyValue, p = h;
          break;
        case ot.Multiply:
          d = J.DefaultAdditiveValue, c = u, p = h;
          break;
        case ot.Overwrite:
          d = J.DefaultAdditiveValue, c = J.DefaultMultiplyValue, p = u;
          break;
        default:
          return;
      }
      s == 0 ? (l.additiveValue = d, l.multiplyValue = c, l.overwriteValue = p) : (l.additiveValue = l.additiveValue * (1 - n) + d * n, l.multiplyValue = l.multiplyValue * (1 - n) + c * n, l.overwriteValue = l.overwriteValue * (1 - n) + p * n);
    }
  }
  getExpressionParameters() {
    return this._parameters;
  }
  parse(e, a) {
    let r = Z.create(e, a);
    if (!r) return;
    let i = r.getRoot();
    this.setFadeInTime(i.getValueByString(Bs).toFloat(va)), this.setFadeOutTime(i.getValueByString(Ds).toFloat(va));
    let s = i.getValueByString(ba).getSize(), n = this._parameters.length;
    this._parameters.length += s;
    for (let o = 0; o < s; ++o) {
      let l = i.getValueByString(ba).getValueByIndex(o), h = L.getIdManager().getId(l.getValueByString(Hs).getRawString()), _ = l.getValueByString(As).toFloat(), g;
      g = l.getValueByString(re).isNull() || l.getValueByString(re).getString() == Ns ? ot.Additive : l.getValueByString(re).getString() == Fs ? ot.Multiply : l.getValueByString(re).getString() == Vs ? ot.Overwrite : ot.Additive;
      let u = new lr();
      u.parameterId = h, u.blendType = g, u.value = _, this._parameters[n++] = u;
    }
    Z.delete(r);
  }
  calculateValue(e, a, r) {
    return e * (1 - r) + a * r;
  }
  constructor() {
    super(), this._parameters = [];
  }
}, J.DefaultAdditiveValue = 0, J.DefaultMultiplyValue = 1, J), ot = /* @__PURE__ */ function(t) {
  return t[t.Additive = 0] = "Additive", t[t.Multiply = 1] = "Multiply", t[t.Overwrite = 2] = "Overwrite", t;
}({}), lr = class {
}, Us;
(function(t) {
  t.CubismExpressionMotion = Jt, t.ExpressionBlendType = ot, t.ExpressionParameter = lr;
})(Us ||= {});
var hr = class {
  constructor() {
    this._autoDelete = !1, this._motion = null, this._available = !0, this._finished = !1, this._started = !1, this._startTimeSeconds = -1, this._fadeInStartTimeSeconds = 0, this._endTimeSeconds = -1, this._stateTimeSeconds = 0, this._stateWeight = 0, this._lastEventCheckSeconds = 0, this._motionQueueEntryHandle = this, this._fadeOutSeconds = 0, this._isTriggeredFadeOut = !1;
  }
  release() {
    this._autoDelete && this._motion && jt.delete(this._motion);
  }
  setFadeOut(t) {
    this._fadeOutSeconds = t, this._isTriggeredFadeOut = !0;
  }
  startFadeOut(t, e) {
    let a = e + t;
    this._isTriggeredFadeOut = !0, (this._endTimeSeconds < 0 || a < this._endTimeSeconds) && (this._endTimeSeconds = a);
  }
  isFinished() {
    return this._finished;
  }
  isStarted() {
    return this._started;
  }
  getStartTime() {
    return this._startTimeSeconds;
  }
  getFadeInStartTime() {
    return this._fadeInStartTimeSeconds;
  }
  getEndTime() {
    return this._endTimeSeconds;
  }
  setStartTime(t) {
    this._startTimeSeconds = t;
  }
  setFadeInStartTime(t) {
    this._fadeInStartTimeSeconds = t;
  }
  setEndTime(t) {
    this._endTimeSeconds = t;
  }
  setIsFinished(t) {
    this._finished = t;
  }
  setIsStarted(t) {
    this._started = t;
  }
  isAvailable() {
    return this._available;
  }
  setIsAvailable(t) {
    this._available = t;
  }
  setState(t, e) {
    this._stateTimeSeconds = t, this._stateWeight = e;
  }
  getStateTime() {
    return this._stateTimeSeconds;
  }
  getStateWeight() {
    return this._stateWeight;
  }
  getLastCheckEventSeconds() {
    return this._lastEventCheckSeconds;
  }
  setLastCheckEventSeconds(t) {
    this._lastEventCheckSeconds = t;
  }
  isTriggeredFadeOut() {
    return this._isTriggeredFadeOut;
  }
  getFadeOutSeconds() {
    return this._fadeOutSeconds;
  }
  getCubismMotion() {
    return this._motion;
  }
}, ks;
(function(t) {
  t.CubismMotionQueueEntry = hr;
})(ks ||= {});
var Ze = class {
  constructor() {
    this._userTimeSeconds = 0, this._eventCallBack = null, this._eventCustomData = null, this._motions = [];
  }
  release() {
    for (let t = 0; t < this._motions.length; ++t) this._motions[t] && (this._motions[t].release(), this._motions[t] = null);
    this._motions = null;
  }
  startMotion(t, e, a) {
    if (t == null) return -1;
    let r = null;
    for (let i = 0; i < this._motions.length; ++i) r = this._motions[i], r?.setFadeOut(r._motion.getFadeOutTime());
    return r = new hr(), r._autoDelete = e, r._motion = t, this._motions.push(r), r._motionQueueEntryHandle;
  }
  isFinished() {
    for (let t = 0; t < this._motions.length; ) {
      let e = this._motions[t];
      if (e == null) {
        this._motions.splice(t, 1);
        continue;
      }
      if (e._motion == null) {
        e.release(), e = null, this._motions.splice(t, 1);
        continue;
      }
      if (e.isFinished()) t++;
      else return !1;
    }
    return !0;
  }
  isFinishedByHandle(t) {
    for (let e = 0; e < this._motions.length; e++) {
      let a = this._motions[e];
      if (a != null && a._motionQueueEntryHandle == t && !a.isFinished()) return !1;
    }
    return !0;
  }
  stopAllMotions() {
    for (let t = 0; t < this._motions.length; t++) {
      let e = this._motions[t];
      if (e == null) {
        this._motions.splice(t, 1);
        continue;
      }
      e.release(), this._motions.splice(t, 1);
    }
  }
  getCubismMotionQueueEntries() {
    return this._motions;
  }
  getCubismMotionQueueEntry(t) {
    for (let e = 0; e < this._motions.length; e++) {
      let a = this._motions[e];
      if (a != null && a._motionQueueEntryHandle == t) return a;
    }
    return null;
  }
  setEventCallback(t, e = null) {
    this._eventCallBack = t, this._eventCustomData = e;
  }
  doUpdateMotion(t, e) {
    let a = !1;
    for (let r = 0; r < this._motions.length; ) {
      let i = this._motions[r];
      if (i == null) {
        this._motions.splice(r, 1);
        continue;
      }
      let s = i._motion;
      if (s == null) {
        i.release(), i = null, this._motions.splice(r, 1);
        continue;
      }
      s.updateParameters(t, i, e), a = !0;
      let n = s.getFiredEvent(i.getLastCheckEventSeconds() - i.getStartTime(), e - i.getStartTime());
      for (let o = 0; o < n.length; ++o) this._eventCallBack(this, n[o], this._eventCustomData);
      i.setLastCheckEventSeconds(e), i.isFinished() ? (i.release(), i = null, this._motions.splice(r, 1)) : (i.isTriggeredFadeOut() && i.startFadeOut(i.getFadeOutSeconds(), e), r++);
    }
    return a;
  }
}, Js;
(function(t) {
  t.CubismMotionQueueManager = Ze, t.InvalidMotionQueueEntryHandleValue = -1;
})(Js ||= {});
var Ks = class {
}, ur = class extends Ze {
  constructor() {
    super(), this._expressionParameterValues = [], this._fadeWeights = [];
  }
  release() {
    this._expressionParameterValues &&= (this._expressionParameterValues, null), this._fadeWeights &&= (this._fadeWeights, null);
  }
  getFadeWeight(t) {
    return t < 0 || this._fadeWeights.length < 1 || t >= this._fadeWeights.length ? (console.warn("Failed to get the fade weight value. The element at that index does not exist."), -1) : this._fadeWeights[t];
  }
  setFadeWeight(t, e) {
    if (t < 0 || this._fadeWeights.length < 1 || this._fadeWeights.length <= t) {
      console.warn("Failed to set the fade weight value. The element at that index does not exist.");
      return;
    }
    this._fadeWeights[t] = e;
  }
  updateMotion(t, e) {
    this._userTimeSeconds += e;
    let a = !1, r = this.getCubismMotionQueueEntries(), i = 0, s = 0;
    if (this._fadeWeights.length !== r.length) {
      let n = r.length - this._fadeWeights.length, o = this._fadeWeights.length;
      this._fadeWeights.length += n;
      for (let l = 0; l < n; l++) this._fadeWeights[o++] = 0;
    }
    for (let n = 0; n < this._motions.length; ) {
      let o = this._motions[n];
      if (o == null) {
        r.splice(n, 1);
        continue;
      }
      let l = o.getCubismMotion();
      if (l == null) {
        r.splice(n, 1);
        continue;
      }
      let h = l.getExpressionParameters();
      if (o.isAvailable()) for (let _ = 0; _ < h.length; ++_) {
        if (h[_].parameterId == null) continue;
        let g = -1;
        for (let d = 0; d < this._expressionParameterValues.length; ++d) if (this._expressionParameterValues[d].parameterId == h[_].parameterId) {
          g = d;
          break;
        }
        if (g >= 0) continue;
        let u = new Ks();
        u.parameterId = h[_].parameterId, u.additiveValue = Jt.DefaultAdditiveValue, u.multiplyValue = Jt.DefaultMultiplyValue, u.overwriteValue = t.getParameterValueById(u.parameterId), this._expressionParameterValues.push(u);
      }
      l.setupMotionQueueEntry(o, this._userTimeSeconds), this.setFadeWeight(s, l.updateFadeWeight(o, this._userTimeSeconds)), l.calculateExpressionParameters(t, this._userTimeSeconds, o, this._expressionParameterValues, s, this.getFadeWeight(s)), i += l.getFadeInTime() == 0 ? 1 : $.getEasingSine((this._userTimeSeconds - o.getFadeInStartTime()) / l.getFadeInTime()), a = !0, o.isTriggeredFadeOut() && o.startFadeOut(o.getFadeOutSeconds(), this._userTimeSeconds), ++n, ++s;
    }
    if (r.length > 1 && this.getFadeWeight(this._fadeWeights.length - 1) >= 1) for (let n = r.length - 2; n >= 0; --n)
      r[n], r.splice(n, 1), this._fadeWeights.splice(n, 1);
    i > 1 && (i = 1);
    for (let n = 0; n < this._expressionParameterValues.length; ++n) {
      let o = this._expressionParameterValues[n];
      t.setParameterValueById(o.parameterId, (o.overwriteValue + o.additiveValue) * o.multiplyValue, i), o.additiveValue = Jt.DefaultAdditiveValue, o.multiplyValue = Jt.DefaultMultiplyValue;
    }
    return a;
  }
}, Gs;
(function(t) {
  t.CubismExpressionMotionManager = ur;
})(Gs ||= {});
var lt = /* @__PURE__ */ function(t) {
  return t[t.CubismMotionCurveTarget_Model = 0] = "CubismMotionCurveTarget_Model", t[t.CubismMotionCurveTarget_Parameter = 1] = "CubismMotionCurveTarget_Parameter", t[t.CubismMotionCurveTarget_PartOpacity = 2] = "CubismMotionCurveTarget_PartOpacity", t;
}({}), F = /* @__PURE__ */ function(t) {
  return t[t.CubismMotionSegmentType_Linear = 0] = "CubismMotionSegmentType_Linear", t[t.CubismMotionSegmentType_Bezier = 1] = "CubismMotionSegmentType_Bezier", t[t.CubismMotionSegmentType_Stepped = 2] = "CubismMotionSegmentType_Stepped", t[t.CubismMotionSegmentType_InverseStepped = 3] = "CubismMotionSegmentType_InverseStepped", t;
}({}), ee = class {
  constructor() {
    this.time = 0, this.value = 0;
  }
}, _r = class {
  constructor() {
    this.evaluate = null, this.basePointIndex = 0, this.segmentType = 0;
  }
}, dr = class {
  constructor() {
    this.type = lt.CubismMotionCurveTarget_Model, this.segmentCount = 0, this.baseSegmentIndex = 0, this.fadeInTime = 0, this.fadeOutTime = 0;
  }
}, gr = class {
  constructor() {
    this.fireTime = 0;
  }
}, cr = class {
  constructor() {
    this.duration = 0, this.loop = !1, this.curveCount = 0, this.eventCount = 0, this.fps = 0, this.curves = [], this.segments = [], this.points = [], this.events = [];
  }
}, Ys;
(function(t) {
  t.CubismMotionCurve = dr, t.CubismMotionCurveTarget = lt, t.CubismMotionData = cr, t.CubismMotionEvent = gr, t.CubismMotionPoint = ee, t.CubismMotionSegment = _r, t.CubismMotionSegmentType = F;
})(Ys ||= {});
var W = "Meta", js = "Duration", Xs = "Loop", zs = "AreBeziersRestricted", Qs = "CurveCount", Ws = "Fps", qs = "TotalSegmentCount", Zs = "TotalPointCount", pt = "Curves", tn = "Target", en = "Id", ie = "FadeInTime", se = "FadeOutTime", ya = "Segments", Sa = "UserData", an = "UserDataCount", rn = "TotalUserDataSize", sn = "Time", nn = "Value", fr = class {
  constructor(t, e) {
    this._json = Z.create(t, e);
  }
  release() {
    Z.delete(this._json);
  }
  getMotionDuration() {
    return this._json.getRoot().getValueByString(W).getValueByString(js).toFloat();
  }
  isMotionLoop() {
    return this._json.getRoot().getValueByString(W).getValueByString(Xs).toBoolean();
  }
  hasConsistency() {
    let t = !0;
    if (!this._json || !this._json.getRoot()) return !1;
    let e = this._json.getRoot().getValueByString(pt).getVector().length, a = 0, r = 0;
    for (let i = 0; i < e; ++i) for (let s = 0; s < this.getMotionCurveSegmentCount(i); ) {
      switch (s == 0 && (r += 1, s += 2), this.getMotionCurveSegment(i, s)) {
        case F.CubismMotionSegmentType_Linear:
          r += 1, s += 3;
          break;
        case F.CubismMotionSegmentType_Bezier:
          r += 3, s += 7;
          break;
        case F.CubismMotionSegmentType_Stepped:
          r += 1, s += 3;
          break;
        case F.CubismMotionSegmentType_InverseStepped:
          r += 1, s += 3;
          break;
        default:
          G(0);
      }
      ++a;
    }
    return e != this.getMotionCurveCount() && (Y("The number of curves does not match the metadata."), t = !1), a != this.getMotionTotalSegmentCount() && (Y("The number of segment does not match the metadata."), t = !1), r != this.getMotionTotalPointCount() && (Y("The number of point does not match the metadata."), t = !1), t;
  }
  getEvaluationOptionFlag(t) {
    return pr.EvaluationOptionFlag_AreBeziersRistricted == t && this._json.getRoot().getValueByString(W).getValueByString(zs).toBoolean();
  }
  getMotionCurveCount() {
    return this._json.getRoot().getValueByString(W).getValueByString(Qs).toInt();
  }
  getMotionFps() {
    return this._json.getRoot().getValueByString(W).getValueByString(Ws).toFloat();
  }
  getMotionTotalSegmentCount() {
    return this._json.getRoot().getValueByString(W).getValueByString(qs).toInt();
  }
  getMotionTotalPointCount() {
    return this._json.getRoot().getValueByString(W).getValueByString(Zs).toInt();
  }
  isExistMotionFadeInTime() {
    return !this._json.getRoot().getValueByString(W).getValueByString(ie).isNull();
  }
  isExistMotionFadeOutTime() {
    return !this._json.getRoot().getValueByString(W).getValueByString(se).isNull();
  }
  getMotionFadeInTime() {
    return this._json.getRoot().getValueByString(W).getValueByString(ie).toFloat();
  }
  getMotionFadeOutTime() {
    return this._json.getRoot().getValueByString(W).getValueByString(se).toFloat();
  }
  getMotionCurveTarget(t) {
    return this._json.getRoot().getValueByString(pt).getValueByIndex(t).getValueByString(tn).getRawString();
  }
  getMotionCurveId(t) {
    return L.getIdManager().getId(this._json.getRoot().getValueByString(pt).getValueByIndex(t).getValueByString(en).getRawString());
  }
  isExistMotionCurveFadeInTime(t) {
    return !this._json.getRoot().getValueByString(pt).getValueByIndex(t).getValueByString(ie).isNull();
  }
  isExistMotionCurveFadeOutTime(t) {
    return !this._json.getRoot().getValueByString(pt).getValueByIndex(t).getValueByString(se).isNull();
  }
  getMotionCurveFadeInTime(t) {
    return this._json.getRoot().getValueByString(pt).getValueByIndex(t).getValueByString(ie).toFloat();
  }
  getMotionCurveFadeOutTime(t) {
    return this._json.getRoot().getValueByString(pt).getValueByIndex(t).getValueByString(se).toFloat();
  }
  getMotionCurveSegmentCount(t) {
    return this._json.getRoot().getValueByString(pt).getValueByIndex(t).getValueByString(ya).getVector().length;
  }
  getMotionCurveSegment(t, e) {
    return this._json.getRoot().getValueByString(pt).getValueByIndex(t).getValueByString(ya).getValueByIndex(e).toFloat();
  }
  getEventCount() {
    return this._json.getRoot().getValueByString(W).getValueByString(an).toInt();
  }
  getTotalEventValueSize() {
    return this._json.getRoot().getValueByString(W).getValueByString(rn).toInt();
  }
  getEventTime(t) {
    return this._json.getRoot().getValueByString(Sa).getValueByIndex(t).getValueByString(sn).toFloat();
  }
  getEventValue(t) {
    return this._json.getRoot().getValueByString(Sa).getValueByIndex(t).getValueByString(nn).getRawString();
  }
}, pr = /* @__PURE__ */ function(t) {
  return t[t.EvaluationOptionFlag_AreBeziersRistricted = 0] = "EvaluationOptionFlag_AreBeziersRistricted", t;
}({}), on;
(function(t) {
  t.CubismMotionJson = fr;
})(on ||= {});
var ln = "EyeBlink", hn = "LipSync", un = "Model", _n = "Parameter", dn = "PartOpacity", ne = "Opacity";
function it(t, e, a) {
  let r = new ee();
  return r.time = t.time + (e.time - t.time) * a, r.value = t.value + (e.value - t.value) * a, r;
}
function mr(t, e) {
  let a = (e - t[0].time) / (t[1].time - t[0].time);
  return a < 0 && (a = 0), t[0].value + (t[1].value - t[0].value) * a;
}
function gn(t, e) {
  let a = (e - t[0].time) / (t[3].time - t[0].time);
  a < 0 && (a = 0);
  let r = it(t[0], t[1], a), i = it(t[1], t[2], a), s = it(t[2], t[3], a);
  return it(it(r, i, a), it(i, s, a), a).value;
}
function cn(t, e) {
  let a = e, r = t[0].time, i = t[3].time, s = t[1].time, n = t[2].time, o = i - 3 * n + 3 * s - r, l = 3 * n - 6 * s + 3 * r, h = 3 * s - 3 * r, _ = r - a, g = $.cardanoAlgorithmForBezier(o, l, h, _), u = it(t[0], t[1], g), d = it(t[1], t[2], g), c = it(t[2], t[3], g);
  return it(it(u, d, g), it(d, c, g), g).value;
}
function br(t, e) {
  return t[0].value;
}
function vr(t, e) {
  return t[1].value;
}
function xe(t, e, a, r, i) {
  let s = t.curves[e], n = -1, o = s.baseSegmentIndex + s.segmentCount, l = 0;
  for (let _ = s.baseSegmentIndex; _ < o; ++_) if (l = t.segments[_].basePointIndex + (t.segments[_].segmentType == F.CubismMotionSegmentType_Bezier ? 3 : 1), t.points[l].time > a) {
    n = _;
    break;
  }
  if (n == -1) return r && a < i ? fn(t, o - 1, t.segments[s.baseSegmentIndex].basePointIndex, l, a, i) : t.points[l].value;
  let h = t.segments[n];
  return h.evaluate(t.points.slice(h.basePointIndex), a);
}
function fn(t, e, a, r, i, s) {
  let n = [new ee(), new ee()];
  {
    let o = t.points[r];
    n[0].time = o.time, n[0].value = o.value;
  }
  {
    let o = t.points[a];
    n[1].time = s, n[1].value = o.value;
  }
  switch (t.segments[e].segmentType) {
    case F.CubismMotionSegmentType_Linear:
    case F.CubismMotionSegmentType_Bezier:
    default:
      return mr(n, i);
    case F.CubismMotionSegmentType_Stepped:
      return br(n);
    case F.CubismMotionSegmentType_InverseStepped:
      return vr(n);
  }
}
var Nt = /* @__PURE__ */ function(t) {
  return t[t.MotionBehavior_V1 = 0] = "MotionBehavior_V1", t[t.MotionBehavior_V2 = 1] = "MotionBehavior_V2", t;
}({}), yr = class Sr extends jt {
  static create(e, a, r, i, s = !1) {
    let n = new Sr();
    if (n.parse(e, a, s), n._motionData) n._sourceFrameRate = n._motionData.fps, n._loopDurationSeconds = n._motionData.duration, n._onFinishedMotion = r, n._onBeganMotion = i;
    else return null;
    return n;
  }
  doUpdateParameters(e, a, r, i) {
    this._modelCurveIdEyeBlink ??= L.getIdManager().getId(ln), this._modelCurveIdLipSync ??= L.getIdManager().getId(hn), this._modelCurveIdOpacity ??= L.getIdManager().getId(ne), this._motionBehavior === Nt.MotionBehavior_V2 && this._previousLoopState !== this._isLoop && (this.adjustEndTime(i), this._previousLoopState = this._isLoop);
    let s = a - i.getStartTime();
    s < 0 && (s = 0);
    let n = Number.MAX_VALUE, o = Number.MAX_VALUE, l = 0, h = 0;
    this._eyeBlinkParameterIds.length > 64 && _a("too many eye blink targets : {0}", this._eyeBlinkParameterIds.length), this._lipSyncParameterIds.length > 64 && _a("too many lip sync targets : {0}", this._lipSyncParameterIds.length);
    let _ = this._fadeInSeconds <= 0 ? 1 : $.getEasingSine((a - i.getFadeInStartTime()) / this._fadeInSeconds), g = this._fadeOutSeconds <= 0 || i.getEndTime() < 0 ? 1 : $.getEasingSine((i.getEndTime() - a) / this._fadeOutSeconds), u, d, c, p = s, f = this._motionData.duration, m = this._motionBehavior === Nt.MotionBehavior_V2 && this._isLoop;
    if (this._isLoop) for (this._motionBehavior === Nt.MotionBehavior_V2 && (f += 1 / this._motionData.fps); p > f; ) p -= f;
    let v = this._motionData.curves;
    for (d = 0; d < this._motionData.curveCount && v[d].type == lt.CubismMotionCurveTarget_Model; ++d) u = xe(this._motionData, d, p, m, f), v[d].id == this._modelCurveIdEyeBlink ? o = u : v[d].id == this._modelCurveIdLipSync ? n = u : v[d].id == this._modelCurveIdOpacity && (this._modelOpacity = u, e.setModelOapcity(this.getModelOpacityValue()));
    for (; d < this._motionData.curveCount && v[d].type == lt.CubismMotionCurveTarget_Parameter; ++d) {
      if (c = e.getParameterIndex(v[d].id), c == -1) continue;
      let b = e.getParameterValueByIndex(c);
      if (u = xe(this._motionData, d, p, m, f), o != Number.MAX_VALUE) {
        for (let S = 0; S < this._eyeBlinkParameterIds.length && S < 64; ++S) if (this._eyeBlinkParameterIds[S] == v[d].id) {
          u *= o, h |= 1 << S;
          break;
        }
      }
      if (n != Number.MAX_VALUE) {
        for (let S = 0; S < this._lipSyncParameterIds.length && S < 64; ++S) if (this._lipSyncParameterIds[S] == v[d].id) {
          u += n, l |= 1 << S;
          break;
        }
      }
      e.isRepeat(c) && (u = e.getParameterRepeatValue(c, u));
      let y;
      if (v[d].fadeInTime < 0 && v[d].fadeOutTime < 0) y = b + (u - b) * r;
      else {
        let S, C;
        S = v[d].fadeInTime < 0 ? _ : v[d].fadeInTime == 0 ? 1 : $.getEasingSine((a - i.getFadeInStartTime()) / v[d].fadeInTime), C = v[d].fadeOutTime < 0 ? g : v[d].fadeOutTime == 0 || i.getEndTime() < 0 ? 1 : $.getEasingSine((i.getEndTime() - a) / v[d].fadeOutTime);
        let P = this._weight * S * C;
        y = b + (u - b) * P;
      }
      e.setParameterValueByIndex(c, y, 1);
    }
    if (o != Number.MAX_VALUE) for (let b = 0; b < this._eyeBlinkParameterIds.length && b < 64; ++b) {
      let y = e.getParameterValueById(this._eyeBlinkParameterIds[b]);
      if (h >> b & 1) continue;
      let S = y + (o - y) * r;
      e.setParameterValueById(this._eyeBlinkParameterIds[b], S);
    }
    if (n != Number.MAX_VALUE) for (let b = 0; b < this._lipSyncParameterIds.length && b < 64; ++b) {
      let y = e.getParameterValueById(this._lipSyncParameterIds[b]);
      if (l >> b & 1) continue;
      let S = y + (n - y) * r;
      e.setParameterValueById(this._lipSyncParameterIds[b], S);
    }
    for (; d < this._motionData.curveCount && v[d].type == lt.CubismMotionCurveTarget_PartOpacity; ++d) c = e.getParameterIndex(v[d].id), c != -1 && (u = xe(this._motionData, d, p, m, f), e.setParameterValueByIndex(c, u));
    s >= f && (this._isLoop ? this.updateForNextLoop(i, a, p) : (this._onFinishedMotion && this._onFinishedMotion(this), i.setIsFinished(!0))), this._lastWeight = r;
  }
  setMotionBehavior(e) {
    this._motionBehavior = e;
  }
  getMotionBehavior() {
    return this._motionBehavior;
  }
  getDuration() {
    return this._isLoop ? -1 : this._loopDurationSeconds;
  }
  getLoopDuration() {
    return this._loopDurationSeconds;
  }
  setParameterFadeInTime(e, a) {
    let r = this._motionData.curves;
    for (let i = 0; i < this._motionData.curveCount; ++i) if (e == r[i].id) {
      r[i].fadeInTime = a;
      return;
    }
  }
  setParameterFadeOutTime(e, a) {
    let r = this._motionData.curves;
    for (let i = 0; i < this._motionData.curveCount; ++i) if (e == r[i].id) {
      r[i].fadeOutTime = a;
      return;
    }
  }
  getParameterFadeInTime(e) {
    let a = this._motionData.curves;
    for (let r = 0; r < this._motionData.curveCount; ++r) if (e == a[r].id) return a[r].fadeInTime;
    return -1;
  }
  getParameterFadeOutTime(e) {
    let a = this._motionData.curves;
    for (let r = 0; r < this._motionData.curveCount; ++r) if (e == a[r].id) return a[r].fadeOutTime;
    return -1;
  }
  setEffectIds(e, a) {
    this._eyeBlinkParameterIds = e, this._lipSyncParameterIds = a;
  }
  constructor() {
    super(), this._motionBehavior = Nt.MotionBehavior_V2, this._sourceFrameRate = 30, this._loopDurationSeconds = -1, this._isLoop = !1, this._isLoopFadeIn = !0, this._lastWeight = 0, this._motionData = null, this._modelCurveIdEyeBlink = null, this._modelCurveIdLipSync = null, this._modelCurveIdOpacity = null, this._eyeBlinkParameterIds = null, this._lipSyncParameterIds = null, this._modelOpacity = 1, this._debugMode = !1;
  }
  release() {
    this._motionData = void 0, this._motionData = null;
  }
  updateForNextLoop(e, a, r) {
    switch (this._motionBehavior) {
      case Nt.MotionBehavior_V2:
      default:
        e.setStartTime(a - r), this._isLoopFadeIn && e.setFadeInStartTime(a - r), this._onFinishedMotion != null && this._onFinishedMotion(this);
        break;
      case Nt.MotionBehavior_V1:
        e.setStartTime(a), this._isLoopFadeIn && e.setFadeInStartTime(a);
    }
  }
  parse(e, a, r = !1) {
    let i = new fr(e, a);
    if (!i) {
      i.release(), i = void 0;
      return;
    }
    if (r && !i.hasConsistency()) {
      i.release(), T("Inconsistent motion3.json.");
      return;
    }
    this._motionData = new cr(), this._motionData.duration = i.getMotionDuration(), this._motionData.loop = i.isMotionLoop(), this._motionData.curveCount = i.getMotionCurveCount(), this._motionData.fps = i.getMotionFps(), this._motionData.eventCount = i.getEventCount();
    let s = i.getEvaluationOptionFlag(pr.EvaluationOptionFlag_AreBeziersRistricted);
    this._fadeInSeconds = i.isExistMotionFadeInTime() ? i.getMotionFadeInTime() < 0 ? 1 : i.getMotionFadeInTime() : 1, this._fadeOutSeconds = i.isExistMotionFadeOutTime() ? i.getMotionFadeOutTime() < 0 ? 1 : i.getMotionFadeOutTime() : 1, z(this._motionData.curves, this._motionData.curveCount, dr, !0), z(this._motionData.segments, i.getMotionTotalSegmentCount(), _r, !0), z(this._motionData.points, i.getMotionTotalPointCount(), ee, !0), z(this._motionData.events, this._motionData.eventCount, gr, !0);
    let n = 0, o = 0;
    for (let l = 0; l < this._motionData.curveCount; ++l) {
      i.getMotionCurveTarget(l) == un ? this._motionData.curves[l].type = lt.CubismMotionCurveTarget_Model : i.getMotionCurveTarget(l) == _n ? this._motionData.curves[l].type = lt.CubismMotionCurveTarget_Parameter : i.getMotionCurveTarget(l) == dn ? this._motionData.curves[l].type = lt.CubismMotionCurveTarget_PartOpacity : Y('Warning : Unable to get segment type from Curve! The number of "CurveCount" may be incorrect!'), this._motionData.curves[l].id = i.getMotionCurveId(l), this._motionData.curves[l].baseSegmentIndex = o, this._motionData.curves[l].fadeInTime = i.isExistMotionCurveFadeInTime(l) ? i.getMotionCurveFadeInTime(l) : -1, this._motionData.curves[l].fadeOutTime = i.isExistMotionCurveFadeOutTime(l) ? i.getMotionCurveFadeOutTime(l) : -1;
      for (let h = 0; h < i.getMotionCurveSegmentCount(l); ) {
        switch (h == 0 ? (this._motionData.segments[o].basePointIndex = n, this._motionData.points[n].time = i.getMotionCurveSegment(l, h), this._motionData.points[n].value = i.getMotionCurveSegment(l, h + 1), n += 1, h += 2) : this._motionData.segments[o].basePointIndex = n - 1, i.getMotionCurveSegment(l, h)) {
          case F.CubismMotionSegmentType_Linear:
            this._motionData.segments[o].segmentType = F.CubismMotionSegmentType_Linear, this._motionData.segments[o].evaluate = mr, this._motionData.points[n].time = i.getMotionCurveSegment(l, h + 1), this._motionData.points[n].value = i.getMotionCurveSegment(l, h + 2), n += 1, h += 3;
            break;
          case F.CubismMotionSegmentType_Bezier:
            this._motionData.segments[o].segmentType = F.CubismMotionSegmentType_Bezier, s ? this._motionData.segments[o].evaluate = gn : this._motionData.segments[o].evaluate = cn, this._motionData.points[n].time = i.getMotionCurveSegment(l, h + 1), this._motionData.points[n].value = i.getMotionCurveSegment(l, h + 2), this._motionData.points[n + 1].time = i.getMotionCurveSegment(l, h + 3), this._motionData.points[n + 1].value = i.getMotionCurveSegment(l, h + 4), this._motionData.points[n + 2].time = i.getMotionCurveSegment(l, h + 5), this._motionData.points[n + 2].value = i.getMotionCurveSegment(l, h + 6), n += 3, h += 7;
            break;
          case F.CubismMotionSegmentType_Stepped:
            this._motionData.segments[o].segmentType = F.CubismMotionSegmentType_Stepped, this._motionData.segments[o].evaluate = br, this._motionData.points[n].time = i.getMotionCurveSegment(l, h + 1), this._motionData.points[n].value = i.getMotionCurveSegment(l, h + 2), n += 1, h += 3;
            break;
          case F.CubismMotionSegmentType_InverseStepped:
            this._motionData.segments[o].segmentType = F.CubismMotionSegmentType_InverseStepped, this._motionData.segments[o].evaluate = vr, this._motionData.points[n].time = i.getMotionCurveSegment(l, h + 1), this._motionData.points[n].value = i.getMotionCurveSegment(l, h + 2), n += 1, h += 3;
            break;
          default:
            G(0);
        }
        ++this._motionData.curves[l].segmentCount, ++o;
      }
    }
    for (let l = 0; l < i.getEventCount(); ++l) this._motionData.events[l].fireTime = i.getEventTime(l), this._motionData.events[l].value = i.getEventValue(l);
    i.release(), i = void 0, i = null;
  }
  getFiredEvent(e, a) {
    z(this._firedEventValues, 0);
    for (let r = 0; r < this._motionData.eventCount; ++r) this._motionData.events[r].fireTime > e && this._motionData.events[r].fireTime <= a && this._firedEventValues.push(this._motionData.events[r].value);
    return this._firedEventValues;
  }
  isExistModelOpacity() {
    for (let e = 0; e < this._motionData.curveCount; e++) {
      let a = this._motionData.curves[e];
      if (a.type == lt.CubismMotionCurveTarget_Model && a.id.getString().localeCompare(ne) == 0) return !0;
    }
    return !1;
  }
  getModelOpacityIndex() {
    if (this.isExistModelOpacity()) for (let e = 0; e < this._motionData.curveCount; e++) {
      let a = this._motionData.curves[e];
      if (a.type == lt.CubismMotionCurveTarget_Model && a.id.getString().localeCompare(ne) == 0) return e;
    }
    return -1;
  }
  getModelOpacityId(e) {
    if (e != -1) {
      let a = this._motionData.curves[e];
      if (a.type == lt.CubismMotionCurveTarget_Model && a.id.getString().localeCompare(ne) == 0) return L.getIdManager().getId(a.id.getString());
    }
    return null;
  }
  getModelOpacityValue() {
    return this._modelOpacity;
  }
  setDebugMode(e) {
    this._debugMode = e;
  }
}, pn;
(function(t) {
  t.CubismMotion = yr;
})(pn ||= {});
var Mr = class extends Ze {
  constructor() {
    super(), this._currentPriority = 0, this._reservePriority = 0;
  }
  getCurrentPriority() {
    return this._currentPriority;
  }
  getReservePriority() {
    return this._reservePriority;
  }
  setReservePriority(t) {
    this._reservePriority = t;
  }
  startMotionPriority(t, e, a) {
    return a == this._reservePriority && (this._reservePriority = 0), this._currentPriority = a, super.startMotion(t, e);
  }
  updateMotion(t, e) {
    this._userTimeSeconds += e;
    let a = super.doUpdateMotion(t, this._userTimeSeconds);
    return this.isFinished() && (this._currentPriority = 0), a;
  }
  reserveMotion(t) {
    return t <= this._reservePriority || t <= this._currentPriority ? !1 : (this._reservePriority = t, !0);
  }
}, mn;
(function(t) {
  t.CubismMotionManager = Mr;
})(mn ||= {});
var Je = /* @__PURE__ */ function(t) {
  return t[t.CubismPhysicsTargetType_Parameter = 0] = "CubismPhysicsTargetType_Parameter", t;
}({}), Ot = /* @__PURE__ */ function(t) {
  return t[t.CubismPhysicsSource_X = 0] = "CubismPhysicsSource_X", t[t.CubismPhysicsSource_Y = 1] = "CubismPhysicsSource_Y", t[t.CubismPhysicsSource_Angle = 2] = "CubismPhysicsSource_Angle", t;
}({}), bn = class {
  constructor() {
    this.gravity = new I(0, 0), this.wind = new I(0, 0);
  }
}, ta = class {
}, Ke = class {
}, $r = class {
  constructor() {
    this.initialPosition = new I(0, 0), this.position = new I(0, 0), this.lastPosition = new I(0, 0), this.lastGravity = new I(0, 0), this.force = new I(0, 0), this.velocity = new I(0, 0);
  }
}, Cr = class {
  constructor() {
    this.normalizationPosition = new Ke(), this.normalizationAngle = new Ke();
  }
}, Ir = class {
  constructor() {
    this.source = new ta();
  }
}, xr = class {
  constructor() {
    this.destination = new ta(), this.translationScale = new I(0, 0);
  }
}, Pr = class {
  constructor() {
    this.settings = [], this.inputs = [], this.outputs = [], this.particles = [], this.gravity = new I(0, 0), this.wind = new I(0, 0), this.fps = 0;
  }
}, vn;
(function(t) {
  t.CubismPhysicsInput = Ir, t.CubismPhysicsNormalization = Ke, t.CubismPhysicsOutput = xr, t.CubismPhysicsParameter = ta, t.CubismPhysicsParticle = $r, t.CubismPhysicsRig = Pr, t.CubismPhysicsSource = Ot, t.CubismPhysicsSubRig = Cr, t.CubismPhysicsTargetType = Je, t.PhysicsJsonEffectiveForces = bn;
})(vn ||= {});
var Qt = "Position", Pe = "X", Te = "Y", Le = "Angle", Ma = "Type", $a = "Id", mt = "Meta", oe = "EffectiveForces", yn = "TotalInputCount", Sn = "TotalOutputCount", Mn = "PhysicsSettingCount", Ca = "Gravity", Ia = "Wind", $n = "VertexCount", Cn = "Fps", R = "PhysicsSettings", Ft = "Normalization", xa = "Minimum", Pa = "Maximum", Ta = "Default", La = "Reflect", wa = "Weight", Wt = "Input", In = "Source", Pt = "Output", xn = "Scale", Pn = "VertexIndex", Tn = "Destination", Tt = "Vertices", Ln = "Mobility", wn = "Delay", On = "Radius", En = "Acceleration", Tr = class {
  constructor(t, e) {
    this._json = Z.create(t, e);
  }
  release() {
    Z.delete(this._json);
  }
  getGravity() {
    let t = new I(0, 0);
    return t.x = this._json.getRoot().getValueByString(mt).getValueByString(oe).getValueByString(Ca).getValueByString(Pe).toFloat(), t.y = this._json.getRoot().getValueByString(mt).getValueByString(oe).getValueByString(Ca).getValueByString(Te).toFloat(), t;
  }
  getWind() {
    let t = new I(0, 0);
    return t.x = this._json.getRoot().getValueByString(mt).getValueByString(oe).getValueByString(Ia).getValueByString(Pe).toFloat(), t.y = this._json.getRoot().getValueByString(mt).getValueByString(oe).getValueByString(Ia).getValueByString(Te).toFloat(), t;
  }
  getFps() {
    return this._json.getRoot().getValueByString(mt).getValueByString(Cn).toFloat(0);
  }
  getSubRigCount() {
    return this._json.getRoot().getValueByString(mt).getValueByString(Mn).toInt();
  }
  getTotalInputCount() {
    return this._json.getRoot().getValueByString(mt).getValueByString(yn).toInt();
  }
  getTotalOutputCount() {
    return this._json.getRoot().getValueByString(mt).getValueByString(Sn).toInt();
  }
  getVertexCount() {
    return this._json.getRoot().getValueByString(mt).getValueByString($n).toInt();
  }
  getNormalizationPositionMinimumValue(t) {
    return this._json.getRoot().getValueByString(R).getValueByIndex(t).getValueByString(Ft).getValueByString(Qt).getValueByString(xa).toFloat();
  }
  getNormalizationPositionMaximumValue(t) {
    return this._json.getRoot().getValueByString(R).getValueByIndex(t).getValueByString(Ft).getValueByString(Qt).getValueByString(Pa).toFloat();
  }
  getNormalizationPositionDefaultValue(t) {
    return this._json.getRoot().getValueByString(R).getValueByIndex(t).getValueByString(Ft).getValueByString(Qt).getValueByString(Ta).toFloat();
  }
  getNormalizationAngleMinimumValue(t) {
    return this._json.getRoot().getValueByString(R).getValueByIndex(t).getValueByString(Ft).getValueByString(Le).getValueByString(xa).toFloat();
  }
  getNormalizationAngleMaximumValue(t) {
    return this._json.getRoot().getValueByString(R).getValueByIndex(t).getValueByString(Ft).getValueByString(Le).getValueByString(Pa).toFloat();
  }
  getNormalizationAngleDefaultValue(t) {
    return this._json.getRoot().getValueByString(R).getValueByIndex(t).getValueByString(Ft).getValueByString(Le).getValueByString(Ta).toFloat();
  }
  getInputCount(t) {
    return this._json.getRoot().getValueByString(R).getValueByIndex(t).getValueByString(Wt).getVector().length;
  }
  getInputWeight(t, e) {
    return this._json.getRoot().getValueByString(R).getValueByIndex(t).getValueByString(Wt).getValueByIndex(e).getValueByString(wa).toFloat();
  }
  getInputReflect(t, e) {
    return this._json.getRoot().getValueByString(R).getValueByIndex(t).getValueByString(Wt).getValueByIndex(e).getValueByString(La).toBoolean();
  }
  getInputType(t, e) {
    return this._json.getRoot().getValueByString(R).getValueByIndex(t).getValueByString(Wt).getValueByIndex(e).getValueByString(Ma).getRawString();
  }
  getInputSourceId(t, e) {
    return L.getIdManager().getId(this._json.getRoot().getValueByString(R).getValueByIndex(t).getValueByString(Wt).getValueByIndex(e).getValueByString(In).getValueByString($a).getRawString());
  }
  getOutputCount(t) {
    return this._json.getRoot().getValueByString(R).getValueByIndex(t).getValueByString(Pt).getVector().length;
  }
  getOutputVertexIndex(t, e) {
    return this._json.getRoot().getValueByString(R).getValueByIndex(t).getValueByString(Pt).getValueByIndex(e).getValueByString(Pn).toInt();
  }
  getOutputAngleScale(t, e) {
    return this._json.getRoot().getValueByString(R).getValueByIndex(t).getValueByString(Pt).getValueByIndex(e).getValueByString(xn).toFloat();
  }
  getOutputWeight(t, e) {
    return this._json.getRoot().getValueByString(R).getValueByIndex(t).getValueByString(Pt).getValueByIndex(e).getValueByString(wa).toFloat();
  }
  getOutputDestinationId(t, e) {
    return L.getIdManager().getId(this._json.getRoot().getValueByString(R).getValueByIndex(t).getValueByString(Pt).getValueByIndex(e).getValueByString(Tn).getValueByString($a).getRawString());
  }
  getOutputType(t, e) {
    return this._json.getRoot().getValueByString(R).getValueByIndex(t).getValueByString(Pt).getValueByIndex(e).getValueByString(Ma).getRawString();
  }
  getOutputReflect(t, e) {
    return this._json.getRoot().getValueByString(R).getValueByIndex(t).getValueByString(Pt).getValueByIndex(e).getValueByString(La).toBoolean();
  }
  getParticleCount(t) {
    return this._json.getRoot().getValueByString(R).getValueByIndex(t).getValueByString(Tt).getVector().length;
  }
  getParticleMobility(t, e) {
    return this._json.getRoot().getValueByString(R).getValueByIndex(t).getValueByString(Tt).getValueByIndex(e).getValueByString(Ln).toFloat();
  }
  getParticleDelay(t, e) {
    return this._json.getRoot().getValueByString(R).getValueByIndex(t).getValueByString(Tt).getValueByIndex(e).getValueByString(wn).toFloat();
  }
  getParticleAcceleration(t, e) {
    return this._json.getRoot().getValueByString(R).getValueByIndex(t).getValueByString(Tt).getValueByIndex(e).getValueByString(En).toFloat();
  }
  getParticleRadius(t, e) {
    return this._json.getRoot().getValueByString(R).getValueByIndex(t).getValueByString(Tt).getValueByIndex(e).getValueByString(On).toFloat();
  }
  getParticlePosition(t, e) {
    let a = new I(0, 0);
    return a.x = this._json.getRoot().getValueByString(R).getValueByIndex(t).getValueByString(Tt).getValueByIndex(e).getValueByString(Qt).getValueByString(Pe).toFloat(), a.y = this._json.getRoot().getValueByString(R).getValueByIndex(t).getValueByString(Tt).getValueByIndex(e).getValueByString(Qt).getValueByString(Te).toFloat(), a;
  }
}, Rn;
(function(t) {
  t.CubismPhysicsJson = Tr;
})(Rn ||= {});
var Oa = "X", Ea = "Y", Ra = "Angle", Bn = 5, Ge = 100, Ba = 1e-3, Dn = 5, Ye = class Lr {
  static create(e, a) {
    let r = new Lr();
    return r.parse(e, a), r._physicsRig.gravity.y = 0, r;
  }
  static delete(e) {
    e != null && (e.release(), e = null);
  }
  parse(e, a) {
    this._physicsRig = new Pr();
    let r = new Tr(e, a);
    this._physicsRig.gravity = r.getGravity(), this._physicsRig.wind = r.getWind(), this._physicsRig.subRigCount = r.getSubRigCount(), this._physicsRig.fps = r.getFps(), z(this._physicsRig.settings, this._physicsRig.subRigCount, Cr, !0), z(this._physicsRig.inputs, r.getTotalInputCount(), Ir, !0), z(this._physicsRig.outputs, r.getTotalOutputCount(), xr, !0), z(this._physicsRig.particles, r.getVertexCount(), $r, !0), this._currentRigOutputs.length = 0, this._previousRigOutputs.length = 0;
    let i = 0, s = 0, n = 0, o = this._currentRigOutputs.length, l = this._previousRigOutputs.length;
    this._currentRigOutputs.length += this._physicsRig.settings.length, this._previousRigOutputs.length += this._physicsRig.settings.length;
    for (let h = 0; h < this._physicsRig.settings.length; ++h) {
      this._physicsRig.settings[h].normalizationPosition.minimum = r.getNormalizationPositionMinimumValue(h), this._physicsRig.settings[h].normalizationPosition.maximum = r.getNormalizationPositionMaximumValue(h), this._physicsRig.settings[h].normalizationPosition.defalut = r.getNormalizationPositionDefaultValue(h), this._physicsRig.settings[h].normalizationAngle.minimum = r.getNormalizationAngleMinimumValue(h), this._physicsRig.settings[h].normalizationAngle.maximum = r.getNormalizationAngleMaximumValue(h), this._physicsRig.settings[h].normalizationAngle.defalut = r.getNormalizationAngleDefaultValue(h), this._physicsRig.settings[h].inputCount = r.getInputCount(h), this._physicsRig.settings[h].baseInputIndex = i;
      for (let u = 0; u < this._physicsRig.settings[h].inputCount; ++u) this._physicsRig.inputs[i + u].sourceParameterIndex = -1, this._physicsRig.inputs[i + u].weight = r.getInputWeight(h, u), this._physicsRig.inputs[i + u].reflect = r.getInputReflect(h, u), r.getInputType(h, u) == Oa ? (this._physicsRig.inputs[i + u].type = Ot.CubismPhysicsSource_X, this._physicsRig.inputs[i + u].getNormalizedParameterValue = An) : r.getInputType(h, u) == Ea ? (this._physicsRig.inputs[i + u].type = Ot.CubismPhysicsSource_Y, this._physicsRig.inputs[i + u].getNormalizedParameterValue = Nn) : r.getInputType(h, u) == Ra && (this._physicsRig.inputs[i + u].type = Ot.CubismPhysicsSource_Angle, this._physicsRig.inputs[i + u].getNormalizedParameterValue = Fn), this._physicsRig.inputs[i + u].source.targetType = Je.CubismPhysicsTargetType_Parameter, this._physicsRig.inputs[i + u].source.id = r.getInputSourceId(h, u);
      i += this._physicsRig.settings[h].inputCount, this._physicsRig.settings[h].outputCount = r.getOutputCount(h), this._physicsRig.settings[h].baseOutputIndex = s;
      let _ = new Da();
      z(_.outputs, this._physicsRig.settings[h].outputCount, null, !0);
      let g = new Da();
      z(g.outputs, this._physicsRig.settings[h].outputCount, null, !0);
      for (let u = 0; u < this._physicsRig.settings[h].outputCount; ++u) _.outputs[u] = 0, g.outputs[u] = 0, this._physicsRig.outputs[s + u].destinationParameterIndex = -1, this._physicsRig.outputs[s + u].vertexIndex = r.getOutputVertexIndex(h, u), this._physicsRig.outputs[s + u].angleScale = r.getOutputAngleScale(h, u), this._physicsRig.outputs[s + u].weight = r.getOutputWeight(h, u), this._physicsRig.outputs[s + u].destination.targetType = Je.CubismPhysicsTargetType_Parameter, this._physicsRig.outputs[s + u].destination.id = r.getOutputDestinationId(h, u), r.getOutputType(h, u) == Oa ? (this._physicsRig.outputs[s + u].type = Ot.CubismPhysicsSource_X, this._physicsRig.outputs[s + u].getValue = Vn, this._physicsRig.outputs[s + u].getScale = Gn) : r.getOutputType(h, u) == Ea ? (this._physicsRig.outputs[s + u].type = Ot.CubismPhysicsSource_Y, this._physicsRig.outputs[s + u].getValue = Un, this._physicsRig.outputs[s + u].getScale = Yn) : r.getOutputType(h, u) == Ra && (this._physicsRig.outputs[s + u].type = Ot.CubismPhysicsSource_Angle, this._physicsRig.outputs[s + u].getValue = kn, this._physicsRig.outputs[s + u].getScale = jn), this._physicsRig.outputs[s + u].reflect = r.getOutputReflect(h, u);
      this._currentRigOutputs[o++] = _, this._previousRigOutputs[l++] = g, s += this._physicsRig.settings[h].outputCount, this._physicsRig.settings[h].particleCount = r.getParticleCount(h), this._physicsRig.settings[h].baseParticleIndex = n;
      for (let u = 0; u < this._physicsRig.settings[h].particleCount; ++u) this._physicsRig.particles[n + u].mobility = r.getParticleMobility(h, u), this._physicsRig.particles[n + u].delay = r.getParticleDelay(h, u), this._physicsRig.particles[n + u].acceleration = r.getParticleAcceleration(h, u), this._physicsRig.particles[n + u].radius = r.getParticleRadius(h, u), this._physicsRig.particles[n + u].position = r.getParticlePosition(h, u);
      n += this._physicsRig.settings[h].particleCount;
    }
    this.initialize(), r.release(), r = void 0, r = null;
  }
  stabilization(e) {
    let a, r, i, s, n = new I(), o, l, h, _, g = e.getModel().parameters.values, u = e.getModel().parameters.maximumValues, d = e.getModel().parameters.minimumValues, c = e.getModel().parameters.defaultValues;
    (this._parameterCaches?.length ?? 0) < e.getParameterCount() && (this._parameterCaches = new Float32Array(e.getParameterCount())), (this._parameterInputCaches?.length ?? 0) < e.getParameterCount() && (this._parameterInputCaches = new Float32Array(e.getParameterCount()));
    for (let p = 0; p < e.getParameterCount(); ++p) this._parameterCaches[p] = g[p], this._parameterInputCaches[p] = g[p];
    for (let p = 0; p < this._physicsRig.subRigCount; ++p) {
      a = { angle: 0 }, n.x = 0, n.y = 0, o = this._physicsRig.settings[p], l = this._physicsRig.inputs.slice(o.baseInputIndex), h = this._physicsRig.outputs.slice(o.baseOutputIndex), _ = this._physicsRig.particles.slice(o.baseParticleIndex);
      for (let f = 0; f < o.inputCount; ++f) r = l[f].weight / Ge, l[f].sourceParameterIndex == -1 && (l[f].sourceParameterIndex = e.getParameterIndex(l[f].source.id)), l[f].getNormalizedParameterValue(n, a, g[l[f].sourceParameterIndex], d[l[f].sourceParameterIndex], u[l[f].sourceParameterIndex], c[l[f].sourceParameterIndex], o.normalizationPosition, o.normalizationAngle, l[f].reflect, r), this._parameterCaches[l[f].sourceParameterIndex] = g[l[f].sourceParameterIndex];
      i = $.degreesToRadian(-a.angle), n.x = n.x * $.cos(i) - n.y * $.sin(i), n.y = n.x * $.sin(i) + n.y * $.cos(i), zn(_, o.particleCount, n, a.angle, this._options.wind, Ba * o.normalizationPosition.maximum);
      for (let f = 0; f < o.outputCount; ++f) {
        let m = h[f].vertexIndex;
        if (h[f].destinationParameterIndex == -1 && (h[f].destinationParameterIndex = e.getParameterIndex(h[f].destination.id)), m < 1 || m >= o.particleCount) continue;
        let v = new I();
        v = _[m].position.substract(_[m - 1].position), s = h[f].getValue(v, _, m, h[f].reflect, this._options.gravity), this._currentRigOutputs[p].outputs[f] = s, this._previousRigOutputs[p].outputs[f] = s;
        let b = h[f].destinationParameterIndex, y = !Float32Array.prototype.slice && "subarray" in Float32Array.prototype ? JSON.parse(JSON.stringify(g.subarray(b))) : g.slice(b);
        we(y, d[b], u[b], s, h[f]);
        for (let S = b, C = 0; S < this._parameterCaches.length; S++, C++) g[S] = this._parameterCaches[S] = y[C];
      }
    }
  }
  evaluate(e, a) {
    let r, i, s, n, o = new I(), l, h, _, g;
    if (0 >= a) return;
    let u = e.getModel().parameters.values, d = e.getModel().parameters.maximumValues, c = e.getModel().parameters.minimumValues, p = e.getModel().parameters.defaultValues, f;
    if (this._currentRemainTime += a, this._currentRemainTime > Dn && (this._currentRemainTime = 0), (this._parameterCaches?.length ?? 0) < e.getParameterCount() && (this._parameterCaches = new Float32Array(e.getParameterCount())), (this._parameterInputCaches?.length ?? 0) < e.getParameterCount()) {
      this._parameterInputCaches = new Float32Array(e.getParameterCount());
      for (let v = 0; v < e.getParameterCount(); ++v) this._parameterInputCaches[v] = u[v];
    }
    for (f = this._physicsRig.fps > 0 ? 1 / this._physicsRig.fps : a; this._currentRemainTime >= f; ) {
      for (let b = 0; b < this._physicsRig.subRigCount; ++b) {
        l = this._physicsRig.settings[b], _ = this._physicsRig.outputs.slice(l.baseOutputIndex);
        for (let y = 0; y < l.outputCount; ++y) this._previousRigOutputs[b].outputs[y] = this._currentRigOutputs[b].outputs[y];
      }
      let v = f / this._currentRemainTime;
      for (let b = 0; b < e.getParameterCount(); ++b) this._parameterCaches[b] = this._parameterInputCaches[b] * (1 - v) + u[b] * v, this._parameterInputCaches[b] = this._parameterCaches[b];
      for (let b = 0; b < this._physicsRig.subRigCount; ++b) {
        r = { angle: 0 }, o.x = 0, o.y = 0, l = this._physicsRig.settings[b], h = this._physicsRig.inputs.slice(l.baseInputIndex), _ = this._physicsRig.outputs.slice(l.baseOutputIndex), g = this._physicsRig.particles.slice(l.baseParticleIndex);
        for (let y = 0; y < l.inputCount; ++y) i = h[y].weight / Ge, h[y].sourceParameterIndex == -1 && (h[y].sourceParameterIndex = e.getParameterIndex(h[y].source.id)), h[y].getNormalizedParameterValue(o, r, this._parameterCaches[h[y].sourceParameterIndex], c[h[y].sourceParameterIndex], d[h[y].sourceParameterIndex], p[h[y].sourceParameterIndex], l.normalizationPosition, l.normalizationAngle, h[y].reflect, i);
        s = $.degreesToRadian(-r.angle), o.x = o.x * $.cos(s) - o.y * $.sin(s), o.y = o.x * $.sin(s) + o.y * $.cos(s), Xn(g, l.particleCount, o, r.angle, this._options.wind, Ba * l.normalizationPosition.maximum, f, Bn);
        for (let y = 0; y < l.outputCount; ++y) {
          let S = _[y].vertexIndex;
          if (_[y].destinationParameterIndex == -1 && (_[y].destinationParameterIndex = e.getParameterIndex(_[y].destination.id)), S < 1 || S >= l.particleCount) continue;
          let C = new I();
          C.x = g[S].position.x - g[S - 1].position.x, C.y = g[S].position.y - g[S - 1].position.y, n = _[y].getValue(C, g, S, _[y].reflect, this._options.gravity), this._currentRigOutputs[b].outputs[y] = n;
          let P = _[y].destinationParameterIndex, w = !Float32Array.prototype.slice && "subarray" in Float32Array.prototype ? JSON.parse(JSON.stringify(this._parameterCaches.subarray(P))) : this._parameterCaches.slice(P);
          we(w, c[P], d[P], n, _[y]);
          for (let A = P, ft = 0; A < this._parameterCaches.length; A++, ft++) this._parameterCaches[A] = w[ft];
        }
      }
      this._currentRemainTime -= f;
    }
    let m = this._currentRemainTime / f;
    this.interpolate(e, m);
  }
  interpolate(e, a) {
    let r, i, s = e.getModel().parameters.values, n = e.getModel().parameters.maximumValues, o = e.getModel().parameters.minimumValues;
    for (let l = 0; l < this._physicsRig.subRigCount; ++l) {
      i = this._physicsRig.settings[l], r = this._physicsRig.outputs.slice(i.baseOutputIndex);
      for (let h = 0; h < i.outputCount; ++h) {
        if (r[h].destinationParameterIndex == -1) continue;
        let _ = r[h].destinationParameterIndex, g = !Float32Array.prototype.slice && "subarray" in Float32Array.prototype ? JSON.parse(JSON.stringify(s.subarray(_))) : s.slice(_);
        we(g, o[_], n[_], this._previousRigOutputs[l].outputs[h] * (1 - a) + this._currentRigOutputs[l].outputs[h] * a, r[h]);
        for (let u = _, d = 0; u < s.length; u++, d++) s[u] = g[d];
      }
    }
  }
  setOptions(e) {
    this._options = e;
  }
  getOption() {
    return this._options;
  }
  constructor() {
    this._physicsRig = null, this._options = new wr(), this._options.gravity.y = -1, this._options.gravity.x = 0, this._options.wind.x = 0, this._options.wind.y = 0, this._currentRigOutputs = [], this._previousRigOutputs = [], this._currentRemainTime = 0, this._parameterCaches = null, this._parameterInputCaches = null;
  }
  release() {
    this._physicsRig = void 0, this._physicsRig = null;
  }
  initialize() {
    let e, a, r;
    for (let i = 0; i < this._physicsRig.subRigCount; ++i) {
      a = this._physicsRig.settings[i], e = this._physicsRig.particles.slice(a.baseParticleIndex), e[0].initialPosition = new I(0, 0), e[0].lastPosition = new I(e[0].initialPosition.x, e[0].initialPosition.y), e[0].lastGravity = new I(0, -1), e[0].lastGravity.y *= -1, e[0].velocity = new I(0, 0), e[0].force = new I(0, 0);
      for (let s = 1; s < a.particleCount; ++s) r = new I(0, 0), r.y = e[s].radius, e[s].initialPosition = new I(e[s - 1].initialPosition.x + r.x, e[s - 1].initialPosition.y + r.y), e[s].position = new I(e[s].initialPosition.x, e[s].initialPosition.y), e[s].lastPosition = new I(e[s].initialPosition.x, e[s].initialPosition.y), e[s].lastGravity = new I(0, -1), e[s].lastGravity.y *= -1, e[s].velocity = new I(0, 0), e[s].force = new I(0, 0);
    }
  }
}, wr = class {
  constructor() {
    this.gravity = new I(0, 0), this.wind = new I(0, 0);
  }
}, Da = class {
  constructor() {
    this.outputs = [];
  }
};
function Hn(t) {
  let e = 0;
  return t > 0 ? e = 1 : t < 0 && (e = -1), e;
}
function An(t, e, a, r, i, s, n, o, l, h) {
  t.x += ea(a, r, i, s, n.minimum, n.maximum, n.defalut, l) * h;
}
function Nn(t, e, a, r, i, s, n, o, l, h) {
  t.y += ea(a, r, i, s, n.minimum, n.maximum, n.defalut, l) * h;
}
function Fn(t, e, a, r, i, s, n, o, l, h) {
  e.angle += ea(a, r, i, s, o.minimum, o.maximum, o.defalut, l) * h;
}
function Vn(t, e, a, r, i) {
  let s = t.x;
  return r && (s *= -1), s;
}
function Un(t, e, a, r, i) {
  let s = t.y;
  return r && (s *= -1), s;
}
function kn(t, e, a, r, i) {
  let s;
  return i = a >= 2 ? e[a - 1].position.substract(e[a - 2].position) : i.multiplyByScaler(-1), s = $.directionToRadian(i, t), r && (s *= -1), s;
}
function Jn(t, e) {
  let a = $.max(t, e), r = $.min(t, e);
  return $.abs(a - r);
}
function Kn(t, e) {
  return $.min(t, e) + Jn(t, e) / 2;
}
function Gn(t, e) {
  return JSON.parse(JSON.stringify(t.x));
}
function Yn(t, e) {
  return JSON.parse(JSON.stringify(t.y));
}
function jn(t, e) {
  return JSON.parse(JSON.stringify(e));
}
function Xn(t, e, a, r, i, s, n, o) {
  let l, h, _ = new I(0, 0), g = new I(0, 0), u = new I(0, 0), d = new I(0, 0);
  t[0].position = new I(a.x, a.y);
  let c = $.degreesToRadian(r), p = $.radianToDirection(c);
  p.normalize();
  for (let f = 1; f < e; ++f) t[f].force = p.multiplyByScaler(t[f].acceleration).add(i), t[f].lastPosition = new I(t[f].position.x, t[f].position.y), l = t[f].delay * n * 30, _ = t[f].position.substract(t[f - 1].position), h = $.directionToRadian(t[f].lastGravity, p) / o, _.x = $.cos(h) * _.x - _.y * $.sin(h), _.y = $.sin(h) * _.x + _.y * $.cos(h), t[f].position = t[f - 1].position.add(_), g = t[f].velocity.multiplyByScaler(l), u = t[f].force.multiplyByScaler(l).multiplyByScaler(l), t[f].position = t[f].position.add(g).add(u), d = t[f].position.substract(t[f - 1].position), d.normalize(), t[f].position = t[f - 1].position.add(d.multiplyByScaler(t[f].radius)), $.abs(t[f].position.x) < s && (t[f].position.x = 0), l != 0 && (t[f].velocity = t[f].position.substract(t[f].lastPosition), t[f].velocity = t[f].velocity.divisionByScalar(l), t[f].velocity = t[f].velocity.multiplyByScaler(t[f].mobility)), t[f].force = new I(0, 0), t[f].lastGravity = new I(p.x, p.y);
}
function zn(t, e, a, r, i, s) {
  let n = new I(0, 0);
  t[0].position = new I(a.x, a.y);
  let o = $.degreesToRadian(r), l = $.radianToDirection(o);
  l.normalize();
  for (let h = 1; h < e; ++h) t[h].force = l.multiplyByScaler(t[h].acceleration).add(i), t[h].lastPosition = new I(t[h].position.x, t[h].position.y), t[h].velocity = new I(0, 0), n = t[h].force, n.normalize(), n = n.multiplyByScaler(t[h].radius), t[h].position = t[h - 1].position.add(n), $.abs(t[h].position.x) < s && (t[h].position.x = 0), t[h].force = new I(0, 0), t[h].lastGravity = new I(l.x, l.y);
}
function we(t, e, a, r, i) {
  let s;
  s = r * i.getScale(i.translationScale, i.angleScale), s < e ? (s < i.valueBelowMinimum && (i.valueBelowMinimum = s), s = e) : s > a && (s > i.valueExceededMaximum && (i.valueExceededMaximum = s), s = a);
  let n = i.weight / Ge;
  n >= 1 || (s = t[0] * (1 - n) + s * n), t[0] = s;
}
function ea(t, e, a, r, i, s, n, o) {
  let l = 0, h = $.max(a, e);
  h < t && (t = h);
  let _ = $.min(a, e);
  _ > t && (t = _);
  let g = $.min(i, s), u = $.max(i, s), d = n, c = Kn(_, h), p = t - c;
  switch (Hn(p)) {
    case 1: {
      let f = u - d, m = h - c;
      m != 0 && (l = f / m * p, l += d);
      break;
    }
    case -1: {
      let f = g - d, m = _ - c;
      m != 0 && (l = f / m * p, l += d);
      break;
    }
    case 0:
      l = d;
  }
  return o ? l : l * -1;
}
var Qn;
(function(t) {
  t.CubismPhysics = Ye, t.Options = wr;
})(Qn ||= {});
var Oe = 4, Wn = 36, qn = 32, Zn = class {
  constructor(t) {
    this._renderTextureCount = 0, this._clippingMaskBufferSize = 256, this._clippingContextListForMask = [], this._clippingContextListForDraw = [], this._clippingContextListForOffscreen = [], this._tmpBoundsOnModel = new fe(), this._tmpMatrix = new U(), this._tmpMatrixForMask = new U(), this._tmpMatrixForDraw = new U(), this._clearedMaskBufferFlags = [], this._clippingContexttConstructor = t, this._channelColors = [
      new E(1, 0, 0, 0),
      new E(0, 1, 0, 0),
      new E(0, 0, 1, 0),
      new E(0, 0, 0, 1)
    ];
  }
  release() {
    for (let t = 0; t < this._clippingContextListForMask.length; t++) this._clippingContextListForMask[t] && (this._clippingContextListForMask[t].release(), this._clippingContextListForMask[t] = void 0), this._clippingContextListForMask[t] = null;
    this._clippingContextListForMask = null;
    for (let t = 0; t < this._clippingContextListForDraw.length; t++) this._clippingContextListForDraw[t] = null;
    this._clippingContextListForDraw = null;
    for (let t = 0; t < this._channelColors.length; t++) this._channelColors[t] = null;
    this._channelColors = null, this._clearedMaskBufferFlags != null && (this._clearedMaskBufferFlags.length = 0), this._clearedMaskBufferFlags = null;
  }
  initializeForDrawable(t, e) {
    e % 1 != 0 && (Y("The number of render textures must be specified as an integer. The decimal point is rounded down and corrected to an integer."), e = ~~e), e < 1 && Y("The number of render textures must be an integer greater than or equal to 1. Set the number of render textures to 1."), this._renderTextureCount = e < 1 ? 1 : e, this._clearedMaskBufferFlags = Array(this._renderTextureCount), this._clippingContextListForDraw.length = t.getDrawableCount();
    for (let a = 0; a < t.getDrawableCount(); a++) {
      if (t.getDrawableMaskCounts()[a] <= 0) {
        this._clippingContextListForDraw[a] = null;
        continue;
      }
      let r = this.findSameClip(t.getDrawableMasks()[a], t.getDrawableMaskCounts()[a]);
      r ?? (r = new this._clippingContexttConstructor(this, t.getDrawableMasks()[a], t.getDrawableMaskCounts()[a]), this._clippingContextListForMask.push(r)), r.addClippedDrawable(a), this._clippingContextListForDraw[a] = r;
    }
  }
  initializeForOffscreen(t, e) {
    this._renderTextureCount = e, this._clearedMaskBufferFlags.length = this._renderTextureCount;
    for (let a = 0; a < this._renderTextureCount; ++a) this._clearedMaskBufferFlags[a] = !1;
    this._clippingContextListForOffscreen.length = t.getOffscreenCount();
    for (let a = 0; a < t.getOffscreenCount(); ++a) {
      if (t.getOffscreenMaskCounts()[a] <= 0) {
        this._clippingContextListForOffscreen.push(null);
        continue;
      }
      let r = this.findSameClip(t.getOffscreenMasks()[a], t.getOffscreenMaskCounts()[a]);
      r ?? (r = new this._clippingContexttConstructor(this, t.getOffscreenMasks()[a], t.getOffscreenMaskCounts()[a]), this._clippingContextListForMask.push(r)), r.addClippedOffscreen(a), this._clippingContextListForOffscreen[a] = r;
    }
  }
  findSameClip(t, e) {
    for (let a = 0; a < this._clippingContextListForMask.length; a++) {
      let r = this._clippingContextListForMask[a], i = r._clippingIdCount;
      if (i != e) continue;
      let s = 0;
      for (let n = 0; n < i; n++) {
        let o = r._clippingIdList[n];
        for (let l = 0; l < i; l++) if (t[l] == o) {
          s++;
          break;
        }
      }
      if (s == i) return r;
    }
    return null;
  }
  setupMatrixForHighPrecision(t, e) {
    let a = 0;
    for (let r = 0; r < this._clippingContextListForMask.length; r++) {
      let i = this._clippingContextListForMask[r];
      this.calcClippedDrawableTotalBounds(t, i), i._isUsing && a++;
    }
    if (a > 0) {
      if (this.setupLayoutBounds(0), this._clearedMaskBufferFlags.length != this._renderTextureCount) {
        this._clearedMaskBufferFlags.length = this._renderTextureCount;
        for (let r = 0; r < this._renderTextureCount; r++) this._clearedMaskBufferFlags[r] = !1;
      } else for (let r = 0; r < this._renderTextureCount; r++) this._clearedMaskBufferFlags[r] = !1;
      for (let r = 0; r < this._clippingContextListForMask.length; r++) {
        let i = this._clippingContextListForMask[r], s = i._allClippedDrawRect, n = i._layoutBounds, o = 0.05, l = 0, h = 0, _ = t.getPixelsPerUnit(), g = i.getClippingManager().getClippingMaskBufferSize(), u = n.width * g, d = n.height * g;
        this._tmpBoundsOnModel.setRect(s), this._tmpBoundsOnModel.width * _ > u ? (this._tmpBoundsOnModel.expand(s.width * o, 0), l = n.width / this._tmpBoundsOnModel.width) : l = _ / u, this._tmpBoundsOnModel.height * _ > d ? (this._tmpBoundsOnModel.expand(0, s.height * o), h = n.height / this._tmpBoundsOnModel.height) : h = _ / d, this.createMatrixForMask(e, n, l, h), i._matrixForMask.setMatrix(this._tmpMatrixForMask.getArray()), i._matrixForDraw.setMatrix(this._tmpMatrixForDraw.getArray());
      }
    }
  }
  setupMatrixForOffscreenHighPrecision(t, e, a) {
    let r = 0;
    for (let i = 0; i < this._clippingContextListForMask.length; i++) {
      let s = this._clippingContextListForMask[i];
      this.calcClippedOffscreenTotalBounds(t, s), s._isUsing && r++;
    }
    if (!(r <= 0)) {
      if (this.setupLayoutBounds(0), this._clearedMaskBufferFlags.length != this._renderTextureCount) {
        this._clearedMaskBufferFlags.length = this._renderTextureCount;
        for (let i = 0; i < this._renderTextureCount; ++i) this._clearedMaskBufferFlags[i] = !1;
      } else for (let i = 0; i < this._renderTextureCount; ++i) this._clearedMaskBufferFlags[i] = !1;
      for (let i = 0; i < this._clippingContextListForMask.length; i++) {
        let s = this._clippingContextListForMask[i], n = s._allClippedDrawRect, o = s._layoutBounds, l = 0.05, h = 0, _ = 0, g = t.getPixelsPerUnit(), u = s.getClippingManager().getClippingMaskBufferSize(), d = o.width * u, c = o.height * u;
        this._tmpBoundsOnModel.setRect(n), this._tmpBoundsOnModel.width * g > d ? (this._tmpBoundsOnModel.expand(n.width * l, 0), h = o.width / this._tmpBoundsOnModel.width) : h = g / d, this._tmpBoundsOnModel.height * g > c ? (this._tmpBoundsOnModel.expand(0, n.height * l), _ = o.height / this._tmpBoundsOnModel.height) : _ = g / c, this.createMatrixForMask(e, o, h, _), s._matrixForMask.setMatrix(this._tmpMatrixForMask.getArray()), s._matrixForDraw.setMatrix(this._tmpMatrixForDraw.getArray());
        let p = a.getInvert();
        s._matrixForDraw.multiplyByMatrix(p);
      }
    }
  }
  calcClippedOffscreenTotalBounds(t, e) {
    let a = Number.MAX_VALUE, r = Number.MAX_VALUE, i = -Number.MAX_VALUE, s = -Number.MAX_VALUE, n = e._clippedOffscreenIndexList.length, o = [];
    for (let h = 0; h < n; h++) {
      let _ = e._clippedOffscreenIndexList[h];
      this.getOffscreenChildDrawableIndexList(t, _, o);
    }
    let l = o.length;
    for (let h = 0; h < l; h++) {
      let _ = t.getDrawableVertexCount(o[h]), g = t.getDrawableVertices(o[h]), u = Number.MAX_VALUE, d = Number.MAX_VALUE, c = -Number.MAX_VALUE, p = -Number.MAX_VALUE, f = _ * ut.vertexStep;
      for (let m = ut.vertexOffset; m < f; m += ut.vertexStep) {
        let v = g[m], b = g[m + 1];
        v < u && (u = v), v > c && (c = v), b < d && (d = b), b > p && (p = b);
      }
      u != Number.MAX_VALUE && (u < a && (a = u), d < r && (r = d), c > i && (i = c), p > s && (s = p));
    }
    if (a == Number.MAX_VALUE) e._allClippedDrawRect.x = 0, e._allClippedDrawRect.y = 0, e._allClippedDrawRect.width = 0, e._allClippedDrawRect.height = 0, e._isUsing = !1;
    else {
      e._isUsing = !0;
      let h = i - a, _ = s - r;
      e._allClippedDrawRect.x = a, e._allClippedDrawRect.y = r, e._allClippedDrawRect.width = h, e._allClippedDrawRect.height = _;
    }
  }
  getOffscreenChildDrawableIndexList(t, e, a) {
    let r = t.getOffscreenOwnerIndices()[e];
    this.getPartChildDrawableIndexList(t, r, a);
  }
  getPartChildDrawableIndexList(t, e, a) {
    let r = t.getPartsHierarchy()[e].childDrawObjects;
    a.push(...r.drawableIndices);
    for (let i = 0; i < r.offscreenIndices.length; ++i) this.getOffscreenChildDrawableIndexList(t, r.offscreenIndices[i], a);
  }
  createMatrixForMask(t, e, a, r) {
    this._tmpMatrix.loadIdentity(), this._tmpMatrix.translateRelative(-1, -1), this._tmpMatrix.scaleRelative(2, 2), this._tmpMatrix.translateRelative(e.x, e.y), this._tmpMatrix.scaleRelative(a, r), this._tmpMatrix.translateRelative(-this._tmpBoundsOnModel.x, -this._tmpBoundsOnModel.y), this._tmpMatrixForMask.setMatrix(this._tmpMatrix.getArray()), this._tmpMatrix.loadIdentity(), this._tmpMatrix.translateRelative(e.x, e.y * (t ? -1 : 1)), this._tmpMatrix.scaleRelative(a, r * (t ? -1 : 1)), this._tmpMatrix.translateRelative(-this._tmpBoundsOnModel.x, -this._tmpBoundsOnModel.y), this._tmpMatrixForDraw.setMatrix(this._tmpMatrix.getArray());
  }
  setupLayoutBounds(t) {
    let e = this._renderTextureCount <= 1 ? Wn : qn * this._renderTextureCount;
    if (t <= 0 || t > e) {
      t > e && T(`not supported mask count : {0}
[Details] render texture count : {1}, mask count : {2}`, t - e, this._renderTextureCount, t);
      for (let l = 0; l < this._clippingContextListForMask.length; l++) {
        let h = this._clippingContextListForMask[l];
        h._layoutChannelIndex = 0, h._layoutBounds.x = 0, h._layoutBounds.y = 0, h._layoutBounds.width = 1, h._layoutBounds.height = 1, h._bufferIndex = 0;
      }
      return;
    }
    let a = this._renderTextureCount <= 1 ? 9 : 8, r = t / this._renderTextureCount, i = t % this._renderTextureCount;
    r = Math.ceil(r);
    let s = r / Oe, n = r % Oe;
    s = ~~s;
    let o = 0;
    for (let l = 0; l < this._renderTextureCount; l++) for (let h = 0; h < Oe; h++) {
      let _ = s + +(h < n), g = n + (s < 1 ? -1 : 0);
      if (h == g && i > 0 && (_ -= l < i ? 0 : 1), _ != 0)
        if (_ == 1) {
          let u = this._clippingContextListForMask[o++];
          u._layoutChannelIndex = h, u._layoutBounds.x = 0, u._layoutBounds.y = 0, u._layoutBounds.width = 1, u._layoutBounds.height = 1, u._bufferIndex = l;
        } else if (_ == 2) for (let u = 0; u < _; u++) {
          let d = u % 2;
          d = ~~d;
          let c = this._clippingContextListForMask[o++];
          c._layoutChannelIndex = h, c._layoutBounds.x = d * 0.5, c._layoutBounds.y = 0, c._layoutBounds.width = 0.5, c._layoutBounds.height = 1, c._bufferIndex = l;
        }
        else if (_ <= 4) for (let u = 0; u < _; u++) {
          let d = u % 2, c = u / 2;
          d = ~~d, c = ~~c;
          let p = this._clippingContextListForMask[o++];
          p._layoutChannelIndex = h, p._layoutBounds.x = d * 0.5, p._layoutBounds.y = c * 0.5, p._layoutBounds.width = 0.5, p._layoutBounds.height = 0.5, p._bufferIndex = l;
        }
        else if (_ <= a) for (let u = 0; u < _; u++) {
          let d = u % 3, c = u / 3;
          d = ~~d, c = ~~c;
          let p = this._clippingContextListForMask[o++];
          p._layoutChannelIndex = h, p._layoutBounds.x = d / 3, p._layoutBounds.y = c / 3, p._layoutBounds.width = 1 / 3, p._layoutBounds.height = 1 / 3, p._bufferIndex = l;
        }
        else {
          T(`not supported mask count : {0}
[Details] render texture count : {1}, mask count : {2}`, t - e, this._renderTextureCount, t);
          for (let u = 0; u < _; u++) {
            let d = this._clippingContextListForMask[o++];
            d._layoutChannelIndex = 0, d._layoutBounds.x = 0, d._layoutBounds.y = 0, d._layoutBounds.width = 1, d._layoutBounds.height = 1, d._bufferIndex = 0;
          }
        }
    }
  }
  calcClippedDrawableTotalBounds(t, e) {
    let a = Number.MAX_VALUE, r = Number.MAX_VALUE, i = Number.MIN_VALUE, s = Number.MIN_VALUE, n = e._clippedDrawableIndexList.length;
    for (let o = 0; o < n; o++) {
      let l = e._clippedDrawableIndexList[o], h = t.getDrawableVertexCount(l), _ = t.getDrawableVertices(l), g = Number.MAX_VALUE, u = Number.MAX_VALUE, d = -Number.MAX_VALUE, c = -Number.MAX_VALUE, p = h * ut.vertexStep;
      for (let f = ut.vertexOffset; f < p; f += ut.vertexStep) {
        let m = _[f], v = _[f + 1];
        m < g && (g = m), m > d && (d = m), v < u && (u = v), v > c && (c = v);
      }
      if (g != Number.MAX_VALUE)
        if (g < a && (a = g), u < r && (r = u), d > i && (i = d), c > s && (s = c), a == Number.MAX_VALUE) e._allClippedDrawRect.x = 0, e._allClippedDrawRect.y = 0, e._allClippedDrawRect.width = 0, e._allClippedDrawRect.height = 0, e._isUsing = !1;
        else {
          e._isUsing = !0;
          let f = i - a, m = s - r;
          e._allClippedDrawRect.x = a, e._allClippedDrawRect.y = r, e._allClippedDrawRect.width = f, e._allClippedDrawRect.height = m;
        }
    }
  }
  getClippingContextListForDraw() {
    return this._clippingContextListForDraw;
  }
  getClippingContextListForOffscreen() {
    return this._clippingContextListForOffscreen;
  }
  getClippingMaskBufferSize() {
    return this._clippingMaskBufferSize;
  }
  getRenderTextureCount() {
    return this._renderTextureCount;
  }
  getChannelFlagAsColor(t) {
    return this._channelColors[t];
  }
  setClippingMaskBufferSize(t) {
    this._clippingMaskBufferSize = t;
  }
}, Ha = class extends Mt {
  initializeOffscreenManager(t, e, a) {
    this._gl = t, this._webGLOffscreenManager = ge.getInstance(), this._webGLOffscreenManager.getContainerSize(t) === 0 && this._webGLOffscreenManager.initialize(t, e, a);
  }
  setOffscreenRenderTarget(t, e, a, r) {
    this._webGLOffscreenManager ?? this.initializeOffscreenManager(t, e, a);
    let i = this._webGLOffscreenManager.getOffscreenRenderTargetContainers(t, e, a, r);
    if (i == null) {
      T("Failed to acquire offscreen render texture container.");
      return;
    }
    this._colorBuffer = i.getColorBuffer(), this._renderTexture = i.getRenderTexture(), this._bufferWidth = e, this._bufferHeight = a, this._gl = t, this._renderTexture ?? (this._renderTexture = r, T("Failed to create offscreen render texture."));
  }
  getUsingRenderTextureState() {
    return this._webGLOffscreenManager == null || this._gl == null || this._webGLOffscreenManager.getUsingRenderTextureState(this._gl, this._renderTexture);
  }
  startUsingRenderTexture() {
    this._webGLOffscreenManager == null || this._gl == null || this._webGLOffscreenManager.startUsingRenderTexture(this._gl, this._renderTexture);
  }
  stopUsingRenderTexture() {
    this._webGLOffscreenManager == null || this._gl == null || this._webGLOffscreenManager.stopUsingRenderTexture(this._gl, this._renderTexture);
  }
  setOffscreenIndex(t) {
    this._offscreenIndex = t;
  }
  getOffscreenIndex() {
    return this._offscreenIndex;
  }
  setOldOffscreen(t) {
    this._oldOffscreen = t;
  }
  getOldOffscreen() {
    return this._oldOffscreen;
  }
  setParentPartOffscreen(t) {
    this._parentOffscreenRenderTarget = t;
  }
  getParentPartOffscreen() {
    return this._parentOffscreenRenderTarget;
  }
  constructor() {
    super(), this._offscreenIndex = -1, this._parentOffscreenRenderTarget = null, this._oldOffscreen = null, this._webGLOffscreenManager = null;
  }
  release() {
    this._webGLOffscreenManager != null && this._gl != null && this._renderTexture != null && this._webGLOffscreenManager.stopUsingRenderTexture(this._gl, this._renderTexture), this._colorBuffer && this._gl && (this._gl.deleteTexture(this._colorBuffer), this._colorBuffer = null), this._renderTexture && this._gl && (this._gl.deleteFramebuffer(this._renderTexture), this._renderTexture = null), this._webGLOffscreenManager != null && (this._webGLOffscreenManager = null), this._oldOffscreen = null, this._parentOffscreenRenderTarget = null;
  }
}, le = -1, he = new Uint16Array([
  0,
  1,
  2,
  2,
  1,
  3
]), ce = class extends Zn {
  setGL(t) {
    this.gl = t;
  }
  constructor() {
    super(Or);
  }
  setupClippingContext(t, e, a, r, i) {
    let s = 0;
    for (let n = 0; n < this._clippingContextListForMask.length; n++) {
      let o = this._clippingContextListForMask[n];
      switch (i) {
        case N.DrawableObjectType_Drawable:
        default:
          this.calcClippedDrawableTotalBounds(t, o);
          break;
        case N.DrawableObjectType_Offscreen:
          this.calcClippedOffscreenTotalBounds(t, o);
      }
      o._isUsing && s++;
    }
    if (!(s <= 0)) {
      switch (this.gl.viewport(0, 0, this._clippingMaskBufferSize, this._clippingMaskBufferSize), i) {
        case N.DrawableObjectType_Drawable:
        default:
          this._currentMaskBuffer = e.getDrawableMaskBuffer(0);
          break;
        case N.DrawableObjectType_Offscreen:
          this._currentMaskBuffer = e.getOffscreenMaskBuffer(0);
      }
      if (this._currentMaskBuffer.beginDraw(a), e.preDraw(), this.setupLayoutBounds(s), this._clearedMaskBufferFlags.length != this._renderTextureCount) {
        this._clearedMaskBufferFlags.length = 0, this._clearedMaskBufferFlags = Array(this._renderTextureCount);
        for (let n = 0; n < this._clearedMaskBufferFlags.length; n++) this._clearedMaskBufferFlags[n] = !1;
      }
      for (let n = 0; n < this._clearedMaskBufferFlags.length; n++) this._clearedMaskBufferFlags[n] = !1;
      for (let n = 0; n < this._clippingContextListForMask.length; n++) {
        let o = this._clippingContextListForMask[n], l = o._allClippedDrawRect, h = o._layoutBounds, _ = 0.05, g = 0, u = 0, d;
        switch (i) {
          case N.DrawableObjectType_Drawable:
          default:
            d = e.getDrawableMaskBuffer(o._bufferIndex);
            break;
          case N.DrawableObjectType_Offscreen:
            d = e.getOffscreenMaskBuffer(o._bufferIndex);
        }
        if (this._currentMaskBuffer != d && (this._currentMaskBuffer.endDraw(), this._currentMaskBuffer = d, this._currentMaskBuffer.beginDraw(a), e.preDraw()), this._tmpBoundsOnModel.setRect(l), this._tmpBoundsOnModel.expand(l.width * _, l.height * _), g = h.width / this._tmpBoundsOnModel.width, u = h.height / this._tmpBoundsOnModel.height, this.createMatrixForMask(!1, h, g, u), o._matrixForMask.setMatrix(this._tmpMatrixForMask.getArray()), o._matrixForDraw.setMatrix(this._tmpMatrixForDraw.getArray()), i == N.DrawableObjectType_Offscreen) {
          let p = e.getMvpMatrix().getInvert();
          o._matrixForDraw.multiplyByMatrix(p);
        }
        let c = o._clippingIdCount;
        for (let p = 0; p < c; p++) {
          let f = o._clippingIdList[p];
          t.getDrawableDynamicFlagVertexPositionsDidChange(f) && (e.setIsCulling(t.getDrawableCulling(f) != 0), this._clearedMaskBufferFlags[o._bufferIndex] || (this.gl.clearColor(1, 1, 1, 1), this.gl.clear(this.gl.COLOR_BUFFER_BIT), this._clearedMaskBufferFlags[o._bufferIndex] = !0), e.setClippingContextBufferForMask(o), e.drawMeshWebGL(t, f));
        }
      }
      this._currentMaskBuffer.endDraw(), e.setClippingContextBufferForMask(null), this.gl.viewport(r[0], r[1], r[2], r[3]);
    }
  }
  getClippingMaskCount() {
    return this._clippingContextListForMask.length;
  }
}, Or = class extends wi {
  constructor(t, e, a) {
    super(e, a), this._owner = t;
  }
  getClippingManager() {
    return this._owner;
  }
  setGl(t) {
    this._owner.setGL(t);
  }
}, to = class {
  setGlEnable(t, e) {
    e ? this.gl.enable(t) : this.gl.disable(t);
  }
  setGlEnableVertexAttribArray(t, e) {
    e ? this.gl.enableVertexAttribArray(t) : this.gl.disableVertexAttribArray(t);
  }
  save() {
    if (this.gl == null) {
      T(`'gl' is null. WebGLRenderingContext is required.
Please call 'CubimRenderer_WebGL.startUp' function.`);
      return;
    }
    this._lastArrayBufferBinding = this.gl.getParameter(this.gl.ARRAY_BUFFER_BINDING), this._lastElementArrayBufferBinding = this.gl.getParameter(this.gl.ELEMENT_ARRAY_BUFFER_BINDING), this._lastProgram = this.gl.getParameter(this.gl.CURRENT_PROGRAM), this._lastActiveTexture = this.gl.getParameter(this.gl.ACTIVE_TEXTURE), this.gl.activeTexture(this.gl.TEXTURE1), this._lastTexture1Binding2D = this.gl.getParameter(this.gl.TEXTURE_BINDING_2D), this.gl.activeTexture(this.gl.TEXTURE0), this._lastTexture0Binding2D = this.gl.getParameter(this.gl.TEXTURE_BINDING_2D), this._lastVertexAttribArrayEnabled[0] = this.gl.getVertexAttrib(0, this.gl.VERTEX_ATTRIB_ARRAY_ENABLED), this._lastVertexAttribArrayEnabled[1] = this.gl.getVertexAttrib(1, this.gl.VERTEX_ATTRIB_ARRAY_ENABLED), this._lastVertexAttribArrayEnabled[2] = this.gl.getVertexAttrib(2, this.gl.VERTEX_ATTRIB_ARRAY_ENABLED), this._lastVertexAttribArrayEnabled[3] = this.gl.getVertexAttrib(3, this.gl.VERTEX_ATTRIB_ARRAY_ENABLED), this._lastScissorTest = this.gl.isEnabled(this.gl.SCISSOR_TEST), this._lastStencilTest = this.gl.isEnabled(this.gl.STENCIL_TEST), this._lastDepthTest = this.gl.isEnabled(this.gl.DEPTH_TEST), this._lastCullFace = this.gl.isEnabled(this.gl.CULL_FACE), this._lastBlend = this.gl.isEnabled(this.gl.BLEND), this._lastFrontFace = this.gl.getParameter(this.gl.FRONT_FACE), this._lastColorMask = this.gl.getParameter(this.gl.COLOR_WRITEMASK), this._lastBlending[0] = this.gl.getParameter(this.gl.BLEND_SRC_RGB), this._lastBlending[1] = this.gl.getParameter(this.gl.BLEND_DST_RGB), this._lastBlending[2] = this.gl.getParameter(this.gl.BLEND_SRC_ALPHA), this._lastBlending[3] = this.gl.getParameter(this.gl.BLEND_DST_ALPHA);
  }
  restore() {
    if (this.gl == null) {
      T(`'gl' is null. WebGLRenderingContext is required.
Please call 'CubimRenderer_WebGL.startUp' function.`);
      return;
    }
    this.gl.useProgram(this._lastProgram), this.setGlEnableVertexAttribArray(0, this._lastVertexAttribArrayEnabled[0]), this.setGlEnableVertexAttribArray(1, this._lastVertexAttribArrayEnabled[1]), this.setGlEnableVertexAttribArray(2, this._lastVertexAttribArrayEnabled[2]), this.setGlEnableVertexAttribArray(3, this._lastVertexAttribArrayEnabled[3]), this.setGlEnable(this.gl.SCISSOR_TEST, this._lastScissorTest), this.setGlEnable(this.gl.STENCIL_TEST, this._lastStencilTest), this.setGlEnable(this.gl.DEPTH_TEST, this._lastDepthTest), this.setGlEnable(this.gl.CULL_FACE, this._lastCullFace), this.setGlEnable(this.gl.BLEND, this._lastBlend), this.gl.frontFace(this._lastFrontFace), this.gl.colorMask(this._lastColorMask[0], this._lastColorMask[1], this._lastColorMask[2], this._lastColorMask[3]), this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this._lastArrayBufferBinding), this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER, this._lastElementArrayBufferBinding), this.gl.activeTexture(this.gl.TEXTURE1), this.gl.bindTexture(this.gl.TEXTURE_2D, this._lastTexture1Binding2D), this.gl.activeTexture(this.gl.TEXTURE0), this.gl.bindTexture(this.gl.TEXTURE_2D, this._lastTexture0Binding2D), this.gl.activeTexture(this._lastActiveTexture), this.gl.blendFuncSeparate(this._lastBlending[0], this._lastBlending[1], this._lastBlending[2], this._lastBlending[3]);
  }
  setGl(t) {
    this.gl = t;
  }
  constructor() {
    this._lastVertexAttribArrayEnabled = [
      ,
      ,
      ,
      ,
    ], this._lastColorMask = [
      ,
      ,
      ,
      ,
    ], this._lastBlending = [
      ,
      ,
      ,
      ,
    ];
  }
}, aa = class extends ye {
  initialize(t, e = 1) {
    t.isUsingMasking() && (this._drawableClippingManager = new ce(), this._drawableClippingManager.initializeForDrawable(t, e)), t.isUsingMaskingForOffscreen() && (this._offscreenClippingManager = new ce(), this._offscreenClippingManager.initializeForOffscreen(t, e)), z(this._sortedObjectsIndexList, t.getDrawableCount() + (t.getOffscreenCount ? t.getOffscreenCount() : 0), 0, !0), z(this._sortedObjectsTypeList, t.getDrawableCount() + (t.getOffscreenCount ? t.getOffscreenCount() : 0), 0, !0), super.initialize(t);
  }
  setupParentOffscreens(t, e) {
    let a;
    for (let r = 0; r < e; ++r) {
      a = null;
      let i = t.getOffscreenOwnerIndices()[r], s = t.getPartParentPartIndices()[i];
      for (; s != -1; ) {
        for (let n = 0; n < e; ++n) if (t.getOffscreenOwnerIndices()[this._offscreenList[n].getOffscreenIndex()] == s) {
          a = this._offscreenList[n];
          break;
        }
        if (a != null) break;
        s = t.getPartParentPartIndices()[s];
      }
      this._offscreenList[r].setParentPartOffscreen(a);
    }
  }
  bindTexture(t, e) {
    this._textures.set(t, e);
  }
  getBindedTextures() {
    return this._textures;
  }
  setClippingMaskBufferSize(t) {
    if (!this._model.isUsingMasking()) return;
    let e = this._drawableClippingManager.getRenderTextureCount();
    this._drawableClippingManager.release(), this._drawableClippingManager = void 0, this._drawableClippingManager = null, this._drawableClippingManager = new ce(), this._drawableClippingManager.setClippingMaskBufferSize(t), this._drawableClippingManager.initializeForDrawable(this.getModel(), e);
  }
  getClippingMaskBufferSize() {
    return this._model.isUsingMasking() ? this._drawableClippingManager.getClippingMaskBufferSize() : le;
  }
  getModelRenderTarget(t) {
    return this._modelRenderTargets[t];
  }
  getRenderTextureCount() {
    return this._model.isUsingMasking() ? this._drawableClippingManager.getRenderTextureCount() : le;
  }
  constructor(t, e) {
    super(t, e), this._clippingContextBufferForMask = null, this._clippingContextBufferForDraw = null, this._rendererProfile = new to(), this._textures = /* @__PURE__ */ new Map(), this._sortedObjectsIndexList = [], this._sortedObjectsTypeList = [], this._bufferData = {
      vertex: WebGLBuffer = null,
      uv: WebGLBuffer = null,
      index: WebGLBuffer = null
    }, this._modelRenderTargets = [], this._drawableMasks = [], this._currentFbo = null, this._drawableClippingManager = null, this._offscreenClippingManager = null, this._offscreenMasks = [], this._offscreenList = [];
  }
  release() {
    if (this._drawableClippingManager &&= (this._drawableClippingManager.release(), this._drawableClippingManager = void 0, null), this.gl != null) {
      this.gl.deleteBuffer(this._bufferData.vertex), this._bufferData.vertex = null, this.gl.deleteBuffer(this._bufferData.uv), this._bufferData.uv = null, this.gl.deleteBuffer(this._bufferData.index), this._bufferData.index = null, this._bufferData = null, this._textures = null;
      for (let t = 0; t < this._modelRenderTargets.length; t++) this._modelRenderTargets[t] != null && this._modelRenderTargets[t].isValid() && this._modelRenderTargets[t].destroyRenderTarget();
      this._modelRenderTargets.length = 0, this._modelRenderTargets = null;
      for (let t = 0; t < this._drawableMasks.length; t++) this._drawableMasks[t] != null && this._drawableMasks[t].isValid() && this._drawableMasks[t].destroyRenderTarget();
      this._drawableMasks.length = 0, this._drawableMasks = null;
      for (let t = 0; t < this._offscreenMasks.length; t++) this._offscreenMasks[t] != null && this._offscreenMasks[t].isValid() && this._offscreenMasks[t].destroyRenderTarget();
      this._offscreenMasks.length = 0, this._offscreenMasks = null;
      for (let t = 0; t < this._offscreenList.length; t++) this._offscreenList[t] != null && this._offscreenList[t].isValid() && this._offscreenList[t].destroyRenderTarget();
      this._offscreenList.length = 0, this._offscreenList = null, this._offscreenClippingManager = null, this._drawableClippingManager = null, this._clippingContextBufferForMask = null, this._clippingContextBufferForDraw = null, this._rendererProfile = null, this._sortedObjectsIndexList = null, this._sortedObjectsTypeList = null, this._currentFbo = null, this._model = null, this.gl = null;
    }
  }
  loadShaders(t = null) {
    if (this.gl == null) {
      T(`'gl' is null. WebGLRenderingContext is required.
Please call 'CubimRenderer_WebGL.startUp' function.`);
      return;
    }
    if (et.getInstance().getShader(this.gl)._shaderSets.length == 0 || !et.getInstance().getShader(this.gl)._isShaderLoaded) {
      let e = et.getInstance().getShader(this.gl);
      t != null && e.setShaderPath(t), e.generateShaders();
    }
  }
  doDrawModel(t = null) {
    this.loadShaders(t), this.beforeDrawModelRenderTarget();
    let e = this.gl.getParameter(this.gl.FRAMEBUFFER_BINDING), a = this.gl.getParameter(this.gl.VIEWPORT);
    if (this._drawableClippingManager != null) {
      this.preDraw();
      for (let r = 0; r < this._drawableClippingManager.getRenderTextureCount(); ++r) (this._drawableMasks[r].getBufferWidth() != this._drawableClippingManager.getClippingMaskBufferSize() || this._drawableMasks[r].getBufferHeight() != this._drawableClippingManager.getClippingMaskBufferSize()) && this._drawableMasks[r].createRenderTarget(this.gl, this._drawableClippingManager.getClippingMaskBufferSize(), this._drawableClippingManager.getClippingMaskBufferSize(), e);
      this.isUsingHighPrecisionMask() ? this._drawableClippingManager.setupMatrixForHighPrecision(this.getModel(), !1) : this._drawableClippingManager.setupClippingContext(this.getModel(), this, e, a, N.DrawableObjectType_Drawable);
    }
    if (this._offscreenClippingManager != null) {
      this.preDraw();
      for (let r = 0; r < this._offscreenClippingManager.getRenderTextureCount(); ++r) (this._offscreenMasks[r].getBufferWidth() != this._offscreenClippingManager.getClippingMaskBufferSize() || this._offscreenMasks[r].getBufferHeight() != this._offscreenClippingManager.getClippingMaskBufferSize()) && this._offscreenMasks[r].createRenderTarget(this.gl, this._offscreenClippingManager.getClippingMaskBufferSize(), this._offscreenClippingManager.getClippingMaskBufferSize(), e);
      this.isUsingHighPrecisionMask() ? this._offscreenClippingManager.setupMatrixForOffscreenHighPrecision(this.getModel(), !1, this.getMvpMatrix()) : this._offscreenClippingManager.setupClippingContext(this.getModel(), this, e, a, N.DrawableObjectType_Offscreen);
    }
    this.preDraw(), this.drawObjectLoop(e), this.afterDrawModelRenderTarget();
  }
  drawObjectLoop(t) {
    let e = this.getModel(), a = e.getDrawableCount(), r = a + e.getOffscreenCount(), i = e.getRenderOrders();
    this._currentOffscreen = null, this._currentFbo = t, this._modelRootFbo = t;
    for (let s = 0; s < r; ++s) {
      let n = i[s];
      s < a ? (this._sortedObjectsIndexList[n] = s, this._sortedObjectsTypeList[n] = N.DrawableObjectType_Drawable) : s < r && (this._sortedObjectsIndexList[n] = s - a, this._sortedObjectsTypeList[n] = N.DrawableObjectType_Offscreen);
    }
    for (let s = 0; s < r; ++s) {
      let n = this._sortedObjectsIndexList[s], o = this._sortedObjectsTypeList[s];
      this.renderObject(n, o);
    }
    for (; this._currentOffscreen != null; ) this.submitDrawToParentOffscreen(this._currentOffscreen.getOffscreenIndex(), N.DrawableObjectType_Offscreen);
  }
  renderObject(t, e) {
    switch (e) {
      case N.DrawableObjectType_Drawable:
        this.drawDrawable(t, this._modelRootFbo);
        break;
      case N.DrawableObjectType_Offscreen:
        this.addOffscreen(t);
        break;
      default:
        T("Unknown object type: " + e);
    }
  }
  drawDrawable(t, e) {
    if (!this.getModel().getDrawableDynamicFlagIsVisible(t)) return;
    this.submitDrawToParentOffscreen(t, N.DrawableObjectType_Drawable);
    let a = this._drawableClippingManager == null ? null : this._drawableClippingManager.getClippingContextListForDraw()[t];
    if (a != null && this.isUsingHighPrecisionMask()) {
      a._isUsing && (this.gl.viewport(0, 0, this._drawableClippingManager.getClippingMaskBufferSize(), this._drawableClippingManager.getClippingMaskBufferSize()), this.preDraw(), this.getDrawableMaskBuffer(a._bufferIndex).beginDraw(this._currentFbo), this.gl.clearColor(1, 1, 1, 1), this.gl.clear(this.gl.COLOR_BUFFER_BIT));
      {
        let r = a._clippingIdCount;
        for (let i = 0; i < r; i++) {
          let s = a._clippingIdList[i];
          this._model.getDrawableDynamicFlagVertexPositionsDidChange(s) && (this.setIsCulling(this._model.getDrawableCulling(s) != 0), this.setClippingContextBufferForMask(a), this.drawMeshWebGL(this._model, s));
        }
        this.getDrawableMaskBuffer(a._bufferIndex).endDraw(), this.setClippingContextBufferForMask(null), this.gl.viewport(0, 0, this._modelRenderTargetWidth, this._modelRenderTargetHeight), this.preDraw();
      }
    }
    this.setClippingContextBufferForDrawable(a), this.setIsCulling(this.getModel().getDrawableCulling(t)), this.drawMeshWebGL(this._model, t);
  }
  drawMeshWebGL(t, e) {
    if (this.isCulling() ? this.gl.enable(this.gl.CULL_FACE) : this.gl.disable(this.gl.CULL_FACE), this.gl.frontFace(this.gl.CCW), this.isGeneratingMask() ? et.getInstance().getShader(this.gl).setupShaderProgramForMask(this, t, e) : et.getInstance().getShader(this.gl).setupShaderProgramForDrawable(this, t, e), et.getInstance().getShader(this.gl)._isShaderLoaded) {
      {
        let a = t.getDrawableVertexIndexCount(e);
        this.gl.drawElements(this.gl.TRIANGLES, a, this.gl.UNSIGNED_SHORT, 0);
      }
      this.gl.useProgram(null), this.setClippingContextBufferForDrawable(null), this.setClippingContextBufferForMask(null);
    }
  }
  submitDrawToParentOffscreen(t, e) {
    if (this._currentOffscreen == null || t == le) return;
    let a = this.getModel().getOffscreenOwnerIndices()[this._currentOffscreen.getOffscreenIndex()];
    if (a == le) return;
    let r = -1;
    switch (e) {
      case N.DrawableObjectType_Drawable:
        r = this.getModel().getDrawableParentPartIndex(t);
        break;
      case N.DrawableObjectType_Offscreen:
        r = this.getModel().getPartParentPartIndices()[this.getModel().getOffscreenOwnerIndices()[t]];
        break;
      default:
        return;
    }
    for (; r != -1; ) {
      if (r == a) return;
      r = this.getModel().getPartParentPartIndices()[r];
    }
    this.drawOffscreen(this._currentOffscreen), this.submitDrawToParentOffscreen(t, e);
  }
  addOffscreen(t) {
    if (this._currentOffscreen != null && this._currentOffscreen.getOffscreenIndex() != t) {
      let i = !1, s = this.getModel().getOffscreenOwnerIndices()[t], n = this.getModel().getPartParentPartIndices()[s], o = this._currentOffscreen.getOffscreenIndex(), l = this.getModel().getOffscreenOwnerIndices()[o];
      for (; n != -1; ) {
        if (n == l) {
          i = !0;
          break;
        }
        n = this.getModel().getPartParentPartIndices()[n];
      }
      i || this.submitDrawToParentOffscreen(t, N.DrawableObjectType_Offscreen);
    }
    let e = this._offscreenList[t];
    e.getRenderTexture() == null || e.getBufferWidth() != this._modelRenderTargetWidth || e.getBufferHeight() != this._modelRenderTargetHeight || e.getUsingRenderTextureState() ? e.setOffscreenRenderTarget(this.gl, this._modelRenderTargetWidth, this._modelRenderTargetHeight, this._currentFbo) : e.startUsingRenderTexture();
    let a = e.getParentPartOffscreen();
    e.setOldOffscreen(a);
    let r = null;
    a != null && (r = a.getRenderTexture()), r ??= this._modelRootFbo, e.beginDraw(r), this.gl.viewport(0, 0, this._modelRenderTargetWidth, this._modelRenderTargetHeight), e.clear(0, 0, 0, 0), this._currentOffscreen = e, this._currentFbo = e.getRenderTexture();
  }
  drawOffscreen(t) {
    let e = t.getOffscreenIndex(), a = this._offscreenClippingManager == null ? null : this._offscreenClippingManager.getClippingContextListForOffscreen()[e];
    if (a != null && this.isUsingHighPrecisionMask()) {
      a._isUsing && (this.gl.viewport(0, 0, this._offscreenClippingManager.getClippingMaskBufferSize(), this._offscreenClippingManager.getClippingMaskBufferSize()), this.preDraw(), this.getOffscreenMaskBuffer(a._bufferIndex).beginDraw(this._currentFbo), this.gl.clearColor(1, 1, 1, 1), this.gl.clear(this.gl.COLOR_BUFFER_BIT));
      {
        let r = a._clippingIdCount;
        for (let i = 0; i < r; i++) {
          let s = a._clippingIdList[i];
          this.getModel().getDrawableDynamicFlagVertexPositionsDidChange(s) && (this.setIsCulling(this.getModel().getDrawableCulling(s) != 0), this.setClippingContextBufferForMask(a), this.drawMeshWebGL(this.getModel(), s));
        }
      }
      this.getOffscreenMaskBuffer(a._bufferIndex).endDraw(), this.setClippingContextBufferForMask(null), this.gl.viewport(0, 0, this._modelRenderTargetWidth, this._modelRenderTargetHeight), this.preDraw();
    }
    this.setClippingContextBufferForOffscreen(a), this.setIsCulling(this._model.getOffscreenCulling(e) != 0), this.drawOffscreenWebGL(this.getModel(), t);
  }
  drawOffscreenWebGL(t, e) {
    this.isCulling() ? this.gl.enable(this.gl.CULL_FACE) : this.gl.disable(this.gl.CULL_FACE), this.gl.frontFace(this.gl.CCW), et.getInstance().getShader(this.gl).setupShaderProgramForOffscreen(this, t, e), e.endDraw(), this._currentOffscreen = this._currentOffscreen.getOldOffscreen(), this._currentFbo = e.getOldFBO(), this._currentFbo ?? (this._currentOffscreen = this._modelRenderTargets[0], this._currentFbo = this._modelRenderTargets[0].getRenderTexture(), this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, this._currentFbo));
    {
      let a = this.gl.createBuffer();
      this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER, a), this.gl.bufferData(this.gl.ELEMENT_ARRAY_BUFFER, he, this.gl.STATIC_DRAW), this.gl.drawElements(this.gl.TRIANGLES, he.length, this.gl.UNSIGNED_SHORT, 0), this.gl.deleteBuffer(a);
    }
    e.stopUsingRenderTexture(), this.gl.useProgram(null), this.setClippingContextBufferForMask(null), this.setClippingContextBufferForOffscreen(null);
  }
  saveProfile() {
    this._rendererProfile.save();
  }
  restoreProfile() {
    this._rendererProfile.restore();
  }
  beforeDrawModelRenderTarget() {
    if (this._modelRenderTargets.length != 0) {
      for (let t = 0; t < this._modelRenderTargets.length; ++t) (this._modelRenderTargets[t].getBufferWidth() != this._modelRenderTargetWidth || this._modelRenderTargets[t].getBufferHeight() != this._modelRenderTargetHeight) && this._modelRenderTargets[t].createRenderTarget(this.gl, this._modelRenderTargetWidth, this._modelRenderTargetHeight, this._currentFbo);
      this._modelRenderTargets[0].beginDraw(), this._modelRenderTargets[0].clear(0, 0, 0, 0);
    }
  }
  afterDrawModelRenderTarget() {
    if (this._modelRenderTargets.length != 0) {
      if (this._modelRenderTargets[0].endDraw(), et.getInstance().getShader(this.gl).setupShaderProgramForOffscreenRenderTarget(this), et.getInstance().getShader(this.gl)._isShaderLoaded) {
        let t = this.gl.createBuffer();
        this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER, t), this.gl.bufferData(this.gl.ELEMENT_ARRAY_BUFFER, he, this.gl.STATIC_DRAW), this.gl.drawElements(this.gl.TRIANGLES, he.length, this.gl.UNSIGNED_SHORT, 0), this.gl.deleteBuffer(t);
      }
      this.gl.useProgram(null);
    }
  }
  getOffscreenMaskBuffer(t) {
    return this._offscreenMasks[t];
  }
  static doStaticRelease() {
    et.deleteInstance();
  }
  setRenderState(t, e) {
    this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, t), this.gl.viewport(e[0], e[1], e[2], e[3]), (this._modelRenderTargetWidth != e[2] || this._modelRenderTargetHeight != e[3]) && (this._modelRenderTargetWidth = e[2], this._modelRenderTargetHeight = e[3]);
  }
  preDraw() {
    if (this.gl.disable(this.gl.SCISSOR_TEST), this.gl.disable(this.gl.STENCIL_TEST), this.gl.disable(this.gl.DEPTH_TEST), this.gl.frontFace(this.gl.CW), this.gl.enable(this.gl.BLEND), this.gl.colorMask(!0, !0, !0, !0), this.gl.bindBuffer(this.gl.ARRAY_BUFFER, null), this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER, null), this.getAnisotropy() > 0 && this._extension) for (let t = 0; t < this._textures.size; ++t) this.gl.bindTexture(this.gl.TEXTURE_2D, this._textures.get(t)), this.gl.texParameterf(this.gl.TEXTURE_2D, this._extension.TEXTURE_MAX_ANISOTROPY_EXT, this.getAnisotropy());
  }
  getDrawableMaskBuffer(t) {
    return this._drawableMasks[t];
  }
  setClippingContextBufferForMask(t) {
    this._clippingContextBufferForMask = t;
  }
  getClippingContextBufferForMask() {
    return this._clippingContextBufferForMask;
  }
  setClippingContextBufferForDrawable(t) {
    this._clippingContextBufferForDraw = t;
  }
  getClippingContextBufferForDrawable() {
    return this._clippingContextBufferForDraw;
  }
  setClippingContextBufferForOffscreen(t) {
    this._clippingContextBufferForOffscreen = t;
  }
  getClippingContextBufferForOffscreen() {
    return this._clippingContextBufferForOffscreen;
  }
  isGeneratingMask() {
    return this.getClippingContextBufferForMask() != null;
  }
  startUp(t) {
    if (this.gl = t, this._drawableClippingManager && this._drawableClippingManager.setGL(t), this._offscreenClippingManager && this._offscreenClippingManager.setGL(t), et.getInstance().setGlContext(t), this._rendererProfile.setGl(t), this._extension = this.gl.getExtension("EXT_texture_filter_anisotropic") || this.gl.getExtension("WEBKIT_EXT_texture_filter_anisotropic") || this.gl.getExtension("MOZ_EXT_texture_filter_anisotropic"), this._model.isUsingMasking()) {
      this._drawableMasks.length = this._drawableClippingManager.getRenderTextureCount();
      for (let e = 0; e < this._drawableMasks.length; ++e) {
        let a = new Mt();
        a.createRenderTarget(this.gl, this._drawableClippingManager.getClippingMaskBufferSize(), this._drawableClippingManager.getClippingMaskBufferSize(), this._currentFbo), this._drawableMasks[e] = a;
      }
    }
    if (this._model.isBlendModeEnabled()) {
      this._modelRenderTargets.length = 0, this._modelRenderTargets.length = 3;
      for (let a = 0; a < 3; ++a) {
        let r = new Ha();
        r.createRenderTarget(this.gl, this._modelRenderTargetWidth, this._modelRenderTargetHeight, this._currentFbo), this._modelRenderTargets[a] = r;
      }
      if (this._model.isUsingMaskingForOffscreen()) {
        this._offscreenMasks.length = this._offscreenClippingManager.getRenderTextureCount();
        for (let a = 0; a < this._offscreenMasks.length; ++a) {
          let r = new Mt();
          r.createRenderTarget(this.gl, this._offscreenClippingManager.getClippingMaskBufferSize(), this._offscreenClippingManager.getClippingMaskBufferSize(), this._currentFbo), this._offscreenMasks[a] = r;
        }
      }
      let e = this._model.getOffscreenCount();
      if (e > 0) {
        this._offscreenList = Array(e);
        for (let a = 0; a < e; ++a) {
          let r = new Ha();
          r.setOffscreenIndex(a), this._offscreenList[a] = r;
        }
        this.setupParentOffscreens(this._model, e);
      }
    }
    this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, this._currentFbo);
  }
};
ye.staticRelease = () => {
  aa.doStaticRelease();
};
var eo;
(function(t) {
  t.CubismClippingContext = Or, t.CubismClippingManager_WebGL = ce, t.CubismRenderer_WebGL = aa;
})(eo ||= {});
var be = class Er {
  static create(e, a) {
    let r = null;
    if (a && !this.hasMocConsistency(e)) return T("Inconsistent MOC3."), r;
    let i = Live2DCubismCore.Moc.fromArrayBuffer(e);
    return i && (r = new Er(i), r._mocVersion = Live2DCubismCore.Version.csmGetMocVersion(e)), r;
  }
  static delete(e) {
    e._moc._release(), e._moc = null, e = null;
  }
  createModel() {
    let e = null, a = Live2DCubismCore.Model.fromMoc(this._moc);
    return a && (e = new Qa(a), e.initialize(), ++this._modelCount), e;
  }
  deleteModel(e) {
    e != null && (e.release(), e = null, --this._modelCount);
  }
  constructor(e) {
    this._moc = e, this._modelCount = 0, this._mocVersion = 0;
  }
  release() {
    G(this._modelCount == 0), this._moc._release(), this._moc = null;
  }
  getLatestMocVersion() {
    return Live2DCubismCore.Version.csmGetLatestMocVersion();
  }
  getMocVersion() {
    return this._mocVersion;
  }
  static getMocVersionFromBuffer(e) {
    return Live2DCubismCore.Version.csmGetMocVersion(e);
  }
  static hasMocConsistency(e) {
    return Live2DCubismCore.Moc.prototype.hasMocConsistency(e) === 1;
  }
}, ao;
(function(t) {
  t.CubismMoc = be;
})(ao ||= {});
var Aa = "Meta", ro = "UserDataCount", io = "TotalUserDataSize", Ee = "UserData", so = "Target", no = "Id", oo = "Value", Rr = class {
  constructor(t, e) {
    this._json = Z.create(t, e);
  }
  release() {
    Z.delete(this._json);
  }
  getUserDataCount() {
    return this._json.getRoot().getValueByString(Aa).getValueByString(ro).toInt();
  }
  getTotalUserDataSize() {
    return this._json.getRoot().getValueByString(Aa).getValueByString(io).toInt();
  }
  getUserDataTargetType(t) {
    return this._json.getRoot().getValueByString(Ee).getValueByIndex(t).getValueByString(so).getRawString();
  }
  getUserDataId(t) {
    return L.getIdManager().getId(this._json.getRoot().getValueByString(Ee).getValueByIndex(t).getValueByString(no).getRawString());
  }
  getUserDataValue(t) {
    return this._json.getRoot().getValueByString(Ee).getValueByIndex(t).getValueByString(oo).getRawString();
  }
}, lo;
(function(t) {
  t.CubismModelUserDataJson = Rr;
})(lo ||= {});
var ho = "ArtMesh", Br = class {
}, je = class Dr {
  static create(e, a) {
    let r = new Dr();
    return r.parseUserData(e, a), r;
  }
  static delete(e) {
    e != null && (e.release(), e = null);
  }
  getArtMeshUserDatas() {
    return this._artMeshUserDataNode;
  }
  parseUserData(e, a) {
    let r = new Rr(e, a);
    if (!r) {
      r.release(), r = void 0;
      return;
    }
    let i = L.getIdManager().getId(ho), s = r.getUserDataCount(), n = this._userDataNodes.length;
    this._userDataNodes.length = s;
    for (let o = 0; o < s; o++) {
      let l = new Br();
      l.targetId = r.getUserDataId(o), l.targetType = L.getIdManager().getId(r.getUserDataTargetType(o)), l.value = r.getUserDataValue(o), this._userDataNodes[n++] = l, l.targetType == i && this._artMeshUserDataNode.push(l);
    }
    r.release(), r = void 0;
  }
  constructor() {
    this._userDataNodes = [], this._artMeshUserDataNode = [];
  }
  release() {
    for (let e = 0; e < this._userDataNodes.length; ++e) this._userDataNodes[e] = null;
    this._userDataNodes = null;
  }
}, uo;
(function(t) {
  t.CubismModelUserData = je, t.CubismModelUserDataNode = Br;
})(uo ||= {});
var Hr = class Ar {
  isInitialized() {
    return this._initialized;
  }
  setInitialized(e) {
    this._initialized = e;
  }
  isUpdating() {
    return this._updating;
  }
  setUpdating(e) {
    this._updating = e;
  }
  setDragging(e, a) {
    this._dragManager.set(e, a);
  }
  getModelMatrix() {
    return this._modelMatrix;
  }
  setRenderTargetSize(e, a) {
    this._renderer && this._renderer.setRenderTargetSize(e, a);
  }
  setOpacity(e) {
    this._opacity = e;
  }
  getOpacity() {
    return this._opacity;
  }
  loadModel(e, a = !1) {
    if (this._moc = be.create(e, a), this._moc == null) {
      T("Failed to CubismMoc.create().");
      return;
    }
    if (this._model = this._moc.createModel(), this._model == null) {
      T("Failed to CreateModel().");
      return;
    }
    this._model.saveParameters(), this._modelMatrix = new nr(this._model.getCanvasWidth(), this._model.getCanvasHeight());
  }
  loadMotion(e, a, r, i, s, n, o, l, h = !1) {
    if (e == null || a == 0) return T("Failed to loadMotion()."), null;
    let _ = yr.create(e, a, i, s, h);
    if (_ == null) return T("Failed to create motion from buffer in LoadMotion()"), null;
    if (n) {
      let g = n.getMotionFadeInTimeValue(o, l);
      g >= 0 && _.setFadeInTime(g);
      let u = n.getMotionFadeOutTimeValue(o, l);
      u >= 0 && _.setFadeOutTime(u);
    }
    return _;
  }
  loadExpression(e, a, r) {
    return e == null || a == 0 ? (T("Failed to loadExpression()."), null) : Jt.create(e, a);
  }
  loadPose(e, a) {
    if (e == null || a == 0) {
      T("Failed to loadPose().");
      return;
    }
    this._pose = Ue.create(e, a);
  }
  loadUserData(e, a) {
    if (e == null || a == 0) {
      T("Failed to loadUserData().");
      return;
    }
    this._modelUserData = je.create(e, a);
  }
  loadPhysics(e, a) {
    if (e == null || a == 0) {
      T("Failed to loadPhysics().");
      return;
    }
    this._physics = Ye.create(e, a);
  }
  isHit(e, a, r) {
    let i = this._model.getDrawableIndex(e);
    if (i < 0) return !1;
    let s = this._model.getDrawableVertexCount(i), n = this._model.getDrawableVertices(i), o = n[0], l = n[0], h = n[1], _ = n[1];
    for (let d = 1; d < s; ++d) {
      let c = n[ut.vertexOffset + d * ut.vertexStep], p = n[ut.vertexOffset + d * ut.vertexStep + 1];
      c < o && (o = c), c > l && (l = c), p < h && (h = p), p > _ && (_ = p);
    }
    let g = this._modelMatrix.invertTransformX(a), u = this._modelMatrix.invertTransformY(r);
    return o <= g && g <= l && h <= u && u <= _;
  }
  getModel() {
    return this._model;
  }
  getMocVersionFromBuffer(e) {
    return be.getMocVersionFromBuffer(e);
  }
  getRenderer() {
    return this._renderer;
  }
  createRenderer(e, a, r = 1) {
    this._renderer && this.deleteRenderer(), this._renderer = new aa(e, a), this._renderer.initialize(this._model, r);
  }
  deleteRenderer() {
    this._renderer != null && (this._renderer.release(), this._renderer = null);
  }
  motionEventFired(e) {
    _t("{0}", e);
  }
  static cubismDefaultMotionEventCallback(e, a, r) {
    r?.motionEventFired(a);
  }
  constructor() {
    this._moc = null, this._model = null, this._motionManager = null, this._expressionManager = null, this._eyeBlink = null, this._breath = null, this._modelMatrix = null, this._pose = null, this._dragManager = null, this._physics = null, this._modelUserData = null, this._initialized = !1, this._updating = !1, this._opacity = 1, this._mocConsistency = !1, this._debugMode = !1, this._renderer = null, this._motionManager = new Mr(), this._motionManager.setEventCallback(Ar.cubismDefaultMotionEventCallback, this), this._expressionManager = new ur(), this._dragManager = new or();
  }
  release() {
    this._motionManager != null && (this._motionManager.release(), this._motionManager = null), this._expressionManager != null && (this._expressionManager.release(), this._expressionManager = null), this._moc != null && (this._moc.deleteModel(this._model), this._moc.release(), this._moc = null), this._modelMatrix = null, Ue.delete(this._pose), qe.delete(this._eyeBlink), We.delete(this._breath), this._dragManager = null, Ye.delete(this._physics), je.delete(this._modelUserData), this.deleteRenderer();
  }
}, _o;
(function(t) {
  t.CubismUserModel = Hr;
})(_o ||= {});
var Bt = /* @__PURE__ */ function(t) {
  return t[t.CubismUpdateOrder_EyeBlink = 200] = "CubismUpdateOrder_EyeBlink", t[t.CubismUpdateOrder_Expression = 300] = "CubismUpdateOrder_Expression", t[t.CubismUpdateOrder_Drag = 400] = "CubismUpdateOrder_Drag", t[t.CubismUpdateOrder_Breath = 500] = "CubismUpdateOrder_Breath", t[t.CubismUpdateOrder_Physics = 600] = "CubismUpdateOrder_Physics", t[t.CubismUpdateOrder_LipSync = 700] = "CubismUpdateOrder_LipSync", t[t.CubismUpdateOrder_Pose = 800] = "CubismUpdateOrder_Pose", t[t.CubismUpdateOrder_Max = 2 ** 53 - 1] = "CubismUpdateOrder_Max", t;
}({}), yt = class {
  static sortFunction(t, e) {
    if (!t || !e) {
      if (!t && !e) return 0;
      if (!t) return 1;
      if (!e) return -1;
    }
    return t.getExecutionOrder() - e.getExecutionOrder();
  }
  constructor(t = 0) {
    this._changeListeners = [], this._executionOrder = t;
  }
  getExecutionOrder() {
    return this._executionOrder;
  }
  setExecutionOrder(t) {
    this._executionOrder !== t && (this._executionOrder = t, this.notifyChangeListeners());
  }
  addChangeListener(t) {
    t && this._changeListeners.indexOf(t) === -1 && this._changeListeners.push(t);
  }
  removeChangeListener(t) {
    let e = this._changeListeners.indexOf(t);
    e >= 0 && this._changeListeners.splice(e, 1);
  }
  notifyChangeListeners() {
    for (let t of this._changeListeners) t.onUpdaterChanged(this);
  }
}, go;
(function(t) {
  t.ICubismUpdater = yt;
})(go ||= {});
var Nr = class {
  constructor() {
    this._cubismUpdatableList = [], this._needsSort = !1;
  }
  release() {
    for (let t of this._cubismUpdatableList) t && t.removeChangeListener(this);
    this._cubismUpdatableList.length = 0;
  }
  addUpdatableList(t) {
    t && (this.hasUpdatable(t) || (this._cubismUpdatableList.push(t), t.addChangeListener(this), this._needsSort = !0));
  }
  removeUpdatableList(t) {
    if (!t) return !1;
    let e = this._cubismUpdatableList.indexOf(t);
    return e >= 0 && (this._cubismUpdatableList.splice(e, 1), t.removeChangeListener(this), !0);
  }
  sortUpdatableList() {
    this._cubismUpdatableList.sort(yt.sortFunction), this._needsSort = !1;
  }
  onLateUpdate(t, e) {
    if (t) {
      this._needsSort && this.sortUpdatableList();
      for (let a = 0; a < this._cubismUpdatableList.length; ++a) {
        let r = this._cubismUpdatableList[a];
        r && r.onLateUpdate(t, e);
      }
    }
  }
  getUpdatableCount() {
    return this._cubismUpdatableList.length;
  }
  getUpdatable(t) {
    return t < 0 || t >= this._cubismUpdatableList.length ? null : this._cubismUpdatableList[t];
  }
  hasUpdatable(t) {
    return this._cubismUpdatableList.indexOf(t) >= 0;
  }
  clearUpdatableList() {
    for (let t of this._cubismUpdatableList) t && t.removeChangeListener(this);
    this._cubismUpdatableList.length = 0, this._needsSort = !1;
  }
  onUpdaterChanged(t) {
    this._needsSort = !0;
  }
}, co;
(function(t) {
  t.CubismUpdateScheduler = Nr;
})(co ||= {});
var Fr = class extends yt {
  constructor(t, e) {
    super(e ?? Bt.CubismUpdateOrder_Breath), this._breath = t;
  }
  onLateUpdate(t, e) {
    t && this._breath.updateParameters(t, e);
  }
}, fo;
(function(t) {
  t.CubismBreathUpdater = Fr;
})(fo ||= {});
var Vr = class extends yt {
  constructor(t, e, a) {
    super(a ?? Bt.CubismUpdateOrder_Drag), this._look = t, this._dragManager = e;
  }
  onLateUpdate(t, e) {
    if (!t) return;
    this._dragManager.update(e);
    let a = this._dragManager.getX(), r = this._dragManager.getY();
    this._look.updateParameters(t, a, r);
  }
}, po;
(function(t) {
  t.CubismLookUpdater = Vr;
})(po ||= {});
var Ur = class extends yt {
  constructor(t, e, a) {
    super(a ?? Bt.CubismUpdateOrder_EyeBlink), this._motionUpdated = t, this._eyeBlink = e;
  }
  onLateUpdate(t, e) {
    t && (this._motionUpdated() || this._eyeBlink.updateParameters(t, e));
  }
}, mo;
(function(t) {
  t.CubismEyeBlinkUpdater = Ur;
})(mo ||= {});
var kr = class extends yt {
  constructor(t, e) {
    super(e ?? Bt.CubismUpdateOrder_Expression), this._expressionManager = t;
  }
  onLateUpdate(t, e) {
    t && this._expressionManager.updateMotion(t, e);
  }
}, bo;
(function(t) {
  t.CubismExpressionUpdater = kr;
})(bo ||= {});
var Jr = class extends yt {
  constructor(t, e) {
    super(e ?? Bt.CubismUpdateOrder_Physics), this._physics = t;
  }
  onLateUpdate(t, e) {
    t && this._physics.evaluate(t, e);
  }
}, vo;
(function(t) {
  t.CubismPhysicsUpdater = Jr;
})(vo ||= {});
var Kr = class extends yt {
  constructor(t, e) {
    super(e ?? Bt.CubismUpdateOrder_Pose), this._pose = t;
  }
  onLateUpdate(t, e) {
    t && this._pose.updateParameters(t, e);
  }
}, yo;
(function(t) {
  t.CubismPoseUpdater = Kr;
})(yo ||= {});
var Gr = class extends yt {
  constructor(t, e, a) {
    super(a ?? Bt.CubismUpdateOrder_LipSync), this._lipSyncIds = [...t], this._audioProvider = e;
  }
  onLateUpdate(t, e) {
    if (t && this._audioProvider && this._audioProvider.update(e)) {
      let a = this._audioProvider.getParameter();
      for (let r = 0; r < this._lipSyncIds.length; r++) t.addParameterValueById(this._lipSyncIds[r], a);
    }
  }
  setAudioProvider(t) {
    this._audioProvider = t;
  }
  getAudioProvider() {
    return this._audioProvider;
  }
}, So;
(function(t) {
  t.CubismLipSyncUpdater = Gr;
})(So ||= {});
var Yr = class {
  constructor() {
  }
}, Mo;
(function(t) {
  t.IParameterProvider = Yr;
})(Mo ||= {});
var $o = class extends Yr {
  update(t) {
    let e, a;
    if (this._pcmData == null || this._sampleOffset >= this._wavFileInfo._samplesPerChannel) return this._lastRms = 0, !1;
    this._userTimeSeconds += t ?? 1 / 60, e = Math.floor(this._userTimeSeconds * this._wavFileInfo._samplingRate), e > this._wavFileInfo._samplesPerChannel && (e = this._wavFileInfo._samplesPerChannel), a = 0;
    for (let r = 0; r < this._wavFileInfo._numberOfChannels; r++) for (let i = this._sampleOffset; i < e; i++) {
      let s = this._pcmData[r][i];
      a += s * s;
    }
    return a = Math.sqrt(a / (this._wavFileInfo._numberOfChannels * (e - this._sampleOffset))), this._lastRms = a, this._sampleOffset = e, !0;
  }
  start(t) {
    this._sampleOffset = 0, this._userTimeSeconds = 0, this._lastRms = 0, this.loadWavFile(t);
  }
  getParameter() {
    return this.getRms();
  }
  getRms() {
    return this._lastRms;
  }
  loadWavFile(t) {
    return new Promise((e) => {
      let a = !1;
      this._pcmData != null && this.releasePcmData();
      let r = async () => fetch(t).then((i) => i.arrayBuffer());
      (async () => {
        if (this._byteReader._fileByte = await r(), this._byteReader._fileDataView = new DataView(this._byteReader._fileByte), this._byteReader._fileSize = this._byteReader._fileByte.byteLength, this._byteReader._readOffset = 0, this._byteReader._fileByte == null || this._byteReader._fileSize < 4) {
          e(!1);
          return;
        }
        this._wavFileInfo._fileName = t;
        try {
          if (!this._byteReader.getCheckSignature("RIFF")) throw a = !1, Error('Cannot find Signeture "RIFF".');
          if (this._byteReader.get32LittleEndian(), !this._byteReader.getCheckSignature("WAVE")) throw a = !1, Error('Cannot find Signeture "WAVE".');
          if (!this._byteReader.getCheckSignature("fmt ")) throw a = !1, Error('Cannot find Signeture "fmt".');
          let i = this._byteReader.get32LittleEndian();
          if (this._byteReader.get16LittleEndian() != 1) throw a = !1, Error("File is not linear PCM.");
          for (this._wavFileInfo._numberOfChannels = this._byteReader.get16LittleEndian(), this._wavFileInfo._samplingRate = this._byteReader.get32LittleEndian(), this._byteReader.get32LittleEndian(), this._byteReader.get16LittleEndian(), this._wavFileInfo._bitsPerSample = this._byteReader.get16LittleEndian(), i > 16 && (this._byteReader._readOffset += i - 16); !this._byteReader.getCheckSignature("data") && this._byteReader._readOffset < this._byteReader._fileSize; ) this._byteReader._readOffset += this._byteReader.get32LittleEndian() + 4;
          if (this._byteReader._readOffset >= this._byteReader._fileSize) throw a = !1, Error('Cannot find "data" Chunk.');
          {
            let s = this._byteReader.get32LittleEndian();
            this._wavFileInfo._samplesPerChannel = s * 8 / (this._wavFileInfo._bitsPerSample * this._wavFileInfo._numberOfChannels);
          }
          this._pcmData = Array(this._wavFileInfo._numberOfChannels);
          for (let s = 0; s < this._wavFileInfo._numberOfChannels; s++) this._pcmData[s] = new Float32Array(this._wavFileInfo._samplesPerChannel);
          for (let s = 0; s < this._wavFileInfo._samplesPerChannel; s++) for (let n = 0; n < this._wavFileInfo._numberOfChannels; n++) this._pcmData[n][s] = this.getPcmSample();
          a = !0, e(a);
        } catch (i) {
          console.log(i);
        }
      })().then(() => {
        e(a);
      });
    });
  }
  getPcmSample() {
    let t;
    switch (this._wavFileInfo._bitsPerSample) {
      case 8:
        t = this._byteReader.get8() - 128, t <<= 24;
        break;
      case 16:
        t = this._byteReader.get16LittleEndian() << 16;
        break;
      case 24:
        t = this._byteReader.get24LittleEndian() << 8;
        break;
      default:
        t = 0;
    }
    return t / 2147483647;
  }
  getPcmDataChannel(t) {
    return !this._pcmData || !(t < this._pcmData.length) ? null : Float32Array.from(this._pcmData[t]);
  }
  getWavSamplingRate() {
    return !this._wavFileInfo || this._wavFileInfo._samplingRate < 1 ? null : this._wavFileInfo._samplingRate;
  }
  releasePcmData() {
    for (let t = 0; t < this._wavFileInfo._numberOfChannels; t++) this._pcmData[t] = null;
    delete this._pcmData, this._pcmData = null;
  }
  constructor() {
    super(), this.loadFiletoBytes = (t, e) => {
      this._byteReader._fileByte = t, this._byteReader._fileDataView = new DataView(this._byteReader._fileByte), this._byteReader._fileSize = e;
    }, this._pcmData = null, this._userTimeSeconds = 0, this._lastRms = 0, this._sampleOffset = 0, this._wavFileInfo = new Co(), this._byteReader = new Io();
  }
}, Co = class {
  constructor() {
    this._fileName = "", this._numberOfChannels = 0, this._bitsPerSample = 0, this._samplingRate = 0, this._samplesPerChannel = 0;
  }
}, Io = class {
  constructor() {
    this._fileByte = null, this._fileDataView = null, this._fileSize = 0, this._readOffset = 0;
  }
  get8() {
    let t = this._fileDataView.getUint8(this._readOffset);
    return this._readOffset++, t;
  }
  get16LittleEndian() {
    let t = this._fileDataView.getUint8(this._readOffset + 1) << 8 | this._fileDataView.getUint8(this._readOffset);
    return this._readOffset += 2, t;
  }
  get24LittleEndian() {
    let t = this._fileDataView.getUint8(this._readOffset + 2) << 16 | this._fileDataView.getUint8(this._readOffset + 1) << 8 | this._fileDataView.getUint8(this._readOffset);
    return this._readOffset += 3, t;
  }
  get32LittleEndian() {
    let t = this._fileDataView.getUint8(this._readOffset + 3) << 24 | this._fileDataView.getUint8(this._readOffset + 2) << 16 | this._fileDataView.getUint8(this._readOffset + 1) << 8 | this._fileDataView.getUint8(this._readOffset);
    return this._readOffset += 4, t;
  }
  getCheckSignature(t) {
    let e = /* @__PURE__ */ new Uint8Array(4), a = new TextEncoder().encode(t);
    if (t.length != 4) return !1;
    for (let r = 0; r < 4; r++) e[r] = this.get8();
    return e[0] == a[0] && e[1] == a[1] && e[2] == a[2] && e[3] == a[3];
  }
}, O = /* @__PURE__ */ function(t) {
  return t[t.LoadAssets = 0] = "LoadAssets", t[t.LoadModel = 1] = "LoadModel", t[t.WaitLoadModel = 2] = "WaitLoadModel", t[t.LoadExpression = 3] = "LoadExpression", t[t.WaitLoadExpression = 4] = "WaitLoadExpression", t[t.LoadPhysics = 5] = "LoadPhysics", t[t.WaitLoadPhysics = 6] = "WaitLoadPhysics", t[t.LoadPose = 7] = "LoadPose", t[t.WaitLoadPose = 8] = "WaitLoadPose", t[t.SetupEyeBlink = 9] = "SetupEyeBlink", t[t.SetupBreath = 10] = "SetupBreath", t[t.LoadUserData = 11] = "LoadUserData", t[t.WaitLoadUserData = 12] = "WaitLoadUserData", t[t.SetupEyeBlinkIds = 13] = "SetupEyeBlinkIds", t[t.SetupLipSyncIds = 14] = "SetupLipSyncIds", t[t.SetupLook = 15] = "SetupLook", t[t.SetupLayout = 16] = "SetupLayout", t[t.LoadMotion = 17] = "LoadMotion", t[t.WaitLoadMotion = 18] = "WaitLoadMotion", t[t.CompleteInitialize = 19] = "CompleteInitialize", t[t.CompleteSetupModel = 20] = "CompleteSetupModel", t[t.LoadTexture = 21] = "LoadTexture", t[t.WaitLoadTexture = 22] = "WaitLoadTexture", t[t.CompleteSetup = 23] = "CompleteSetup", t;
}(O || {});
function Na(t) {
  try {
    let e = new TextDecoder().decode(t), a = JSON.parse(e), r = a?.Curves;
    if (!r || !a.Meta) return t;
    let i = 0, s = 0;
    for (let n of r) {
      let o = n.Segments, l = 0;
      for (s++, l += 2; l < o.length; ) {
        let h = o[l];
        i++, h === 1 ? (s += 3, l += 7) : (s += 1, l += 3);
      }
    }
    return a.Meta.TotalSegmentCount = i, a.Meta.TotalPointCount = s, new TextEncoder().encode(JSON.stringify(a)).buffer;
  } catch {
    return t;
  }
}
function xo(t) {
  try {
    let e = new TextDecoder().decode(t), a = JSON.parse(e), r = a?.FileReferences?.Motions;
    return r && !r.Idle?.[0] && r[""]?.length === 1 && (r.Idle = r[""].map((i) => ({ ...i })), delete r[""]), new TextEncoder().encode(JSON.stringify(a)).buffer;
  } catch {
    return t;
  }
}
var jr = class extends Hr {
  loadAssets(t, e) {
    this._modelHomeDir = t, fetch(`${this._modelHomeDir}${e}`).then((a) => a.arrayBuffer()).then((a) => {
      let r = xo(a), i = new er(r, r.byteLength), s = 0;
      for (let n = 0; n < i.getMotionGroupCount(); n++) s += i.getMotionCount(i.getMotionGroupName(n));
      this._progressTotal = 2 + i.getExpressionCount() + (i.getPhysicsFileName() === "" ? 0 : 1) + (i.getPoseFileName() === "" ? 0 : 1) + (i.getUserDataFile() === "" ? 0 : 1) + s + i.getTextureCount(), this._progressLoaded = 1, this._notifyProgress(e), this._state = O.LoadModel, this.setupModel(i);
    }).catch((a) => {
      T(`Failed to load file ${this._modelHomeDir}${e}`);
    });
  }
  setupModel(t) {
    if (this._updating = !0, this._initialized = !1, this._modelSetting = t, this._modelSetting.getModelFileName() != "") {
      let d = this._modelSetting.getModelFileName();
      fetch(`${this._modelHomeDir}${d}`).then((c) => {
        if (c.ok) return c.arrayBuffer();
        if (c.status >= 400) return T(`Failed to load file ${this._modelHomeDir}${d}`), /* @__PURE__ */ new ArrayBuffer(0);
      }).then((c) => {
        this.loadModel(c, this._mocConsistency), this._progressLoaded++, this._notifyProgress(d), this._state = O.LoadExpression, e();
      }), this._state = O.WaitLoadModel;
    } else D.printMessage("Model data does not exist.");
    let e = () => {
      if (this._modelSetting.getExpressionCount() > 0) {
        let d = this._modelSetting.getExpressionCount();
        for (let c = 0; c < d; c++) {
          let p = this._modelSetting.getExpressionName(c), f = this._modelSetting.getExpressionFileName(c);
          fetch(`${this._modelHomeDir}${f}`).then((m) => {
            if (m.ok) return m.arrayBuffer();
            if (m.status >= 400) return T(`Failed to load file ${this._modelHomeDir}${f}`), /* @__PURE__ */ new ArrayBuffer(0);
          }).then((m) => {
            let v = this.loadExpression(m, m.byteLength, p);
            if (this._expressions.get(p) != null && (jt.delete(this._expressions.get(p)), this._expressions.set(p, null)), this._expressions.set(p, v), this._expressionCount++, this._progressLoaded++, this._notifyProgress(f), this._expressionCount >= d) {
              if (this._expressionManager != null) {
                let b = new kr(this._expressionManager);
                this._updateScheduler.addUpdatableList(b);
              }
              this._state = O.LoadPhysics, a();
            }
          });
        }
        this._state = O.WaitLoadExpression;
      } else this._state = O.LoadPhysics, a();
    }, a = () => {
      if (this._modelSetting.getPhysicsFileName() != "") {
        let d = this._modelSetting.getPhysicsFileName();
        fetch(`${this._modelHomeDir}${d}`).then((c) => {
          if (c.ok) return c.arrayBuffer();
          if (c.status >= 400) return T(`Failed to load file ${this._modelHomeDir}${d}`), /* @__PURE__ */ new ArrayBuffer(0);
        }).then((c) => {
          if (this.loadPhysics(c, c.byteLength), this._physics) {
            let p = new Jr(this._physics);
            this._updateScheduler.addUpdatableList(p);
          }
          this._progressLoaded++, this._notifyProgress(d), this._state = O.LoadPose, r();
        }), this._state = O.WaitLoadPhysics;
      } else this._state = O.LoadPose, r();
    }, r = () => {
      if (this._modelSetting.getPoseFileName() != "") {
        let d = this._modelSetting.getPoseFileName();
        fetch(`${this._modelHomeDir}${d}`).then((c) => {
          if (c.ok) return c.arrayBuffer();
          if (c.status >= 400) return T(`Failed to load file ${this._modelHomeDir}${d}`), /* @__PURE__ */ new ArrayBuffer(0);
        }).then((c) => {
          if (this.loadPose(c, c.byteLength), this._pose) {
            let p = new Kr(this._pose);
            this._updateScheduler.addUpdatableList(p);
          }
          this._progressLoaded++, this._notifyProgress(d), this._state = O.SetupEyeBlink, i();
        }), this._state = O.WaitLoadPose;
      } else this._state = O.SetupEyeBlink, i();
    }, i = () => {
      if (this._modelSetting.getEyeBlinkParameterCount() > 0) {
        this._eyeBlink = qe.create(this._modelSetting);
        let d = new Ur(() => this._motionUpdated, this._eyeBlink);
        this._updateScheduler.addUpdatableList(d);
      }
      this._state = O.SetupBreath, s();
    }, s = () => {
      this._breath = We.create();
      let d = [
        new Ut(this._idParamAngleX, 0, 15, 6.5345, 0.5),
        new Ut(this._idParamAngleY, 0, 8, 3.5345, 0.5),
        new Ut(this._idParamAngleZ, 0, 10, 5.5345, 0.5),
        new Ut(this._idParamBodyAngleX, 0, 4, 15.5345, 0.5),
        new Ut(L.getIdManager().getId(M.ParamBreath), 0.5, 0.5, 3.2345, 1)
      ];
      this._breath.setParameters(d);
      let c = new Fr(this._breath);
      this._updateScheduler.addUpdatableList(c), this._state = O.LoadUserData, n();
    }, n = () => {
      if (this._modelSetting.getUserDataFile() != "") {
        let d = this._modelSetting.getUserDataFile();
        fetch(`${this._modelHomeDir}${d}`).then((c) => {
          if (c.ok) return c.arrayBuffer();
          if (c.status >= 400) return T(`Failed to load file ${this._modelHomeDir}${d}`), /* @__PURE__ */ new ArrayBuffer(0);
        }).then((c) => {
          this.loadUserData(c, c.byteLength), this._progressLoaded++, this._notifyProgress(d), this._state = O.SetupEyeBlinkIds, o();
        }), this._state = O.WaitLoadUserData;
      } else this._state = O.SetupEyeBlinkIds, o();
    }, o = () => {
      let d = this._modelSetting.getEyeBlinkParameterCount();
      this._eyeBlinkIds.length = d;
      for (let c = 0; c < d; ++c) this._eyeBlinkIds[c] = this._modelSetting.getEyeBlinkParameterId(c);
      this._state = O.SetupLipSyncIds, l();
    }, l = () => {
      let d = this._modelSetting.getLipSyncParameterCount();
      this._lipSyncIds.length = d;
      for (let c = 0; c < d; ++c) this._lipSyncIds[c] = this._modelSetting.getLipSyncParameterId(c);
      if (this._lipSyncIds.length > 0) {
        let c = new Gr(this._lipSyncIds, this._wavFileHandler);
        this._updateScheduler.addUpdatableList(c);
      }
      this._state = O.SetupLook, h();
    }, h = () => {
      this._look = Ve.create();
      let d = [
        new wt(this._idParamAngleX, 30, 0, 0),
        new wt(this._idParamAngleY, 0, 30, 0),
        new wt(this._idParamAngleZ, 0, 0, -30),
        new wt(this._idParamBodyAngleX, 10, 0, 0),
        new wt(L.getIdManager().getId(M.ParamEyeBallX), 1, 0, 0),
        new wt(L.getIdManager().getId(M.ParamEyeBallY), 0, 1, 0)
      ];
      this._look.setParameters(d);
      let c = new Vr(this._look, this._dragManager);
      this._updateScheduler.addUpdatableList(c), _();
    }, _ = () => {
      this._updateScheduler.sortUpdatableList(), this._state = O.SetupLayout, g();
    }, g = () => {
      let d = /* @__PURE__ */ new Map();
      if (this._modelSetting == null || this._modelMatrix == null) {
        T("Failed to setupLayout().");
        return;
      }
      this._modelSetting.getLayoutMap(d), this._modelMatrix.setupFromLayout(d), this._state = O.LoadMotion, u();
    }, u = () => {
      this._state = O.WaitLoadMotion, this._model.saveParameters(), this._allMotionCount = 0, this._motionCount = 0;
      let d = [], c = this._modelSetting.getMotionGroupCount();
      for (let p = 0; p < c; p++) d[p] = this._modelSetting.getMotionGroupName(p), this._allMotionCount += this._modelSetting.getMotionCount(d[p]);
      for (let p = 0; p < c; p++) this.preLoadMotionGroup(d[p]);
      this._allMotionCount == 0 && (this._state = O.LoadTexture, this._motionManager.stopAllMotions(), this._updating = !1, this._initialized = !0, this.createRenderer(this._subdelegate.getCanvas().width, this._subdelegate.getCanvas().height), this.setupTextures(), this.getRenderer().startUp(this._subdelegate.getGlManager().getGl()), this.getRenderer().loadShaders($e));
    };
  }
  setupTextures() {
    if (this._state == O.LoadTexture) {
      let t = this._modelSetting.getTextureCount();
      for (let e = 0; e < t; e++) {
        if (this._modelSetting.getTextureFileName(e) == "") {
          console.log("getTextureFileName null");
          continue;
        }
        let a = this._modelSetting.getTextureFileName(e);
        a = this._modelHomeDir + a, this._subdelegate.getTextureManager().createTextureFromPngFile(a, !0, (r) => {
          this.getRenderer().bindTexture(e, r.id), this._textureCount++, this._progressLoaded++, this._notifyProgress(a), this._textureCount >= t && (this._state = O.CompleteSetup);
        }), this.getRenderer().setIsPremultipliedAlpha(!0);
      }
      this._state = O.WaitLoadTexture;
    }
  }
  reloadRenderer() {
    this.deleteRenderer(), this.createRenderer(this._subdelegate.getCanvas().width, this._subdelegate.getCanvas().height), this.setupTextures();
  }
  update() {
    if (this._state != O.CompleteSetup) return;
    let t = D.getDeltaTime();
    if (this._userTimeSeconds += t, this._model.loadParameters(), this._motionUpdated = !1, this._motionManager.isFinished() ? this.startRandomMotion(gs, 1) : this._motionUpdated = this._motionManager.updateMotion(this._model, t), this._model.saveParameters(), this._updateScheduler.onLateUpdate(this._model, t), this._forcedParams != null) for (let [e, a] of Object.entries(this._forcedParams)) this._model.setParameterValueById(L.getIdManager().getId(e), a, 1);
    this._model.update();
  }
  startMotion(t, e, a, r, i) {
    if (a == 3) this._motionManager.setReservePriority(a);
    else if (!this._motionManager.reserveMotion(a)) return this._debugMode && D.printMessage("[APP]can't start motion."), -1;
    let s = this._modelSetting.getMotionFileName(t, e), n = i ?? (this.onMotionStart ? (u) => {
      this.onMotionStart({
        group: t,
        index: e,
        duration: u.getLoopDuration?.() ?? null,
        file: s
      });
    } : void 0), o = r ?? (this.onMotionEnd ? (u) => {
      this.onMotionEnd({
        group: t,
        index: e,
        file: s
      });
    } : void 0), l = `${t}_${e}`, h = this._motions.get(l), _ = !1;
    if (h == null)
      if (fetch(`${this._modelHomeDir}${s}`).then((u) => {
        if (u.ok) return u.arrayBuffer();
        if (u.status >= 400) return T(`Failed to load file ${this._modelHomeDir}${s}`), /* @__PURE__ */ new ArrayBuffer(0);
      }).then((u) => {
        let d = Na(u);
        h = this.loadMotion(d, d.byteLength, null, o, n, this._modelSetting, t, e, this._motionConsistency);
      }), h) h.setEffectIds(this._eyeBlinkIds, this._lipSyncIds), _ = !0;
      else return T("Can't start motion {0} .", s), this._motionManager.setReservePriority(0), -1;
    else h.setBeganMotionHandler(n), h.setFinishedMotionHandler(o);
    let g = this._modelSetting.getMotionSoundFileName(t, e);
    if (g.localeCompare("") != 0) {
      let u = g;
      u = this._modelHomeDir + u, this._wavFileHandler.start(u), this._audioElement &&= (this._audioElement.pause(), null);
      let d = document.createElement("audio");
      d.src = u, d.volume = this._volume, d.play().catch((c) => {
        console.warn("[l2d] audio play failed:", c);
      }), this._audioElement = d;
    }
    return this._debugMode && D.printMessage(`[APP]start motion: [${t}_${e}]`), this._motionManager.startMotionPriority(h, _, a);
  }
  startRandomMotion(t, e, a, r) {
    if (this._modelSetting.getMotionCount(t) == 0) return -1;
    let i = Math.floor(Math.random() * this._modelSetting.getMotionCount(t));
    return this.startMotion(t, i, e, a, r);
  }
  setExpression(t) {
    let e = this._expressions.get(t);
    this._debugMode && D.printMessage(`[APP]expression: [${t}]`), e == null ? this._debugMode && D.printMessage(`[APP]expression[${t}] is null`) : this._expressionManager.startMotion(e, !1);
  }
  setRandomExpression() {
    if (this._expressions.size == 0) return;
    let t = Math.floor(Math.random() * this._expressions.size);
    for (let e = 0; e < this._expressions.size; e++) if (e == t) {
      let a = [...this._expressions.entries()][e][0];
      this.setExpression(a);
      return;
    }
  }
  motionEventFired(t) {
    _t("{0} is fired on LAppModel!!", t);
  }
  hitTest(t, e, a) {
    if (this._opacity < 1) return !1;
    let r = this._modelSetting.getHitAreasCount();
    for (let i = 0; i < r; i++) if (this._modelSetting.getHitAreaName(i) == t) {
      let s = this._modelSetting.getHitAreaId(i);
      return this.isHit(s, e, a);
    }
    return !1;
  }
  preLoadMotionGroup(t) {
    for (let e = 0; e < this._modelSetting.getMotionCount(t); e++) {
      let a = this._modelSetting.getMotionFileName(t, e), r = `${t}_${e}`;
      this._debugMode && D.printMessage(`[APP]load motion: ${a} => [${r}]`), fetch(`${this._modelHomeDir}${a}`).then((i) => {
        if (i.ok) return i.arrayBuffer();
        if (i.status >= 400) return T(`Failed to load file ${this._modelHomeDir}${a}`), /* @__PURE__ */ new ArrayBuffer(0);
      }).then((i) => {
        let s = Na(i), n = this.loadMotion(s, s.byteLength, r, null, null, this._modelSetting, t, e, this._motionConsistency);
        n == null ? (this._allMotionCount--, this._progressTotal--, this._progressLoaded++, this._notifyProgress(a)) : (n.setEffectIds(this._eyeBlinkIds, this._lipSyncIds), this._motions.get(r) != null && jt.delete(this._motions.get(r)), this._motions.set(r, n), this._motionCount++, this._progressLoaded++, this._notifyProgress(a)), this._motionCount >= this._allMotionCount && (this._state = O.LoadTexture, this._motionManager.stopAllMotions(), this._updating = !1, this._initialized = !0, this.createRenderer(this._subdelegate.getCanvas().width, this._subdelegate.getCanvas().height), this.setupTextures(), this.getRenderer().startUp(this._subdelegate.getGlManager().getGl()), this.getRenderer().loadShaders($e));
      });
    }
  }
  releaseMotions() {
    this._motions.clear();
  }
  releaseExpressions() {
    this._expressions.clear();
  }
  doDraw() {
    if (this._model == null) return;
    let t = this._subdelegate.getCanvas(), e = [
      0,
      0,
      t.width,
      t.height
    ];
    this.getRenderer().setRenderState(this._subdelegate.getFrameBuffer(), e), this.getRenderer().drawModel($e);
  }
  draw(t) {
    this._model != null && this._state == O.CompleteSetup && (t.multiplyByMatrix(this._modelMatrix), this.getRenderer().setMvpMatrix(t), this.doDraw());
  }
  async hasMocConsistencyFromFile() {
    if (G(this._modelSetting.getModelFileName().localeCompare("")), this._modelSetting.getModelFileName() != "") {
      let t = this._modelSetting.getModelFileName(), e = await (await fetch(`${this._modelHomeDir}${t}`)).arrayBuffer();
      return this._consistency = be.hasMocConsistency(e), this._consistency ? _t("Consistent MOC3.") : _t("Inconsistent MOC3."), this._consistency;
    }
    D.printMessage("Model data does not exist.");
  }
  setSubdelegate(t) {
    this._subdelegate = t;
  }
  release() {
    this._look &&= (Ve.delete(this._look), null), this._updateScheduler && this._updateScheduler.release(), super.release();
  }
  constructor() {
    super(), this._forcedParams = null, this._audioElement = null, this._volume = 0, this.onMotionStart = null, this.onMotionEnd = null, this.onProgress = null, this._progressLoaded = 0, this._progressTotal = 0, this._modelSetting = null, this._modelHomeDir = null, this._userTimeSeconds = 0, this._eyeBlinkIds = [], this._lipSyncIds = [], this._motions = /* @__PURE__ */ new Map(), this._expressions = /* @__PURE__ */ new Map(), this._hitArea = [], this._userArea = [], this._idParamAngleX = L.getIdManager().getId(M.ParamAngleX), this._idParamAngleY = L.getIdManager().getId(M.ParamAngleY), this._idParamAngleZ = L.getIdManager().getId(M.ParamAngleZ), this._idParamBodyAngleX = L.getIdManager().getId(M.ParamBodyAngleX), this._mocConsistency = !0, this._motionConsistency = !0, this._state = O.LoadAssets, this._expressionCount = 0, this._textureCount = 0, this._motionCount = 0, this._allMotionCount = 0, this._progressLoaded = 0, this._progressTotal = 0, this._wavFileHandler = new $o(), this._consistency = !1, this._look = null, this._updateScheduler = new Nr(), this._motionUpdated = !1;
  }
  _notifyProgress(t) {
    this.onProgress && this.onProgress(this._progressLoaded, this._progressTotal, t);
  }
}, Po = class {
  releaseAllModel() {
    this._models.length = 0;
  }
  setOffscreenSize(t, e) {
    for (let a = 0; a < this._models.length; a++) this._models[a]?.setRenderTargetSize(t, e);
  }
  onDrag(t, e) {
    let a = this._models[0];
    a && a.setDragging(t, e);
  }
  onTap(t, e) {
    D.printMessage(`[APP]tap point: {x: ${t.toFixed(2)} y: ${e.toFixed(2)}}`);
    let a = this._models[0];
    a.hitTest("Head", t, e) ? (D.printMessage(`[APP]hit area: [${fs}]`), a.setRandomExpression()) : a.hitTest("Body", t, e) && (D.printMessage(`[APP]hit area: [${ps}]`), a.startRandomMotion(cs, 2, this.finishedMotion, this.beganMotion));
  }
  onUpdate() {
    let t = this._subdelegate.getGl();
    ge.getInstance().beginFrameProcess(t);
    let { width: e, height: a } = this._subdelegate.getCanvas(), r = new U(), i = this._models[0];
    i.getModel() && (i.getModel().getCanvasWidth() > 1 && e < a ? (i.getModelMatrix().setWidth(2), r.scale(1, e / a)) : r.scale(a / e, 1), this._viewMatrix != null && r.multiplyByMatrix(this._viewMatrix)), i.update(), i.draw(r), ge.getInstance().endFrameProcess(t), ge.getInstance().releaseStaleRenderTextures(t);
  }
  nextScene() {
    let t = (this._sceneIndex + 1) % ds;
    this.changeScene(t);
  }
  changeScene(t) {
    this._sceneIndex = t, D.printMessage(`[APP]model index: ${this._sceneIndex}`);
    let e = Za + Ne[t] + "/", a = Ne[t];
    a += ".model3.json", this.releaseAllModel();
    let r = new jr();
    r.setSubdelegate(this._subdelegate), r.loadAssets(e, a), this._models.push(r);
  }
  setViewMatrix(t) {
    for (let e = 0; e < 16; e++) this._viewMatrix.getArray()[e] = t.getArray()[e];
  }
  addModel(t = 0) {
    this._sceneIndex = t, this.changeScene(this._sceneIndex);
  }
  constructor() {
    this.beganMotion = (t) => {
      D.printMessage("Motion Began:"), console.log(t);
    }, this.finishedMotion = (t) => {
      D.printMessage("Motion Finished:"), console.log(t);
    }, this._subdelegate = null, this._viewMatrix = new U(), this._models = [], this._sceneIndex = 0;
  }
  release() {
  }
  initialize(t) {
    this._subdelegate = t, this.changeScene(this._sceneIndex);
  }
}, To = class {
  constructor() {
    this._textures = [];
  }
  release() {
    for (let t = 0; t < this._textures.length; t++) this._glManager.getGl().deleteTexture(this._textures[t].id);
    this._textures = null;
  }
  createTextureFromPngFile(t, e, a) {
    for (let i = 0; i < this._textures.length; i++) if (this._textures[i].fileName == t && this._textures[i].usePremultply == e) {
      this._textures[i].img = new Image(), this._textures[i].img.crossOrigin = "anonymous", this._textures[i].img.addEventListener("load", () => a(this._textures[i]), { passive: !0 }), this._textures[i].img.src = t;
      return;
    }
    let r = new Image();
    r.crossOrigin = "anonymous", r.addEventListener("load", () => {
      let i = this._glManager.getGl().createTexture();
      this._glManager.getGl().bindTexture(this._glManager.getGl().TEXTURE_2D, i), this._glManager.getGl().texParameteri(this._glManager.getGl().TEXTURE_2D, this._glManager.getGl().TEXTURE_MIN_FILTER, this._glManager.getGl().LINEAR_MIPMAP_LINEAR), this._glManager.getGl().texParameteri(this._glManager.getGl().TEXTURE_2D, this._glManager.getGl().TEXTURE_MAG_FILTER, this._glManager.getGl().LINEAR), e && this._glManager.getGl().pixelStorei(this._glManager.getGl().UNPACK_PREMULTIPLY_ALPHA_WEBGL, 1), this._glManager.getGl().texImage2D(this._glManager.getGl().TEXTURE_2D, 0, this._glManager.getGl().RGBA, this._glManager.getGl().RGBA, this._glManager.getGl().UNSIGNED_BYTE, r), this._glManager.getGl().generateMipmap(this._glManager.getGl().TEXTURE_2D), this._glManager.getGl().bindTexture(this._glManager.getGl().TEXTURE_2D, null);
      let s = new Lo();
      s != null && (s.fileName = t, s.width = r.width, s.height = r.height, s.id = i, s.img = r, s.usePremultply = e, this._textures != null && this._textures.push(s)), a(s);
    }, { passive: !0 }), r.src = t;
  }
  releaseTextures() {
    for (let t = 0; t < this._textures.length; t++) this._glManager.getGl().deleteTexture(this._textures[t].id), this._textures[t] = null;
    this._textures.length = 0;
  }
  releaseTextureByTexture(t) {
    for (let e = 0; e < this._textures.length; e++) if (this._textures[e].id == t) {
      this._glManager.getGl().deleteTexture(this._textures[e].id), this._textures[e] = null, this._textures.splice(e, 1);
      break;
    }
  }
  releaseTextureByFilePath(t) {
    for (let e = 0; e < this._textures.length; e++) if (this._textures[e].fileName == t) {
      this._glManager.getGl().deleteTexture(this._textures[e].id), this._textures[e] = null, this._textures.splice(e, 1);
      break;
    }
  }
  setGlManager(t) {
    this._glManager = t;
  }
}, Lo = class {
  constructor() {
    this.id = null, this.width = 0, this.height = 0;
  }
}, Xr = class extends U {
  constructor() {
    super(), this._screenLeft = 0, this._screenRight = 0, this._screenTop = 0, this._screenBottom = 0, this._maxLeft = 0, this._maxRight = 0, this._maxTop = 0, this._maxBottom = 0, this._maxScale = 0, this._minScale = 0;
  }
  adjustTranslate(t, e) {
    this._tr[0] * this._maxLeft + (this._tr[12] + t) > this._screenLeft && (t = this._screenLeft - this._tr[0] * this._maxLeft - this._tr[12]), this._tr[0] * this._maxRight + (this._tr[12] + t) < this._screenRight && (t = this._screenRight - this._tr[0] * this._maxRight - this._tr[12]), this._tr[5] * this._maxTop + (this._tr[13] + e) < this._screenTop && (e = this._screenTop - this._tr[5] * this._maxTop - this._tr[13]), this._tr[5] * this._maxBottom + (this._tr[13] + e) > this._screenBottom && (e = this._screenBottom - this._tr[5] * this._maxBottom - this._tr[13]);
    let a = new Float32Array([
      1,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1,
      0,
      t,
      e,
      0,
      1
    ]);
    U.multiply(a, this._tr, this._tr);
  }
  adjustScale(t, e, a) {
    let r = this.getMaxScale(), i = this.getMinScale(), s = a * this._tr[0];
    s < i ? this._tr[0] > 0 && (a = i / this._tr[0]) : s > r && this._tr[0] > 0 && (a = r / this._tr[0]);
    let n = new Float32Array([
      1,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1,
      0,
      t,
      e,
      0,
      1
    ]), o = new Float32Array([
      a,
      0,
      0,
      0,
      0,
      a,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1
    ]), l = new Float32Array([
      1,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1,
      0,
      -t,
      -e,
      0,
      1
    ]);
    U.multiply(l, this._tr, this._tr), U.multiply(o, this._tr, this._tr), U.multiply(n, this._tr, this._tr);
  }
  setScreenRect(t, e, a, r) {
    this._screenLeft = t, this._screenRight = e, this._screenBottom = a, this._screenTop = r;
  }
  setMaxScreenRect(t, e, a, r) {
    this._maxLeft = t, this._maxRight = e, this._maxTop = r, this._maxBottom = a;
  }
  setMaxScale(t) {
    this._maxScale = t;
  }
  setMinScale(t) {
    this._minScale = t;
  }
  getMaxScale() {
    return this._maxScale;
  }
  getMinScale() {
    return this._minScale;
  }
  isMaxScale() {
    return this.getScaleX() >= this._maxScale;
  }
  isMinScale() {
    return this.getScaleX() <= this._minScale;
  }
  getScreenLeft() {
    return this._screenLeft;
  }
  getScreenRight() {
    return this._screenRight;
  }
  getScreenBottom() {
    return this._screenBottom;
  }
  getScreenTop() {
    return this._screenTop;
  }
  getMaxLeft() {
    return this._maxLeft;
  }
  getMaxRight() {
    return this._maxRight;
  }
  getMaxBottom() {
    return this._maxBottom;
  }
  getMaxTop() {
    return this._maxTop;
  }
}, wo;
(function(t) {
  t.CubismViewMatrix = Xr;
})(wo ||= {});
var Fa = class {
  constructor(t, e, a, r, i) {
    this._rect = new Oo(), this._rect.left = t - a * 0.5, this._rect.right = t + a * 0.5, this._rect.up = e + r * 0.5, this._rect.down = e - r * 0.5, this._texture = i, this._vertexBuffer = null, this._uvBuffer = null, this._indexBuffer = null, this._positionLocation = null, this._uvLocation = null, this._textureLocation = null, this._positionArray = null, this._uvArray = null, this._indexArray = null, this._firstDraw = !0;
  }
  release() {
    this._rect = null;
    let t = this._subdelegate.getGlManager().getGl();
    t.deleteTexture(this._texture), this._texture = null, t.deleteBuffer(this._uvBuffer), this._uvBuffer = null, t.deleteBuffer(this._vertexBuffer), this._vertexBuffer = null, t.deleteBuffer(this._indexBuffer), this._indexBuffer = null;
  }
  getTexture() {
    return this._texture;
  }
  render(t) {
    if (this._texture == null) return;
    let e = this._subdelegate.getGlManager().getGl();
    if (this._firstDraw) {
      this._positionLocation = e.getAttribLocation(t, "position"), e.enableVertexAttribArray(this._positionLocation), this._uvLocation = e.getAttribLocation(t, "uv"), e.enableVertexAttribArray(this._uvLocation), this._textureLocation = e.getUniformLocation(t, "texture"), e.uniform1i(this._textureLocation, 0), this._uvArray = new Float32Array([
        1,
        0,
        0,
        0,
        0,
        1,
        1,
        1
      ]), this._uvBuffer = e.createBuffer();
      {
        let a = this._subdelegate.getCanvas().width, r = this._subdelegate.getCanvas().height;
        this._positionArray = new Float32Array([
          (this._rect.right - a * 0.5) / (a * 0.5),
          (this._rect.up - r * 0.5) / (r * 0.5),
          (this._rect.left - a * 0.5) / (a * 0.5),
          (this._rect.up - r * 0.5) / (r * 0.5),
          (this._rect.left - a * 0.5) / (a * 0.5),
          (this._rect.down - r * 0.5) / (r * 0.5),
          (this._rect.right - a * 0.5) / (a * 0.5),
          (this._rect.down - r * 0.5) / (r * 0.5)
        ]), this._vertexBuffer = e.createBuffer();
      }
      this._indexArray = new Uint16Array([
        0,
        1,
        2,
        3,
        2,
        0
      ]), this._indexBuffer = e.createBuffer(), this._firstDraw = !1;
    }
    e.bindBuffer(e.ARRAY_BUFFER, this._uvBuffer), e.bufferData(e.ARRAY_BUFFER, this._uvArray, e.STATIC_DRAW), e.vertexAttribPointer(this._uvLocation, 2, e.FLOAT, !1, 0, 0), e.bindBuffer(e.ARRAY_BUFFER, this._vertexBuffer), e.bufferData(e.ARRAY_BUFFER, this._positionArray, e.STATIC_DRAW), e.vertexAttribPointer(this._positionLocation, 2, e.FLOAT, !1, 0, 0), e.bindBuffer(e.ELEMENT_ARRAY_BUFFER, this._indexBuffer), e.bufferData(e.ELEMENT_ARRAY_BUFFER, this._indexArray, e.DYNAMIC_DRAW), e.bindTexture(e.TEXTURE_2D, this._texture), e.drawElements(e.TRIANGLES, this._indexArray.length, e.UNSIGNED_SHORT, 0);
  }
  isHit(t, e) {
    let { height: a } = this._subdelegate.getCanvas(), r = a - e;
    return t >= this._rect.left && t <= this._rect.right && r <= this._rect.up && r >= this._rect.down;
  }
  setSubdelegate(t) {
    this._subdelegate = t;
  }
}, Oo = class {
}, Eo = class {
  constructor() {
    this._startX = 0, this._startY = 0, this._lastX = 0, this._lastY = 0, this._lastX1 = 0, this._lastY1 = 0, this._lastX2 = 0, this._lastY2 = 0, this._lastTouchDistance = 0, this._deltaX = 0, this._deltaY = 0, this._scale = 1, this._touchSingle = !1, this._flipAvailable = !1;
  }
  getCenterX() {
    return this._lastX;
  }
  getCenterY() {
    return this._lastY;
  }
  getDeltaX() {
    return this._deltaX;
  }
  getDeltaY() {
    return this._deltaY;
  }
  getStartX() {
    return this._startX;
  }
  getStartY() {
    return this._startY;
  }
  getScale() {
    return this._scale;
  }
  getX() {
    return this._lastX;
  }
  getY() {
    return this._lastY;
  }
  getX1() {
    return this._lastX1;
  }
  getY1() {
    return this._lastY1;
  }
  getX2() {
    return this._lastX2;
  }
  getY2() {
    return this._lastY2;
  }
  isSingleTouch() {
    return this._touchSingle;
  }
  isFlickAvailable() {
    return this._flipAvailable;
  }
  disableFlick() {
    this._flipAvailable = !1;
  }
  touchesBegan(t, e) {
    this._lastX = t, this._lastY = e, this._startX = t, this._startY = e, this._lastTouchDistance = -1, this._flipAvailable = !0, this._touchSingle = !0;
  }
  touchesMoved(t, e) {
    this._lastX = t, this._lastY = e, this._lastTouchDistance = -1, this._touchSingle = !0;
  }
  getFlickDistance() {
    return this.calculateDistance(this._startX, this._startY, this._lastX, this._lastY);
  }
  calculateDistance(t, e, a, r) {
    return Math.sqrt((t - a) * (t - a) + (e - r) * (e - r));
  }
  calculateMovingAmount(t, e) {
    if (t > 0 != e > 0) return 0;
    let a = t > 0 ? 1 : -1, r = Math.abs(t), i = Math.abs(e);
    return a * (r < i ? r : i);
  }
}, Ro = class {
  constructor() {
    this._programId = null, this._back = null, this._gear = null, this._touchManager = new Eo(), this._deviceToScreen = new U(), this._viewMatrix = new Xr();
  }
  initialize(t) {
    this._subdelegate = t;
    let { width: e, height: a } = t.getCanvas(), r = e / a, i = -r, s = r;
    if (this._viewMatrix.setScreenRect(i, s, -1, 1), this._viewMatrix.scale(1, 1), this._deviceToScreen.loadIdentity(), e > a) {
      let n = Math.abs(s - i);
      this._deviceToScreen.scaleRelative(n / e, -n / e);
    } else this._deviceToScreen.scaleRelative(2 / a, -2 / a);
    this._deviceToScreen.translateRelative(-e * 0.5, -a * 0.5), this._viewMatrix.setMaxScale(100), this._viewMatrix.setMinScale(hs), this._viewMatrix.setMaxScreenRect(-2, 2, -2, 2);
  }
  release() {
    this._viewMatrix = null, this._touchManager = null, this._deviceToScreen = null, this._gear.release(), this._gear = null, this._back.release(), this._back = null, this._subdelegate.getGlManager().getGl().deleteProgram(this._programId), this._programId = null;
  }
  render() {
    this._subdelegate.getGlManager().getGl().useProgram(this._programId), this._back && this._back.render(this._programId), this._gear && this._gear.render(this._programId), this._subdelegate.getGlManager().getGl().flush();
    let t = this._subdelegate.getLive2DManager();
    t != null && (t.setViewMatrix(this._viewMatrix), t.onUpdate());
  }
  initializeSprite() {
    let t = this._subdelegate.getCanvas().width, e = this._subdelegate.getCanvas().height, a = this._subdelegate.getTextureManager(), r = Za, i = "";
    i = us, a.createTextureFromPngFile(r + i, !1, (s) => {
      let n = t * 0.5, o = e * 0.5, l = e * 0.95, h = l / s.height;
      this._back = new Fa(n, o, s.width * h, l, s.id), this._back.setSubdelegate(this._subdelegate);
    }), i = _s, a.createTextureFromPngFile(r + i, !1, (s) => {
      let n = t - s.width * 0.5, o = e - s.height * 0.5, l = s.width, h = s.height;
      this._gear = new Fa(n, o, l, h, s.id), this._gear.setSubdelegate(this._subdelegate);
    }), this._programId ??= this._subdelegate.createShader();
  }
  onTouchesBegan(t, e) {
    this._touchManager.touchesBegan(t * window.devicePixelRatio, e * window.devicePixelRatio);
  }
  onTouchesMoved(t, e) {
    let a = t * window.devicePixelRatio, r = e * window.devicePixelRatio, i = this._subdelegate.getLive2DManager(), s = this.transformViewX(this._touchManager.getX()), n = this.transformViewY(this._touchManager.getY());
    this._touchManager.touchesMoved(a, r), i.onDrag(s, n);
  }
  onTouchesEnded(t, e) {
    let a = t * window.devicePixelRatio, r = e * window.devicePixelRatio, i = this._subdelegate.getLive2DManager();
    i.onDrag(0, 0);
    let s = this.transformViewX(a), n = this.transformViewY(r);
    i.onTap(s, n), this._gear.isHit(a, r) && i.nextScene();
  }
  transformViewX(t) {
    let e = this._deviceToScreen.transformX(t);
    return this._viewMatrix.invertTransformX(e);
  }
  transformViewY(t) {
    let e = this._deviceToScreen.transformY(t);
    return this._viewMatrix.invertTransformY(e);
  }
  transformScreenX(t) {
    return this._deviceToScreen.transformX(t);
  }
  transformScreenY(t) {
    return this._deviceToScreen.transformY(t);
  }
}, Bo = class {
  constructor() {
    this._canvas = null, this._glManager = new bs(), this._textureManager = new To(), this._live2dManager = new Po(), this._view = new Ro(), this._frameBuffer = null, this._captured = !1;
  }
  release() {
    this._resizeObserver.unobserve(this._canvas), this._resizeObserver.disconnect(), this._resizeObserver = null, this._live2dManager.release(), this._live2dManager = null, this._view.release(), this._view = null, this._textureManager.release(), this._textureManager = null, this._glManager.release(), this._glManager = null;
  }
  initialize(t) {
    if (!this._glManager.initialize(t)) return !1;
    this._canvas = t, this.resizeCanvas(), this._textureManager.setGlManager(this._glManager);
    let e = this._glManager.getGl();
    return this._frameBuffer ||= e.getParameter(e.FRAMEBUFFER_BINDING), e.enable(e.BLEND), e.blendFunc(e.SRC_ALPHA, e.ONE_MINUS_SRC_ALPHA), this._view.initialize(this), this._live2dManager.setOffscreenSize(this._canvas.width, this._canvas.height), this._view.initializeSprite(), this._live2dManager.initialize(this), this._resizeObserver = new ResizeObserver((a, r) => this.resizeObserverCallback.call(this, a, r)), this._resizeObserver.observe(this._canvas), !0;
  }
  onResize() {
    this.resizeCanvas(), this._view.initialize(this), this._view.initializeSprite();
  }
  resizeObserverCallback(t, e) {
    this._needResize = !0;
  }
  update() {
    if (this._glManager.getGl().isContextLost()) return;
    this._needResize &&= (this.onResize(), !1);
    let t = this._glManager.getGl();
    t.clearColor(0, 0, 0, 1), t.enable(t.DEPTH_TEST), t.depthFunc(t.LEQUAL), t.clear(t.COLOR_BUFFER_BIT | t.DEPTH_BUFFER_BIT), t.clearDepth(1), t.enable(t.BLEND), t.blendFunc(t.SRC_ALPHA, t.ONE_MINUS_SRC_ALPHA), this._view.render();
  }
  createShader() {
    let t = this._glManager.getGl(), e = t.createShader(t.VERTEX_SHADER);
    if (e == null) return D.printMessage("failed to create vertexShader"), null;
    t.shaderSource(e, "precision mediump float;attribute vec3 position;attribute vec2 uv;varying vec2 vuv;void main(void){   gl_Position = vec4(position, 1.0);   vuv = uv;}"), t.compileShader(e);
    let a = t.createShader(t.FRAGMENT_SHADER);
    if (a == null) return D.printMessage("failed to create fragmentShader"), null;
    t.shaderSource(a, "precision mediump float;varying vec2 vuv;uniform sampler2D texture;void main(void){   gl_FragColor = texture2D(texture, vuv);}"), t.compileShader(a);
    let r = t.createProgram();
    return t.attachShader(r, e), t.attachShader(r, a), t.deleteShader(e), t.deleteShader(a), t.linkProgram(r), t.useProgram(r), r;
  }
  getTextureManager() {
    return this._textureManager;
  }
  getFrameBuffer() {
    return this._frameBuffer;
  }
  getCanvas() {
    return this._canvas;
  }
  getGlManager() {
    return this._glManager;
  }
  getGl() {
    return this._glManager.getGl();
  }
  getLive2DManager() {
    return this._live2dManager;
  }
  resizeCanvas() {
    this._canvas.width = this._canvas.clientWidth * window.devicePixelRatio, this._canvas.height = this._canvas.clientHeight * window.devicePixelRatio;
    let t = this._glManager.getGl();
    t.viewport(0, 0, t.drawingBufferWidth, t.drawingBufferHeight);
  }
  onPointBegan(t, e) {
    if (!this._view) {
      D.printMessage("view notfound");
      return;
    }
    this._captured = !0;
    let a = t - this._canvas.offsetLeft, r = e - this._canvas.offsetTop;
    this._view.onTouchesBegan(a, r);
  }
  onPointMoved(t, e) {
    if (!this._captured) return;
    let a = t - this._canvas.offsetLeft, r = e - this._canvas.offsetTop;
    this._view.onTouchesMoved(a, r);
  }
  onPointEnded(t, e) {
    if (this._captured = !1, !this._view) {
      D.printMessage("view notfound");
      return;
    }
    let a = t - this._canvas.offsetLeft, r = e - this._canvas.offsetTop;
    this._view.onTouchesEnded(a, r);
  }
  onTouchCancel(t, e) {
    if (this._captured = !1, !this._view) {
      D.printMessage("view notfound");
      return;
    }
    let a = t - this._canvas.offsetLeft, r = e - this._canvas.offsetTop;
    this._view.onTouchesEnded(a, r);
  }
  isContextLost() {
    return this._glManager.getGl().isContextLost();
  }
}, Do = {
  "vertshadersrc.vert": hi,
  "vertshadersrcmasked.vert": ui,
  "vertshadersrcsetupmask.vert": _i,
  "fragshadersrcsetupmask.frag": di,
  "fragshadersrcpremultipliedalpha.frag": gi,
  "fragshadersrcmaskpremultipliedalpha.frag": ci,
  "fragshadersrcmaskinvertedpremultipliedalpha.frag": fi,
  "vertshadersrccopy.vert": pi,
  "fragshadersrccopy.frag": mi,
  "fragshadersrccolorblend.frag": bi,
  "fragshadersrcalphablend.frag": vi,
  "vertshadersrcblend.vert": yi,
  "fragshadersrcpremultipliedalphablend.frag": Si
};
Qe.prototype.loadShader = async function(t) {
  return Do[t.split("/").pop().toLowerCase()] ?? "";
}, D.printMessage = () => {
};
var Va = -1;
function Ho(t) {
  t !== Va && (Va = t, D.updateTime());
}
var Ao = class extends Bo {
  _userScale;
  _userPosition;
  initialize(t) {
    if (!this._glManager.initialize(t)) return !1;
    this._canvas = t, Ka(t), this.resizeCanvas(), this._textureManager.setGlManager(this._glManager);
    let e = this._glManager.getGl();
    return this._frameBuffer ||= e.getParameter(e.FRAMEBUFFER_BINDING), e.enable(e.BLEND), e.blendFunc(e.SRC_ALPHA, e.ONE_MINUS_SRC_ALPHA), this._view.initialize(this), this._view._gear = {
      render: () => {
      },
      isHit: () => !1,
      release: () => {
      }
    }, this._view._back = {
      render: () => {
      },
      release: () => {
      }
    }, this._live2dManager._subdelegate = this, this._resizeObserver = new window.ResizeObserver((a, r) => this.resizeObserverCallback.call(this, a, r)), this._resizeObserver.observe(this._canvas), !0;
  }
  onResize() {
    this.resizeCanvas(), this._view.initialize(this), this._userScale !== void 0 && this._view._viewMatrix.adjustScale(0, 0, this._userScale), this._userPosition !== void 0 && this._view._viewMatrix.translate(this._userPosition[0], this._userPosition[1]);
  }
  update() {
    if (this._glManager.getGl().isContextLost()) return;
    this._needResize &&= (this.onResize(), !1);
    let t = this._glManager.getGl();
    t.clearColor(0, 0, 0, 0), t.enable(t.DEPTH_TEST), t.depthFunc(t.LEQUAL), t.clear(t.COLOR_BUFFER_BIT | t.DEPTH_BUFFER_BIT), t.clearDepth(1), t.enable(t.BLEND), t.blendFunc(t.SRC_ALPHA, t.ONE_MINUS_SRC_ALPHA), this._live2dManager._models.length > 0 && this._view.render();
  }
}, No = class {
  _canvas;
  _subdelegates = [];
  _cubismOption;
  _released = !1;
  _drawFrameId = null;
  _modelLoadedEmitted = !1;
  _onLoaded = null;
  mouseMoveEventListener = null;
  mouseEndedEventListener = null;
  tapEventListener = null;
  constructor(t) {
    this._canvas = t, this._cubismOption = new Ai();
  }
  run() {
    let t = (e) => {
      Ho(e), !this._modelLoadedEmitted && this._isModelReady() && (this._modelLoadedEmitted = !0, this._onLoaded && this._onLoaded());
      for (let a of this._subdelegates) a.update();
      this._drawFrameId = window.requestAnimationFrame(t);
    };
    t();
  }
  onLoaded(t) {
    this._onLoaded = t;
  }
  stop() {
    this._drawFrameId &&= (window.cancelAnimationFrame(this._drawFrameId), null);
  }
  release() {
    this._released = !0, this.stop(), this.releaseEventListener();
    for (let t of this._subdelegates) t.release();
    this._subdelegates = [], L.dispose(), this._cubismOption = null;
  }
  transformOffset(t) {
    let e = this._subdelegates[0], a = e.getCanvas(), r = a.getBoundingClientRect(), i = (t.clientX - r.left) * (a.width / r.width), s = (t.clientY - r.top) * (a.height / r.height);
    return {
      x: e._view.transformViewX(i),
      y: e._view.transformViewY(s)
    };
  }
  _isModelReady() {
    return L.getIdManager() !== null && this._subdelegates[0]?.getLive2DManager()?._models?.[0]?._state === 23;
  }
  onMouseMove(t) {
    if (!this._isModelReady()) return;
    let { x: e, y: a } = this.transformOffset(t);
    this._subdelegates[0].getLive2DManager().onDrag(e, a);
  }
  onMouseEnd(t) {
    this._isModelReady() && this._subdelegates[0].getLive2DManager().onDrag(0, 0);
  }
  onTap(t) {
    if (!this._isModelReady()) return;
    let e = this._subdelegates[0].getLive2DManager(), { x: a, y: r } = this.transformOffset(t), i = e._models[0], s = i._modelSetting.getHitAreasCount();
    for (let n = 0; n < s; n++) {
      let o = i._modelSetting.getHitAreaName(n);
      i.hitTest(o, a, r) && window.dispatchEvent(new CustomEvent(V.TAP_BODY, { detail: {
        canvas: this._canvas,
        areaName: o
      } }));
    }
  }
  initializeEventListener() {
    this.mouseMoveEventListener = this.onMouseMove.bind(this), this.mouseEndedEventListener = this.onMouseEnd.bind(this), this.tapEventListener = this.onTap.bind(this), document.addEventListener("mousemove", this.mouseMoveEventListener, { passive: !0 }), document.addEventListener("mouseout", this.mouseEndedEventListener, { passive: !0 }), document.addEventListener("pointerdown", this.tapEventListener, { passive: !0 });
  }
  releaseEventListener() {
    this.mouseMoveEventListener &&= (document.removeEventListener("mousemove", this.mouseMoveEventListener), null), this.mouseEndedEventListener &&= (document.removeEventListener("mouseout", this.mouseEndedEventListener), null), this.tapEventListener &&= (document.removeEventListener("pointerdown", this.tapEventListener), null);
  }
  initialize() {
    D.updateTime(), this._cubismOption.logFunction = D.printMessage, this._cubismOption.loggingLevel = ms, L.startUp(this._cubismOption), L.initialize();
    try {
      this.initializeSubdelegates();
    } catch {
      return !1;
    }
    return this.initializeEventListener(), !0;
  }
  initializeSubdelegates() {
    let t = new Ao();
    if (!t.initialize(this._canvas)) throw Error("Failed to initialize AppSubdelegate");
    this._subdelegates.push(t);
  }
  changeModel(t) {
    this._modelLoadedEmitted = !1;
    let e = t.split("/"), a = e.pop(), r = `${e.join("/")}/`, i = this._subdelegates[0].getLive2DManager();
    i.releaseAllModel();
    let s = new jr();
    s.setSubdelegate(this._subdelegates[0]), window.dispatchEvent(new CustomEvent(V.LOAD_START, { detail: {
      canvas: this._canvas,
      total: 0
    } })), s.onProgress = (n, o, l) => {
      window.dispatchEvent(new CustomEvent(V.LOAD_PROGRESS, { detail: {
        canvas: this._canvas,
        loaded: n,
        total: o,
        file: l
      } }));
    }, s.onMotionStart = ({ group: n, index: o, duration: l, file: h }) => {
      window.dispatchEvent(new CustomEvent(V.MOTION_START, { detail: {
        canvas: this._canvas,
        group: n,
        index: o,
        duration: l,
        file: h
      } }));
    }, s.onMotionEnd = ({ group: n, index: o, file: l }) => {
      window.dispatchEvent(new CustomEvent(V.MOTION_END, { detail: {
        canvas: this._canvas,
        group: n,
        index: o,
        file: l
      } }));
    }, s.loadAssets(r, a), i._models.push(s);
  }
  setPosition(t, e) {
    let a = this._subdelegates[0];
    a._userPosition = [t, e];
    let r = a._view;
    r._viewMatrix.translate(t, e), a.getLive2DManager().setViewMatrix(r._viewMatrix);
  }
  setParams(t) {
    let e = this._subdelegates[0]?.getLive2DManager()?._models?.[0];
    e && (e._forcedParams = { ...t });
  }
  getParams() {
    let t = this._subdelegates[0]?.getLive2DManager()?._models?.[0];
    if (!t?._model) return [];
    let e = t._model, a = e.getParameterCount();
    return Array.from({ length: a }, (r, i) => ({
      id: e.getParameterId(i).getString(),
      value: e.getParameterValueByIndex(i),
      min: e.getParameterMinimumValue(i),
      max: e.getParameterMaximumValue(i),
      default: e.getParameterDefaultValue(i)
    }));
  }
  setVolume(t) {
    let e = this._subdelegates[0]?.getLive2DManager()?._models?.[0];
    e && (e._volume = t);
  }
  setScale(t) {
    let e = this._subdelegates[0];
    e._userScale = t;
    let a = e._view;
    a.initialize(e), a._viewMatrix.adjustScale(0, 0, t), e._userPosition !== void 0 && a._viewMatrix.translate(e._userPosition[0], e._userPosition[1]), e.getLive2DManager().setViewMatrix(a._viewMatrix);
  }
  resize() {
    let t = this._subdelegates[0], e = t.getCanvas(), a = e.width, r = e.height;
    t._view.initialize(t), t.getGlManager().getGl().viewport(0, 0, a, r), t._userScale !== void 0 && t._view._viewMatrix.adjustScale(0, 0, t._userScale), t._userPosition !== void 0 && t._view._viewMatrix.translate(t._userPosition[0], t._userPosition[1]), t.getLive2DManager().setViewMatrix(t._view._viewMatrix);
  }
  getHitAreaBounds() {
    if (!this._isModelReady()) return [];
    let t = this._subdelegates[0], e = t.getLive2DManager()._models[0], a = t._view, r = e._modelSetting.getHitAreasCount(), i = [];
    for (let s = 0; s < r; s++) {
      let n = e._modelSetting.getHitAreaName(s), o = e._modelSetting.getHitAreaId(s), l = e._model.getDrawableIndex(o);
      if (l < 0) continue;
      let h = e._model.getDrawableVertexCount(l), _ = e._model.getDrawableVertices(l), g = _[0], u = _[0], d = _[1], c = _[1];
      for (let Ct = 1; Ct < h; Ct++) {
        let It = _[Ct * 2], xt = _[Ct * 2 + 1];
        It < g && (g = It), It > u && (u = It), xt < d && (d = xt), xt > c && (c = xt);
      }
      let p = e._modelMatrix.transformX(g), f = e._modelMatrix.transformX(u), m = e._modelMatrix.transformY(d), v = e._modelMatrix.transformY(c), b = a._viewMatrix.transformX(p), y = a._viewMatrix.transformX(f), S = a._viewMatrix.transformY(m), C = a._viewMatrix.transformY(v), P = a._deviceToScreen.invertTransformX(b), w = a._deviceToScreen.invertTransformX(y), A = a._deviceToScreen.invertTransformY(S), ft = a._deviceToScreen.invertTransformY(C);
      i.push({
        name: n,
        x: Math.min(P, w),
        y: Math.min(A, ft),
        w: Math.abs(w - P),
        h: Math.abs(ft - A)
      });
    }
    return i;
  }
  playMotion(t, e, a = 2) {
    if (this._released) return;
    let r = this._subdelegates[0]?.getLive2DManager()?._models?.[0];
    if (!r) return;
    let i = e === void 0 ? Math.floor(Math.random() * r._modelSetting.getMotionCount(t)) : e;
    r.startMotion(t, i, a);
  }
  getMotionGroups() {
    let t = this._subdelegates[0]?.getLive2DManager()?._models?.[0];
    if (!t?._modelSetting) return {};
    let e = {}, a = t._modelSetting.getMotionGroupCount();
    for (let r = 0; r < a; r++) {
      let i = t._modelSetting.getMotionGroupName(r);
      e[i] = t._modelSetting.getMotionCount(i);
    }
    return e;
  }
  getMotionFiles() {
    let t = this._subdelegates[0]?.getLive2DManager()?._models?.[0];
    if (!t?._modelSetting) return {};
    let e = {}, a = t._modelSetting.getMotionGroupCount();
    for (let r = 0; r < a; r++) {
      let i = t._modelSetting.getMotionGroupName(r), s = t._modelSetting.getMotionCount(i);
      e[i] = [];
      for (let n = 0; n < s; n++) e[i].push(t._modelSetting.getMotionFileName(i, n));
    }
    return e;
  }
  setExpression(t) {
    let e = this._subdelegates[0]?.getLive2DManager()?._models?.[0];
    if (e) {
      if (t) e.setExpression(t);
      else {
        if (e._expressions.size === 0) return;
        let a = [...e._expressions.keys()];
        t = a[Math.floor(Math.random() * a.length)], e.setExpression(t);
      }
      window.dispatchEvent(new CustomEvent(V.EXPRESSION_START, { detail: {
        canvas: this._canvas,
        id: t
      } }));
    }
  }
  getExpressions() {
    let t = this._subdelegates[0]?.getLive2DManager()?._models?.[0];
    if (!t?._modelSetting) return [];
    let e = [], a = t._modelSetting.getExpressionCount();
    for (let r = 0; r < a; r++) e.push(t._modelSetting.getExpressionName(r));
    return e;
  }
  get subdelegates() {
    return this._subdelegates;
  }
};
async function Fo(t, e, a, r) {
  let i = new li(e);
  t.state.l2d2Model = i;
  try {
    await i.init(e, a.path, r);
  } catch (s) {
    st.error("Failed to initialize Cubism2 model.", s);
    return;
  }
  a.position && i.setPosition(a.position[0], a.position[1]), t.resize(), typeof a.scale == "number" && i.setScale(a.scale), typeof a.volume == "number" && i.setVolume(a.volume), t.emit("loaded");
}
async function Vo(t, e, a) {
  let r = new No(e);
  if (t.state.l2d6Model = r, !r.initialize()) {
    st.error("Failed to initialize Cubism6 model");
    return;
  }
  typeof a.scale == "number" && r.setScale(a.scale), a.position && r.setPosition(a.position[0], a.position[1]), typeof a.volume == "number" && r.setVolume(a.volume), r.changeModel(a.path), r.run(), await new Promise((i) => {
    r.onLoaded(() => {
      t.resize(), t.emit("loaded"), i();
    });
  });
}
async function Uo(t, e) {
  let { state: a } = t, r = t.canvas, i = a.currentVersion;
  a.l2d2Model &&= (a.l2d2Model.destroy(), null), a.l2d6Model &&= (a.l2d6Model.release(), null), a.currentVersion = null;
  let s;
  try {
    s = await fetch(e.path);
  } catch (l) {
    st.error(`Failed to fetch model config: ${e.path}`, l);
    return;
  }
  if (!s.ok) {
    st.error(`Failed to load model config: ${s.status} ${s.statusText} (${e.path})`);
    return;
  }
  let n = await s.json(), o = qr(n);
  i !== null && i !== o && (r = t.replaceCanvas()), a.currentVersion = o, o === 2 ? await Fo(t, r, e, n) : await Vo(t, r, e);
}
function Ua(t) {
  return typeof t == "number" && !Number.isNaN(t);
}
var ko = class {
  constructor(t) {
    this.state = t;
  }
  isReady(t) {
    return this.state.currentVersion !== null || (st.warn(`${t}: model not loaded yet, call this after the loaded event.`), !1);
  }
  playMotion(t, e, a) {
    if (!this.isReady("playMotion")) return;
    let r = this.getMotionGroups()[t];
    if (!Ua(r)) {
      st.warn(`playMotion: motion group "${t}" not found.`);
      return;
    }
    if (Ua(e) && (e < 0 || e >= r)) {
      st.warn(`playMotion: motion index ${e} out of range for group "${t}" (0-${r - 1}).`);
      return;
    }
    this.state.currentVersion === 2 ? this.state.l2d2Model.playMotion(t, e, a) : this.state.l2d6Model.playMotion(t, e, a);
  }
  getMotionGroups() {
    return this.isReady("getMotionGroups") ? this.state.currentVersion === 2 ? this.state.l2d2Model.getMotionGroups() : this.state.l2d6Model.getMotionGroups() : {};
  }
  getMotions() {
    return this.isReady("getMotions") ? this.state.currentVersion === 2 ? this.state.l2d2Model.getMotionFiles() : this.state.l2d6Model.getMotionFiles() : {};
  }
  playMotionByFile(t, e) {
    let a = this.getMotions();
    for (let [r, i] of Object.entries(a)) {
      let s = i.findIndex((n) => n === t || n.startsWith(`${t}.`));
      if (s !== -1) {
        this.playMotion(r, s, e);
        return;
      }
    }
    st.warn(`playMotionByFile: motion file "${t}" not found.`);
  }
}, Jo = class extends Qr {
  canvas;
  _state = {
    currentVersion: null,
    l2d2Model: null,
    l2d6Model: null
  };
  _motionCtrl = new ko(this._state);
  _exprCtrl = new Wr(this._state);
  constructor(t) {
    super(), this.canvas = t, this._on(V.MOTION_START, (e) => this.emit("motionstart", e.group, e.index, e.duration ?? -1, e.file ?? null)), this._on(V.EXPRESSION_START, (e) => this.emit("expressionchange", e.id)), this._on(V.LOAD_START, (e) => this.emit("loadstart", e.total)), this._on(V.LOAD_PROGRESS, (e) => this.emit("loadprogress", e.loaded, e.total, e.file)), this._on(V.TAP_BODY, (e) => this.emit("tap", e.areaName ?? "")), this._on(V.MOTION_END, (e) => this.emit("motionend", e.group, e.index, e.file ?? null));
  }
  _on(t, e) {
    window.addEventListener(t, (a) => {
      let r = a.detail;
      r?.canvas === this.canvas && e(r);
    });
  }
  _replaceCanvas() {
    return this.canvas = zr(this.canvas), this.canvas;
  }
  load(t) {
    return st.setLevel(t.logLevel), Uo({
      canvas: this.canvas,
      state: this._state,
      resize: () => this.resize(),
      emit: () => this.emit("loaded"),
      replaceCanvas: () => this._replaceCanvas()
    }, t);
  }
  create(t) {
    return this.load(t);
  }
  resize() {
    this._state.currentVersion === 2 && this._state.l2d2Model ? this._state.l2d2Model.resize() : this._state.currentVersion !== null && this._state.l2d6Model && this._state.l2d6Model.resize();
  }
  getCanvas() {
    return this.canvas;
  }
  playMotion(t, e, a) {
    this._motionCtrl.playMotion(t, e, a);
  }
  getMotions() {
    return this._motionCtrl.getMotions();
  }
  playMotionByFile(t, e) {
    this._motionCtrl.playMotionByFile(t, e);
  }
  getExpressions() {
    return this._exprCtrl.getExpressions();
  }
  setExpression(t) {
    this._exprCtrl.setExpression(t);
  }
  setVolume(t) {
    this._state.currentVersion === 2 && this._state.l2d2Model ? this._state.l2d2Model.setVolume(t) : this._state.currentVersion !== null && this._state.l2d6Model && this._state.l2d6Model.setVolume(t);
  }
  setScale(t) {
    this._state.currentVersion === 2 && this._state.l2d2Model ? this._state.l2d2Model.setScale(t) : this._state.currentVersion !== null && this._state.l2d6Model && this._state.l2d6Model.setScale(t);
  }
  setPosition(t, e) {
    this._state.currentVersion === 2 && this._state.l2d2Model ? this._state.l2d2Model.setPosition(t, e) : this._state.currentVersion !== null && this._state.l2d6Model && this._state.l2d6Model.setPosition(t, e);
  }
  setParams(t) {
    this._state.currentVersion === 2 && this._state.l2d2Model ? this._state.l2d2Model.setParams(t) : this._state.currentVersion !== null && this._state.l2d6Model && this._state.l2d6Model.setParams(t);
  }
  getParams() {
    return this._state.currentVersion === 2 && this._state.l2d2Model ? this._state.l2d2Model.getParams() : this._state.currentVersion !== null && this._state.l2d6Model ? this._state.l2d6Model.getParams() : [];
  }
  getHitAreaBounds() {
    let t = this._state.currentVersion === 2 && this._state.l2d2Model ? this._state.l2d2Model.getHitAreaBounds() : this._state.currentVersion !== null && this._state.l2d6Model ? this._state.l2d6Model.getHitAreaBounds() : [], { width: e, height: a } = this.canvas;
    return t.map((r) => ({
      name: r.name,
      x: r.x / e,
      y: r.y / a,
      w: r.w / e,
      h: r.h / a
    }));
  }
  destroy() {
    this._state.l2d2Model && (this._state.l2d2Model.destroy(), this._state.l2d2Model = null), this._state.l2d6Model && (this._state.l2d6Model.release(), this._state.l2d6Model = null), this._state.currentVersion = null;
    let t = this.canvas.getContext("webgl2") ?? this.canvas.getContext("webgl");
    if (t && !t.isContextLost()) {
      t.bindFramebuffer(t.FRAMEBUFFER, null), t.disable(t.SCISSOR_TEST), t.colorMask(!0, !0, !0, !0);
      let e = t.drawingBufferWidth, a = t.drawingBufferHeight;
      t.viewport(0, 0, e || this.canvas.width, a || this.canvas.height), t.clearColor(0, 0, 0, 0), t.clear(t.COLOR_BUFFER_BIT);
    }
    this.emit("destroy");
  }
};
function ka(t) {
  return t ? t instanceof HTMLCanvasElement ? new Jo(t) : (st.error("Target element node is not a canvas element."), null) : (st.error("Target element node not found."), null);
}
function Ko(t) {
  let e = [];
  if (t.length > 1) {
    let a = 0;
    e.push({
      icon: "mdi:shuffle-variant",
      label: "Switch model",
      onClick(r) {
        a = (a + 1) % t.length, r.switchModel(a);
      }
    });
  }
  return e.push({
    icon: "mdi:bed",
    label: "休眠",
    onClick(a) {
      a.sleep();
    }
  }), e.push({
    icon: "mdi:information-outline",
    label: "About",
    onClick() {
      window.open("https://github.com/hacxy/l2d-widget", "_blank", "noopener");
    }
  }), e;
}
var Re = /* @__PURE__ */ new Map();
async function Go(t) {
  if (Re.has(t)) return Re.get(t);
  let [e, ...a] = t.split(":"), r = a.join(":");
  if (!e || !r) return null;
  try {
    let i = await fetch(`https://api.iconify.design/${e}/${r}.svg`);
    if (!i.ok) return null;
    let s = await i.text();
    return Re.set(t, s), s;
  } catch {
    return null;
  }
}
function Yo(t, e, a) {
  let r = document.createElement("button");
  return r.title = t.label, r.textContent = t.label, Object.assign(r.style, {
    width: "28px",
    height: "28px",
    border: "none",
    borderRadius: "50%",
    background: a,
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "16px",
    color: "rgba(255,255,255,0.75)",
    padding: "0",
    transition: "color 0.15s",
    flexShrink: "0"
  }), r.addEventListener("mouseenter", () => {
    r.style.color = "rgba(255,255,255,1)";
  }), r.addEventListener("mouseleave", () => {
    r.style.color = "rgba(255,255,255,0.75)";
  }), r.addEventListener("click", () => {
    t.onClick(e);
  }), t.icon && Go(t.icon).then((i) => {
    if (!i) return;
    r.innerHTML = i, r.title = t.label;
    let s = r.querySelector("svg");
    s && Object.assign(s.style, {
      width: "1em",
      height: "1em",
      pointerEvents: "none"
    });
  }), r;
}
function jo(t, e, { align: a = "right", primaryColor: r, style: i }) {
  let s = document.createElement("div");
  Object.assign(s.style, {
    position: "absolute",
    [a]: "4px",
    top: "50%",
    transform: "translateY(-50%)",
    display: "flex",
    flexDirection: "column",
    gap: "4px",
    padding: "4px",
    zIndex: "1",
    opacity: "0",
    pointerEvents: "none",
    transition: "opacity 0.2s ease-in-out"
  }), i && Object.assign(s.style, i);
  for (let n of t) s.appendChild(Yo(n, e, r));
  return {
    el: s,
    show() {
      s.style.opacity = "1", s.style.pointerEvents = "auto";
    },
    hide() {
      s.style.opacity = "0", s.style.pointerEvents = "none";
    },
    destroy() {
      s.remove();
    }
  };
}
function Xo() {
  if (document.getElementById("l2dw-spin")) return;
  let t = document.createElement("style");
  t.id = "l2dw-spin", t.textContent = "@keyframes l2dw-spin { to { transform: rotate(360deg) } }", document.head.appendChild(t);
}
function zo(t, e, a, r, i) {
  Xo();
  let s = t === "bottom-right", n = `translateY(50%) translateX(${s ? "100%" : "-100%"})`, o = "translateY(50%) translateX(0)", l = null, h = document.createElement("div");
  Object.assign(h.style, {
    position: "fixed",
    [s ? "right" : "left"]: "0",
    bottom: `${a / 2}px`,
    transform: n,
    transition: `transform ${e}ms cubic-bezier(0.19, 1, 0.22, 1)`,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "8px",
    padding: "16px 3px",
    background: r,
    backdropFilter: "blur(8px)",
    borderRadius: s ? "8px 0 0 8px" : "0 8px 8px 0",
    color: "rgba(255,255,255,0.85)",
    fontSize: "12px",
    zIndex: "9998",
    pointerEvents: "none",
    willChange: "transform"
  }), i && Object.assign(h.style, i), h.addEventListener("click", () => {
    l?.();
  });
  let _ = document.createElement("div");
  Object.assign(_.style, {
    width: "12px",
    height: "12px",
    border: "2px solid rgba(255,255,255,0.25)",
    borderTopColor: "rgba(255,255,255,0.85)",
    borderRadius: "50%",
    animation: "l2dw-spin 0.7s linear infinite",
    flexShrink: "0"
  });
  let g = document.createElement("span");
  return g.style.writingMode = "vertical-rl", h.appendChild(g), h.appendChild(_), {
    el: h,
    showLoading(u = "正在加载") {
      g.textContent = u, _.style.display = "block", h.style.pointerEvents = "none", h.style.cursor = "default", l = null, h.offsetHeight, h.style.transform = o;
    },
    showRest(u) {
      g.textContent = "正在休息", _.style.display = "none", h.style.pointerEvents = "auto", h.style.cursor = "pointer", l = u, h.offsetHeight, h.style.transform = o;
    },
    hide() {
      h.style.pointerEvents = "none", h.style.cursor = "default", l = null, h.style.transform = n;
    },
    destroy() {
      h.remove();
    }
  };
}
function Qo() {
  if (document.getElementById("l2dw-tips-style")) return;
  let t = document.createElement("style");
  t.id = "l2dw-tips-style", t.textContent = `
    @keyframes l2dw-tips-in {
      from { opacity: 0; transform: translateY(8px) scale(0.9) }
      to   { opacity: 1; transform: translateY(0)   scale(1)   }
    }
    @keyframes l2dw-tips-float {
      0%, 100% { transform: translateY(0) }
      50%      { transform: translateY(-5px) }
    }
  `, document.head.appendChild(t);
}
function Wo(t, e) {
  Qo();
  let { offset: a, typing: r, style: i } = e ?? {}, s = a?.x ?? 0, n = a?.y ?? 0, o = r?.param, l = r?.speed ?? 100, h = r?.minValue ?? 0.5, _ = r?.maxValue ?? 1, g, u, d, c, p = document.createElement("div");
  Object.assign(p.style, {
    position: "absolute",
    bottom: `calc(100% + ${10 + n}px)`,
    left: `calc(50% + ${s}px)`,
    transform: "translateX(-50%)",
    pointerEvents: "none",
    zIndex: "2"
  });
  let f = document.createElement("div");
  Object.assign(f.style, {
    position: "relative",
    background: t,
    borderRadius: "8px",
    padding: "8px 14px",
    color: "rgba(255,255,255,0.95)",
    fontSize: "13px",
    lineHeight: "1.5",
    maxWidth: "200px",
    textAlign: "center",
    wordBreak: "break-word",
    opacity: "0",
    whiteSpace: "nowrap"
  }), i && Object.assign(f.style, i);
  let m = document.createElement("div");
  Object.assign(m.style, {
    position: "absolute",
    bottom: "-7px",
    left: "50%",
    transform: "translateX(-50%)",
    width: "0",
    height: "0",
    borderLeft: "6px solid transparent",
    borderRight: "6px solid transparent",
    borderTop: `7px solid ${t}`
  }), f.appendChild(m), p.appendChild(f);
  let v = document.createElement("span");
  f.prepend(v);
  function b() {
    c && o && c.setParams({ [o]: 0 });
  }
  function y() {
    f.style.opacity = "1", f.style.animation = "l2dw-tips-float 2.5s ease-in-out infinite";
  }
  function S(P) {
    let w = 0;
    function A() {
      if (w >= P.length) {
        b(), y();
        return;
      }
      v.textContent = P.slice(0, w + 1).join(""), w++, c && o && (c.setParams({ [o]: h + Math.random() * (_ - h) }), setTimeout(b, l / 2)), d = setTimeout(A, l);
    }
    A();
  }
  function C() {
    clearTimeout(g), clearTimeout(u), clearTimeout(d), b(), f.style.transition = "none", f.style.animation = "none", f.style.opacity = "0", f.style.transform = "", v.textContent = "";
  }
  return {
    el: p,
    show(P, w) {
      if (C(), c = w, f.offsetHeight, f.style.animation = "l2dw-tips-in 0.35s ease-out forwards", r) {
        let A = [...P];
        g = setTimeout(() => {
          S(A);
        }, 350);
      } else v.textContent = P, g = setTimeout(() => {
        y();
      }, 350);
    },
    hide() {
      clearTimeout(g), clearTimeout(u), clearTimeout(d), b(), f.style.animation = "none", f.style.opacity = "1", f.offsetHeight, f.style.transition = "opacity 0.25s ease, transform 0.25s ease", f.style.opacity = "0", f.style.transform = "translateY(6px)", u = setTimeout(() => {
        f.style.transition = "none", f.style.transform = "";
      }, 260);
    },
    destroy() {
      clearTimeout(g), clearTimeout(u), clearTimeout(d), b(), p.remove();
    }
  };
}
function qo(t) {
  return typeof t == "number" ? {
    width: t,
    height: t
  } : t;
}
function Zo(t, e) {
  return t ? {
    transform: "translateY(130%)",
    transition: `transform ${e}ms cubic-bezier(0.19, 1, 0.22, 1)`,
    willChange: "transform"
  } : {
    opacity: "0",
    transition: `opacity ${e}ms ease-in-out`,
    willChange: "opacity"
  };
}
function qt(t, e, a) {
  e ? t.style.transform = a ? "translateY(0)" : "translateY(130%)" : t.style.opacity = a ? "1" : "0";
}
function tl(t, e) {
  return e?.items ? e.items : [...Ko(t), ...e?.extraItems ?? []];
}
function Ja(t) {
  return t === !1 ? null : {
    welcomeMessages: t?.welcomeMessage ?? [
      "欢迎来访！",
      "好久不见，欢迎回来！",
      "你来啦～"
    ],
    messages: t?.messages ?? [
      "记得多休息哦～",
      "有什么可以帮你的吗？",
      "今天也要开心哦！"
    ],
    duration: t?.duration ?? 3e3,
    interval: t?.interval ?? 5e3
  };
}
function el(t, e) {
  let a, r = () => {
    clearTimeout(a), e.show();
  }, i = () => {
    a = setTimeout(() => {
      e.hide();
    }, 150);
  };
  return t.addEventListener("mouseenter", r), t.addEventListener("mouseleave", i), e.el.addEventListener("mouseenter", r), e.el.addEventListener("mouseleave", i), () => {
    clearTimeout(a);
  };
}
function al(t) {
  let { position: e = "bottom-left", size: a = 300, transitionDuration: r = 1500, transitionType: i, primaryColor: s = "rgba(96,165,250,0.9)", menus: n, statusBar: o } = t, l = Array.isArray(t.model) ? t.model : [t.model], { width: h, height: _ } = qo(a), g = i !== "fade", u = document.createElement("div");
  Object.assign(u.style, {
    position: "fixed",
    bottom: "0",
    [e === "bottom-right" ? "right" : "left"]: "0",
    zIndex: "9999",
    width: `${h}px`,
    height: `${_}px`,
    pointerEvents: "none",
    ...Zo(g, r)
  });
  let d = document.createElement("canvas");
  d.width = h, d.height = _, Object.assign(d.style, {
    width: "100%",
    height: "100%",
    pointerEvents: "auto"
  }), u.appendChild(d), document.body.appendChild(u);
  let c = zo(e, r, _, s, o?.style);
  document.body.appendChild(c.el);
  let p = ka(d), f, m, v, b, y, S, C = 0, P = Ja(l[0]?.tips);
  function w(K) {
    P && (m?.show(K, p), y = setTimeout(() => {
      m?.hide();
    }, P.duration));
  }
  function A() {
    clearTimeout(b), clearTimeout(y), clearInterval(S);
  }
  function ft() {
    !P || P.messages.length === 0 || (A(), S = setInterval(() => {
      w(P.messages[C % P.messages.length]), C++;
    }, P.interval));
  }
  function Ct() {
    if (!P || P.welcomeMessages.length === 0) return;
    let K = P.welcomeMessages;
    b = setTimeout(() => {
      w(K[Math.floor(Math.random() * K.length)]), ft();
    }, r);
  }
  function It(K) {
    let dt = l[K];
    return p.load({
      path: dt.path,
      scale: dt.scale,
      position: dt.offset,
      volume: dt.volume,
      logLevel: dt.logLevel
    });
  }
  function xt(K) {
    let dt = l[K];
    if (P = Ja(dt.tips), C = 0, m &&= (m.destroy(), null), P) {
      let Xt = dt.tips;
      m = Wo(s, {
        offset: Xt?.offset,
        typing: Xt?.typing,
        style: Xt?.style
      }), u.appendChild(m.el);
    }
    c.showLoading(), p.on("loaded", () => {
      c.hide(), qt(u, g, !0), Ct();
    });
  }
  xt(0), It(0);
  function ra() {
    return g ? new Promise((K) => {
      u.addEventListener("transitionend", () => {
        K();
      }, { once: !0 });
    }) : new Promise((K) => {
      setTimeout(K, r);
    });
  }
  let ia = {
    get l2d() {
      return p;
    },
    sleep() {
      A(), m?.hide(), qt(u, g, !1), d.style.pointerEvents = "none", f.hide(), c.showRest(() => {
        d.style.pointerEvents = "auto", c.hide(), qt(u, g, !0), Ct();
      });
    },
    async switchModel(K) {
      A(), m?.hide(), c.showLoading("切换中"), qt(u, g, !1), await ra();
      let dt = new Promise((Xt) => {
        p.on("destroy", Xt);
      });
      p.destroy(), await dt, p = ka(d), xt(K), await It(K);
    },
    async destroy() {
      A(), v(), m?.destroy(), f.destroy(), c.destroy(), qt(u, g, !1), await ra(), p.destroy(), document.body.removeChild(u);
    }
  };
  return f = jo(tl(l, n), ia, {
    align: n?.align,
    primaryColor: s,
    style: n?.style
  }), u.appendChild(f.el), v = el(d, f), ia;
}
export {
  al as createWidget
};
