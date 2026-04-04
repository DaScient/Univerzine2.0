import{M as Pt,O as Et,B as _e,F as Qe,N as ce,S as B,W as ee,a as Fe,R as Ie,D as nt,C as ve,U as Le,V as p,H as te,b as Ft,c as lt,d as ge,e as y,A as Be,f as It,g as Lt,h as X,T as Y,Q as ke,i as Ke,j as kt,P as ht,k as de,l as Ot,E as Ze,L as Je,m as Bt,n as zt,o as Nt,p as Ht,q as Q,r as Gt,s as ze,t as xe}from"./three-Bq0pnLTr.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function t(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(s){if(s.ep)return;s.ep=!0;const o=t(s);fetch(s.href,o)}})();class oe{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const Ut=new Et(-1,1,1,-1,0,1);class Vt extends _e{constructor(){super(),this.setAttribute("position",new Qe([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Qe([0,2,0,0,2,0],2))}}const qt=new Vt;class Ne{constructor(e){this._mesh=new Pt(qt,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,Ut)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class jt{constructor(e,t,i){this.variables=[],this.currentTextureIndex=0;let s=Fe;const o={passThruTexture:{value:null}},r=T(d(),o),n=new Ne(r);this.setDataType=function(c){return s=c,this},this.addVariable=function(c,l,v){const C=this.createShaderMaterial(l),g={name:c,initialValueTexture:v,material:C,dependencies:null,renderTargets:[],wrapS:null,wrapT:null,minFilter:ce,magFilter:ce};return this.variables.push(g),g},this.setVariableDependencies=function(c,l){c.dependencies=l},this.init=function(){if(i.capabilities.maxVertexTextures===0)return"No support for vertex shader textures.";for(let c=0;c<this.variables.length;c++){const l=this.variables[c];l.renderTargets[0]=this.createRenderTarget(e,t,l.wrapS,l.wrapT,l.minFilter,l.magFilter),l.renderTargets[1]=this.createRenderTarget(e,t,l.wrapS,l.wrapT,l.minFilter,l.magFilter),this.renderTexture(l.initialValueTexture,l.renderTargets[0]),this.renderTexture(l.initialValueTexture,l.renderTargets[1]);const v=l.material,C=v.uniforms;if(l.dependencies!==null)for(let g=0;g<l.dependencies.length;g++){const R=l.dependencies[g];if(R.name!==l.name){let k=!1;for(let G=0;G<this.variables.length;G++)if(R.name===this.variables[G].name){k=!0;break}if(!k)return"Variable dependency not found. Variable="+l.name+", dependency="+R.name}C[R.name]={value:null},v.fragmentShader=`
uniform sampler2D `+R.name+`;
`+v.fragmentShader}}return this.currentTextureIndex=0,null},this.compute=function(){const c=this.currentTextureIndex,l=this.currentTextureIndex===0?1:0;for(let v=0,C=this.variables.length;v<C;v++){const g=this.variables[v];if(g.dependencies!==null){const R=g.material.uniforms;for(let k=0,G=g.dependencies.length;k<G;k++){const J=g.dependencies[k];R[J.name].value=J.renderTargets[c].texture}}this.doRenderTarget(g.material,g.renderTargets[l])}this.currentTextureIndex=l},this.getCurrentRenderTarget=function(c){return c.renderTargets[this.currentTextureIndex]},this.getAlternateRenderTarget=function(c){return c.renderTargets[this.currentTextureIndex===0?1:0]},this.dispose=function(){n.dispose();const c=this.variables;for(let l=0;l<c.length;l++){const v=c[l];v.initialValueTexture&&v.initialValueTexture.dispose();const C=v.renderTargets;for(let g=0;g<C.length;g++)C[g].dispose()}};function m(c){c.defines.resolution="vec2( "+e.toFixed(1)+", "+t.toFixed(1)+" )"}this.addResolutionDefine=m;function T(c,l){l=l||{};const v=new B({name:"GPUComputationShader",uniforms:l,vertexShader:D(),fragmentShader:c});return m(v),v}this.createShaderMaterial=T,this.createRenderTarget=function(c,l,v,C,g,R){return c=c||e,l=l||t,v=v||ve,C=C||ve,g=g||ce,R=R||ce,new ee(c,l,{wrapS:v,wrapT:C,minFilter:g,magFilter:R,format:Ie,type:s,depthBuffer:!1})},this.createTexture=function(){const c=new Float32Array(e*t*4),l=new nt(c,e,t,Ie,Fe);return l.needsUpdate=!0,l},this.renderTexture=function(c,l){o.passThruTexture.value=c,this.doRenderTarget(r,l),o.passThruTexture.value=null},this.doRenderTarget=function(c,l){const v=i.getRenderTarget(),C=i.xr.enabled,g=i.shadowMap.autoUpdate;i.xr.enabled=!1,i.shadowMap.autoUpdate=!1,n.material=c,i.setRenderTarget(l),n.render(i),n.material=r,i.xr.enabled=C,i.shadowMap.autoUpdate=g,i.setRenderTarget(v)};function D(){return`void main()	{

	gl_Position = vec4( position, 1.0 );

}
`}function d(){return`uniform sampler2D passThruTexture;

void main() {

	vec2 uv = gl_FragCoord.xy / resolution.xy;

	gl_FragColor = texture2D( passThruTexture, uv );

}
`}}}const ct={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class ut extends oe{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof B?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Le.clone(e.uniforms),this.material=new B({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new Ne(this.material)}render(e,t,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class $e extends oe{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,i){const s=e.getContext(),o=e.state;o.buffers.color.setMask(!1),o.buffers.depth.setMask(!1),o.buffers.color.setLocked(!0),o.buffers.depth.setLocked(!0);let r,n;this.inverse?(r=0,n=1):(r=1,n=0),o.buffers.stencil.setTest(!0),o.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),o.buffers.stencil.setFunc(s.ALWAYS,r,4294967295),o.buffers.stencil.setClear(n),o.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),o.buffers.color.setLocked(!1),o.buffers.depth.setLocked(!1),o.buffers.color.setMask(!0),o.buffers.depth.setMask(!0),o.buffers.stencil.setLocked(!1),o.buffers.stencil.setFunc(s.EQUAL,1,4294967295),o.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),o.buffers.stencil.setLocked(!0)}}class Yt extends oe{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class Wt{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const i=e.getSize(new p);this._width=i.width,this._height=i.height,t=new ee(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:te}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new ut(ct),this.copyPass.material.blending=Ft,this.clock=new lt}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let i=!1;for(let s=0,o=this.passes.length;s<o;s++){const r=this.passes[s];if(r.enabled!==!1){if(r.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),r.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),r.needsSwap){if(i){const n=this.renderer.getContext(),m=this.renderer.state.buffers.stencil;m.setFunc(n.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),m.setFunc(n.EQUAL,1,4294967295)}this.swapBuffers()}$e!==void 0&&(r instanceof $e?i=!0:r instanceof Yt&&(i=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new p);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const i=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(i,s),this.renderTarget2.setSize(i,s);for(let o=0;o<this.passes.length;o++)this.passes[o].setSize(i,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class Xt extends oe{constructor(e,t,i=null,s=null,o=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=i,this.clearColor=s,this.clearAlpha=o,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new ge}render(e,t,i){const s=e.autoClear;e.autoClear=!1;let o,r;this.overrideMaterial!==null&&(r=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(o=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(o),this.overrideMaterial!==null&&(this.scene.overrideMaterial=r),e.autoClear=s}}const Qt={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new ge(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class K extends oe{constructor(e,t,i,s){super(),this.strength=t!==void 0?t:1,this.radius=i,this.threshold=s,this.resolution=e!==void 0?new p(e.x,e.y):new p(256,256),this.clearColor=new ge(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let o=Math.round(this.resolution.x/2),r=Math.round(this.resolution.y/2);this.renderTargetBright=new ee(o,r,{type:te}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let d=0;d<this.nMips;d++){const c=new ee(o,r,{type:te});c.texture.name="UnrealBloomPass.h"+d,c.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(c);const l=new ee(o,r,{type:te});l.texture.name="UnrealBloomPass.v"+d,l.texture.generateMipmaps=!1,this.renderTargetsVertical.push(l),o=Math.round(o/2),r=Math.round(r/2)}const n=Qt;this.highPassUniforms=Le.clone(n.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new B({uniforms:this.highPassUniforms,vertexShader:n.vertexShader,fragmentShader:n.fragmentShader}),this.separableBlurMaterials=[];const m=[3,5,7,9,11];o=Math.round(this.resolution.x/2),r=Math.round(this.resolution.y/2);for(let d=0;d<this.nMips;d++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(m[d])),this.separableBlurMaterials[d].uniforms.invSize.value=new p(1/o,1/r),o=Math.round(o/2),r=Math.round(r/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;const T=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=T,this.bloomTintColors=[new y(1,1,1),new y(1,1,1),new y(1,1,1),new y(1,1,1),new y(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const D=ct;this.copyUniforms=Le.clone(D.uniforms),this.blendMaterial=new B({uniforms:this.copyUniforms,vertexShader:D.vertexShader,fragmentShader:D.fragmentShader,blending:Be,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new ge,this.oldClearAlpha=1,this.basic=new It,this.fsQuad=new Ne(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let i=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(i,s);for(let o=0;o<this.nMips;o++)this.renderTargetsHorizontal[o].setSize(i,s),this.renderTargetsVertical[o].setSize(i,s),this.separableBlurMaterials[o].uniforms.invSize.value=new p(1/i,1/s),i=Math.round(i/2),s=Math.round(s/2)}render(e,t,i,s,o){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();const r=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),o&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=i.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let n=this.renderTargetBright;for(let m=0;m<this.nMips;m++)this.fsQuad.material=this.separableBlurMaterials[m],this.separableBlurMaterials[m].uniforms.colorTexture.value=n.texture,this.separableBlurMaterials[m].uniforms.direction.value=K.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[m]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[m].uniforms.colorTexture.value=this.renderTargetsHorizontal[m].texture,this.separableBlurMaterials[m].uniforms.direction.value=K.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[m]),e.clear(),this.fsQuad.render(e),n=this.renderTargetsVertical[m];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,o&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(i),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=r}getSeperableBlurMaterial(e){const t=[];for(let i=0;i<e;i++)t.push(.39894*Math.exp(-.5*i*i/(e*e))/e);return new B({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new p(.5,.5)},direction:{value:new p(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}getCompositeMaterial(e){return new B({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}}K.BlurDirectionX=new p(1,0);K.BlurDirectionY=new p(0,1);const et={type:"change"},He={type:"start"},mt={type:"end"},ue=new kt,tt=new ht,Kt=Math.cos(70*de.DEG2RAD),x=new y,P=2*Math.PI,f={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Pe=1e-6;class Zt extends Lt{constructor(e,t=null){super(e,t),this.state=f.NONE,this.enabled=!0,this.target=new y,this.cursor=new y,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:X.ROTATE,MIDDLE:X.DOLLY,RIGHT:X.PAN},this.touches={ONE:Y.ROTATE,TWO:Y.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new y,this._lastQuaternion=new ke,this._lastTargetPosition=new y,this._quat=new ke().setFromUnitVectors(e.up,new y(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Ke,this._sphericalDelta=new Ke,this._scale=1,this._panOffset=new y,this._rotateStart=new p,this._rotateEnd=new p,this._rotateDelta=new p,this._panStart=new p,this._panEnd=new p,this._panDelta=new p,this._dollyStart=new p,this._dollyEnd=new p,this._dollyDelta=new p,this._dollyDirection=new y,this._mouse=new p,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=$t.bind(this),this._onPointerDown=Jt.bind(this),this._onPointerUp=ei.bind(this),this._onContextMenu=ni.bind(this),this._onMouseWheel=si.bind(this),this._onKeyDown=oi.bind(this),this._onTouchStart=ai.bind(this),this._onTouchMove=ri.bind(this),this._onMouseDown=ti.bind(this),this._onMouseMove=ii.bind(this),this._interceptControlDown=li.bind(this),this._interceptControlUp=hi.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(et),this.update(),this.state=f.NONE}update(e=null){const t=this.object.position;x.copy(t).sub(this.target),x.applyQuaternion(this._quat),this._spherical.setFromVector3(x),this.autoRotate&&this.state===f.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(i)&&isFinite(s)&&(i<-Math.PI?i+=P:i>Math.PI&&(i-=P),s<-Math.PI?s+=P:s>Math.PI&&(s-=P),i<=s?this._spherical.theta=Math.max(i,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+s)/2?Math.max(i,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let o=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const r=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),o=r!=this._spherical.radius}if(x.setFromSpherical(this._spherical),x.applyQuaternion(this._quatInverse),t.copy(this.target).add(x),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let r=null;if(this.object.isPerspectiveCamera){const n=x.length();r=this._clampDistance(n*this._scale);const m=n-r;this.object.position.addScaledVector(this._dollyDirection,m),this.object.updateMatrixWorld(),o=!!m}else if(this.object.isOrthographicCamera){const n=new y(this._mouse.x,this._mouse.y,0);n.unproject(this.object);const m=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),o=m!==this.object.zoom;const T=new y(this._mouse.x,this._mouse.y,0);T.unproject(this.object),this.object.position.sub(T).add(n),this.object.updateMatrixWorld(),r=x.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;r!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(r).add(this.object.position):(ue.origin.copy(this.object.position),ue.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(ue.direction))<Kt?this.object.lookAt(this.target):(tt.setFromNormalAndCoplanarPoint(this.object.up,this.target),ue.intersectPlane(tt,this.target))))}else if(this.object.isOrthographicCamera){const r=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),r!==this.object.zoom&&(this.object.updateProjectionMatrix(),o=!0)}return this._scale=1,this._performCursorZoom=!1,o||this._lastPosition.distanceToSquared(this.object.position)>Pe||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Pe||this._lastTargetPosition.distanceToSquared(this.target)>Pe?(this.dispatchEvent(et),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?P/60*this.autoRotateSpeed*e:P/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){x.setFromMatrixColumn(t,0),x.multiplyScalar(-e),this._panOffset.add(x)}_panUp(e,t){this.screenSpacePanning===!0?x.setFromMatrixColumn(t,1):(x.setFromMatrixColumn(t,0),x.crossVectors(this.object.up,x)),x.multiplyScalar(e),this._panOffset.add(x)}_pan(e,t){const i=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;x.copy(s).sub(this.target);let o=x.length();o*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*o/i.clientHeight,this.object.matrix),this._panUp(2*t*o/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),s=e-i.left,o=t-i.top,r=i.width,n=i.height;this._mouse.x=s/r*2-1,this._mouse.y=-(o/n)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(P*this._rotateDelta.x/t.clientHeight),this._rotateUp(P*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(P*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(-P*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(P*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(-P*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._rotateStart.set(i,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panStart.set(i,s)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,s=e.pageY-t.y,o=Math.sqrt(i*i+s*s);this._dollyStart.set(0,o)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),s=.5*(e.pageX+i.x),o=.5*(e.pageY+i.y);this._rotateEnd.set(s,o)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(P*this._rotateDelta.x/t.clientHeight),this._rotateUp(P*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panEnd.set(i,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,s=e.pageY-t.y,o=Math.sqrt(i*i+s*s);this._dollyEnd.set(0,o),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const r=(e.pageX+t.x)*.5,n=(e.pageY+t.y)*.5;this._updateZoomParameters(r,n)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new p,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function Jt(a){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(a.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(a)&&(this._addPointer(a),a.pointerType==="touch"?this._onTouchStart(a):this._onMouseDown(a)))}function $t(a){this.enabled!==!1&&(a.pointerType==="touch"?this._onTouchMove(a):this._onMouseMove(a))}function ei(a){switch(this._removePointer(a),this._pointers.length){case 0:this.domElement.releasePointerCapture(a.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(mt),this.state=f.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function ti(a){let e;switch(a.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case X.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(a),this.state=f.DOLLY;break;case X.ROTATE:if(a.ctrlKey||a.metaKey||a.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(a),this.state=f.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(a),this.state=f.ROTATE}break;case X.PAN:if(a.ctrlKey||a.metaKey||a.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(a),this.state=f.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(a),this.state=f.PAN}break;default:this.state=f.NONE}this.state!==f.NONE&&this.dispatchEvent(He)}function ii(a){switch(this.state){case f.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(a);break;case f.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(a);break;case f.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(a);break}}function si(a){this.enabled===!1||this.enableZoom===!1||this.state!==f.NONE||(a.preventDefault(),this.dispatchEvent(He),this._handleMouseWheel(this._customWheelEvent(a)),this.dispatchEvent(mt))}function oi(a){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(a)}function ai(a){switch(this._trackPointer(a),this._pointers.length){case 1:switch(this.touches.ONE){case Y.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(a),this.state=f.TOUCH_ROTATE;break;case Y.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(a),this.state=f.TOUCH_PAN;break;default:this.state=f.NONE}break;case 2:switch(this.touches.TWO){case Y.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(a),this.state=f.TOUCH_DOLLY_PAN;break;case Y.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(a),this.state=f.TOUCH_DOLLY_ROTATE;break;default:this.state=f.NONE}break;default:this.state=f.NONE}this.state!==f.NONE&&this.dispatchEvent(He)}function ri(a){switch(this._trackPointer(a),this.state){case f.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(a),this.update();break;case f.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(a),this.update();break;case f.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(a),this.update();break;case f.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(a),this.update();break;default:this.state=f.NONE}}function ni(a){this.enabled!==!1&&a.preventDefault()}function li(a){a.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function hi(a){a.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}class ci{constructor(){this.time=0,this.phase=0,this.phaseName="SINGULARITY",this.expansionRate=0,this.temperature=1e12,this.gravityStrength=0,this.started=!1,this._prevPhase=-1,this.galaxySeed=Math.random()*1e4,this.numGalaxies=6+Math.floor(Math.random()*12),this.supernovaIntensity=0,this.starFormationRate=0,this.quantumJitter=0,this.blackHoleStrength=0,this.numBlackHoles=0,this.blackHoleSeed=Math.random()*1e4,this.quantumBridgeStrength=0,this.conglomerationStrength=0,this.collisionIntensity=0,this.cycleCount=0,this.needsReseed=!1,this.epochs=[{name:"SINGULARITY",end:10},{name:"COSMIC INFLATION",end:22},{name:"QUARK-GLUON PLASMA",end:36},{name:"HADRON EPOCH",end:50},{name:"NUCLEOSYNTHESIS",end:68},{name:"RECOMBINATION",end:88},{name:"STELLAR IGNITION",end:115},{name:"GALAXY FORMATION",end:150},{name:"STELLAR EVOLUTION",end:185},{name:"SUPERNOVA ERA",end:215},{name:"HEAT DEATH",end:250}]}start(){this.started=!0,this.time=0}restart(){this.time=0,this.phase=0,this._prevPhase=-1,this.phaseName="SINGULARITY",this.expansionRate=0,this.temperature=1e12,this.gravityStrength=0,this.supernovaIntensity=0,this.starFormationRate=0,this.quantumJitter=0,this.blackHoleStrength=0,this.numBlackHoles=0,this.blackHoleSeed=Math.random()*1e4,this.quantumBridgeStrength=0,this.conglomerationStrength=0,this.collisionIntensity=0,this.started=!0,this.cycleCount++,this.galaxySeed=Math.random()*1e4,this.numGalaxies=6+Math.floor(Math.random()*12),this.needsReseed=!0}update(e){if(!this.started)return;if(this.time+=e,this.time>=250){this.restart();return}for(const i of this.epochs)if(this.time<i.end){this.phaseName=i.name;break}const t=this.time;if(t<10)this.phase=0,this.expansionRate=.05,this.temperature=1e12,this.gravityStrength=.5,this.quantumJitter=.8+.2*Math.sin(t*3),this.starFormationRate=0,this.supernovaIntensity=0,this.blackHoleStrength=0,this.numBlackHoles=0,this.quantumBridgeStrength=.3,this.conglomerationStrength=0,this.collisionIntensity=.1;else if(t<22){this.phase=1;const i=(t-10)/12,s=i*i*(3-2*i);this.expansionRate=2+s*30,this.temperature=1e12*Math.exp(-i*3),this.gravityStrength=.3,this.quantumJitter=1.5*(1-i*.5),this.starFormationRate=0,this.supernovaIntensity=0,this.blackHoleStrength=0,this.numBlackHoles=0,this.quantumBridgeStrength=.5*(1-i),this.conglomerationStrength=i*.2,this.collisionIntensity=.3+i*.4}else if(t<68){this.phase=2;const i=(t-22)/46;this.expansionRate=Math.max(.3,5*(1-i)),this.temperature=1e9*Math.exp(-i*4),this.gravityStrength=1+i*2,this.quantumJitter=.3+.4*Math.sin(t*.7),this.starFormationRate=i*.2,this.supernovaIntensity=0,this.blackHoleStrength=i*.3,this.numBlackHoles=Math.floor(i*3),this.quantumBridgeStrength=.2+i*.3,this.conglomerationStrength=.2+i*.4,this.collisionIntensity=.5+i*.3}else if(t<115){this.phase=3;const i=(t-68)/47;this.expansionRate=.2+.1*Math.sin(t*.1),this.temperature=Math.max(2.725,this.temperature*.9995),this.gravityStrength=3+i*3,this.quantumJitter=.2+.3*Math.sin(t*1.3)*Math.cos(t*.7),this.starFormationRate=.3+i*.7,this.supernovaIntensity=i*.2,this.blackHoleStrength=.3+i*.5,this.numBlackHoles=3+Math.floor(i*4),this.quantumBridgeStrength=.4+i*.3,this.conglomerationStrength=.5+i*.4,this.collisionIntensity=.7+i*.3}else if(t<150){this.phase=4;const i=(t-115)/35;this.expansionRate=.15+.05*Math.sin(t*.08),this.temperature=Math.max(2.725,80*(1-i)+2.725),this.gravityStrength=5+i*2.5,this.quantumJitter=.15+.15*Math.abs(Math.sin(t*2.1)),this.starFormationRate=1,this.supernovaIntensity=.3+i*.3,this.blackHoleStrength=.7+i*.3,this.numBlackHoles=6+Math.floor(i*4),this.quantumBridgeStrength=.6,this.conglomerationStrength=.8+i*.2,this.collisionIntensity=1}else if(t<185){this.phase=5;const i=(t-150)/35;this.expansionRate=.1,this.temperature=2.725,this.gravityStrength=6.5+Math.sin(t*.05)*1,this.quantumJitter=.1+.15*Math.sin(t*3.7),this.starFormationRate=1-i*.3,this.supernovaIntensity=.6+i*.4,this.blackHoleStrength=1,this.numBlackHoles=8+Math.floor(i*4),this.quantumBridgeStrength=.5-i*.2,this.conglomerationStrength=.8,this.collisionIntensity=.9+i*.1}else if(t<215){this.phase=6;const i=(t-185)/30;this.expansionRate=.08-i*.03,this.temperature=2.725,this.gravityStrength=5-i*2,this.quantumJitter=.5+.5*Math.sin(t*5),this.starFormationRate=.3*(1-i),this.supernovaIntensity=1,this.blackHoleStrength=1+i*.5,this.numBlackHoles=10+Math.floor(i*6),this.quantumBridgeStrength=.3*(1-i),this.conglomerationStrength=.6*(1-i*.5),this.collisionIntensity=1}else{this.phase=7;const s=1-Math.min((t-215)/35,1);this.expansionRate=.02*s,this.temperature=2.725*Math.max(.01,s),this.gravityStrength=1*s,this.quantumJitter=.05*s,this.starFormationRate=0,this.supernovaIntensity=.3*s,this.blackHoleStrength=1.5*s,this.numBlackHoles=Math.floor(16*s),this.quantumBridgeStrength=.1*s,this.conglomerationStrength=.2*s,this.collisionIntensity=.2*s}this._prevPhase=this.phase}shouldPulseHaptic(){return this.phase===1&&this.time>4&&this.time<6&&Math.random()<.3||this.phase!==this._prevPhase&&this._prevPhase>=0||this.supernovaIntensity>.8&&Math.random()<.1}}class ui{constructor(e){this.gyro={x:0,y:0,z:0},this._gyroRaw={x:0,y:0,z:0},this.accel={x:0,y:0,z:0},this.rotationRate={alpha:0,beta:0,gamma:0},this.shakeIntensity=0,this.audioLevel=0,this.audioBass=0,this.hasGyro=!1,this.hasMotion=!1,this.hasAudio=!1,this.isMobile=/Android|iPhone|iPad|iPod/i.test(navigator.userAgent),this._cosmicAudio=e,this._analyser=null,this._freqData=null,this._smoothing=.12}async init(){await Promise.allSettled([this._initGyro(),this._initMotion(),this._initProceduralAudio()])}async _initGyro(){if(!(typeof DeviceOrientationEvent>"u")){if(typeof DeviceOrientationEvent.requestPermission=="function")try{if(await DeviceOrientationEvent.requestPermission()!=="granted")return}catch{return}window.addEventListener("deviceorientation",e=>{this.hasGyro=!0,this._gyroRaw.x=(e.gamma||0)/90,this._gyroRaw.y=(e.beta||0)/180,this._gyroRaw.z=(e.alpha||0)/360},{passive:!0})}}async _initMotion(){if(!(typeof DeviceMotionEvent>"u")){if(typeof DeviceMotionEvent.requestPermission=="function")try{if(await DeviceMotionEvent.requestPermission()!=="granted")return}catch{return}window.addEventListener("devicemotion",e=>{this.hasMotion=!0;const t=e.accelerationIncludingGravity||{};this.accel.x=t.x||0,this.accel.y=t.y||0,this.accel.z=t.z||0;const i=e.rotationRate||{};this.rotationRate.alpha=i.alpha||0,this.rotationRate.beta=i.beta||0,this.rotationRate.gamma=i.gamma||0;const s=Math.sqrt(this.accel.x**2+this.accel.y**2+this.accel.z**2);this.shakeIntensity=Math.abs(s-9.81)},{passive:!0})}}_initProceduralAudio(){if(!(!this._cosmicAudio||!this._cosmicAudio.ctx))try{const e=this._cosmicAudio.ctx;this._analyser=e.createAnalyser(),this._analyser.fftSize=256,this._analyser.smoothingTimeConstant=.8,this._cosmicAudio.masterGain&&this._cosmicAudio.masterGain.connect(this._analyser),this._freqData=new Uint8Array(this._analyser.frequencyBinCount),this.hasAudio=!0}catch{}}update(e){const t=this._smoothing;if(this.gyro.x+=(this._gyroRaw.x-this.gyro.x)*t,this.gyro.y+=(this._gyroRaw.y-this.gyro.y)*t,this.gyro.z+=(this._gyroRaw.z-this.gyro.z)*t,this.shakeIntensity*=.9,!this.hasAudio&&this._cosmicAudio&&this._cosmicAudio.ready&&this._initProceduralAudio(),!this.hasAudio||!this._analyser)return;this._analyser.getByteFrequencyData(this._freqData);const i=this._freqData.length;let s=0;for(let n=0;n<i;n++)s+=this._freqData[n];this.audioLevel=s/i/255;let o=0;const r=i>>2;for(let n=0;n<r;n++)o+=this._freqData[n];this.audioBass=o/r/255}pulseHaptic(e=15){navigator.vibrate&&navigator.vibrate(e)}pulseHapticPattern(e){navigator.vibrate&&navigator.vibrate(e)}dispose(){}}class mi{constructor(){this.ctx=null,this.masterGain=null,this.droneOsc=null,this.subOsc=null,this.harmOsc=null,this.noiseGain=null,this.noiseSource=null,this.filter=null,this.compressor=null,this.ready=!1}init(){try{this.ctx=new(window.AudioContext||window.webkitAudioContext)}catch{return}this.compressor=this.ctx.createDynamicsCompressor(),this.compressor.threshold.value=-24,this.compressor.knee.value=12,this.compressor.ratio.value=4,this.compressor.attack.value=.003,this.compressor.release.value=.15,this.compressor.connect(this.ctx.destination),this.masterGain=this.ctx.createGain(),this.masterGain.gain.value=0,this.masterGain.connect(this.compressor),this.filter=this.ctx.createBiquadFilter(),this.filter.type="lowpass",this.filter.frequency.value=300,this.filter.Q.value=1.5,this.filter.connect(this.masterGain),this.droneOsc=this.ctx.createOscillator(),this.droneOsc.type="sine",this.droneOsc.frequency.value=55;const e=this.ctx.createGain();e.gain.value=.15,this.droneOsc.connect(e),e.connect(this.filter),this.droneOsc.start(),this.subOsc=this.ctx.createOscillator(),this.subOsc.type="sine",this.subOsc.frequency.value=27.5;const t=this.ctx.createGain();t.gain.value=.12,this.subOsc.connect(t),t.connect(this.filter),this.subOsc.start(),this.harmOsc=this.ctx.createOscillator(),this.harmOsc.type="triangle",this.harmOsc.frequency.value=110,this._harmGain=this.ctx.createGain(),this._harmGain.gain.value=.04,this.harmOsc.connect(this._harmGain),this._harmGain.connect(this.filter),this.harmOsc.start(),this._createNoise(),this.ready=!0}_createNoise(){const e=this.ctx.sampleRate*2,t=this.ctx.createBuffer(1,e,this.ctx.sampleRate),i=t.getChannelData(0);for(let o=0;o<e;o++)i[o]=(Math.random()*2-1)*.5;this.noiseSource=this.ctx.createBufferSource(),this.noiseSource.buffer=t,this.noiseSource.loop=!0,this.noiseGain=this.ctx.createGain(),this.noiseGain.gain.value=.03;const s=this.ctx.createBiquadFilter();s.type="lowpass",s.frequency.value=800,this.noiseSource.connect(s),s.connect(this.noiseGain),this.noiseGain.connect(this.masterGain),this.noiseSource.start()}update(e,t,i){if(!this.ready)return;const s=this.ctx.currentTime,o=.1;if(e===0)this.masterGain.gain.linearRampToValueAtTime(.12,s+o),this.droneOsc.frequency.linearRampToValueAtTime(40+Math.sin(i*.5)*5,s+o),this.filter.frequency.linearRampToValueAtTime(200,s+o),this.noiseGain.gain.linearRampToValueAtTime(.01,s+o),this._harmGain.gain.linearRampToValueAtTime(.02,s+o),this.harmOsc.frequency.linearRampToValueAtTime(80,s+o);else if(e===1)this.masterGain.gain.linearRampToValueAtTime(.35,s+o),this.droneOsc.frequency.linearRampToValueAtTime(80+i*4,s+o),this.filter.frequency.linearRampToValueAtTime(1200+i*100,s+o),this.noiseGain.gain.linearRampToValueAtTime(.08,s+o),this._harmGain.gain.linearRampToValueAtTime(.08,s+o),this.harmOsc.frequency.linearRampToValueAtTime(165+i*3,s+o);else if(e===2)this.masterGain.gain.linearRampToValueAtTime(.2,s+o),this.droneOsc.frequency.linearRampToValueAtTime(55+Math.sin(i*.2)*10,s+o),this.filter.frequency.linearRampToValueAtTime(600,s+o),this.noiseGain.gain.linearRampToValueAtTime(.04,s+o),this._harmGain.gain.linearRampToValueAtTime(.05,s+o),this.harmOsc.frequency.linearRampToValueAtTime(110,s+o);else if(e===3)this.masterGain.gain.linearRampToValueAtTime(.22,s+o),this.droneOsc.frequency.linearRampToValueAtTime(60+Math.sin(i*.15)*12,s+o),this.filter.frequency.linearRampToValueAtTime(700+Math.sin(i*.3)*100,s+o),this.noiseGain.gain.linearRampToValueAtTime(.05,s+o),this._harmGain.gain.linearRampToValueAtTime(.06,s+o),this.harmOsc.frequency.linearRampToValueAtTime(130+Math.sin(i*.1)*15,s+o);else if(e===4)this.masterGain.gain.linearRampToValueAtTime(.25,s+o),this.droneOsc.frequency.linearRampToValueAtTime(65+Math.sin(i*.12)*8,s+o),this.filter.frequency.linearRampToValueAtTime(900,s+o),this.noiseGain.gain.linearRampToValueAtTime(.045,s+o),this._harmGain.gain.linearRampToValueAtTime(.07,s+o),this.harmOsc.frequency.linearRampToValueAtTime(155+Math.sin(i*.08)*20,s+o);else if(e===5)this.masterGain.gain.linearRampToValueAtTime(.2,s+o),this.droneOsc.frequency.linearRampToValueAtTime(55+Math.sin(i*.1)*6,s+o),this.filter.frequency.linearRampToValueAtTime(500,s+o),this.noiseGain.gain.linearRampToValueAtTime(.035,s+o),this._harmGain.gain.linearRampToValueAtTime(.05,s+o),this.harmOsc.frequency.linearRampToValueAtTime(110+Math.sin(i*.06)*10,s+o);else if(e===6)this.masterGain.gain.linearRampToValueAtTime(.3,s+o),this.droneOsc.frequency.linearRampToValueAtTime(70+Math.sin(i*1.5)*20,s+o),this.filter.frequency.linearRampToValueAtTime(1500+Math.sin(i*2)*500,s+o),this.noiseGain.gain.linearRampToValueAtTime(.09,s+o),this._harmGain.gain.linearRampToValueAtTime(.09,s+o),this.harmOsc.frequency.linearRampToValueAtTime(200+Math.sin(i*.8)*40,s+o);else{const r=Math.max(.01,1-(i-80)/15);this.masterGain.gain.linearRampToValueAtTime(.08*r,s+o),this.droneOsc.frequency.linearRampToValueAtTime(35+r*10,s+o),this.filter.frequency.linearRampToValueAtTime(150*r+50,s+o),this.noiseGain.gain.linearRampToValueAtTime(.015*r,s+o),this._harmGain.gain.linearRampToValueAtTime(.02*r,s+o),this.harmOsc.frequency.linearRampToValueAtTime(60,s+o)}}dispose(){if(!this.ready)return;const e=this.ctx.currentTime;this.masterGain.gain.linearRampToValueAtTime(0,e+1),setTimeout(()=>this.ctx.close(),1200)}}class di{constructor(e,t){this.camera=e,this.domElement=t,this.worldPos=new y,this.strength=6,this.active=!1,this._ndc=new p,this._ray=new Ot,this._plane=new ht(new y(0,0,1),0),this._onMove=this._onMove.bind(this),this._onDown=this._onDown.bind(this),this._onUp=this._onUp.bind(this),this._onWheel=this._onWheel.bind(this),t.addEventListener("pointermove",this._onMove,{passive:!0}),t.addEventListener("pointerdown",this._onDown,{passive:!0}),t.addEventListener("pointerup",this._onUp,{passive:!0}),t.addEventListener("wheel",this._onWheel,{passive:!0})}_updateNDC(e){const t=this.domElement.getBoundingClientRect();this._ndc.x=(e.clientX-t.left)/t.width*2-1,this._ndc.y=-((e.clientY-t.top)/t.height)*2+1}_project(){this._ray.setFromCamera(this._ndc,this.camera),this._ray.ray.intersectPlane(this._plane,this.worldPos)}_onMove(e){this._updateNDC(e),this._project(),e.pointerType==="mouse"&&(this.active=!0)}_onDown(e){this._updateNDC(e),this._project(),this.active=!0}_onUp(){this.active=!1}_onWheel(e){this.strength=Math.max(-12,Math.min(12,this.strength+(e.deltaY>0?-.5:.5)))}dispose(){this.domElement.removeEventListener("pointermove",this._onMove),this.domElement.removeEventListener("pointerdown",this._onDown),this.domElement.removeEventListener("pointerup",this._onUp),this.domElement.removeEventListener("wheel",this._onWheel)}}class pi{constructor(e,t){this.camera=e,this.domElement=t,this.enabled=!1,this.velocity=new y,this.direction=new y,this.right=new y,this.worldUp=new y(0,0,1),this.baseSpeed=25,this.maxSpeed=150,this.speedBoost=1,this.acceleration=8,this.friction=.94,this.pitch=0,this.yaw=0,this.rotationSpeed=.003,this.rotationInertia=new p,this.rotationFriction=.92,this._keys={},this._pointers=new Map,this._lastTouchDist=0,this._lastTouchCenter=new p,this._isDragging=!1,this._dragStart=new p,this._dragCurrent=new p,this._touchMoveActive=!1,this._touchMoveDir=new p,this._lastTapTime=0,this._lastTapPos=new p,this._doubleTapThreshold=300,this._tapDistThreshold=20,this._swipeThreshold=50,this._swipeVelocity=new p,this._savedPosition=new y,this._savedQuaternion=new ke,this._onKeyDown=this._onKeyDown.bind(this),this._onKeyUp=this._onKeyUp.bind(this),this._onPointerDown=this._onPointerDown.bind(this),this._onPointerMove=this._onPointerMove.bind(this),this._onPointerUp=this._onPointerUp.bind(this),this._onPointerCancel=this._onPointerCancel.bind(this),this._onWheel=this._onWheel.bind(this),this._onContextMenu=this._onContextMenu.bind(this)}enable(){if(this.enabled)return;this.enabled=!0,this._savedPosition.copy(this.camera.position),this._savedQuaternion.copy(this.camera.quaternion);const e=new Ze().setFromQuaternion(this.camera.quaternion,"ZXY");this.yaw=e.z,this.pitch=e.x,this.velocity.set(0,0,0),this.rotationInertia.set(0,0),this._swipeVelocity.set(0,0),this._attachEventListeners(),this.updateCameraVectors()}disable(){this.enabled&&(this.enabled=!1,this.velocity.set(0,0,0),this.rotationInertia.set(0,0),this._keys={},this._pointers.clear(),this._isDragging=!1,this._touchMoveActive=!1,this._detachEventListeners())}updateCameraVectors(){const e=new Ze(this.pitch,0,this.yaw,"ZXY");this.camera.quaternion.setFromEuler(e),this.camera.getWorldDirection(this.direction),this.right.crossVectors(this.direction,this.worldUp).normalize()}update(e){if(!this.enabled)return;e=Math.min(e,.1),this._isDragging||(this.yaw+=this.rotationInertia.x,this.pitch+=this.rotationInertia.y,this.rotationInertia.multiplyScalar(this.rotationFriction),this.rotationInertia.length()<1e-4&&this.rotationInertia.set(0,0)),this.pitch=de.clamp(this.pitch,-Math.PI/2+.05,Math.PI/2-.05),this.updateCameraVectors();const t=new y,i=this.baseSpeed*this.speedBoost,s=this._keys.w||this._keys.W||this._keys.ArrowUp?1:0,o=this._keys.s||this._keys.S||this._keys.ArrowDown?1:0,r=this._keys.a||this._keys.A||this._keys.ArrowLeft?1:0,n=this._keys.d||this._keys.D||this._keys.ArrowRight?1:0,m=this._keys.q||this._keys.Q||this._keys[" "]?1:0,T=this._keys.e||this._keys.E||this._keys.Shift?1:0;s-o!==0&&t.addScaledVector(this.direction,(s-o)*i),n-r!==0&&t.addScaledVector(this.right,(n-r)*i),m-T!==0&&(t.z+=(m-T)*i*.7),this._touchMoveActive&&this._touchMoveDir.length()>.1&&(t.addScaledVector(this.direction,-this._touchMoveDir.y*i),t.addScaledVector(this.right,this._touchMoveDir.x*i));const D=1-Math.exp(-this.acceleration*e);this.velocity.lerp(t,D),t.lengthSq()<.01&&this.velocity.multiplyScalar(this.friction);const d=this.velocity.length();d>this.maxSpeed&&this.velocity.multiplyScalar(this.maxSpeed/d),d<.01&&this.velocity.set(0,0,0),this.camera.position.addScaledVector(this.velocity,e),this._keys[" "]||(this.speedBoost=Math.max(1,this.speedBoost*.95))}getSpeed(){return this.velocity.length()}_onKeyDown(e){this.enabled&&(this._keys[e.key]=!0,e.key===" "&&(this.speedBoost=2.5,e.preventDefault()))}_onKeyUp(e){this._keys[e.key]=!1}_onPointerDown(e){if(!this.enabled||e.target!==this.domElement)return;this._pointers.set(e.pointerId,{id:e.pointerId,x:e.clientX,y:e.clientY,startX:e.clientX,startY:e.clientY,startTime:performance.now()});const t=Date.now(),i=new p(e.clientX,e.clientY);t-this._lastTapTime<this._doubleTapThreshold&&i.distanceTo(this._lastTapPos)<this._tapDistThreshold&&(this.speedBoost=3,this.velocity.addScaledVector(this.direction,this.baseSpeed*.5)),this._lastTapTime=t,this._lastTapPos.copy(i),this._pointers.size===1&&(this._isDragging=!0,this._dragStart.set(e.clientX,e.clientY),this._dragCurrent.copy(this._dragStart)),this._pointers.size===2&&(this._updateTouchCenter(),this._touchMoveActive=!0),this.domElement.setPointerCapture(e.pointerId),e.preventDefault()}_onPointerMove(e){if(!this.enabled)return;const t=this._pointers.get(e.pointerId);if(t){if(t.x=e.clientX,t.y=e.clientY,this._pointers.size===1&&this._isDragging){const i=e.clientX-this._dragCurrent.x,s=e.clientY-this._dragCurrent.y;this.yaw-=i*this.rotationSpeed,this.pitch-=s*this.rotationSpeed,this.rotationInertia.set(-i*this.rotationSpeed*.3,-s*this.rotationSpeed*.3),this._dragCurrent.set(e.clientX,e.clientY)}if(this._pointers.size===2){const i=Array.from(this._pointers.values()),s=i[0],o=i[1],r=new p((s.x+o.x)/2,(s.y+o.y)/2),n=new p().subVectors(r,this._lastTouchCenter);this._touchMoveDir.set(n.x*.01,n.y*.01);const m=Math.hypot(s.x-o.x,s.y-o.y);if(this._lastTouchDist>0){const T=m-this._lastTouchDist;Math.abs(T)>2&&(this.baseSpeed=de.clamp(this.baseSpeed+T*.1,5,80))}this._lastTouchDist=m,this._lastTouchCenter.copy(r)}e.preventDefault()}}_onPointerUp(e){const t=this._pointers.get(e.pointerId);if(t&&this._pointers.size===1){const i=(performance.now()-t.startTime)/1e3,s=e.clientX-t.startX,o=e.clientY-t.startY,r=Math.hypot(s,o);if(i<.3&&r>this._swipeThreshold){const n=r/i;o<-this._swipeThreshold&&Math.abs(s)<Math.abs(o)&&this.velocity.addScaledVector(this.direction,n*.02),o>this._swipeThreshold&&Math.abs(s)<Math.abs(o)&&this.velocity.addScaledVector(this.direction,-n*.01)}}this._pointers.delete(e.pointerId),this._pointers.size===0&&(this._isDragging=!1,this._touchMoveActive=!1),this._pointers.size<2&&(this._lastTouchDist=0,this._touchMoveDir.set(0,0)),this.domElement.releasePointerCapture(e.pointerId)}_onPointerCancel(e){this._onPointerUp(e)}_updateTouchCenter(){const e=Array.from(this._pointers.values());if(e.length>=2){const t=e[0],i=e[1];this._lastTouchCenter.set((t.x+i.x)/2,(t.y+i.y)/2),this._lastTouchDist=Math.hypot(t.x-i.x,t.y-i.y)}}_onWheel(e){if(!this.enabled)return;const t=-Math.sign(e.deltaY)*3;this.baseSpeed=de.clamp(this.baseSpeed+t,5,80),this.velocity.addScaledVector(this.direction,t*.5),e.preventDefault()}_onContextMenu(e){e.preventDefault()}_attachEventListeners(){window.addEventListener("keydown",this._onKeyDown),window.addEventListener("keyup",this._onKeyUp),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp),this.domElement.addEventListener("pointercancel",this._onPointerCancel),this.domElement.addEventListener("wheel",this._onWheel,{passive:!1}),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.style.touchAction="none"}_detachEventListeners(){window.removeEventListener("keydown",this._onKeyDown),window.removeEventListener("keyup",this._onKeyUp),this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerCancel),this.domElement.removeEventListener("wheel",this._onWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu)}dispose(){this.disable()}}const fi={uniforms:{tDiffuse:{value:null},uTime:{value:0},uIntensity:{value:.06}},vertexShader:`
        varying vec2 vUv;
        void main() {
            vUv = uv;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
    `,fragmentShader:`
        uniform sampler2D tDiffuse;
        uniform float uTime;
        uniform float uIntensity;
        varying vec2 vUv;

        float hash(vec2 p) {
            vec3 p3 = fract(vec3(p.xyx) * 0.1031);
            p3 += dot(p3, p3.yzx + 33.33);
            return fract((p3.x + p3.y) * p3.z);
        }

        void main() {
            vec4 color = texture2D(tDiffuse, vUv);
            float noise = hash(gl_FragCoord.xy + uTime * 100.0) * 2.0 - 1.0;
            color.rgb += noise * uIntensity;
            gl_FragColor = color;
        }
    `};function vi(){return new ut(fi)}class gi{constructor(){this.video=null,this.stream=null,this.active=!1,this.supported=!!(navigator.mediaDevices&&navigator.mediaDevices.getUserMedia),this.state="idle",this.errorMessage="",this._constraints={video:{facingMode:{ideal:"environment"},width:{ideal:1920},height:{ideal:1080},frameRate:{ideal:30,max:60}},audio:!1}}getErrorMessage(){switch(this.state){case"denied":return"Camera permission denied. Check browser settings.";case"error":return this.errorMessage||"Camera unavailable. Check hardware/drivers.";case"idle":return"";case"requesting":return"Requesting camera access...";case"streaming":return"";default:return""}}async start(e){if(!this.supported)return console.warn("[CameraAR] getUserMedia not supported"),this.state="error",!1;if(this.active)return!0;this.state="requesting";try{this.stream=await navigator.mediaDevices.getUserMedia(this._constraints)}catch(t){if(console.warn("[CameraAR] Initial camera request failed:",t.name,t.message),t.name==="NotAllowedError")return this.state="denied",this.errorMessage="Camera access denied by user.",!1;if(t.name==="NotFoundError"||t.name==="DevicesNotFoundError")return this.state="error",this.errorMessage="No camera device found.",console.error("[CameraAR] No camera device found"),!1;if(t.name==="NotReadableError")return this.state="error",this.errorMessage="Camera is in use by another app.",console.error("[CameraAR] Camera is already in use"),!1;try{this.stream=await navigator.mediaDevices.getUserMedia({video:{width:{ideal:1280},height:{ideal:720},frameRate:{ideal:24}},audio:!1})}catch(i){console.warn("[CameraAR] Fallback 1 failed:",i.name);try{this.stream=await navigator.mediaDevices.getUserMedia({video:!0,audio:!1})}catch(s){return console.warn("[CameraAR] All camera access attempts failed:",s.name),s.name==="NotAllowedError"?(this.state="denied",this.errorMessage="Camera access denied."):s.name==="NotFoundError"||s.name==="DevicesNotFoundError"?(this.state="error",this.errorMessage="No camera device found.",console.error("[CameraAR] No camera device found")):s.name==="NotReadableError"?(this.state="error",this.errorMessage="Camera unavailable, may be in use.",console.error("[CameraAR] Camera is already in use or cannot be accessed")):(this.state="error",this.errorMessage="Camera access failed: "+s.name),!1}}}this.video||(this.video=document.createElement("video"),this.video.id="ar-video",this.video.playsInline=!0,this.video.muted=!0,this.video.autoplay=!0,this.video.setAttribute("playsinline",""),this.video.setAttribute("muted",""),document.body.insertBefore(this.video,document.getElementById("canvas"))),this.video.srcObject=this.stream;try{await this.video.play()}catch(t){console.warn("[CameraAR] Video playback failed:",t.name,t.message),t.name==="NotAllowedError"?(this.state="denied",this.errorMessage="Autoplay policy blocked video."):t.name==="NotSupportedError"?(this.state="error",this.errorMessage="Video format not supported."):(this.state="error",this.errorMessage="Video playback failed: "+t.name);for(const i of this.stream.getTracks())i.stop();return this.stream=null,!1}return this.video.classList.add("active"),e.setClearColor(0,0),document.getElementById("canvas").classList.add("ar-mode"),this.active=!0,this.state="streaming",!0}stop(e){if(this.stream){for(const t of this.stream.getTracks())t.stop();this.stream=null}this.video&&(this.video.srcObject=null,this.video.classList.remove("active")),e.setClearColor(0,1),document.getElementById("canvas").classList.remove("ar-mode"),this.active=!1,this.state="idle"}async toggle(e){return this.active?(this.stop(e),!1):this.start(e)}dispose(e){this.stop(e),this.video&&this.video.parentNode&&(this.video.parentNode.removeChild(this.video),this.video=null)}}const M=64;class yi{constructor(e){this.renderer=e,this.active=!1,this._canvas=document.createElement("canvas"),this._canvas.width=M,this._canvas.height=M,this._ctx=this._canvas.getContext("2d",{willReadFrequently:!0,alpha:!1}),this._currentPixels=new Uint8Array(M*M*4),this._previousPixels=new Uint8Array(M*M*4),this._outputData=new Float32Array(M*M*4),this._hasFrame=!1,this._frameCount=0,this.flowTexture=new nt(this._outputData,M,M,Ie,Fe),this.flowTexture.minFilter=Je,this.flowTexture.magFilter=Je,this.flowTexture.wrapS=ve,this.flowTexture.wrapT=ve,this.flowTexture.needsUpdate=!0,this.sceneLuminance=0,this.sceneMotion=0,this.surfaceCoverage=0,this.dominantFlowX=0,this.dominantFlowY=0,this._smooth=.15}update(e){if(!e||e.readyState<2||e.videoWidth<=0||e.videoHeight<=0)return;this._ctx.drawImage(e,0,0,M,M);const t=this._ctx.getImageData(0,0,M,M);if(!(!t||!t.data||t.data.length<M*M*4)){if(this._previousPixels.set(this._currentPixels),this._currentPixels.set(t.data),this._frameCount++,this._frameCount<2){this._hasFrame=!0;return}this._computeFlowField(),this.flowTexture.needsUpdate=!0,this.active=!0}}_computeFlowField(){const e=this._currentPixels,t=this._previousPixels,i=this._outputData,s=M;let o=0,r=0,n=0,m=0,T=0,D=0;for(let d=1;d<s-1;d++)for(let c=1;c<s-1;c++){const l=(d*s+c)*4,v=(d*s+c)*4,C=e[l]*.2126,g=e[l+1]*.7152,R=e[l+2]*.0722,k=(C+g+R)/255,G=e[l]-t[l],J=e[l+1]-t[l+1],je=e[l+2]-t[l+2],re=Math.sqrt(G*G+J*J+je*je)/441.67,De=(d*s+(c-1))*4,Me=(d*s+(c+1))*4,Ce=((d-1)*s+c)*4,Ae=((d+1)*s+c)*4,_t=(e[De]*.2126+e[De+1]*.7152+e[De+2]*.0722)/255,xt=(e[Me]*.2126+e[Me+1]*.7152+e[Me+2]*.0722)/255,bt=(e[Ce]*.2126+e[Ce+1]*.7152+e[Ce+2]*.0722)/255,wt=(e[Ae]*.2126+e[Ae+1]*.7152+e[Ae+2]*.0722)/255,ne=(xt-_t)*.5,le=(wt-bt)*.5,Re=Math.sqrt(ne*ne+le*le),Ye=Re*Re+.01,St=-ne*re/Ye,Dt=-le*re/Ye,We=Math.max(-1,Math.min(1,St*4)),Xe=Math.max(-1,Math.min(1,Dt*4)),Mt=Math.min(1,Re*8),Ct=1-Math.min(1,re*6);let he=Mt*Ct;const At=Math.abs(ne)+Math.abs(le),Rt=Math.max(0,1-At*10);he=he*.6+Rt*.4,i[v]=We,i[v+1]=Xe,i[v+2]=he,i[v+3]=k,o+=k,r+=re,n+=he,m+=We,T+=Xe,D++}if(D>0){const d=1/D,c=this._smooth;this.sceneLuminance+=(o*d-this.sceneLuminance)*c,this.sceneMotion+=(r*d-this.sceneMotion)*c,this.surfaceCoverage+=(n*d-this.surfaceCoverage)*c,this.dominantFlowX+=(m*d-this.dominantFlowX)*c,this.dominantFlowY+=(T*d-this.dominantFlowY)*c}}reset(){this.active=!1,this._hasFrame=!1,this._frameCount=0,this.sceneLuminance=0,this.sceneMotion=0,this.surfaceCoverage=0,this.dominantFlowX=0,this.dominantFlowY=0,this._outputData.fill(0),this.flowTexture.needsUpdate=!0}dispose(){this.reset(),this.flowTexture.dispose()}}const Ti=`
uniform float uDeltaTime;
uniform float uPhase;
uniform float uTime;
uniform float uTimeDilation;

// Black hole awareness for event horizon effects
uniform float uBlackHoleStrength;
uniform float uNumBlackHoles;
uniform float uBlackHoleSeed;

// Deterministic hash for matching black hole positions
float _hash11(float p) {
    p = fract(p * 0.1031);
    p *= p + 33.33;
    p *= p + p;
    return fract(p);
}
vec3 _hash31(float p) {
    vec3 p3 = fract(vec3(p) * vec3(0.1031, 0.1030, 0.0973));
    p3 += dot(p3, p3.yzx + 33.33);
    return fract((p3.xxy + p3.yzz) * p3.zyx);
}

void main() {
    vec2 uv = gl_FragCoord.xy / resolution.xy;
    vec4 pos = texture2D(texturePosition, uv);
    vec4 vel = texture2D(textureVelocity, uv);

    // ─── Quantum space-time fabric distortion ───────
    // Each region of space experiences a locally different flow of time,
    // creating visible ripples in the fabric of the simulation.
    float fabricX = sin(pos.x * 0.015 + uTime * 0.23) * cos(pos.z * 0.018 + uTime * 0.17);
    float fabricY = cos(pos.y * 0.012 + uTime * 0.19) * sin(pos.x * 0.021 + uTime * 0.13);
    float fabricZ = sin(pos.z * 0.017 + uTime * 0.29) * cos(pos.y * 0.014 + uTime * 0.11);
    float localTimeDilation = 1.0 + (fabricX + fabricY + fabricZ) * 0.4 * uTimeDilation;

    // ─── Hyperspace dimensional fold ────────────────
    // Particles subtly traverse hidden-dimension manifolds,
    // creating organic warping patterns in their trajectories.
    float foldIntensity = smoothstep(0.5, 3.0, uPhase) * (1.0 - smoothstep(6.5, 7.5, uPhase)) * 0.5;
    vec3 dimensionalFold = vec3(
        sin(pos.y * 0.01 + pos.z * 0.008 + uTime * 0.15),
        cos(pos.x * 0.01 + pos.z * 0.009 + uTime * 0.12),
        sin(pos.x * 0.008 + pos.y * 0.01 + uTime * 0.18)
    ) * foldIntensity;

    // ─── Phase-aware integration ────────────────────
    float phaseSpeed;
    if (uPhase < 0.5) {
        phaseSpeed = 0.04;
    } else if (uPhase > 6.5) {
        phaseSpeed = 0.3;
    } else {
        phaseSpeed = 1.0;
    }

    pos.xyz += vel.xyz * uDeltaTime * phaseSpeed * localTimeDilation;
    pos.xyz += dimensionalFold * uDeltaTime;

    // ─── Black hole gravitational time dilation ─────
    // Particles near black holes experience extreme time slowdown
    // and spatial compression, warping their trajectories.
    if (uBlackHoleStrength > 0.01 && uNumBlackHoles > 0.0) {
        float bhTimeFactor = 1.0;
        for (int i = 0; i < 8; i++) {
            if (float(i) >= uNumBlackHoles) break;
            float fi = float(i);
            vec3 bhSeed = _hash31(fi * 173.7 + uBlackHoleSeed);
            float bhSpread = 60.0 + uPhase * 40.0;
            vec3 bhCenter = (bhSeed - 0.5) * bhSpread * 2.0;
            bhCenter += vec3(
                sin(uTime * 0.03 + fi * 2.1),
                cos(uTime * 0.025 + fi * 1.7),
                sin(uTime * 0.02 + fi * 3.3)
            ) * 15.0;

            float sizeClass = _hash11(fi * 59.3 + uBlackHoleSeed);
            float eventHorizon = sizeClass < 0.33 ? 3.0 : (sizeClass < 0.66 ? 8.0 : 18.0);

            float bhDist = length(bhCenter - pos.xyz);
            // Gravitational time dilation: time slows near event horizon
            float dilation = smoothstep(0.0, eventHorizon * 4.0, bhDist);
            bhTimeFactor = min(bhTimeFactor, 0.05 + 0.95 * dilation);

            // Spatial lensing: slight position warp near black holes
            if (bhDist < eventHorizon * 3.0) {
                vec3 toBH = normalize(bhCenter - pos.xyz);
                float warpStr = (1.0 - bhDist / (eventHorizon * 3.0)) * uBlackHoleStrength * 0.5;
                pos.xyz += toBH * warpStr * uDeltaTime;
            }
        }
        // Scale total velocity contribution by time dilation
        pos.xyz *= mix(1.0, bhTimeFactor, uBlackHoleStrength * 0.3);
    }

    // Increment particle age (w channel)
    pos.w += uDeltaTime;

    // Soft boundary — prevent particles from drifting to infinity
    float r = length(pos.xyz);
    float maxR = 600.0 + uPhase * 60.0;
    if (r > maxR) {
        pos.xyz *= maxR / r;
    }

    gl_FragColor = pos;
}
`,dt=`
vec4 _permute(vec4 x) { return mod(((x * 34.0) + 1.0) * x, 289.0); }
vec4 _taylorInvSqrt(vec4 r) { return 1.79284291400159 - 0.85373472095314 * r; }

float snoise(vec3 v) {
    const vec2 C = vec2(1.0 / 6.0, 1.0 / 3.0);
    const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);

    vec3 i  = floor(v + dot(v, C.yyy));
    vec3 x0 = v - i + dot(i, C.xxx);

    vec3 g = step(x0.yzx, x0.xyz);
    vec3 l = 1.0 - g;
    vec3 i1 = min(g.xyz, l.zxy);
    vec3 i2 = max(g.xyz, l.zxy);

    vec3 x1 = x0 - i1 + C.xxx;
    vec3 x2 = x0 - i2 + C.yyy;
    vec3 x3 = x0 - D.yyy;

    i = mod(i, 289.0);
    vec4 p = _permute(_permute(_permute(
        i.z + vec4(0.0, i1.z, i2.z, 1.0))
      + i.y + vec4(0.0, i1.y, i2.y, 1.0))
      + i.x + vec4(0.0, i1.x, i2.x, 1.0));

    float n_ = 1.0 / 7.0;
    vec3 ns = n_ * D.wyz - D.xzx;

    vec4 j = p - 49.0 * floor(p * ns.z * ns.z);
    vec4 x_ = floor(j * ns.z);
    vec4 y_ = floor(j - 7.0 * x_);

    vec4 x = x_ * ns.x + ns.yyyy;
    vec4 y = y_ * ns.x + ns.yyyy;
    vec4 h = 1.0 - abs(x) - abs(y);

    vec4 b0 = vec4(x.xy, y.xy);
    vec4 b1 = vec4(x.zw, y.zw);

    vec4 s0 = floor(b0) * 2.0 + 1.0;
    vec4 s1 = floor(b1) * 2.0 + 1.0;
    vec4 sh = -step(h, vec4(0.0));

    vec4 a0 = b0.xzyw + s0.xzyw * sh.xxyy;
    vec4 a1 = b1.xzyw + s1.xzyw * sh.zzww;

    vec3 p0 = vec3(a0.xy, h.x);
    vec3 p1 = vec3(a0.zw, h.y);
    vec3 p2 = vec3(a1.xy, h.z);
    vec3 p3 = vec3(a1.zw, h.w);

    vec4 norm = _taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2,p2), dot(p3,p3)));
    p0 *= norm.x; p1 *= norm.y; p2 *= norm.z; p3 *= norm.w;

    vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
    m = m * m;
    return 42.0 * dot(m * m, vec4(dot(p0,x0), dot(p1,x1), dot(p2,x2), dot(p3,x3)));
}

float fbm(vec3 p, int octaves) {
    float value = 0.0;
    float amplitude = 0.5;
    float frequency = 1.0;
    for (int i = 0; i < 6; i++) {
        if (i >= octaves) break;
        value += amplitude * snoise(p * frequency);
        frequency *= 2.0;
        amplitude *= 0.5;
    }
    return value;
}
`,_i=dt+`

uniform float uTime;
uniform float uDeltaTime;
uniform float uExpansionRate;
uniform float uTemperature;
uniform float uGravityStrength;
uniform vec3  uGyro;
uniform float uAudioLevel;
uniform float uAudioBass;
uniform float uPhase;

// Mouse / touch interaction
uniform vec3  uMouseWorldPos;
uniform float uMouseStrength;
uniform float uMouseActive;

// Galaxy formation
uniform float uGalaxySeed;
uniform float uNumGalaxies;

// Star lifecycle
uniform float uSupernovaIntensity;
uniform float uStarFormationRate;

// Quantum eccentricity
uniform float uQuantumJitter;

// Black holes
uniform float uBlackHoleStrength;
uniform float uNumBlackHoles;
uniform float uBlackHoleSeed;

// Quantum bridges
uniform float uQuantumBridgeStrength;

// Energy conglomerations
uniform float uConglomerationStrength;

// Collision dynamics
uniform float uCollisionIntensity;

// ─── AR Camera Flow / Surface Detection ─────────
uniform sampler2D uFlowTexture;     // (flowX, flowY, surfaceConf, luminance) 64×64
uniform float     uARActive;        // 0 or 1
uniform float     uARSurfaceForce;  // surface repulsion strength
uniform float     uARFlowForce;     // motion-following strength
uniform float     uARLuminance;     // scene-average brightness [0,1]

// ─── Deterministic hash functions ───────────────────
float hash11(float p) {
    p = fract(p * 0.1031);
    p *= p + 33.33;
    p *= p + p;
    return fract(p);
}

vec3 hash31(float p) {
    vec3 p3 = fract(vec3(p) * vec3(0.1031, 0.1030, 0.0973));
    p3 += dot(p3, p3.yzx + 33.33);
    return fract((p3.xxy + p3.yzz) * p3.zyx);
}

void main() {
    vec2 uv = gl_FragCoord.xy / resolution.xy;
    vec4 pos = texture2D(texturePosition, uv);
    vec4 vel = texture2D(textureVelocity, uv);

    vec3 position = pos.xyz;
    vec3 velocity = vel.xyz;
    float age  = pos.w;
    float mass = vel.w;

    float dist = length(position);
    vec3  dir  = dist > 0.001 ? position / dist : vec3(0.0);

    // Particle ID for deterministic per-particle randomness
    float pid = uv.x * 1024.0 + uv.y;

    // ─── HUBBLE-LIKE EXPANSION ──────────────────────
    float hubble = uExpansionRate * (1.0 + dist * 0.005);
    vec3 expansion = dir * hubble;

    // ─── GRAVITATIONAL CLUSTERING (noise field) ─────
    vec3 nc = position * 0.03 + uTime * 0.008;
    vec3 gravField = vec3(
        snoise(nc),
        snoise(nc + vec3(31.416, 0.0, 0.0)),
        snoise(nc + vec3(0.0, 67.123, 0.0))
    ) * uGravityStrength;

    // ─── CENTRAL ATTRACTOR ──────────────────────────
    float attract = mass * 0.5 / (dist * dist + 0.5);
    vec3 centralPull = -dir * attract;

    // ─── TURBULENCE (multi-scale) ───────────────────
    vec3 tc = position * 0.015 + uTime * 0.12;
    vec3 turbulence = vec3(
        snoise(tc),
        snoise(tc + vec3(100.0, 0.0, 0.0)),
        snoise(tc + vec3(0.0, 200.0, 0.0))
    );

    // ─── VORTICITY (spiral arm formation) ───────────
    vec3 vortex = vec3(-position.y, position.x, 0.0) * 0.002 / (dist + 1.0);

    // ─── FILAMENT FORMATION (anisotropic structure) ─
    vec3 filCoord = position * 0.008 + uTime * 0.003;
    float filament = fbm(filCoord, 2);   // 2 octaves — saves GPU ALU
    vec3 filForce = vec3(
        snoise(filCoord + vec3(200.0)),
        snoise(filCoord + vec3(300.0)),
        snoise(filCoord + vec3(400.0))
    ) * filament * 0.4;

    // ─── GALAXY ATTRACTOR FIELD ─────────────────────
    // Procedural galaxy centers with varied morphology:
    //   spiral, elliptical, irregular, barred spiral
    vec3 galaxyForce = vec3(0.0);
    if (uPhase >= 2.5 && uNumGalaxies > 0.0) {
        float galaxySpread = 80.0 + uPhase * 30.0;

        for (int i = 0; i < 8; i++) {
            if (float(i) >= uNumGalaxies) break;

            float fi = float(i);
            vec3 seed = hash31(fi * 127.1 + uGalaxySeed);
            vec3 gCenter = (seed - 0.5) * galaxySpread * 2.0;

            // Galaxy properties from hash
            float gMass = (hash11(fi * 31.7 + uGalaxySeed) * 0.7 + 0.3) * 8.0;
            float gType = hash11(fi * 73.3 + uGalaxySeed);
            float gSize = (hash11(fi * 53.1 + uGalaxySeed) * 0.6 + 0.4) * 60.0;

            vec3 toGalaxy = gCenter - position;
            float gDist = length(toGalaxy);
            vec3 gDir = gDist > 0.01 ? toGalaxy / gDist : vec3(0.0);

            // Gravitational attraction with softened falloff
            float gAttract = gMass / (gDist * gDist + gSize * 0.5);
            float falloff = smoothstep(gSize * 3.0, 0.0, gDist);

            vec3 force = gDir * gAttract * falloff;

            if (gType < 0.35) {
                // SPIRAL GALAXY — rotational component
                vec3 tangent = normalize(cross(toGalaxy, vec3(seed.x, 1.0, seed.z)));
                float spiralStrength = falloff * gMass * 0.3;
                float spiralAngle = gDist * 0.05 + uTime * 0.1;
                vec3 spiral = tangent * spiralStrength * sin(spiralAngle)
                            + cross(tangent, gDir) * spiralStrength * cos(spiralAngle) * 0.3;
                force += spiral;

            } else if (gType < 0.55) {
                // ELLIPTICAL GALAXY — anisotropic compression
                vec3 axis = normalize(hash31(fi * 91.3 + uGalaxySeed) - 0.5);
                float compression = dot(gDir, axis);
                force += axis * compression * gAttract * falloff * 0.5;

            } else if (gType < 0.75) {
                // IRREGULAR GALAXY — hash-based chaotic perturbation (cheaper than noise)
                vec3 chaos = (hash31(fi * 17.3 + dot(position, vec3(0.02))) - 0.5) * 2.0
                           * gMass * falloff * 0.4;
                force += chaos;

            } else {
                // BARRED SPIRAL — bar structure + spiral arms
                vec3 barAxis = normalize(hash31(fi * 47.7 + uGalaxySeed) - 0.5);
                float barAlign = abs(dot(gDir, barAxis));
                force += barAxis * barAlign * gAttract * falloff * 0.6;
                vec3 tangent = normalize(cross(toGalaxy, barAxis));
                float spiralStrength = falloff * gMass * 0.25 * (1.0 - barAlign);
                force += tangent * spiralStrength * sin(gDist * 0.08 + uTime * 0.08);
            }

            galaxyForce += force;
        }
    }

    // ─── SUPERNOVA EVENTS ───────────────────────────
    vec3 supernovaForce = vec3(0.0);
    if (uSupernovaIntensity > 0.01) {
        float snNoise = snoise(vec3(pid * 0.01, age * 0.1, uTime * 0.3));
        float snThreshold = 1.0 - uSupernovaIntensity * 0.15;

        if (snNoise > snThreshold && mass > 1.2) {
            float intensity = (snNoise - snThreshold) * 20.0 * uSupernovaIntensity;
            vec3 explosionDir = normalize(hash31(pid + uTime * 47.1) - 0.5);
            supernovaForce = explosionDir * intensity;
        }
    }

    // ─── STAR FORMATION COMPRESSION ─────────────────
    vec3 starFormForce = vec3(0.0);
    if (uStarFormationRate > 0.01) {
        vec3 densityCoord = position * 0.02 + uTime * 0.01;
        float density = snoise(densityCoord) * 0.5 + 0.25;
        if (density > 0.2) {
            // Approximate gradient with offset samples (2 calls instead of 6)
            float dRight = snoise(densityCoord + vec3(0.02, 0.0, 0.0));
            float dUp    = snoise(densityCoord + vec3(0.0, 0.02, 0.0));
            float dHere  = snoise(densityCoord);
            vec3 densityGrad = vec3(dRight - dHere, dUp - dHere, dHere * 0.5) * 25.0;
            starFormForce = -densityGrad * density * uStarFormationRate * 3.0;
        }
    }

    // ─── QUANTUM ECCENTRICITY ───────────────────────
    vec3 quantumForce = vec3(0.0);
    if (uQuantumJitter > 0.01) {
        float qScale1 = sin(uTime * 1.618 + pid * 0.1) * 0.5 + 0.5;
        float qScale2 = cos(uTime * 2.718 + pid * 0.3) * 0.5 + 0.5;
        vec3 qCoord = position * (0.01 + qScale1 * 0.05) + uTime * (0.5 + qScale2);
        quantumForce = vec3(
            snoise(qCoord),
            snoise(qCoord + vec3(777.0)),
            snoise(qCoord + vec3(1234.0))
        ) * uQuantumJitter * 3.0;

        // Occasional quantum tunneling — sudden velocity spike
        float tunnel = snoise(vec3(pid * 0.001, uTime * 0.7, 0.0));
        if (tunnel > 0.97) {
            quantumForce *= 8.0;
        }
    }

    // ─── SENSOR: GYROSCOPE (full 3-axis) ────────────
    vec3 gyroForce = uGyro * 5.0;
    // Cross-axis coupling for realistic tilt-to-force
    gyroForce += vec3(-uGyro.y, uGyro.x, 0.0) * 1.5;

    // ─── SENSOR: AUDIO (procedural, non-echo) ──────
    vec3 audioForce = dir * uAudioLevel * 10.0
                    * sin(age * uAudioBass * 6.28318);

    // ─── MOUSE / TOUCH INTERACTION ──────────────────
    vec3 toMouse    = position - uMouseWorldPos;
    float mouseDist  = length(toMouse);
    vec3 mouseDir   = mouseDist > 0.01 ? toMouse / mouseDist : vec3(0.0);
    float mouseRadius = 40.0;
    float mouseFalloff = smoothstep(mouseRadius, 0.0, mouseDist);
    vec3 mouseForce = mouseDir * uMouseStrength * mouseFalloff * uMouseActive * 12.0;

    // ─── BLACK HOLES ────────────────────────────────
    // Gravitational singularities of varying sizes that
    // warp space, capture nearby particles, and eject
    // matter in relativistic jets along spin axes.
    vec3 blackHoleForce = vec3(0.0);
    if (uBlackHoleStrength > 0.01 && uNumBlackHoles > 0.0) {
        for (int i = 0; i < 8; i++) {
            if (float(i) >= uNumBlackHoles) break;
            float fi = float(i);
            vec3 bhSeed = hash31(fi * 173.7 + uBlackHoleSeed);
            // Black hole positions drift slowly through space
            float bhSpread = 60.0 + uPhase * 40.0;
            vec3 bhCenter = (bhSeed - 0.5) * bhSpread * 2.0;
            bhCenter += vec3(
                sin(uTime * 0.03 + fi * 2.1),
                cos(uTime * 0.025 + fi * 1.7),
                sin(uTime * 0.02 + fi * 3.3)
            ) * 15.0;

            // Size categories: small (0-0.33), medium (0.33-0.66), large (0.66-1.0)
            float sizeClass = hash11(fi * 59.3 + uBlackHoleSeed);
            float bhMass = sizeClass < 0.33 ? 4.0 : (sizeClass < 0.66 ? 12.0 : 30.0);
            float eventHorizon = sizeClass < 0.33 ? 3.0 : (sizeClass < 0.66 ? 8.0 : 18.0);

            vec3 toBH = bhCenter - position;
            float bhDist = length(toBH);
            vec3 bhDir = bhDist > 0.01 ? toBH / bhDist : vec3(0.0);

            // Extreme gravity near event horizon with inverse-square falloff
            float bhGrav = bhMass * uBlackHoleStrength / (bhDist * bhDist + eventHorizon * 0.3);
            float bhFalloff = smoothstep(eventHorizon * 12.0, 0.0, bhDist);

            // Gravitational pull
            vec3 bhPull = bhDir * bhGrav * bhFalloff;

            // Accretion disk spin — particles spiral inward
            if (bhDist < eventHorizon * 6.0) {
                vec3 spinAxis = normalize(hash31(fi * 211.1 + uBlackHoleSeed) - 0.5);
                vec3 tangent = normalize(cross(toBH, spinAxis));
                float spiralSpeed = bhGrav * 0.6 * smoothstep(eventHorizon * 6.0, eventHorizon, bhDist);
                bhPull += tangent * spiralSpeed;
            }

            // Relativistic jets — particles very near event horizon get
            // blasted along the spin axis at extreme velocities
            if (bhDist < eventHorizon * 1.5 && bhDist > eventHorizon * 0.3) {
                vec3 jetAxis = normalize(hash31(fi * 211.1 + uBlackHoleSeed) - 0.5);
                float jetSide = sign(dot(toBH, jetAxis));
                float jetIntensity = (1.0 - bhDist / (eventHorizon * 1.5)) * bhMass * 2.0;
                bhPull += jetAxis * jetSide * jetIntensity * uBlackHoleStrength;
            }

            blackHoleForce += bhPull;
        }
    }

    // ─── QUANTUM BRIDGES ────────────────────────────
    // Subtle entanglement links between dense regions create
    // ephemeral filamentary connections — particles near high-density
    // nodes feel a gentle pull toward the nearest connected node.
    vec3 quantumBridgeForce = vec3(0.0);
    if (uQuantumBridgeStrength > 0.01) {
        // Create bridge nodes at noise-determined positions
        vec3 bridgeCoord = position * 0.006 + uTime * 0.015;
        float bridgeDensity = fbm(bridgeCoord, 2);

        // Particles in moderately dense regions feel bridge pull
        if (bridgeDensity > 0.1) {
            // Find the direction toward the nearest bridge endpoint
            vec3 bridgeTarget = vec3(
                snoise(vec3(floor(bridgeCoord.x * 2.0) * 0.5, uTime * 0.02, 0.0)),
                snoise(vec3(0.0, floor(bridgeCoord.y * 2.0) * 0.5, uTime * 0.02)),
                snoise(vec3(uTime * 0.02, 0.0, floor(bridgeCoord.z * 2.0) * 0.5))
            ) * 80.0;

            vec3 toBridge = bridgeTarget - position;
            float bridgeDist = length(toBridge);
            vec3 bridgeDir = bridgeDist > 0.01 ? toBridge / bridgeDist : vec3(0.0);

            // Gentle, ethereal pull — stronger in denser regions
            float bridgePull = bridgeDensity * uQuantumBridgeStrength * 0.8;
            bridgePull *= smoothstep(200.0, 0.0, bridgeDist);

            // Oscillating connection strength (quantum flickering)
            float flicker = sin(uTime * 2.3 + pid * 0.7) * 0.3 + 0.7;
            quantumBridgeForce = bridgeDir * bridgePull * flicker;

            // Add slight perpendicular drift for visual helicity
            vec3 helical = cross(bridgeDir, vec3(0.0, 1.0, 0.0));
            if (length(helical) > 0.01) {
                helical = normalize(helical);
                quantumBridgeForce += helical * bridgePull * 0.2 * sin(uTime * 4.0 + bridgeDist * 0.1);
            }
        }
    }

    // ─── ENERGY CONGLOMERATIONS ─────────────────────
    // Irregularly shaped celestial formations of pure dancing
    // energy — turbulent, vibrant clusters that attract and
    // repel particles in chaotic but beautiful patterns.
    vec3 conglomForce = vec3(0.0);
    if (uConglomerationStrength > 0.01) {
        // 3-4 major energy conglomerations with irregular shapes
        for (int i = 0; i < 4; i++) {
            float fi = float(i);
            vec3 cSeed = hash31(fi * 337.7 + uGalaxySeed * 0.5);

            // Conglomeration centers that dance and wander
            vec3 cCenter = (cSeed - 0.5) * 200.0;
            cCenter += vec3(
                sin(uTime * 0.05 * (1.0 + fi * 0.3) + fi * 4.0) * 30.0,
                cos(uTime * 0.04 * (1.0 + fi * 0.2) + fi * 2.5) * 25.0,
                sin(uTime * 0.06 * (1.0 + fi * 0.4) + fi * 1.8) * 35.0
            );

            vec3 toCong = cCenter - position;
            float cDist = length(toCong);
            vec3 cDir = cDist > 0.01 ? toCong / cDist : vec3(0.0);

            // Irregular shape via noise deformation
            float shapeNoise = fbm(vec3(
                cDir.x * 3.0 + fi + uTime * 0.08,
                cDir.y * 3.0 + fi * 2.0 + uTime * 0.06,
                cDir.z * 3.0 + fi * 3.0 + uTime * 0.07
            ), 2);
            float irregularRadius = 25.0 + shapeNoise * 20.0;
            float cFalloff = smoothstep(irregularRadius * 2.5, 0.0, cDist);

            // Alternating attract/repel creates dancing energy
            float breathe = sin(uTime * 0.3 + fi * 1.5) * 0.5 + 0.5;
            float cMass = (3.0 + shapeNoise * 4.0) * uConglomerationStrength;

            vec3 cPull = cDir * cMass * cFalloff * mix(-0.3, 1.0, breathe);

            // Turbulent internal motion — swirling chaotic energy
            if (cDist < irregularRadius * 1.5) {
                float chaosVal = snoise(position * 0.04 + vec3(fi * 20.0) + uTime * 0.15);
                vec3 chaos = vec3(chaosVal, -chaosVal * 0.8, chaosVal * 0.6) * cMass * cFalloff * 1.5;
                cPull += chaos;
            }

            conglomForce += cPull;
        }
    }

    // ─── COLLISION DYNAMICS ─────────────────────────
    // Enhanced particle-particle interaction simulation.
    // Particles near dense regions experience dramatic
    // collision forces — births from compression, deaths from explosion.
    vec3 collisionForce = vec3(0.0);
    if (uCollisionIntensity > 0.01) {
        // Local density estimation via noise field (single octave)
        vec3 denseCoord = position * 0.025 + uTime * 0.008;
        float localDensity = snoise(denseCoord) * 0.5 + 0.25;
        float densityThreshold = 0.3;

        if (localDensity > densityThreshold) {
            // In dense regions: particles jostle and collide
            float collisionStr = (localDensity - densityThreshold) * uCollisionIntensity * 5.0;

            // Explosive birth: compression triggers outward burst (star birth)
            float birthTrigger = snoise(vec3(pid * 0.005, uTime * 0.5, age * 0.05));
            if (birthTrigger > 0.7 && age < 5.0) {
                vec3 burstDir = normalize(hash31(pid + uTime * 31.7) - 0.5);
                collisionForce += burstDir * collisionStr * 8.0;
            }

            // Destruction: old massive particles in dense regions explode
            if (age > 20.0 && mass > 1.0) {
                float deathTrigger = snoise(vec3(pid * 0.003, uTime * 0.4, mass));
                if (deathTrigger > 0.75) {
                    vec3 explodeDir = normalize(hash31(pid * 1.1 + uTime * 53.3) - 0.5);
                    collisionForce += explodeDir * collisionStr * 12.0 * mass;
                }
            }

            // General collision jitter in dense regions (single noise call)
            float jitterVal = snoise(position * 0.1 + uTime * 0.8);
            collisionForce += vec3(jitterVal, -jitterVal * 0.7, jitterVal * 0.5) * collisionStr * 1.5;
        }
    }

    // ─── AR SURFACE-REACTIVE FORCE FIELD ────────────
    // Projects particle into screen-space UV, samples the flow
    // texture, and generates forces from detected surfaces.
    vec3 arSurfaceForce = vec3(0.0);
    vec3 arFlowForce    = vec3(0.0);
    if (uARActive > 0.5) {
        // Project particle position into normalised screen UV [0,1]
        // Improved camera frustum mapping: particles in front of camera
        // get better UV coverage
        float camDist = abs(position.z);

        // Dynamic view range based on phase and depth
        float viewRangeX = mix(150.0, 300.0, uPhase / 8.0);
        float viewRangeY = mix(120.0, 240.0, uPhase / 8.0);

        // Map XY to screen space with depth-aware scaling
        float depthScale = 1.0 / (1.0 + camDist * 0.02);  // closer = larger coverage
        vec2 screenUV = position.xy / vec2(viewRangeX, viewRangeY) * depthScale * 0.5 + 0.5;
        screenUV = clamp(screenUV, 0.02, 0.98);  // Keep away from texture edges to avoid filtering artifacts

        // Sample flow texture: (flowX, flowY, surfaceConfidence, luminance)
        vec4 flowData = texture2D(uFlowTexture, screenUV);
        float flowX       = flowData.r;
        float flowY       = flowData.g;
        float surfaceConf = flowData.b;
        float localLum    = flowData.a;

        // ── Surface repulsion: particles bounce off detected surfaces ──
        // Surface confidence drives repulsive force away from camera
        // Combined with proximity weighting for better responsiveness
        float proximityBoost = smoothstep(120.0, 5.0, camDist);  // stronger when near camera
        float surfaceStrength = surfaceConf * uARSurfaceForce * proximityBoost;

        // Primary: push particles outward along Z (away from camera/surface)
        arSurfaceForce.z += surfaceStrength * 20.0;

        // Secondary: lateral deflection based on detected surface orientation
        // Flow vectors indicate motion, which helps us infer surface tilt
        float flowMag = length(vec2(flowX, flowY));
        arSurfaceForce.x += flowX * surfaceStrength * 12.0;
        arSurfaceForce.y += flowY * surfaceStrength * 12.0;

        // Cross-axis coupling: perpendicular flow creates spin
        if (flowMag > 0.05) {
            arSurfaceForce.x -= flowY * surfaceConf * uARSurfaceForce * 3.0;
            arSurfaceForce.y += flowX * surfaceConf * uARSurfaceForce * 3.0;
        }

        // ── Motion-following: particles drift with camera motion flow ──
        // Flow Force directly follows optical flow from camera motion
        arFlowForce.x = flowX * uARFlowForce * 8.0;
        arFlowForce.y = flowY * uARFlowForce * 8.0;

        // Flow-induced vorticity: create swirling motion around large optical flow
        float flowMagnitude = sqrt(flowX * flowX + flowY * flowY);
        if (flowMagnitude > 0.1) {
            // Perpendicular component creates rotation
            vec3 swirl = vec3(-flowY, flowX, 0.0) * flowMagnitude * uARFlowForce * 4.0;
            arFlowForce += swirl;

            // Add turbulent jitter in flow-aligned direction
            arFlowForce.z += flowMagnitude * uARFlowForce * sin(position.x * 0.1 + position.y * 0.1) * 2.0;
        }

        // ── Luminance-reactive acceleration ──
        // Bright regions accelerate particles outward, creating energy attraction
        float lumBoost = localLum * uARLuminance;
        arFlowForce += dir * lumBoost * 8.0;
        arFlowForce.z += lumBoost * 4.0;  // Also push outward in Z for volume effect
    }

    // ══════════════════════════════════════════════════
    // PHASE-SPECIFIC DYNAMICS
    // ══════════════════════════════════════════════════
    if (uPhase < 0.5) {
        // ** SINGULARITY ** — tight compressed swirl
        velocity += centralPull  * 15.0  * uDeltaTime;
        velocity += turbulence   *  3.0  * uDeltaTime;
        velocity += vortex       * 20.0  * uDeltaTime;
        velocity += quantumForce *  2.0  * uDeltaTime;
        velocity += quantumBridgeForce * 1.0 * uDeltaTime;
        velocity += collisionForce * 0.5 * uDeltaTime;
        velocity *= 0.97;

    } else if (uPhase < 1.5) {
        // ** INFLATION ** — violent outward burst
        velocity += expansion    *  8.0  * uDeltaTime;
        velocity += turbulence   *  1.5  * uDeltaTime;
        velocity += vortex       *  5.0  * uDeltaTime;
        velocity += quantumForce *  1.0  * uDeltaTime;
        velocity += conglomForce *  0.5  * uDeltaTime;
        velocity += collisionForce * 1.0 * uDeltaTime;

    } else if (uPhase < 2.5) {
        // ** COOLING ** — decelerate, grow filaments
        velocity += expansion    *  0.4  * uDeltaTime;
        velocity += gravField    *  2.5  * uDeltaTime;
        velocity += centralPull  *  0.3  * uDeltaTime;
        velocity += vortex       *  3.0  * uDeltaTime;
        velocity += filForce     *  1.5  * uDeltaTime;
        velocity += quantumForce *  0.5  * uDeltaTime;
        velocity += starFormForce * uDeltaTime;
        velocity += blackHoleForce * 0.5 * uDeltaTime;
        velocity += quantumBridgeForce * 0.8 * uDeltaTime;
        velocity += conglomForce * 0.6 * uDeltaTime;
        velocity += collisionForce * 0.8 * uDeltaTime;
        velocity *= 0.997;

    } else if (uPhase < 3.5) {
        // ** STRUCTURE + STELLAR IGNITION ** — galaxies forming
        velocity += expansion    *  0.15 * uDeltaTime;
        velocity += gravField    *  3.0  * uDeltaTime;
        velocity += centralPull  *  0.2  * uDeltaTime;
        velocity += vortex       *  4.0  * uDeltaTime;
        velocity += filForce     *  2.0  * uDeltaTime;
        velocity += galaxyForce  *  1.5  * uDeltaTime;
        velocity += starFormForce * uDeltaTime;
        velocity += supernovaForce * uDeltaTime;
        velocity += quantumForce *  0.3  * uDeltaTime;
        velocity += turbulence   *  0.3  * uDeltaTime;
        velocity += blackHoleForce * 1.0 * uDeltaTime;
        velocity += quantumBridgeForce * 1.0 * uDeltaTime;
        velocity += conglomForce * 1.0 * uDeltaTime;
        velocity += collisionForce * 1.0 * uDeltaTime;
        velocity *= 0.998;

    } else if (uPhase < 4.5) {
        // ** GALAXY FORMATION ** — strong galaxy attractors
        velocity += expansion    *  0.1  * uDeltaTime;
        velocity += gravField    *  2.0  * uDeltaTime;
        velocity += galaxyForce  *  3.0  * uDeltaTime;
        velocity += vortex       *  3.0  * uDeltaTime;
        velocity += filForce     *  1.5  * uDeltaTime;
        velocity += starFormForce * 1.5  * uDeltaTime;
        velocity += supernovaForce * uDeltaTime;
        velocity += quantumForce *  0.2  * uDeltaTime;
        velocity += blackHoleForce * 1.5 * uDeltaTime;
        velocity += quantumBridgeForce * 0.8 * uDeltaTime;
        velocity += conglomForce * 1.2 * uDeltaTime;
        velocity += collisionForce * 1.2 * uDeltaTime;
        velocity *= 0.996;

    } else if (uPhase < 5.5) {
        // ** STELLAR EVOLUTION ** — mature galaxies
        velocity += galaxyForce  *  3.5  * uDeltaTime;
        velocity += gravField    *  1.5  * uDeltaTime;
        velocity += vortex       *  2.5  * uDeltaTime;
        velocity += starFormForce * 1.0  * uDeltaTime;
        velocity += supernovaForce * 1.5 * uDeltaTime;
        velocity += quantumForce *  0.15 * uDeltaTime;
        velocity += turbulence   *  0.2  * uDeltaTime;
        velocity += blackHoleForce * 2.0 * uDeltaTime;
        velocity += quantumBridgeForce * 0.5 * uDeltaTime;
        velocity += conglomForce * 1.0 * uDeltaTime;
        velocity += collisionForce * 1.5 * uDeltaTime;
        velocity *= 0.997;

    } else if (uPhase < 6.5) {
        // ** SUPERNOVA ERA ** — explosive stellar deaths
        velocity += galaxyForce  *  2.0  * uDeltaTime;
        velocity += supernovaForce * 3.0 * uDeltaTime;
        velocity += gravField    *  1.0  * uDeltaTime;
        velocity += vortex       *  1.5  * uDeltaTime;
        velocity += quantumForce *  0.8  * uDeltaTime;
        velocity += turbulence   *  0.5  * uDeltaTime;
        velocity += blackHoleForce * 2.5 * uDeltaTime;
        velocity += conglomForce * 0.6 * uDeltaTime;
        velocity += collisionForce * 2.0 * uDeltaTime;
        velocity *= 0.995;

    } else {
        // ** HEAT DEATH ** — everything dissipates
        velocity += expansion    *  0.02 * uDeltaTime;
        velocity += quantumForce *  0.05 * uDeltaTime;
        velocity += blackHoleForce * 1.0 * uDeltaTime;
        velocity *= 0.99;
    }

    // Always apply environmental sensors + mouse + AR
    velocity += gyroForce  * uDeltaTime;
    velocity += audioForce * uDeltaTime;
    velocity += mouseForce * uDeltaTime;
    velocity += arSurfaceForce * uDeltaTime;
    velocity += arFlowForce    * uDeltaTime;

    // Speed ceiling (increased for supernovae)
    float maxSpeed = 60.0 + uSupernovaIntensity * 40.0;
    float speed = length(velocity);
    if (speed > maxSpeed) velocity = velocity / speed * maxSpeed;

    gl_FragColor = vec4(velocity, mass);
}
`,xi=`
uniform sampler2D uPositionTexture;
uniform sampler2D uVelocityTexture;
uniform float uPixelRatio;
uniform float uPointSize;
uniform float uTime;
uniform float uSupernovaIntensity;
uniform float uStarFormationRate;
uniform float uHyperspaceWarp;
uniform float uBlackHoleStrength;
uniform float uCollisionIntensity;

varying float vSpeed;
varying float vAge;
varying float vDistFromCenter;
varying float vMass;

void main() {
    // position.xy stores the UV into the GPGPU data textures
    vec2 uv = position.xy;

    vec4 posData = texture2D(uPositionTexture, uv);
    vec4 velData = texture2D(uVelocityTexture, uv);

    vec3 pos = posData.xyz;
    vAge            = posData.w;
    vSpeed          = length(velData.xyz);
    vDistFromCenter = length(pos);
    vMass           = velData.w;

    // ─── Hyperspace dimensional warping ─────────────
    // Particles bend through space-time, creating visible
    // distortions that emulate higher-dimensional traversal.
    float warpScale = uHyperspaceWarp * smoothstep(0.0, 60.0, vDistFromCenter);
    pos.x += sin(pos.y * 0.02 + pos.z * 0.015 + uTime * 0.4) * warpScale * 3.5;
    pos.y += cos(pos.x * 0.018 + pos.z * 0.02 + uTime * 0.35) * warpScale * 3.0;
    pos.z += sin(pos.x * 0.015 + pos.y * 0.022 + uTime * 0.3) * warpScale * 2.5;

    // ─── Quantum fluctuation micro-displacement ─────
    float quantumDisp = sin(vAge * 2.0 + vSpeed * 0.5 + uTime * 3.0) * 0.35;
    vec3 posNorm = length(pos) > 0.001 ? normalize(pos) : vec3(0.0, 1.0, 0.0);
    pos += posNorm * quantumDisp;

    vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
    gl_Position = projectionMatrix * mvPosition;

    // Dynamic point sizing — fast / nearby particles are larger
    float basePx     = uPointSize * uPixelRatio;
    float speedBoost = 1.0 + smoothstep(0.0, 20.0, vSpeed) * 2.0;
    float depthScale = 250.0 / max(1.0, -mvPosition.z);

    // Star formation: dense regions get brighter larger points
    float starGlow = uStarFormationRate * smoothstep(15.0, 5.0, vDistFromCenter) * 0.5;

    // Supernova: high-speed massive particles flash large
    float snFlash = 0.0;
    if (uSupernovaIntensity > 0.01 && vSpeed > 30.0 && vMass > 1.2) {
        snFlash = (vSpeed - 30.0) / 30.0 * uSupernovaIntensity * 3.0;
    }

    // Hyperspace proximity glow — particles near dimensional folds grow
    float hyperspaceGlow = abs(sin(pos.x * 0.01 + pos.y * 0.012 + uTime * 0.2)) * uHyperspaceWarp * 0.6;

    // Black hole accretion glow — fast particles near singularities enlarge
    float bhGlow = 0.0;
    if (uBlackHoleStrength > 0.01 && vSpeed > 20.0) {
        bhGlow = smoothstep(20.0, 50.0, vSpeed) * uBlackHoleStrength * 1.5;
    }

    // Collision birth/death flash sizing
    float collisionGlow = 0.0;
    if (uCollisionIntensity > 0.01) {
        // Young fast particles: birth flash
        if (vAge < 5.0 && vSpeed > 15.0) {
            collisionGlow += (1.0 - vAge / 5.0) * smoothstep(15.0, 30.0, vSpeed) * uCollisionIntensity * 2.0;
        }
        // Old massive fast particles: death explosion
        if (vAge > 20.0 && vSpeed > 20.0 && vMass > 1.0) {
            collisionGlow += smoothstep(20.0, 50.0, vSpeed) * uCollisionIntensity * 1.5;
        }
    }

    gl_PointSize = basePx * (speedBoost + starGlow + snFlash + hyperspaceGlow + bhGlow + collisionGlow) * depthScale;
    gl_PointSize = clamp(gl_PointSize, 0.5, 150.0);
}
`,bi=dt+`

varying float vSpeed;
varying float vAge;
varying float vDistFromCenter;
varying float vMass;

uniform float uTime;
uniform float uTemperature;
uniform float uPhase;
uniform float uSupernovaIntensity;
uniform float uStarFormationRate;
uniform float uHyperspaceWarp;

// AR camera integration
uniform float uARActive;
uniform float uARSceneLuminance;
uniform float uARSurfaceCoverage;

// New cosmic phenomena
uniform float uBlackHoleStrength;
uniform float uQuantumBridgeStrength;
uniform float uConglomerationStrength;
uniform float uCollisionIntensity;

// ─── CIE-approximate wavelength → visible RGB ──────────
vec3 wavelengthToRGB(float wavelength) {
    float w = clamp(wavelength, 380.0, 780.0);
    vec3 color = vec3(0.0);

    if      (w < 440.0) { color = vec3(-(w - 440.0) / 60.0, 0.0, 1.0); }
    else if (w < 490.0) { color = vec3(0.0, (w - 440.0) / 50.0, 1.0); }
    else if (w < 510.0) { color = vec3(0.0, 1.0, -(w - 510.0) / 20.0); }
    else if (w < 580.0) { color = vec3((w - 510.0) / 70.0, 1.0, 0.0); }
    else if (w < 645.0) { color = vec3(1.0, -(w - 645.0) / 65.0, 0.0); }
    else                { color = vec3(1.0, 0.0, 0.0); }

    // Intensity taper at spectral boundaries
    float intensity;
    if      (w < 420.0) intensity = 0.3 + 0.7 * (w - 380.0) / 40.0;
    else if (w > 700.0) intensity = 0.3 + 0.7 * (780.0 - w) / 80.0;
    else                intensity = 1.0;

    return color * intensity;
}

void main() {
    // Soft circular point sprite
    vec2 uvc = gl_PointCoord - 0.5;
    float d = length(uvc);
    if (d > 0.5) discard;
    float softEdge = 1.0 - smoothstep(0.15, 0.5, d);

    // ─── HYPERSPECTRAL VELOCITY MAPPING ─────────────
    // Fast → blueshift (short λ ≈ 390 nm)
    // Slow → redshift  (long  λ ≈ 740 nm)
    float speedNorm      = clamp(vSpeed / 25.0, 0.0, 1.0);
    float baseWavelength = mix(740.0, 390.0, speedNorm);

    // ─── CMB SPECTRAL INTERFERENCE (Simplex noise) ──
    float cmb = snoise(vec3(
        vSpeed * 0.3 + uTime * 0.02,
        vAge   * 0.08,
        vDistFromCenter * 0.01
    ));
    float wavelength = clamp(baseWavelength + cmb * 50.0, 380.0, 780.0);

    vec3 color = wavelengthToRGB(wavelength);

    // ─── HOT PARTICLE WHITE-BLUE BOOST ──────────────
    float hotGlow = smoothstep(18.0, 40.0, vSpeed);
    color += vec3(0.7, 0.85, 1.0) * hotGlow * 0.6;

    // ─── TEMPERATURE AMBIENT GLOW ───────────────────
    float tempNorm = clamp(uTemperature / 1.0e8, 0.0, 1.0);
    color += vec3(1.0, 0.5, 0.15) * tempNorm * 0.35;

    // ─── SINGULARITY / INFLATION CORE FLASH ─────────
    if (uPhase < 1.5) {
        float coreGlow = exp(-vDistFromCenter * 0.5) * (1.5 - uPhase);
        color += vec3(1.0, 0.95, 0.9) * coreGlow;
    }

    // ─── STAR FORMATION — ELECTRIC PLASMA EFFECT ────
    if (uStarFormationRate > 0.01) {
        float densityProxy = smoothstep(60.0, 10.0, vDistFromCenter);
        float sparkle = snoise(vec3(
            vAge * 2.0 + uTime * 5.0,
            vSpeed * 0.5,
            vMass * 3.0
        ));
        float electricArc = pow(max(0.0, sparkle), 3.0) * densityProxy * uStarFormationRate;

        // Electric blue-white with purple fringe
        vec3 electricColor = mix(
            vec3(0.3, 0.5, 1.0),
            vec3(0.8, 0.6, 1.0),
            sin(uTime * 3.0 + vAge) * 0.5 + 0.5
        );
        color += electricColor * electricArc * 2.0;

        // Bright white core for newborn stars
        float newborn = smoothstep(2.0, 0.0, vAge) * uStarFormationRate * densityProxy;
        color += vec3(1.0, 0.98, 0.95) * newborn * 1.5;
    }

    // ─── SUPERNOVA FLASH — EXPLOSIVE DEATH ──────────
    if (uSupernovaIntensity > 0.01 && vSpeed > 25.0 && vMass > 1.0) {
        float snStrength = smoothstep(25.0, 60.0, vSpeed) * uSupernovaIntensity;

        // White-hot core
        float coreFlash = (1.0 - smoothstep(0.0, 0.2, d)) * snStrength;
        color += vec3(1.0, 1.0, 1.0) * coreFlash * 3.0;

        // Electric blue corona
        float corona = smoothstep(0.15, 0.4, d) * (1.0 - smoothstep(0.4, 0.5, d));
        color += vec3(0.4, 0.6, 1.0) * corona * snStrength * 2.0;

        // Purple-red shockwave edge
        float shockwave = smoothstep(0.3, 0.45, d) * (1.0 - smoothstep(0.45, 0.5, d));
        color += vec3(1.0, 0.2, 0.5) * shockwave * snStrength * 1.5;

        // Pulsating intensity
        float pulse = sin(uTime * 8.0 + vAge * 3.0) * 0.3 + 0.7;
        color *= pulse;
    }

    // ─── GALAXY ARM COLORING ────────────────────────
    if (uPhase >= 3.5) {
        float armNoise = snoise(vec3(
            vDistFromCenter * 0.02,
            vAge * 0.01,
            uTime * 0.005
        ));
        float armFactor = smoothstep(-0.2, 0.5, armNoise);
        vec3 armColor = mix(
            vec3(0.1, 0.15, 0.3),
            vec3(0.8, 0.6, 0.2),
            armFactor
        );
        float galaxyBlend = smoothstep(2.5, 4.5, uPhase) * 0.3;
        color = mix(color, color + armColor, galaxyBlend);
    }

    // ─── DEEP-INFRARED AFTERGLOW (old particles) ────
    float irGlow = smoothstep(40.0, 80.0, vAge) * (1.0 - speedNorm);
    color += vec3(0.4, 0.05, 0.0) * irGlow * 0.5;

    // ─── BLACK HOLE PROXIMITY EFFECTS ───────────────
    // Particles near black holes get extreme redshift, darkening,
    // and accretion disk glow — spaghettification visual.
    if (uBlackHoleStrength > 0.01) {
        // Proximity estimation from velocity+gravity signature
        float bhProximity = smoothstep(8.0, 45.0, vSpeed) * uBlackHoleStrength;

        // Accretion disk glow: hot orange-white ring
        float accretionGlow = bhProximity * smoothstep(15.0, 35.0, vSpeed);
        vec3 accretionColor = mix(
            vec3(1.0, 0.4, 0.1),
            vec3(1.0, 0.95, 0.8),
            smoothstep(25.0, 45.0, vSpeed)
        );
        color += accretionColor * accretionGlow * 1.8;

        // Event horizon darkening: extreme-speed particles near core dim
        float eventHorizonDim = smoothstep(40.0, 60.0, vSpeed) * uBlackHoleStrength * 0.6;
        color *= 1.0 - eventHorizonDim;

        // Gravitational redshift: shift toward deep red near singularity
        float redshift = bhProximity * 0.4;
        color = mix(color, color * vec3(1.2, 0.3, 0.1), redshift);

        // Hawking radiation glow at event horizon boundary
        float hawking = smoothstep(35.0, 42.0, vSpeed) * (1.0 - smoothstep(42.0, 50.0, vSpeed));
        color += vec3(0.5, 0.7, 1.0) * hawking * uBlackHoleStrength * 0.8;
    }

    // ─── QUANTUM BRIDGE VISUAL ──────────────────────
    // Subtle ethereal glow connecting entangled particle regions.
    // Particles participating in bridges get a faint cyan-violet shimmer.
    if (uQuantumBridgeStrength > 0.01) {
        float bridgeNoise = snoise(vec3(
            vDistFromCenter * 0.006 + uTime * 0.015,
            vAge * 0.02,
            vSpeed * 0.05
        ));
        float bridgeActive = smoothstep(0.1, 0.5, bridgeNoise) * uQuantumBridgeStrength;

        // Oscillating entanglement glow
        float entangleFlicker = sin(uTime * 2.3 + vDistFromCenter * 0.1 + vAge * 0.5) * 0.4 + 0.6;
        vec3 bridgeColor = mix(
            vec3(0.2, 0.8, 0.9),
            vec3(0.6, 0.3, 1.0),
            sin(uTime * 0.8 + vDistFromCenter * 0.03) * 0.5 + 0.5
        );
        color += bridgeColor * bridgeActive * entangleFlicker * 0.35;

        // Very subtle filament brightening along bridge paths
        float filamentGlow = pow(max(0.0, bridgeNoise), 4.0) * uQuantumBridgeStrength;
        color += vec3(0.9, 0.95, 1.0) * filamentGlow * 0.3;
    }

    // ─── ENERGY CONGLOMERATION COLORING ─────────────
    // Irregularly shaped dancing energy clusters: vibrant,
    // iridescent, pulsating with chromatic intensity.
    if (uConglomerationStrength > 0.01) {
        float congNoise = snoise(vec3(
            vDistFromCenter * 0.012 + uTime * 0.06,
            vAge * 0.03 + uTime * 0.04,
            vSpeed * 0.08
        ));
        float congActive = smoothstep(0.0, 0.6, congNoise) * uConglomerationStrength;

        // Multi-hue dancing energy palette
        float hueShift = uTime * 0.5 + vDistFromCenter * 0.03 + vAge * 0.1;
        vec3 congColor = vec3(
            sin(hueShift) * 0.5 + 0.5,
            sin(hueShift + 2.094) * 0.5 + 0.5,
            sin(hueShift + 4.189) * 0.5 + 0.5
        );
        // Boost saturation and brilliance
        congColor = mix(vec3(dot(congColor, vec3(0.299, 0.587, 0.114))), congColor, 1.8);
        congColor = clamp(congColor, 0.0, 1.0);

        // Pulsating intensity — energy breathes
        float pulse = sin(uTime * 0.3 + vDistFromCenter * 0.02) * 0.3 + 0.7;
        color += congColor * congActive * pulse * 0.6;

        // Electric crackling edges within conglomerations (reuse congNoise)
        float crackle = pow(max(0.0, congNoise), 5.0) * congActive;
        color += vec3(1.0, 0.9, 0.7) * crackle * 2.0;
    }

    // ─── COLLISION/EXPLOSION VISUALS ────────────────
    // Birth explosions glow white-blue, death explosions glow red-orange.
    if (uCollisionIntensity > 0.01) {
        // Young particles in high-speed regions: birth flash
        if (vAge < 5.0 && vSpeed > 15.0) {
            float birthFlash = (1.0 - vAge / 5.0) * smoothstep(15.0, 30.0, vSpeed) * uCollisionIntensity;
            color += vec3(0.7, 0.85, 1.0) * birthFlash * 2.0;
            // Core white
            float coreB = (1.0 - smoothstep(0.0, 0.15, d)) * birthFlash;
            color += vec3(1.0) * coreB * 1.5;
        }

        // Old massive particles at high speed: death explosion
        if (vAge > 20.0 && vSpeed > 20.0 && vMass > 1.0) {
            float deathGlow = smoothstep(20.0, 50.0, vSpeed) * uCollisionIntensity;
            vec3 deathColor = mix(
                vec3(1.0, 0.3, 0.05),
                vec3(1.0, 0.8, 0.2),
                sin(uTime * 6.0 + vAge) * 0.5 + 0.5
            );
            color += deathColor * deathGlow * 1.5;
            // Shockwave ring
            float deathRing = smoothstep(0.25, 0.35, d) * (1.0 - smoothstep(0.35, 0.45, d));
            color += vec3(1.0, 0.5, 0.8) * deathRing * deathGlow * 2.0;
        }
    }

    // ─── QUANTUM CHROMATIC IRIDESCENCE ─────────────
    // Particles shimmer with dimensional interference patterns
    // that shift based on viewing angle (approximated by distance)
    float iriPhase = vDistFromCenter * 0.03 + vSpeed * 0.08 + uTime * 0.7;
    vec3 quantumIri = vec3(
        sin(iriPhase) * 0.5 + 0.5,
        sin(iriPhase + 2.094) * 0.5 + 0.5,
        sin(iriPhase + 4.189) * 0.5 + 0.5
    );
    float iriIntensity = smoothstep(0.0, 1.0, uHyperspaceWarp) * 0.2;
    color = mix(color, color + quantumIri * 0.6, iriIntensity);

    // ─── HYPERSPACE DIMENSIONAL RIFT GLOW ───────────
    // Reuse CMB noise pattern for dimensional rift (avoids extra snoise call)
    float riftNoise = cmb * 0.5 + 0.5; // remap [-1,1] to [0,1]
    float riftIntensity = smoothstep(0.5, 0.9, riftNoise) * uHyperspaceWarp;
    vec3 riftColor = mix(
        vec3(0.15, 0.1, 0.6),
        vec3(0.6, 0.2, 0.9),
        sin(uTime * 0.3 + vDistFromCenter * 0.02) * 0.5 + 0.5
    );
    color += riftColor * riftIntensity * 0.5;

    // ─── MULTIVERSE SPECTRAL BLEED ─────────────────
    // Overlapping universe boundaries create spectral
    // interference fringes — thin bands of shifted color.
    float fringePattern = sin(vDistFromCenter * 0.1 + vSpeed * 0.3 + uTime * 1.5);
    float fringeIntensity = smoothstep(0.85, 1.0, abs(fringePattern)) * uHyperspaceWarp * 0.35;
    vec3 fringeColor = wavelengthToRGB(mix(420.0, 680.0, fringePattern * 0.5 + 0.5));
    color += fringeColor * fringeIntensity;

    // ─── HEAT DEATH DIMMING ─────────────────────────
    if (uPhase > 6.5) {
        float deathFade = (uPhase - 6.5) * 2.0;
        // Keep a faint residual glow even at heat death for visual appeal
        color *= max(0.04, 1.0 - deathFade * 0.92);
        // Shift remaining particles toward deep violet at heat death
        color = mix(color, vec3(0.08, 0.02, 0.15), deathFade * 0.3);
    }

    // ─── AR CAMERA LUMINANCE-REACTIVE COLORING ──────
    if (uARActive > 0.5) {
        // Bright environments: warm golden-white uplift
        // Dark environments: deep blue-violet shift
        float lumShift = uARSceneLuminance * 2.0 - 1.0;   // [-1, 1] dark-to-bright

        // Warm boost in bright scenes (golden photon bath)
        vec3 warmTint = vec3(1.0, 0.85, 0.55) * max(0.0, lumShift) * 0.3;
        // Cool boost in dark scenes (cosmic void deepening)
        vec3 coolTint = vec3(0.3, 0.4, 1.0) * max(0.0, -lumShift) * 0.25;
        color += warmTint + coolTint;

        // Surface-detected regions: particles near surfaces get
        // an iridescent edge shimmer (holographic AR effect)
        if (uARSurfaceCoverage > 0.1) {
            float iridescence = sin(vDistFromCenter * 0.3 + uTime * 2.0 + vSpeed) * 0.5 + 0.5;
            vec3 iriColor = mix(
                vec3(0.3, 0.8, 1.0),
                vec3(1.0, 0.4, 0.8),
                iridescence
            );
            float surfaceGlow = uARSurfaceCoverage * smoothstep(100.0, 20.0, vDistFromCenter);
            color += iriColor * surfaceGlow * 0.2;
        }

        // Overall brightness modulation: AR mode slightly boosts
        // emissive intensity so particles stand out over camera feed
        color *= 1.0 + uARSceneLuminance * 0.4;
    }

    // ─── ALPHA COMPOSITING ──────────────────────────
    float alpha = softEdge;
    alpha *= mix(1.0, 0.15, clamp(vAge / 80.0, 0.0, 1.0));

    // Keep supernovae bright
    if (uSupernovaIntensity > 0.01 && vSpeed > 25.0) {
        alpha = max(alpha, smoothstep(25.0, 50.0, vSpeed) * uSupernovaIntensity * 0.8);
    }

    alpha = clamp(alpha, 0.0, 1.0);

    gl_FragColor = vec4(color, alpha);
}
`,L=/Android|iPhone|iPad|iPod/i.test(navigator.userAgent),pt=L&&(navigator.hardwareConcurrency||4)<=4,wi=navigator.deviceMemory||4,Ge=pt&&wi<=2,U=Ge?256:L?512:1024,Ue=U*U,q=document.getElementById("canvas"),A=new Bt({canvas:q,antialias:!1,alpha:!0,premultipliedAlpha:!1,powerPreference:"high-performance",stencil:!1,depth:!0}),Si=L?1.5:2;A.setPixelRatio(Math.min(window.devicePixelRatio,Si));A.setSize(window.innerWidth,window.innerHeight);A.outputColorSpace=zt;A.setClearColor(0,1);if(!A.capabilities.isWebGL2)throw new Error("WebGL 2 not available");q.addEventListener("webglcontextlost",a=>{a.preventDefault()},!1);q.addEventListener("webglcontextrestored",()=>{location.reload()},!1);const be=new Nt,_=new Ht(60,window.innerWidth/window.innerHeight,.1,1e4);_.position.set(0,0,120);const it={0:30,1:250,2:350,3:400,4:450,5:500,6:400,7:600},I=new Zt(_,q);I.enableDamping=!0;I.dampingFactor=.04;I.minDistance=10;I.maxDistance=800;I.autoRotate=!0;I.autoRotateSpeed=.08;{const a=L?3e3:6e3,e=new Float32Array(a*3),t=new Float32Array(a*3);for(let o=0;o<a;o++){const r=o*3;e[r]=(Math.random()-.5)*2800,e[r+1]=(Math.random()-.5)*2800,e[r+2]=(Math.random()-.5)*2800;const n=Math.random();t[r]=.8+n*.2,t[r+1]=.85+n*.15,t[r+2]=.95+n*.05}const i=new _e;i.setAttribute("position",new Q(e,3)),i.setAttribute("color",new Q(t,3));const s=new Gt({size:.5,vertexColors:!0,transparent:!0,opacity:.3,depthWrite:!1,sizeAttenuation:!0});be.add(new ze(i,s))}let ye;{const a=L?150:300,e=new Float32Array(a*3),t=new Float32Array(a*3),i=new Float32Array(a);for(let r=0;r<a;r++){const n=r*3,m=40+Math.random()*300,T=Math.random()*Math.PI*2,D=Math.acos(2*Math.random()-1);e[n]=m*Math.sin(D)*Math.cos(T),e[n+1]=m*Math.sin(D)*Math.sin(T),e[n+2]=m*Math.cos(D);const d=Math.random();d<.33?(t[n]=.25,t[n+1]=.05,t[n+2]=.35):d<.66?(t[n]=.05,t[n+1]=.2,t[n+2]=.3):(t[n]=.35,t[n+1]=.15,t[n+2]=.05),i[r]=15+Math.random()*40}const s=new _e;s.setAttribute("position",new Q(e,3)),s.setAttribute("color",new Q(t,3)),s.setAttribute("size",new Q(i,1));const o=new B({vertexShader:`
            attribute float size;
            varying vec3 vColor;
            void main() {
                vColor = color;
                vec4 mv = modelViewMatrix * vec4(position, 1.0);
                gl_Position = projectionMatrix * mv;
                gl_PointSize = size * (200.0 / max(1.0, -mv.z));
                gl_PointSize = clamp(gl_PointSize, 2.0, 120.0);
            }
        `,fragmentShader:`
            varying vec3 vColor;
            void main() {
                float d = length(gl_PointCoord - 0.5);
                float alpha = smoothstep(0.5, 0.0, d) * 0.07;
                gl_FragColor = vec4(vColor, alpha);
            }
        `,transparent:!0,depthWrite:!1,blending:Be,vertexColors:!0});ye=new ze(s,o),be.add(ye)}const b=new jt(U,U,A);(L||pt)&&b.setDataType(te);const we=b.createTexture(),Se=b.createTexture();function Ve(){const a=we.image.data,e=Se.image.data;for(let t=0;t<Ue;t++){const i=t*4,s=Math.pow(Math.random(),.5)*2,o=Math.random()*Math.PI*2,r=Math.acos(2*Math.random()-1);a[i+0]=s*Math.sin(r)*Math.cos(o),a[i+1]=s*Math.sin(r)*Math.sin(o),a[i+2]=s*Math.cos(r),a[i+3]=0,e[i+0]=(Math.random()-.5)*.5,e[i+1]=(Math.random()-.5)*.5,e[i+2]=(Math.random()-.5)*.5,e[i+3]=.5+Math.random()*1.5}}Ve();const N=b.addVariable("texturePosition",Ti,we),H=b.addVariable("textureVelocity",_i,Se);b.setVariableDependencies(N,[N,H]);b.setVariableDependencies(H,[N,H]);const F=N.material.uniforms;F.uDeltaTime={value:0};F.uPhase={value:0};F.uTime={value:0};F.uTimeDilation={value:1};F.uBlackHoleStrength={value:0};F.uNumBlackHoles={value:0};F.uBlackHoleSeed={value:0};const h=H.material.uniforms;h.uTime={value:0};h.uDeltaTime={value:0};h.uExpansionRate={value:0};h.uTemperature={value:1e12};h.uGravityStrength={value:0};h.uGyro={value:new y};h.uAudioLevel={value:0};h.uAudioBass={value:0};h.uPhase={value:0};h.uMouseWorldPos={value:new y};h.uMouseStrength={value:0};h.uMouseActive={value:0};h.uGalaxySeed={value:0};h.uNumGalaxies={value:8};h.uSupernovaIntensity={value:0};h.uStarFormationRate={value:0};h.uQuantumJitter={value:0};h.uBlackHoleStrength={value:0};h.uNumBlackHoles={value:0};h.uBlackHoleSeed={value:0};h.uQuantumBridgeStrength={value:0};h.uConglomerationStrength={value:0};h.uCollisionIntensity={value:0};h.uFlowTexture={value:null};h.uARActive={value:0};h.uARSurfaceForce={value:0};h.uARFlowForce={value:0};h.uARLuminance={value:0};N.wrapS=xe;N.wrapT=xe;H.wrapS=xe;H.wrapT=xe;const st=b.init();st&&console.error("GPUComputationRenderer:",st);const ft=new _e,pe=new Float32Array(Ue*3);for(let a=0;a<Ue;a++)pe[a*3+0]=(a%U+.5)/U,pe[a*3+1]=(Math.floor(a/U)+.5)/U,pe[a*3+2]=0;ft.setAttribute("position",new Q(pe,3));const w=new B({vertexShader:xi,fragmentShader:bi,uniforms:{uPositionTexture:{value:null},uVelocityTexture:{value:null},uPixelRatio:{value:A.getPixelRatio()},uPointSize:{value:Ge?2.5:L?1.8:2},uTime:{value:0},uTemperature:{value:1e12},uPhase:{value:0},uSupernovaIntensity:{value:0},uStarFormationRate:{value:0},uHyperspaceWarp:{value:0},uBlackHoleStrength:{value:0},uCollisionIntensity:{value:0},uQuantumBridgeStrength:{value:0},uConglomerationStrength:{value:0},uARActive:{value:0},uARSceneLuminance:{value:0},uARSurfaceCoverage:{value:0}},transparent:!0,blending:Be,depthWrite:!1,depthTest:!0}),Di=new ze(ft,w);be.add(Di);const ae=new Wt(A);ae.addPass(new Xt(be,_));const Te=L?.35:.75,V=new K(new p(window.innerWidth*Te,window.innerHeight*Te),1.4,.6,.05);ae.addPass(V);const z=Ge?null:vi();z&&ae.addPass(z);const u=new ci,qe=new mi,S=new ui(qe),Ee=new di(_,q),Oe=new pi(_,q),W=new gi,O=new yi(A);let ie=0,me=0,ot=60,se=L?1:2,$=0;function Mi(a){ie++,me+=a,me>=.5&&(ot=Math.round(ie/me),ie=0,me=0,ot<24&&se>0?($++,$>=3&&(se--,$=0,Ci())):$=Math.max(0,$-1))}function Ci(){se===0?(A.setPixelRatio(1),V.strength=.5,V.radius=.3,z&&(z.enabled=!1)):se===1&&(A.setPixelRatio(Math.min(window.devicePixelRatio,1.5)),V.strength=1,V.radius=.5,z&&(z.enabled=!0)),w.uniforms.uPixelRatio.value=A.getPixelRatio(),gt()}const Ai=document.getElementById("overlay");function Ri(){S.init(),qe.init(),u.start(),Ai.classList.add("hidden"),S.pulseHaptic(50),yt.start(),j&&W.supported&&(j.style.display="block"),Z&&(Z.style.display="block")}function Pi(){u.restart(),Ve(),b.renderTexture(we,b.getCurrentRenderTarget(N)),b.renderTexture(Se,b.getCurrentRenderTarget(H)),E=0,_.position.set(0,0,30),S.pulseHaptic(50)}setTimeout(()=>{u.started||Ri()},800);const j=document.getElementById("ar-toggle");j&&j.addEventListener("click",async()=>{const a=await W.toggle(A);j.classList.toggle("active",a),a||O.reset()});const Z=document.getElementById("fly-toggle");let fe=!1;function vt(){fe=!fe,fe?(Oe.enable(),I.enabled=!1,Z?.classList.add("active")):(Oe.disable(),I.enabled=!0,I.autoRotate=!S.hasGyro,Z?.classList.remove("active"))}Z&&Z.addEventListener("click",vt);window.addEventListener("keydown",a=>{(a.key==="r"||a.key==="R")&&u.started&&Pi(),(a.key==="f"||a.key==="F")&&Ei(),(a.key==="c"||a.key==="C")&&u.started&&j&&j.click(),(a.key==="v"||a.key==="V")&&u.started&&vt()});let at;function gt(){const a=window.innerWidth,e=window.innerHeight;_.aspect=a/e,_.updateProjectionMatrix(),A.setSize(a,e),ae.setSize(a,e),V.resolution.set(a*Te,e*Te),w.uniforms.uPixelRatio.value=A.getPixelRatio()}window.addEventListener("resize",()=>{clearTimeout(at),at=setTimeout(gt,100)});function Ei(){document.fullscreenElement?document.exitFullscreen?.()||document.webkitExitFullscreen?.():q.requestFullscreen?.()||q.webkitRequestFullscreen?.()}const yt=new lt(!1);let E=0;function rt(a,e,t){const i=Math.max(0,Math.min(1,(a-e)/(t-e)));return i*i*(3-2*i)}function Tt(){requestAnimationFrame(Tt);const a=Math.min(yt.getDelta(),.05),e=Math.min(1,E*.03),t=Math.sin(E*.4)*Math.cos(E*.8)*Math.sin(E*.25),i=.08+e*.62+t*.1*(1-e*.5),s=a*Math.max(.03,i);E+=s,Mi(a),u.update(s),S.update(a),F.uDeltaTime.value=s,F.uPhase.value=u.phase,F.uTime.value=E,F.uTimeDilation.value=Math.max(0,i),h.uTime.value=E,h.uDeltaTime.value=s,h.uExpansionRate.value=u.expansionRate,h.uTemperature.value=u.temperature,h.uGravityStrength.value=u.gravityStrength,h.uPhase.value=u.phase,h.uGalaxySeed.value=u.galaxySeed,h.uNumGalaxies.value=L?Math.min(u.numGalaxies,6):Math.min(u.numGalaxies,8),h.uSupernovaIntensity.value=u.supernovaIntensity,h.uStarFormationRate.value=u.starFormationRate,h.uQuantumJitter.value=u.quantumJitter,h.uBlackHoleStrength.value=u.blackHoleStrength,h.uNumBlackHoles.value=L?Math.min(u.numBlackHoles,4):Math.min(u.numBlackHoles,8),h.uBlackHoleSeed.value=u.blackHoleSeed,F.uBlackHoleStrength.value=u.blackHoleStrength,F.uNumBlackHoles.value=L?Math.min(u.numBlackHoles,4):Math.min(u.numBlackHoles,8),F.uBlackHoleSeed.value=u.blackHoleSeed,h.uQuantumBridgeStrength.value=u.quantumBridgeStrength,h.uConglomerationStrength.value=u.conglomerationStrength,h.uCollisionIntensity.value=u.collisionIntensity,h.uGyro.value.set(S.gyro.x,S.gyro.y,S.gyro.z),h.uAudioLevel.value=S.audioLevel,h.uAudioBass.value=S.audioBass,h.uMouseWorldPos.value.copy(Ee.worldPos),h.uMouseStrength.value=Ee.strength,h.uMouseActive.value=Ee.active?1:0,W.active&&W.video&&(ie&1)===0&&O.update(W.video);const o=W.active&&O.active?1:0;if(h.uARActive.value=o,h.uFlowTexture.value=O.flowTexture,h.uARSurfaceForce.value=Math.max(.5,O.surfaceCoverage*3),h.uARFlowForce.value=Math.max(.3,O.sceneMotion*4),h.uARLuminance.value=O.sceneLuminance*1.5,fe)Oe.update(s);else if(S.hasGyro){I.autoRotate=!1;const d=.04;_.position.x+=(S.gyro.x*100-_.position.x)*d,_.position.y+=(S.gyro.y*80-_.position.y)*d;const c=S.gyro.z*Math.PI*.15;_.rotation.z+=(c-_.rotation.z)*.02;const l=it[u.phase]||400;_.position.z+=(l-_.position.z)*.02,_.lookAt(0,0,0),S.hasMotion&&S.shakeIntensity>2&&(h.uExpansionRate.value+=S.shakeIntensity*.5)}else{const d=it[u.phase]||400,c=u.phase===1?.03:.008;_.position.z+=(d-_.position.z)*c,u.phase>=6?I.autoRotateSpeed=.08:u.phase>=3?I.autoRotateSpeed=.35:I.autoRotateSpeed=.15}u.needsReseed&&(Ve(),b.renderTexture(we,b.getCurrentRenderTarget(N)),b.renderTexture(Se,b.getCurrentRenderTarget(H)),E=0,_.position.set(0,0,30),u.needsReseed=!1),u.started&&(se>0||(ie&1)===0)&&b.compute();const r=b.getCurrentRenderTarget(N).texture,n=b.getCurrentRenderTarget(H).texture;w.uniforms.uPositionTexture.value=r,w.uniforms.uVelocityTexture.value=n,w.uniforms.uTime.value=E,w.uniforms.uTemperature.value=u.temperature,w.uniforms.uPhase.value=u.phase,w.uniforms.uSupernovaIntensity.value=u.supernovaIntensity,w.uniforms.uStarFormationRate.value=u.starFormationRate,w.uniforms.uBlackHoleStrength.value=u.blackHoleStrength,w.uniforms.uCollisionIntensity.value=u.collisionIntensity,w.uniforms.uQuantumBridgeStrength.value=u.quantumBridgeStrength,w.uniforms.uConglomerationStrength.value=u.conglomerationStrength;const T=rt(u.phase,0,2)*(1-rt(u.phase,6,7.5))*(.7+Math.sin(E*.5)*.3);w.uniforms.uHyperspaceWarp.value=T,w.uniforms.uARActive.value=o,w.uniforms.uARSceneLuminance.value=O.sceneLuminance,w.uniforms.uARSurfaceCoverage.value=O.surfaceCoverage,u.shouldPulseHaptic()&&S.pulseHaptic(12),qe.update(u.phase,u.temperature,u.time);const D=1+Math.min(u.temperature/1e10,2);V.strength+=(D-V.strength)*.04,z&&(z.uniforms.uTime.value=E,z.uniforms.uIntensity.value=u.phase<2?.08:.04),ye.rotation.y=E*.003,ye.rotation.x=Math.sin(E*.002)*.1,I.update(),ae.render()}Tt();
