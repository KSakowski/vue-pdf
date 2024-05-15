var Za = Object.defineProperty;
var da = (R, l, U) => l in R ? Za(R, l, { enumerable: !0, configurable: !0, writable: !0, value: U }) : R[l] = U;
var I = (R, l, U) => (da(R, typeof l != "symbol" ? l + "" : l, U), U), ZR = (R, l, U) => {
  if (!l.has(R))
    throw TypeError("Cannot " + U);
};
var Q = (R, l, U) => (ZR(R, l, "read from private field"), U ? U.call(R) : l.get(R)), a = (R, l, U) => {
  if (l.has(R))
    throw TypeError("Cannot add the same private member more than once");
  l instanceof WeakSet ? l.add(R) : l.set(R, U);
}, i = (R, l, U, Z) => (ZR(R, l, "write to private field"), Z ? Z.call(R, U) : l.set(R, U), U), ZU = (R, l, U, Z) => ({
  set _(d) {
    i(R, l, d, U);
  },
  get _() {
    return Q(R, l, Z);
  }
}), m = (R, l, U) => (ZR(R, l, "access private method"), U);
import { defineComponent as xt, ref as AZ, watch as FF, onMounted as jt, openBlock as GF, createElementBlock as Ot, toRaw as $0, computed as dR, createBlock as EN, mergeProps as FR, createCommentVNode as CN, createVNode as Fa, withDirectives as Wa, createElementVNode as Rs, renderSlot as Qa, vShow as Va, shallowRef as YV, isRef as ca } from "vue";
var lW = {};
lW.d = (R, l) => {
  for (var U in l)
    lW.o(l, U) && !lW.o(R, U) && Object.defineProperty(R, U, { enumerable: !0, get: l[U] });
};
lW.o = (R, l) => Object.prototype.hasOwnProperty.call(R, l);
var o = globalThis.pdfjsLib = {};
lW.d(o, {
  AbortException: () => (
    /* reexport */
    cF
  ),
  AnnotationEditorLayer: () => (
    /* reexport */
    q0
  ),
  AnnotationEditorParamsType: () => (
    /* reexport */
    D
  ),
  AnnotationEditorType: () => (
    /* reexport */
    O
  ),
  AnnotationEditorUIManager: () => (
    /* reexport */
    aZ
  ),
  AnnotationLayer: () => (
    /* reexport */
    th
  ),
  AnnotationMode: () => (
    /* reexport */
    YZ
  ),
  CMapCompressionType: () => (
    /* reexport */
    sR
  ),
  ColorPicker: () => (
    /* reexport */
    tc
  ),
  DOMSVGFactory: () => (
    /* reexport */
    JN
  ),
  DrawLayer: () => (
    /* reexport */
    Wc
  ),
  FeatureTest: () => (
    /* reexport */
    xl
  ),
  GlobalWorkerOptions: () => (
    /* reexport */
    nZ
  ),
  ImageKind: () => (
    /* reexport */
    LV
  ),
  InvalidPDFException: () => (
    /* reexport */
    ss
  ),
  MissingPDFException: () => (
    /* reexport */
    VF
  ),
  OPS: () => (
    /* reexport */
    WU
  ),
  Outliner: () => (
    /* reexport */
    fR
  ),
  PDFDataRangeTransport: () => (
    /* reexport */
    Fb
  ),
  PDFDateString: () => (
    /* reexport */
    is
  ),
  PDFWorker: () => (
    /* reexport */
    rV
  ),
  PasswordResponses: () => (
    /* reexport */
    sa
  ),
  PermissionFlag: () => (
    /* reexport */
    Na
  ),
  PixelsPerInch: () => (
    /* reexport */
    hU
  ),
  RenderingCancelledException: () => (
    /* reexport */
    GN
  ),
  UnexpectedResponseException: () => (
    /* reexport */
    Ht
  ),
  Util: () => (
    /* reexport */
    u
  ),
  VerbosityLevel: () => (
    /* reexport */
    rt
  ),
  XfaLayer: () => (
    /* reexport */
    Qb
  ),
  build: () => (
    /* reexport */
    rn
  ),
  createValidAbsoluteUrl: () => (
    /* reexport */
    ha
  ),
  fetchData: () => (
    /* reexport */
    qt
  ),
  getDocument: () => (
    /* reexport */
    kn
  ),
  getFilenameFromUrl: () => (
    /* reexport */
    Ba
  ),
  getPdfFilenameFromUrl: () => (
    /* reexport */
    ea
  ),
  getXfaPageViewport: () => (
    /* reexport */
    pa
  ),
  isDataScheme: () => (
    /* reexport */
    TN
  ),
  isPdfFile: () => (
    /* reexport */
    XN
  ),
  noContextMenu: () => (
    /* reexport */
    jl
  ),
  normalizeUnicode: () => (
    /* reexport */
    Ta
  ),
  renderTextLayer: () => (
    /* reexport */
    dn
  ),
  setLayerDimensions: () => (
    /* reexport */
    WF
  ),
  shadow: () => (
    /* reexport */
    K
  ),
  updateTextLayer: () => (
    /* reexport */
    Fn
  ),
  version: () => (
    /* reexport */
    On
  )
});
const yl = typeof process == "object" && process + "" == "[object process]" && !process.versions.nw && !(process.versions.electron && process.type && process.type !== "browser"), Ns = [1, 0, 0, 1, 0, 0], NR = [1e-3, 0, 0, 1e-3, 0, 0], ta = 1e7, WR = 1.35, UU = {
  ANY: 1,
  DISPLAY: 2,
  PRINT: 4,
  SAVE: 8,
  ANNOTATIONS_FORMS: 16,
  ANNOTATIONS_STORAGE: 32,
  ANNOTATIONS_DISABLE: 64,
  OPLIST: 256
}, YZ = {
  DISABLE: 0,
  ENABLE: 1,
  ENABLE_FORMS: 2,
  ENABLE_STORAGE: 3
}, Ra = "pdfjs_internal_editor_", O = {
  DISABLE: -1,
  NONE: 0,
  FREETEXT: 3,
  HIGHLIGHT: 9,
  STAMP: 13,
  INK: 15
}, D = {
  RESIZE: 1,
  CREATE: 2,
  FREETEXT_SIZE: 11,
  FREETEXT_COLOR: 12,
  FREETEXT_OPACITY: 13,
  INK_COLOR: 21,
  INK_THICKNESS: 22,
  INK_OPACITY: 23,
  HIGHLIGHT_COLOR: 31,
  HIGHLIGHT_DEFAULT_COLOR: 32,
  HIGHLIGHT_THICKNESS: 33,
  HIGHLIGHT_FREE: 34,
  HIGHLIGHT_SHOW_ALL: 35
}, Na = {
  PRINT: 4,
  MODIFY_CONTENTS: 8,
  COPY: 16,
  MODIFY_ANNOTATIONS: 32,
  FILL_INTERACTIVE_FORMS: 256,
  COPY_FOR_ACCESSIBILITY: 512,
  ASSEMBLE: 1024,
  PRINT_HIGH_QUALITY: 2048
}, Sl = {
  FILL: 0,
  STROKE: 1,
  FILL_STROKE: 2,
  INVISIBLE: 3,
  FILL_ADD_TO_PATH: 4,
  STROKE_ADD_TO_PATH: 5,
  FILL_STROKE_ADD_TO_PATH: 6,
  ADD_TO_PATH: 7,
  FILL_STROKE_MASK: 3,
  ADD_TO_PATH_FLAG: 4
}, LV = {
  GRAYSCALE_1BPP: 1,
  RGB_24BPP: 2,
  RGBA_32BPP: 3
}, Ql = {
  TEXT: 1,
  LINK: 2,
  FREETEXT: 3,
  LINE: 4,
  SQUARE: 5,
  CIRCLE: 6,
  POLYGON: 7,
  POLYLINE: 8,
  HIGHLIGHT: 9,
  UNDERLINE: 10,
  SQUIGGLY: 11,
  STRIKEOUT: 12,
  STAMP: 13,
  CARET: 14,
  INK: 15,
  POPUP: 16,
  FILEATTACHMENT: 17,
  SOUND: 18,
  MOVIE: 19,
  WIDGET: 20,
  SCREEN: 21,
  PRINTERMARK: 22,
  TRAPNET: 23,
  WATERMARK: 24,
  THREED: 25,
  REDACT: 26
}, z0 = {
  SOLID: 1,
  DASHED: 2,
  BEVELED: 3,
  INSET: 4,
  UNDERLINE: 5
}, rt = {
  ERRORS: 0,
  WARNINGS: 1,
  INFOS: 5
}, sR = {
  NONE: 0,
  BINARY: 1
}, WU = {
  dependency: 1,
  setLineWidth: 2,
  setLineCap: 3,
  setLineJoin: 4,
  setMiterLimit: 5,
  setDash: 6,
  setRenderingIntent: 7,
  setFlatness: 8,
  setGState: 9,
  save: 10,
  restore: 11,
  transform: 12,
  moveTo: 13,
  lineTo: 14,
  curveTo: 15,
  curveTo2: 16,
  curveTo3: 17,
  closePath: 18,
  rectangle: 19,
  stroke: 20,
  closeStroke: 21,
  fill: 22,
  eoFill: 23,
  fillStroke: 24,
  eoFillStroke: 25,
  closeFillStroke: 26,
  closeEOFillStroke: 27,
  endPath: 28,
  clip: 29,
  eoClip: 30,
  beginText: 31,
  endText: 32,
  setCharSpacing: 33,
  setWordSpacing: 34,
  setHScale: 35,
  setLeading: 36,
  setFont: 37,
  setTextRenderingMode: 38,
  setTextRise: 39,
  moveText: 40,
  setLeadingMoveText: 41,
  setTextMatrix: 42,
  nextLine: 43,
  showText: 44,
  showSpacedText: 45,
  nextLineShowText: 46,
  nextLineSetSpacingShowText: 47,
  setCharWidth: 48,
  setCharWidthAndBounds: 49,
  setStrokeColorSpace: 50,
  setFillColorSpace: 51,
  setStrokeColor: 52,
  setStrokeColorN: 53,
  setFillColor: 54,
  setFillColorN: 55,
  setStrokeGray: 56,
  setFillGray: 57,
  setStrokeRGBColor: 58,
  setFillRGBColor: 59,
  setStrokeCMYKColor: 60,
  setFillCMYKColor: 61,
  shadingFill: 62,
  beginInlineImage: 63,
  beginImageData: 64,
  endInlineImage: 65,
  paintXObject: 66,
  markPoint: 67,
  markPointProps: 68,
  beginMarkedContent: 69,
  beginMarkedContentProps: 70,
  endMarkedContent: 71,
  beginCompat: 72,
  endCompat: 73,
  paintFormXObjectBegin: 74,
  paintFormXObjectEnd: 75,
  beginGroup: 76,
  endGroup: 77,
  beginAnnotation: 80,
  endAnnotation: 81,
  paintImageMaskXObject: 83,
  paintImageMaskXObjectGroup: 84,
  paintImageXObject: 85,
  paintInlineImageXObject: 86,
  paintInlineImageXObjectGroup: 87,
  paintImageXObjectRepeat: 88,
  paintImageMaskXObjectRepeat: 89,
  paintSolidColorImageMask: 90,
  constructPath: 91
}, sa = {
  NEED_PASSWORD: 1,
  INCORRECT_PASSWORD: 2
};
let Kt = rt.WARNINGS;
function ba(R) {
  Number.isInteger(R) && (Kt = R);
}
function aa() {
  return Kt;
}
function gt(R) {
  Kt >= rt.INFOS && console.log(`Info: ${R}`);
}
function w(R) {
  Kt >= rt.WARNINGS && console.log(`Warning: ${R}`);
}
function f(R) {
  throw new Error(R);
}
function sl(R, l) {
  R || f(l);
}
function na(R) {
  switch (R == null ? void 0 : R.protocol) {
    case "http:":
    case "https:":
    case "ftp:":
    case "mailto:":
    case "tel:":
      return !0;
    default:
      return !1;
  }
}
function ha(R, l = null, U = null) {
  if (!R)
    return null;
  try {
    if (U && typeof R == "string") {
      if (U.addDefaultProtocol && R.startsWith("www.")) {
        const d = R.match(/\./g);
        (d == null ? void 0 : d.length) >= 2 && (R = `http://${R}`);
      }
      if (U.tryConvertEncoding)
        try {
          R = Ga(R);
        } catch {
        }
    }
    const Z = l ? new URL(R, l) : new URL(R);
    if (na(Z))
      return Z;
  } catch {
  }
  return null;
}
function K(R, l, U, Z = !1) {
  return Object.defineProperty(R, l, {
    value: U,
    enumerable: !Z,
    configurable: !0,
    writable: !1
  }), U;
}
const fZ = function() {
  function l(U, Z) {
    this.constructor === l && f("Cannot initialize BaseException."), this.message = U, this.name = Z;
  }
  return l.prototype = new Error(), l.constructor = l, l;
}();
class bR extends fZ {
  constructor(l, U) {
    super(l, "PasswordException"), this.code = U;
  }
}
class aR extends fZ {
  constructor(l, U) {
    super(l, "UnknownErrorException"), this.details = U;
  }
}
class ss extends fZ {
  constructor(l) {
    super(l, "InvalidPDFException");
  }
}
class VF extends fZ {
  constructor(l) {
    super(l, "MissingPDFException");
  }
}
class Ht extends fZ {
  constructor(l, U) {
    super(l, "UnexpectedResponseException"), this.status = U;
  }
}
class ma extends fZ {
  constructor(l) {
    super(l, "FormatError");
  }
}
class cF extends fZ {
  constructor(l) {
    super(l, "AbortException");
  }
}
function bs(R) {
  (typeof R != "object" || (R == null ? void 0 : R.length) === void 0) && f("Invalid argument for bytesToString");
  const l = R.length, U = 8192;
  if (l < U)
    return String.fromCharCode.apply(null, R);
  const Z = [];
  for (let d = 0; d < l; d += U) {
    const F = Math.min(d + U, l), W = R.subarray(d, F);
    Z.push(String.fromCharCode.apply(null, W));
  }
  return Z.join("");
}
function vt(R) {
  typeof R != "string" && f("Invalid argument for stringToBytes");
  const l = R.length, U = new Uint8Array(l);
  for (let Z = 0; Z < l; ++Z)
    U[Z] = R.charCodeAt(Z) & 255;
  return U;
}
function ia(R) {
  return String.fromCharCode(R >> 24 & 255, R >> 16 & 255, R >> 8 & 255, R & 255);
}
function iN(R) {
  const l = /* @__PURE__ */ Object.create(null);
  for (const [U, Z] of R)
    l[U] = Z;
  return l;
}
function Ma() {
  const R = new Uint8Array(4);
  return R[0] = 1, new Uint32Array(R.buffer, 0, 1)[0] === 1;
}
function Ja() {
  try {
    return new Function(""), !0;
  } catch {
    return !1;
  }
}
class xl {
  static get isLittleEndian() {
    return K(this, "isLittleEndian", Ma());
  }
  static get isEvalSupported() {
    return K(this, "isEvalSupported", Ja());
  }
  static get isOffscreenCanvasSupported() {
    return K(this, "isOffscreenCanvasSupported", typeof OffscreenCanvas < "u");
  }
  static get platform() {
    return typeof navigator < "u" && typeof (navigator == null ? void 0 : navigator.platform) == "string" ? K(this, "platform", {
      isMac: navigator.platform.includes("Mac")
    }) : K(this, "platform", {
      isMac: !1
    });
  }
  static get isCSSRoundSupported() {
    var l, U;
    return K(this, "isCSSRoundSupported", (U = (l = globalThis.CSS) == null ? void 0 : l.supports) == null ? void 0 : U.call(l, "width: round(1.5px, 1px)"));
  }
}
const QR = Array.from(Array(256).keys(), (R) => R.toString(16).padStart(2, "0"));
var XF, zV, FW, nR;
class u {
  static makeHexColor(l, U, Z) {
    return `#${QR[l]}${QR[U]}${QR[Z]}`;
  }
  static scaleMinMax(l, U) {
    let Z;
    l[0] ? (l[0] < 0 && (Z = U[0], U[0] = U[2], U[2] = Z), U[0] *= l[0], U[2] *= l[0], l[3] < 0 && (Z = U[1], U[1] = U[3], U[3] = Z), U[1] *= l[3], U[3] *= l[3]) : (Z = U[0], U[0] = U[1], U[1] = Z, Z = U[2], U[2] = U[3], U[3] = Z, l[1] < 0 && (Z = U[1], U[1] = U[3], U[3] = Z), U[1] *= l[1], U[3] *= l[1], l[2] < 0 && (Z = U[0], U[0] = U[2], U[2] = Z), U[0] *= l[2], U[2] *= l[2]), U[0] += l[4], U[1] += l[5], U[2] += l[4], U[3] += l[5];
  }
  static transform(l, U) {
    return [l[0] * U[0] + l[2] * U[1], l[1] * U[0] + l[3] * U[1], l[0] * U[2] + l[2] * U[3], l[1] * U[2] + l[3] * U[3], l[0] * U[4] + l[2] * U[5] + l[4], l[1] * U[4] + l[3] * U[5] + l[5]];
  }
  static applyTransform(l, U) {
    const Z = l[0] * U[0] + l[1] * U[2] + U[4], d = l[0] * U[1] + l[1] * U[3] + U[5];
    return [Z, d];
  }
  static applyInverseTransform(l, U) {
    const Z = U[0] * U[3] - U[1] * U[2], d = (l[0] * U[3] - l[1] * U[2] + U[2] * U[5] - U[4] * U[3]) / Z, F = (-l[0] * U[1] + l[1] * U[0] + U[4] * U[1] - U[5] * U[0]) / Z;
    return [d, F];
  }
  static getAxialAlignedBoundingBox(l, U) {
    const Z = this.applyTransform(l, U), d = this.applyTransform(l.slice(2, 4), U), F = this.applyTransform([l[0], l[3]], U), W = this.applyTransform([l[2], l[1]], U);
    return [Math.min(Z[0], d[0], F[0], W[0]), Math.min(Z[1], d[1], F[1], W[1]), Math.max(Z[0], d[0], F[0], W[0]), Math.max(Z[1], d[1], F[1], W[1])];
  }
  static inverseTransform(l) {
    const U = l[0] * l[3] - l[1] * l[2];
    return [l[3] / U, -l[1] / U, -l[2] / U, l[0] / U, (l[2] * l[5] - l[4] * l[3]) / U, (l[4] * l[1] - l[5] * l[0]) / U];
  }
  static singularValueDecompose2dScale(l) {
    const U = [l[0], l[2], l[1], l[3]], Z = l[0] * U[0] + l[1] * U[2], d = l[0] * U[1] + l[1] * U[3], F = l[2] * U[0] + l[3] * U[2], W = l[2] * U[1] + l[3] * U[3], V = (Z + W) / 2, c = Math.sqrt((Z + W) ** 2 - 4 * (Z * W - F * d)) / 2, t = V + c || 1, N = V - c || 1;
    return [Math.sqrt(t), Math.sqrt(N)];
  }
  static normalizeRect(l) {
    const U = l.slice(0);
    return l[0] > l[2] && (U[0] = l[2], U[2] = l[0]), l[1] > l[3] && (U[1] = l[3], U[3] = l[1]), U;
  }
  static intersect(l, U) {
    const Z = Math.max(Math.min(l[0], l[2]), Math.min(U[0], U[2])), d = Math.min(Math.max(l[0], l[2]), Math.max(U[0], U[2]));
    if (Z > d)
      return null;
    const F = Math.max(Math.min(l[1], l[3]), Math.min(U[1], U[3])), W = Math.min(Math.max(l[1], l[3]), Math.max(U[1], U[3]));
    return F > W ? null : [Z, F, d, W];
  }
  static bezierBoundingBox(l, U, Z, d, F, W, V, c, t) {
    return t ? (t[0] = Math.min(t[0], l, V), t[1] = Math.min(t[1], U, c), t[2] = Math.max(t[2], l, V), t[3] = Math.max(t[3], U, c)) : t = [Math.min(l, V), Math.min(U, c), Math.max(l, V), Math.max(U, c)], m(this, FW, nR).call(this, l, Z, F, V, U, d, W, c, 3 * (-l + 3 * (Z - F) + V), 6 * (l - 2 * Z + F), 3 * (Z - l), t), m(this, FW, nR).call(this, l, Z, F, V, U, d, W, c, 3 * (-U + 3 * (d - W) + c), 6 * (U - 2 * d + W), 3 * (d - U), t), t;
  }
}
XF = new WeakSet(), zV = function(l, U, Z, d, F, W, V, c, t, N) {
  if (t <= 0 || t >= 1)
    return;
  const s = 1 - t, b = t * t, n = b * t, h = s * (s * (s * l + 3 * t * U) + 3 * b * Z) + n * d, M = s * (s * (s * F + 3 * t * W) + 3 * b * V) + n * c;
  N[0] = Math.min(N[0], h), N[1] = Math.min(N[1], M), N[2] = Math.max(N[2], h), N[3] = Math.max(N[3], M);
}, FW = new WeakSet(), nR = function(l, U, Z, d, F, W, V, c, t, N, s, b) {
  if (Math.abs(t) < 1e-12) {
    Math.abs(N) >= 1e-12 && m(this, XF, zV).call(this, l, U, Z, d, F, W, V, c, -s / N, b);
    return;
  }
  const n = N ** 2 - 4 * s * t;
  if (n < 0)
    return;
  const h = Math.sqrt(n), M = 2 * t;
  m(this, XF, zV).call(this, l, U, Z, d, F, W, V, c, (-N + h) / M, b), m(this, XF, zV).call(this, l, U, Z, d, F, W, V, c, (-N - h) / M, b);
}, a(u, XF), a(u, FW);
function Ga(R) {
  return decodeURIComponent(escape(R));
}
let VR = null, wN = null;
function Ta(R) {
  return VR || (VR = /([\u00a0\u00b5\u037e\u0eb3\u2000-\u200a\u202f\u2126\ufb00-\ufb04\ufb06\ufb20-\ufb36\ufb38-\ufb3c\ufb3e\ufb40-\ufb41\ufb43-\ufb44\ufb46-\ufba1\ufba4-\ufba9\ufbae-\ufbb1\ufbd3-\ufbdc\ufbde-\ufbe7\ufbea-\ufbf8\ufbfc-\ufbfd\ufc00-\ufc5d\ufc64-\ufcf1\ufcf5-\ufd3d\ufd88\ufdf4\ufdfa-\ufdfb\ufe71\ufe77\ufe79\ufe7b\ufe7d]+)|(\ufb05+)/gu, wN = /* @__PURE__ */ new Map([["ﬅ", "ſt"]])), R.replaceAll(VR, (l, U, Z) => U ? U.normalize("NFKC") : wN.get(Z));
}
function Xa() {
  if (typeof crypto < "u" && typeof (crypto == null ? void 0 : crypto.randomUUID) == "function")
    return crypto.randomUUID();
  const R = new Uint8Array(32);
  if (typeof crypto < "u" && typeof (crypto == null ? void 0 : crypto.getRandomValues) == "function")
    crypto.getRandomValues(R);
  else
    for (let l = 0; l < 32; l++)
      R[l] = Math.floor(Math.random() * 255);
  return bs(R);
}
const as = "pdfjs_internal_id_", CU = {
  BEZIER_CURVE_TO: 0,
  MOVE_TO: 1,
  LINE_TO: 2,
  QUADRATIC_CURVE_TO: 3,
  RESTORE: 4,
  SAVE: 5,
  SCALE: 6,
  TRANSFORM: 7,
  TRANSLATE: 8
};
class Pt {
  constructor() {
    this.constructor === Pt && f("Cannot initialize BaseFilterFactory.");
  }
  addFilter(l) {
    return "none";
  }
  addHCMFilter(l, U) {
    return "none";
  }
  addAlphaFilter(l) {
    return "none";
  }
  addLuminosityFilter(l) {
    return "none";
  }
  addHighlightHCMFilter(l, U, Z, d, F) {
    return "none";
  }
  destroy(l = !1) {
  }
}
class At {
  constructor() {
    this.constructor === At && f("Cannot initialize BaseCanvasFactory.");
  }
  create(l, U) {
    if (l <= 0 || U <= 0)
      throw new Error("Invalid canvas size");
    const Z = this._createCanvas(l, U);
    return {
      canvas: Z,
      context: Z.getContext("2d")
    };
  }
  reset(l, U, Z) {
    if (!l.canvas)
      throw new Error("Canvas is not specified");
    if (U <= 0 || Z <= 0)
      throw new Error("Invalid canvas size");
    l.canvas.width = U, l.canvas.height = Z;
  }
  destroy(l) {
    if (!l.canvas)
      throw new Error("Canvas is not specified");
    l.canvas.width = 0, l.canvas.height = 0, l.canvas = null, l.context = null;
  }
  _createCanvas(l, U) {
    f("Abstract method `_createCanvas` called.");
  }
}
class ft {
  constructor({
    baseUrl: l = null,
    isCompressed: U = !0
  }) {
    this.constructor === ft && f("Cannot initialize BaseCMapReaderFactory."), this.baseUrl = l, this.isCompressed = U;
  }
  async fetch({
    name: l
  }) {
    if (!this.baseUrl)
      throw new Error('The CMap "baseUrl" parameter must be specified, ensure that the "cMapUrl" and "cMapPacked" API parameters are provided.');
    if (!l)
      throw new Error("CMap name must be specified.");
    const U = this.baseUrl + l + (this.isCompressed ? ".bcmap" : ""), Z = this.isCompressed ? sR.BINARY : sR.NONE;
    return this._fetchData(U, Z).catch((d) => {
      throw new Error(`Unable to load ${this.isCompressed ? "binary " : ""}CMap at: ${U}`);
    });
  }
  _fetchData(l, U) {
    f("Abstract method `_fetchData` called.");
  }
}
class _t {
  constructor({
    baseUrl: l = null
  }) {
    this.constructor === _t && f("Cannot initialize BaseStandardFontDataFactory."), this.baseUrl = l;
  }
  async fetch({
    filename: l
  }) {
    if (!this.baseUrl)
      throw new Error('The standard font "baseUrl" parameter must be specified, ensure that the "standardFontDataUrl" API parameter is provided.');
    if (!l)
      throw new Error("Font filename must be specified.");
    const U = `${this.baseUrl}${l}`;
    return this._fetchData(U).catch((Z) => {
      throw new Error(`Unable to load font data at: ${U}`);
    });
  }
  _fetchData(l) {
    f("Abstract method `_fetchData` called.");
  }
}
class MN {
  constructor() {
    this.constructor === MN && f("Cannot initialize BaseSVGFactory.");
  }
  create(l, U, Z = !1) {
    if (l <= 0 || U <= 0)
      throw new Error("Invalid SVG dimensions");
    const d = this._createSVG("svg:svg");
    return d.setAttribute("version", "1.1"), Z || (d.setAttribute("width", `${l}px`), d.setAttribute("height", `${U}px`)), d.setAttribute("preserveAspectRatio", "none"), d.setAttribute("viewBox", `0 0 ${l} ${U}`), d;
  }
  createElement(l) {
    if (typeof l != "string")
      throw new Error("Invalid SVG element type");
    return this._createSVG(l);
  }
  _createSVG(l) {
    f("Abstract method `_createSVG` called.");
  }
}
const xU = "http://www.w3.org/2000/svg", Rc = class {
};
let hU = Rc;
I(hU, "CSS", 96), I(hU, "PDF", 72), I(hU, "PDF_TO_CSS_UNITS", Rc.CSS / Rc.PDF);
var Zd, iU, KU, Cl, Nc, dd, bl, Bl, SZ, bF, BZ, aF, YF, kV, sc, ns, WW, hR, eZ, nF, Fd, I0, Wd, E0, QW, mR, Qd, C0;
class Ya extends Pt {
  constructor({
    docId: U,
    ownerDocument: Z = globalThis.document
  } = {}) {
    super();
    a(this, bl);
    a(this, SZ);
    a(this, BZ);
    a(this, YF);
    a(this, sc);
    a(this, WW);
    a(this, eZ);
    a(this, Fd);
    a(this, Wd);
    a(this, QW);
    a(this, Qd);
    a(this, Zd, void 0);
    a(this, iU, void 0);
    a(this, KU, void 0);
    a(this, Cl, void 0);
    a(this, Nc, void 0);
    a(this, dd, 0);
    i(this, KU, U), i(this, Cl, Z);
  }
  addFilter(U) {
    if (!U)
      return "none";
    let Z = Q(this, bl, Bl).get(U);
    if (Z)
      return Z;
    const [d, F, W] = m(this, YF, kV).call(this, U), V = U.length === 1 ? d : `${d}${F}${W}`;
    if (Z = Q(this, bl, Bl).get(V), Z)
      return Q(this, bl, Bl).set(U, Z), Z;
    const c = `g_${Q(this, KU)}_transfer_map_${ZU(this, dd)._++}`, t = `url(#${c})`;
    Q(this, bl, Bl).set(U, t), Q(this, bl, Bl).set(V, t);
    const N = m(this, eZ, nF).call(this, c);
    return m(this, Wd, E0).call(this, d, F, W, N), t;
  }
  addHCMFilter(U, Z) {
    var h;
    const d = `${U}-${Z}`, F = "base";
    let W = Q(this, SZ, bF).get(F);
    if ((W == null ? void 0 : W.key) === d || (W ? ((h = W.filter) == null || h.remove(), W.key = d, W.url = "none", W.filter = null) : (W = {
      key: d,
      url: "none",
      filter: null
    }, Q(this, SZ, bF).set(F, W)), !U || !Z))
      return W.url;
    const V = m(this, Qd, C0).call(this, U);
    U = u.makeHexColor(...V);
    const c = m(this, Qd, C0).call(this, Z);
    if (Z = u.makeHexColor(...c), Q(this, BZ, aF).style.color = "", U === "#000000" && Z === "#ffffff" || U === Z)
      return W.url;
    const t = new Array(256);
    for (let M = 0; M <= 255; M++) {
      const G = M / 255;
      t[M] = G <= 0.03928 ? G / 12.92 : ((G + 0.055) / 1.055) ** 2.4;
    }
    const N = t.join(","), s = `g_${Q(this, KU)}_hcm_filter`, b = W.filter = m(this, eZ, nF).call(this, s);
    m(this, Wd, E0).call(this, N, N, N, b), m(this, WW, hR).call(this, b);
    const n = (M, G) => {
      const J = V[M] / 255, T = c[M] / 255, X = new Array(G + 1);
      for (let S = 0; S <= G; S++)
        X[S] = J + S / G * (T - J);
      return X.join(",");
    };
    return m(this, Wd, E0).call(this, n(0, 5), n(1, 5), n(2, 5), b), W.url = `url(#${s})`, W.url;
  }
  addAlphaFilter(U) {
    let Z = Q(this, bl, Bl).get(U);
    if (Z)
      return Z;
    const [d] = m(this, YF, kV).call(this, [U]), F = `alpha_${d}`;
    if (Z = Q(this, bl, Bl).get(F), Z)
      return Q(this, bl, Bl).set(U, Z), Z;
    const W = `g_${Q(this, KU)}_alpha_map_${ZU(this, dd)._++}`, V = `url(#${W})`;
    Q(this, bl, Bl).set(U, V), Q(this, bl, Bl).set(F, V);
    const c = m(this, eZ, nF).call(this, W);
    return m(this, QW, mR).call(this, d, c), V;
  }
  addLuminosityFilter(U) {
    let Z = Q(this, bl, Bl).get(U || "luminosity");
    if (Z)
      return Z;
    let d, F;
    if (U ? ([d] = m(this, YF, kV).call(this, [U]), F = `luminosity_${d}`) : F = "luminosity", Z = Q(this, bl, Bl).get(F), Z)
      return Q(this, bl, Bl).set(U, Z), Z;
    const W = `g_${Q(this, KU)}_luminosity_map_${ZU(this, dd)._++}`, V = `url(#${W})`;
    Q(this, bl, Bl).set(U, V), Q(this, bl, Bl).set(F, V);
    const c = m(this, eZ, nF).call(this, W);
    return m(this, sc, ns).call(this, c), U && m(this, QW, mR).call(this, d, c), V;
  }
  addHighlightHCMFilter(U, Z, d, F, W) {
    var T;
    const V = `${Z}-${d}-${F}-${W}`;
    let c = Q(this, SZ, bF).get(U);
    if ((c == null ? void 0 : c.key) === V || (c ? ((T = c.filter) == null || T.remove(), c.key = V, c.url = "none", c.filter = null) : (c = {
      key: V,
      url: "none",
      filter: null
    }, Q(this, SZ, bF).set(U, c)), !Z || !d))
      return c.url;
    const [t, N] = [Z, d].map(m(this, Qd, C0).bind(this));
    let s = Math.round(0.2126 * t[0] + 0.7152 * t[1] + 0.0722 * t[2]), b = Math.round(0.2126 * N[0] + 0.7152 * N[1] + 0.0722 * N[2]), [n, h] = [F, W].map(m(this, Qd, C0).bind(this));
    b < s && ([s, b, n, h] = [b, s, h, n]), Q(this, BZ, aF).style.color = "";
    const M = (X, S, e) => {
      const Y = new Array(256), B = (b - s) / e, p = X / 255, L = (S - X) / (255 * e);
      let E = 0;
      for (let y = 0; y <= e; y++) {
        const g = Math.round(s + y * B), x = p + y * L;
        for (let H = E; H <= g; H++)
          Y[H] = x;
        E = g + 1;
      }
      for (let y = E; y < 256; y++)
        Y[y] = Y[E - 1];
      return Y.join(",");
    }, G = `g_${Q(this, KU)}_hcm_${U}_filter`, J = c.filter = m(this, eZ, nF).call(this, G);
    return m(this, WW, hR).call(this, J), m(this, Wd, E0).call(this, M(n[0], h[0], 5), M(n[1], h[1], 5), M(n[2], h[2], 5), J), c.url = `url(#${G})`, c.url;
  }
  destroy(U = !1) {
    U && Q(this, SZ, bF).size !== 0 || (Q(this, iU) && (Q(this, iU).parentNode.parentNode.remove(), i(this, iU, null)), Q(this, Zd) && (Q(this, Zd).clear(), i(this, Zd, null)), i(this, dd, 0));
  }
}
Zd = new WeakMap(), iU = new WeakMap(), KU = new WeakMap(), Cl = new WeakMap(), Nc = new WeakMap(), dd = new WeakMap(), bl = new WeakSet(), Bl = function() {
  return Q(this, Zd) || i(this, Zd, /* @__PURE__ */ new Map());
}, SZ = new WeakSet(), bF = function() {
  return Q(this, Nc) || i(this, Nc, /* @__PURE__ */ new Map());
}, BZ = new WeakSet(), aF = function() {
  if (!Q(this, iU)) {
    const U = Q(this, Cl).createElement("div"), {
      style: Z
    } = U;
    Z.visibility = "hidden", Z.contain = "strict", Z.width = Z.height = 0, Z.position = "absolute", Z.top = Z.left = 0, Z.zIndex = -1;
    const d = Q(this, Cl).createElementNS(xU, "svg");
    d.setAttribute("width", 0), d.setAttribute("height", 0), i(this, iU, Q(this, Cl).createElementNS(xU, "defs")), U.append(d), d.append(Q(this, iU)), Q(this, Cl).body.append(U);
  }
  return Q(this, iU);
}, YF = new WeakSet(), kV = function(U) {
  if (U.length === 1) {
    const t = U[0], N = new Array(256);
    for (let b = 0; b < 256; b++)
      N[b] = t[b] / 255;
    const s = N.join(",");
    return [s, s, s];
  }
  const [Z, d, F] = U, W = new Array(256), V = new Array(256), c = new Array(256);
  for (let t = 0; t < 256; t++)
    W[t] = Z[t] / 255, V[t] = d[t] / 255, c[t] = F[t] / 255;
  return [W.join(","), V.join(","), c.join(",")];
}, sc = new WeakSet(), ns = function(U) {
  const Z = Q(this, Cl).createElementNS(xU, "feColorMatrix");
  Z.setAttribute("type", "matrix"), Z.setAttribute("values", "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0.59 0.11 0 0"), U.append(Z);
}, WW = new WeakSet(), hR = function(U) {
  const Z = Q(this, Cl).createElementNS(xU, "feColorMatrix");
  Z.setAttribute("type", "matrix"), Z.setAttribute("values", "0.2126 0.7152 0.0722 0 0 0.2126 0.7152 0.0722 0 0 0.2126 0.7152 0.0722 0 0 0 0 0 1 0"), U.append(Z);
}, eZ = new WeakSet(), nF = function(U) {
  const Z = Q(this, Cl).createElementNS(xU, "filter");
  return Z.setAttribute("color-interpolation-filters", "sRGB"), Z.setAttribute("id", U), Q(this, BZ, aF).append(Z), Z;
}, Fd = new WeakSet(), I0 = function(U, Z, d) {
  const F = Q(this, Cl).createElementNS(xU, Z);
  F.setAttribute("type", "discrete"), F.setAttribute("tableValues", d), U.append(F);
}, Wd = new WeakSet(), E0 = function(U, Z, d, F) {
  const W = Q(this, Cl).createElementNS(xU, "feComponentTransfer");
  F.append(W), m(this, Fd, I0).call(this, W, "feFuncR", U), m(this, Fd, I0).call(this, W, "feFuncG", Z), m(this, Fd, I0).call(this, W, "feFuncB", d);
}, QW = new WeakSet(), mR = function(U, Z) {
  const d = Q(this, Cl).createElementNS(xU, "feComponentTransfer");
  Z.append(d), m(this, Fd, I0).call(this, d, "feFuncA", U);
}, Qd = new WeakSet(), C0 = function(U) {
  return Q(this, BZ, aF).style.color = U, YN(getComputedStyle(Q(this, BZ, aF)).getPropertyValue("color"));
};
class Sa extends At {
  constructor({
    ownerDocument: l = globalThis.document
  } = {}) {
    super(), this._document = l;
  }
  _createCanvas(l, U) {
    const Z = this._document.createElement("canvas");
    return Z.width = l, Z.height = U, Z;
  }
}
async function qt(R, l = "text") {
  if (w0(R, document.baseURI)) {
    const U = await fetch(R);
    if (!U.ok)
      throw new Error(U.statusText);
    switch (l) {
      case "arraybuffer":
        return U.arrayBuffer();
      case "blob":
        return U.blob();
      case "json":
        return U.json();
    }
    return U.text();
  }
  return new Promise((U, Z) => {
    const d = new XMLHttpRequest();
    d.open("GET", R, !0), d.responseType = l, d.onreadystatechange = () => {
      if (d.readyState === XMLHttpRequest.DONE) {
        if (d.status === 200 || d.status === 0) {
          switch (l) {
            case "arraybuffer":
            case "blob":
            case "json":
              U(d.response);
              return;
          }
          U(d.responseText);
          return;
        }
        Z(new Error(d.statusText));
      }
    }, d.send(null);
  });
}
class hs extends ft {
  _fetchData(l, U) {
    return qt(l, this.isCompressed ? "arraybuffer" : "text").then((Z) => ({
      cMapData: Z instanceof ArrayBuffer ? new Uint8Array(Z) : vt(Z),
      compressionType: U
    }));
  }
}
class ms extends _t {
  _fetchData(l) {
    return qt(l, "arraybuffer").then((U) => new Uint8Array(U));
  }
}
class JN extends MN {
  _createSVG(l) {
    return document.createElementNS(xU, l);
  }
}
class MV {
  constructor({
    viewBox: l,
    scale: U,
    rotation: Z,
    offsetX: d = 0,
    offsetY: F = 0,
    dontFlip: W = !1
  }) {
    this.viewBox = l, this.scale = U, this.rotation = Z, this.offsetX = d, this.offsetY = F;
    const V = (l[2] + l[0]) / 2, c = (l[3] + l[1]) / 2;
    let t, N, s, b;
    switch (Z %= 360, Z < 0 && (Z += 360), Z) {
      case 180:
        t = -1, N = 0, s = 0, b = 1;
        break;
      case 90:
        t = 0, N = 1, s = 1, b = 0;
        break;
      case 270:
        t = 0, N = -1, s = -1, b = 0;
        break;
      case 0:
        t = 1, N = 0, s = 0, b = -1;
        break;
      default:
        throw new Error("PageViewport: Invalid rotation, must be a multiple of 90 degrees.");
    }
    W && (s = -s, b = -b);
    let n, h, M, G;
    t === 0 ? (n = Math.abs(c - l[1]) * U + d, h = Math.abs(V - l[0]) * U + F, M = (l[3] - l[1]) * U, G = (l[2] - l[0]) * U) : (n = Math.abs(V - l[0]) * U + d, h = Math.abs(c - l[1]) * U + F, M = (l[2] - l[0]) * U, G = (l[3] - l[1]) * U), this.transform = [t * U, N * U, s * U, b * U, n - t * U * V - s * U * c, h - N * U * V - b * U * c], this.width = M, this.height = G;
  }
  get rawDims() {
    const {
      viewBox: l
    } = this;
    return K(this, "rawDims", {
      pageWidth: l[2] - l[0],
      pageHeight: l[3] - l[1],
      pageX: l[0],
      pageY: l[1]
    });
  }
  clone({
    scale: l = this.scale,
    rotation: U = this.rotation,
    offsetX: Z = this.offsetX,
    offsetY: d = this.offsetY,
    dontFlip: F = !1
  } = {}) {
    return new MV({
      viewBox: this.viewBox.slice(),
      scale: l,
      rotation: U,
      offsetX: Z,
      offsetY: d,
      dontFlip: F
    });
  }
  convertToViewportPoint(l, U) {
    return u.applyTransform([l, U], this.transform);
  }
  convertToViewportRectangle(l) {
    const U = u.applyTransform([l[0], l[1]], this.transform), Z = u.applyTransform([l[2], l[3]], this.transform);
    return [U[0], U[1], Z[0], Z[1]];
  }
  convertToPdfPoint(l, U) {
    return u.applyInverseTransform([l, U], this.transform);
  }
}
class GN extends fZ {
  constructor(l, U = 0) {
    super(l, "RenderingCancelledException"), this.extraDelay = U;
  }
}
function TN(R) {
  const l = R.length;
  let U = 0;
  for (; U < l && R[U].trim() === ""; )
    U++;
  return R.substring(U, U + 5).toLowerCase() === "data:";
}
function XN(R) {
  return typeof R == "string" && /\.pdf$/i.test(R);
}
function Ba(R) {
  return [R] = R.split(/[#?]/, 1), R.substring(R.lastIndexOf("/") + 1);
}
function ea(R, l = "document.pdf") {
  if (typeof R != "string")
    return l;
  if (TN(R))
    return w('getPdfFilenameFromUrl: ignore "data:"-URL for performance reasons.'), l;
  const U = /^(?:(?:[^:]+:)?\/\/[^/]+)?([^?#]*)(\?[^#]*)?(#.*)?$/, Z = /[^/?#=]+\.pdf\b(?!.*\.pdf\b)/i, d = U.exec(R);
  let F = Z.exec(d[1]) || Z.exec(d[2]) || Z.exec(d[3]);
  if (F && (F = F[0], F.includes("%")))
    try {
      F = Z.exec(decodeURIComponent(F))[0];
    } catch {
    }
  return F || l;
}
class xN {
  constructor() {
    I(this, "started", /* @__PURE__ */ Object.create(null));
    I(this, "times", []);
  }
  time(l) {
    l in this.started && w(`Timer is already running for ${l}`), this.started[l] = Date.now();
  }
  timeEnd(l) {
    l in this.started || w(`Timer has not been started for ${l}`), this.times.push({
      name: l,
      start: this.started[l],
      end: Date.now()
    }), delete this.started[l];
  }
  toString() {
    const l = [];
    let U = 0;
    for (const {
      name: Z
    } of this.times)
      U = Math.max(Z.length, U);
    for (const {
      name: Z,
      start: d,
      end: F
    } of this.times)
      l.push(`${Z.padEnd(U)} ${F - d}ms
`);
    return l.join("");
  }
}
function w0(R, l) {
  try {
    const {
      protocol: U
    } = l ? new URL(R, l) : new URL(R);
    return U === "http:" || U === "https:";
  } catch {
    return !1;
  }
}
function jl(R) {
  R.preventDefault();
}
let jN;
class is {
  static toDateObject(l) {
    if (!l || typeof l != "string")
      return null;
    jN || (jN = new RegExp("^D:(\\d{4})(\\d{2})?(\\d{2})?(\\d{2})?(\\d{2})?(\\d{2})?([Z|+|-])?(\\d{2})?'?(\\d{2})?'?"));
    const U = jN.exec(l);
    if (!U)
      return null;
    const Z = parseInt(U[1], 10);
    let d = parseInt(U[2], 10);
    d = d >= 1 && d <= 12 ? d - 1 : 0;
    let F = parseInt(U[3], 10);
    F = F >= 1 && F <= 31 ? F : 1;
    let W = parseInt(U[4], 10);
    W = W >= 0 && W <= 23 ? W : 0;
    let V = parseInt(U[5], 10);
    V = V >= 0 && V <= 59 ? V : 0;
    let c = parseInt(U[6], 10);
    c = c >= 0 && c <= 59 ? c : 0;
    const t = U[7] || "Z";
    let N = parseInt(U[8], 10);
    N = N >= 0 && N <= 23 ? N : 0;
    let s = parseInt(U[9], 10) || 0;
    return s = s >= 0 && s <= 59 ? s : 0, t === "-" ? (W += N, V += s) : t === "+" && (W -= N, V -= s), new Date(Date.UTC(Z, d, F, W, V, c));
  }
}
function pa(R, {
  scale: l = 1,
  rotation: U = 0
}) {
  const {
    width: Z,
    height: d
  } = R.attributes.style, F = [0, 0, parseInt(Z), parseInt(d)];
  return new MV({
    viewBox: F,
    scale: l,
    rotation: U
  });
}
function YN(R) {
  if (R.startsWith("#")) {
    const l = parseInt(R.slice(1), 16);
    return [(l & 16711680) >> 16, (l & 65280) >> 8, l & 255];
  }
  return R.startsWith("rgb(") ? R.slice(4, -1).split(",").map((l) => parseInt(l)) : R.startsWith("rgba(") ? R.slice(5, -1).split(",").map((l) => parseInt(l)).slice(0, 3) : (w(`Not a valid color format: "${R}"`), [0, 0, 0]);
}
function ua(R) {
  const l = document.createElement("span");
  l.style.visibility = "hidden", document.body.append(l);
  for (const U of R.keys()) {
    l.style.color = U;
    const Z = window.getComputedStyle(l).color;
    R.set(U, YN(Z));
  }
  l.remove();
}
function _(R) {
  const {
    a: l,
    b: U,
    c: Z,
    d,
    e: F,
    f: W
  } = R.getTransform();
  return [l, U, Z, d, F, W];
}
function wU(R) {
  const {
    a: l,
    b: U,
    c: Z,
    d,
    e: F,
    f: W
  } = R.getTransform().invertSelf();
  return [l, U, Z, d, F, W];
}
function WF(R, l, U = !1, Z = !0) {
  if (l instanceof MV) {
    const {
      pageWidth: d,
      pageHeight: F
    } = l.rawDims, {
      style: W
    } = R, V = xl.isCSSRoundSupported, c = `var(--scale-factor) * ${d}px`, t = `var(--scale-factor) * ${F}px`, N = V ? `round(${c}, 1px)` : `calc(${c})`, s = V ? `round(${t}, 1px)` : `calc(${t})`;
    !U || l.rotation % 180 === 0 ? (W.width = N, W.height = s) : (W.width = s, W.height = N);
  }
  Z && R.setAttribute("data-main-rotation", l.rotation);
}
var Vd, cd, MU, td, bc, Ms, ac, Js, nc, Gs, SF, DV, hc, Ts, VW, iR;
const uN = class {
  constructor(l) {
    a(this, ac);
    a(this, nc);
    a(this, SF);
    a(this, hc);
    a(this, VW);
    a(this, Vd, null);
    a(this, cd, null);
    a(this, MU, void 0);
    a(this, td, null);
    i(this, MU, l);
  }
  render() {
    const l = i(this, Vd, document.createElement("div"));
    l.className = "editToolbar", l.setAttribute("role", "toolbar"), l.addEventListener("contextmenu", jl), l.addEventListener("pointerdown", m(uN, bc, Ms));
    const U = i(this, td, document.createElement("div"));
    U.className = "buttons", l.append(U);
    const Z = Q(this, MU).toolbarPosition;
    if (Z) {
      const {
        style: d
      } = l, F = Q(this, MU)._uiManager.direction === "ltr" ? 1 - Z[0] : Z[0];
      d.insetInlineEnd = `${100 * F}%`, d.top = `calc(${100 * Z[1]}% + var(--editor-toolbar-vert-offset))`;
    }
    return m(this, hc, Ts).call(this), l;
  }
  hide() {
    var l;
    Q(this, Vd).classList.add("hidden"), (l = Q(this, cd)) == null || l.hideDropdown();
  }
  show() {
    Q(this, Vd).classList.remove("hidden");
  }
  addAltTextButton(l) {
    m(this, SF, DV).call(this, l), Q(this, td).prepend(l, Q(this, VW, iR));
  }
  addColorPicker(l) {
    i(this, cd, l);
    const U = l.renderButton();
    m(this, SF, DV).call(this, U), Q(this, td).prepend(U, Q(this, VW, iR));
  }
  remove() {
    var l;
    Q(this, Vd).remove(), (l = Q(this, cd)) == null || l.destroy(), i(this, cd, null);
  }
};
let oV = uN;
Vd = new WeakMap(), cd = new WeakMap(), MU = new WeakMap(), td = new WeakMap(), bc = new WeakSet(), Ms = function(l) {
  l.stopPropagation();
}, ac = new WeakSet(), Js = function(l) {
  Q(this, MU)._focusEventsAllowed = !1, l.preventDefault(), l.stopPropagation();
}, nc = new WeakSet(), Gs = function(l) {
  Q(this, MU)._focusEventsAllowed = !0, l.preventDefault(), l.stopPropagation();
}, SF = new WeakSet(), DV = function(l) {
  l.addEventListener("focusin", m(this, ac, Js).bind(this), {
    capture: !0
  }), l.addEventListener("focusout", m(this, nc, Gs).bind(this), {
    capture: !0
  }), l.addEventListener("contextmenu", jl);
}, hc = new WeakSet(), Ts = function() {
  const l = document.createElement("button");
  l.className = "delete", l.tabIndex = 0, l.setAttribute("data-l10n-id", `pdfjs-editor-remove-${Q(this, MU).editorType}-button`), m(this, SF, DV).call(this, l), l.addEventListener("click", (U) => {
    Q(this, MU)._uiManager.delete();
  }), Q(this, td).append(l);
}, VW = new WeakSet(), iR = function() {
  const l = document.createElement("div");
  return l.className = "divider", l;
}, a(oV, bc);
var cW, Rd, tW, mc, Xs, ic, Ys, Mc, Ss;
class ya {
  constructor(l) {
    a(this, mc);
    a(this, ic);
    a(this, Mc);
    a(this, cW, null);
    a(this, Rd, null);
    a(this, tW, void 0);
    i(this, tW, l);
  }
  show(l, U, Z) {
    const [d, F] = m(this, ic, Ys).call(this, U, Z), {
      style: W
    } = Q(this, Rd) || i(this, Rd, m(this, mc, Xs).call(this));
    l.append(Q(this, Rd)), W.insetInlineEnd = `${100 * d}%`, W.top = `calc(${100 * F}% + var(--editor-toolbar-vert-offset))`;
  }
  hide() {
    Q(this, Rd).remove();
  }
}
cW = new WeakMap(), Rd = new WeakMap(), tW = new WeakMap(), mc = new WeakSet(), Xs = function() {
  const l = i(this, Rd, document.createElement("div"));
  l.className = "editToolbar", l.setAttribute("role", "toolbar"), l.addEventListener("contextmenu", jl);
  const U = i(this, cW, document.createElement("div"));
  return U.className = "buttons", l.append(U), m(this, Mc, Ss).call(this), l;
}, ic = new WeakSet(), Ys = function(l, U) {
  let Z = 0, d = 0;
  for (const F of l) {
    const W = F.y + F.height;
    if (W < Z)
      continue;
    const V = F.x + (U ? F.width : 0);
    if (W > Z) {
      d = V, Z = W;
      continue;
    }
    U ? V > d && (d = V) : V < d && (d = V);
  }
  return [U ? 1 - d : d, Z];
}, Mc = new WeakSet(), Ss = function() {
  const l = document.createElement("button");
  l.className = "highlightButton", l.tabIndex = 0, l.setAttribute("data-l10n-id", "pdfjs-highlight-floating-button1");
  const U = document.createElement("span");
  l.append(U), U.className = "visuallyHidden", U.setAttribute("data-l10n-id", "pdfjs-highlight-floating-button-label"), l.addEventListener("contextmenu", jl), l.addEventListener("click", () => {
    Q(this, tW).highlightSelection("floating_button");
  }), Q(this, cW).append(l);
};
function Vc(R, l, U) {
  for (const Z of U)
    l.addEventListener(Z, R[Z].bind(R));
}
function La(R) {
  return Math.round(Math.min(255, Math.max(1, 255 * R))).toString(16).padStart(2, "0");
}
var Jc;
class za {
  constructor() {
    a(this, Jc, 0);
  }
  get id() {
    return `${Ra}${ZU(this, Jc)._++}`;
  }
}
Jc = new WeakMap();
var RW, Gc, fl, NW, JR;
const yN = class {
  constructor() {
    a(this, NW);
    a(this, RW, Xa());
    a(this, Gc, 0);
    a(this, fl, null);
  }
  static get _isSVGFittingCanvas() {
    const l = 'data:image/svg+xml;charset=UTF-8,<svg viewBox="0 0 1 1" width="1" height="1" xmlns="http://www.w3.org/2000/svg"><rect width="1" height="1" style="fill:red;"/></svg>', Z = new OffscreenCanvas(1, 3).getContext("2d"), d = new Image();
    d.src = l;
    const F = d.decode().then(() => (Z.drawImage(d, 0, 0, 1, 1, 0, 0, 1, 3), new Uint32Array(Z.getImageData(0, 0, 1, 1).data.buffer)[0] === 0));
    return K(this, "_isSVGFittingCanvas", F);
  }
  async getFromFile(l) {
    const {
      lastModified: U,
      name: Z,
      size: d,
      type: F
    } = l;
    return m(this, NW, JR).call(this, `${U}_${Z}_${d}_${F}`, l);
  }
  async getFromUrl(l) {
    return m(this, NW, JR).call(this, l, l);
  }
  async getFromId(l) {
    Q(this, fl) || i(this, fl, /* @__PURE__ */ new Map());
    const U = Q(this, fl).get(l);
    return U ? U.bitmap ? (U.refCounter += 1, U) : U.file ? this.getFromFile(U.file) : this.getFromUrl(U.url) : null;
  }
  getSvgUrl(l) {
    const U = Q(this, fl).get(l);
    return U != null && U.isSvg ? U.svgUrl : null;
  }
  deleteId(l) {
    Q(this, fl) || i(this, fl, /* @__PURE__ */ new Map());
    const U = Q(this, fl).get(l);
    U && (U.refCounter -= 1, U.refCounter === 0 && (U.bitmap = null));
  }
  isValidId(l) {
    return l.startsWith(`image_${Q(this, RW)}_`);
  }
};
let MR = yN;
RW = new WeakMap(), Gc = new WeakMap(), fl = new WeakMap(), NW = new WeakSet(), JR = async function(l, U) {
  Q(this, fl) || i(this, fl, /* @__PURE__ */ new Map());
  let Z = Q(this, fl).get(l);
  if (Z === null)
    return null;
  if (Z != null && Z.bitmap)
    return Z.refCounter += 1, Z;
  try {
    Z || (Z = {
      bitmap: null,
      id: `image_${Q(this, RW)}_${ZU(this, Gc)._++}`,
      refCounter: 0,
      isSvg: !1
    });
    let d;
    if (typeof U == "string" ? (Z.url = U, d = await qt(U, "blob")) : d = Z.file = U, d.type === "image/svg+xml") {
      const F = yN._isSVGFittingCanvas, W = new FileReader(), V = new Image(), c = new Promise((t, N) => {
        V.onload = () => {
          Z.bitmap = V, Z.isSvg = !0, t();
        }, W.onload = async () => {
          const s = Z.svgUrl = W.result;
          V.src = await F ? `${s}#svgView(preserveAspectRatio(none))` : s;
        }, V.onerror = W.onerror = N;
      });
      W.readAsDataURL(d), await c;
    } else
      Z.bitmap = await createImageBitmap(d);
    Z.refCounter = 1;
  } catch (d) {
    console.error(d), Z = null;
  }
  return Q(this, fl).set(l, Z), Z && Q(this, fl).set(Z.id, Z), Z;
};
var al, pZ, sW, nl;
class ka {
  constructor(l = 128) {
    a(this, al, []);
    a(this, pZ, !1);
    a(this, sW, void 0);
    a(this, nl, -1);
    i(this, sW, l);
  }
  add({
    cmd: l,
    undo: U,
    post: Z,
    mustExec: d,
    type: F = NaN,
    overwriteIfSameType: W = !1,
    keepUndo: V = !1
  }) {
    if (d && l(), Q(this, pZ))
      return;
    const c = {
      cmd: l,
      undo: U,
      post: Z,
      type: F
    };
    if (Q(this, nl) === -1) {
      Q(this, al).length > 0 && (Q(this, al).length = 0), i(this, nl, 0), Q(this, al).push(c);
      return;
    }
    if (W && Q(this, al)[Q(this, nl)].type === F) {
      V && (c.undo = Q(this, al)[Q(this, nl)].undo), Q(this, al)[Q(this, nl)] = c;
      return;
    }
    const t = Q(this, nl) + 1;
    t === Q(this, sW) ? Q(this, al).splice(0, 1) : (i(this, nl, t), t < Q(this, al).length && Q(this, al).splice(t)), Q(this, al).push(c);
  }
  undo() {
    if (Q(this, nl) === -1)
      return;
    i(this, pZ, !0);
    const {
      undo: l,
      post: U
    } = Q(this, al)[Q(this, nl)];
    l(), U == null || U(), i(this, pZ, !1), i(this, nl, Q(this, nl) - 1);
  }
  redo() {
    if (Q(this, nl) < Q(this, al).length - 1) {
      i(this, nl, Q(this, nl) + 1), i(this, pZ, !0);
      const {
        cmd: l,
        post: U
      } = Q(this, al)[Q(this, nl)];
      l(), U == null || U(), i(this, pZ, !1);
    }
  }
  hasSomethingToUndo() {
    return Q(this, nl) !== -1;
  }
  hasSomethingToRedo() {
    return Q(this, nl) < Q(this, al).length - 1;
  }
  destroy() {
    i(this, al, null);
  }
}
al = new WeakMap(), pZ = new WeakMap(), sW = new WeakMap(), nl = new WeakMap();
var Tc, Bs;
class JV {
  constructor(l) {
    a(this, Tc);
    this.buffer = [], this.callbacks = /* @__PURE__ */ new Map(), this.allKeys = /* @__PURE__ */ new Set();
    const {
      isMac: U
    } = xl.platform;
    for (const [Z, d, F = {}] of l)
      for (const W of Z) {
        const V = W.startsWith("mac+");
        U && V ? (this.callbacks.set(W.slice(4), {
          callback: d,
          options: F
        }), this.allKeys.add(W.split("+").at(-1))) : !U && !V && (this.callbacks.set(W, {
          callback: d,
          options: F
        }), this.allKeys.add(W.split("+").at(-1)));
      }
  }
  exec(l, U) {
    if (!this.allKeys.has(U.key))
      return;
    const Z = this.callbacks.get(m(this, Tc, Bs).call(this, U));
    if (!Z)
      return;
    const {
      callback: d,
      options: {
        bubbles: F = !1,
        args: W = [],
        checker: V = null
      }
    } = Z;
    V && !V(l, U) || (d.bind(l, ...W, U)(), F || (U.stopPropagation(), U.preventDefault()));
  }
}
Tc = new WeakSet(), Bs = function(l) {
  l.altKey && this.buffer.push("alt"), l.ctrlKey && this.buffer.push("ctrl"), l.metaKey && this.buffer.push("meta"), l.shiftKey && this.buffer.push("shift"), this.buffer.push(l.key);
  const U = this.buffer.join("+");
  return this.buffer.length = 0, U;
};
const LN = class {
  get _colors() {
    const l = /* @__PURE__ */ new Map([["CanvasText", null], ["Canvas", null]]);
    return ua(l), K(this, "_colors", l);
  }
  convert(l) {
    const U = YN(l);
    if (!window.matchMedia("(forced-colors: active)").matches)
      return U;
    for (const [Z, d] of this._colors)
      if (d.every((F, W) => F === U[W]))
        return LN._colorsMapping.get(Z);
    return U;
  }
  getHexCode(l) {
    const U = this._colors.get(l);
    return U ? u.makeHexColor(...U) : l;
  }
};
let IV = LN;
I(IV, "_colorsMapping", /* @__PURE__ */ new Map([["CanvasText", [0, 0, 0]], ["Canvas", [255, 255, 255]]]));
var Kl, cl, il, BF, gU, eF, QU, pF, Nd, JU, HU, sd, bW, aW, GU, uF, uZ, TU, Xc, yZ, nW, bd, hW, yF, Ml, P, vU, ad, mW, iW, MW, JW, GW, TW, XW, YW, SW, BW, eW, pW, uW, yW, LZ, XU, PU, LW, LF, EV, Yc, es, Sc, ps, zF, CV, Bc, us, ec, ys, pc, Ls, zW, GR, kW, TR, oW, XR, DW, YR, IW, SR, Jl, Ll, YU, JZ, uc, zs, yc, ks, EW, BR, Lc, os, nd, x0, CW, eR;
const zc = class {
  constructor(l, U, Z, d, F, W, V, c, t) {
    a(this, LF);
    a(this, Yc);
    a(this, Sc);
    a(this, zF);
    a(this, Bc);
    a(this, ec);
    a(this, pc);
    a(this, zW);
    a(this, kW);
    a(this, oW);
    a(this, DW);
    a(this, IW);
    a(this, Jl);
    a(this, YU);
    a(this, uc);
    a(this, yc);
    a(this, EW);
    a(this, Lc);
    a(this, nd);
    a(this, CW);
    a(this, Kl, null);
    a(this, cl, /* @__PURE__ */ new Map());
    a(this, il, /* @__PURE__ */ new Map());
    a(this, BF, null);
    a(this, gU, null);
    a(this, eF, null);
    a(this, QU, new ka());
    a(this, pF, 0);
    a(this, Nd, /* @__PURE__ */ new Set());
    a(this, JU, null);
    a(this, HU, null);
    a(this, sd, /* @__PURE__ */ new Set());
    a(this, bW, !1);
    a(this, aW, null);
    a(this, GU, null);
    a(this, uF, null);
    a(this, uZ, !1);
    a(this, TU, null);
    a(this, Xc, new za());
    a(this, yZ, !1);
    a(this, nW, !1);
    a(this, bd, null);
    a(this, hW, null);
    a(this, yF, null);
    a(this, Ml, O.NONE);
    a(this, P, /* @__PURE__ */ new Set());
    a(this, vU, null);
    a(this, ad, null);
    a(this, mW, null);
    a(this, iW, this.blur.bind(this));
    a(this, MW, this.focus.bind(this));
    a(this, JW, this.copy.bind(this));
    a(this, GW, this.cut.bind(this));
    a(this, TW, this.paste.bind(this));
    a(this, XW, this.keydown.bind(this));
    a(this, YW, this.keyup.bind(this));
    a(this, SW, this.onEditingAction.bind(this));
    a(this, BW, this.onPageChanging.bind(this));
    a(this, eW, this.onScaleChanging.bind(this));
    a(this, pW, m(this, Sc, ps).bind(this));
    a(this, uW, this.onRotationChanging.bind(this));
    a(this, yW, {
      isEditing: !1,
      isEmpty: !0,
      hasSomethingToUndo: !1,
      hasSomethingToRedo: !1,
      hasSelectedEditor: !1,
      hasSelectedText: !1
    });
    a(this, LZ, [0, 0]);
    a(this, XU, null);
    a(this, PU, null);
    a(this, LW, null);
    i(this, PU, l), i(this, LW, U), i(this, BF, Z), this._eventBus = d, this._eventBus._on("editingaction", Q(this, SW)), this._eventBus._on("pagechanging", Q(this, BW)), this._eventBus._on("scalechanging", Q(this, eW)), this._eventBus._on("rotationchanging", Q(this, uW)), m(this, Bc, us).call(this), m(this, kW, TR).call(this), i(this, gU, F.annotationStorage), i(this, aW, F.filterFactory), i(this, ad, W), i(this, uF, V || null), i(this, bW, c), i(this, yF, t || null), this.viewParameters = {
      realScale: hU.PDF_TO_CSS_UNITS,
      rotation: 0
    }, this.isShiftKeyDown = !1;
  }
  static get _keyboardManager() {
    const l = zc.prototype, U = (W) => Q(W, PU).contains(document.activeElement) && document.activeElement.tagName !== "BUTTON" && W.hasSomethingToControl(), Z = (W, {
      target: V
    }) => {
      if (V instanceof HTMLInputElement) {
        const {
          type: c
        } = V;
        return c !== "text" && c !== "number";
      }
      return !0;
    }, d = this.TRANSLATE_SMALL, F = this.TRANSLATE_BIG;
    return K(this, "_keyboardManager", new JV([[["ctrl+a", "mac+meta+a"], l.selectAll, {
      checker: Z
    }], [["ctrl+z", "mac+meta+z"], l.undo, {
      checker: Z
    }], [["ctrl+y", "ctrl+shift+z", "mac+meta+shift+z", "ctrl+shift+Z", "mac+meta+shift+Z"], l.redo, {
      checker: Z
    }], [["Backspace", "alt+Backspace", "ctrl+Backspace", "shift+Backspace", "mac+Backspace", "mac+alt+Backspace", "mac+ctrl+Backspace", "Delete", "ctrl+Delete", "shift+Delete", "mac+Delete"], l.delete, {
      checker: Z
    }], [["Enter", "mac+Enter"], l.addNewEditorFromKeyboard, {
      checker: (W, {
        target: V
      }) => !(V instanceof HTMLButtonElement) && Q(W, PU).contains(V) && !W.isEnterHandled
    }], [[" ", "mac+ "], l.addNewEditorFromKeyboard, {
      checker: (W, {
        target: V
      }) => !(V instanceof HTMLButtonElement) && Q(W, PU).contains(document.activeElement)
    }], [["Escape", "mac+Escape"], l.unselectAll], [["ArrowLeft", "mac+ArrowLeft"], l.translateSelectedEditors, {
      args: [-d, 0],
      checker: U
    }], [["ctrl+ArrowLeft", "mac+shift+ArrowLeft"], l.translateSelectedEditors, {
      args: [-F, 0],
      checker: U
    }], [["ArrowRight", "mac+ArrowRight"], l.translateSelectedEditors, {
      args: [d, 0],
      checker: U
    }], [["ctrl+ArrowRight", "mac+shift+ArrowRight"], l.translateSelectedEditors, {
      args: [F, 0],
      checker: U
    }], [["ArrowUp", "mac+ArrowUp"], l.translateSelectedEditors, {
      args: [0, -d],
      checker: U
    }], [["ctrl+ArrowUp", "mac+shift+ArrowUp"], l.translateSelectedEditors, {
      args: [0, -F],
      checker: U
    }], [["ArrowDown", "mac+ArrowDown"], l.translateSelectedEditors, {
      args: [0, d],
      checker: U
    }], [["ctrl+ArrowDown", "mac+shift+ArrowDown"], l.translateSelectedEditors, {
      args: [0, F],
      checker: U
    }]]));
  }
  destroy() {
    var l, U;
    m(this, oW, XR).call(this), m(this, zW, GR).call(this), this._eventBus._off("editingaction", Q(this, SW)), this._eventBus._off("pagechanging", Q(this, BW)), this._eventBus._off("scalechanging", Q(this, eW)), this._eventBus._off("rotationchanging", Q(this, uW));
    for (const Z of Q(this, il).values())
      Z.destroy();
    Q(this, il).clear(), Q(this, cl).clear(), Q(this, sd).clear(), i(this, Kl, null), Q(this, P).clear(), Q(this, QU).destroy(), (l = Q(this, BF)) == null || l.destroy(), (U = Q(this, TU)) == null || U.hide(), i(this, TU, null), Q(this, GU) && (clearTimeout(Q(this, GU)), i(this, GU, null)), Q(this, XU) && (clearTimeout(Q(this, XU)), i(this, XU, null)), m(this, ec, ys).call(this);
  }
  async mlGuess(l) {
    var U;
    return ((U = Q(this, yF)) == null ? void 0 : U.guess(l)) || null;
  }
  get hasMLManager() {
    return !!Q(this, yF);
  }
  get hcmFilter() {
    return K(this, "hcmFilter", Q(this, ad) ? Q(this, aW).addHCMFilter(Q(this, ad).foreground, Q(this, ad).background) : "none");
  }
  get direction() {
    return K(this, "direction", getComputedStyle(Q(this, PU)).direction);
  }
  get highlightColors() {
    return K(this, "highlightColors", Q(this, uF) ? new Map(Q(this, uF).split(",").map((l) => l.split("=").map((U) => U.trim()))) : null);
  }
  get highlightColorNames() {
    return K(this, "highlightColorNames", this.highlightColors ? new Map(Array.from(this.highlightColors, (l) => l.reverse())) : null);
  }
  setMainHighlightColorPicker(l) {
    i(this, hW, l);
  }
  editAltText(l) {
    var U;
    (U = Q(this, BF)) == null || U.editAltText(this, l);
  }
  onPageChanging({
    pageNumber: l
  }) {
    i(this, pF, l - 1);
  }
  focusMainContainer() {
    Q(this, PU).focus();
  }
  findParent(l, U) {
    for (const Z of Q(this, il).values()) {
      const {
        x: d,
        y: F,
        width: W,
        height: V
      } = Z.div.getBoundingClientRect();
      if (l >= d && l <= d + W && U >= F && U <= F + V)
        return Z;
    }
    return null;
  }
  disableUserSelect(l = !1) {
    Q(this, LW).classList.toggle("noUserSelect", l);
  }
  addShouldRescale(l) {
    Q(this, sd).add(l);
  }
  removeShouldRescale(l) {
    Q(this, sd).delete(l);
  }
  onScaleChanging({
    scale: l
  }) {
    this.commitOrRemove(), this.viewParameters.realScale = l * hU.PDF_TO_CSS_UNITS;
    for (const U of Q(this, sd))
      U.onScaleChanging();
  }
  onRotationChanging({
    pagesRotation: l
  }) {
    this.commitOrRemove(), this.viewParameters.rotation = l;
  }
  highlightSelection(l = "") {
    const U = document.getSelection();
    if (!U || U.isCollapsed)
      return;
    const {
      anchorNode: Z,
      anchorOffset: d,
      focusNode: F,
      focusOffset: W
    } = U, V = U.toString(), t = m(this, LF, EV).call(this, U).closest(".textLayer"), N = this.getSelectionBoxes(t);
    if (N) {
      U.empty(), Q(this, Ml) === O.NONE && (this._eventBus.dispatch("showannotationeditorui", {
        source: this,
        mode: O.HIGHLIGHT
      }), this.showAllEditors("highlight", !0, !0));
      for (const s of Q(this, il).values())
        if (s.hasTextLayer(t)) {
          s.createAndAddNewEditor({
            x: 0,
            y: 0
          }, !1, {
            methodOfCreation: l,
            boxes: N,
            anchorNode: Z,
            anchorOffset: d,
            focusNode: F,
            focusOffset: W,
            text: V
          });
          break;
        }
    }
  }
  addToAnnotationStorage(l) {
    !l.isEmpty() && Q(this, gU) && !Q(this, gU).has(l.id) && Q(this, gU).setValue(l.id, l);
  }
  blur() {
    if (this.isShiftKeyDown = !1, Q(this, uZ) && (i(this, uZ, !1), m(this, zF, CV).call(this, "main_toolbar")), !this.hasSelection)
      return;
    const {
      activeElement: l
    } = document;
    for (const U of Q(this, P))
      if (U.div.contains(l)) {
        i(this, bd, [U, l]), U._focusEventsAllowed = !1;
        break;
      }
  }
  focus() {
    if (!Q(this, bd))
      return;
    const [l, U] = Q(this, bd);
    i(this, bd, null), U.addEventListener("focusin", () => {
      l._focusEventsAllowed = !0;
    }, {
      once: !0
    }), U.focus();
  }
  addEditListeners() {
    m(this, kW, TR).call(this), m(this, DW, YR).call(this);
  }
  removeEditListeners() {
    m(this, oW, XR).call(this), m(this, IW, SR).call(this);
  }
  copy(l) {
    var Z;
    if (l.preventDefault(), (Z = Q(this, Kl)) == null || Z.commitOrRemove(), !this.hasSelection)
      return;
    const U = [];
    for (const d of Q(this, P)) {
      const F = d.serialize(!0);
      F && U.push(F);
    }
    U.length !== 0 && l.clipboardData.setData("application/pdfjs", JSON.stringify(U));
  }
  cut(l) {
    this.copy(l), this.delete();
  }
  paste(l) {
    l.preventDefault();
    const {
      clipboardData: U
    } = l;
    for (const F of U.items)
      for (const W of Q(this, HU))
        if (W.isHandlingMimeForPasting(F.type)) {
          W.paste(F, this.currentLayer);
          return;
        }
    let Z = U.getData("application/pdfjs");
    if (!Z)
      return;
    try {
      Z = JSON.parse(Z);
    } catch (F) {
      w(`paste: "${F.message}".`);
      return;
    }
    if (!Array.isArray(Z))
      return;
    this.unselectAll();
    const d = this.currentLayer;
    try {
      const F = [];
      for (const c of Z) {
        const t = d.deserialize(c);
        if (!t)
          return;
        F.push(t);
      }
      const W = () => {
        for (const c of F)
          m(this, EW, BR).call(this, c);
        m(this, CW, eR).call(this, F);
      }, V = () => {
        for (const c of F)
          c.remove();
      };
      this.addCommands({
        cmd: W,
        undo: V,
        mustExec: !0
      });
    } catch (F) {
      w(`paste: "${F.message}".`);
    }
  }
  keydown(l) {
    !this.isShiftKeyDown && l.key === "Shift" && (this.isShiftKeyDown = !0), Q(this, Ml) !== O.NONE && !this.isEditorHandlingKeyboard && zc._keyboardManager.exec(this, l);
  }
  keyup(l) {
    this.isShiftKeyDown && l.key === "Shift" && (this.isShiftKeyDown = !1, Q(this, uZ) && (i(this, uZ, !1), m(this, zF, CV).call(this, "main_toolbar")));
  }
  onEditingAction({
    name: l
  }) {
    switch (l) {
      case "undo":
      case "redo":
      case "delete":
      case "selectAll":
        this[l]();
        break;
      case "highlightSelection":
        this.highlightSelection("context_menu");
        break;
    }
  }
  setEditingState(l) {
    l ? (m(this, pc, Ls).call(this), m(this, DW, YR).call(this), m(this, Jl, Ll).call(this, {
      isEditing: Q(this, Ml) !== O.NONE,
      isEmpty: m(this, nd, x0).call(this),
      hasSomethingToUndo: Q(this, QU).hasSomethingToUndo(),
      hasSomethingToRedo: Q(this, QU).hasSomethingToRedo(),
      hasSelectedEditor: !1
    })) : (m(this, zW, GR).call(this), m(this, IW, SR).call(this), m(this, Jl, Ll).call(this, {
      isEditing: !1
    }), this.disableUserSelect(!1));
  }
  registerEditorTypes(l) {
    if (!Q(this, HU)) {
      i(this, HU, l);
      for (const U of Q(this, HU))
        m(this, YU, JZ).call(this, U.defaultPropertiesToUpdate);
    }
  }
  getId() {
    return Q(this, Xc).id;
  }
  get currentLayer() {
    return Q(this, il).get(Q(this, pF));
  }
  getLayer(l) {
    return Q(this, il).get(l);
  }
  get currentPageIndex() {
    return Q(this, pF);
  }
  addLayer(l) {
    Q(this, il).set(l.pageIndex, l), Q(this, yZ) ? l.enable() : l.disable();
  }
  removeLayer(l) {
    Q(this, il).delete(l.pageIndex);
  }
  updateMode(l, U = null, Z = !1) {
    if (Q(this, Ml) !== l) {
      if (i(this, Ml, l), l === O.NONE) {
        this.setEditingState(!1), m(this, yc, ks).call(this);
        return;
      }
      this.setEditingState(!0), m(this, uc, zs).call(this), this.unselectAll();
      for (const d of Q(this, il).values())
        d.updateMode(l);
      if (!U && Z) {
        this.addNewEditorFromKeyboard();
        return;
      }
      if (U) {
        for (const d of Q(this, cl).values())
          if (d.annotationElementId === U) {
            this.setSelected(d), d.enterInEditMode();
            break;
          }
      }
    }
  }
  addNewEditorFromKeyboard() {
    this.currentLayer.canCreateNewEmptyEditor() && this.currentLayer.addNewEditor();
  }
  updateToolbar(l) {
    l !== Q(this, Ml) && this._eventBus.dispatch("switchannotationeditormode", {
      source: this,
      mode: l
    });
  }
  updateParams(l, U) {
    var Z;
    if (Q(this, HU)) {
      switch (l) {
        case D.CREATE:
          this.currentLayer.addNewEditor();
          return;
        case D.HIGHLIGHT_DEFAULT_COLOR:
          (Z = Q(this, hW)) == null || Z.updateColor(U);
          break;
        case D.HIGHLIGHT_SHOW_ALL:
          this._eventBus.dispatch("reporttelemetry", {
            source: this,
            details: {
              type: "editing",
              data: {
                type: "highlight",
                action: "toggle_visibility"
              }
            }
          }), (Q(this, mW) || i(this, mW, /* @__PURE__ */ new Map())).set(l, U), this.showAllEditors("highlight", U);
          break;
      }
      for (const d of Q(this, P))
        d.updateParams(l, U);
      for (const d of Q(this, HU))
        d.updateDefaultParams(l, U);
    }
  }
  showAllEditors(l, U, Z = !1) {
    var F;
    for (const W of Q(this, cl).values())
      W.editorType === l && W.show(U);
    (((F = Q(this, mW)) == null ? void 0 : F.get(D.HIGHLIGHT_SHOW_ALL)) ?? !0) !== U && m(this, YU, JZ).call(this, [[D.HIGHLIGHT_SHOW_ALL, U]]);
  }
  enableWaiting(l = !1) {
    if (Q(this, nW) !== l) {
      i(this, nW, l);
      for (const U of Q(this, il).values())
        l ? U.disableClick() : U.enableClick(), U.div.classList.toggle("waiting", l);
    }
  }
  getEditors(l) {
    const U = [];
    for (const Z of Q(this, cl).values())
      Z.pageIndex === l && U.push(Z);
    return U;
  }
  getEditor(l) {
    return Q(this, cl).get(l);
  }
  addEditor(l) {
    Q(this, cl).set(l.id, l);
  }
  removeEditor(l) {
    var U;
    l.div.contains(document.activeElement) && (Q(this, GU) && clearTimeout(Q(this, GU)), i(this, GU, setTimeout(() => {
      this.focusMainContainer(), i(this, GU, null);
    }, 0))), Q(this, cl).delete(l.id), this.unselect(l), (!l.annotationElementId || !Q(this, Nd).has(l.annotationElementId)) && ((U = Q(this, gU)) == null || U.remove(l.id));
  }
  addDeletedAnnotationElement(l) {
    Q(this, Nd).add(l.annotationElementId), this.addChangedExistingAnnotation(l), l.deleted = !0;
  }
  isDeletedAnnotationElement(l) {
    return Q(this, Nd).has(l);
  }
  removeDeletedAnnotationElement(l) {
    Q(this, Nd).delete(l.annotationElementId), this.removeChangedExistingAnnotation(l), l.deleted = !1;
  }
  setActiveEditor(l) {
    Q(this, Kl) !== l && (i(this, Kl, l), l && m(this, YU, JZ).call(this, l.propertiesToUpdate));
  }
  updateUI(l) {
    Q(this, Lc, os) === l && m(this, YU, JZ).call(this, l.propertiesToUpdate);
  }
  toggleSelected(l) {
    if (Q(this, P).has(l)) {
      Q(this, P).delete(l), l.unselect(), m(this, Jl, Ll).call(this, {
        hasSelectedEditor: this.hasSelection
      });
      return;
    }
    Q(this, P).add(l), l.select(), m(this, YU, JZ).call(this, l.propertiesToUpdate), m(this, Jl, Ll).call(this, {
      hasSelectedEditor: !0
    });
  }
  setSelected(l) {
    for (const U of Q(this, P))
      U !== l && U.unselect();
    Q(this, P).clear(), Q(this, P).add(l), l.select(), m(this, YU, JZ).call(this, l.propertiesToUpdate), m(this, Jl, Ll).call(this, {
      hasSelectedEditor: !0
    });
  }
  isSelected(l) {
    return Q(this, P).has(l);
  }
  get firstSelectedEditor() {
    return Q(this, P).values().next().value;
  }
  unselect(l) {
    l.unselect(), Q(this, P).delete(l), m(this, Jl, Ll).call(this, {
      hasSelectedEditor: this.hasSelection
    });
  }
  get hasSelection() {
    return Q(this, P).size !== 0;
  }
  get isEnterHandled() {
    return Q(this, P).size === 1 && this.firstSelectedEditor.isEnterHandled;
  }
  undo() {
    Q(this, QU).undo(), m(this, Jl, Ll).call(this, {
      hasSomethingToUndo: Q(this, QU).hasSomethingToUndo(),
      hasSomethingToRedo: !0,
      isEmpty: m(this, nd, x0).call(this)
    });
  }
  redo() {
    Q(this, QU).redo(), m(this, Jl, Ll).call(this, {
      hasSomethingToUndo: !0,
      hasSomethingToRedo: Q(this, QU).hasSomethingToRedo(),
      isEmpty: m(this, nd, x0).call(this)
    });
  }
  addCommands(l) {
    Q(this, QU).add(l), m(this, Jl, Ll).call(this, {
      hasSomethingToUndo: !0,
      hasSomethingToRedo: !1,
      isEmpty: m(this, nd, x0).call(this)
    });
  }
  delete() {
    if (this.commitOrRemove(), !this.hasSelection)
      return;
    const l = [...Q(this, P)], U = () => {
      for (const d of l)
        d.remove();
    }, Z = () => {
      for (const d of l)
        m(this, EW, BR).call(this, d);
    };
    this.addCommands({
      cmd: U,
      undo: Z,
      mustExec: !0
    });
  }
  commitOrRemove() {
    var l;
    (l = Q(this, Kl)) == null || l.commitOrRemove();
  }
  hasSomethingToControl() {
    return Q(this, Kl) || this.hasSelection;
  }
  selectAll() {
    for (const l of Q(this, P))
      l.commit();
    m(this, CW, eR).call(this, Q(this, cl).values());
  }
  unselectAll() {
    if (!(Q(this, Kl) && (Q(this, Kl).commitOrRemove(), Q(this, Ml) !== O.NONE)) && this.hasSelection) {
      for (const l of Q(this, P))
        l.unselect();
      Q(this, P).clear(), m(this, Jl, Ll).call(this, {
        hasSelectedEditor: !1
      });
    }
  }
  translateSelectedEditors(l, U, Z = !1) {
    if (Z || this.commitOrRemove(), !this.hasSelection)
      return;
    Q(this, LZ)[0] += l, Q(this, LZ)[1] += U;
    const [d, F] = Q(this, LZ), W = [...Q(this, P)], V = 1e3;
    Q(this, XU) && clearTimeout(Q(this, XU)), i(this, XU, setTimeout(() => {
      i(this, XU, null), Q(this, LZ)[0] = Q(this, LZ)[1] = 0, this.addCommands({
        cmd: () => {
          for (const c of W)
            Q(this, cl).has(c.id) && c.translateInPage(d, F);
        },
        undo: () => {
          for (const c of W)
            Q(this, cl).has(c.id) && c.translateInPage(-d, -F);
        },
        mustExec: !1
      });
    }, V));
    for (const c of W)
      c.translateInPage(l, U);
  }
  setUpDragSession() {
    if (this.hasSelection) {
      this.disableUserSelect(!0), i(this, JU, /* @__PURE__ */ new Map());
      for (const l of Q(this, P))
        Q(this, JU).set(l, {
          savedX: l.x,
          savedY: l.y,
          savedPageIndex: l.pageIndex,
          newX: 0,
          newY: 0,
          newPageIndex: -1
        });
    }
  }
  endDragSession() {
    if (!Q(this, JU))
      return !1;
    this.disableUserSelect(!1);
    const l = Q(this, JU);
    i(this, JU, null);
    let U = !1;
    for (const [{
      x: d,
      y: F,
      pageIndex: W
    }, V] of l)
      V.newX = d, V.newY = F, V.newPageIndex = W, U || (U = d !== V.savedX || F !== V.savedY || W !== V.savedPageIndex);
    if (!U)
      return !1;
    const Z = (d, F, W, V) => {
      if (Q(this, cl).has(d.id)) {
        const c = Q(this, il).get(V);
        c ? d._setParentAndPosition(c, F, W) : (d.pageIndex = V, d.x = F, d.y = W);
      }
    };
    return this.addCommands({
      cmd: () => {
        for (const [d, {
          newX: F,
          newY: W,
          newPageIndex: V
        }] of l)
          Z(d, F, W, V);
      },
      undo: () => {
        for (const [d, {
          savedX: F,
          savedY: W,
          savedPageIndex: V
        }] of l)
          Z(d, F, W, V);
      },
      mustExec: !0
    }), !0;
  }
  dragSelectedEditors(l, U) {
    if (Q(this, JU))
      for (const Z of Q(this, JU).keys())
        Z.drag(l, U);
  }
  rebuild(l) {
    if (l.parent === null) {
      const U = this.getLayer(l.pageIndex);
      U ? (U.changeParent(l), U.addOrRebuild(l)) : (this.addEditor(l), this.addToAnnotationStorage(l), l.rebuild());
    } else
      l.parent.addOrRebuild(l);
  }
  get isEditorHandlingKeyboard() {
    var l;
    return ((l = this.getActive()) == null ? void 0 : l.shouldGetKeyboardEvents()) || Q(this, P).size === 1 && this.firstSelectedEditor.shouldGetKeyboardEvents();
  }
  isActive(l) {
    return Q(this, Kl) === l;
  }
  getActive() {
    return Q(this, Kl);
  }
  getMode() {
    return Q(this, Ml);
  }
  get imageManager() {
    return K(this, "imageManager", new MR());
  }
  getSelectionBoxes(l) {
    if (!l)
      return null;
    const U = document.getSelection();
    for (let t = 0, N = U.rangeCount; t < N; t++)
      if (!l.contains(U.getRangeAt(t).commonAncestorContainer))
        return null;
    const {
      x: Z,
      y: d,
      width: F,
      height: W
    } = l.getBoundingClientRect();
    let V;
    switch (l.getAttribute("data-main-rotation")) {
      case "90":
        V = (t, N, s, b) => ({
          x: (N - d) / W,
          y: 1 - (t + s - Z) / F,
          width: b / W,
          height: s / F
        });
        break;
      case "180":
        V = (t, N, s, b) => ({
          x: 1 - (t + s - Z) / F,
          y: 1 - (N + b - d) / W,
          width: s / F,
          height: b / W
        });
        break;
      case "270":
        V = (t, N, s, b) => ({
          x: 1 - (N + b - d) / W,
          y: (t - Z) / F,
          width: b / W,
          height: s / F
        });
        break;
      default:
        V = (t, N, s, b) => ({
          x: (t - Z) / F,
          y: (N - d) / W,
          width: s / F,
          height: b / W
        });
        break;
    }
    const c = [];
    for (let t = 0, N = U.rangeCount; t < N; t++) {
      const s = U.getRangeAt(t);
      if (!s.collapsed)
        for (const {
          x: b,
          y: n,
          width: h,
          height: M
        } of s.getClientRects())
          h === 0 || M === 0 || c.push(V(b, n, h, M));
    }
    return c.length === 0 ? null : c;
  }
  addChangedExistingAnnotation({
    annotationElementId: l,
    id: U
  }) {
    (Q(this, eF) || i(this, eF, /* @__PURE__ */ new Map())).set(l, U);
  }
  removeChangedExistingAnnotation({
    annotationElementId: l
  }) {
    var U;
    (U = Q(this, eF)) == null || U.delete(l);
  }
  renderAnnotationElement(l) {
    var d;
    const U = (d = Q(this, eF)) == null ? void 0 : d.get(l.data.id);
    if (!U)
      return;
    const Z = Q(this, gU).getRawValue(U);
    Z && (Q(this, Ml) === O.NONE && !Z.hasBeenModified || Z.renderAnnotationElement(l));
  }
};
let aZ = zc;
Kl = new WeakMap(), cl = new WeakMap(), il = new WeakMap(), BF = new WeakMap(), gU = new WeakMap(), eF = new WeakMap(), QU = new WeakMap(), pF = new WeakMap(), Nd = new WeakMap(), JU = new WeakMap(), HU = new WeakMap(), sd = new WeakMap(), bW = new WeakMap(), aW = new WeakMap(), GU = new WeakMap(), uF = new WeakMap(), uZ = new WeakMap(), TU = new WeakMap(), Xc = new WeakMap(), yZ = new WeakMap(), nW = new WeakMap(), bd = new WeakMap(), hW = new WeakMap(), yF = new WeakMap(), Ml = new WeakMap(), P = new WeakMap(), vU = new WeakMap(), ad = new WeakMap(), mW = new WeakMap(), iW = new WeakMap(), MW = new WeakMap(), JW = new WeakMap(), GW = new WeakMap(), TW = new WeakMap(), XW = new WeakMap(), YW = new WeakMap(), SW = new WeakMap(), BW = new WeakMap(), eW = new WeakMap(), pW = new WeakMap(), uW = new WeakMap(), yW = new WeakMap(), LZ = new WeakMap(), XU = new WeakMap(), PU = new WeakMap(), LW = new WeakMap(), LF = new WeakSet(), EV = function({
  anchorNode: l
}) {
  return l.nodeType === Node.TEXT_NODE ? l.parentElement : l;
}, Yc = new WeakSet(), es = function() {
  const l = document.getSelection();
  if (!l || l.isCollapsed)
    return;
  const Z = m(this, LF, EV).call(this, l).closest(".textLayer"), d = this.getSelectionBoxes(Z);
  d && (Q(this, TU) || i(this, TU, new ya(this)), Q(this, TU).show(Z, d, this.direction === "ltr"));
}, Sc = new WeakSet(), ps = function() {
  var F, W, V;
  const l = document.getSelection();
  if (!l || l.isCollapsed) {
    Q(this, vU) && ((F = Q(this, TU)) == null || F.hide(), i(this, vU, null), m(this, Jl, Ll).call(this, {
      hasSelectedText: !1
    }));
    return;
  }
  const {
    anchorNode: U
  } = l;
  if (U === Q(this, vU))
    return;
  if (!m(this, LF, EV).call(this, l).closest(".textLayer")) {
    Q(this, vU) && ((W = Q(this, TU)) == null || W.hide(), i(this, vU, null), m(this, Jl, Ll).call(this, {
      hasSelectedText: !1
    }));
    return;
  }
  if ((V = Q(this, TU)) == null || V.hide(), i(this, vU, U), m(this, Jl, Ll).call(this, {
    hasSelectedText: !0
  }), !(Q(this, Ml) !== O.HIGHLIGHT && Q(this, Ml) !== O.NONE) && (Q(this, Ml) === O.HIGHLIGHT && this.showAllEditors("highlight", !0, !0), i(this, uZ, this.isShiftKeyDown), !this.isShiftKeyDown)) {
    const c = (t) => {
      t.type === "pointerup" && t.button !== 0 || (window.removeEventListener("pointerup", c), window.removeEventListener("blur", c), t.type === "pointerup" && m(this, zF, CV).call(this, "main_toolbar"));
    };
    window.addEventListener("pointerup", c), window.addEventListener("blur", c);
  }
}, zF = new WeakSet(), CV = function(l = "") {
  Q(this, Ml) === O.HIGHLIGHT ? this.highlightSelection(l) : Q(this, bW) && m(this, Yc, es).call(this);
}, Bc = new WeakSet(), us = function() {
  document.addEventListener("selectionchange", Q(this, pW));
}, ec = new WeakSet(), ys = function() {
  document.removeEventListener("selectionchange", Q(this, pW));
}, pc = new WeakSet(), Ls = function() {
  window.addEventListener("focus", Q(this, MW)), window.addEventListener("blur", Q(this, iW));
}, zW = new WeakSet(), GR = function() {
  window.removeEventListener("focus", Q(this, MW)), window.removeEventListener("blur", Q(this, iW));
}, kW = new WeakSet(), TR = function() {
  window.addEventListener("keydown", Q(this, XW)), window.addEventListener("keyup", Q(this, YW));
}, oW = new WeakSet(), XR = function() {
  window.removeEventListener("keydown", Q(this, XW)), window.removeEventListener("keyup", Q(this, YW));
}, DW = new WeakSet(), YR = function() {
  document.addEventListener("copy", Q(this, JW)), document.addEventListener("cut", Q(this, GW)), document.addEventListener("paste", Q(this, TW));
}, IW = new WeakSet(), SR = function() {
  document.removeEventListener("copy", Q(this, JW)), document.removeEventListener("cut", Q(this, GW)), document.removeEventListener("paste", Q(this, TW));
}, Jl = new WeakSet(), Ll = function(l) {
  Object.entries(l).some(([Z, d]) => Q(this, yW)[Z] !== d) && (this._eventBus.dispatch("annotationeditorstateschanged", {
    source: this,
    details: Object.assign(Q(this, yW), l)
  }), Q(this, Ml) === O.HIGHLIGHT && l.hasSelectedEditor === !1 && m(this, YU, JZ).call(this, [[D.HIGHLIGHT_FREE, !0]]));
}, YU = new WeakSet(), JZ = function(l) {
  this._eventBus.dispatch("annotationeditorparamschanged", {
    source: this,
    details: l
  });
}, uc = new WeakSet(), zs = function() {
  if (!Q(this, yZ)) {
    i(this, yZ, !0);
    for (const l of Q(this, il).values())
      l.enable();
    for (const l of Q(this, cl).values())
      l.enable();
  }
}, yc = new WeakSet(), ks = function() {
  if (this.unselectAll(), Q(this, yZ)) {
    i(this, yZ, !1);
    for (const l of Q(this, il).values())
      l.disable();
    for (const l of Q(this, cl).values())
      l.disable();
  }
}, EW = new WeakSet(), BR = function(l) {
  const U = Q(this, il).get(l.pageIndex);
  U ? U.addOrRebuild(l) : (this.addEditor(l), this.addToAnnotationStorage(l));
}, Lc = new WeakSet(), os = function() {
  let l = null;
  for (l of Q(this, P))
    ;
  return l;
}, nd = new WeakSet(), x0 = function() {
  if (Q(this, cl).size === 0)
    return !0;
  if (Q(this, cl).size === 1)
    for (const l of Q(this, cl).values())
      return l.isEmpty();
  return !1;
}, CW = new WeakSet(), eR = function(l) {
  for (const U of Q(this, P))
    U.unselect();
  Q(this, P).clear();
  for (const U of l)
    U.isEmpty() || (Q(this, P).add(U), U.select());
  m(this, Jl, Ll).call(this, {
    hasSelectedEditor: this.hasSelection
  });
}, I(aZ, "TRANSLATE_SMALL", 1), I(aZ, "TRANSLATE_BIG", 10);
var AU, fU, VU, _U, cU, kF, qU, wW, pR;
const XZ = class {
  constructor(l) {
    a(this, wW);
    a(this, AU, "");
    a(this, fU, !1);
    a(this, VU, null);
    a(this, _U, null);
    a(this, cU, null);
    a(this, kF, !1);
    a(this, qU, null);
    i(this, qU, l);
  }
  static initialize(l) {
    XZ._l10nPromise || (XZ._l10nPromise = l);
  }
  async render() {
    const l = i(this, VU, document.createElement("button"));
    l.className = "altText";
    const U = await XZ._l10nPromise.get("pdfjs-editor-alt-text-button-label");
    l.textContent = U, l.setAttribute("aria-label", U), l.tabIndex = "0", l.addEventListener("contextmenu", jl), l.addEventListener("pointerdown", (d) => d.stopPropagation());
    const Z = (d) => {
      d.preventDefault(), Q(this, qU)._uiManager.editAltText(Q(this, qU));
    };
    return l.addEventListener("click", Z, {
      capture: !0
    }), l.addEventListener("keydown", (d) => {
      d.target === l && d.key === "Enter" && (i(this, kF, !0), Z(d));
    }), await m(this, wW, pR).call(this), l;
  }
  finish() {
    Q(this, VU) && (Q(this, VU).focus({
      focusVisible: Q(this, kF)
    }), i(this, kF, !1));
  }
  isEmpty() {
    return !Q(this, AU) && !Q(this, fU);
  }
  get data() {
    return {
      altText: Q(this, AU),
      decorative: Q(this, fU)
    };
  }
  set data({
    altText: l,
    decorative: U
  }) {
    Q(this, AU) === l && Q(this, fU) === U || (i(this, AU, l), i(this, fU, U), m(this, wW, pR).call(this));
  }
  toggle(l = !1) {
    Q(this, VU) && (!l && Q(this, cU) && (clearTimeout(Q(this, cU)), i(this, cU, null)), Q(this, VU).disabled = !l);
  }
  destroy() {
    var l;
    (l = Q(this, VU)) == null || l.remove(), i(this, VU, null), i(this, _U, null);
  }
};
let UW = XZ;
AU = new WeakMap(), fU = new WeakMap(), VU = new WeakMap(), _U = new WeakMap(), cU = new WeakMap(), kF = new WeakMap(), qU = new WeakMap(), wW = new WeakSet(), pR = async function() {
  var d;
  const l = Q(this, VU);
  if (!l)
    return;
  if (!Q(this, AU) && !Q(this, fU)) {
    l.classList.remove("done"), (d = Q(this, _U)) == null || d.remove();
    return;
  }
  l.classList.add("done"), XZ._l10nPromise.get("pdfjs-editor-alt-text-edit-button-label").then((F) => {
    l.setAttribute("aria-label", F);
  });
  let U = Q(this, _U);
  if (!U) {
    i(this, _U, U = document.createElement("span")), U.className = "tooltip", U.setAttribute("role", "tooltip");
    const F = U.id = `alt-text-tooltip-${Q(this, qU).id}`;
    l.setAttribute("aria-describedby", F);
    const W = 100;
    l.addEventListener("mouseenter", () => {
      i(this, cU, setTimeout(() => {
        i(this, cU, null), Q(this, _U).classList.add("show"), Q(this, qU)._reportTelemetry({
          action: "alt_text_tooltip"
        });
      }, W));
    }), l.addEventListener("mouseleave", () => {
      var V;
      Q(this, cU) && (clearTimeout(Q(this, cU)), i(this, cU, null)), (V = Q(this, _U)) == null || V.classList.remove("show");
    });
  }
  U.innerText = Q(this, fU) ? await XZ._l10nPromise.get("pdfjs-editor-alt-text-decorative-tooltip") : Q(this, AU), U.parentNode || l.append(U);
  const Z = Q(this, qU).getImageForAltText();
  Z == null || Z.setAttribute("aria-describedby", U.id);
}, I(UW, "_l10nPromise", null);
var tU, zl, oF, hd, Gl, md, DF, IF, ul, xW, id, zZ, jW, Md, $U, SU, EF, CF, _l, OW, kc, rW, uR, KW, yR, gW, LR, oc, Ds, Dc, Is, HW, zR, vW, kR, PW, oR, Ic, Es, Ec, Cs, Cc, ws, wc, xs, AW, DR, Jd, j0;
const ll = class {
  constructor(l) {
    a(this, rW);
    a(this, gW);
    a(this, oc);
    a(this, Dc);
    a(this, HW);
    a(this, vW);
    a(this, PW);
    a(this, Ic);
    a(this, Ec);
    a(this, Cc);
    a(this, wc);
    a(this, AW);
    a(this, Jd);
    a(this, tU, null);
    a(this, zl, null);
    a(this, oF, !1);
    a(this, hd, !1);
    a(this, Gl, null);
    a(this, md, null);
    a(this, DF, this.focusin.bind(this));
    a(this, IF, this.focusout.bind(this));
    a(this, ul, null);
    a(this, xW, "");
    a(this, id, !1);
    a(this, zZ, null);
    a(this, jW, !1);
    a(this, Md, !1);
    a(this, $U, !1);
    a(this, SU, null);
    a(this, EF, 0);
    a(this, CF, 0);
    a(this, _l, null);
    I(this, "_initialOptions", /* @__PURE__ */ Object.create(null));
    I(this, "_isVisible", !0);
    I(this, "_uiManager", null);
    I(this, "_focusEventsAllowed", !0);
    I(this, "_l10nPromise", null);
    a(this, OW, !1);
    a(this, kc, ll._zIndex++);
    this.constructor === ll && f("Cannot initialize AnnotationEditor."), this.parent = l.parent, this.id = l.id, this.width = this.height = null, this.pageIndex = l.parent.pageIndex, this.name = l.name, this.div = null, this._uiManager = l.uiManager, this.annotationElementId = null, this._willKeepAspectRatio = !1, this._initialOptions.isCentered = l.isCentered, this._structTreeParentId = null;
    const {
      rotation: U,
      rawDims: {
        pageWidth: Z,
        pageHeight: d,
        pageX: F,
        pageY: W
      }
    } = this.parent.viewport;
    this.rotation = U, this.pageRotation = (360 + U - this._uiManager.viewParameters.rotation) % 360, this.pageDimensions = [Z, d], this.pageTranslation = [F, W];
    const [V, c] = this.parentDimensions;
    this.x = l.x / V, this.y = l.y / c, this.isAttachedToDOM = !1, this.deleted = !1;
  }
  static get _resizerKeyboardManager() {
    const l = ll.prototype._resizeWithKeyboard, U = aZ.TRANSLATE_SMALL, Z = aZ.TRANSLATE_BIG;
    return K(this, "_resizerKeyboardManager", new JV([[["ArrowLeft", "mac+ArrowLeft"], l, {
      args: [-U, 0]
    }], [["ctrl+ArrowLeft", "mac+shift+ArrowLeft"], l, {
      args: [-Z, 0]
    }], [["ArrowRight", "mac+ArrowRight"], l, {
      args: [U, 0]
    }], [["ctrl+ArrowRight", "mac+shift+ArrowRight"], l, {
      args: [Z, 0]
    }], [["ArrowUp", "mac+ArrowUp"], l, {
      args: [0, -U]
    }], [["ctrl+ArrowUp", "mac+shift+ArrowUp"], l, {
      args: [0, -Z]
    }], [["ArrowDown", "mac+ArrowDown"], l, {
      args: [0, U]
    }], [["ctrl+ArrowDown", "mac+shift+ArrowDown"], l, {
      args: [0, Z]
    }], [["Escape", "mac+Escape"], ll.prototype._stopResizingWithKeyboard]]));
  }
  get editorType() {
    return Object.getPrototypeOf(this).constructor._type;
  }
  static get _defaultLineColor() {
    return K(this, "_defaultLineColor", this._colorManager.getHexCode("CanvasText"));
  }
  static deleteAnnotationElement(l) {
    const U = new oa({
      id: l.parent.getNextId(),
      parent: l.parent,
      uiManager: l._uiManager
    });
    U.annotationElementId = l.annotationElementId, U.deleted = !0, U._uiManager.addToAnnotationStorage(U);
  }
  static initialize(l, U, Z) {
    if (ll._l10nPromise || (ll._l10nPromise = new Map(["pdfjs-editor-alt-text-button-label", "pdfjs-editor-alt-text-edit-button-label", "pdfjs-editor-alt-text-decorative-tooltip", "pdfjs-editor-resizer-label-topLeft", "pdfjs-editor-resizer-label-topMiddle", "pdfjs-editor-resizer-label-topRight", "pdfjs-editor-resizer-label-middleRight", "pdfjs-editor-resizer-label-bottomRight", "pdfjs-editor-resizer-label-bottomMiddle", "pdfjs-editor-resizer-label-bottomLeft", "pdfjs-editor-resizer-label-middleLeft"].map((F) => [F, l.get(F.replaceAll(/([A-Z])/g, (W) => `-${W.toLowerCase()}`))]))), Z != null && Z.strings)
      for (const F of Z.strings)
        ll._l10nPromise.set(F, l.get(F));
    if (ll._borderLineWidth !== -1)
      return;
    const d = getComputedStyle(document.documentElement);
    ll._borderLineWidth = parseFloat(d.getPropertyValue("--outline-width")) || 0;
  }
  static updateDefaultParams(l, U) {
  }
  static get defaultPropertiesToUpdate() {
    return [];
  }
  static isHandlingMimeForPasting(l) {
    return !1;
  }
  static paste(l, U) {
    f("Not implemented");
  }
  get propertiesToUpdate() {
    return [];
  }
  get _isDraggable() {
    return Q(this, OW);
  }
  set _isDraggable(l) {
    var U;
    i(this, OW, l), (U = this.div) == null || U.classList.toggle("draggable", l);
  }
  get isEnterHandled() {
    return !0;
  }
  center() {
    const [l, U] = this.pageDimensions;
    switch (this.parentRotation) {
      case 90:
        this.x -= this.height * U / (l * 2), this.y += this.width * l / (U * 2);
        break;
      case 180:
        this.x += this.width / 2, this.y += this.height / 2;
        break;
      case 270:
        this.x += this.height * U / (l * 2), this.y -= this.width * l / (U * 2);
        break;
      default:
        this.x -= this.width / 2, this.y -= this.height / 2;
        break;
    }
    this.fixAndSetPosition();
  }
  addCommands(l) {
    this._uiManager.addCommands(l);
  }
  get currentLayer() {
    return this._uiManager.currentLayer;
  }
  setInBackground() {
    this.div.style.zIndex = 0;
  }
  setInForeground() {
    this.div.style.zIndex = Q(this, kc);
  }
  setParent(l) {
    l !== null ? (this.pageIndex = l.pageIndex, this.pageDimensions = l.pageDimensions) : m(this, Jd, j0).call(this), this.parent = l;
  }
  focusin(l) {
    this._focusEventsAllowed && (Q(this, id) ? i(this, id, !1) : this.parent.setSelected(this));
  }
  focusout(l) {
    var Z;
    if (!this._focusEventsAllowed || !this.isAttachedToDOM)
      return;
    const U = l.relatedTarget;
    U != null && U.closest(`#${this.id}`) || (l.preventDefault(), (Z = this.parent) != null && Z.isMultipleSelection || this.commitOrRemove());
  }
  commitOrRemove() {
    this.isEmpty() ? this.remove() : this.commit();
  }
  commit() {
    this.addToAnnotationStorage();
  }
  addToAnnotationStorage() {
    this._uiManager.addToAnnotationStorage(this);
  }
  setAt(l, U, Z, d) {
    const [F, W] = this.parentDimensions;
    [Z, d] = this.screenToPageTranslation(Z, d), this.x = (l + Z) / F, this.y = (U + d) / W, this.fixAndSetPosition();
  }
  translate(l, U) {
    m(this, rW, uR).call(this, this.parentDimensions, l, U);
  }
  translateInPage(l, U) {
    Q(this, zZ) || i(this, zZ, [this.x, this.y]), m(this, rW, uR).call(this, this.pageDimensions, l, U), this.div.scrollIntoView({
      block: "nearest"
    });
  }
  drag(l, U) {
    Q(this, zZ) || i(this, zZ, [this.x, this.y]);
    const [Z, d] = this.parentDimensions;
    if (this.x += l / Z, this.y += U / d, this.parent && (this.x < 0 || this.x > 1 || this.y < 0 || this.y > 1)) {
      const {
        x: t,
        y: N
      } = this.div.getBoundingClientRect();
      this.parent.findNewParent(this, t, N) && (this.x -= Math.floor(this.x), this.y -= Math.floor(this.y));
    }
    let {
      x: F,
      y: W
    } = this;
    const [V, c] = this.getBaseTranslation();
    F += V, W += c, this.div.style.left = `${(100 * F).toFixed(2)}%`, this.div.style.top = `${(100 * W).toFixed(2)}%`, this.div.scrollIntoView({
      block: "nearest"
    });
  }
  get _hasBeenMoved() {
    return !!Q(this, zZ) && (Q(this, zZ)[0] !== this.x || Q(this, zZ)[1] !== this.y);
  }
  getBaseTranslation() {
    const [l, U] = this.parentDimensions, {
      _borderLineWidth: Z
    } = ll, d = Z / l, F = Z / U;
    switch (this.rotation) {
      case 90:
        return [-d, F];
      case 180:
        return [d, F];
      case 270:
        return [d, -F];
      default:
        return [-d, -F];
    }
  }
  get _mustFixPosition() {
    return !0;
  }
  fixAndSetPosition(l = this.rotation) {
    const [U, Z] = this.pageDimensions;
    let {
      x: d,
      y: F,
      width: W,
      height: V
    } = this;
    if (W *= U, V *= Z, d *= U, F *= Z, this._mustFixPosition)
      switch (l) {
        case 0:
          d = Math.max(0, Math.min(U - W, d)), F = Math.max(0, Math.min(Z - V, F));
          break;
        case 90:
          d = Math.max(0, Math.min(U - V, d)), F = Math.min(Z, Math.max(W, F));
          break;
        case 180:
          d = Math.min(U, Math.max(W, d)), F = Math.min(Z, Math.max(V, F));
          break;
        case 270:
          d = Math.min(U, Math.max(V, d)), F = Math.max(0, Math.min(Z - W, F));
          break;
      }
    this.x = d /= U, this.y = F /= Z;
    const [c, t] = this.getBaseTranslation();
    d += c, F += t;
    const {
      style: N
    } = this.div;
    N.left = `${(100 * d).toFixed(2)}%`, N.top = `${(100 * F).toFixed(2)}%`, this.moveInDOM();
  }
  screenToPageTranslation(l, U) {
    var Z;
    return m(Z = ll, KW, yR).call(Z, l, U, this.parentRotation);
  }
  pageTranslationToScreen(l, U) {
    var Z;
    return m(Z = ll, KW, yR).call(Z, l, U, 360 - this.parentRotation);
  }
  get parentScale() {
    return this._uiManager.viewParameters.realScale;
  }
  get parentRotation() {
    return (this._uiManager.viewParameters.rotation + this.pageRotation) % 360;
  }
  get parentDimensions() {
    const {
      parentScale: l,
      pageDimensions: [U, Z]
    } = this, d = U * l, F = Z * l;
    return xl.isCSSRoundSupported ? [Math.round(d), Math.round(F)] : [d, F];
  }
  setDims(l, U) {
    const [Z, d] = this.parentDimensions;
    this.div.style.width = `${(100 * l / Z).toFixed(2)}%`, Q(this, hd) || (this.div.style.height = `${(100 * U / d).toFixed(2)}%`);
  }
  fixDims() {
    const {
      style: l
    } = this.div, {
      height: U,
      width: Z
    } = l, d = Z.endsWith("%"), F = !Q(this, hd) && U.endsWith("%");
    if (d && F)
      return;
    const [W, V] = this.parentDimensions;
    d || (l.width = `${(100 * parseFloat(Z) / W).toFixed(2)}%`), !Q(this, hd) && !F && (l.height = `${(100 * parseFloat(U) / V).toFixed(2)}%`);
  }
  getInitialTranslation() {
    return [0, 0];
  }
  altTextFinish() {
    var l;
    (l = Q(this, zl)) == null || l.finish();
  }
  async addEditToolbar() {
    return Q(this, ul) || Q(this, Md) ? Q(this, ul) : (i(this, ul, new oV(this)), this.div.append(Q(this, ul).render()), Q(this, zl) && Q(this, ul).addAltTextButton(await Q(this, zl).render()), Q(this, ul));
  }
  removeEditToolbar() {
    var l;
    Q(this, ul) && (Q(this, ul).remove(), i(this, ul, null), (l = Q(this, zl)) == null || l.destroy());
  }
  getClientDimensions() {
    return this.div.getBoundingClientRect();
  }
  async addAltTextButton() {
    Q(this, zl) || (UW.initialize(ll._l10nPromise), i(this, zl, new UW(this)), await this.addEditToolbar());
  }
  get altTextData() {
    var l;
    return (l = Q(this, zl)) == null ? void 0 : l.data;
  }
  set altTextData(l) {
    Q(this, zl) && (Q(this, zl).data = l);
  }
  hasAltText() {
    var l;
    return !((l = Q(this, zl)) != null && l.isEmpty());
  }
  render() {
    this.div = document.createElement("div"), this.div.setAttribute("data-editor-rotation", (360 - this.rotation) % 360), this.div.className = this.name, this.div.setAttribute("id", this.id), this.div.tabIndex = Q(this, oF) ? -1 : 0, this._isVisible || this.div.classList.add("hidden"), this.setInForeground(), this.div.addEventListener("focusin", Q(this, DF)), this.div.addEventListener("focusout", Q(this, IF));
    const [l, U] = this.parentDimensions;
    this.parentRotation % 180 !== 0 && (this.div.style.maxWidth = `${(100 * U / l).toFixed(2)}%`, this.div.style.maxHeight = `${(100 * l / U).toFixed(2)}%`);
    const [Z, d] = this.getInitialTranslation();
    return this.translate(Z, d), Vc(this, this.div, ["pointerdown"]), this.div;
  }
  pointerdown(l) {
    const {
      isMac: U
    } = xl.platform;
    if (l.button !== 0 || l.ctrlKey && U) {
      l.preventDefault();
      return;
    }
    if (i(this, id, !0), this._isDraggable) {
      m(this, Ic, Es).call(this, l);
      return;
    }
    m(this, PW, oR).call(this, l);
  }
  moveInDOM() {
    Q(this, SU) && clearTimeout(Q(this, SU)), i(this, SU, setTimeout(() => {
      var l;
      i(this, SU, null), (l = this.parent) == null || l.moveEditorInDOM(this);
    }, 0));
  }
  _setParentAndPosition(l, U, Z) {
    l.changeParent(this), this.x = U, this.y = Z, this.fixAndSetPosition();
  }
  getRect(l, U, Z = this.rotation) {
    const d = this.parentScale, [F, W] = this.pageDimensions, [V, c] = this.pageTranslation, t = l / d, N = U / d, s = this.x * F, b = this.y * W, n = this.width * F, h = this.height * W;
    switch (Z) {
      case 0:
        return [s + t + V, W - b - N - h + c, s + t + n + V, W - b - N + c];
      case 90:
        return [s + N + V, W - b + t + c, s + N + h + V, W - b + t + n + c];
      case 180:
        return [s - t - n + V, W - b + N + c, s - t + V, W - b + N + h + c];
      case 270:
        return [s - N - h + V, W - b - t - n + c, s - N + V, W - b - t + c];
      default:
        throw new Error("Invalid rotation");
    }
  }
  getRectInCurrentCoords(l, U) {
    const [Z, d, F, W] = l, V = F - Z, c = W - d;
    switch (this.rotation) {
      case 0:
        return [Z, U - W, V, c];
      case 90:
        return [Z, U - d, c, V];
      case 180:
        return [F, U - d, V, c];
      case 270:
        return [F, U - W, c, V];
      default:
        throw new Error("Invalid rotation");
    }
  }
  onceAdded() {
  }
  isEmpty() {
    return !1;
  }
  enableEditMode() {
    i(this, Md, !0);
  }
  disableEditMode() {
    i(this, Md, !1);
  }
  isInEditMode() {
    return Q(this, Md);
  }
  shouldGetKeyboardEvents() {
    return Q(this, $U);
  }
  needsToBeRebuilt() {
    return this.div && !this.isAttachedToDOM;
  }
  rebuild() {
    var l, U;
    (l = this.div) == null || l.addEventListener("focusin", Q(this, DF)), (U = this.div) == null || U.addEventListener("focusout", Q(this, IF));
  }
  rotate(l) {
  }
  serialize(l = !1, U = null) {
    f("An editor must be serializable");
  }
  static deserialize(l, U, Z) {
    const d = new this.prototype.constructor({
      parent: U,
      id: U.getNextId(),
      uiManager: Z
    });
    d.rotation = l.rotation;
    const [F, W] = d.pageDimensions, [V, c, t, N] = d.getRectInCurrentCoords(l.rect, W);
    return d.x = V / F, d.y = c / W, d.width = t / F, d.height = N / W, d;
  }
  get hasBeenModified() {
    return !!this.annotationElementId && (this.deleted || this.serialize() !== null);
  }
  remove() {
    if (this.div.removeEventListener("focusin", Q(this, DF)), this.div.removeEventListener("focusout", Q(this, IF)), this.isEmpty() || this.commit(), this.parent ? this.parent.remove(this) : this._uiManager.removeEditor(this), Q(this, SU) && (clearTimeout(Q(this, SU)), i(this, SU, null)), m(this, Jd, j0).call(this), this.removeEditToolbar(), Q(this, _l)) {
      for (const l of Q(this, _l).values())
        clearTimeout(l);
      i(this, _l, null);
    }
    this.parent = null;
  }
  get isResizable() {
    return !1;
  }
  makeResizable() {
    this.isResizable && (m(this, oc, Ds).call(this), Q(this, Gl).classList.remove("hidden"), Vc(this, this.div, ["keydown"]));
  }
  get toolbarPosition() {
    return null;
  }
  keydown(l) {
    if (!this.isResizable || l.target !== this.div || l.key !== "Enter")
      return;
    this._uiManager.setSelected(this), i(this, md, {
      savedX: this.x,
      savedY: this.y,
      savedWidth: this.width,
      savedHeight: this.height
    });
    const U = Q(this, Gl).children;
    if (!Q(this, tU)) {
      i(this, tU, Array.from(U));
      const W = m(this, Ec, Cs).bind(this), V = m(this, Cc, ws).bind(this);
      for (const c of Q(this, tU)) {
        const t = c.getAttribute("data-resizer-name");
        c.setAttribute("role", "spinbutton"), c.addEventListener("keydown", W), c.addEventListener("blur", V), c.addEventListener("focus", m(this, wc, xs).bind(this, t)), ll._l10nPromise.get(`pdfjs-editor-resizer-label-${t}`).then((N) => c.setAttribute("aria-label", N));
      }
    }
    const Z = Q(this, tU)[0];
    let d = 0;
    for (const W of U) {
      if (W === Z)
        break;
      d++;
    }
    const F = (360 - this.rotation + this.parentRotation) % 360 / 90 * (Q(this, tU).length / 4);
    if (F !== d) {
      if (F < d)
        for (let V = 0; V < d - F; V++)
          Q(this, Gl).append(Q(this, Gl).firstChild);
      else if (F > d)
        for (let V = 0; V < F - d; V++)
          Q(this, Gl).firstChild.before(Q(this, Gl).lastChild);
      let W = 0;
      for (const V of U) {
        const t = Q(this, tU)[W++].getAttribute("data-resizer-name");
        ll._l10nPromise.get(`pdfjs-editor-resizer-label-${t}`).then((N) => V.setAttribute("aria-label", N));
      }
    }
    m(this, AW, DR).call(this, 0), i(this, $U, !0), Q(this, Gl).firstChild.focus({
      focusVisible: !0
    }), l.preventDefault(), l.stopImmediatePropagation();
  }
  _resizeWithKeyboard(l, U) {
    Q(this, $U) && m(this, vW, kR).call(this, Q(this, xW), {
      movementX: l,
      movementY: U
    });
  }
  _stopResizingWithKeyboard() {
    m(this, Jd, j0).call(this), this.div.focus();
  }
  select() {
    var l, U;
    if (this.makeResizable(), (l = this.div) == null || l.classList.add("selectedEditor"), !Q(this, ul)) {
      this.addEditToolbar().then(() => {
        var Z, d;
        (Z = this.div) != null && Z.classList.contains("selectedEditor") && ((d = Q(this, ul)) == null || d.show());
      });
      return;
    }
    (U = Q(this, ul)) == null || U.show();
  }
  unselect() {
    var l, U, Z, d;
    (l = Q(this, Gl)) == null || l.classList.add("hidden"), (U = this.div) == null || U.classList.remove("selectedEditor"), (Z = this.div) != null && Z.contains(document.activeElement) && this._uiManager.currentLayer.div.focus({
      preventScroll: !0
    }), (d = Q(this, ul)) == null || d.hide();
  }
  updateParams(l, U) {
  }
  disableEditing() {
  }
  enableEditing() {
  }
  enterInEditMode() {
  }
  getImageForAltText() {
    return null;
  }
  get contentDiv() {
    return this.div;
  }
  get isEditing() {
    return Q(this, jW);
  }
  set isEditing(l) {
    i(this, jW, l), this.parent && (l ? (this.parent.setSelected(this), this.parent.setActiveEditor(this)) : this.parent.setActiveEditor(null));
  }
  setAspectRatio(l, U) {
    i(this, hd, !0);
    const Z = l / U, {
      style: d
    } = this.div;
    d.aspectRatio = Z, d.height = "auto";
  }
  static get MIN_SIZE() {
    return 16;
  }
  static canCreateNewEmptyEditor() {
    return !0;
  }
  get telemetryInitialData() {
    return {
      action: "added"
    };
  }
  get telemetryFinalData() {
    return null;
  }
  _reportTelemetry(l, U = !1) {
    if (U) {
      Q(this, _l) || i(this, _l, /* @__PURE__ */ new Map());
      const {
        action: Z
      } = l;
      let d = Q(this, _l).get(Z);
      d && clearTimeout(d), d = setTimeout(() => {
        this._reportTelemetry(l), Q(this, _l).delete(Z), Q(this, _l).size === 0 && i(this, _l, null);
      }, ll._telemetryTimeout), Q(this, _l).set(Z, d);
      return;
    }
    l.type || (l.type = this.editorType), this._uiManager._eventBus.dispatch("reporttelemetry", {
      source: this,
      details: {
        type: "editing",
        data: l
      }
    });
  }
  show(l = this._isVisible) {
    this.div.classList.toggle("hidden", !l), this._isVisible = l;
  }
  enable() {
    this.div && (this.div.tabIndex = 0), i(this, oF, !1);
  }
  disable() {
    this.div && (this.div.tabIndex = -1), i(this, oF, !0);
  }
  renderAnnotationElement(l) {
    let U = l.container.querySelector(".annotationContent");
    if (!U)
      U = document.createElement("div"), U.classList.add("annotationContent", this.editorType), l.container.prepend(U);
    else if (U.nodeName === "CANVAS") {
      const Z = U;
      U = document.createElement("div"), U.classList.add("annotationContent", this.editorType), Z.before(U);
    }
    return U;
  }
  resetAnnotationElement(l) {
    const {
      firstChild: U
    } = l.container;
    U.nodeName === "DIV" && U.classList.contains("annotationContent") && U.remove();
  }
};
let r = ll;
tU = new WeakMap(), zl = new WeakMap(), oF = new WeakMap(), hd = new WeakMap(), Gl = new WeakMap(), md = new WeakMap(), DF = new WeakMap(), IF = new WeakMap(), ul = new WeakMap(), xW = new WeakMap(), id = new WeakMap(), zZ = new WeakMap(), jW = new WeakMap(), Md = new WeakMap(), $U = new WeakMap(), SU = new WeakMap(), EF = new WeakMap(), CF = new WeakMap(), _l = new WeakMap(), OW = new WeakMap(), kc = new WeakMap(), rW = new WeakSet(), uR = function([l, U], Z, d) {
  [Z, d] = this.screenToPageTranslation(Z, d), this.x += Z / l, this.y += d / U, this.fixAndSetPosition();
}, KW = new WeakSet(), yR = function(l, U, Z) {
  switch (Z) {
    case 90:
      return [U, -l];
    case 180:
      return [-l, -U];
    case 270:
      return [-U, l];
    default:
      return [l, U];
  }
}, gW = new WeakSet(), LR = function(l) {
  switch (l) {
    case 90: {
      const [U, Z] = this.pageDimensions;
      return [0, -U / Z, Z / U, 0];
    }
    case 180:
      return [-1, 0, 0, -1];
    case 270: {
      const [U, Z] = this.pageDimensions;
      return [0, U / Z, -Z / U, 0];
    }
    default:
      return [1, 0, 0, 1];
  }
}, oc = new WeakSet(), Ds = function() {
  if (Q(this, Gl))
    return;
  i(this, Gl, document.createElement("div")), Q(this, Gl).classList.add("resizers");
  const l = this._willKeepAspectRatio ? ["topLeft", "topRight", "bottomRight", "bottomLeft"] : ["topLeft", "topMiddle", "topRight", "middleRight", "bottomRight", "bottomMiddle", "bottomLeft", "middleLeft"];
  for (const U of l) {
    const Z = document.createElement("div");
    Q(this, Gl).append(Z), Z.classList.add("resizer", U), Z.setAttribute("data-resizer-name", U), Z.addEventListener("pointerdown", m(this, Dc, Is).bind(this, U)), Z.addEventListener("contextmenu", jl), Z.tabIndex = -1;
  }
  this.div.prepend(Q(this, Gl));
}, Dc = new WeakSet(), Is = function(l, U) {
  var h;
  U.preventDefault();
  const {
    isMac: Z
  } = xl.platform;
  if (U.button !== 0 || U.ctrlKey && Z)
    return;
  (h = Q(this, zl)) == null || h.toggle(!1);
  const d = m(this, vW, kR).bind(this, l), F = this._isDraggable;
  this._isDraggable = !1;
  const W = {
    passive: !0,
    capture: !0
  };
  this.parent.togglePointerEvents(!1), window.addEventListener("pointermove", d, W), window.addEventListener("contextmenu", jl);
  const V = this.x, c = this.y, t = this.width, N = this.height, s = this.parent.div.style.cursor, b = this.div.style.cursor;
  this.div.style.cursor = this.parent.div.style.cursor = window.getComputedStyle(U.target).cursor;
  const n = () => {
    var M;
    this.parent.togglePointerEvents(!0), (M = Q(this, zl)) == null || M.toggle(!0), this._isDraggable = F, window.removeEventListener("pointerup", n), window.removeEventListener("blur", n), window.removeEventListener("pointermove", d, W), window.removeEventListener("contextmenu", jl), this.parent.div.style.cursor = s, this.div.style.cursor = b, m(this, HW, zR).call(this, V, c, t, N);
  };
  window.addEventListener("pointerup", n), window.addEventListener("blur", n);
}, HW = new WeakSet(), zR = function(l, U, Z, d) {
  const F = this.x, W = this.y, V = this.width, c = this.height;
  F === l && W === U && V === Z && c === d || this.addCommands({
    cmd: () => {
      this.width = V, this.height = c, this.x = F, this.y = W;
      const [t, N] = this.parentDimensions;
      this.setDims(t * V, N * c), this.fixAndSetPosition();
    },
    undo: () => {
      this.width = Z, this.height = d, this.x = l, this.y = U;
      const [t, N] = this.parentDimensions;
      this.setDims(t * Z, N * d), this.fixAndSetPosition();
    },
    mustExec: !0
  });
}, vW = new WeakSet(), kR = function(l, U) {
  const [Z, d] = this.parentDimensions, F = this.x, W = this.y, V = this.width, c = this.height, t = ll.MIN_SIZE / Z, N = ll.MIN_SIZE / d, s = (z) => Math.round(z * 1e4) / 1e4, b = m(this, gW, LR).call(this, this.rotation), n = (z, C) => [b[0] * z + b[2] * C, b[1] * z + b[3] * C], h = m(this, gW, LR).call(this, 360 - this.rotation), M = (z, C) => [h[0] * z + h[2] * C, h[1] * z + h[3] * C];
  let G, J, T = !1, X = !1;
  switch (l) {
    case "topLeft":
      T = !0, G = (z, C) => [0, 0], J = (z, C) => [z, C];
      break;
    case "topMiddle":
      G = (z, C) => [z / 2, 0], J = (z, C) => [z / 2, C];
      break;
    case "topRight":
      T = !0, G = (z, C) => [z, 0], J = (z, C) => [0, C];
      break;
    case "middleRight":
      X = !0, G = (z, C) => [z, C / 2], J = (z, C) => [0, C / 2];
      break;
    case "bottomRight":
      T = !0, G = (z, C) => [z, C], J = (z, C) => [0, 0];
      break;
    case "bottomMiddle":
      G = (z, C) => [z / 2, C], J = (z, C) => [z / 2, 0];
      break;
    case "bottomLeft":
      T = !0, G = (z, C) => [0, C], J = (z, C) => [z, 0];
      break;
    case "middleLeft":
      X = !0, G = (z, C) => [0, C / 2], J = (z, C) => [z, C / 2];
      break;
  }
  const S = G(V, c), e = J(V, c);
  let Y = n(...e);
  const B = s(F + Y[0]), p = s(W + Y[1]);
  let L = 1, E = 1, [y, g] = this.screenToPageTranslation(U.movementX, U.movementY);
  if ([y, g] = M(y / Z, g / d), T) {
    const z = Math.hypot(V, c);
    L = E = Math.max(Math.min(Math.hypot(e[0] - S[0] - y, e[1] - S[1] - g) / z, 1 / V, 1 / c), t / V, N / c);
  } else
    X ? L = Math.max(t, Math.min(1, Math.abs(e[0] - S[0] - y))) / V : E = Math.max(N, Math.min(1, Math.abs(e[1] - S[1] - g))) / c;
  const x = s(V * L), H = s(c * E);
  Y = n(...J(x, H));
  const v = B - Y[0], q = p - Y[1];
  this.width = x, this.height = H, this.x = v, this.y = q, this.setDims(Z * x, d * H), this.fixAndSetPosition();
}, PW = new WeakSet(), oR = function(l) {
  const {
    isMac: U
  } = xl.platform;
  l.ctrlKey && !U || l.shiftKey || l.metaKey && U ? this.parent.toggleSelected(this) : this.parent.setSelected(this);
}, Ic = new WeakSet(), Es = function(l) {
  const U = this._uiManager.isSelected(this);
  this._uiManager.setUpDragSession();
  let Z, d;
  U && (this.div.classList.add("moving"), Z = {
    passive: !0,
    capture: !0
  }, i(this, EF, l.clientX), i(this, CF, l.clientY), d = (W) => {
    const {
      clientX: V,
      clientY: c
    } = W, [t, N] = this.screenToPageTranslation(V - Q(this, EF), c - Q(this, CF));
    i(this, EF, V), i(this, CF, c), this._uiManager.dragSelectedEditors(t, N);
  }, window.addEventListener("pointermove", d, Z));
  const F = () => {
    window.removeEventListener("pointerup", F), window.removeEventListener("blur", F), U && (this.div.classList.remove("moving"), window.removeEventListener("pointermove", d, Z)), i(this, id, !1), this._uiManager.endDragSession() || m(this, PW, oR).call(this, l);
  };
  window.addEventListener("pointerup", F), window.addEventListener("blur", F);
}, Ec = new WeakSet(), Cs = function(l) {
  ll._resizerKeyboardManager.exec(this, l);
}, Cc = new WeakSet(), ws = function(l) {
  var U;
  Q(this, $U) && ((U = l.relatedTarget) == null ? void 0 : U.parentNode) !== Q(this, Gl) && m(this, Jd, j0).call(this);
}, wc = new WeakSet(), xs = function(l) {
  i(this, xW, Q(this, $U) ? l : "");
}, AW = new WeakSet(), DR = function(l) {
  if (Q(this, tU))
    for (const U of Q(this, tU))
      U.tabIndex = l;
}, Jd = new WeakSet(), j0 = function() {
  if (i(this, $U, !1), m(this, AW, DR).call(this, -1), Q(this, md)) {
    const {
      savedX: l,
      savedY: U,
      savedWidth: Z,
      savedHeight: d
    } = Q(this, md);
    m(this, HW, zR).call(this, l, U, Z, d), i(this, md, null);
  }
}, a(r, KW), I(r, "_borderLineWidth", -1), I(r, "_colorManager", new IV()), I(r, "_zIndex", 1), I(r, "_telemetryTimeout", 1e3);
class oa extends r {
  constructor(l) {
    super(l), this.annotationElementId = l.annotationElementId, this.deleted = !0;
  }
  serialize() {
    return {
      id: this.annotationElementId,
      deleted: !0,
      pageIndex: this.pageIndex
    };
  }
}
const ON = 3285377520, Al = 4294901760, mU = 65535;
class js {
  constructor(l) {
    this.h1 = l ? l & 4294967295 : ON, this.h2 = l ? l & 4294967295 : ON;
  }
  update(l) {
    let U, Z;
    if (typeof l == "string") {
      U = new Uint8Array(l.length * 2), Z = 0;
      for (let M = 0, G = l.length; M < G; M++) {
        const J = l.charCodeAt(M);
        J <= 255 ? U[Z++] = J : (U[Z++] = J >>> 8, U[Z++] = J & 255);
      }
    } else if (ArrayBuffer.isView(l))
      U = l.slice(), Z = U.byteLength;
    else
      throw new Error("Invalid data format, must be a string or TypedArray.");
    const d = Z >> 2, F = Z - d * 4, W = new Uint32Array(U.buffer, 0, d);
    let V = 0, c = 0, t = this.h1, N = this.h2;
    const s = 3432918353, b = 461845907, n = s & mU, h = b & mU;
    for (let M = 0; M < d; M++)
      M & 1 ? (V = W[M], V = V * s & Al | V * n & mU, V = V << 15 | V >>> 17, V = V * b & Al | V * h & mU, t ^= V, t = t << 13 | t >>> 19, t = t * 5 + 3864292196) : (c = W[M], c = c * s & Al | c * n & mU, c = c << 15 | c >>> 17, c = c * b & Al | c * h & mU, N ^= c, N = N << 13 | N >>> 19, N = N * 5 + 3864292196);
    switch (V = 0, F) {
      case 3:
        V ^= U[d * 4 + 2] << 16;
      case 2:
        V ^= U[d * 4 + 1] << 8;
      case 1:
        V ^= U[d * 4], V = V * s & Al | V * n & mU, V = V << 15 | V >>> 17, V = V * b & Al | V * h & mU, d & 1 ? t ^= V : N ^= V;
    }
    this.h1 = t, this.h2 = N;
  }
  hexdigest() {
    let l = this.h1, U = this.h2;
    return l ^= U >>> 1, l = l * 3981806797 & Al | l * 36045 & mU, U = U * 4283543511 & Al | ((U << 16 | l >>> 16) * 2950163797 & Al) >>> 16, l ^= U >>> 1, l = l * 444984403 & Al | l * 60499 & mU, U = U * 3301882366 & Al | ((U << 16 | l >>> 16) * 3120437893 & Al) >>> 16, l ^= U >>> 1, (l >>> 0).toString(16).padStart(8, "0") + (U >>> 0).toString(16).padStart(8, "0");
  }
}
const IR = Object.freeze({
  map: null,
  hash: "",
  transfer: void 0
});
var Gd, Tl, xc, Os;
class SN {
  constructor() {
    a(this, xc);
    a(this, Gd, !1);
    a(this, Tl, /* @__PURE__ */ new Map());
    this.onSetModified = null, this.onResetModified = null, this.onAnnotationEditor = null;
  }
  getValue(l, U) {
    const Z = Q(this, Tl).get(l);
    return Z === void 0 ? U : Object.assign(U, Z);
  }
  getRawValue(l) {
    return Q(this, Tl).get(l);
  }
  remove(l) {
    if (Q(this, Tl).delete(l), Q(this, Tl).size === 0 && this.resetModified(), typeof this.onAnnotationEditor == "function") {
      for (const U of Q(this, Tl).values())
        if (U instanceof r)
          return;
      this.onAnnotationEditor(null);
    }
  }
  setValue(l, U) {
    const Z = Q(this, Tl).get(l);
    let d = !1;
    if (Z !== void 0)
      for (const [F, W] of Object.entries(U))
        Z[F] !== W && (d = !0, Z[F] = W);
    else
      d = !0, Q(this, Tl).set(l, U);
    d && m(this, xc, Os).call(this), U instanceof r && typeof this.onAnnotationEditor == "function" && this.onAnnotationEditor(U.constructor._type);
  }
  has(l) {
    return Q(this, Tl).has(l);
  }
  getAll() {
    return Q(this, Tl).size > 0 ? iN(Q(this, Tl)) : null;
  }
  setAll(l) {
    for (const [U, Z] of Object.entries(l))
      this.setValue(U, Z);
  }
  get size() {
    return Q(this, Tl).size;
  }
  resetModified() {
    Q(this, Gd) && (i(this, Gd, !1), typeof this.onResetModified == "function" && this.onResetModified());
  }
  get print() {
    return new rs(this);
  }
  get serializable() {
    if (Q(this, Tl).size === 0)
      return IR;
    const l = /* @__PURE__ */ new Map(), U = new js(), Z = [], d = /* @__PURE__ */ Object.create(null);
    let F = !1;
    for (const [W, V] of Q(this, Tl)) {
      const c = V instanceof r ? V.serialize(!1, d) : V;
      c && (l.set(W, c), U.update(`${W}:${JSON.stringify(c)}`), F || (F = !!c.bitmap));
    }
    if (F)
      for (const W of l.values())
        W.bitmap && Z.push(W.bitmap);
    return l.size > 0 ? {
      map: l,
      hash: U.hexdigest(),
      transfer: Z
    } : IR;
  }
  get editorStats() {
    let l = null;
    const U = /* @__PURE__ */ new Map();
    for (const Z of Q(this, Tl).values()) {
      if (!(Z instanceof r))
        continue;
      const d = Z.telemetryFinalData;
      if (!d)
        continue;
      const {
        type: F
      } = d;
      U.has(F) || U.set(F, Object.getPrototypeOf(Z).constructor), l || (l = /* @__PURE__ */ Object.create(null));
      const W = l[F] || (l[F] = /* @__PURE__ */ new Map());
      for (const [V, c] of Object.entries(d)) {
        if (V === "type")
          continue;
        let t = W.get(V);
        t || (t = /* @__PURE__ */ new Map(), W.set(V, t));
        const N = t.get(c) ?? 0;
        t.set(c, N + 1);
      }
    }
    for (const [Z, d] of U)
      l[Z] = d.computeTelemetryFinalData(l[Z]);
    return l;
  }
}
Gd = new WeakMap(), Tl = new WeakMap(), xc = new WeakSet(), Os = function() {
  Q(this, Gd) || (i(this, Gd, !0), typeof this.onSetModified == "function" && this.onSetModified());
};
var fW;
class rs extends SN {
  constructor(U) {
    super();
    a(this, fW, void 0);
    const {
      map: Z,
      hash: d,
      transfer: F
    } = U.serializable, W = structuredClone(Z, F ? {
      transfer: F
    } : null);
    i(this, fW, {
      map: W,
      hash: d,
      transfer: F
    });
  }
  get print() {
    f("Should not call PrintAnnotationStorage.print");
  }
  get serializable() {
    return Q(this, fW);
  }
}
fW = new WeakMap();
var wF;
class Da {
  constructor({
    ownerDocument: l = globalThis.document,
    styleElement: U = null
  }) {
    a(this, wF, /* @__PURE__ */ new Set());
    this._document = l, this.nativeFontFaces = /* @__PURE__ */ new Set(), this.styleElement = null, this.loadingRequests = [], this.loadTestFontId = 0;
  }
  addNativeFontFace(l) {
    this.nativeFontFaces.add(l), this._document.fonts.add(l);
  }
  removeNativeFontFace(l) {
    this.nativeFontFaces.delete(l), this._document.fonts.delete(l);
  }
  insertRule(l) {
    this.styleElement || (this.styleElement = this._document.createElement("style"), this._document.documentElement.getElementsByTagName("head")[0].append(this.styleElement));
    const U = this.styleElement.sheet;
    U.insertRule(l, U.cssRules.length);
  }
  clear() {
    for (const l of this.nativeFontFaces)
      this._document.fonts.delete(l);
    this.nativeFontFaces.clear(), Q(this, wF).clear(), this.styleElement && (this.styleElement.remove(), this.styleElement = null);
  }
  async loadSystemFont({
    systemFontInfo: l,
    _inspectFont: U
  }) {
    if (!(!l || Q(this, wF).has(l.loadedName))) {
      if (sl(!this.disableFontFace, "loadSystemFont shouldn't be called when `disableFontFace` is set."), this.isFontLoadingAPISupported) {
        const {
          loadedName: Z,
          src: d,
          style: F
        } = l, W = new FontFace(Z, d, F);
        this.addNativeFontFace(W);
        try {
          await W.load(), Q(this, wF).add(Z), U == null || U(l);
        } catch {
          w(`Cannot load system font: ${l.baseFontName}, installing it could help to improve PDF rendering.`), this.removeNativeFontFace(W);
        }
        return;
      }
      f("Not implemented: loadSystemFont without the Font Loading API.");
    }
  }
  async bind(l) {
    if (l.attached || l.missingFile && !l.systemFontInfo)
      return;
    if (l.attached = !0, l.systemFontInfo) {
      await this.loadSystemFont(l);
      return;
    }
    if (this.isFontLoadingAPISupported) {
      const Z = l.createNativeFontFace();
      if (Z) {
        this.addNativeFontFace(Z);
        try {
          await Z.loaded;
        } catch (d) {
          throw w(`Failed to load font '${Z.family}': '${d}'.`), l.disableFontFace = !0, d;
        }
      }
      return;
    }
    const U = l.createFontFaceRule();
    if (U) {
      if (this.insertRule(U), this.isSyncFontLoadingSupported)
        return;
      await new Promise((Z) => {
        const d = this._queueLoadingCallback(Z);
        this._prepareFontLoadEvent(l, d);
      });
    }
  }
  get isFontLoadingAPISupported() {
    var U;
    const l = !!((U = this._document) != null && U.fonts);
    return K(this, "isFontLoadingAPISupported", l);
  }
  get isSyncFontLoadingSupported() {
    let l = !1;
    return (yl || typeof navigator < "u" && typeof (navigator == null ? void 0 : navigator.userAgent) == "string" && /Mozilla\/5.0.*?rv:\d+.*? Gecko/.test(navigator.userAgent)) && (l = !0), K(this, "isSyncFontLoadingSupported", l);
  }
  _queueLoadingCallback(l) {
    function U() {
      for (sl(!d.done, "completeRequest() cannot be called twice."), d.done = !0; Z.length > 0 && Z[0].done; ) {
        const F = Z.shift();
        setTimeout(F.callback, 0);
      }
    }
    const {
      loadingRequests: Z
    } = this, d = {
      done: !1,
      complete: U,
      callback: l
    };
    return Z.push(d), d;
  }
  get _loadTestFont() {
    const l = atob("T1RUTwALAIAAAwAwQ0ZGIDHtZg4AAAOYAAAAgUZGVE1lkzZwAAAEHAAAABxHREVGABQAFQAABDgAAAAeT1MvMlYNYwkAAAEgAAAAYGNtYXABDQLUAAACNAAAAUJoZWFk/xVFDQAAALwAAAA2aGhlYQdkA+oAAAD0AAAAJGhtdHgD6AAAAAAEWAAAAAZtYXhwAAJQAAAAARgAAAAGbmFtZVjmdH4AAAGAAAAAsXBvc3T/hgAzAAADeAAAACAAAQAAAAEAALZRFsRfDzz1AAsD6AAAAADOBOTLAAAAAM4KHDwAAAAAA+gDIQAAAAgAAgAAAAAAAAABAAADIQAAAFoD6AAAAAAD6AABAAAAAAAAAAAAAAAAAAAAAQAAUAAAAgAAAAQD6AH0AAUAAAKKArwAAACMAooCvAAAAeAAMQECAAACAAYJAAAAAAAAAAAAAQAAAAAAAAAAAAAAAFBmRWQAwAAuAC4DIP84AFoDIQAAAAAAAQAAAAAAAAAAACAAIAABAAAADgCuAAEAAAAAAAAAAQAAAAEAAAAAAAEAAQAAAAEAAAAAAAIAAQAAAAEAAAAAAAMAAQAAAAEAAAAAAAQAAQAAAAEAAAAAAAUAAQAAAAEAAAAAAAYAAQAAAAMAAQQJAAAAAgABAAMAAQQJAAEAAgABAAMAAQQJAAIAAgABAAMAAQQJAAMAAgABAAMAAQQJAAQAAgABAAMAAQQJAAUAAgABAAMAAQQJAAYAAgABWABYAAAAAAAAAwAAAAMAAAAcAAEAAAAAADwAAwABAAAAHAAEACAAAAAEAAQAAQAAAC7//wAAAC7////TAAEAAAAAAAABBgAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMAAAAAAAD/gwAyAAAAAQAAAAAAAAAAAAAAAAAAAAABAAQEAAEBAQJYAAEBASH4DwD4GwHEAvgcA/gXBIwMAYuL+nz5tQXkD5j3CBLnEQACAQEBIVhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYAAABAQAADwACAQEEE/t3Dov6fAH6fAT+fPp8+nwHDosMCvm1Cvm1DAz6fBQAAAAAAAABAAAAAMmJbzEAAAAAzgTjFQAAAADOBOQpAAEAAAAAAAAADAAUAAQAAAABAAAAAgABAAAAAAAAAAAD6AAAAAAAAA==");
    return K(this, "_loadTestFont", l);
  }
  _prepareFontLoadEvent(l, U) {
    function Z(S, e) {
      return S.charCodeAt(e) << 24 | S.charCodeAt(e + 1) << 16 | S.charCodeAt(e + 2) << 8 | S.charCodeAt(e + 3) & 255;
    }
    function d(S, e, Y, B) {
      const p = S.substring(0, e), L = S.substring(e + Y);
      return p + B + L;
    }
    let F, W;
    const V = this._document.createElement("canvas");
    V.width = 1, V.height = 1;
    const c = V.getContext("2d");
    let t = 0;
    function N(S, e) {
      if (++t > 30) {
        w("Load test font never loaded."), e();
        return;
      }
      if (c.font = "30px " + S, c.fillText(".", 0, 20), c.getImageData(0, 0, 1, 1).data[3] > 0) {
        e();
        return;
      }
      setTimeout(N.bind(null, S, e));
    }
    const s = `lt${Date.now()}${this.loadTestFontId++}`;
    let b = this._loadTestFont;
    b = d(b, 976, s.length, s);
    const h = 16, M = 1482184792;
    let G = Z(b, h);
    for (F = 0, W = s.length - 3; F < W; F += 4)
      G = G - M + Z(s, F) | 0;
    F < s.length && (G = G - M + Z(s + "XXX", F) | 0), b = d(b, h, 4, ia(G));
    const J = `url(data:font/opentype;base64,${btoa(b)});`, T = `@font-face {font-family:"${s}";src:${J}}`;
    this.insertRule(T);
    const X = this._document.createElement("div");
    X.style.visibility = "hidden", X.style.width = X.style.height = "10px", X.style.position = "absolute", X.style.top = X.style.left = "0px";
    for (const S of [l.loadedName, s]) {
      const e = this._document.createElement("span");
      e.textContent = "Hi", e.style.fontFamily = S, X.append(e);
    }
    this._document.body.append(X), N(s, () => {
      X.remove(), U.complete();
    });
  }
}
wF = new WeakMap();
class Ia {
  constructor(l, {
    disableFontFace: U = !1,
    inspectFont: Z = null
  }) {
    this.compiledGlyphs = /* @__PURE__ */ Object.create(null);
    for (const d in l)
      this[d] = l[d];
    this.disableFontFace = U === !0, this._inspectFont = Z;
  }
  createNativeFontFace() {
    var U;
    if (!this.data || this.disableFontFace)
      return null;
    let l;
    if (!this.cssFontInfo)
      l = new FontFace(this.loadedName, this.data, {});
    else {
      const Z = {
        weight: this.cssFontInfo.fontWeight
      };
      this.cssFontInfo.italicAngle && (Z.style = `oblique ${this.cssFontInfo.italicAngle}deg`), l = new FontFace(this.cssFontInfo.fontFamily, this.data, Z);
    }
    return (U = this._inspectFont) == null || U.call(this, this), l;
  }
  createFontFaceRule() {
    var d;
    if (!this.data || this.disableFontFace)
      return null;
    const l = bs(this.data), U = `url(data:${this.mimetype};base64,${btoa(l)});`;
    let Z;
    if (!this.cssFontInfo)
      Z = `@font-face {font-family:"${this.loadedName}";src:${U}}`;
    else {
      let F = `font-weight: ${this.cssFontInfo.fontWeight};`;
      this.cssFontInfo.italicAngle && (F += `font-style: oblique ${this.cssFontInfo.italicAngle}deg;`), Z = `@font-face {font-family:"${this.cssFontInfo.fontFamily}";${F}src:${U}}`;
    }
    return (d = this._inspectFont) == null || d.call(this, this, U), Z;
  }
  getPathGenerator(l, U) {
    if (this.compiledGlyphs[U] !== void 0)
      return this.compiledGlyphs[U];
    let Z;
    try {
      Z = l.get(this.loadedName + "_path_" + U);
    } catch (F) {
      w(`getPathGenerator - ignoring character: "${F}".`);
    }
    if (!Array.isArray(Z) || Z.length === 0)
      return this.compiledGlyphs[U] = function(F, W) {
      };
    const d = [];
    for (let F = 0, W = Z.length; F < W; )
      switch (Z[F++]) {
        case CU.BEZIER_CURVE_TO:
          {
            const [V, c, t, N, s, b] = Z.slice(F, F + 6);
            d.push((n) => n.bezierCurveTo(V, c, t, N, s, b)), F += 6;
          }
          break;
        case CU.MOVE_TO:
          {
            const [V, c] = Z.slice(F, F + 2);
            d.push((t) => t.moveTo(V, c)), F += 2;
          }
          break;
        case CU.LINE_TO:
          {
            const [V, c] = Z.slice(F, F + 2);
            d.push((t) => t.lineTo(V, c)), F += 2;
          }
          break;
        case CU.QUADRATIC_CURVE_TO:
          {
            const [V, c, t, N] = Z.slice(F, F + 4);
            d.push((s) => s.quadraticCurveTo(V, c, t, N)), F += 4;
          }
          break;
        case CU.RESTORE:
          d.push((V) => V.restore());
          break;
        case CU.SAVE:
          d.push((V) => V.save());
          break;
        case CU.SCALE:
          sl(d.length === 2, "Scale command is only valid at the third position.");
          break;
        case CU.TRANSFORM:
          {
            const [V, c, t, N, s, b] = Z.slice(F, F + 6);
            d.push((n) => n.transform(V, c, t, N, s, b)), F += 6;
          }
          break;
        case CU.TRANSLATE:
          {
            const [V, c] = Z.slice(F, F + 2);
            d.push((t) => t.translate(V, c)), F += 2;
          }
          break;
      }
    return this.compiledGlyphs[U] = function(W, V) {
      d[0](W), d[1](W), W.scale(V, -V);
      for (let c = 2, t = d.length; c < t; c++)
        d[c](W);
    };
  }
}
if (yl) {
  var ER = Promise.withResolvers(), ZW = null;
  (async () => {
    const l = await import(
      /*webpackIgnore: true*/
      "./__vite-browser-external-2447137e.mjs"
    ), U = await import(
      /*webpackIgnore: true*/
      "./__vite-browser-external-2447137e.mjs"
    ), Z = await import(
      /*webpackIgnore: true*/
      "./__vite-browser-external-2447137e.mjs"
    ), d = await import(
      /*webpackIgnore: true*/
      "./__vite-browser-external-2447137e.mjs"
    );
    let F, W;
    return new Map(Object.entries({
      fs: l,
      http: U,
      https: Z,
      url: d,
      canvas: F,
      path2d: W
    }));
  })().then((l) => {
    ZW = l, ER.resolve();
  }, (l) => {
    w(`loadPackages: ${l}`), ZW = /* @__PURE__ */ new Map(), ER.resolve();
  });
}
class EU {
  static get promise() {
    return ER.promise;
  }
  static get(l) {
    return ZW == null ? void 0 : ZW.get(l);
  }
}
const Ks = function(R) {
  return EU.get("fs").promises.readFile(R).then((U) => new Uint8Array(U));
};
class Ea extends Pt {
}
class Ca extends At {
  _createCanvas(l, U) {
    return EU.get("canvas").createCanvas(l, U);
  }
}
class wa extends ft {
  _fetchData(l, U) {
    return Ks(l).then((Z) => ({
      cMapData: Z,
      compressionType: U
    }));
  }
}
class xa extends _t {
  _fetchData(l) {
    return Ks(l);
  }
}
const Il = {
  FILL: "Fill",
  STROKE: "Stroke",
  SHADING: "Shading"
};
function CR(R, l) {
  if (!l)
    return;
  const U = l[2] - l[0], Z = l[3] - l[1], d = new Path2D();
  d.rect(l[0], l[1], U, Z), R.clip(d);
}
class GV {
  constructor() {
    this.constructor === GV && f("Cannot initialize BaseShadingPattern.");
  }
  getPattern() {
    f("Abstract method `getPattern` called.");
  }
}
class ja extends GV {
  constructor(l) {
    super(), this._type = l[1], this._bbox = l[2], this._colorStops = l[3], this._p0 = l[4], this._p1 = l[5], this._r0 = l[6], this._r1 = l[7], this.matrix = null;
  }
  _createGradient(l) {
    let U;
    this._type === "axial" ? U = l.createLinearGradient(this._p0[0], this._p0[1], this._p1[0], this._p1[1]) : this._type === "radial" && (U = l.createRadialGradient(this._p0[0], this._p0[1], this._r0, this._p1[0], this._p1[1], this._r1));
    for (const Z of this._colorStops)
      U.addColorStop(Z[0], Z[1]);
    return U;
  }
  getPattern(l, U, Z, d) {
    let F;
    if (d === Il.STROKE || d === Il.FILL) {
      const W = U.current.getClippedPathBoundingBox(d, _(l)) || [0, 0, 0, 0], V = Math.ceil(W[2] - W[0]) || 1, c = Math.ceil(W[3] - W[1]) || 1, t = U.cachedCanvases.getCanvas("pattern", V, c, !0), N = t.context;
      N.clearRect(0, 0, N.canvas.width, N.canvas.height), N.beginPath(), N.rect(0, 0, N.canvas.width, N.canvas.height), N.translate(-W[0], -W[1]), Z = u.transform(Z, [1, 0, 0, 1, W[0], W[1]]), N.transform(...U.baseTransform), this.matrix && N.transform(...this.matrix), CR(N, this._bbox), N.fillStyle = this._createGradient(N), N.fill(), F = l.createPattern(t.canvas, "no-repeat");
      const s = new DOMMatrix(Z);
      F.setTransform(s);
    } else
      CR(l, this._bbox), F = this._createGradient(l);
    return F;
  }
}
function cR(R, l, U, Z, d, F, W, V) {
  const c = l.coords, t = l.colors, N = R.data, s = R.width * 4;
  let b;
  c[U + 1] > c[Z + 1] && (b = U, U = Z, Z = b, b = F, F = W, W = b), c[Z + 1] > c[d + 1] && (b = Z, Z = d, d = b, b = W, W = V, V = b), c[U + 1] > c[Z + 1] && (b = U, U = Z, Z = b, b = F, F = W, W = b);
  const n = (c[U] + l.offsetX) * l.scaleX, h = (c[U + 1] + l.offsetY) * l.scaleY, M = (c[Z] + l.offsetX) * l.scaleX, G = (c[Z + 1] + l.offsetY) * l.scaleY, J = (c[d] + l.offsetX) * l.scaleX, T = (c[d + 1] + l.offsetY) * l.scaleY;
  if (h >= T)
    return;
  const X = t[F], S = t[F + 1], e = t[F + 2], Y = t[W], B = t[W + 1], p = t[W + 2], L = t[V], E = t[V + 1], y = t[V + 2], g = Math.round(h), x = Math.round(T);
  let H, v, q, z, C, RF, XV, NF;
  for (let Ol = g; Ol <= x; Ol++) {
    if (Ol < G) {
      const $ = Ol < h ? 0 : (h - Ol) / (h - G);
      H = n - (n - M) * $, v = X - (X - Y) * $, q = S - (S - B) * $, z = e - (e - p) * $;
    } else {
      let $;
      Ol > T ? $ = 1 : G === T ? $ = 0 : $ = (G - Ol) / (G - T), H = M - (M - J) * $, v = Y - (Y - L) * $, q = B - (B - E) * $, z = p - (p - y) * $;
    }
    let hl;
    Ol < h ? hl = 0 : Ol > T ? hl = 1 : hl = (h - Ol) / (h - T), C = n - (n - J) * hl, RF = X - (X - L) * hl, XV = S - (S - E) * hl, NF = e - (e - y) * hl;
    const mZ = Math.round(Math.min(H, C)), lR = Math.round(Math.max(H, C));
    let iZ = s * Ol + mZ * 4;
    for (let $ = mZ; $ <= lR; $++)
      hl = (H - $) / (H - C), hl < 0 ? hl = 0 : hl > 1 && (hl = 1), N[iZ++] = v - (v - RF) * hl | 0, N[iZ++] = q - (q - XV) * hl | 0, N[iZ++] = z - (z - NF) * hl | 0, N[iZ++] = 255;
  }
}
function Oa(R, l, U) {
  const Z = l.coords, d = l.colors;
  let F, W;
  switch (l.type) {
    case "lattice":
      const V = l.verticesPerRow, c = Math.floor(Z.length / V) - 1, t = V - 1;
      for (F = 0; F < c; F++) {
        let N = F * V;
        for (let s = 0; s < t; s++, N++)
          cR(R, U, Z[N], Z[N + 1], Z[N + V], d[N], d[N + 1], d[N + V]), cR(R, U, Z[N + V + 1], Z[N + 1], Z[N + V], d[N + V + 1], d[N + 1], d[N + V]);
      }
      break;
    case "triangles":
      for (F = 0, W = Z.length; F < W; F += 3)
        cR(R, U, Z[F], Z[F + 1], Z[F + 2], d[F], d[F + 1], d[F + 2]);
      break;
    default:
      throw new Error("illegal figure");
  }
}
class ra extends GV {
  constructor(l) {
    super(), this._coords = l[2], this._colors = l[3], this._figures = l[4], this._bounds = l[5], this._bbox = l[7], this._background = l[8], this.matrix = null;
  }
  _createMeshCanvas(l, U, Z) {
    const V = Math.floor(this._bounds[0]), c = Math.floor(this._bounds[1]), t = Math.ceil(this._bounds[2]) - V, N = Math.ceil(this._bounds[3]) - c, s = Math.min(Math.ceil(Math.abs(t * l[0] * 1.1)), 3e3), b = Math.min(Math.ceil(Math.abs(N * l[1] * 1.1)), 3e3), n = t / s, h = N / b, M = {
      coords: this._coords,
      colors: this._colors,
      offsetX: -V,
      offsetY: -c,
      scaleX: 1 / n,
      scaleY: 1 / h
    }, G = s + 2 * 2, J = b + 2 * 2, T = Z.getCanvas("mesh", G, J, !1), X = T.context, S = X.createImageData(s, b);
    if (U) {
      const Y = S.data;
      for (let B = 0, p = Y.length; B < p; B += 4)
        Y[B] = U[0], Y[B + 1] = U[1], Y[B + 2] = U[2], Y[B + 3] = 255;
    }
    for (const Y of this._figures)
      Oa(S, Y, M);
    return X.putImageData(S, 2, 2), {
      canvas: T.canvas,
      offsetX: V - 2 * n,
      offsetY: c - 2 * h,
      scaleX: n,
      scaleY: h
    };
  }
  getPattern(l, U, Z, d) {
    CR(l, this._bbox);
    let F;
    if (d === Il.SHADING)
      F = u.singularValueDecompose2dScale(_(l));
    else if (F = u.singularValueDecompose2dScale(U.baseTransform), this.matrix) {
      const V = u.singularValueDecompose2dScale(this.matrix);
      F = [F[0] * V[0], F[1] * V[1]];
    }
    const W = this._createMeshCanvas(F, d === Il.SHADING ? null : this._background, U.cachedCanvases);
    return d !== Il.SHADING && (l.setTransform(...U.baseTransform), this.matrix && l.transform(...this.matrix)), l.translate(W.offsetX, W.offsetY), l.scale(W.scaleX, W.scaleY), l.createPattern(W.canvas, "no-repeat");
  }
}
class Ka extends GV {
  getPattern() {
    return "hotpink";
  }
}
function ga(R) {
  switch (R[0]) {
    case "RadialAxial":
      return new ja(R);
    case "Mesh":
      return new ra(R);
    case "Dummy":
      return new Ka();
  }
  throw new Error(`Unknown IR type: ${R[0]}`);
}
const rN = {
  COLORED: 1,
  UNCOLORED: 2
}, zN = class {
  constructor(l, U, Z, d, F) {
    this.operatorList = l[2], this.matrix = l[3], this.bbox = l[4], this.xstep = l[5], this.ystep = l[6], this.paintType = l[7], this.tilingType = l[8], this.color = U, this.ctx = Z, this.canvasGraphicsFactory = d, this.baseTransform = F;
  }
  createPatternCanvas(l) {
    const U = this.operatorList, Z = this.bbox, d = this.xstep, F = this.ystep, W = this.paintType, V = this.tilingType, c = this.color, t = this.canvasGraphicsFactory;
    gt("TilingType: " + V);
    const N = Z[0], s = Z[1], b = Z[2], n = Z[3], h = u.singularValueDecompose2dScale(this.matrix), M = u.singularValueDecompose2dScale(this.baseTransform), G = [h[0] * M[0], h[1] * M[1]], J = this.getSizeAndScale(d, this.ctx.canvas.width, G[0]), T = this.getSizeAndScale(F, this.ctx.canvas.height, G[1]), X = l.cachedCanvases.getCanvas("pattern", J.size, T.size, !0), S = X.context, e = t.createCanvasGraphics(S);
    e.groupLevel = l.groupLevel, this.setFillAndStrokeStyleToContext(e, W, c);
    let Y = N, B = s, p = b, L = n;
    return N < 0 && (Y = 0, p += Math.abs(N)), s < 0 && (B = 0, L += Math.abs(s)), S.translate(-(J.scale * Y), -(T.scale * B)), e.transform(J.scale, 0, 0, T.scale, 0, 0), S.save(), this.clipBbox(e, Y, B, p, L), e.baseTransform = _(e.ctx), e.executeOperatorList(U), e.endDrawing(), {
      canvas: X.canvas,
      scaleX: J.scale,
      scaleY: T.scale,
      offsetX: Y,
      offsetY: B
    };
  }
  getSizeAndScale(l, U, Z) {
    l = Math.abs(l);
    const d = Math.max(zN.MAX_PATTERN_SIZE, U);
    let F = Math.ceil(l * Z);
    return F >= d ? F = d : Z = F / l, {
      scale: Z,
      size: F
    };
  }
  clipBbox(l, U, Z, d, F) {
    const W = d - U, V = F - Z;
    l.ctx.rect(U, Z, W, V), l.current.updateRectMinMax(_(l.ctx), [U, Z, d, F]), l.clip(), l.endPath();
  }
  setFillAndStrokeStyleToContext(l, U, Z) {
    const d = l.ctx, F = l.current;
    switch (U) {
      case rN.COLORED:
        const W = this.ctx;
        d.fillStyle = W.fillStyle, d.strokeStyle = W.strokeStyle, F.fillColor = W.fillStyle, F.strokeColor = W.strokeStyle;
        break;
      case rN.UNCOLORED:
        const V = u.makeHexColor(Z[0], Z[1], Z[2]);
        d.fillStyle = V, d.strokeStyle = V, F.fillColor = V, F.strokeColor = V;
        break;
      default:
        throw new ma(`Unsupported paint type: ${U}`);
    }
  }
  getPattern(l, U, Z, d) {
    let F = Z;
    d !== Il.SHADING && (F = u.transform(F, U.baseTransform), this.matrix && (F = u.transform(F, this.matrix)));
    const W = this.createPatternCanvas(U);
    let V = new DOMMatrix(F);
    V = V.translate(W.offsetX, W.offsetY), V = V.scale(1 / W.scaleX, 1 / W.scaleY);
    const c = l.createPattern(W.canvas, "repeat");
    return c.setTransform(V), c;
  }
};
let wV = zN;
I(wV, "MAX_PATTERN_SIZE", 3e3);
function Ha({
  src: R,
  srcPos: l = 0,
  dest: U,
  width: Z,
  height: d,
  nonBlackColor: F = 4294967295,
  inverseDecode: W = !1
}) {
  const V = xl.isLittleEndian ? 4278190080 : 255, [c, t] = W ? [F, V] : [V, F], N = Z >> 3, s = Z & 7, b = R.length;
  U = new Uint32Array(U.buffer);
  let n = 0;
  for (let h = 0; h < d; h++) {
    for (const G = l + N; l < G; l++) {
      const J = l < b ? R[l] : 255;
      U[n++] = J & 128 ? t : c, U[n++] = J & 64 ? t : c, U[n++] = J & 32 ? t : c, U[n++] = J & 16 ? t : c, U[n++] = J & 8 ? t : c, U[n++] = J & 4 ? t : c, U[n++] = J & 2 ? t : c, U[n++] = J & 1 ? t : c;
    }
    if (s === 0)
      continue;
    const M = l < b ? R[l++] : 255;
    for (let G = 0; G < s; G++)
      U[n++] = M & 1 << 7 - G ? t : c;
  }
  return {
    srcPos: l,
    destPos: n
  };
}
const KN = 16, gN = 100, va = 15, HN = 10, vN = 1e3, wl = 16;
function Pa(R, l) {
  if (R._removeMirroring)
    throw new Error("Context is already forwarding operations.");
  R.__originalSave = R.save, R.__originalRestore = R.restore, R.__originalRotate = R.rotate, R.__originalScale = R.scale, R.__originalTranslate = R.translate, R.__originalTransform = R.transform, R.__originalSetTransform = R.setTransform, R.__originalResetTransform = R.resetTransform, R.__originalClip = R.clip, R.__originalMoveTo = R.moveTo, R.__originalLineTo = R.lineTo, R.__originalBezierCurveTo = R.bezierCurveTo, R.__originalRect = R.rect, R.__originalClosePath = R.closePath, R.__originalBeginPath = R.beginPath, R._removeMirroring = () => {
    R.save = R.__originalSave, R.restore = R.__originalRestore, R.rotate = R.__originalRotate, R.scale = R.__originalScale, R.translate = R.__originalTranslate, R.transform = R.__originalTransform, R.setTransform = R.__originalSetTransform, R.resetTransform = R.__originalResetTransform, R.clip = R.__originalClip, R.moveTo = R.__originalMoveTo, R.lineTo = R.__originalLineTo, R.bezierCurveTo = R.__originalBezierCurveTo, R.rect = R.__originalRect, R.closePath = R.__originalClosePath, R.beginPath = R.__originalBeginPath, delete R._removeMirroring;
  }, R.save = function() {
    l.save(), this.__originalSave();
  }, R.restore = function() {
    l.restore(), this.__originalRestore();
  }, R.translate = function(Z, d) {
    l.translate(Z, d), this.__originalTranslate(Z, d);
  }, R.scale = function(Z, d) {
    l.scale(Z, d), this.__originalScale(Z, d);
  }, R.transform = function(Z, d, F, W, V, c) {
    l.transform(Z, d, F, W, V, c), this.__originalTransform(Z, d, F, W, V, c);
  }, R.setTransform = function(Z, d, F, W, V, c) {
    l.setTransform(Z, d, F, W, V, c), this.__originalSetTransform(Z, d, F, W, V, c);
  }, R.resetTransform = function() {
    l.resetTransform(), this.__originalResetTransform();
  }, R.rotate = function(Z) {
    l.rotate(Z), this.__originalRotate(Z);
  }, R.clip = function(Z) {
    l.clip(Z), this.__originalClip(Z);
  }, R.moveTo = function(U, Z) {
    l.moveTo(U, Z), this.__originalMoveTo(U, Z);
  }, R.lineTo = function(U, Z) {
    l.lineTo(U, Z), this.__originalLineTo(U, Z);
  }, R.bezierCurveTo = function(U, Z, d, F, W, V) {
    l.bezierCurveTo(U, Z, d, F, W, V), this.__originalBezierCurveTo(U, Z, d, F, W, V);
  }, R.rect = function(U, Z, d, F) {
    l.rect(U, Z, d, F), this.__originalRect(U, Z, d, F);
  }, R.closePath = function() {
    l.closePath(), this.__originalClosePath();
  }, R.beginPath = function() {
    l.beginPath(), this.__originalBeginPath();
  };
}
class Aa {
  constructor(l) {
    this.canvasFactory = l, this.cache = /* @__PURE__ */ Object.create(null);
  }
  getCanvas(l, U, Z) {
    let d;
    return this.cache[l] !== void 0 ? (d = this.cache[l], this.canvasFactory.reset(d, U, Z)) : (d = this.canvasFactory.create(U, Z), this.cache[l] = d), d;
  }
  delete(l) {
    delete this.cache[l];
  }
  clear() {
    for (const l in this.cache) {
      const U = this.cache[l];
      this.canvasFactory.destroy(U), delete this.cache[l];
    }
  }
}
function SV(R, l, U, Z, d, F, W, V, c, t) {
  const [N, s, b, n, h, M] = _(R);
  if (s === 0 && b === 0) {
    const T = W * N + h, X = Math.round(T), S = V * n + M, e = Math.round(S), Y = (W + c) * N + h, B = Math.abs(Math.round(Y) - X) || 1, p = (V + t) * n + M, L = Math.abs(Math.round(p) - e) || 1;
    return R.setTransform(Math.sign(N), 0, 0, Math.sign(n), X, e), R.drawImage(l, U, Z, d, F, 0, 0, B, L), R.setTransform(N, s, b, n, h, M), [B, L];
  }
  if (N === 0 && n === 0) {
    const T = V * b + h, X = Math.round(T), S = W * s + M, e = Math.round(S), Y = (V + t) * b + h, B = Math.abs(Math.round(Y) - X) || 1, p = (W + c) * s + M, L = Math.abs(Math.round(p) - e) || 1;
    return R.setTransform(0, Math.sign(s), Math.sign(b), 0, X, e), R.drawImage(l, U, Z, d, F, 0, 0, L, B), R.setTransform(N, s, b, n, h, M), [L, B];
  }
  R.drawImage(l, U, Z, d, F, W, V, c, t);
  const G = Math.hypot(N, s), J = Math.hypot(b, n);
  return [G * c, J * t];
}
function fa(R) {
  const {
    width: l,
    height: U
  } = R;
  if (l > vN || U > vN)
    return null;
  const Z = 1e3, d = new Uint8Array([0, 2, 4, 0, 1, 0, 5, 4, 8, 10, 0, 8, 0, 2, 1, 0]), F = l + 1;
  let W = new Uint8Array(F * (U + 1)), V, c, t;
  const N = l + 7 & -8;
  let s = new Uint8Array(N * U), b = 0;
  for (const J of R.data) {
    let T = 128;
    for (; T > 0; )
      s[b++] = J & T ? 0 : 255, T >>= 1;
  }
  let n = 0;
  for (b = 0, s[b] !== 0 && (W[0] = 1, ++n), c = 1; c < l; c++)
    s[b] !== s[b + 1] && (W[c] = s[b] ? 2 : 1, ++n), b++;
  for (s[b] !== 0 && (W[c] = 2, ++n), V = 1; V < U; V++) {
    b = V * N, t = V * F, s[b - N] !== s[b] && (W[t] = s[b] ? 1 : 8, ++n);
    let J = (s[b] ? 4 : 0) + (s[b - N] ? 8 : 0);
    for (c = 1; c < l; c++)
      J = (J >> 2) + (s[b + 1] ? 4 : 0) + (s[b - N + 1] ? 8 : 0), d[J] && (W[t + c] = d[J], ++n), b++;
    if (s[b - N] !== s[b] && (W[t + c] = s[b] ? 2 : 4, ++n), n > Z)
      return null;
  }
  for (b = N * (U - 1), t = V * F, s[b] !== 0 && (W[t] = 8, ++n), c = 1; c < l; c++)
    s[b] !== s[b + 1] && (W[t + c] = s[b] ? 4 : 8, ++n), b++;
  if (s[b] !== 0 && (W[t + c] = 4, ++n), n > Z)
    return null;
  const h = new Int32Array([0, F, -1, 0, -F, 0, 0, 0, 1]), M = new Path2D();
  for (V = 0; n && V <= U; V++) {
    let J = V * F;
    const T = J + l;
    for (; J < T && !W[J]; )
      J++;
    if (J === T)
      continue;
    M.moveTo(J % F, V);
    const X = J;
    let S = W[J];
    do {
      const e = h[S];
      do
        J += e;
      while (!W[J]);
      const Y = W[J];
      Y !== 5 && Y !== 10 ? (S = Y, W[J] = 0) : (S = Y & 51 * S >> 4, W[J] &= S >> 2 | S << 2), M.lineTo(J % F, J / F | 0), W[J] || --n;
    } while (X !== J);
    --V;
  }
  return s = null, W = null, function(J) {
    J.save(), J.scale(1 / l, -1 / U), J.translate(0, -U), J.fill(M), J.beginPath(), J.restore();
  };
}
class PN {
  constructor(l, U) {
    this.alphaIsShape = !1, this.fontSize = 0, this.fontSizeScale = 1, this.textMatrix = Ns, this.textMatrixScale = 1, this.fontMatrix = NR, this.leading = 0, this.x = 0, this.y = 0, this.lineX = 0, this.lineY = 0, this.charSpacing = 0, this.wordSpacing = 0, this.textHScale = 1, this.textRenderingMode = Sl.FILL, this.textRise = 0, this.fillColor = "#000000", this.strokeColor = "#000000", this.patternFill = !1, this.fillAlpha = 1, this.strokeAlpha = 1, this.lineWidth = 1, this.activeSMask = null, this.transferMaps = "none", this.startNewPathAndClipBox([0, 0, l, U]);
  }
  clone() {
    const l = Object.create(this);
    return l.clipBox = this.clipBox.slice(), l;
  }
  setCurrentPoint(l, U) {
    this.x = l, this.y = U;
  }
  updatePathMinMax(l, U, Z) {
    [U, Z] = u.applyTransform([U, Z], l), this.minX = Math.min(this.minX, U), this.minY = Math.min(this.minY, Z), this.maxX = Math.max(this.maxX, U), this.maxY = Math.max(this.maxY, Z);
  }
  updateRectMinMax(l, U) {
    const Z = u.applyTransform(U, l), d = u.applyTransform(U.slice(2), l), F = u.applyTransform([U[0], U[3]], l), W = u.applyTransform([U[2], U[1]], l);
    this.minX = Math.min(this.minX, Z[0], d[0], F[0], W[0]), this.minY = Math.min(this.minY, Z[1], d[1], F[1], W[1]), this.maxX = Math.max(this.maxX, Z[0], d[0], F[0], W[0]), this.maxY = Math.max(this.maxY, Z[1], d[1], F[1], W[1]);
  }
  updateScalingPathMinMax(l, U) {
    u.scaleMinMax(l, U), this.minX = Math.min(this.minX, U[0]), this.minY = Math.min(this.minY, U[1]), this.maxX = Math.max(this.maxX, U[2]), this.maxY = Math.max(this.maxY, U[3]);
  }
  updateCurvePathMinMax(l, U, Z, d, F, W, V, c, t, N) {
    const s = u.bezierBoundingBox(U, Z, d, F, W, V, c, t, N);
    N || this.updateRectMinMax(l, s);
  }
  getPathBoundingBox(l = Il.FILL, U = null) {
    const Z = [this.minX, this.minY, this.maxX, this.maxY];
    if (l === Il.STROKE) {
      U || f("Stroke bounding box must include transform.");
      const d = u.singularValueDecompose2dScale(U), F = d[0] * this.lineWidth / 2, W = d[1] * this.lineWidth / 2;
      Z[0] -= F, Z[1] -= W, Z[2] += F, Z[3] += W;
    }
    return Z;
  }
  updateClipFromPath() {
    const l = u.intersect(this.clipBox, this.getPathBoundingBox());
    this.startNewPathAndClipBox(l || [0, 0, 0, 0]);
  }
  isEmptyClip() {
    return this.minX === 1 / 0;
  }
  startNewPathAndClipBox(l) {
    this.clipBox = l, this.minX = 1 / 0, this.minY = 1 / 0, this.maxX = 0, this.maxY = 0;
  }
  getClippedPathBoundingBox(l = Il.FILL, U = null) {
    return u.intersect(this.clipBox, this.getPathBoundingBox(l, U));
  }
}
function AN(R, l) {
  if (typeof ImageData < "u" && l instanceof ImageData) {
    R.putImageData(l, 0, 0);
    return;
  }
  const U = l.height, Z = l.width, d = U % wl, F = (U - d) / wl, W = d === 0 ? F : F + 1, V = R.createImageData(Z, wl);
  let c = 0, t;
  const N = l.data, s = V.data;
  let b, n, h, M;
  if (l.kind === LV.GRAYSCALE_1BPP) {
    const G = N.byteLength, J = new Uint32Array(s.buffer, 0, s.byteLength >> 2), T = J.length, X = Z + 7 >> 3, S = 4294967295, e = xl.isLittleEndian ? 4278190080 : 255;
    for (b = 0; b < W; b++) {
      for (h = b < F ? wl : d, t = 0, n = 0; n < h; n++) {
        const Y = G - c;
        let B = 0;
        const p = Y > X ? Z : Y * 8 - 7, L = p & -8;
        let E = 0, y = 0;
        for (; B < L; B += 8)
          y = N[c++], J[t++] = y & 128 ? S : e, J[t++] = y & 64 ? S : e, J[t++] = y & 32 ? S : e, J[t++] = y & 16 ? S : e, J[t++] = y & 8 ? S : e, J[t++] = y & 4 ? S : e, J[t++] = y & 2 ? S : e, J[t++] = y & 1 ? S : e;
        for (; B < p; B++)
          E === 0 && (y = N[c++], E = 128), J[t++] = y & E ? S : e, E >>= 1;
      }
      for (; t < T; )
        J[t++] = 0;
      R.putImageData(V, 0, b * wl);
    }
  } else if (l.kind === LV.RGBA_32BPP) {
    for (n = 0, M = Z * wl * 4, b = 0; b < F; b++)
      s.set(N.subarray(c, c + M)), c += M, R.putImageData(V, 0, n), n += wl;
    b < W && (M = Z * d * 4, s.set(N.subarray(c, c + M)), R.putImageData(V, 0, n));
  } else if (l.kind === LV.RGB_24BPP)
    for (h = wl, M = Z * h, b = 0; b < W; b++) {
      for (b >= F && (h = d, M = Z * h), t = 0, n = M; n--; )
        s[t++] = N[c++], s[t++] = N[c++], s[t++] = N[c++], s[t++] = 255;
      R.putImageData(V, 0, b * wl);
    }
  else
    throw new Error(`bad image kind: ${l.kind}`);
}
function fN(R, l) {
  if (l.bitmap) {
    R.drawImage(l.bitmap, 0, 0);
    return;
  }
  const U = l.height, Z = l.width, d = U % wl, F = (U - d) / wl, W = d === 0 ? F : F + 1, V = R.createImageData(Z, wl);
  let c = 0;
  const t = l.data, N = V.data;
  for (let s = 0; s < W; s++) {
    const b = s < F ? wl : d;
    ({
      srcPos: c
    } = Ha({
      src: t,
      srcPos: c,
      dest: N,
      width: Z,
      height: b,
      nonBlackColor: 0
    })), R.putImageData(V, 0, s * wl);
  }
}
function k0(R, l) {
  const U = ["strokeStyle", "fillStyle", "fillRule", "globalAlpha", "lineWidth", "lineCap", "lineJoin", "miterLimit", "globalCompositeOperation", "font", "filter"];
  for (const Z of U)
    R[Z] !== void 0 && (l[Z] = R[Z]);
  R.setLineDash !== void 0 && (l.setLineDash(R.getLineDash()), l.lineDashOffset = R.lineDashOffset);
}
function BV(R) {
  if (R.strokeStyle = R.fillStyle = "#000000", R.fillRule = "nonzero", R.globalAlpha = 1, R.lineWidth = 1, R.lineCap = "butt", R.lineJoin = "miter", R.miterLimit = 10, R.globalCompositeOperation = "source-over", R.font = "10px sans-serif", R.setLineDash !== void 0 && (R.setLineDash([]), R.lineDashOffset = 0), !yl) {
    const {
      filter: l
    } = R;
    l !== "none" && l !== "" && (R.filter = "none");
  }
}
function _N(R, l) {
  if (l)
    return !0;
  const U = u.singularValueDecompose2dScale(R);
  U[0] = Math.fround(U[0]), U[1] = Math.fround(U[1]);
  const Z = Math.fround((globalThis.devicePixelRatio || 1) * hU.PDF_TO_CSS_UNITS);
  return U[0] <= Z && U[1] <= Z;
}
const _a = ["butt", "round", "square"], qa = ["miter", "round", "bevel"], $a = {}, qN = {};
var _W, wR, qW, xR;
const kN = class {
  constructor(l, U, Z, d, F, {
    optionalContentConfig: W,
    markedContentStack: V = null
  }, c, t) {
    a(this, _W);
    a(this, qW);
    this.ctx = l, this.current = new PN(this.ctx.canvas.width, this.ctx.canvas.height), this.stateStack = [], this.pendingClip = null, this.pendingEOFill = !1, this.res = null, this.xobjs = null, this.commonObjs = U, this.objs = Z, this.canvasFactory = d, this.filterFactory = F, this.groupStack = [], this.processingType3 = null, this.baseTransform = null, this.baseTransformStack = [], this.groupLevel = 0, this.smaskStack = [], this.smaskCounter = 0, this.tempSMask = null, this.suspendedCtx = null, this.contentVisible = !0, this.markedContentStack = V || [], this.optionalContentConfig = W, this.cachedCanvases = new Aa(this.canvasFactory), this.cachedPatterns = /* @__PURE__ */ new Map(), this.annotationCanvasMap = c, this.viewportScale = 1, this.outputScaleX = 1, this.outputScaleY = 1, this.pageColors = t, this._cachedScaleForStroking = [-1, 0], this._cachedGetSinglePixelWidth = null, this._cachedBitmapsMap = /* @__PURE__ */ new Map();
  }
  getObject(l, U = null) {
    return typeof l == "string" ? l.startsWith("g_") ? this.commonObjs.get(l) : this.objs.get(l) : U;
  }
  beginDrawing({
    transform: l,
    viewport: U,
    transparency: Z = !1,
    background: d = null
  }) {
    const F = this.ctx.canvas.width, W = this.ctx.canvas.height, V = this.ctx.fillStyle;
    if (this.ctx.fillStyle = d || "#ffffff", this.ctx.fillRect(0, 0, F, W), this.ctx.fillStyle = V, Z) {
      const c = this.cachedCanvases.getCanvas("transparent", F, W);
      this.compositeCtx = this.ctx, this.transparentCanvas = c.canvas, this.ctx = c.context, this.ctx.save(), this.ctx.transform(..._(this.compositeCtx));
    }
    this.ctx.save(), BV(this.ctx), l && (this.ctx.transform(...l), this.outputScaleX = l[0], this.outputScaleY = l[0]), this.ctx.transform(...U.transform), this.viewportScale = U.scale, this.baseTransform = _(this.ctx);
  }
  executeOperatorList(l, U, Z, d) {
    const F = l.argsArray, W = l.fnArray;
    let V = U || 0;
    const c = F.length;
    if (c === V)
      return V;
    const t = c - V > HN && typeof Z == "function", N = t ? Date.now() + va : 0;
    let s = 0;
    const b = this.commonObjs, n = this.objs;
    let h;
    for (; ; ) {
      if (d !== void 0 && V === d.nextBreakPoint)
        return d.breakIt(V, Z), V;
      if (h = W[V], h !== WU.dependency)
        this[h].apply(this, F[V]);
      else
        for (const M of F[V]) {
          const G = M.startsWith("g_") ? b : n;
          if (!G.has(M))
            return G.get(M, Z), V;
        }
      if (V++, V === c)
        return V;
      if (t && ++s > HN) {
        if (Date.now() > N)
          return Z(), V;
        s = 0;
      }
    }
  }
  endDrawing() {
    m(this, _W, wR).call(this), this.cachedCanvases.clear(), this.cachedPatterns.clear();
    for (const l of this._cachedBitmapsMap.values()) {
      for (const U of l.values())
        typeof HTMLCanvasElement < "u" && U instanceof HTMLCanvasElement && (U.width = U.height = 0);
      l.clear();
    }
    this._cachedBitmapsMap.clear(), m(this, qW, xR).call(this);
  }
  _scaleImage(l, U) {
    const Z = l.width, d = l.height;
    let F = Math.max(Math.hypot(U[0], U[1]), 1), W = Math.max(Math.hypot(U[2], U[3]), 1), V = Z, c = d, t = "prescale1", N, s;
    for (; F > 2 && V > 1 || W > 2 && c > 1; ) {
      let b = V, n = c;
      F > 2 && V > 1 && (b = V >= 16384 ? Math.floor(V / 2) - 1 || 1 : Math.ceil(V / 2), F /= V / b), W > 2 && c > 1 && (n = c >= 16384 ? Math.floor(c / 2) - 1 || 1 : Math.ceil(c) / 2, W /= c / n), N = this.cachedCanvases.getCanvas(t, b, n), s = N.context, s.clearRect(0, 0, b, n), s.drawImage(l, 0, 0, V, c, 0, 0, b, n), l = N.canvas, V = b, c = n, t = t === "prescale1" ? "prescale2" : "prescale1";
    }
    return {
      img: l,
      paintWidth: V,
      paintHeight: c
    };
  }
  _createMaskCanvas(l) {
    const U = this.ctx, {
      width: Z,
      height: d
    } = l, F = this.current.fillColor, W = this.current.patternFill, V = _(U);
    let c, t, N, s;
    if ((l.bitmap || l.data) && l.count > 1) {
      const p = l.bitmap || l.data.buffer;
      t = JSON.stringify(W ? V : [V.slice(0, 4), F]), c = this._cachedBitmapsMap.get(p), c || (c = /* @__PURE__ */ new Map(), this._cachedBitmapsMap.set(p, c));
      const L = c.get(t);
      if (L && !W) {
        const E = Math.round(Math.min(V[0], V[2]) + V[4]), y = Math.round(Math.min(V[1], V[3]) + V[5]);
        return {
          canvas: L,
          offsetX: E,
          offsetY: y
        };
      }
      N = L;
    }
    N || (s = this.cachedCanvases.getCanvas("maskCanvas", Z, d), fN(s.context, l));
    let b = u.transform(V, [1 / Z, 0, 0, -1 / d, 0, 0]);
    b = u.transform(b, [1, 0, 0, 1, 0, -d]);
    const [n, h, M, G] = u.getAxialAlignedBoundingBox([0, 0, Z, d], b), J = Math.round(M - n) || 1, T = Math.round(G - h) || 1, X = this.cachedCanvases.getCanvas("fillCanvas", J, T), S = X.context, e = n, Y = h;
    S.translate(-e, -Y), S.transform(...b), N || (N = this._scaleImage(s.canvas, wU(S)), N = N.img, c && W && c.set(t, N)), S.imageSmoothingEnabled = _N(_(S), l.interpolate), SV(S, N, 0, 0, N.width, N.height, 0, 0, Z, d), S.globalCompositeOperation = "source-in";
    const B = u.transform(wU(S), [1, 0, 0, 1, -e, -Y]);
    return S.fillStyle = W ? F.getPattern(U, this, B, Il.FILL) : F, S.fillRect(0, 0, Z, d), c && !W && (this.cachedCanvases.delete("fillCanvas"), c.set(t, X.canvas)), {
      canvas: X.canvas,
      offsetX: Math.round(e),
      offsetY: Math.round(Y)
    };
  }
  setLineWidth(l) {
    l !== this.current.lineWidth && (this._cachedScaleForStroking[0] = -1), this.current.lineWidth = l, this.ctx.lineWidth = l;
  }
  setLineCap(l) {
    this.ctx.lineCap = _a[l];
  }
  setLineJoin(l) {
    this.ctx.lineJoin = qa[l];
  }
  setMiterLimit(l) {
    this.ctx.miterLimit = l;
  }
  setDash(l, U) {
    const Z = this.ctx;
    Z.setLineDash !== void 0 && (Z.setLineDash(l), Z.lineDashOffset = U);
  }
  setRenderingIntent(l) {
  }
  setFlatness(l) {
  }
  setGState(l) {
    for (const [U, Z] of l)
      switch (U) {
        case "LW":
          this.setLineWidth(Z);
          break;
        case "LC":
          this.setLineCap(Z);
          break;
        case "LJ":
          this.setLineJoin(Z);
          break;
        case "ML":
          this.setMiterLimit(Z);
          break;
        case "D":
          this.setDash(Z[0], Z[1]);
          break;
        case "RI":
          this.setRenderingIntent(Z);
          break;
        case "FL":
          this.setFlatness(Z);
          break;
        case "Font":
          this.setFont(Z[0], Z[1]);
          break;
        case "CA":
          this.current.strokeAlpha = Z;
          break;
        case "ca":
          this.current.fillAlpha = Z, this.ctx.globalAlpha = Z;
          break;
        case "BM":
          this.ctx.globalCompositeOperation = Z;
          break;
        case "SMask":
          this.current.activeSMask = Z ? this.tempSMask : null, this.tempSMask = null, this.checkSMaskState();
          break;
        case "TR":
          this.ctx.filter = this.current.transferMaps = this.filterFactory.addFilter(Z);
          break;
      }
  }
  get inSMaskMode() {
    return !!this.suspendedCtx;
  }
  checkSMaskState() {
    const l = this.inSMaskMode;
    this.current.activeSMask && !l ? this.beginSMaskMode() : !this.current.activeSMask && l && this.endSMaskMode();
  }
  beginSMaskMode() {
    if (this.inSMaskMode)
      throw new Error("beginSMaskMode called while already in smask mode");
    const l = this.ctx.canvas.width, U = this.ctx.canvas.height, Z = "smaskGroupAt" + this.groupLevel, d = this.cachedCanvases.getCanvas(Z, l, U);
    this.suspendedCtx = this.ctx, this.ctx = d.context;
    const F = this.ctx;
    F.setTransform(..._(this.suspendedCtx)), k0(this.suspendedCtx, F), Pa(F, this.suspendedCtx), this.setGState([["BM", "source-over"], ["ca", 1], ["CA", 1]]);
  }
  endSMaskMode() {
    if (!this.inSMaskMode)
      throw new Error("endSMaskMode called while not in smask mode");
    this.ctx._removeMirroring(), k0(this.ctx, this.suspendedCtx), this.ctx = this.suspendedCtx, this.suspendedCtx = null;
  }
  compose(l) {
    if (!this.current.activeSMask)
      return;
    l ? (l[0] = Math.floor(l[0]), l[1] = Math.floor(l[1]), l[2] = Math.ceil(l[2]), l[3] = Math.ceil(l[3])) : l = [0, 0, this.ctx.canvas.width, this.ctx.canvas.height];
    const U = this.current.activeSMask, Z = this.suspendedCtx;
    this.composeSMask(Z, U, this.ctx, l), this.ctx.save(), this.ctx.setTransform(1, 0, 0, 1, 0, 0), this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height), this.ctx.restore();
  }
  composeSMask(l, U, Z, d) {
    const F = d[0], W = d[1], V = d[2] - F, c = d[3] - W;
    V === 0 || c === 0 || (this.genericComposeSMask(U.context, Z, V, c, U.subtype, U.backdrop, U.transferMap, F, W, U.offsetX, U.offsetY), l.save(), l.globalAlpha = 1, l.globalCompositeOperation = "source-over", l.setTransform(1, 0, 0, 1, 0, 0), l.drawImage(Z.canvas, 0, 0), l.restore());
  }
  genericComposeSMask(l, U, Z, d, F, W, V, c, t, N, s) {
    let b = l.canvas, n = c - N, h = t - s;
    if (W) {
      if (n < 0 || h < 0 || n + Z > b.width || h + d > b.height) {
        const G = this.cachedCanvases.getCanvas("maskExtension", Z, d), J = G.context;
        J.drawImage(b, -n, -h), W.some((T) => T !== 0) && (J.globalCompositeOperation = "destination-atop", J.fillStyle = u.makeHexColor(...W), J.fillRect(0, 0, Z, d), J.globalCompositeOperation = "source-over"), b = G.canvas, n = h = 0;
      } else if (W.some((G) => G !== 0)) {
        l.save(), l.globalAlpha = 1, l.setTransform(1, 0, 0, 1, 0, 0);
        const G = new Path2D();
        G.rect(n, h, Z, d), l.clip(G), l.globalCompositeOperation = "destination-atop", l.fillStyle = u.makeHexColor(...W), l.fillRect(n, h, Z, d), l.restore();
      }
    }
    U.save(), U.globalAlpha = 1, U.setTransform(1, 0, 0, 1, 0, 0), F === "Alpha" && V ? U.filter = this.filterFactory.addAlphaFilter(V) : F === "Luminosity" && (U.filter = this.filterFactory.addLuminosityFilter(V));
    const M = new Path2D();
    M.rect(c, t, Z, d), U.clip(M), U.globalCompositeOperation = "destination-in", U.drawImage(b, n, h, Z, d, c, t, Z, d), U.restore();
  }
  save() {
    this.inSMaskMode ? (k0(this.ctx, this.suspendedCtx), this.suspendedCtx.save()) : this.ctx.save();
    const l = this.current;
    this.stateStack.push(l), this.current = l.clone();
  }
  restore() {
    this.stateStack.length === 0 && this.inSMaskMode && this.endSMaskMode(), this.stateStack.length !== 0 && (this.current = this.stateStack.pop(), this.inSMaskMode ? (this.suspendedCtx.restore(), k0(this.suspendedCtx, this.ctx)) : this.ctx.restore(), this.checkSMaskState(), this.pendingClip = null, this._cachedScaleForStroking[0] = -1, this._cachedGetSinglePixelWidth = null);
  }
  transform(l, U, Z, d, F, W) {
    this.ctx.transform(l, U, Z, d, F, W), this._cachedScaleForStroking[0] = -1, this._cachedGetSinglePixelWidth = null;
  }
  constructPath(l, U, Z) {
    const d = this.ctx, F = this.current;
    let W = F.x, V = F.y, c, t;
    const N = _(d), s = N[0] === 0 && N[3] === 0 || N[1] === 0 && N[2] === 0, b = s ? Z.slice(0) : null;
    for (let n = 0, h = 0, M = l.length; n < M; n++)
      switch (l[n] | 0) {
        case WU.rectangle:
          W = U[h++], V = U[h++];
          const G = U[h++], J = U[h++], T = W + G, X = V + J;
          d.moveTo(W, V), G === 0 || J === 0 ? d.lineTo(T, X) : (d.lineTo(T, V), d.lineTo(T, X), d.lineTo(W, X)), s || F.updateRectMinMax(N, [W, V, T, X]), d.closePath();
          break;
        case WU.moveTo:
          W = U[h++], V = U[h++], d.moveTo(W, V), s || F.updatePathMinMax(N, W, V);
          break;
        case WU.lineTo:
          W = U[h++], V = U[h++], d.lineTo(W, V), s || F.updatePathMinMax(N, W, V);
          break;
        case WU.curveTo:
          c = W, t = V, W = U[h + 4], V = U[h + 5], d.bezierCurveTo(U[h], U[h + 1], U[h + 2], U[h + 3], W, V), F.updateCurvePathMinMax(N, c, t, U[h], U[h + 1], U[h + 2], U[h + 3], W, V, b), h += 6;
          break;
        case WU.curveTo2:
          c = W, t = V, d.bezierCurveTo(W, V, U[h], U[h + 1], U[h + 2], U[h + 3]), F.updateCurvePathMinMax(N, c, t, W, V, U[h], U[h + 1], U[h + 2], U[h + 3], b), W = U[h + 2], V = U[h + 3], h += 4;
          break;
        case WU.curveTo3:
          c = W, t = V, W = U[h + 2], V = U[h + 3], d.bezierCurveTo(U[h], U[h + 1], W, V, W, V), F.updateCurvePathMinMax(N, c, t, U[h], U[h + 1], W, V, W, V, b), h += 4;
          break;
        case WU.closePath:
          d.closePath();
          break;
      }
    s && F.updateScalingPathMinMax(N, b), F.setCurrentPoint(W, V);
  }
  closePath() {
    this.ctx.closePath();
  }
  stroke(l = !0) {
    const U = this.ctx, Z = this.current.strokeColor;
    U.globalAlpha = this.current.strokeAlpha, this.contentVisible && (typeof Z == "object" && (Z != null && Z.getPattern) ? (U.save(), U.strokeStyle = Z.getPattern(U, this, wU(U), Il.STROKE), this.rescaleAndStroke(!1), U.restore()) : this.rescaleAndStroke(!0)), l && this.consumePath(this.current.getClippedPathBoundingBox()), U.globalAlpha = this.current.fillAlpha;
  }
  closeStroke() {
    this.closePath(), this.stroke();
  }
  fill(l = !0) {
    const U = this.ctx, Z = this.current.fillColor, d = this.current.patternFill;
    let F = !1;
    d && (U.save(), U.fillStyle = Z.getPattern(U, this, wU(U), Il.FILL), F = !0);
    const W = this.current.getClippedPathBoundingBox();
    this.contentVisible && W !== null && (this.pendingEOFill ? (U.fill("evenodd"), this.pendingEOFill = !1) : U.fill()), F && U.restore(), l && this.consumePath(W);
  }
  eoFill() {
    this.pendingEOFill = !0, this.fill();
  }
  fillStroke() {
    this.fill(!1), this.stroke(!1), this.consumePath();
  }
  eoFillStroke() {
    this.pendingEOFill = !0, this.fillStroke();
  }
  closeFillStroke() {
    this.closePath(), this.fillStroke();
  }
  closeEOFillStroke() {
    this.pendingEOFill = !0, this.closePath(), this.fillStroke();
  }
  endPath() {
    this.consumePath();
  }
  clip() {
    this.pendingClip = $a;
  }
  eoClip() {
    this.pendingClip = qN;
  }
  beginText() {
    this.current.textMatrix = Ns, this.current.textMatrixScale = 1, this.current.x = this.current.lineX = 0, this.current.y = this.current.lineY = 0;
  }
  endText() {
    const l = this.pendingTextPaths, U = this.ctx;
    if (l === void 0) {
      U.beginPath();
      return;
    }
    U.save(), U.beginPath();
    for (const Z of l)
      U.setTransform(...Z.transform), U.translate(Z.x, Z.y), Z.addToPath(U, Z.fontSize);
    U.restore(), U.clip(), U.beginPath(), delete this.pendingTextPaths;
  }
  setCharSpacing(l) {
    this.current.charSpacing = l;
  }
  setWordSpacing(l) {
    this.current.wordSpacing = l;
  }
  setHScale(l) {
    this.current.textHScale = l / 100;
  }
  setLeading(l) {
    this.current.leading = -l;
  }
  setFont(l, U) {
    var N;
    const Z = this.commonObjs.get(l), d = this.current;
    if (!Z)
      throw new Error(`Can't find font for ${l}`);
    if (d.fontMatrix = Z.fontMatrix || NR, (d.fontMatrix[0] === 0 || d.fontMatrix[3] === 0) && w("Invalid font matrix for font " + l), U < 0 ? (U = -U, d.fontDirection = -1) : d.fontDirection = 1, this.current.font = Z, this.current.fontSize = U, Z.isType3Font)
      return;
    const F = Z.loadedName || "sans-serif", W = ((N = Z.systemFontInfo) == null ? void 0 : N.css) || `"${F}", ${Z.fallbackName}`;
    let V = "normal";
    Z.black ? V = "900" : Z.bold && (V = "bold");
    const c = Z.italic ? "italic" : "normal";
    let t = U;
    U < KN ? t = KN : U > gN && (t = gN), this.current.fontSizeScale = U / t, this.ctx.font = `${c} ${V} ${t}px ${W}`;
  }
  setTextRenderingMode(l) {
    this.current.textRenderingMode = l;
  }
  setTextRise(l) {
    this.current.textRise = l;
  }
  moveText(l, U) {
    this.current.x = this.current.lineX += l, this.current.y = this.current.lineY += U;
  }
  setLeadingMoveText(l, U) {
    this.setLeading(-U), this.moveText(l, U);
  }
  setTextMatrix(l, U, Z, d, F, W) {
    this.current.textMatrix = [l, U, Z, d, F, W], this.current.textMatrixScale = Math.hypot(l, U), this.current.x = this.current.lineX = 0, this.current.y = this.current.lineY = 0;
  }
  nextLine() {
    this.moveText(0, this.current.leading);
  }
  paintChar(l, U, Z, d) {
    const F = this.ctx, W = this.current, V = W.font, c = W.textRenderingMode, t = W.fontSize / W.fontSizeScale, N = c & Sl.FILL_STROKE_MASK, s = !!(c & Sl.ADD_TO_PATH_FLAG), b = W.patternFill && !V.missingFile;
    let n;
    (V.disableFontFace || s || b) && (n = V.getPathGenerator(this.commonObjs, l)), V.disableFontFace || b ? (F.save(), F.translate(U, Z), F.beginPath(), n(F, t), d && F.setTransform(...d), (N === Sl.FILL || N === Sl.FILL_STROKE) && F.fill(), (N === Sl.STROKE || N === Sl.FILL_STROKE) && F.stroke(), F.restore()) : ((N === Sl.FILL || N === Sl.FILL_STROKE) && F.fillText(l, U, Z), (N === Sl.STROKE || N === Sl.FILL_STROKE) && F.strokeText(l, U, Z)), s && (this.pendingTextPaths || (this.pendingTextPaths = [])).push({
      transform: _(F),
      x: U,
      y: Z,
      fontSize: t,
      addToPath: n
    });
  }
  get isFontSubpixelAAEnabled() {
    const {
      context: l
    } = this.cachedCanvases.getCanvas("isFontSubpixelAAEnabled", 10, 10);
    l.scale(1.5, 1), l.fillText("I", 0, 10);
    const U = l.getImageData(0, 0, 10, 10).data;
    let Z = !1;
    for (let d = 3; d < U.length; d += 4)
      if (U[d] > 0 && U[d] < 255) {
        Z = !0;
        break;
      }
    return K(this, "isFontSubpixelAAEnabled", Z);
  }
  showText(l) {
    const U = this.current, Z = U.font;
    if (Z.isType3Font)
      return this.showType3Text(l);
    const d = U.fontSize;
    if (d === 0)
      return;
    const F = this.ctx, W = U.fontSizeScale, V = U.charSpacing, c = U.wordSpacing, t = U.fontDirection, N = U.textHScale * t, s = l.length, b = Z.vertical, n = b ? 1 : -1, h = Z.defaultVMetrics, M = d * U.fontMatrix[0], G = U.textRenderingMode === Sl.FILL && !Z.disableFontFace && !U.patternFill;
    F.save(), F.transform(...U.textMatrix), F.translate(U.x, U.y + U.textRise), t > 0 ? F.scale(N, -1) : F.scale(N, 1);
    let J;
    if (U.patternFill) {
      F.save();
      const Y = U.fillColor.getPattern(F, this, wU(F), Il.FILL);
      J = _(F), F.restore(), F.fillStyle = Y;
    }
    let T = U.lineWidth;
    const X = U.textMatrixScale;
    if (X === 0 || T === 0) {
      const Y = U.textRenderingMode & Sl.FILL_STROKE_MASK;
      (Y === Sl.STROKE || Y === Sl.FILL_STROKE) && (T = this.getSinglePixelWidth());
    } else
      T /= X;
    if (W !== 1 && (F.scale(W, W), T /= W), F.lineWidth = T, Z.isInvalidPDFjsFont) {
      const Y = [];
      let B = 0;
      for (const p of l)
        Y.push(p.unicode), B += p.width;
      F.fillText(Y.join(""), 0, 0), U.x += B * M * N, F.restore(), this.compose();
      return;
    }
    let S = 0, e;
    for (e = 0; e < s; ++e) {
      const Y = l[e];
      if (typeof Y == "number") {
        S += n * Y * d / 1e3;
        continue;
      }
      let B = !1;
      const p = (Y.isSpace ? c : 0) + V, L = Y.fontChar, E = Y.accent;
      let y, g, x = Y.width;
      if (b) {
        const v = Y.vmetric || h, q = -(Y.vmetric ? v[1] : x * 0.5) * M, z = v[2] * M;
        x = v ? -v[0] : x, y = q / W, g = (S + z) / W;
      } else
        y = S / W, g = 0;
      if (Z.remeasure && x > 0) {
        const v = F.measureText(L).width * 1e3 / d * W;
        if (x < v && this.isFontSubpixelAAEnabled) {
          const q = x / v;
          B = !0, F.save(), F.scale(q, 1), y /= q;
        } else
          x !== v && (y += (x - v) / 2e3 * d / W);
      }
      if (this.contentVisible && (Y.isInFont || Z.missingFile)) {
        if (G && !E)
          F.fillText(L, y, g);
        else if (this.paintChar(L, y, g, J), E) {
          const v = y + d * E.offset.x / W, q = g - d * E.offset.y / W;
          this.paintChar(E.fontChar, v, q, J);
        }
      }
      const H = b ? x * M - p * t : x * M + p * t;
      S += H, B && F.restore();
    }
    b ? U.y -= S : U.x += S * N, F.restore(), this.compose();
  }
  showType3Text(l) {
    const U = this.ctx, Z = this.current, d = Z.font, F = Z.fontSize, W = Z.fontDirection, V = d.vertical ? 1 : -1, c = Z.charSpacing, t = Z.wordSpacing, N = Z.textHScale * W, s = Z.fontMatrix || NR, b = l.length, n = Z.textRenderingMode === Sl.INVISIBLE;
    let h, M, G, J;
    if (!(n || F === 0)) {
      for (this._cachedScaleForStroking[0] = -1, this._cachedGetSinglePixelWidth = null, U.save(), U.transform(...Z.textMatrix), U.translate(Z.x, Z.y), U.scale(N, W), h = 0; h < b; ++h) {
        if (M = l[h], typeof M == "number") {
          J = V * M * F / 1e3, this.ctx.translate(J, 0), Z.x += J * N;
          continue;
        }
        const T = (M.isSpace ? t : 0) + c, X = d.charProcOperatorList[M.operatorListId];
        if (!X) {
          w(`Type3 character "${M.operatorListId}" is not available.`);
          continue;
        }
        this.contentVisible && (this.processingType3 = M, this.save(), U.scale(F, F), U.transform(...s), this.executeOperatorList(X), this.restore()), G = u.applyTransform([M.width, 0], s)[0] * F + T, U.translate(G, 0), Z.x += G * N;
      }
      U.restore(), this.processingType3 = null;
    }
  }
  setCharWidth(l, U) {
  }
  setCharWidthAndBounds(l, U, Z, d, F, W) {
    this.ctx.rect(Z, d, F - Z, W - d), this.ctx.clip(), this.endPath();
  }
  getColorN_Pattern(l) {
    let U;
    if (l[0] === "TilingPattern") {
      const Z = l[1], d = this.baseTransform || _(this.ctx), F = {
        createCanvasGraphics: (W) => new kN(W, this.commonObjs, this.objs, this.canvasFactory, this.filterFactory, {
          optionalContentConfig: this.optionalContentConfig,
          markedContentStack: this.markedContentStack
        })
      };
      U = new wV(l, Z, this.ctx, F, d);
    } else
      U = this._getPattern(l[1], l[2]);
    return U;
  }
  setStrokeColorN() {
    this.current.strokeColor = this.getColorN_Pattern(arguments);
  }
  setFillColorN() {
    this.current.fillColor = this.getColorN_Pattern(arguments), this.current.patternFill = !0;
  }
  setStrokeRGBColor(l, U, Z) {
    const d = u.makeHexColor(l, U, Z);
    this.ctx.strokeStyle = d, this.current.strokeColor = d;
  }
  setFillRGBColor(l, U, Z) {
    const d = u.makeHexColor(l, U, Z);
    this.ctx.fillStyle = d, this.current.fillColor = d, this.current.patternFill = !1;
  }
  _getPattern(l, U = null) {
    let Z;
    return this.cachedPatterns.has(l) ? Z = this.cachedPatterns.get(l) : (Z = ga(this.getObject(l)), this.cachedPatterns.set(l, Z)), U && (Z.matrix = U), Z;
  }
  shadingFill(l) {
    if (!this.contentVisible)
      return;
    const U = this.ctx;
    this.save();
    const Z = this._getPattern(l);
    U.fillStyle = Z.getPattern(U, this, wU(U), Il.SHADING);
    const d = wU(U);
    if (d) {
      const {
        width: F,
        height: W
      } = U.canvas, [V, c, t, N] = u.getAxialAlignedBoundingBox([0, 0, F, W], d);
      this.ctx.fillRect(V, c, t - V, N - c);
    } else
      this.ctx.fillRect(-1e10, -1e10, 2e10, 2e10);
    this.compose(this.current.getClippedPathBoundingBox()), this.restore();
  }
  beginInlineImage() {
    f("Should not call beginInlineImage");
  }
  beginImageData() {
    f("Should not call beginImageData");
  }
  paintFormXObjectBegin(l, U) {
    if (this.contentVisible && (this.save(), this.baseTransformStack.push(this.baseTransform), l && this.transform(...l), this.baseTransform = _(this.ctx), U)) {
      const Z = U[2] - U[0], d = U[3] - U[1];
      this.ctx.rect(U[0], U[1], Z, d), this.current.updateRectMinMax(_(this.ctx), U), this.clip(), this.endPath();
    }
  }
  paintFormXObjectEnd() {
    this.contentVisible && (this.restore(), this.baseTransform = this.baseTransformStack.pop());
  }
  beginGroup(l) {
    if (!this.contentVisible)
      return;
    this.save(), this.inSMaskMode && (this.endSMaskMode(), this.current.activeSMask = null);
    const U = this.ctx;
    l.isolated || gt("TODO: Support non-isolated groups."), l.knockout && w("Knockout groups not supported.");
    const Z = _(U);
    if (l.matrix && U.transform(...l.matrix), !l.bbox)
      throw new Error("Bounding box is required.");
    let d = u.getAxialAlignedBoundingBox(l.bbox, _(U));
    const F = [0, 0, U.canvas.width, U.canvas.height];
    d = u.intersect(d, F) || [0, 0, 0, 0];
    const W = Math.floor(d[0]), V = Math.floor(d[1]), c = Math.max(Math.ceil(d[2]) - W, 1), t = Math.max(Math.ceil(d[3]) - V, 1);
    this.current.startNewPathAndClipBox([0, 0, c, t]);
    let N = "groupAt" + this.groupLevel;
    l.smask && (N += "_smask_" + this.smaskCounter++ % 2);
    const s = this.cachedCanvases.getCanvas(N, c, t), b = s.context;
    b.translate(-W, -V), b.transform(...Z), l.smask ? this.smaskStack.push({
      canvas: s.canvas,
      context: b,
      offsetX: W,
      offsetY: V,
      subtype: l.smask.subtype,
      backdrop: l.smask.backdrop,
      transferMap: l.smask.transferMap || null,
      startTransformInverse: null
    }) : (U.setTransform(1, 0, 0, 1, 0, 0), U.translate(W, V), U.save()), k0(U, b), this.ctx = b, this.setGState([["BM", "source-over"], ["ca", 1], ["CA", 1]]), this.groupStack.push(U), this.groupLevel++;
  }
  endGroup(l) {
    if (!this.contentVisible)
      return;
    this.groupLevel--;
    const U = this.ctx, Z = this.groupStack.pop();
    if (this.ctx = Z, this.ctx.imageSmoothingEnabled = !1, l.smask)
      this.tempSMask = this.smaskStack.pop(), this.restore();
    else {
      this.ctx.restore();
      const d = _(this.ctx);
      this.restore(), this.ctx.save(), this.ctx.setTransform(...d);
      const F = u.getAxialAlignedBoundingBox([0, 0, U.canvas.width, U.canvas.height], d);
      this.ctx.drawImage(U.canvas, 0, 0), this.ctx.restore(), this.compose(F);
    }
  }
  beginAnnotation(l, U, Z, d, F) {
    if (m(this, _W, wR).call(this), BV(this.ctx), this.ctx.save(), this.save(), this.baseTransform && this.ctx.setTransform(...this.baseTransform), U) {
      const W = U[2] - U[0], V = U[3] - U[1];
      if (F && this.annotationCanvasMap) {
        Z = Z.slice(), Z[4] -= U[0], Z[5] -= U[1], U = U.slice(), U[0] = U[1] = 0, U[2] = W, U[3] = V;
        const [c, t] = u.singularValueDecompose2dScale(_(this.ctx)), {
          viewportScale: N
        } = this, s = Math.ceil(W * this.outputScaleX * N), b = Math.ceil(V * this.outputScaleY * N);
        this.annotationCanvas = this.canvasFactory.create(s, b);
        const {
          canvas: n,
          context: h
        } = this.annotationCanvas;
        this.annotationCanvasMap.set(l, n), this.annotationCanvas.savedCtx = this.ctx, this.ctx = h, this.ctx.save(), this.ctx.setTransform(c, 0, 0, -t, 0, V * t), BV(this.ctx);
      } else
        BV(this.ctx), this.ctx.rect(U[0], U[1], W, V), this.ctx.clip(), this.endPath();
    }
    this.current = new PN(this.ctx.canvas.width, this.ctx.canvas.height), this.transform(...Z), this.transform(...d);
  }
  endAnnotation() {
    this.annotationCanvas && (this.ctx.restore(), m(this, qW, xR).call(this), this.ctx = this.annotationCanvas.savedCtx, delete this.annotationCanvas.savedCtx, delete this.annotationCanvas);
  }
  paintImageMaskXObject(l) {
    if (!this.contentVisible)
      return;
    const U = l.count;
    l = this.getObject(l.data, l), l.count = U;
    const Z = this.ctx, d = this.processingType3;
    if (d && (d.compiled === void 0 && (d.compiled = fa(l)), d.compiled)) {
      d.compiled(Z);
      return;
    }
    const F = this._createMaskCanvas(l), W = F.canvas;
    Z.save(), Z.setTransform(1, 0, 0, 1, 0, 0), Z.drawImage(W, F.offsetX, F.offsetY), Z.restore(), this.compose();
  }
  paintImageMaskXObjectRepeat(l, U, Z = 0, d = 0, F, W) {
    if (!this.contentVisible)
      return;
    l = this.getObject(l.data, l);
    const V = this.ctx;
    V.save();
    const c = _(V);
    V.transform(U, Z, d, F, 0, 0);
    const t = this._createMaskCanvas(l);
    V.setTransform(1, 0, 0, 1, t.offsetX - c[4], t.offsetY - c[5]);
    for (let N = 0, s = W.length; N < s; N += 2) {
      const b = u.transform(c, [U, Z, d, F, W[N], W[N + 1]]), [n, h] = u.applyTransform([0, 0], b);
      V.drawImage(t.canvas, n, h);
    }
    V.restore(), this.compose();
  }
  paintImageMaskXObjectGroup(l) {
    if (!this.contentVisible)
      return;
    const U = this.ctx, Z = this.current.fillColor, d = this.current.patternFill;
    for (const F of l) {
      const {
        data: W,
        width: V,
        height: c,
        transform: t
      } = F, N = this.cachedCanvases.getCanvas("maskCanvas", V, c), s = N.context;
      s.save();
      const b = this.getObject(W, F);
      fN(s, b), s.globalCompositeOperation = "source-in", s.fillStyle = d ? Z.getPattern(s, this, wU(U), Il.FILL) : Z, s.fillRect(0, 0, V, c), s.restore(), U.save(), U.transform(...t), U.scale(1, -1), SV(U, N.canvas, 0, 0, V, c, 0, -1, 1, 1), U.restore();
    }
    this.compose();
  }
  paintImageXObject(l) {
    if (!this.contentVisible)
      return;
    const U = this.getObject(l);
    if (!U) {
      w("Dependent image isn't ready yet");
      return;
    }
    this.paintInlineImageXObject(U);
  }
  paintImageXObjectRepeat(l, U, Z, d) {
    if (!this.contentVisible)
      return;
    const F = this.getObject(l);
    if (!F) {
      w("Dependent image isn't ready yet");
      return;
    }
    const W = F.width, V = F.height, c = [];
    for (let t = 0, N = d.length; t < N; t += 2)
      c.push({
        transform: [U, 0, 0, Z, d[t], d[t + 1]],
        x: 0,
        y: 0,
        w: W,
        h: V
      });
    this.paintInlineImageXObjectGroup(F, c);
  }
  applyTransferMapsToCanvas(l) {
    return this.current.transferMaps !== "none" && (l.filter = this.current.transferMaps, l.drawImage(l.canvas, 0, 0), l.filter = "none"), l.canvas;
  }
  applyTransferMapsToBitmap(l) {
    if (this.current.transferMaps === "none")
      return l.bitmap;
    const {
      bitmap: U,
      width: Z,
      height: d
    } = l, F = this.cachedCanvases.getCanvas("inlineImage", Z, d), W = F.context;
    return W.filter = this.current.transferMaps, W.drawImage(U, 0, 0), W.filter = "none", F.canvas;
  }
  paintInlineImageXObject(l) {
    if (!this.contentVisible)
      return;
    const U = l.width, Z = l.height, d = this.ctx;
    if (this.save(), !yl) {
      const {
        filter: V
      } = d;
      V !== "none" && V !== "" && (d.filter = "none");
    }
    d.scale(1 / U, -1 / Z);
    let F;
    if (l.bitmap)
      F = this.applyTransferMapsToBitmap(l);
    else if (typeof HTMLElement == "function" && l instanceof HTMLElement || !l.data)
      F = l;
    else {
      const c = this.cachedCanvases.getCanvas("inlineImage", U, Z).context;
      AN(c, l), F = this.applyTransferMapsToCanvas(c);
    }
    const W = this._scaleImage(F, wU(d));
    d.imageSmoothingEnabled = _N(_(d), l.interpolate), SV(d, W.img, 0, 0, W.paintWidth, W.paintHeight, 0, -Z, U, Z), this.compose(), this.restore();
  }
  paintInlineImageXObjectGroup(l, U) {
    if (!this.contentVisible)
      return;
    const Z = this.ctx;
    let d;
    if (l.bitmap)
      d = l.bitmap;
    else {
      const F = l.width, W = l.height, c = this.cachedCanvases.getCanvas("inlineImage", F, W).context;
      AN(c, l), d = this.applyTransferMapsToCanvas(c);
    }
    for (const F of U)
      Z.save(), Z.transform(...F.transform), Z.scale(1, -1), SV(Z, d, F.x, F.y, F.w, F.h, 0, -1, 1, 1), Z.restore();
    this.compose();
  }
  paintSolidColorImageMask() {
    this.contentVisible && (this.ctx.fillRect(0, 0, 1, 1), this.compose());
  }
  markPoint(l) {
  }
  markPointProps(l, U) {
  }
  beginMarkedContent(l) {
    this.markedContentStack.push({
      visible: !0
    });
  }
  beginMarkedContentProps(l, U) {
    l === "OC" ? this.markedContentStack.push({
      visible: this.optionalContentConfig.isVisible(U)
    }) : this.markedContentStack.push({
      visible: !0
    }), this.contentVisible = this.isContentVisible();
  }
  endMarkedContent() {
    this.markedContentStack.pop(), this.contentVisible = this.isContentVisible();
  }
  beginCompat() {
  }
  endCompat() {
  }
  consumePath(l) {
    const U = this.current.isEmptyClip();
    this.pendingClip && this.current.updateClipFromPath(), this.pendingClip || this.compose(l);
    const Z = this.ctx;
    this.pendingClip && (U || (this.pendingClip === qN ? Z.clip("evenodd") : Z.clip()), this.pendingClip = null), this.current.startNewPathAndClipBox(this.current.clipBox), Z.beginPath();
  }
  getSinglePixelWidth() {
    if (!this._cachedGetSinglePixelWidth) {
      const l = _(this.ctx);
      if (l[1] === 0 && l[2] === 0)
        this._cachedGetSinglePixelWidth = 1 / Math.min(Math.abs(l[0]), Math.abs(l[3]));
      else {
        const U = Math.abs(l[0] * l[3] - l[2] * l[1]), Z = Math.hypot(l[0], l[2]), d = Math.hypot(l[1], l[3]);
        this._cachedGetSinglePixelWidth = Math.max(Z, d) / U;
      }
    }
    return this._cachedGetSinglePixelWidth;
  }
  getScaleForStroking() {
    if (this._cachedScaleForStroking[0] === -1) {
      const {
        lineWidth: l
      } = this.current, {
        a: U,
        b: Z,
        c: d,
        d: F
      } = this.ctx.getTransform();
      let W, V;
      if (Z === 0 && d === 0) {
        const c = Math.abs(U), t = Math.abs(F);
        if (c === t)
          if (l === 0)
            W = V = 1 / c;
          else {
            const N = c * l;
            W = V = N < 1 ? 1 / N : 1;
          }
        else if (l === 0)
          W = 1 / c, V = 1 / t;
        else {
          const N = c * l, s = t * l;
          W = N < 1 ? 1 / N : 1, V = s < 1 ? 1 / s : 1;
        }
      } else {
        const c = Math.abs(U * F - Z * d), t = Math.hypot(U, Z), N = Math.hypot(d, F);
        if (l === 0)
          W = N / c, V = t / c;
        else {
          const s = l * c;
          W = N > s ? N / s : 1, V = t > s ? t / s : 1;
        }
      }
      this._cachedScaleForStroking[0] = W, this._cachedScaleForStroking[1] = V;
    }
    return this._cachedScaleForStroking;
  }
  rescaleAndStroke(l) {
    const {
      ctx: U
    } = this, {
      lineWidth: Z
    } = this.current, [d, F] = this.getScaleForStroking();
    if (U.lineWidth = Z || 1, d === 1 && F === 1) {
      U.stroke();
      return;
    }
    const W = U.getLineDash();
    if (l && U.save(), U.scale(d, F), W.length > 0) {
      const V = Math.max(d, F);
      U.setLineDash(W.map((c) => c / V)), U.lineDashOffset /= V;
    }
    U.stroke(), l && U.restore();
  }
  isContentVisible() {
    for (let l = this.markedContentStack.length - 1; l >= 0; l--)
      if (!this.markedContentStack[l].visible)
        return !1;
    return !0;
  }
};
let TF = kN;
_W = new WeakSet(), wR = function() {
  for (; this.stateStack.length || this.inSMaskMode; )
    this.restore();
  this.ctx.restore(), this.transparentCanvas && (this.ctx = this.compositeCtx, this.ctx.save(), this.ctx.setTransform(1, 0, 0, 1, 0, 0), this.ctx.drawImage(this.transparentCanvas, 0, 0), this.ctx.restore(), this.transparentCanvas = null);
}, qW = new WeakSet(), xR = function() {
  if (this.pageColors) {
    const l = this.filterFactory.addHCMFilter(this.pageColors.foreground, this.pageColors.background);
    if (l !== "none") {
      const U = this.ctx.filter;
      this.ctx.filter = l, this.ctx.drawImage(this.ctx.canvas, 0, 0), this.ctx.filter = U;
    }
  }
};
for (const R in WU)
  TF.prototype[R] !== void 0 && (TF.prototype[WU[R]] = TF.prototype[R]);
const ln = 1e5, El = 30, $N = 0.8, eV = /* @__PURE__ */ new Map();
let Ud = null;
function BN(R = null) {
  if (!Ud) {
    const l = document.createElement("canvas");
    l.className = "hiddenCanvasElement", document.body.append(l), Ud = l.getContext("2d", {
      alpha: !1
    });
  }
  return Ud;
}
function ls() {
  Ud == null || Ud.canvas.remove(), Ud = null;
}
function Un(R, l) {
  const U = eV.get(R);
  if (U)
    return U;
  const Z = BN(l), d = Z.font;
  Z.canvas.width = Z.canvas.height = El, Z.font = `${El}px ${R}`;
  const F = Z.measureText("");
  let W = F.fontBoundingBoxAscent, V = Math.abs(F.fontBoundingBoxDescent);
  if (W) {
    const t = W / (W + V);
    return eV.set(R, t), Z.canvas.width = Z.canvas.height = 0, Z.font = d, t;
  }
  Z.strokeStyle = "red", Z.clearRect(0, 0, El, El), Z.strokeText("g", 0, 0);
  let c = Z.getImageData(0, 0, El, El).data;
  V = 0;
  for (let t = c.length - 1 - 3; t >= 0; t -= 4)
    if (c[t] > 0) {
      V = Math.ceil(t / 4 / El);
      break;
    }
  Z.clearRect(0, 0, El, El), Z.strokeText("A", 0, El), c = Z.getImageData(0, 0, El, El).data, W = 0;
  for (let t = 0, N = c.length; t < N; t += 4)
    if (c[t] > 0) {
      W = El - Math.floor(t / 4 / El);
      break;
    }
  if (Z.canvas.width = Z.canvas.height = 0, Z.font = d, W) {
    const t = W / (W + V);
    return eV.set(R, t), t;
  }
  return eV.set(R, $N), $N;
}
function gs(R) {
  const {
    div: l,
    scale: U,
    properties: Z,
    ctx: d,
    prevFontSize: F,
    prevFontFamily: W
  } = R, {
    style: V
  } = l;
  let c = "";
  if (Z.canvasWidth !== 0 && Z.hasText) {
    const {
      fontFamily: t
    } = V, {
      canvasWidth: N,
      fontSize: s
    } = Z;
    (F !== s || W !== t) && (d.font = `${s * U}px ${t}`, R.prevFontSize = s, R.prevFontFamily = t);
    const {
      width: b
    } = d.measureText(l.textContent);
    b > 0 && (c = `scaleX(${N * U / b})`);
  }
  Z.angle !== 0 && (c = `rotate(${Z.angle}deg) ${c}`), c.length > 0 && (V.transform = c);
}
var Td, xF, jc, Hs, Oc, vs, rc, Ps;
class Zn {
  constructor({
    textContentSource: l,
    container: U,
    viewport: Z,
    textDivs: d,
    textDivProperties: F,
    textContentItemsStr: W
  }) {
    a(this, jc);
    a(this, Oc);
    a(this, rc);
    a(this, Td, null);
    a(this, xF, null);
    var s;
    if (l instanceof ReadableStream)
      i(this, xF, l);
    else if (typeof l == "object")
      i(this, xF, new ReadableStream({
        start(b) {
          b.enqueue(l), b.close();
        }
      }));
    else
      throw new Error('No "textContentSource" parameter specified.');
    this._container = this._rootContainer = U, this._textDivs = d || [], this._textContentItemsStr = W || [], this._fontInspectorEnabled = !!((s = globalThis.FontInspector) != null && s.enabled), this._textDivProperties = F || /* @__PURE__ */ new WeakMap(), this._canceled = !1, this._capability = Promise.withResolvers(), this._layoutTextParams = {
      prevFontSize: null,
      prevFontFamily: null,
      div: null,
      scale: Z.scale * (globalThis.devicePixelRatio || 1),
      properties: null,
      ctx: null
    }, this._styleCache = /* @__PURE__ */ Object.create(null);
    const {
      pageWidth: V,
      pageHeight: c,
      pageX: t,
      pageY: N
    } = Z.rawDims;
    this._transform = [1, 0, 0, -1, -t, N + c], this._pageWidth = V, this._pageHeight = c, WF(U, Z), this._capability.promise.finally(() => {
      this._layoutTextParams = null, this._styleCache = null;
    }).catch(() => {
    });
  }
  get promise() {
    return this._capability.promise;
  }
  cancel() {
    var U;
    this._canceled = !0;
    const l = new cF("TextLayer task cancelled.");
    (U = Q(this, Td)) == null || U.cancel(l).catch(() => {
    }), i(this, Td, null), this._capability.reject(l);
  }
  _render() {
    const l = this._styleCache, U = () => {
      Q(this, Td).read().then(({
        value: Z,
        done: d
      }) => {
        if (d) {
          this._capability.resolve();
          return;
        }
        Object.assign(l, Z.styles), m(this, jc, Hs).call(this, Z.items, Z.lang), U();
      }, this._capability.reject);
    };
    i(this, Td, Q(this, xF).getReader()), U();
  }
}
Td = new WeakMap(), xF = new WeakMap(), jc = new WeakSet(), Hs = function(l, U) {
  this._layoutTextParams.ctx || (this._textDivProperties.set(this._rootContainer, {
    lang: U
  }), this._layoutTextParams.ctx = BN(U));
  const Z = this._textDivs, d = this._textContentItemsStr;
  for (const F of l) {
    if (Z.length > ln) {
      w("Ignoring additional textDivs for performance reasons."), this._processItems = () => {
      };
      return;
    }
    if (F.str === void 0) {
      if (F.type === "beginMarkedContentProps" || F.type === "beginMarkedContent") {
        const W = this._container;
        this._container = document.createElement("span"), this._container.classList.add("markedContent"), F.id !== null && this._container.setAttribute("id", `${F.id}`), W.append(this._container);
      } else
        F.type === "endMarkedContent" && (this._container = this._container.parentNode);
      continue;
    }
    d.push(F.str), m(this, Oc, vs).call(this, F, U);
  }
}, Oc = new WeakSet(), vs = function(l, U) {
  const Z = document.createElement("span"), d = {
    angle: 0,
    canvasWidth: 0,
    hasText: l.str !== "",
    hasEOL: l.hasEOL,
    fontSize: 0
  };
  this._textDivs.push(Z);
  const F = u.transform(this._transform, l.transform);
  let W = Math.atan2(F[1], F[0]);
  const V = this._styleCache[l.fontName];
  V.vertical && (W += Math.PI / 2);
  const c = this._fontInspectorEnabled && V.fontSubstitution || V.fontFamily, t = Math.hypot(F[2], F[3]), N = t * Un(c, U);
  let s, b;
  W === 0 ? (s = F[4], b = F[5] - N) : (s = F[4] + N * Math.sin(W), b = F[5] - N * Math.cos(W));
  const n = "calc(var(--scale-factor)*", h = Z.style;
  this._container === this._rootContainer ? (h.left = `${(100 * s / this._pageWidth).toFixed(2)}%`, h.top = `${(100 * b / this._pageHeight).toFixed(2)}%`) : (h.left = `${n}${s.toFixed(2)}px)`, h.top = `${n}${b.toFixed(2)}px)`), h.fontSize = `${n}${t.toFixed(2)}px)`, h.fontFamily = c, d.fontSize = t, Z.setAttribute("role", "presentation"), Z.textContent = l.str, Z.dir = l.dir, this._fontInspectorEnabled && (Z.dataset.fontName = V.fontSubstitutionLoadedName || l.fontName), W !== 0 && (d.angle = W * (180 / Math.PI));
  let M = !1;
  if (l.str.length > 1)
    M = !0;
  else if (l.str !== " " && l.transform[0] !== l.transform[3]) {
    const G = Math.abs(l.transform[0]), J = Math.abs(l.transform[3]);
    G !== J && Math.max(G, J) / Math.min(G, J) > 1.5 && (M = !0);
  }
  M && (d.canvasWidth = V.vertical ? l.height : l.width), this._textDivProperties.set(Z, d), m(this, rc, Ps).call(this, Z, d);
}, rc = new WeakSet(), Ps = function(l, U) {
  if (this._layoutTextParams.div = l, this._layoutTextParams.properties = U, gs(this._layoutTextParams), U.hasText && this._container.append(l), U.hasEOL) {
    const Z = document.createElement("br");
    Z.setAttribute("role", "presentation"), this._container.append(Z);
  }
};
function dn(R) {
  const l = new Zn(R);
  return l._render(), l;
}
function Fn({
  container: R,
  viewport: l,
  textDivs: U,
  textDivProperties: Z,
  mustRotate: d = !0,
  mustRescale: F = !0
}) {
  var W;
  if (d && WF(R, {
    rotation: l.rotation
  }), F) {
    const V = BN((W = Z.get(R)) == null ? void 0 : W.lang), t = {
      prevFontSize: null,
      prevFontFamily: null,
      div: null,
      scale: l.scale * (globalThis.devicePixelRatio || 1),
      properties: null,
      ctx: V
    };
    for (const N of U)
      t.properties = Z.get(N), t.div = N, gs(t);
  }
}
var $W, lQ;
class nZ {
  static get workerPort() {
    return Q(this, $W);
  }
  static set workerPort(l) {
    if (!(typeof Worker < "u" && l instanceof Worker) && l !== null)
      throw new Error("Invalid `workerPort` type.");
    i(this, $W, l);
  }
  static get workerSrc() {
    return Q(this, lQ);
  }
  static set workerSrc(l) {
    if (typeof l != "string")
      throw new Error("Invalid `workerSrc` type.");
    i(this, lQ, l);
  }
}
$W = new WeakMap(), lQ = new WeakMap(), a(nZ, $W, null), a(nZ, lQ, "");
const pV = {
  UNKNOWN: 0,
  DATA: 1,
  ERROR: 2
}, Wl = {
  UNKNOWN: 0,
  CANCEL: 1,
  CANCEL_COMPLETE: 2,
  CLOSE: 3,
  ENQUEUE: 4,
  ERROR: 5,
  PULL: 6,
  PULL_COMPLETE: 7,
  START_COMPLETE: 8
};
function rl(R) {
  switch (R instanceof Error || typeof R == "object" && R !== null || f('wrapReason: Expected "reason" to be a (possibly cloned) Error.'), R.name) {
    case "AbortException":
      return new cF(R.message);
    case "MissingPDFException":
      return new VF(R.message);
    case "PasswordException":
      return new bR(R.message, R.code);
    case "UnexpectedResponseException":
      return new Ht(R.message, R.status);
    case "UnknownErrorException":
      return new aR(R.message, R.details);
    default:
      return new aR(R.message, R.toString());
  }
}
var Kc, As, gc, fs, jF, xV;
class O0 {
  constructor(l, U, Z) {
    a(this, Kc);
    a(this, gc);
    a(this, jF);
    this.sourceName = l, this.targetName = U, this.comObj = Z, this.callbackId = 1, this.streamId = 1, this.streamSinks = /* @__PURE__ */ Object.create(null), this.streamControllers = /* @__PURE__ */ Object.create(null), this.callbackCapabilities = /* @__PURE__ */ Object.create(null), this.actionHandler = /* @__PURE__ */ Object.create(null), this._onComObjOnMessage = (d) => {
      const F = d.data;
      if (F.targetName !== this.sourceName)
        return;
      if (F.stream) {
        m(this, gc, fs).call(this, F);
        return;
      }
      if (F.callback) {
        const V = F.callbackId, c = this.callbackCapabilities[V];
        if (!c)
          throw new Error(`Cannot resolve callback ${V}`);
        if (delete this.callbackCapabilities[V], F.callback === pV.DATA)
          c.resolve(F.data);
        else if (F.callback === pV.ERROR)
          c.reject(rl(F.reason));
        else
          throw new Error("Unexpected callback case");
        return;
      }
      const W = this.actionHandler[F.action];
      if (!W)
        throw new Error(`Unknown action from worker: ${F.action}`);
      if (F.callbackId) {
        const V = this.sourceName, c = F.sourceName;
        new Promise(function(t) {
          t(W(F.data));
        }).then(function(t) {
          Z.postMessage({
            sourceName: V,
            targetName: c,
            callback: pV.DATA,
            callbackId: F.callbackId,
            data: t
          });
        }, function(t) {
          Z.postMessage({
            sourceName: V,
            targetName: c,
            callback: pV.ERROR,
            callbackId: F.callbackId,
            reason: rl(t)
          });
        });
        return;
      }
      if (F.streamId) {
        m(this, Kc, As).call(this, F);
        return;
      }
      W(F.data);
    }, Z.addEventListener("message", this._onComObjOnMessage);
  }
  on(l, U) {
    const Z = this.actionHandler;
    if (Z[l])
      throw new Error(`There is already an actionName called "${l}"`);
    Z[l] = U;
  }
  send(l, U, Z) {
    this.comObj.postMessage({
      sourceName: this.sourceName,
      targetName: this.targetName,
      action: l,
      data: U
    }, Z);
  }
  sendWithPromise(l, U, Z) {
    const d = this.callbackId++, F = Promise.withResolvers();
    this.callbackCapabilities[d] = F;
    try {
      this.comObj.postMessage({
        sourceName: this.sourceName,
        targetName: this.targetName,
        action: l,
        callbackId: d,
        data: U
      }, Z);
    } catch (W) {
      F.reject(W);
    }
    return F.promise;
  }
  sendWithStream(l, U, Z, d) {
    const F = this.streamId++, W = this.sourceName, V = this.targetName, c = this.comObj;
    return new ReadableStream({
      start: (t) => {
        const N = Promise.withResolvers();
        return this.streamControllers[F] = {
          controller: t,
          startCall: N,
          pullCall: null,
          cancelCall: null,
          isClosed: !1
        }, c.postMessage({
          sourceName: W,
          targetName: V,
          action: l,
          streamId: F,
          data: U,
          desiredSize: t.desiredSize
        }, d), N.promise;
      },
      pull: (t) => {
        const N = Promise.withResolvers();
        return this.streamControllers[F].pullCall = N, c.postMessage({
          sourceName: W,
          targetName: V,
          stream: Wl.PULL,
          streamId: F,
          desiredSize: t.desiredSize
        }), N.promise;
      },
      cancel: (t) => {
        sl(t instanceof Error, "cancel must have a valid reason");
        const N = Promise.withResolvers();
        return this.streamControllers[F].cancelCall = N, this.streamControllers[F].isClosed = !0, c.postMessage({
          sourceName: W,
          targetName: V,
          stream: Wl.CANCEL,
          streamId: F,
          reason: rl(t)
        }), N.promise;
      }
    }, Z);
  }
  destroy() {
    this.comObj.removeEventListener("message", this._onComObjOnMessage);
  }
}
Kc = new WeakSet(), As = function(l) {
  const U = l.streamId, Z = this.sourceName, d = l.sourceName, F = this.comObj, W = this, V = this.actionHandler[l.action], c = {
    enqueue(t, N = 1, s) {
      if (this.isCancelled)
        return;
      const b = this.desiredSize;
      this.desiredSize -= N, b > 0 && this.desiredSize <= 0 && (this.sinkCapability = Promise.withResolvers(), this.ready = this.sinkCapability.promise), F.postMessage({
        sourceName: Z,
        targetName: d,
        stream: Wl.ENQUEUE,
        streamId: U,
        chunk: t
      }, s);
    },
    close() {
      this.isCancelled || (this.isCancelled = !0, F.postMessage({
        sourceName: Z,
        targetName: d,
        stream: Wl.CLOSE,
        streamId: U
      }), delete W.streamSinks[U]);
    },
    error(t) {
      sl(t instanceof Error, "error must have a valid reason"), !this.isCancelled && (this.isCancelled = !0, F.postMessage({
        sourceName: Z,
        targetName: d,
        stream: Wl.ERROR,
        streamId: U,
        reason: rl(t)
      }));
    },
    sinkCapability: Promise.withResolvers(),
    onPull: null,
    onCancel: null,
    isCancelled: !1,
    desiredSize: l.desiredSize,
    ready: null
  };
  c.sinkCapability.resolve(), c.ready = c.sinkCapability.promise, this.streamSinks[U] = c, new Promise(function(t) {
    t(V(l.data, c));
  }).then(function() {
    F.postMessage({
      sourceName: Z,
      targetName: d,
      stream: Wl.START_COMPLETE,
      streamId: U,
      success: !0
    });
  }, function(t) {
    F.postMessage({
      sourceName: Z,
      targetName: d,
      stream: Wl.START_COMPLETE,
      streamId: U,
      reason: rl(t)
    });
  });
}, gc = new WeakSet(), fs = function(l) {
  const U = l.streamId, Z = this.sourceName, d = l.sourceName, F = this.comObj, W = this.streamControllers[U], V = this.streamSinks[U];
  switch (l.stream) {
    case Wl.START_COMPLETE:
      l.success ? W.startCall.resolve() : W.startCall.reject(rl(l.reason));
      break;
    case Wl.PULL_COMPLETE:
      l.success ? W.pullCall.resolve() : W.pullCall.reject(rl(l.reason));
      break;
    case Wl.PULL:
      if (!V) {
        F.postMessage({
          sourceName: Z,
          targetName: d,
          stream: Wl.PULL_COMPLETE,
          streamId: U,
          success: !0
        });
        break;
      }
      V.desiredSize <= 0 && l.desiredSize > 0 && V.sinkCapability.resolve(), V.desiredSize = l.desiredSize, new Promise(function(c) {
        var t;
        c((t = V.onPull) == null ? void 0 : t.call(V));
      }).then(function() {
        F.postMessage({
          sourceName: Z,
          targetName: d,
          stream: Wl.PULL_COMPLETE,
          streamId: U,
          success: !0
        });
      }, function(c) {
        F.postMessage({
          sourceName: Z,
          targetName: d,
          stream: Wl.PULL_COMPLETE,
          streamId: U,
          reason: rl(c)
        });
      });
      break;
    case Wl.ENQUEUE:
      if (sl(W, "enqueue should have stream controller"), W.isClosed)
        break;
      W.controller.enqueue(l.chunk);
      break;
    case Wl.CLOSE:
      if (sl(W, "close should have stream controller"), W.isClosed)
        break;
      W.isClosed = !0, W.controller.close(), m(this, jF, xV).call(this, W, U);
      break;
    case Wl.ERROR:
      sl(W, "error should have stream controller"), W.controller.error(rl(l.reason)), m(this, jF, xV).call(this, W, U);
      break;
    case Wl.CANCEL_COMPLETE:
      l.success ? W.cancelCall.resolve() : W.cancelCall.reject(rl(l.reason)), m(this, jF, xV).call(this, W, U);
      break;
    case Wl.CANCEL:
      if (!V)
        break;
      new Promise(function(c) {
        var t;
        c((t = V.onCancel) == null ? void 0 : t.call(V, rl(l.reason)));
      }).then(function() {
        F.postMessage({
          sourceName: Z,
          targetName: d,
          stream: Wl.CANCEL_COMPLETE,
          streamId: U,
          success: !0
        });
      }, function(c) {
        F.postMessage({
          sourceName: Z,
          targetName: d,
          stream: Wl.CANCEL_COMPLETE,
          streamId: U,
          reason: rl(c)
        });
      }), V.sinkCapability.reject(rl(l.reason)), V.isCancelled = !0, delete this.streamSinks[U];
      break;
    default:
      throw new Error("Unexpected stream case");
  }
}, jF = new WeakSet(), xV = async function(l, U) {
  var Z, d, F;
  await Promise.allSettled([(Z = l.startCall) == null ? void 0 : Z.promise, (d = l.pullCall) == null ? void 0 : d.promise, (F = l.cancelCall) == null ? void 0 : F.promise]), delete this.streamControllers[U];
};
var Xd, UQ;
class Wn {
  constructor({
    parsedData: l,
    rawData: U
  }) {
    a(this, Xd, void 0);
    a(this, UQ, void 0);
    i(this, Xd, l), i(this, UQ, U);
  }
  getRaw() {
    return Q(this, UQ);
  }
  get(l) {
    return Q(this, Xd).get(l) ?? null;
  }
  getAll() {
    return iN(Q(this, Xd));
  }
  has(l) {
    return Q(this, Xd).has(l);
  }
}
Xd = new WeakMap(), UQ = new WeakMap();
const GZ = Symbol("INTERNAL");
var ZQ, dQ, FQ, OF;
class Qn {
  constructor(l, {
    name: U,
    intent: Z,
    usage: d
  }) {
    a(this, ZQ, !1);
    a(this, dQ, !1);
    a(this, FQ, !1);
    a(this, OF, !0);
    i(this, ZQ, !!(l & UU.DISPLAY)), i(this, dQ, !!(l & UU.PRINT)), this.name = U, this.intent = Z, this.usage = d;
  }
  get visible() {
    if (Q(this, FQ))
      return Q(this, OF);
    if (!Q(this, OF))
      return !1;
    const {
      print: l,
      view: U
    } = this.usage;
    return Q(this, ZQ) ? (U == null ? void 0 : U.viewState) !== "OFF" : Q(this, dQ) ? (l == null ? void 0 : l.printState) !== "OFF" : !0;
  }
  _setVisible(l, U, Z = !1) {
    l !== GZ && f("Internal method `_setVisible` called."), i(this, FQ, Z), i(this, OF, U);
  }
}
ZQ = new WeakMap(), dQ = new WeakMap(), FQ = new WeakMap(), OF = new WeakMap();
var kZ, A, rF, KF, WQ, jR;
class Vn {
  constructor(l, U = UU.DISPLAY) {
    a(this, WQ);
    a(this, kZ, null);
    a(this, A, /* @__PURE__ */ new Map());
    a(this, rF, null);
    a(this, KF, null);
    if (this.renderingIntent = U, this.name = null, this.creator = null, l !== null) {
      this.name = l.name, this.creator = l.creator, i(this, KF, l.order);
      for (const Z of l.groups)
        Q(this, A).set(Z.id, new Qn(U, Z));
      if (l.baseState === "OFF")
        for (const Z of Q(this, A).values())
          Z._setVisible(GZ, !1);
      for (const Z of l.on)
        Q(this, A).get(Z)._setVisible(GZ, !0);
      for (const Z of l.off)
        Q(this, A).get(Z)._setVisible(GZ, !1);
      i(this, rF, this.getHash());
    }
  }
  isVisible(l) {
    if (Q(this, A).size === 0)
      return !0;
    if (!l)
      return gt("Optional content group not defined."), !0;
    if (l.type === "OCG")
      return Q(this, A).has(l.id) ? Q(this, A).get(l.id).visible : (w(`Optional content group not found: ${l.id}`), !0);
    if (l.type === "OCMD") {
      if (l.expression)
        return m(this, WQ, jR).call(this, l.expression);
      if (!l.policy || l.policy === "AnyOn") {
        for (const U of l.ids) {
          if (!Q(this, A).has(U))
            return w(`Optional content group not found: ${U}`), !0;
          if (Q(this, A).get(U).visible)
            return !0;
        }
        return !1;
      } else if (l.policy === "AllOn") {
        for (const U of l.ids) {
          if (!Q(this, A).has(U))
            return w(`Optional content group not found: ${U}`), !0;
          if (!Q(this, A).get(U).visible)
            return !1;
        }
        return !0;
      } else if (l.policy === "AnyOff") {
        for (const U of l.ids) {
          if (!Q(this, A).has(U))
            return w(`Optional content group not found: ${U}`), !0;
          if (!Q(this, A).get(U).visible)
            return !0;
        }
        return !1;
      } else if (l.policy === "AllOff") {
        for (const U of l.ids) {
          if (!Q(this, A).has(U))
            return w(`Optional content group not found: ${U}`), !0;
          if (Q(this, A).get(U).visible)
            return !1;
        }
        return !0;
      }
      return w(`Unknown optional content policy ${l.policy}.`), !0;
    }
    return w(`Unknown group type ${l.type}.`), !0;
  }
  setVisibility(l, U = !0) {
    const Z = Q(this, A).get(l);
    if (!Z) {
      w(`Optional content group not found: ${l}`);
      return;
    }
    Z._setVisible(GZ, !!U, !0), i(this, kZ, null);
  }
  setOCGState({
    state: l,
    preserveRB: U
  }) {
    let Z;
    for (const d of l) {
      switch (d) {
        case "ON":
        case "OFF":
        case "Toggle":
          Z = d;
          continue;
      }
      const F = Q(this, A).get(d);
      if (F)
        switch (Z) {
          case "ON":
            F._setVisible(GZ, !0);
            break;
          case "OFF":
            F._setVisible(GZ, !1);
            break;
          case "Toggle":
            F._setVisible(GZ, !F.visible);
            break;
        }
    }
    i(this, kZ, null);
  }
  get hasInitialVisibility() {
    return Q(this, rF) === null || this.getHash() === Q(this, rF);
  }
  getOrder() {
    return Q(this, A).size ? Q(this, KF) ? Q(this, KF).slice() : [...Q(this, A).keys()] : null;
  }
  getGroups() {
    return Q(this, A).size > 0 ? iN(Q(this, A)) : null;
  }
  getGroup(l) {
    return Q(this, A).get(l) || null;
  }
  getHash() {
    if (Q(this, kZ) !== null)
      return Q(this, kZ);
    const l = new js();
    for (const [U, Z] of Q(this, A))
      l.update(`${U}:${Z.visible}`);
    return i(this, kZ, l.hexdigest());
  }
}
kZ = new WeakMap(), A = new WeakMap(), rF = new WeakMap(), KF = new WeakMap(), WQ = new WeakSet(), jR = function(l) {
  const U = l.length;
  if (U < 2)
    return !0;
  const Z = l[0];
  for (let d = 1; d < U; d++) {
    const F = l[d];
    let W;
    if (Array.isArray(F))
      W = m(this, WQ, jR).call(this, F);
    else if (Q(this, A).has(F))
      W = Q(this, A).get(F).visible;
    else
      return w(`Optional content group not found: ${F}`), !0;
    switch (Z) {
      case "And":
        if (!W)
          return !1;
        break;
      case "Or":
        if (W)
          return !0;
        break;
      case "Not":
        return !W;
      default:
        return !0;
    }
  }
  return Z === "And";
};
class cn {
  constructor(l, {
    disableRange: U = !1,
    disableStream: Z = !1
  }) {
    sl(l, 'PDFDataTransportStream - missing required "pdfDataRangeTransport" argument.');
    const {
      length: d,
      initialData: F,
      progressiveDone: W,
      contentDispositionFilename: V
    } = l;
    if (this._queuedChunks = [], this._progressiveDone = W, this._contentDispositionFilename = V, (F == null ? void 0 : F.length) > 0) {
      const c = F instanceof Uint8Array && F.byteLength === F.buffer.byteLength ? F.buffer : new Uint8Array(F).buffer;
      this._queuedChunks.push(c);
    }
    this._pdfDataRangeTransport = l, this._isStreamingSupported = !Z, this._isRangeSupported = !U, this._contentLength = d, this._fullRequestReader = null, this._rangeReaders = [], l.addRangeListener((c, t) => {
      this._onReceiveData({
        begin: c,
        chunk: t
      });
    }), l.addProgressListener((c, t) => {
      this._onProgress({
        loaded: c,
        total: t
      });
    }), l.addProgressiveReadListener((c) => {
      this._onReceiveData({
        chunk: c
      });
    }), l.addProgressiveDoneListener(() => {
      this._onProgressiveDone();
    }), l.transportReady();
  }
  _onReceiveData({
    begin: l,
    chunk: U
  }) {
    const Z = U instanceof Uint8Array && U.byteLength === U.buffer.byteLength ? U.buffer : new Uint8Array(U).buffer;
    if (l === void 0)
      this._fullRequestReader ? this._fullRequestReader._enqueue(Z) : this._queuedChunks.push(Z);
    else {
      const d = this._rangeReaders.some(function(F) {
        return F._begin !== l ? !1 : (F._enqueue(Z), !0);
      });
      sl(d, "_onReceiveData - no `PDFDataTransportStreamRangeReader` instance found.");
    }
  }
  get _progressiveDataLength() {
    var l;
    return ((l = this._fullRequestReader) == null ? void 0 : l._loaded) ?? 0;
  }
  _onProgress(l) {
    var U, Z, d, F;
    l.total === void 0 ? (Z = (U = this._rangeReaders[0]) == null ? void 0 : U.onProgress) == null || Z.call(U, {
      loaded: l.loaded
    }) : (F = (d = this._fullRequestReader) == null ? void 0 : d.onProgress) == null || F.call(d, {
      loaded: l.loaded,
      total: l.total
    });
  }
  _onProgressiveDone() {
    var l;
    (l = this._fullRequestReader) == null || l.progressiveDone(), this._progressiveDone = !0;
  }
  _removeRangeReader(l) {
    const U = this._rangeReaders.indexOf(l);
    U >= 0 && this._rangeReaders.splice(U, 1);
  }
  getFullReader() {
    sl(!this._fullRequestReader, "PDFDataTransportStream.getFullReader can only be called once.");
    const l = this._queuedChunks;
    return this._queuedChunks = null, new tn(this, l, this._progressiveDone, this._contentDispositionFilename);
  }
  getRangeReader(l, U) {
    if (U <= this._progressiveDataLength)
      return null;
    const Z = new Rn(this, l, U);
    return this._pdfDataRangeTransport.requestDataRange(l, U), this._rangeReaders.push(Z), Z;
  }
  cancelAllRequests(l) {
    var U;
    (U = this._fullRequestReader) == null || U.cancel(l);
    for (const Z of this._rangeReaders.slice(0))
      Z.cancel(l);
    this._pdfDataRangeTransport.abort();
  }
}
class tn {
  constructor(l, U, Z = !1, d = null) {
    this._stream = l, this._done = Z || !1, this._filename = XN(d) ? d : null, this._queuedChunks = U || [], this._loaded = 0;
    for (const F of this._queuedChunks)
      this._loaded += F.byteLength;
    this._requests = [], this._headersReady = Promise.resolve(), l._fullRequestReader = this, this.onProgress = null;
  }
  _enqueue(l) {
    this._done || (this._requests.length > 0 ? this._requests.shift().resolve({
      value: l,
      done: !1
    }) : this._queuedChunks.push(l), this._loaded += l.byteLength);
  }
  get headersReady() {
    return this._headersReady;
  }
  get filename() {
    return this._filename;
  }
  get isRangeSupported() {
    return this._stream._isRangeSupported;
  }
  get isStreamingSupported() {
    return this._stream._isStreamingSupported;
  }
  get contentLength() {
    return this._stream._contentLength;
  }
  async read() {
    if (this._queuedChunks.length > 0)
      return {
        value: this._queuedChunks.shift(),
        done: !1
      };
    if (this._done)
      return {
        value: void 0,
        done: !0
      };
    const l = Promise.withResolvers();
    return this._requests.push(l), l.promise;
  }
  cancel(l) {
    this._done = !0;
    for (const U of this._requests)
      U.resolve({
        value: void 0,
        done: !0
      });
    this._requests.length = 0;
  }
  progressiveDone() {
    this._done || (this._done = !0);
  }
}
class Rn {
  constructor(l, U, Z) {
    this._stream = l, this._begin = U, this._end = Z, this._queuedChunk = null, this._requests = [], this._done = !1, this.onProgress = null;
  }
  _enqueue(l) {
    if (!this._done) {
      if (this._requests.length === 0)
        this._queuedChunk = l;
      else {
        this._requests.shift().resolve({
          value: l,
          done: !1
        });
        for (const Z of this._requests)
          Z.resolve({
            value: void 0,
            done: !0
          });
        this._requests.length = 0;
      }
      this._done = !0, this._stream._removeRangeReader(this);
    }
  }
  get isStreamingSupported() {
    return !1;
  }
  async read() {
    if (this._queuedChunk) {
      const U = this._queuedChunk;
      return this._queuedChunk = null, {
        value: U,
        done: !1
      };
    }
    if (this._done)
      return {
        value: void 0,
        done: !0
      };
    const l = Promise.withResolvers();
    return this._requests.push(l), l.promise;
  }
  cancel(l) {
    this._done = !0;
    for (const U of this._requests)
      U.resolve({
        value: void 0,
        done: !0
      });
    this._requests.length = 0, this._stream._removeRangeReader(this);
  }
}
function Nn(R) {
  let l = !0, U = Z("filename\\*", "i").exec(R);
  if (U) {
    U = U[1];
    let N = V(U);
    return N = unescape(N), N = c(N), N = t(N), F(N);
  }
  if (U = W(R), U) {
    const N = t(U);
    return F(N);
  }
  if (U = Z("filename", "i").exec(R), U) {
    U = U[1];
    let N = V(U);
    return N = t(N), F(N);
  }
  function Z(N, s) {
    return new RegExp("(?:^|;)\\s*" + N + '\\s*=\\s*([^";\\s][^;\\s]*|"(?:[^"\\\\]|\\\\"?)+"?)', s);
  }
  function d(N, s) {
    if (N) {
      if (!/^[\x00-\xFF]+$/.test(s))
        return s;
      try {
        const b = new TextDecoder(N, {
          fatal: !0
        }), n = vt(s);
        s = b.decode(n), l = !1;
      } catch {
      }
    }
    return s;
  }
  function F(N) {
    return l && /[\x80-\xff]/.test(N) && (N = d("utf-8", N), l && (N = d("iso-8859-1", N))), N;
  }
  function W(N) {
    const s = [];
    let b;
    const n = Z("filename\\*((?!0\\d)\\d+)(\\*?)", "ig");
    for (; (b = n.exec(N)) !== null; ) {
      let [, M, G, J] = b;
      if (M = parseInt(M, 10), M in s) {
        if (M === 0)
          break;
        continue;
      }
      s[M] = [G, J];
    }
    const h = [];
    for (let M = 0; M < s.length && M in s; ++M) {
      let [G, J] = s[M];
      J = V(J), G && (J = unescape(J), M === 0 && (J = c(J))), h.push(J);
    }
    return h.join("");
  }
  function V(N) {
    if (N.startsWith('"')) {
      const s = N.slice(1).split('\\"');
      for (let b = 0; b < s.length; ++b) {
        const n = s[b].indexOf('"');
        n !== -1 && (s[b] = s[b].slice(0, n), s.length = b + 1), s[b] = s[b].replaceAll(/\\(.)/g, "$1");
      }
      N = s.join('"');
    }
    return N;
  }
  function c(N) {
    const s = N.indexOf("'");
    if (s === -1)
      return N;
    const b = N.slice(0, s), h = N.slice(s + 1).replace(/^[^']*'/, "");
    return d(b, h);
  }
  function t(N) {
    return !N.startsWith("=?") || /[\x00-\x19\x80-\xff]/.test(N) ? N : N.replaceAll(/=\?([\w-]*)\?([QqBb])\?((?:[^?]|\?(?!=))*)\?=/g, function(s, b, n, h) {
      if (n === "q" || n === "Q")
        return h = h.replaceAll("_", " "), h = h.replaceAll(/=([0-9a-fA-F]{2})/g, function(M, G) {
          return String.fromCharCode(parseInt(G, 16));
        }), d(b, h);
      try {
        h = atob(h);
      } catch {
      }
      return d(b, h);
    });
  }
  return "";
}
function eN({
  getResponseHeader: R,
  isHttp: l,
  rangeChunkSize: U,
  disableRange: Z
}) {
  const d = {
    allowRangeRequests: !1,
    suggestedLength: void 0
  }, F = parseInt(R("Content-Length"), 10);
  return !Number.isInteger(F) || (d.suggestedLength = F, F <= 2 * U) || Z || !l || R("Accept-Ranges") !== "bytes" || (R("Content-Encoding") || "identity") !== "identity" || (d.allowRangeRequests = !0), d;
}
function pN(R) {
  const l = R("Content-Disposition");
  if (l) {
    let U = Nn(l);
    if (U.includes("%"))
      try {
        U = decodeURIComponent(U);
      } catch {
      }
    if (XN(U))
      return U;
  }
  return null;
}
function $t(R, l) {
  return R === 404 || R === 0 && l.startsWith("file:") ? new VF('Missing PDF "' + l + '".') : new Ht(`Unexpected server response (${R}) while retrieving PDF "${l}".`, R);
}
function _s(R) {
  return R === 200 || R === 206;
}
function qs(R, l, U) {
  return {
    method: "GET",
    headers: R,
    signal: U.signal,
    mode: "cors",
    credentials: l ? "include" : "same-origin",
    redirect: "follow"
  };
}
function $s(R) {
  const l = new Headers();
  for (const U in R) {
    const Z = R[U];
    Z !== void 0 && l.append(U, Z);
  }
  return l;
}
function lb(R) {
  return R instanceof Uint8Array ? R.buffer : R instanceof ArrayBuffer ? R : (w(`getArrayBuffer - unexpected data format: ${R}`), new Uint8Array(R).buffer);
}
class Us {
  constructor(l) {
    this.source = l, this.isHttp = /^https?:/i.test(l.url), this.httpHeaders = this.isHttp && l.httpHeaders || {}, this._fullRequestReader = null, this._rangeRequestReaders = [];
  }
  get _progressiveDataLength() {
    var l;
    return ((l = this._fullRequestReader) == null ? void 0 : l._loaded) ?? 0;
  }
  getFullReader() {
    return sl(!this._fullRequestReader, "PDFFetchStream.getFullReader can only be called once."), this._fullRequestReader = new sn(this), this._fullRequestReader;
  }
  getRangeReader(l, U) {
    if (U <= this._progressiveDataLength)
      return null;
    const Z = new bn(this, l, U);
    return this._rangeRequestReaders.push(Z), Z;
  }
  cancelAllRequests(l) {
    var U;
    (U = this._fullRequestReader) == null || U.cancel(l);
    for (const Z of this._rangeRequestReaders.slice(0))
      Z.cancel(l);
  }
}
class sn {
  constructor(l) {
    this._stream = l, this._reader = null, this._loaded = 0, this._filename = null;
    const U = l.source;
    this._withCredentials = U.withCredentials || !1, this._contentLength = U.length, this._headersCapability = Promise.withResolvers(), this._disableRange = U.disableRange || !1, this._rangeChunkSize = U.rangeChunkSize, !this._rangeChunkSize && !this._disableRange && (this._disableRange = !0), this._abortController = new AbortController(), this._isStreamingSupported = !U.disableStream, this._isRangeSupported = !U.disableRange, this._headers = $s(this._stream.httpHeaders);
    const Z = U.url;
    fetch(Z, qs(this._headers, this._withCredentials, this._abortController)).then((d) => {
      if (!_s(d.status))
        throw $t(d.status, Z);
      this._reader = d.body.getReader(), this._headersCapability.resolve();
      const F = (c) => d.headers.get(c), {
        allowRangeRequests: W,
        suggestedLength: V
      } = eN({
        getResponseHeader: F,
        isHttp: this._stream.isHttp,
        rangeChunkSize: this._rangeChunkSize,
        disableRange: this._disableRange
      });
      this._isRangeSupported = W, this._contentLength = V || this._contentLength, this._filename = pN(F), !this._isStreamingSupported && this._isRangeSupported && this.cancel(new cF("Streaming is disabled."));
    }).catch(this._headersCapability.reject), this.onProgress = null;
  }
  get headersReady() {
    return this._headersCapability.promise;
  }
  get filename() {
    return this._filename;
  }
  get contentLength() {
    return this._contentLength;
  }
  get isRangeSupported() {
    return this._isRangeSupported;
  }
  get isStreamingSupported() {
    return this._isStreamingSupported;
  }
  async read() {
    var Z;
    await this._headersCapability.promise;
    const {
      value: l,
      done: U
    } = await this._reader.read();
    return U ? {
      value: l,
      done: U
    } : (this._loaded += l.byteLength, (Z = this.onProgress) == null || Z.call(this, {
      loaded: this._loaded,
      total: this._contentLength
    }), {
      value: lb(l),
      done: !1
    });
  }
  cancel(l) {
    var U;
    (U = this._reader) == null || U.cancel(l), this._abortController.abort();
  }
}
class bn {
  constructor(l, U, Z) {
    this._stream = l, this._reader = null, this._loaded = 0;
    const d = l.source;
    this._withCredentials = d.withCredentials || !1, this._readCapability = Promise.withResolvers(), this._isStreamingSupported = !d.disableStream, this._abortController = new AbortController(), this._headers = $s(this._stream.httpHeaders), this._headers.append("Range", `bytes=${U}-${Z - 1}`);
    const F = d.url;
    fetch(F, qs(this._headers, this._withCredentials, this._abortController)).then((W) => {
      if (!_s(W.status))
        throw $t(W.status, F);
      this._readCapability.resolve(), this._reader = W.body.getReader();
    }).catch(this._readCapability.reject), this.onProgress = null;
  }
  get isStreamingSupported() {
    return this._isStreamingSupported;
  }
  async read() {
    var Z;
    await this._readCapability.promise;
    const {
      value: l,
      done: U
    } = await this._reader.read();
    return U ? {
      value: l,
      done: U
    } : (this._loaded += l.byteLength, (Z = this.onProgress) == null || Z.call(this, {
      loaded: this._loaded
    }), {
      value: lb(l),
      done: !1
    });
  }
  cancel(l) {
    var U;
    (U = this._reader) == null || U.cancel(l), this._abortController.abort();
  }
}
const tR = 200, RR = 206;
function an(R) {
  const l = R.response;
  return typeof l != "string" ? l : vt(l).buffer;
}
class nn {
  constructor(l, U = {}) {
    this.url = l, this.isHttp = /^https?:/i.test(l), this.httpHeaders = this.isHttp && U.httpHeaders || /* @__PURE__ */ Object.create(null), this.withCredentials = U.withCredentials || !1, this.currXhrId = 0, this.pendingRequests = /* @__PURE__ */ Object.create(null);
  }
  requestRange(l, U, Z) {
    const d = {
      begin: l,
      end: U
    };
    for (const F in Z)
      d[F] = Z[F];
    return this.request(d);
  }
  requestFull(l) {
    return this.request(l);
  }
  request(l) {
    const U = new XMLHttpRequest(), Z = this.currXhrId++, d = this.pendingRequests[Z] = {
      xhr: U
    };
    U.open("GET", this.url), U.withCredentials = this.withCredentials;
    for (const F in this.httpHeaders) {
      const W = this.httpHeaders[F];
      W !== void 0 && U.setRequestHeader(F, W);
    }
    return this.isHttp && "begin" in l && "end" in l ? (U.setRequestHeader("Range", `bytes=${l.begin}-${l.end - 1}`), d.expectedStatus = RR) : d.expectedStatus = tR, U.responseType = "arraybuffer", l.onError && (U.onerror = function(F) {
      l.onError(U.status);
    }), U.onreadystatechange = this.onStateChange.bind(this, Z), U.onprogress = this.onProgress.bind(this, Z), d.onHeadersReceived = l.onHeadersReceived, d.onDone = l.onDone, d.onError = l.onError, d.onProgress = l.onProgress, U.send(null), Z;
  }
  onProgress(l, U) {
    var d;
    const Z = this.pendingRequests[l];
    Z && ((d = Z.onProgress) == null || d.call(Z, U));
  }
  onStateChange(l, U) {
    var c, t, N;
    const Z = this.pendingRequests[l];
    if (!Z)
      return;
    const d = Z.xhr;
    if (d.readyState >= 2 && Z.onHeadersReceived && (Z.onHeadersReceived(), delete Z.onHeadersReceived), d.readyState !== 4 || !(l in this.pendingRequests))
      return;
    if (delete this.pendingRequests[l], d.status === 0 && this.isHttp) {
      (c = Z.onError) == null || c.call(Z, d.status);
      return;
    }
    const F = d.status || tR;
    if (!(F === tR && Z.expectedStatus === RR) && F !== Z.expectedStatus) {
      (t = Z.onError) == null || t.call(Z, d.status);
      return;
    }
    const V = an(d);
    if (F === RR) {
      const s = d.getResponseHeader("Content-Range"), b = /bytes (\d+)-(\d+)\/(\d+)/.exec(s);
      Z.onDone({
        begin: parseInt(b[1], 10),
        chunk: V
      });
    } else
      V ? Z.onDone({
        begin: 0,
        chunk: V
      }) : (N = Z.onError) == null || N.call(Z, d.status);
  }
  getRequestXhr(l) {
    return this.pendingRequests[l].xhr;
  }
  isPendingRequest(l) {
    return l in this.pendingRequests;
  }
  abortRequest(l) {
    const U = this.pendingRequests[l].xhr;
    delete this.pendingRequests[l], U.abort();
  }
}
class hn {
  constructor(l) {
    this._source = l, this._manager = new nn(l.url, {
      httpHeaders: l.httpHeaders,
      withCredentials: l.withCredentials
    }), this._rangeChunkSize = l.rangeChunkSize, this._fullRequestReader = null, this._rangeRequestReaders = [];
  }
  _onRangeRequestReaderClosed(l) {
    const U = this._rangeRequestReaders.indexOf(l);
    U >= 0 && this._rangeRequestReaders.splice(U, 1);
  }
  getFullReader() {
    return sl(!this._fullRequestReader, "PDFNetworkStream.getFullReader can only be called once."), this._fullRequestReader = new mn(this._manager, this._source), this._fullRequestReader;
  }
  getRangeReader(l, U) {
    const Z = new Mn(this._manager, l, U);
    return Z.onClosed = this._onRangeRequestReaderClosed.bind(this), this._rangeRequestReaders.push(Z), Z;
  }
  cancelAllRequests(l) {
    var U;
    (U = this._fullRequestReader) == null || U.cancel(l);
    for (const Z of this._rangeRequestReaders.slice(0))
      Z.cancel(l);
  }
}
class mn {
  constructor(l, U) {
    this._manager = l;
    const Z = {
      onHeadersReceived: this._onHeadersReceived.bind(this),
      onDone: this._onDone.bind(this),
      onError: this._onError.bind(this),
      onProgress: this._onProgress.bind(this)
    };
    this._url = U.url, this._fullRequestId = l.requestFull(Z), this._headersReceivedCapability = Promise.withResolvers(), this._disableRange = U.disableRange || !1, this._contentLength = U.length, this._rangeChunkSize = U.rangeChunkSize, !this._rangeChunkSize && !this._disableRange && (this._disableRange = !0), this._isStreamingSupported = !1, this._isRangeSupported = !1, this._cachedChunks = [], this._requests = [], this._done = !1, this._storedError = void 0, this._filename = null, this.onProgress = null;
  }
  _onHeadersReceived() {
    const l = this._fullRequestId, U = this._manager.getRequestXhr(l), Z = (W) => U.getResponseHeader(W), {
      allowRangeRequests: d,
      suggestedLength: F
    } = eN({
      getResponseHeader: Z,
      isHttp: this._manager.isHttp,
      rangeChunkSize: this._rangeChunkSize,
      disableRange: this._disableRange
    });
    d && (this._isRangeSupported = !0), this._contentLength = F || this._contentLength, this._filename = pN(Z), this._isRangeSupported && this._manager.abortRequest(l), this._headersReceivedCapability.resolve();
  }
  _onDone(l) {
    if (l && (this._requests.length > 0 ? this._requests.shift().resolve({
      value: l.chunk,
      done: !1
    }) : this._cachedChunks.push(l.chunk)), this._done = !0, !(this._cachedChunks.length > 0)) {
      for (const U of this._requests)
        U.resolve({
          value: void 0,
          done: !0
        });
      this._requests.length = 0;
    }
  }
  _onError(l) {
    this._storedError = $t(l, this._url), this._headersReceivedCapability.reject(this._storedError);
    for (const U of this._requests)
      U.reject(this._storedError);
    this._requests.length = 0, this._cachedChunks.length = 0;
  }
  _onProgress(l) {
    var U;
    (U = this.onProgress) == null || U.call(this, {
      loaded: l.loaded,
      total: l.lengthComputable ? l.total : this._contentLength
    });
  }
  get filename() {
    return this._filename;
  }
  get isRangeSupported() {
    return this._isRangeSupported;
  }
  get isStreamingSupported() {
    return this._isStreamingSupported;
  }
  get contentLength() {
    return this._contentLength;
  }
  get headersReady() {
    return this._headersReceivedCapability.promise;
  }
  async read() {
    if (this._storedError)
      throw this._storedError;
    if (this._cachedChunks.length > 0)
      return {
        value: this._cachedChunks.shift(),
        done: !1
      };
    if (this._done)
      return {
        value: void 0,
        done: !0
      };
    const l = Promise.withResolvers();
    return this._requests.push(l), l.promise;
  }
  cancel(l) {
    this._done = !0, this._headersReceivedCapability.reject(l);
    for (const U of this._requests)
      U.resolve({
        value: void 0,
        done: !0
      });
    this._requests.length = 0, this._manager.isPendingRequest(this._fullRequestId) && this._manager.abortRequest(this._fullRequestId), this._fullRequestReader = null;
  }
}
class Mn {
  constructor(l, U, Z) {
    this._manager = l;
    const d = {
      onDone: this._onDone.bind(this),
      onError: this._onError.bind(this),
      onProgress: this._onProgress.bind(this)
    };
    this._url = l.url, this._requestId = l.requestRange(U, Z, d), this._requests = [], this._queuedChunk = null, this._done = !1, this._storedError = void 0, this.onProgress = null, this.onClosed = null;
  }
  _close() {
    var l;
    (l = this.onClosed) == null || l.call(this, this);
  }
  _onDone(l) {
    const U = l.chunk;
    this._requests.length > 0 ? this._requests.shift().resolve({
      value: U,
      done: !1
    }) : this._queuedChunk = U, this._done = !0;
    for (const Z of this._requests)
      Z.resolve({
        value: void 0,
        done: !0
      });
    this._requests.length = 0, this._close();
  }
  _onError(l) {
    this._storedError = $t(l, this._url);
    for (const U of this._requests)
      U.reject(this._storedError);
    this._requests.length = 0, this._queuedChunk = null;
  }
  _onProgress(l) {
    var U;
    this.isStreamingSupported || (U = this.onProgress) == null || U.call(this, {
      loaded: l.loaded
    });
  }
  get isStreamingSupported() {
    return !1;
  }
  async read() {
    if (this._storedError)
      throw this._storedError;
    if (this._queuedChunk !== null) {
      const U = this._queuedChunk;
      return this._queuedChunk = null, {
        value: U,
        done: !1
      };
    }
    if (this._done)
      return {
        value: void 0,
        done: !0
      };
    const l = Promise.withResolvers();
    return this._requests.push(l), l.promise;
  }
  cancel(l) {
    this._done = !0;
    for (const U of this._requests)
      U.resolve({
        value: void 0,
        done: !0
      });
    this._requests.length = 0, this._manager.isPendingRequest(this._requestId) && this._manager.abortRequest(this._requestId), this._close();
  }
}
const Ub = /^file:\/\/\/[a-zA-Z]:\//;
function Jn(R) {
  const l = EU.get("url"), U = l.parse(R);
  return U.protocol === "file:" || U.host ? U : /^[a-z]:[/\\]/i.test(R) ? l.parse(`file:///${R}`) : (U.host || (U.protocol = "file:"), U);
}
class Gn {
  constructor(l) {
    this.source = l, this.url = Jn(l.url), this.isHttp = this.url.protocol === "http:" || this.url.protocol === "https:", this.isFsUrl = this.url.protocol === "file:", this.httpHeaders = this.isHttp && l.httpHeaders || {}, this._fullRequestReader = null, this._rangeRequestReaders = [];
  }
  get _progressiveDataLength() {
    var l;
    return ((l = this._fullRequestReader) == null ? void 0 : l._loaded) ?? 0;
  }
  getFullReader() {
    return sl(!this._fullRequestReader, "PDFNodeStream.getFullReader can only be called once."), this._fullRequestReader = this.isFsUrl ? new Yn(this) : new Tn(this), this._fullRequestReader;
  }
  getRangeReader(l, U) {
    if (U <= this._progressiveDataLength)
      return null;
    const Z = this.isFsUrl ? new Sn(this, l, U) : new Xn(this, l, U);
    return this._rangeRequestReaders.push(Z), Z;
  }
  cancelAllRequests(l) {
    var U;
    (U = this._fullRequestReader) == null || U.cancel(l);
    for (const Z of this._rangeRequestReaders.slice(0))
      Z.cancel(l);
  }
}
class Zb {
  constructor(l) {
    this._url = l.url, this._done = !1, this._storedError = null, this.onProgress = null;
    const U = l.source;
    this._contentLength = U.length, this._loaded = 0, this._filename = null, this._disableRange = U.disableRange || !1, this._rangeChunkSize = U.rangeChunkSize, !this._rangeChunkSize && !this._disableRange && (this._disableRange = !0), this._isStreamingSupported = !U.disableStream, this._isRangeSupported = !U.disableRange, this._readableStream = null, this._readCapability = Promise.withResolvers(), this._headersCapability = Promise.withResolvers();
  }
  get headersReady() {
    return this._headersCapability.promise;
  }
  get filename() {
    return this._filename;
  }
  get contentLength() {
    return this._contentLength;
  }
  get isRangeSupported() {
    return this._isRangeSupported;
  }
  get isStreamingSupported() {
    return this._isStreamingSupported;
  }
  async read() {
    var Z;
    if (await this._readCapability.promise, this._done)
      return {
        value: void 0,
        done: !0
      };
    if (this._storedError)
      throw this._storedError;
    const l = this._readableStream.read();
    return l === null ? (this._readCapability = Promise.withResolvers(), this.read()) : (this._loaded += l.length, (Z = this.onProgress) == null || Z.call(this, {
      loaded: this._loaded,
      total: this._contentLength
    }), {
      value: new Uint8Array(l).buffer,
      done: !1
    });
  }
  cancel(l) {
    if (!this._readableStream) {
      this._error(l);
      return;
    }
    this._readableStream.destroy(l);
  }
  _error(l) {
    this._storedError = l, this._readCapability.resolve();
  }
  _setReadableStream(l) {
    this._readableStream = l, l.on("readable", () => {
      this._readCapability.resolve();
    }), l.on("end", () => {
      l.destroy(), this._done = !0, this._readCapability.resolve();
    }), l.on("error", (U) => {
      this._error(U);
    }), !this._isStreamingSupported && this._isRangeSupported && this._error(new cF("streaming is disabled")), this._storedError && this._readableStream.destroy(this._storedError);
  }
}
class db {
  constructor(l) {
    this._url = l.url, this._done = !1, this._storedError = null, this.onProgress = null, this._loaded = 0, this._readableStream = null, this._readCapability = Promise.withResolvers();
    const U = l.source;
    this._isStreamingSupported = !U.disableStream;
  }
  get isStreamingSupported() {
    return this._isStreamingSupported;
  }
  async read() {
    var Z;
    if (await this._readCapability.promise, this._done)
      return {
        value: void 0,
        done: !0
      };
    if (this._storedError)
      throw this._storedError;
    const l = this._readableStream.read();
    return l === null ? (this._readCapability = Promise.withResolvers(), this.read()) : (this._loaded += l.length, (Z = this.onProgress) == null || Z.call(this, {
      loaded: this._loaded
    }), {
      value: new Uint8Array(l).buffer,
      done: !1
    });
  }
  cancel(l) {
    if (!this._readableStream) {
      this._error(l);
      return;
    }
    this._readableStream.destroy(l);
  }
  _error(l) {
    this._storedError = l, this._readCapability.resolve();
  }
  _setReadableStream(l) {
    this._readableStream = l, l.on("readable", () => {
      this._readCapability.resolve();
    }), l.on("end", () => {
      l.destroy(), this._done = !0, this._readCapability.resolve();
    }), l.on("error", (U) => {
      this._error(U);
    }), this._storedError && this._readableStream.destroy(this._storedError);
  }
}
function cc(R, l) {
  return {
    protocol: R.protocol,
    auth: R.auth,
    host: R.hostname,
    port: R.port,
    path: R.path,
    method: "GET",
    headers: l
  };
}
class Tn extends Zb {
  constructor(l) {
    super(l);
    const U = (Z) => {
      if (Z.statusCode === 404) {
        const V = new VF(`Missing PDF "${this._url}".`);
        this._storedError = V, this._headersCapability.reject(V);
        return;
      }
      this._headersCapability.resolve(), this._setReadableStream(Z);
      const d = (V) => this._readableStream.headers[V.toLowerCase()], {
        allowRangeRequests: F,
        suggestedLength: W
      } = eN({
        getResponseHeader: d,
        isHttp: l.isHttp,
        rangeChunkSize: this._rangeChunkSize,
        disableRange: this._disableRange
      });
      this._isRangeSupported = F, this._contentLength = W || this._contentLength, this._filename = pN(d);
    };
    if (this._request = null, this._url.protocol === "http:") {
      const Z = EU.get("http");
      this._request = Z.request(cc(this._url, l.httpHeaders), U);
    } else {
      const Z = EU.get("https");
      this._request = Z.request(cc(this._url, l.httpHeaders), U);
    }
    this._request.on("error", (Z) => {
      this._storedError = Z, this._headersCapability.reject(Z);
    }), this._request.end();
  }
}
class Xn extends db {
  constructor(l, U, Z) {
    super(l), this._httpHeaders = {};
    for (const F in l.httpHeaders) {
      const W = l.httpHeaders[F];
      W !== void 0 && (this._httpHeaders[F] = W);
    }
    this._httpHeaders.Range = `bytes=${U}-${Z - 1}`;
    const d = (F) => {
      if (F.statusCode === 404) {
        const W = new VF(`Missing PDF "${this._url}".`);
        this._storedError = W;
        return;
      }
      this._setReadableStream(F);
    };
    if (this._request = null, this._url.protocol === "http:") {
      const F = EU.get("http");
      this._request = F.request(cc(this._url, this._httpHeaders), d);
    } else {
      const F = EU.get("https");
      this._request = F.request(cc(this._url, this._httpHeaders), d);
    }
    this._request.on("error", (F) => {
      this._storedError = F;
    }), this._request.end();
  }
}
class Yn extends Zb {
  constructor(l) {
    super(l);
    let U = decodeURIComponent(this._url.path);
    Ub.test(this._url.href) && (U = U.replace(/^\//, ""));
    const Z = EU.get("fs");
    Z.promises.lstat(U).then((d) => {
      this._contentLength = d.size, this._setReadableStream(Z.createReadStream(U)), this._headersCapability.resolve();
    }, (d) => {
      d.code === "ENOENT" && (d = new VF(`Missing PDF "${U}".`)), this._storedError = d, this._headersCapability.reject(d);
    });
  }
}
class Sn extends db {
  constructor(l, U, Z) {
    super(l);
    let d = decodeURIComponent(this._url.path);
    Ub.test(this._url.href) && (d = d.replace(/^\//, ""));
    const F = EU.get("fs");
    this._setReadableStream(F.createReadStream(d, {
      start: U,
      end: Z - 1
    }));
  }
}
class dW {
  static textContent(l) {
    const U = [], Z = {
      items: U,
      styles: /* @__PURE__ */ Object.create(null)
    };
    function d(F) {
      var c;
      if (!F)
        return;
      let W = null;
      const V = F.name;
      if (V === "#text")
        W = F.value;
      else if (dW.shouldBuildText(V))
        (c = F == null ? void 0 : F.attributes) != null && c.textContent ? W = F.attributes.textContent : F.value && (W = F.value);
      else
        return;
      if (W !== null && U.push({
        str: W
      }), !!F.children)
        for (const t of F.children)
          d(t);
    }
    return d(l), Z;
  }
  static shouldBuildText(l) {
    return !(l === "textarea" || l === "input" || l === "option" || l === "select");
  }
}
const Bn = 65536, en = 100, pn = 5e3, un = yl ? Ca : Sa, yn = yl ? wa : hs, Ln = yl ? Ea : Ya, zn = yl ? xa : ms;
function kn(R) {
  if (typeof R == "string" || R instanceof URL ? R = {
    url: R
  } : (R instanceof ArrayBuffer || ArrayBuffer.isView(R)) && (R = {
    data: R
  }), typeof R != "object")
    throw new Error("Invalid parameter in getDocument, need parameter object.");
  if (!R.url && !R.data && !R.range)
    throw new Error("Invalid parameter object: need either .data, .range or .url");
  const l = new jV(), {
    docId: U
  } = l, Z = R.url ? Dn(R.url) : null, d = R.data ? In(R.data) : null, F = R.httpHeaders || null, W = R.withCredentials === !0, V = R.password ?? null, c = R.range instanceof Fb ? R.range : null, t = Number.isInteger(R.rangeChunkSize) && R.rangeChunkSize > 0 ? R.rangeChunkSize : Bn;
  let N = R.worker instanceof rV ? R.worker : null;
  const s = R.verbosity, b = typeof R.docBaseUrl == "string" && !TN(R.docBaseUrl) ? R.docBaseUrl : null, n = typeof R.cMapUrl == "string" ? R.cMapUrl : null, h = R.cMapPacked !== !1, M = R.CMapReaderFactory || yn, G = typeof R.standardFontDataUrl == "string" ? R.standardFontDataUrl : null, J = R.StandardFontDataFactory || zn, T = R.stopAtErrors !== !0, X = Number.isInteger(R.maxImageSize) && R.maxImageSize > -1 ? R.maxImageSize : -1, S = R.isEvalSupported !== !1, e = typeof R.isOffscreenCanvasSupported == "boolean" ? R.isOffscreenCanvasSupported : !yl, Y = Number.isInteger(R.canvasMaxAreaInBytes) ? R.canvasMaxAreaInBytes : -1, B = typeof R.disableFontFace == "boolean" ? R.disableFontFace : yl, p = R.fontExtraProperties === !0, L = R.enableXfa === !0, E = R.ownerDocument || globalThis.document, y = R.disableRange === !0, g = R.disableStream === !0, x = R.disableAutoFetch === !0, H = R.pdfBug === !0, v = c ? c.length : R.length ?? NaN, q = typeof R.useSystemFonts == "boolean" ? R.useSystemFonts : !yl && !B, z = typeof R.useWorkerFetch == "boolean" ? R.useWorkerFetch : M === hs && J === ms && n && G && w0(n, document.baseURI) && w0(G, document.baseURI), C = R.canvasFactory || new un({
    ownerDocument: E
  }), RF = R.filterFactory || new Ln({
    docId: U,
    ownerDocument: E
  }), XV = null;
  ba(s);
  const NF = {
    canvasFactory: C,
    filterFactory: RF
  };
  if (z || (NF.cMapReaderFactory = new M({
    baseUrl: n,
    isCompressed: h
  }), NF.standardFontDataFactory = new J({
    baseUrl: G
  })), !N) {
    const mZ = {
      verbosity: s,
      port: nZ.workerPort
    };
    N = mZ.port ? rV.fromPort(mZ) : new rV(mZ), l._worker = N;
  }
  const Ol = {
    docId: U,
    apiVersion: "4.3.54",
    data: d,
    password: V,
    disableAutoFetch: x,
    rangeChunkSize: t,
    length: v,
    docBaseUrl: b,
    enableXfa: L,
    evaluatorOptions: {
      maxImageSize: X,
      disableFontFace: B,
      ignoreErrors: T,
      isEvalSupported: S,
      isOffscreenCanvasSupported: e,
      canvasMaxAreaInBytes: Y,
      fontExtraProperties: p,
      useSystemFonts: q,
      cMapUrl: z ? n : null,
      standardFontDataUrl: z ? G : null
    }
  }, hl = {
    disableFontFace: B,
    fontExtraProperties: p,
    enableXfa: L,
    ownerDocument: E,
    disableAutoFetch: x,
    pdfBug: H,
    styleElement: XV
  };
  return N.promise.then(function() {
    if (l.destroyed)
      throw new Error("Loading aborted");
    const mZ = on(N, Ol), lR = new Promise(function(iZ) {
      let $;
      c ? $ = new cn(c, {
        disableRange: y,
        disableStream: g
      }) : d || ($ = ((MZ) => yl ? function() {
        return typeof fetch < "u" && typeof Response < "u" && "body" in Response.prototype;
      }() && w0(MZ.url) ? new Us(MZ) : new Gn(MZ) : w0(MZ.url) ? new Us(MZ) : new hn(MZ))({
        url: Z,
        length: v,
        httpHeaders: F,
        withCredentials: W,
        rangeChunkSize: t,
        disableRange: y,
        disableStream: g
      })), iZ($);
    });
    return Promise.all([mZ, lR]).then(function([iZ, $]) {
      if (l.destroyed)
        throw new Error("Loading aborted");
      const UR = new O0(U, iZ, N.port), MZ = new xn(UR, l, $, hl, NF);
      l._transport = MZ, UR.send("Ready", null);
    });
  }).catch(l._capability.reject), l;
}
async function on(R, l) {
  if (R.destroyed)
    throw new Error("Worker was destroyed");
  const U = await R.messageHandler.sendWithPromise("GetDocRequest", l, l.data ? [l.data.buffer] : null);
  if (R.destroyed)
    throw new Error("Worker was destroyed");
  return U;
}
function Dn(R) {
  if (R instanceof URL)
    return R.href;
  try {
    return new URL(R, window.location).href;
  } catch {
    if (yl && typeof R == "string")
      return R;
  }
  throw new Error("Invalid PDF url data: either string or URL-object is expected in the url property.");
}
function In(R) {
  if (yl && typeof Buffer < "u" && R instanceof Buffer)
    throw new Error("Please provide binary data as `Uint8Array`, rather than `Buffer`.");
  if (R instanceof Uint8Array && R.byteLength === R.buffer.byteLength)
    return R;
  if (typeof R == "string")
    return vt(R);
  if (R instanceof ArrayBuffer || ArrayBuffer.isView(R) || typeof R == "object" && !isNaN(R == null ? void 0 : R.length))
    return new Uint8Array(R);
  throw new Error("Invalid PDF binary data: either TypedArray, string, or array-like object is expected in the data property.");
}
function Zs(R) {
  return typeof R == "object" && Number.isInteger(R == null ? void 0 : R.num) && R.num >= 0 && Number.isInteger(R == null ? void 0 : R.gen) && R.gen >= 0;
}
var Hc;
const oN = class {
  constructor() {
    this._capability = Promise.withResolvers(), this._transport = null, this._worker = null, this.docId = `d${ZU(oN, Hc)._++}`, this.destroyed = !1, this.onPassword = null, this.onProgress = null;
  }
  get promise() {
    return this._capability.promise;
  }
  async destroy() {
    var l, U, Z;
    this.destroyed = !0;
    try {
      (l = this._worker) != null && l.port && (this._worker._pendingDestroy = !0), await ((U = this._transport) == null ? void 0 : U.destroy());
    } catch (d) {
      throw (Z = this._worker) != null && Z.port && delete this._worker._pendingDestroy, d;
    }
    this._transport = null, this._worker && (this._worker.destroy(), this._worker = null);
  }
};
let jV = oN;
Hc = new WeakMap(), a(jV, Hc, 0);
class Fb {
  constructor(l, U, Z = !1, d = null) {
    this.length = l, this.initialData = U, this.progressiveDone = Z, this.contentDispositionFilename = d, this._rangeListeners = [], this._progressListeners = [], this._progressiveReadListeners = [], this._progressiveDoneListeners = [], this._readyCapability = Promise.withResolvers();
  }
  addRangeListener(l) {
    this._rangeListeners.push(l);
  }
  addProgressListener(l) {
    this._progressListeners.push(l);
  }
  addProgressiveReadListener(l) {
    this._progressiveReadListeners.push(l);
  }
  addProgressiveDoneListener(l) {
    this._progressiveDoneListeners.push(l);
  }
  onDataRange(l, U) {
    for (const Z of this._rangeListeners)
      Z(l, U);
  }
  onDataProgress(l, U) {
    this._readyCapability.promise.then(() => {
      for (const Z of this._progressListeners)
        Z(l, U);
    });
  }
  onDataProgressiveRead(l) {
    this._readyCapability.promise.then(() => {
      for (const U of this._progressiveReadListeners)
        U(l);
    });
  }
  onDataProgressiveDone() {
    this._readyCapability.promise.then(() => {
      for (const l of this._progressiveDoneListeners)
        l();
    });
  }
  transportReady() {
    this._readyCapability.resolve();
  }
  requestDataRange(l, U) {
    f("Abstract method PDFDataRangeTransport.requestDataRange");
  }
  abort() {
  }
}
class En {
  constructor(l, U) {
    this._pdfInfo = l, this._transport = U;
  }
  get annotationStorage() {
    return this._transport.annotationStorage;
  }
  get filterFactory() {
    return this._transport.filterFactory;
  }
  get numPages() {
    return this._pdfInfo.numPages;
  }
  get fingerprints() {
    return this._pdfInfo.fingerprints;
  }
  get isPureXfa() {
    return K(this, "isPureXfa", !!this._transport._htmlForXfa);
  }
  get allXfaHtml() {
    return this._transport._htmlForXfa;
  }
  getPage(l) {
    return this._transport.getPage(l);
  }
  getPageIndex(l) {
    return this._transport.getPageIndex(l);
  }
  getDestinations() {
    return this._transport.getDestinations();
  }
  getDestination(l) {
    return this._transport.getDestination(l);
  }
  getPageLabels() {
    return this._transport.getPageLabels();
  }
  getPageLayout() {
    return this._transport.getPageLayout();
  }
  getPageMode() {
    return this._transport.getPageMode();
  }
  getViewerPreferences() {
    return this._transport.getViewerPreferences();
  }
  getOpenAction() {
    return this._transport.getOpenAction();
  }
  getAttachments() {
    return this._transport.getAttachments();
  }
  getJSActions() {
    return this._transport.getDocJSActions();
  }
  getOutline() {
    return this._transport.getOutline();
  }
  getOptionalContentConfig({
    intent: l = "display"
  } = {}) {
    const {
      renderingIntent: U
    } = this._transport.getRenderingIntent(l);
    return this._transport.getOptionalContentConfig(U);
  }
  getPermissions() {
    return this._transport.getPermissions();
  }
  getMetadata() {
    return this._transport.getMetadata();
  }
  getMarkInfo() {
    return this._transport.getMarkInfo();
  }
  getData() {
    return this._transport.getData();
  }
  saveDocument() {
    return this._transport.saveDocument();
  }
  getDownloadInfo() {
    return this._transport.downloadInfoCapability.promise;
  }
  cleanup(l = !1) {
    return this._transport.startCleanup(l || this.isPureXfa);
  }
  destroy() {
    return this.loadingTask.destroy();
  }
  cachedPageNumber(l) {
    return this._transport.cachedPageNumber(l);
  }
  get loadingParams() {
    return this._transport.loadingParams;
  }
  get loadingTask() {
    return this._transport.loadingTask;
  }
  getFieldObjects() {
    return this._transport.getFieldObjects();
  }
  hasJSActions() {
    return this._transport.hasJSActions();
  }
  getCalculationOrderIds() {
    return this._transport.getCalculationOrderIds();
  }
}
var oZ, lZ, DZ, hF, gF, OV;
class Cn {
  constructor(l, U, Z, d = !1) {
    a(this, DZ);
    a(this, gF);
    a(this, oZ, null);
    a(this, lZ, !1);
    this._pageIndex = l, this._pageInfo = U, this._transport = Z, this._stats = d ? new xN() : null, this._pdfBug = d, this.commonObjs = Z.commonObjs, this.objs = new Wb(), this._maybeCleanupAfterRender = !1, this._intentStates = /* @__PURE__ */ new Map(), this.destroyed = !1;
  }
  get pageNumber() {
    return this._pageIndex + 1;
  }
  get rotate() {
    return this._pageInfo.rotate;
  }
  get ref() {
    return this._pageInfo.ref;
  }
  get userUnit() {
    return this._pageInfo.userUnit;
  }
  get view() {
    return this._pageInfo.view;
  }
  getViewport({
    scale: l,
    rotation: U = this.rotate,
    offsetX: Z = 0,
    offsetY: d = 0,
    dontFlip: F = !1
  } = {}) {
    return new MV({
      viewBox: this.view,
      scale: l,
      rotation: U,
      offsetX: Z,
      offsetY: d,
      dontFlip: F
    });
  }
  getAnnotations({
    intent: l = "display"
  } = {}) {
    const {
      renderingIntent: U
    } = this._transport.getRenderingIntent(l);
    return this._transport.getAnnotations(this._pageIndex, U);
  }
  getJSActions() {
    return this._transport.getPageJSActions(this._pageIndex);
  }
  get filterFactory() {
    return this._transport.filterFactory;
  }
  get isPureXfa() {
    return K(this, "isPureXfa", !!this._transport._htmlForXfa);
  }
  async getXfa() {
    var l;
    return ((l = this._transport._htmlForXfa) == null ? void 0 : l.children[this._pageIndex]) || null;
  }
  render({
    canvasContext: l,
    viewport: U,
    intent: Z = "display",
    annotationMode: d = YZ.ENABLE,
    transform: F = null,
    background: W = null,
    optionalContentConfigPromise: V = null,
    annotationCanvasMap: c = null,
    pageColors: t = null,
    printAnnotationStorage: N = null
  }) {
    var X, S;
    (X = this._stats) == null || X.time("Overall");
    const s = this._transport.getRenderingIntent(Z, d, N), {
      renderingIntent: b,
      cacheKey: n
    } = s;
    i(this, lZ, !1), m(this, gF, OV).call(this), V || (V = this._transport.getOptionalContentConfig(b));
    let h = this._intentStates.get(n);
    h || (h = /* @__PURE__ */ Object.create(null), this._intentStates.set(n, h)), h.streamReaderCancelTimeout && (clearTimeout(h.streamReaderCancelTimeout), h.streamReaderCancelTimeout = null);
    const M = !!(b & UU.PRINT);
    h.displayReadyCapability || (h.displayReadyCapability = Promise.withResolvers(), h.operatorList = {
      fnArray: [],
      argsArray: [],
      lastChunk: !1,
      separateAnnots: null
    }, (S = this._stats) == null || S.time("Page Request"), this._pumpOperatorList(s));
    const G = (e) => {
      var Y;
      h.renderTasks.delete(J), (this._maybeCleanupAfterRender || M) && i(this, lZ, !0), m(this, DZ, hF).call(this, !M), e ? (J.capability.reject(e), this._abortOperatorList({
        intentState: h,
        reason: e instanceof Error ? e : new Error(e)
      })) : J.capability.resolve(), this._stats && (this._stats.timeEnd("Rendering"), this._stats.timeEnd("Overall"), (Y = globalThis.Stats) != null && Y.enabled && globalThis.Stats.add(this.pageNumber, this._stats));
    }, J = new gV({
      callback: G,
      params: {
        canvasContext: l,
        viewport: U,
        transform: F,
        background: W
      },
      objs: this.objs,
      commonObjs: this.commonObjs,
      annotationCanvasMap: c,
      operatorList: h.operatorList,
      pageIndex: this._pageIndex,
      canvasFactory: this._transport.canvasFactory,
      filterFactory: this._transport.filterFactory,
      useRequestAnimationFrame: !M,
      pdfBug: this._pdfBug,
      pageColors: t
    });
    (h.renderTasks || (h.renderTasks = /* @__PURE__ */ new Set())).add(J);
    const T = J.task;
    return Promise.all([h.displayReadyCapability.promise, V]).then(([e, Y]) => {
      var B;
      if (this.destroyed) {
        G();
        return;
      }
      if ((B = this._stats) == null || B.time("Rendering"), !(Y.renderingIntent & b))
        throw new Error("Must use the same `intent`-argument when calling the `PDFPageProxy.render` and `PDFDocumentProxy.getOptionalContentConfig` methods.");
      J.initializeGraphics({
        transparency: e,
        optionalContentConfig: Y
      }), J.operatorListChanged();
    }).catch(G), T;
  }
  getOperatorList({
    intent: l = "display",
    annotationMode: U = YZ.ENABLE,
    printAnnotationStorage: Z = null
  } = {}) {
    var c;
    function d() {
      W.operatorList.lastChunk && (W.opListReadCapability.resolve(W.operatorList), W.renderTasks.delete(V));
    }
    const F = this._transport.getRenderingIntent(l, U, Z, !0);
    let W = this._intentStates.get(F.cacheKey);
    W || (W = /* @__PURE__ */ Object.create(null), this._intentStates.set(F.cacheKey, W));
    let V;
    return W.opListReadCapability || (V = /* @__PURE__ */ Object.create(null), V.operatorListChanged = d, W.opListReadCapability = Promise.withResolvers(), (W.renderTasks || (W.renderTasks = /* @__PURE__ */ new Set())).add(V), W.operatorList = {
      fnArray: [],
      argsArray: [],
      lastChunk: !1,
      separateAnnots: null
    }, (c = this._stats) == null || c.time("Page Request"), this._pumpOperatorList(F)), W.opListReadCapability.promise;
  }
  streamTextContent({
    includeMarkedContent: l = !1,
    disableNormalization: U = !1
  } = {}) {
    return this._transport.messageHandler.sendWithStream("GetTextContent", {
      pageIndex: this._pageIndex,
      includeMarkedContent: l === !0,
      disableNormalization: U === !0
    }, {
      highWaterMark: 100,
      size(d) {
        return d.items.length;
      }
    });
  }
  getTextContent(l = {}) {
    if (this._transport._htmlForXfa)
      return this.getXfa().then((Z) => dW.textContent(Z));
    const U = this.streamTextContent(l);
    return new Promise(function(Z, d) {
      function F() {
        W.read().then(function({
          value: c,
          done: t
        }) {
          if (t) {
            Z(V);
            return;
          }
          V.lang ?? (V.lang = c.lang), Object.assign(V.styles, c.styles), V.items.push(...c.items), F();
        }, d);
      }
      const W = U.getReader(), V = {
        items: [],
        styles: /* @__PURE__ */ Object.create(null),
        lang: null
      };
      F();
    });
  }
  getStructTree() {
    return this._transport.getStructTree(this._pageIndex);
  }
  _destroy() {
    this.destroyed = !0;
    const l = [];
    for (const U of this._intentStates.values())
      if (this._abortOperatorList({
        intentState: U,
        reason: new Error("Page was destroyed."),
        force: !0
      }), !U.opListReadCapability)
        for (const Z of U.renderTasks)
          l.push(Z.completed), Z.cancel();
    return this.objs.clear(), i(this, lZ, !1), m(this, gF, OV).call(this), Promise.all(l);
  }
  cleanup(l = !1) {
    i(this, lZ, !0);
    const U = m(this, DZ, hF).call(this, !1);
    return l && U && this._stats && (this._stats = new xN()), U;
  }
  _startRenderPage(l, U) {
    var d, F;
    const Z = this._intentStates.get(U);
    Z && ((d = this._stats) == null || d.timeEnd("Page Request"), (F = Z.displayReadyCapability) == null || F.resolve(l));
  }
  _renderPageChunk(l, U) {
    for (let Z = 0, d = l.length; Z < d; Z++)
      U.operatorList.fnArray.push(l.fnArray[Z]), U.operatorList.argsArray.push(l.argsArray[Z]);
    U.operatorList.lastChunk = l.lastChunk, U.operatorList.separateAnnots = l.separateAnnots;
    for (const Z of U.renderTasks)
      Z.operatorListChanged();
    l.lastChunk && m(this, DZ, hF).call(this, !0);
  }
  _pumpOperatorList({
    renderingIntent: l,
    cacheKey: U,
    annotationStorageSerializable: Z
  }) {
    const {
      map: d,
      transfer: F
    } = Z, V = this._transport.messageHandler.sendWithStream("GetOperatorList", {
      pageIndex: this._pageIndex,
      intent: l,
      cacheKey: U,
      annotationStorage: d
    }, F).getReader(), c = this._intentStates.get(U);
    c.streamReader = V;
    const t = () => {
      V.read().then(({
        value: N,
        done: s
      }) => {
        if (s) {
          c.streamReader = null;
          return;
        }
        this._transport.destroyed || (this._renderPageChunk(N, c), t());
      }, (N) => {
        if (c.streamReader = null, !this._transport.destroyed) {
          if (c.operatorList) {
            c.operatorList.lastChunk = !0;
            for (const s of c.renderTasks)
              s.operatorListChanged();
            m(this, DZ, hF).call(this, !0);
          }
          if (c.displayReadyCapability)
            c.displayReadyCapability.reject(N);
          else if (c.opListReadCapability)
            c.opListReadCapability.reject(N);
          else
            throw N;
        }
      });
    };
    t();
  }
  _abortOperatorList({
    intentState: l,
    reason: U,
    force: Z = !1
  }) {
    if (l.streamReader) {
      if (l.streamReaderCancelTimeout && (clearTimeout(l.streamReaderCancelTimeout), l.streamReaderCancelTimeout = null), !Z) {
        if (l.renderTasks.size > 0)
          return;
        if (U instanceof GN) {
          let d = en;
          U.extraDelay > 0 && U.extraDelay < 1e3 && (d += U.extraDelay), l.streamReaderCancelTimeout = setTimeout(() => {
            l.streamReaderCancelTimeout = null, this._abortOperatorList({
              intentState: l,
              reason: U,
              force: !0
            });
          }, d);
          return;
        }
      }
      if (l.streamReader.cancel(new cF(U.message)).catch(() => {
      }), l.streamReader = null, !this._transport.destroyed) {
        for (const [d, F] of this._intentStates)
          if (F === l) {
            this._intentStates.delete(d);
            break;
          }
        this.cleanup();
      }
    }
  }
  get stats() {
    return this._stats;
  }
}
oZ = new WeakMap(), lZ = new WeakMap(), DZ = new WeakSet(), hF = function(l = !1) {
  if (m(this, gF, OV).call(this), !Q(this, lZ) || this.destroyed)
    return !1;
  if (l)
    return i(this, oZ, setTimeout(() => {
      i(this, oZ, null), m(this, DZ, hF).call(this, !1);
    }, pn)), !1;
  for (const {
    renderTasks: U,
    operatorList: Z
  } of this._intentStates.values())
    if (U.size > 0 || !Z.lastChunk)
      return !1;
  return this._intentStates.clear(), this.objs.clear(), i(this, lZ, !1), !0;
}, gF = new WeakSet(), OV = function() {
  Q(this, oZ) && (clearTimeout(Q(this, oZ)), i(this, oZ, null));
};
var Yd, vc;
class wn {
  constructor() {
    a(this, Yd, /* @__PURE__ */ new Set());
    a(this, vc, Promise.resolve());
  }
  postMessage(l, U) {
    const Z = {
      data: structuredClone(l, U ? {
        transfer: U
      } : null)
    };
    Q(this, vc).then(() => {
      for (const d of Q(this, Yd))
        d.call(this, Z);
    });
  }
  addEventListener(l, U) {
    Q(this, Yd).add(U);
  }
  removeEventListener(l, U) {
    Q(this, Yd).delete(U);
  }
  terminate() {
    Q(this, Yd).clear();
  }
}
Yd = new WeakMap(), vc = new WeakMap();
const rU = {
  isWorkerDisabled: !1,
  fakeWorkerId: 0
};
yl && (rU.isWorkerDisabled = !0, nZ.workerSrc || (nZ.workerSrc = "./pdf.worker.mjs")), rU.isSameOrigin = function(R, l) {
  let U;
  try {
    if (U = new URL(R), !U.origin || U.origin === "null")
      return !1;
  } catch {
    return !1;
  }
  const Z = new URL(l, U);
  return U.origin === Z.origin;
}, rU.createCDNWrapper = function(R) {
  const l = `await import("${R}");`;
  return URL.createObjectURL(new Blob([l], {
    type: "text/javascript"
  }));
};
var Dl, Sd, HF, KV;
let rV = (Dl = class {
  constructor({
    name: l = null,
    port: U = null,
    verbosity: Z = aa()
  } = {}) {
    var d;
    if (this.name = l, this.destroyed = !1, this.verbosity = Z, this._readyCapability = Promise.withResolvers(), this._port = null, this._webWorker = null, this._messageHandler = null, U) {
      if ((d = Q(Dl, Sd)) != null && d.has(U))
        throw new Error("Cannot use more than one PDFWorker per port.");
      (Q(Dl, Sd) || i(Dl, Sd, /* @__PURE__ */ new WeakMap())).set(U, this), this._initializeFromPort(U);
      return;
    }
    this._initialize();
  }
  get promise() {
    return yl ? Promise.all([EU.promise, this._readyCapability.promise]) : this._readyCapability.promise;
  }
  get port() {
    return this._port;
  }
  get messageHandler() {
    return this._messageHandler;
  }
  _initializeFromPort(l) {
    this._port = l, this._messageHandler = new O0("main", "worker", l), this._messageHandler.on("ready", function() {
    }), this._readyCapability.resolve(), this._messageHandler.send("configure", {
      verbosity: this.verbosity
    });
  }
  _initialize() {
    if (!rU.isWorkerDisabled && !Q(Dl, HF, KV)) {
      let {
        workerSrc: l
      } = Dl;
      try {
        rU.isSameOrigin(window.location.href, l) || (l = rU.createCDNWrapper(new URL(l, window.location).href));
        const U = new Worker(l, {
          type: "module"
        }), Z = new O0("main", "worker", U), d = () => {
          U.removeEventListener("error", F), Z.destroy(), U.terminate(), this.destroyed ? this._readyCapability.reject(new Error("Worker was destroyed")) : this._setupFakeWorker();
        }, F = () => {
          this._webWorker || d();
        };
        U.addEventListener("error", F), Z.on("test", (V) => {
          if (U.removeEventListener("error", F), this.destroyed) {
            d();
            return;
          }
          V ? (this._messageHandler = Z, this._port = U, this._webWorker = U, this._readyCapability.resolve(), Z.send("configure", {
            verbosity: this.verbosity
          })) : (this._setupFakeWorker(), Z.destroy(), U.terminate());
        }), Z.on("ready", (V) => {
          if (U.removeEventListener("error", F), this.destroyed) {
            d();
            return;
          }
          try {
            W();
          } catch {
            this._setupFakeWorker();
          }
        });
        const W = () => {
          const V = new Uint8Array();
          Z.send("test", V, [V.buffer]);
        };
        W();
        return;
      } catch {
        gt("The worker has been disabled.");
      }
    }
    this._setupFakeWorker();
  }
  _setupFakeWorker() {
    rU.isWorkerDisabled || (w("Setting up fake worker."), rU.isWorkerDisabled = !0), Dl._setupFakeWorkerGlobal.then((l) => {
      if (this.destroyed) {
        this._readyCapability.reject(new Error("Worker was destroyed"));
        return;
      }
      const U = new wn();
      this._port = U;
      const Z = `fake${rU.fakeWorkerId++}`, d = new O0(Z + "_worker", Z, U);
      l.setup(d, U);
      const F = new O0(Z, Z + "_worker", U);
      this._messageHandler = F, this._readyCapability.resolve(), F.send("configure", {
        verbosity: this.verbosity
      });
    }).catch((l) => {
      this._readyCapability.reject(new Error(`Setting up fake worker failed: "${l.message}".`));
    });
  }
  destroy() {
    var l;
    this.destroyed = !0, this._webWorker && (this._webWorker.terminate(), this._webWorker = null), (l = Q(Dl, Sd)) == null || l.delete(this._port), this._port = null, this._messageHandler && (this._messageHandler.destroy(), this._messageHandler = null);
  }
  static fromPort(l) {
    var Z;
    if (!(l != null && l.port))
      throw new Error("PDFWorker.fromPort - invalid method signature.");
    const U = (Z = Q(this, Sd)) == null ? void 0 : Z.get(l.port);
    if (U) {
      if (U._pendingDestroy)
        throw new Error("PDFWorker.fromPort - the worker is being destroyed.\nPlease remember to await `PDFDocumentLoadingTask.destroy()`-calls.");
      return U;
    }
    return new Dl(l);
  }
  static get workerSrc() {
    if (nZ.workerSrc)
      return nZ.workerSrc;
    throw new Error('No "GlobalWorkerOptions.workerSrc" specified.');
  }
  static get _setupFakeWorkerGlobal() {
    return K(this, "_setupFakeWorkerGlobal", (async () => Q(this, HF, KV) ? Q(this, HF, KV) : (await import(
      /*webpackIgnore: true*/
      this.workerSrc
    )).WorkerMessageHandler)());
  }
}, Sd = new WeakMap(), HF = new WeakSet(), KV = function() {
  var l;
  try {
    return ((l = globalThis.pdfjsWorker) == null ? void 0 : l.WorkerMessageHandler) || null;
  } catch {
    return null;
  }
}, a(Dl, HF), a(Dl, Sd, void 0), Dl);
var UZ, BU, vF, PF, eU, Bd, r0;
class xn {
  constructor(l, U, Z, d, F) {
    a(this, Bd);
    a(this, UZ, /* @__PURE__ */ new Map());
    a(this, BU, /* @__PURE__ */ new Map());
    a(this, vF, /* @__PURE__ */ new Map());
    a(this, PF, /* @__PURE__ */ new Map());
    a(this, eU, null);
    this.messageHandler = l, this.loadingTask = U, this.commonObjs = new Wb(), this.fontLoader = new Da({
      ownerDocument: d.ownerDocument,
      styleElement: d.styleElement
    }), this._params = d, this.canvasFactory = F.canvasFactory, this.filterFactory = F.filterFactory, this.cMapReaderFactory = F.cMapReaderFactory, this.standardFontDataFactory = F.standardFontDataFactory, this.destroyed = !1, this.destroyCapability = null, this._networkStream = Z, this._fullReader = null, this._lastProgress = null, this.downloadInfoCapability = Promise.withResolvers(), this.setupMessageHandler();
  }
  get annotationStorage() {
    return K(this, "annotationStorage", new SN());
  }
  getRenderingIntent(l, U = YZ.ENABLE, Z = null, d = !1) {
    let F = UU.DISPLAY, W = IR;
    switch (l) {
      case "any":
        F = UU.ANY;
        break;
      case "display":
        break;
      case "print":
        F = UU.PRINT;
        break;
      default:
        w(`getRenderingIntent - invalid intent: ${l}`);
    }
    switch (U) {
      case YZ.DISABLE:
        F += UU.ANNOTATIONS_DISABLE;
        break;
      case YZ.ENABLE:
        break;
      case YZ.ENABLE_FORMS:
        F += UU.ANNOTATIONS_FORMS;
        break;
      case YZ.ENABLE_STORAGE:
        F += UU.ANNOTATIONS_STORAGE, W = (F & UU.PRINT && Z instanceof rs ? Z : this.annotationStorage).serializable;
        break;
      default:
        w(`getRenderingIntent - invalid annotationMode: ${U}`);
    }
    return d && (F += UU.OPLIST), {
      renderingIntent: F,
      cacheKey: `${F}_${W.hash}`,
      annotationStorageSerializable: W
    };
  }
  destroy() {
    var Z;
    if (this.destroyCapability)
      return this.destroyCapability.promise;
    this.destroyed = !0, this.destroyCapability = Promise.withResolvers(), (Z = Q(this, eU)) == null || Z.reject(new Error("Worker was destroyed during onPassword callback"));
    const l = [];
    for (const d of Q(this, BU).values())
      l.push(d._destroy());
    Q(this, BU).clear(), Q(this, vF).clear(), Q(this, PF).clear(), this.hasOwnProperty("annotationStorage") && this.annotationStorage.resetModified();
    const U = this.messageHandler.sendWithPromise("Terminate", null);
    return l.push(U), Promise.all(l).then(() => {
      var d;
      this.commonObjs.clear(), this.fontLoader.clear(), Q(this, UZ).clear(), this.filterFactory.destroy(), ls(), (d = this._networkStream) == null || d.cancelAllRequests(new cF("Worker was terminated.")), this.messageHandler && (this.messageHandler.destroy(), this.messageHandler = null), this.destroyCapability.resolve();
    }, this.destroyCapability.reject), this.destroyCapability.promise;
  }
  setupMessageHandler() {
    const {
      messageHandler: l,
      loadingTask: U
    } = this;
    l.on("GetReader", (Z, d) => {
      sl(this._networkStream, "GetReader - no `IPDFStream` instance available."), this._fullReader = this._networkStream.getFullReader(), this._fullReader.onProgress = (F) => {
        this._lastProgress = {
          loaded: F.loaded,
          total: F.total
        };
      }, d.onPull = () => {
        this._fullReader.read().then(function({
          value: F,
          done: W
        }) {
          if (W) {
            d.close();
            return;
          }
          sl(F instanceof ArrayBuffer, "GetReader - expected an ArrayBuffer."), d.enqueue(new Uint8Array(F), 1, [F]);
        }).catch((F) => {
          d.error(F);
        });
      }, d.onCancel = (F) => {
        this._fullReader.cancel(F), d.ready.catch((W) => {
          if (!this.destroyed)
            throw W;
        });
      };
    }), l.on("ReaderHeadersReady", (Z) => {
      const d = Promise.withResolvers(), F = this._fullReader;
      return F.headersReady.then(() => {
        var W;
        (!F.isStreamingSupported || !F.isRangeSupported) && (this._lastProgress && ((W = U.onProgress) == null || W.call(U, this._lastProgress)), F.onProgress = (V) => {
          var c;
          (c = U.onProgress) == null || c.call(U, {
            loaded: V.loaded,
            total: V.total
          });
        }), d.resolve({
          isStreamingSupported: F.isStreamingSupported,
          isRangeSupported: F.isRangeSupported,
          contentLength: F.contentLength
        });
      }, d.reject), d.promise;
    }), l.on("GetRangeReader", (Z, d) => {
      sl(this._networkStream, "GetRangeReader - no `IPDFStream` instance available.");
      const F = this._networkStream.getRangeReader(Z.begin, Z.end);
      if (!F) {
        d.close();
        return;
      }
      d.onPull = () => {
        F.read().then(function({
          value: W,
          done: V
        }) {
          if (V) {
            d.close();
            return;
          }
          sl(W instanceof ArrayBuffer, "GetRangeReader - expected an ArrayBuffer."), d.enqueue(new Uint8Array(W), 1, [W]);
        }).catch((W) => {
          d.error(W);
        });
      }, d.onCancel = (W) => {
        F.cancel(W), d.ready.catch((V) => {
          if (!this.destroyed)
            throw V;
        });
      };
    }), l.on("GetDoc", ({
      pdfInfo: Z
    }) => {
      this._numPages = Z.numPages, this._htmlForXfa = Z.htmlForXfa, delete Z.htmlForXfa, U._capability.resolve(new En(Z, this));
    }), l.on("DocException", function(Z) {
      let d;
      switch (Z.name) {
        case "PasswordException":
          d = new bR(Z.message, Z.code);
          break;
        case "InvalidPDFException":
          d = new ss(Z.message);
          break;
        case "MissingPDFException":
          d = new VF(Z.message);
          break;
        case "UnexpectedResponseException":
          d = new Ht(Z.message, Z.status);
          break;
        case "UnknownErrorException":
          d = new aR(Z.message, Z.details);
          break;
        default:
          f("DocException - expected a valid Error.");
      }
      U._capability.reject(d);
    }), l.on("PasswordRequest", (Z) => {
      if (i(this, eU, Promise.withResolvers()), U.onPassword) {
        const d = (F) => {
          F instanceof Error ? Q(this, eU).reject(F) : Q(this, eU).resolve({
            password: F
          });
        };
        try {
          U.onPassword(d, Z.code);
        } catch (F) {
          Q(this, eU).reject(F);
        }
      } else
        Q(this, eU).reject(new bR(Z.message, Z.code));
      return Q(this, eU).promise;
    }), l.on("DataLoaded", (Z) => {
      var d;
      (d = U.onProgress) == null || d.call(U, {
        loaded: Z.length,
        total: Z.length
      }), this.downloadInfoCapability.resolve(Z);
    }), l.on("StartRenderPage", (Z) => {
      if (this.destroyed)
        return;
      Q(this, BU).get(Z.pageIndex)._startRenderPage(Z.transparency, Z.cacheKey);
    }), l.on("commonobj", ([Z, d, F]) => {
      var W;
      if (this.destroyed || this.commonObjs.has(Z))
        return null;
      switch (d) {
        case "Font":
          const {
            disableFontFace: V,
            fontExtraProperties: c,
            pdfBug: t
          } = this._params;
          if ("error" in F) {
            const n = F.error;
            w(`Error during font loading: ${n}`), this.commonObjs.resolve(Z, n);
            break;
          }
          const N = t && ((W = globalThis.FontInspector) != null && W.enabled) ? (n, h) => globalThis.FontInspector.fontAdded(n, h) : null, s = new Ia(F, {
            disableFontFace: V,
            inspectFont: N
          });
          this.fontLoader.bind(s).catch(() => l.sendWithPromise("FontFallback", {
            id: Z
          })).finally(() => {
            !c && s.data && (s.data = null), this.commonObjs.resolve(Z, s);
          });
          break;
        case "CopyLocalImage":
          const {
            imageRef: b
          } = F;
          sl(b, "The imageRef must be defined.");
          for (const n of Q(this, BU).values())
            for (const [, h] of n.objs)
              if (h.ref === b)
                return h.dataLen ? (this.commonObjs.resolve(Z, structuredClone(h)), h.dataLen) : null;
          break;
        case "FontPath":
        case "Image":
        case "Pattern":
          this.commonObjs.resolve(Z, F);
          break;
        default:
          throw new Error(`Got unknown common object type ${d}`);
      }
      return null;
    }), l.on("obj", ([Z, d, F, W]) => {
      var c;
      if (this.destroyed)
        return;
      const V = Q(this, BU).get(d);
      if (!V.objs.has(Z)) {
        if (V._intentStates.size === 0) {
          (c = W == null ? void 0 : W.bitmap) == null || c.close();
          return;
        }
        switch (F) {
          case "Image":
            V.objs.resolve(Z, W), (W == null ? void 0 : W.dataLen) > ta && (V._maybeCleanupAfterRender = !0);
            break;
          case "Pattern":
            V.objs.resolve(Z, W);
            break;
          default:
            throw new Error(`Got unknown object type ${F}`);
        }
      }
    }), l.on("DocProgress", (Z) => {
      var d;
      this.destroyed || (d = U.onProgress) == null || d.call(U, {
        loaded: Z.loaded,
        total: Z.total
      });
    }), l.on("FetchBuiltInCMap", (Z) => this.destroyed ? Promise.reject(new Error("Worker was destroyed.")) : this.cMapReaderFactory ? this.cMapReaderFactory.fetch(Z) : Promise.reject(new Error("CMapReaderFactory not initialized, see the `useWorkerFetch` parameter."))), l.on("FetchStandardFontData", (Z) => this.destroyed ? Promise.reject(new Error("Worker was destroyed.")) : this.standardFontDataFactory ? this.standardFontDataFactory.fetch(Z) : Promise.reject(new Error("StandardFontDataFactory not initialized, see the `useWorkerFetch` parameter.")));
  }
  getData() {
    return this.messageHandler.sendWithPromise("GetData", null);
  }
  saveDocument() {
    var Z;
    this.annotationStorage.size <= 0 && w("saveDocument called while `annotationStorage` is empty, please use the getData-method instead.");
    const {
      map: l,
      transfer: U
    } = this.annotationStorage.serializable;
    return this.messageHandler.sendWithPromise("SaveDocument", {
      isPureXfa: !!this._htmlForXfa,
      numPages: this._numPages,
      annotationStorage: l,
      filename: ((Z = this._fullReader) == null ? void 0 : Z.filename) ?? null
    }, U).finally(() => {
      this.annotationStorage.resetModified();
    });
  }
  getPage(l) {
    if (!Number.isInteger(l) || l <= 0 || l > this._numPages)
      return Promise.reject(new Error("Invalid page request."));
    const U = l - 1, Z = Q(this, vF).get(U);
    if (Z)
      return Z;
    const d = this.messageHandler.sendWithPromise("GetPage", {
      pageIndex: U
    }).then((F) => {
      if (this.destroyed)
        throw new Error("Transport destroyed");
      F.refStr && Q(this, PF).set(F.refStr, l);
      const W = new Cn(U, F, this, this._params.pdfBug);
      return Q(this, BU).set(U, W), W;
    });
    return Q(this, vF).set(U, d), d;
  }
  getPageIndex(l) {
    return Zs(l) ? this.messageHandler.sendWithPromise("GetPageIndex", {
      num: l.num,
      gen: l.gen
    }) : Promise.reject(new Error("Invalid pageIndex request."));
  }
  getAnnotations(l, U) {
    return this.messageHandler.sendWithPromise("GetAnnotations", {
      pageIndex: l,
      intent: U
    });
  }
  getFieldObjects() {
    return m(this, Bd, r0).call(this, "GetFieldObjects");
  }
  hasJSActions() {
    return m(this, Bd, r0).call(this, "HasJSActions");
  }
  getCalculationOrderIds() {
    return this.messageHandler.sendWithPromise("GetCalculationOrderIds", null);
  }
  getDestinations() {
    return this.messageHandler.sendWithPromise("GetDestinations", null);
  }
  getDestination(l) {
    return typeof l != "string" ? Promise.reject(new Error("Invalid destination request.")) : this.messageHandler.sendWithPromise("GetDestination", {
      id: l
    });
  }
  getPageLabels() {
    return this.messageHandler.sendWithPromise("GetPageLabels", null);
  }
  getPageLayout() {
    return this.messageHandler.sendWithPromise("GetPageLayout", null);
  }
  getPageMode() {
    return this.messageHandler.sendWithPromise("GetPageMode", null);
  }
  getViewerPreferences() {
    return this.messageHandler.sendWithPromise("GetViewerPreferences", null);
  }
  getOpenAction() {
    return this.messageHandler.sendWithPromise("GetOpenAction", null);
  }
  getAttachments() {
    return this.messageHandler.sendWithPromise("GetAttachments", null);
  }
  getDocJSActions() {
    return m(this, Bd, r0).call(this, "GetDocJSActions");
  }
  getPageJSActions(l) {
    return this.messageHandler.sendWithPromise("GetPageJSActions", {
      pageIndex: l
    });
  }
  getStructTree(l) {
    return this.messageHandler.sendWithPromise("GetStructTree", {
      pageIndex: l
    });
  }
  getOutline() {
    return this.messageHandler.sendWithPromise("GetOutline", null);
  }
  getOptionalContentConfig(l) {
    return m(this, Bd, r0).call(this, "GetOptionalContentConfig").then((U) => new Vn(U, l));
  }
  getPermissions() {
    return this.messageHandler.sendWithPromise("GetPermissions", null);
  }
  getMetadata() {
    const l = "GetMetadata", U = Q(this, UZ).get(l);
    if (U)
      return U;
    const Z = this.messageHandler.sendWithPromise(l, null).then((d) => {
      var F, W;
      return {
        info: d[0],
        metadata: d[1] ? new Wn(d[1]) : null,
        contentDispositionFilename: ((F = this._fullReader) == null ? void 0 : F.filename) ?? null,
        contentLength: ((W = this._fullReader) == null ? void 0 : W.contentLength) ?? null
      };
    });
    return Q(this, UZ).set(l, Z), Z;
  }
  getMarkInfo() {
    return this.messageHandler.sendWithPromise("GetMarkInfo", null);
  }
  async startCleanup(l = !1) {
    if (!this.destroyed) {
      await this.messageHandler.sendWithPromise("Cleanup", null);
      for (const U of Q(this, BU).values())
        if (!U.cleanup())
          throw new Error(`startCleanup: Page ${U.pageNumber} is currently rendering.`);
      this.commonObjs.clear(), l || this.fontLoader.clear(), Q(this, UZ).clear(), this.filterFactory.destroy(!0), ls();
    }
  }
  cachedPageNumber(l) {
    if (!Zs(l))
      return null;
    const U = l.gen === 0 ? `${l.num}R` : `${l.num}R${l.gen}`;
    return Q(this, PF).get(U) ?? null;
  }
  get loadingParams() {
    const {
      disableAutoFetch: l,
      enableXfa: U
    } = this._params;
    return K(this, "loadingParams", {
      disableAutoFetch: l,
      enableXfa: U
    });
  }
}
UZ = new WeakMap(), BU = new WeakMap(), vF = new WeakMap(), PF = new WeakMap(), eU = new WeakMap(), Bd = new WeakSet(), r0 = function(l, U = null) {
  const Z = Q(this, UZ).get(l);
  if (Z)
    return Z;
  const d = this.messageHandler.sendWithPromise(l, U);
  return Q(this, UZ).set(l, d), d;
};
const uV = Symbol("INITIAL_DATA");
var RU, QQ, OR;
class Wb {
  constructor() {
    a(this, QQ);
    a(this, RU, /* @__PURE__ */ Object.create(null));
  }
  get(l, U = null) {
    if (U) {
      const d = m(this, QQ, OR).call(this, l);
      return d.promise.then(() => U(d.data)), null;
    }
    const Z = Q(this, RU)[l];
    if (!Z || Z.data === uV)
      throw new Error(`Requesting object that isn't resolved yet ${l}.`);
    return Z.data;
  }
  has(l) {
    const U = Q(this, RU)[l];
    return !!U && U.data !== uV;
  }
  resolve(l, U = null) {
    const Z = m(this, QQ, OR).call(this, l);
    Z.data = U, Z.resolve();
  }
  clear() {
    var l;
    for (const U in Q(this, RU)) {
      const {
        data: Z
      } = Q(this, RU)[U];
      (l = Z == null ? void 0 : Z.bitmap) == null || l.close();
    }
    i(this, RU, /* @__PURE__ */ Object.create(null));
  }
  *[Symbol.iterator]() {
    for (const l in Q(this, RU)) {
      const {
        data: U
      } = Q(this, RU)[l];
      U !== uV && (yield [l, U]);
    }
  }
}
RU = new WeakMap(), QQ = new WeakSet(), OR = function(l) {
  var U;
  return (U = Q(this, RU))[l] || (U[l] = {
    ...Promise.withResolvers(),
    data: uV
  });
};
var IZ;
class jn {
  constructor(l) {
    a(this, IZ, null);
    i(this, IZ, l), this.onContinue = null;
  }
  get promise() {
    return Q(this, IZ).capability.promise;
  }
  cancel(l = 0) {
    Q(this, IZ).cancel(null, l);
  }
  get separateAnnots() {
    const {
      separateAnnots: l
    } = Q(this, IZ).operatorList;
    if (!l)
      return !1;
    const {
      annotationCanvasMap: U
    } = Q(this, IZ);
    return l.form || l.canvas && (U == null ? void 0 : U.size) > 0;
  }
}
IZ = new WeakMap();
var ed;
const MF = class {
  constructor({
    callback: l,
    params: U,
    objs: Z,
    commonObjs: d,
    annotationCanvasMap: F,
    operatorList: W,
    pageIndex: V,
    canvasFactory: c,
    filterFactory: t,
    useRequestAnimationFrame: N = !1,
    pdfBug: s = !1,
    pageColors: b = null
  }) {
    this.callback = l, this.params = U, this.objs = Z, this.commonObjs = d, this.annotationCanvasMap = F, this.operatorListIdx = null, this.operatorList = W, this._pageIndex = V, this.canvasFactory = c, this.filterFactory = t, this._pdfBug = s, this.pageColors = b, this.running = !1, this.graphicsReadyCallback = null, this.graphicsReady = !1, this._useRequestAnimationFrame = N === !0 && typeof window < "u", this.cancelled = !1, this.capability = Promise.withResolvers(), this.task = new jn(this), this._cancelBound = this.cancel.bind(this), this._continueBound = this._continue.bind(this), this._scheduleNextBound = this._scheduleNext.bind(this), this._nextBound = this._next.bind(this), this._canvas = U.canvasContext.canvas;
  }
  get completed() {
    return this.capability.promise.catch(function() {
    });
  }
  initializeGraphics({
    transparency: l = !1,
    optionalContentConfig: U
  }) {
    var V, c;
    if (this.cancelled)
      return;
    if (this._canvas) {
      if (Q(MF, ed).has(this._canvas))
        throw new Error("Cannot use the same canvas during multiple render() operations. Use different canvas or ensure previous operations were cancelled or completed.");
      Q(MF, ed).add(this._canvas);
    }
    this._pdfBug && ((V = globalThis.StepperManager) != null && V.enabled) && (this.stepper = globalThis.StepperManager.create(this._pageIndex), this.stepper.init(this.operatorList), this.stepper.nextBreakPoint = this.stepper.getNextBreakPoint());
    const {
      canvasContext: Z,
      viewport: d,
      transform: F,
      background: W
    } = this.params;
    this.gfx = new TF(Z, this.commonObjs, this.objs, this.canvasFactory, this.filterFactory, {
      optionalContentConfig: U
    }, this.annotationCanvasMap, this.pageColors), this.gfx.beginDrawing({
      transform: F,
      viewport: d,
      transparency: l,
      background: W
    }), this.operatorListIdx = 0, this.graphicsReady = !0, (c = this.graphicsReadyCallback) == null || c.call(this);
  }
  cancel(l = null, U = 0) {
    var Z;
    this.running = !1, this.cancelled = !0, (Z = this.gfx) == null || Z.endDrawing(), Q(MF, ed).delete(this._canvas), this.callback(l || new GN(`Rendering cancelled, page ${this._pageIndex + 1}`, U));
  }
  operatorListChanged() {
    var l;
    if (!this.graphicsReady) {
      this.graphicsReadyCallback || (this.graphicsReadyCallback = this._continueBound);
      return;
    }
    (l = this.stepper) == null || l.updateOperatorList(this.operatorList), !this.running && this._continue();
  }
  _continue() {
    this.running = !0, !this.cancelled && (this.task.onContinue ? this.task.onContinue(this._scheduleNextBound) : this._scheduleNext());
  }
  _scheduleNext() {
    this._useRequestAnimationFrame ? window.requestAnimationFrame(() => {
      this._nextBound().catch(this._cancelBound);
    }) : Promise.resolve().then(this._nextBound).catch(this._cancelBound);
  }
  async _next() {
    this.cancelled || (this.operatorListIdx = this.gfx.executeOperatorList(this.operatorList, this.operatorListIdx, this._continueBound, this.stepper), this.operatorListIdx === this.operatorList.argsArray.length && (this.running = !1, this.operatorList.lastChunk && (this.gfx.endDrawing(), Q(MF, ed).delete(this._canvas), this.callback())));
  }
};
let gV = MF;
ed = new WeakMap(), a(gV, ed, /* @__PURE__ */ new WeakSet());
const On = "4.3.54", rn = "33f3228e0";
function ds(R) {
  return Math.floor(Math.max(0, Math.min(1, R)) * 255).toString(16).padStart(2, "0");
}
function o0(R) {
  return Math.max(0, Math.min(255, 255 * R));
}
class Fs {
  static CMYK_G([l, U, Z, d]) {
    return ["G", 1 - Math.min(1, 0.3 * l + 0.59 * Z + 0.11 * U + d)];
  }
  static G_CMYK([l]) {
    return ["CMYK", 0, 0, 0, 1 - l];
  }
  static G_RGB([l]) {
    return ["RGB", l, l, l];
  }
  static G_rgb([l]) {
    return l = o0(l), [l, l, l];
  }
  static G_HTML([l]) {
    const U = ds(l);
    return `#${U}${U}${U}`;
  }
  static RGB_G([l, U, Z]) {
    return ["G", 0.3 * l + 0.59 * U + 0.11 * Z];
  }
  static RGB_rgb(l) {
    return l.map(o0);
  }
  static RGB_HTML(l) {
    return `#${l.map(ds).join("")}`;
  }
  static T_HTML() {
    return "#00000000";
  }
  static T_rgb() {
    return [null];
  }
  static CMYK_RGB([l, U, Z, d]) {
    return ["RGB", 1 - Math.min(1, l + d), 1 - Math.min(1, Z + d), 1 - Math.min(1, U + d)];
  }
  static CMYK_rgb([l, U, Z, d]) {
    return [o0(1 - Math.min(1, l + d)), o0(1 - Math.min(1, Z + d)), o0(1 - Math.min(1, U + d))];
  }
  static CMYK_HTML(l) {
    const U = this.CMYK_RGB(l).slice(1);
    return this.RGB_HTML(U);
  }
  static RGB_CMYK([l, U, Z]) {
    const d = 1 - l, F = 1 - U, W = 1 - Z, V = Math.min(d, F, W);
    return ["CMYK", d, F, W, V];
  }
}
class Qb {
  static setupStorage(l, U, Z, d, F) {
    const W = d.getValue(U, {
      value: null
    });
    switch (Z.name) {
      case "textarea":
        if (W.value !== null && (l.textContent = W.value), F === "print")
          break;
        l.addEventListener("input", (V) => {
          d.setValue(U, {
            value: V.target.value
          });
        });
        break;
      case "input":
        if (Z.attributes.type === "radio" || Z.attributes.type === "checkbox") {
          if (W.value === Z.attributes.xfaOn ? l.setAttribute("checked", !0) : W.value === Z.attributes.xfaOff && l.removeAttribute("checked"), F === "print")
            break;
          l.addEventListener("change", (V) => {
            d.setValue(U, {
              value: V.target.checked ? V.target.getAttribute("xfaOn") : V.target.getAttribute("xfaOff")
            });
          });
        } else {
          if (W.value !== null && l.setAttribute("value", W.value), F === "print")
            break;
          l.addEventListener("input", (V) => {
            d.setValue(U, {
              value: V.target.value
            });
          });
        }
        break;
      case "select":
        if (W.value !== null) {
          l.setAttribute("value", W.value);
          for (const V of Z.children)
            V.attributes.value === W.value ? V.attributes.selected = !0 : V.attributes.hasOwnProperty("selected") && delete V.attributes.selected;
        }
        l.addEventListener("input", (V) => {
          const c = V.target.options, t = c.selectedIndex === -1 ? "" : c[c.selectedIndex].value;
          d.setValue(U, {
            value: t
          });
        });
        break;
    }
  }
  static setAttributes({
    html: l,
    element: U,
    storage: Z = null,
    intent: d,
    linkService: F
  }) {
    const {
      attributes: W
    } = U, V = l instanceof HTMLAnchorElement;
    W.type === "radio" && (W.name = `${W.name}-${d}`);
    for (const [c, t] of Object.entries(W))
      if (t != null)
        switch (c) {
          case "class":
            t.length && l.setAttribute(c, t.join(" "));
            break;
          case "dataId":
            break;
          case "id":
            l.setAttribute("data-element-id", t);
            break;
          case "style":
            Object.assign(l.style, t);
            break;
          case "textContent":
            l.textContent = t;
            break;
          default:
            (!V || c !== "href" && c !== "newWindow") && l.setAttribute(c, t);
        }
    V && F.addLinkAttributes(l, W.href, W.newWindow), Z && W.dataId && this.setupStorage(l, W.dataId, U, Z);
  }
  static render(l) {
    var s, b;
    const U = l.annotationStorage, Z = l.linkService, d = l.xfaHtml, F = l.intent || "display", W = document.createElement(d.name);
    d.attributes && this.setAttributes({
      html: W,
      element: d,
      intent: F,
      linkService: Z
    });
    const V = F !== "richText", c = l.div;
    if (c.append(W), l.viewport) {
      const n = `matrix(${l.viewport.transform.join(",")})`;
      c.style.transform = n;
    }
    V && c.setAttribute("class", "xfaLayer xfaFont");
    const t = [];
    if (d.children.length === 0) {
      if (d.value) {
        const n = document.createTextNode(d.value);
        W.append(n), V && dW.shouldBuildText(d.name) && t.push(n);
      }
      return {
        textDivs: t
      };
    }
    const N = [[d, -1, W]];
    for (; N.length > 0; ) {
      const [n, h, M] = N.at(-1);
      if (h + 1 === n.children.length) {
        N.pop();
        continue;
      }
      const G = n.children[++N.at(-1)[1]];
      if (G === null)
        continue;
      const {
        name: J
      } = G;
      if (J === "#text") {
        const X = document.createTextNode(G.value);
        t.push(X), M.append(X);
        continue;
      }
      const T = (s = G == null ? void 0 : G.attributes) != null && s.xmlns ? document.createElementNS(G.attributes.xmlns, J) : document.createElement(J);
      if (M.append(T), G.attributes && this.setAttributes({
        html: T,
        element: G,
        storage: U,
        intent: F,
        linkService: Z
      }), ((b = G.children) == null ? void 0 : b.length) > 0)
        N.push([G, -1, T]);
      else if (G.value) {
        const X = document.createTextNode(G.value);
        V && dW.shouldBuildText(J) && t.push(X), T.append(X);
      }
    }
    for (const n of c.querySelectorAll(".xfaNonInteractive input, .xfaNonInteractive textarea"))
      n.setAttribute("readOnly", !0);
    return {
      textDivs: t
    };
  }
  static update(l) {
    const U = `matrix(${l.viewport.transform.join(",")})`;
    l.div.style.transform = U, l.div.hidden = !1;
  }
}
const TV = 1e3, Kn = 9, QF = /* @__PURE__ */ new WeakSet();
function hZ(R) {
  return {
    width: R[2] - R[0],
    height: R[3] - R[1]
  };
}
class gn {
  static create(l) {
    switch (l.data.annotationType) {
      case Ql.LINK:
        return new Vb(l);
      case Ql.TEXT:
        return new Hn(l);
      case Ql.WIDGET:
        switch (l.data.fieldType) {
          case "Tx":
            return new vn(l);
          case "Btn":
            return l.data.radioButton ? new Rb(l) : l.data.checkBox ? new An(l) : new fn(l);
          case "Ch":
            return new _n(l);
          case "Sig":
            return new Pn(l);
        }
        return new tF(l);
      case Ql.POPUP:
        return new KR(l);
      case Ql.FREETEXT:
        return new sb(l);
      case Ql.LINE:
        return new $n(l);
      case Ql.SQUARE:
        return new lh(l);
      case Ql.CIRCLE:
        return new Uh(l);
      case Ql.POLYLINE:
        return new bb(l);
      case Ql.CARET:
        return new dh(l);
      case Ql.INK:
        return new ab(l);
      case Ql.POLYGON:
        return new Zh(l);
      case Ql.HIGHLIGHT:
        return new Fh(l);
      case Ql.UNDERLINE:
        return new Wh(l);
      case Ql.SQUIGGLY:
        return new Qh(l);
      case Ql.STRIKEOUT:
        return new Vh(l);
      case Ql.STAMP:
        return new nb(l);
      case Ql.FILEATTACHMENT:
        return new ch(l);
      default:
        return new Fl(l);
    }
  }
}
var pd, AF, VQ, rR;
const DN = class {
  constructor(l, {
    isRenderable: U = !1,
    ignoreBorder: Z = !1,
    createQuadrilaterals: d = !1
  } = {}) {
    a(this, VQ);
    a(this, pd, null);
    a(this, AF, !1);
    this.isRenderable = U, this.data = l.data, this.layer = l.layer, this.linkService = l.linkService, this.downloadManager = l.downloadManager, this.imageResourcesPath = l.imageResourcesPath, this.renderForms = l.renderForms, this.svgFactory = l.svgFactory, this.annotationStorage = l.annotationStorage, this.enableScripting = l.enableScripting, this.hasJSActions = l.hasJSActions, this._fieldObjects = l.fieldObjects, this.parent = l.parent, U && (this.container = this._createContainer(Z)), d && this._createQuadrilaterals();
  }
  static _hasPopupData({
    titleObj: l,
    contentsObj: U,
    richText: Z
  }) {
    return !!(l != null && l.str || U != null && U.str || Z != null && Z.str);
  }
  get hasPopupData() {
    return DN._hasPopupData(this.data);
  }
  updateEdited(l) {
    if (!this.container)
      return;
    Q(this, pd) || i(this, pd, {
      rect: this.data.rect.slice(0)
    });
    const {
      rect: U
    } = l;
    U && m(this, VQ, rR).call(this, U);
  }
  resetEdited() {
    Q(this, pd) && (m(this, VQ, rR).call(this, Q(this, pd).rect), i(this, pd, null));
  }
  _createContainer(l) {
    const {
      data: U,
      parent: {
        page: Z,
        viewport: d
      }
    } = this, F = document.createElement("section");
    F.setAttribute("data-annotation-id", U.id), this instanceof tF || (F.tabIndex = TV);
    const {
      style: W
    } = F;
    if (W.zIndex = this.parent.zIndex++, U.popupRef && F.setAttribute("aria-haspopup", "dialog"), U.alternativeText && (F.title = U.alternativeText), U.noRotate && F.classList.add("norotate"), !U.rect || this instanceof KR) {
      const {
        rotation: M
      } = U;
      return !U.hasOwnCanvas && M !== 0 && this.setRotation(M, F), F;
    }
    const {
      width: V,
      height: c
    } = hZ(U.rect);
    if (!l && U.borderStyle.width > 0) {
      W.borderWidth = `${U.borderStyle.width}px`;
      const M = U.borderStyle.horizontalCornerRadius, G = U.borderStyle.verticalCornerRadius;
      if (M > 0 || G > 0) {
        const T = `calc(${M}px * var(--scale-factor)) / calc(${G}px * var(--scale-factor))`;
        W.borderRadius = T;
      } else if (this instanceof Rb) {
        const T = `calc(${V}px * var(--scale-factor)) / calc(${c}px * var(--scale-factor))`;
        W.borderRadius = T;
      }
      switch (U.borderStyle.style) {
        case z0.SOLID:
          W.borderStyle = "solid";
          break;
        case z0.DASHED:
          W.borderStyle = "dashed";
          break;
        case z0.BEVELED:
          w("Unimplemented border style: beveled");
          break;
        case z0.INSET:
          w("Unimplemented border style: inset");
          break;
        case z0.UNDERLINE:
          W.borderBottomStyle = "solid";
          break;
      }
      const J = U.borderColor || null;
      J ? (i(this, AF, !0), W.borderColor = u.makeHexColor(J[0] | 0, J[1] | 0, J[2] | 0)) : W.borderWidth = 0;
    }
    const t = u.normalizeRect([U.rect[0], Z.view[3] - U.rect[1] + Z.view[1], U.rect[2], Z.view[3] - U.rect[3] + Z.view[1]]), {
      pageWidth: N,
      pageHeight: s,
      pageX: b,
      pageY: n
    } = d.rawDims;
    W.left = `${100 * (t[0] - b) / N}%`, W.top = `${100 * (t[1] - n) / s}%`;
    const {
      rotation: h
    } = U;
    return U.hasOwnCanvas || h === 0 ? (W.width = `${100 * V / N}%`, W.height = `${100 * c / s}%`) : this.setRotation(h, F), F;
  }
  setRotation(l, U = this.container) {
    if (!this.data.rect)
      return;
    const {
      pageWidth: Z,
      pageHeight: d
    } = this.parent.viewport.rawDims, {
      width: F,
      height: W
    } = hZ(this.data.rect);
    let V, c;
    l % 180 === 0 ? (V = 100 * F / Z, c = 100 * W / d) : (V = 100 * W / Z, c = 100 * F / d), U.style.width = `${V}%`, U.style.height = `${c}%`, U.setAttribute("data-main-rotation", (360 - l) % 360);
  }
  get _commonActions() {
    const l = (U, Z, d) => {
      const F = d.detail[U], W = F[0], V = F.slice(1);
      d.target.style[Z] = Fs[`${W}_HTML`](V), this.annotationStorage.setValue(this.data.id, {
        [Z]: Fs[`${W}_rgb`](V)
      });
    };
    return K(this, "_commonActions", {
      display: (U) => {
        const {
          display: Z
        } = U.detail, d = Z % 2 === 1;
        this.container.style.visibility = d ? "hidden" : "visible", this.annotationStorage.setValue(this.data.id, {
          noView: d,
          noPrint: Z === 1 || Z === 2
        });
      },
      print: (U) => {
        this.annotationStorage.setValue(this.data.id, {
          noPrint: !U.detail.print
        });
      },
      hidden: (U) => {
        const {
          hidden: Z
        } = U.detail;
        this.container.style.visibility = Z ? "hidden" : "visible", this.annotationStorage.setValue(this.data.id, {
          noPrint: Z,
          noView: Z
        });
      },
      focus: (U) => {
        setTimeout(() => U.target.focus({
          preventScroll: !1
        }), 0);
      },
      userName: (U) => {
        U.target.title = U.detail.userName;
      },
      readonly: (U) => {
        U.target.disabled = U.detail.readonly;
      },
      required: (U) => {
        this._setRequired(U.target, U.detail.required);
      },
      bgColor: (U) => {
        l("bgColor", "backgroundColor", U);
      },
      fillColor: (U) => {
        l("fillColor", "backgroundColor", U);
      },
      fgColor: (U) => {
        l("fgColor", "color", U);
      },
      textColor: (U) => {
        l("textColor", "color", U);
      },
      borderColor: (U) => {
        l("borderColor", "borderColor", U);
      },
      strokeColor: (U) => {
        l("strokeColor", "borderColor", U);
      },
      rotation: (U) => {
        const Z = U.detail.rotation;
        this.setRotation(Z), this.annotationStorage.setValue(this.data.id, {
          rotation: Z
        });
      }
    });
  }
  _dispatchEventFromSandbox(l, U) {
    const Z = this._commonActions;
    for (const d of Object.keys(U.detail)) {
      const F = l[d] || Z[d];
      F == null || F(U);
    }
  }
  _setDefaultPropertiesFromJS(l) {
    if (!this.enableScripting)
      return;
    const U = this.annotationStorage.getRawValue(this.data.id);
    if (!U)
      return;
    const Z = this._commonActions;
    for (const [d, F] of Object.entries(U)) {
      const W = Z[d];
      if (W) {
        const V = {
          detail: {
            [d]: F
          },
          target: l
        };
        W(V), delete U[d];
      }
    }
  }
  _createQuadrilaterals() {
    if (!this.container)
      return;
    const {
      quadPoints: l
    } = this.data;
    if (!l)
      return;
    const [U, Z, d, F] = this.data.rect;
    if (l.length === 1) {
      const [, {
        x: M,
        y: G
      }, {
        x: J,
        y: T
      }] = l[0];
      if (d === M && F === G && U === J && Z === T)
        return;
    }
    const {
      style: W
    } = this.container;
    let V;
    if (Q(this, AF)) {
      const {
        borderColor: M,
        borderWidth: G
      } = W;
      W.borderWidth = 0, V = ["url('data:image/svg+xml;utf8,", '<svg xmlns="http://www.w3.org/2000/svg"', ' preserveAspectRatio="none" viewBox="0 0 1 1">', `<g fill="transparent" stroke="${M}" stroke-width="${G}">`], this.container.classList.add("hasBorder");
    }
    const c = d - U, t = F - Z, {
      svgFactory: N
    } = this, s = N.createElement("svg");
    s.classList.add("quadrilateralsContainer"), s.setAttribute("width", 0), s.setAttribute("height", 0);
    const b = N.createElement("defs");
    s.append(b);
    const n = N.createElement("clipPath"), h = `clippath_${this.data.id}`;
    n.setAttribute("id", h), n.setAttribute("clipPathUnits", "objectBoundingBox"), b.append(n);
    for (const [, {
      x: M,
      y: G
    }, {
      x: J,
      y: T
    }] of l) {
      const X = N.createElement("rect"), S = (J - U) / c, e = (F - G) / t, Y = (M - J) / c, B = (G - T) / t;
      X.setAttribute("x", S), X.setAttribute("y", e), X.setAttribute("width", Y), X.setAttribute("height", B), n.append(X), V == null || V.push(`<rect vector-effect="non-scaling-stroke" x="${S}" y="${e}" width="${Y}" height="${B}"/>`);
    }
    Q(this, AF) && (V.push("</g></svg>')"), W.backgroundImage = V.join("")), this.container.append(s), this.container.style.clipPath = `url(#${h})`;
  }
  _createPopup() {
    const {
      container: l,
      data: U
    } = this;
    l.setAttribute("aria-haspopup", "dialog");
    const Z = new KR({
      data: {
        color: U.color,
        titleObj: U.titleObj,
        modificationDate: U.modificationDate,
        contentsObj: U.contentsObj,
        richText: U.richText,
        parentRect: U.rect,
        borderStyle: 0,
        id: `popup_${U.id}`,
        rotation: U.rotation
      },
      parent: this.parent,
      elements: [this]
    });
    this.parent.div.append(Z.render());
  }
  render() {
    f("Abstract method `AnnotationElement.render` called");
  }
  _getElementsByName(l, U = null) {
    const Z = [];
    if (this._fieldObjects) {
      const d = this._fieldObjects[l];
      if (d)
        for (const {
          page: F,
          id: W,
          exportValues: V
        } of d) {
          if (F === -1 || W === U)
            continue;
          const c = typeof V == "string" ? V : null, t = document.querySelector(`[data-element-id="${W}"]`);
          if (t && !QF.has(t)) {
            w(`_getElementsByName - element not allowed: ${W}`);
            continue;
          }
          Z.push({
            id: W,
            exportValue: c,
            domElement: t
          });
        }
      return Z;
    }
    for (const d of document.getElementsByName(l)) {
      const {
        exportValue: F
      } = d, W = d.getAttribute("data-element-id");
      W !== U && QF.has(d) && Z.push({
        id: W,
        exportValue: F,
        domElement: d
      });
    }
    return Z;
  }
  show() {
    var l;
    this.container && (this.container.hidden = !1), (l = this.popup) == null || l.maybeShow();
  }
  hide() {
    var l;
    this.container && (this.container.hidden = !0), (l = this.popup) == null || l.forceHide();
  }
  getElementsToTriggerPopup() {
    return this.container;
  }
  addHighlightArea() {
    const l = this.getElementsToTriggerPopup();
    if (Array.isArray(l))
      for (const U of l)
        U.classList.add("highlightArea");
    else
      l.classList.add("highlightArea");
  }
  get _isEditable() {
    return !1;
  }
  _editOnDoubleClick() {
    if (!this._isEditable)
      return;
    const {
      annotationEditorType: l,
      data: {
        id: U
      }
    } = this;
    this.container.addEventListener("dblclick", () => {
      var Z;
      (Z = this.linkService.eventBus) == null || Z.dispatch("switchannotationeditormode", {
        source: this,
        mode: l,
        editId: U
      });
    });
  }
};
let Fl = DN;
pd = new WeakMap(), AF = new WeakMap(), VQ = new WeakSet(), rR = function(l) {
  const {
    container: {
      style: U
    },
    data: {
      rect: Z,
      rotation: d
    },
    parent: {
      viewport: {
        rawDims: {
          pageWidth: F,
          pageHeight: W,
          pageX: V,
          pageY: c
        }
      }
    }
  } = this;
  Z == null || Z.splice(0, 4, ...l);
  const {
    width: t,
    height: N
  } = hZ(l);
  U.left = `${100 * (l[0] - V) / F}%`, U.top = `${100 * (W - l[3] + c) / W}%`, d === 0 ? (U.width = `${100 * t / F}%`, U.height = `${100 * N / W}%`) : this.setRotation(d);
};
var ZZ, _Z, Pc, cb, Ac, tb;
class Vb extends Fl {
  constructor(U, Z = null) {
    super(U, {
      isRenderable: !0,
      ignoreBorder: !!(Z != null && Z.ignoreBorder),
      createQuadrilaterals: !0
    });
    a(this, ZZ);
    a(this, Pc);
    a(this, Ac);
    this.isTooltipOnly = U.data.isTooltipOnly;
  }
  render() {
    const {
      data: U,
      linkService: Z
    } = this, d = document.createElement("a");
    d.setAttribute("data-element-id", U.id);
    let F = !1;
    return U.url ? (Z.addLinkAttributes(d, U.url, U.newWindow), F = !0) : U.action ? (this._bindNamedAction(d, U.action), F = !0) : U.attachment ? (m(this, Pc, cb).call(this, d, U.attachment, U.attachmentDest), F = !0) : U.setOCGState ? (m(this, Ac, tb).call(this, d, U.setOCGState), F = !0) : U.dest ? (this._bindLink(d, U.dest), F = !0) : (U.actions && (U.actions.Action || U.actions["Mouse Up"] || U.actions["Mouse Down"]) && this.enableScripting && this.hasJSActions && (this._bindJSAction(d, U), F = !0), U.resetForm ? (this._bindResetFormAction(d, U.resetForm), F = !0) : this.isTooltipOnly && !F && (this._bindLink(d, ""), F = !0)), this.container.classList.add("linkAnnotation"), F && this.container.append(d), this.container;
  }
  _bindLink(U, Z) {
    U.href = this.linkService.getDestinationHash(Z), U.onclick = () => (Z && this.linkService.goToDestination(Z), !1), (Z || Z === "") && m(this, ZZ, _Z).call(this);
  }
  _bindNamedAction(U, Z) {
    U.href = this.linkService.getAnchorUrl(""), U.onclick = () => (this.linkService.executeNamedAction(Z), !1), m(this, ZZ, _Z).call(this);
  }
  _bindJSAction(U, Z) {
    U.href = this.linkService.getAnchorUrl("");
    const d = /* @__PURE__ */ new Map([["Action", "onclick"], ["Mouse Up", "onmouseup"], ["Mouse Down", "onmousedown"]]);
    for (const F of Object.keys(Z.actions)) {
      const W = d.get(F);
      W && (U[W] = () => {
        var V;
        return (V = this.linkService.eventBus) == null || V.dispatch("dispatcheventinsandbox", {
          source: this,
          detail: {
            id: Z.id,
            name: F
          }
        }), !1;
      });
    }
    U.onclick || (U.onclick = () => !1), m(this, ZZ, _Z).call(this);
  }
  _bindResetFormAction(U, Z) {
    const d = U.onclick;
    if (d || (U.href = this.linkService.getAnchorUrl("")), m(this, ZZ, _Z).call(this), !this._fieldObjects) {
      w('_bindResetFormAction - "resetForm" action not supported, ensure that the `fieldObjects` parameter is provided.'), d || (U.onclick = () => !1);
      return;
    }
    U.onclick = () => {
      var s;
      d == null || d();
      const {
        fields: F,
        refs: W,
        include: V
      } = Z, c = [];
      if (F.length !== 0 || W.length !== 0) {
        const b = new Set(W);
        for (const n of F) {
          const h = this._fieldObjects[n] || [];
          for (const {
            id: M
          } of h)
            b.add(M);
        }
        for (const n of Object.values(this._fieldObjects))
          for (const h of n)
            b.has(h.id) === V && c.push(h);
      } else
        for (const b of Object.values(this._fieldObjects))
          c.push(...b);
      const t = this.annotationStorage, N = [];
      for (const b of c) {
        const {
          id: n
        } = b;
        switch (N.push(n), b.type) {
          case "text": {
            const M = b.defaultValue || "";
            t.setValue(n, {
              value: M
            });
            break;
          }
          case "checkbox":
          case "radiobutton": {
            const M = b.defaultValue === b.exportValues;
            t.setValue(n, {
              value: M
            });
            break;
          }
          case "combobox":
          case "listbox": {
            const M = b.defaultValue || "";
            t.setValue(n, {
              value: M
            });
            break;
          }
          default:
            continue;
        }
        const h = document.querySelector(`[data-element-id="${n}"]`);
        if (h) {
          if (!QF.has(h)) {
            w(`_bindResetFormAction - element not allowed: ${n}`);
            continue;
          }
        } else
          continue;
        h.dispatchEvent(new Event("resetform"));
      }
      return this.enableScripting && ((s = this.linkService.eventBus) == null || s.dispatch("dispatcheventinsandbox", {
        source: this,
        detail: {
          id: "app",
          ids: N,
          name: "ResetForm"
        }
      })), !1;
    };
  }
}
ZZ = new WeakSet(), _Z = function() {
  this.container.setAttribute("data-internal-link", "");
}, Pc = new WeakSet(), cb = function(U, Z, d = null) {
  U.href = this.linkService.getAnchorUrl(""), Z.description && (U.title = Z.description), U.onclick = () => {
    var F;
    return (F = this.downloadManager) == null || F.openOrDownloadData(Z.content, Z.filename, d), !1;
  }, m(this, ZZ, _Z).call(this);
}, Ac = new WeakSet(), tb = function(U, Z) {
  U.href = this.linkService.getAnchorUrl(""), U.onclick = () => (this.linkService.executeSetOCGState(Z), !1), m(this, ZZ, _Z).call(this);
};
class Hn extends Fl {
  constructor(l) {
    super(l, {
      isRenderable: !0
    });
  }
  render() {
    this.container.classList.add("textAnnotation");
    const l = document.createElement("img");
    return l.src = this.imageResourcesPath + "annotation-" + this.data.name.toLowerCase() + ".svg", l.setAttribute("data-l10n-id", "pdfjs-text-annotation-type"), l.setAttribute("data-l10n-args", JSON.stringify({
      type: this.data.name
    })), !this.data.popupRef && this.hasPopupData && this._createPopup(), this.container.append(l), this.container;
  }
}
class tF extends Fl {
  render() {
    return this.container;
  }
  showElementAndHideCanvas(l) {
    var U;
    this.data.hasOwnCanvas && (((U = l.previousSibling) == null ? void 0 : U.nodeName) === "CANVAS" && (l.previousSibling.hidden = !0), l.hidden = !1);
  }
  _getKeyModifier(l) {
    return xl.platform.isMac ? l.metaKey : l.ctrlKey;
  }
  _setEventListener(l, U, Z, d, F) {
    Z.includes("mouse") ? l.addEventListener(Z, (W) => {
      var V;
      (V = this.linkService.eventBus) == null || V.dispatch("dispatcheventinsandbox", {
        source: this,
        detail: {
          id: this.data.id,
          name: d,
          value: F(W),
          shift: W.shiftKey,
          modifier: this._getKeyModifier(W)
        }
      });
    }) : l.addEventListener(Z, (W) => {
      var V;
      if (Z === "blur") {
        if (!U.focused || !W.relatedTarget)
          return;
        U.focused = !1;
      } else if (Z === "focus") {
        if (U.focused)
          return;
        U.focused = !0;
      }
      F && ((V = this.linkService.eventBus) == null || V.dispatch("dispatcheventinsandbox", {
        source: this,
        detail: {
          id: this.data.id,
          name: d,
          value: F(W)
        }
      }));
    });
  }
  _setEventListeners(l, U, Z, d) {
    var F, W, V;
    for (const [c, t] of Z)
      (t === "Action" || (F = this.data.actions) != null && F[t]) && ((t === "Focus" || t === "Blur") && (U || (U = {
        focused: !1
      })), this._setEventListener(l, U, c, t, d), t === "Focus" && !((W = this.data.actions) != null && W.Blur) ? this._setEventListener(l, U, "blur", "Blur", null) : t === "Blur" && !((V = this.data.actions) != null && V.Focus) && this._setEventListener(l, U, "focus", "Focus", null));
  }
  _setBackgroundColor(l) {
    const U = this.data.backgroundColor || null;
    l.style.backgroundColor = U === null ? "transparent" : u.makeHexColor(U[0], U[1], U[2]);
  }
  _setTextStyle(l) {
    const U = ["left", "center", "right"], {
      fontColor: Z
    } = this.data.defaultAppearanceData, d = this.data.defaultAppearanceData.fontSize || Kn, F = l.style;
    let W;
    const V = 2, c = (t) => Math.round(10 * t) / 10;
    if (this.data.multiLine) {
      const t = Math.abs(this.data.rect[3] - this.data.rect[1] - V), N = Math.round(t / (WR * d)) || 1, s = t / N;
      W = Math.min(d, c(s / WR));
    } else {
      const t = Math.abs(this.data.rect[3] - this.data.rect[1] - V);
      W = Math.min(d, c(t / WR));
    }
    F.fontSize = `calc(${W}px * var(--scale-factor))`, F.color = u.makeHexColor(Z[0], Z[1], Z[2]), this.data.textAlignment !== null && (F.textAlign = U[this.data.textAlignment]);
  }
  _setRequired(l, U) {
    U ? l.setAttribute("required", !0) : l.removeAttribute("required"), l.setAttribute("aria-required", U);
  }
}
class vn extends tF {
  constructor(l) {
    const U = l.renderForms || l.data.hasOwnCanvas || !l.data.hasAppearance && !!l.data.fieldValue;
    super(l, {
      isRenderable: U
    });
  }
  setPropertyOnSiblings(l, U, Z, d) {
    const F = this.annotationStorage;
    for (const W of this._getElementsByName(l.name, l.id))
      W.domElement && (W.domElement[U] = Z), F.setValue(W.id, {
        [d]: Z
      });
  }
  render() {
    var d, F;
    const l = this.annotationStorage, U = this.data.id;
    this.container.classList.add("textWidgetAnnotation");
    let Z = null;
    if (this.renderForms) {
      const W = l.getValue(U, {
        value: this.data.fieldValue
      });
      let V = W.value || "";
      const c = l.getValue(U, {
        charLimit: this.data.maxLen
      }).charLimit;
      c && V.length > c && (V = V.slice(0, c));
      let t = W.formattedValue || ((d = this.data.textContent) == null ? void 0 : d.join(`
`)) || null;
      t && this.data.comb && (t = t.replaceAll(/\s+/g, ""));
      const N = {
        userValue: V,
        formattedValue: t,
        lastCommittedValue: null,
        commitKey: 1,
        focused: !1
      };
      this.data.multiLine ? (Z = document.createElement("textarea"), Z.textContent = t ?? V, this.data.doNotScroll && (Z.style.overflowY = "hidden")) : (Z = document.createElement("input"), Z.type = "text", Z.setAttribute("value", t ?? V), this.data.doNotScroll && (Z.style.overflowX = "hidden")), this.data.hasOwnCanvas && (Z.hidden = !0), QF.add(Z), Z.setAttribute("data-element-id", U), Z.disabled = this.data.readOnly, Z.name = this.data.fieldName, Z.tabIndex = TV, this._setRequired(Z, this.data.required), c && (Z.maxLength = c), Z.addEventListener("input", (b) => {
        l.setValue(U, {
          value: b.target.value
        }), this.setPropertyOnSiblings(Z, "value", b.target.value, "value"), N.formattedValue = null;
      }), Z.addEventListener("resetform", (b) => {
        const n = this.data.defaultFieldValue ?? "";
        Z.value = N.userValue = n, N.formattedValue = null;
      });
      let s = (b) => {
        const {
          formattedValue: n
        } = N;
        n != null && (b.target.value = n), b.target.scrollLeft = 0;
      };
      if (this.enableScripting && this.hasJSActions) {
        Z.addEventListener("focus", (n) => {
          var M;
          if (N.focused)
            return;
          const {
            target: h
          } = n;
          N.userValue && (h.value = N.userValue), N.lastCommittedValue = h.value, N.commitKey = 1, (M = this.data.actions) != null && M.Focus || (N.focused = !0);
        }), Z.addEventListener("updatefromsandbox", (n) => {
          this.showElementAndHideCanvas(n.target);
          const h = {
            value(M) {
              N.userValue = M.detail.value ?? "", l.setValue(U, {
                value: N.userValue.toString()
              }), M.target.value = N.userValue;
            },
            formattedValue(M) {
              const {
                formattedValue: G
              } = M.detail;
              N.formattedValue = G, G != null && M.target !== document.activeElement && (M.target.value = G), l.setValue(U, {
                formattedValue: G
              });
            },
            selRange(M) {
              M.target.setSelectionRange(...M.detail.selRange);
            },
            charLimit: (M) => {
              var X;
              const {
                charLimit: G
              } = M.detail, {
                target: J
              } = M;
              if (G === 0) {
                J.removeAttribute("maxLength");
                return;
              }
              J.setAttribute("maxLength", G);
              let T = N.userValue;
              !T || T.length <= G || (T = T.slice(0, G), J.value = N.userValue = T, l.setValue(U, {
                value: T
              }), (X = this.linkService.eventBus) == null || X.dispatch("dispatcheventinsandbox", {
                source: this,
                detail: {
                  id: U,
                  name: "Keystroke",
                  value: T,
                  willCommit: !0,
                  commitKey: 1,
                  selStart: J.selectionStart,
                  selEnd: J.selectionEnd
                }
              }));
            }
          };
          this._dispatchEventFromSandbox(h, n);
        }), Z.addEventListener("keydown", (n) => {
          var G;
          N.commitKey = 1;
          let h = -1;
          if (n.key === "Escape" ? h = 0 : n.key === "Enter" && !this.data.multiLine ? h = 2 : n.key === "Tab" && (N.commitKey = 3), h === -1)
            return;
          const {
            value: M
          } = n.target;
          N.lastCommittedValue !== M && (N.lastCommittedValue = M, N.userValue = M, (G = this.linkService.eventBus) == null || G.dispatch("dispatcheventinsandbox", {
            source: this,
            detail: {
              id: U,
              name: "Keystroke",
              value: M,
              willCommit: !0,
              commitKey: h,
              selStart: n.target.selectionStart,
              selEnd: n.target.selectionEnd
            }
          }));
        });
        const b = s;
        s = null, Z.addEventListener("blur", (n) => {
          var M, G;
          if (!N.focused || !n.relatedTarget)
            return;
          (M = this.data.actions) != null && M.Blur || (N.focused = !1);
          const {
            value: h
          } = n.target;
          N.userValue = h, N.lastCommittedValue !== h && ((G = this.linkService.eventBus) == null || G.dispatch("dispatcheventinsandbox", {
            source: this,
            detail: {
              id: U,
              name: "Keystroke",
              value: h,
              willCommit: !0,
              commitKey: N.commitKey,
              selStart: n.target.selectionStart,
              selEnd: n.target.selectionEnd
            }
          })), b(n);
        }), (F = this.data.actions) != null && F.Keystroke && Z.addEventListener("beforeinput", (n) => {
          var e;
          N.lastCommittedValue = null;
          const {
            data: h,
            target: M
          } = n, {
            value: G,
            selectionStart: J,
            selectionEnd: T
          } = M;
          let X = J, S = T;
          switch (n.inputType) {
            case "deleteWordBackward": {
              const Y = G.substring(0, J).match(/\w*[^\w]*$/);
              Y && (X -= Y[0].length);
              break;
            }
            case "deleteWordForward": {
              const Y = G.substring(J).match(/^[^\w]*\w*/);
              Y && (S += Y[0].length);
              break;
            }
            case "deleteContentBackward":
              J === T && (X -= 1);
              break;
            case "deleteContentForward":
              J === T && (S += 1);
              break;
          }
          n.preventDefault(), (e = this.linkService.eventBus) == null || e.dispatch("dispatcheventinsandbox", {
            source: this,
            detail: {
              id: U,
              name: "Keystroke",
              value: G,
              change: h || "",
              willCommit: !1,
              selStart: X,
              selEnd: S
            }
          });
        }), this._setEventListeners(Z, N, [["focus", "Focus"], ["blur", "Blur"], ["mousedown", "Mouse Down"], ["mouseenter", "Mouse Enter"], ["mouseleave", "Mouse Exit"], ["mouseup", "Mouse Up"]], (n) => n.target.value);
      }
      if (s && Z.addEventListener("blur", s), this.data.comb) {
        const n = (this.data.rect[2] - this.data.rect[0]) / c;
        Z.classList.add("comb"), Z.style.letterSpacing = `calc(${n}px * var(--scale-factor) - 1ch)`;
      }
    } else
      Z = document.createElement("div"), Z.textContent = this.data.fieldValue, Z.style.verticalAlign = "middle", Z.style.display = "table-cell", this.data.hasOwnCanvas && (Z.hidden = !0);
    return this._setTextStyle(Z), this._setBackgroundColor(Z), this._setDefaultPropertiesFromJS(Z), this.container.append(Z), this.container;
  }
}
class Pn extends tF {
  constructor(l) {
    super(l, {
      isRenderable: !!l.data.hasOwnCanvas
    });
  }
}
class An extends tF {
  constructor(l) {
    super(l, {
      isRenderable: l.renderForms
    });
  }
  render() {
    const l = this.annotationStorage, U = this.data, Z = U.id;
    let d = l.getValue(Z, {
      value: U.exportValue === U.fieldValue
    }).value;
    typeof d == "string" && (d = d !== "Off", l.setValue(Z, {
      value: d
    })), this.container.classList.add("buttonWidgetAnnotation", "checkBox");
    const F = document.createElement("input");
    return QF.add(F), F.setAttribute("data-element-id", Z), F.disabled = U.readOnly, this._setRequired(F, this.data.required), F.type = "checkbox", F.name = U.fieldName, d && F.setAttribute("checked", !0), F.setAttribute("exportValue", U.exportValue), F.tabIndex = TV, F.addEventListener("change", (W) => {
      const {
        name: V,
        checked: c
      } = W.target;
      for (const t of this._getElementsByName(V, Z)) {
        const N = c && t.exportValue === U.exportValue;
        t.domElement && (t.domElement.checked = N), l.setValue(t.id, {
          value: N
        });
      }
      l.setValue(Z, {
        value: c
      });
    }), F.addEventListener("resetform", (W) => {
      const V = U.defaultFieldValue || "Off";
      W.target.checked = V === U.exportValue;
    }), this.enableScripting && this.hasJSActions && (F.addEventListener("updatefromsandbox", (W) => {
      const V = {
        value(c) {
          c.target.checked = c.detail.value !== "Off", l.setValue(Z, {
            value: c.target.checked
          });
        }
      };
      this._dispatchEventFromSandbox(V, W);
    }), this._setEventListeners(F, null, [["change", "Validate"], ["change", "Action"], ["focus", "Focus"], ["blur", "Blur"], ["mousedown", "Mouse Down"], ["mouseenter", "Mouse Enter"], ["mouseleave", "Mouse Exit"], ["mouseup", "Mouse Up"]], (W) => W.target.checked)), this._setBackgroundColor(F), this._setDefaultPropertiesFromJS(F), this.container.append(F), this.container;
  }
}
class Rb extends tF {
  constructor(l) {
    super(l, {
      isRenderable: l.renderForms
    });
  }
  render() {
    this.container.classList.add("buttonWidgetAnnotation", "radioButton");
    const l = this.annotationStorage, U = this.data, Z = U.id;
    let d = l.getValue(Z, {
      value: U.fieldValue === U.buttonValue
    }).value;
    if (typeof d == "string" && (d = d !== U.buttonValue, l.setValue(Z, {
      value: d
    })), d)
      for (const W of this._getElementsByName(U.fieldName, Z))
        l.setValue(W.id, {
          value: !1
        });
    const F = document.createElement("input");
    if (QF.add(F), F.setAttribute("data-element-id", Z), F.disabled = U.readOnly, this._setRequired(F, this.data.required), F.type = "radio", F.name = U.fieldName, d && F.setAttribute("checked", !0), F.tabIndex = TV, F.addEventListener("change", (W) => {
      const {
        name: V,
        checked: c
      } = W.target;
      for (const t of this._getElementsByName(V, Z))
        l.setValue(t.id, {
          value: !1
        });
      l.setValue(Z, {
        value: c
      });
    }), F.addEventListener("resetform", (W) => {
      const V = U.defaultFieldValue;
      W.target.checked = V != null && V === U.buttonValue;
    }), this.enableScripting && this.hasJSActions) {
      const W = U.buttonValue;
      F.addEventListener("updatefromsandbox", (V) => {
        const c = {
          value: (t) => {
            const N = W === t.detail.value;
            for (const s of this._getElementsByName(t.target.name)) {
              const b = N && s.id === Z;
              s.domElement && (s.domElement.checked = b), l.setValue(s.id, {
                value: b
              });
            }
          }
        };
        this._dispatchEventFromSandbox(c, V);
      }), this._setEventListeners(F, null, [["change", "Validate"], ["change", "Action"], ["focus", "Focus"], ["blur", "Blur"], ["mousedown", "Mouse Down"], ["mouseenter", "Mouse Enter"], ["mouseleave", "Mouse Exit"], ["mouseup", "Mouse Up"]], (V) => V.target.checked);
    }
    return this._setBackgroundColor(F), this._setDefaultPropertiesFromJS(F), this.container.append(F), this.container;
  }
}
class fn extends Vb {
  constructor(l) {
    super(l, {
      ignoreBorder: l.data.hasAppearance
    });
  }
  render() {
    const l = super.render();
    l.classList.add("buttonWidgetAnnotation", "pushButton");
    const U = l.lastChild;
    return this.enableScripting && this.hasJSActions && U && (this._setDefaultPropertiesFromJS(U), U.addEventListener("updatefromsandbox", (Z) => {
      this._dispatchEventFromSandbox({}, Z);
    })), l;
  }
}
class _n extends tF {
  constructor(l) {
    super(l, {
      isRenderable: l.renderForms
    });
  }
  render() {
    this.container.classList.add("choiceWidgetAnnotation");
    const l = this.annotationStorage, U = this.data.id, Z = l.getValue(U, {
      value: this.data.fieldValue
    }), d = document.createElement("select");
    QF.add(d), d.setAttribute("data-element-id", U), d.disabled = this.data.readOnly, this._setRequired(d, this.data.required), d.name = this.data.fieldName, d.tabIndex = TV;
    let F = this.data.combo && this.data.options.length > 0;
    this.data.combo || (d.size = this.data.options.length, this.data.multiSelect && (d.multiple = !0)), d.addEventListener("resetform", (N) => {
      const s = this.data.defaultFieldValue;
      for (const b of d.options)
        b.selected = b.value === s;
    });
    for (const N of this.data.options) {
      const s = document.createElement("option");
      s.textContent = N.displayValue, s.value = N.exportValue, Z.value.includes(N.exportValue) && (s.setAttribute("selected", !0), F = !1), d.append(s);
    }
    let W = null;
    if (F) {
      const N = document.createElement("option");
      N.value = " ", N.setAttribute("hidden", !0), N.setAttribute("selected", !0), d.prepend(N), W = () => {
        N.remove(), d.removeEventListener("input", W), W = null;
      }, d.addEventListener("input", W);
    }
    const V = (N) => {
      const s = N ? "value" : "textContent", {
        options: b,
        multiple: n
      } = d;
      return n ? Array.prototype.filter.call(b, (h) => h.selected).map((h) => h[s]) : b.selectedIndex === -1 ? null : b[b.selectedIndex][s];
    };
    let c = V(!1);
    const t = (N) => {
      const s = N.target.options;
      return Array.prototype.map.call(s, (b) => ({
        displayValue: b.textContent,
        exportValue: b.value
      }));
    };
    return this.enableScripting && this.hasJSActions ? (d.addEventListener("updatefromsandbox", (N) => {
      const s = {
        value(b) {
          W == null || W();
          const n = b.detail.value, h = new Set(Array.isArray(n) ? n : [n]);
          for (const M of d.options)
            M.selected = h.has(M.value);
          l.setValue(U, {
            value: V(!0)
          }), c = V(!1);
        },
        multipleSelection(b) {
          d.multiple = !0;
        },
        remove(b) {
          const n = d.options, h = b.detail.remove;
          n[h].selected = !1, d.remove(h), n.length > 0 && Array.prototype.findIndex.call(n, (G) => G.selected) === -1 && (n[0].selected = !0), l.setValue(U, {
            value: V(!0),
            items: t(b)
          }), c = V(!1);
        },
        clear(b) {
          for (; d.length !== 0; )
            d.remove(0);
          l.setValue(U, {
            value: null,
            items: []
          }), c = V(!1);
        },
        insert(b) {
          const {
            index: n,
            displayValue: h,
            exportValue: M
          } = b.detail.insert, G = d.children[n], J = document.createElement("option");
          J.textContent = h, J.value = M, G ? G.before(J) : d.append(J), l.setValue(U, {
            value: V(!0),
            items: t(b)
          }), c = V(!1);
        },
        items(b) {
          const {
            items: n
          } = b.detail;
          for (; d.length !== 0; )
            d.remove(0);
          for (const h of n) {
            const {
              displayValue: M,
              exportValue: G
            } = h, J = document.createElement("option");
            J.textContent = M, J.value = G, d.append(J);
          }
          d.options.length > 0 && (d.options[0].selected = !0), l.setValue(U, {
            value: V(!0),
            items: t(b)
          }), c = V(!1);
        },
        indices(b) {
          const n = new Set(b.detail.indices);
          for (const h of b.target.options)
            h.selected = n.has(h.index);
          l.setValue(U, {
            value: V(!0)
          }), c = V(!1);
        },
        editable(b) {
          b.target.disabled = !b.detail.editable;
        }
      };
      this._dispatchEventFromSandbox(s, N);
    }), d.addEventListener("input", (N) => {
      var n;
      const s = V(!0), b = V(!1);
      l.setValue(U, {
        value: s
      }), N.preventDefault(), (n = this.linkService.eventBus) == null || n.dispatch("dispatcheventinsandbox", {
        source: this,
        detail: {
          id: U,
          name: "Keystroke",
          value: c,
          change: b,
          changeEx: s,
          willCommit: !1,
          commitKey: 1,
          keyDown: !1
        }
      });
    }), this._setEventListeners(d, null, [["focus", "Focus"], ["blur", "Blur"], ["mousedown", "Mouse Down"], ["mouseenter", "Mouse Enter"], ["mouseleave", "Mouse Exit"], ["mouseup", "Mouse Up"], ["input", "Action"], ["input", "Validate"]], (N) => N.target.value)) : d.addEventListener("input", function(N) {
      l.setValue(U, {
        value: V(!0)
      });
    }), this.data.combo && this._setTextStyle(d), this._setBackgroundColor(d), this._setDefaultPropertiesFromJS(d), this.container.append(d), this.container;
  }
}
class KR extends Fl {
  constructor(l) {
    const {
      data: U,
      elements: Z
    } = l;
    super(l, {
      isRenderable: Fl._hasPopupData(U)
    }), this.elements = Z;
  }
  render() {
    this.container.classList.add("popupAnnotation");
    const l = new qn({
      container: this.container,
      color: this.data.color,
      titleObj: this.data.titleObj,
      modificationDate: this.data.modificationDate,
      contentsObj: this.data.contentsObj,
      richText: this.data.richText,
      rect: this.data.rect,
      parentRect: this.data.parentRect || null,
      parent: this.parent,
      elements: this.elements,
      open: this.data.open
    }), U = [];
    for (const Z of this.elements)
      Z.popup = l, U.push(Z.data.id), Z.addHighlightArea();
    return this.container.setAttribute("aria-controls", U.map((Z) => `${as}${Z}`).join(",")), this.container;
  }
}
var fF, fc, _c, _F, ud, Ul, cQ, yd, tQ, RQ, qF, dZ, $F, NQ, sQ, bQ, Ld, qc, Nb, l0, HV, aQ, gR, nQ, HR;
class qn {
  constructor({
    container: l,
    color: U,
    elements: Z,
    titleObj: d,
    modificationDate: F,
    contentsObj: W,
    richText: V,
    parent: c,
    rect: t,
    parentRect: N,
    open: s
  }) {
    a(this, qc);
    a(this, l0);
    a(this, aQ);
    a(this, nQ);
    a(this, fF, m(this, qc, Nb).bind(this));
    a(this, fc, m(this, nQ, HR).bind(this));
    a(this, _c, m(this, aQ, gR).bind(this));
    a(this, _F, m(this, l0, HV).bind(this));
    a(this, ud, null);
    a(this, Ul, null);
    a(this, cQ, null);
    a(this, yd, null);
    a(this, tQ, null);
    a(this, RQ, null);
    a(this, qF, null);
    a(this, dZ, !1);
    a(this, $F, null);
    a(this, NQ, null);
    a(this, sQ, null);
    a(this, bQ, null);
    a(this, Ld, !1);
    var b;
    i(this, Ul, l), i(this, bQ, d), i(this, cQ, W), i(this, sQ, V), i(this, RQ, c), i(this, ud, U), i(this, NQ, t), i(this, qF, N), i(this, tQ, Z), i(this, yd, is.toDateObject(F)), this.trigger = Z.flatMap((n) => n.getElementsToTriggerPopup());
    for (const n of this.trigger)
      n.addEventListener("click", Q(this, _F)), n.addEventListener("mouseenter", Q(this, _c)), n.addEventListener("mouseleave", Q(this, fc)), n.classList.add("popupTriggerArea");
    for (const n of Z)
      (b = n.container) == null || b.addEventListener("keydown", Q(this, fF));
    Q(this, Ul).hidden = !0, s && m(this, l0, HV).call(this);
  }
  render() {
    if (Q(this, $F))
      return;
    const {
      page: {
        view: l
      },
      viewport: {
        rawDims: {
          pageWidth: U,
          pageHeight: Z,
          pageX: d,
          pageY: F
        }
      }
    } = Q(this, RQ), W = i(this, $F, document.createElement("div"));
    if (W.className = "popup", Q(this, ud)) {
      const X = W.style.outlineColor = u.makeHexColor(...Q(this, ud));
      CSS.supports("background-color", "color-mix(in srgb, red 30%, white)") ? W.style.backgroundColor = `color-mix(in srgb, ${X} 30%, white)` : W.style.backgroundColor = u.makeHexColor(...Q(this, ud).map((e) => Math.floor(0.7 * (255 - e) + e)));
    }
    const V = document.createElement("span");
    V.className = "header";
    const c = document.createElement("h1");
    if (V.append(c), {
      dir: c.dir,
      str: c.textContent
    } = Q(this, bQ), W.append(V), Q(this, yd)) {
      const X = document.createElement("span");
      X.classList.add("popupDate"), X.setAttribute("data-l10n-id", "pdfjs-annotation-date-string"), X.setAttribute("data-l10n-args", JSON.stringify({
        date: Q(this, yd).toLocaleDateString(),
        time: Q(this, yd).toLocaleTimeString()
      })), V.append(X);
    }
    const t = Q(this, cQ), N = Q(this, sQ);
    if (N != null && N.str && (!(t != null && t.str) || t.str === N.str))
      Qb.render({
        xfaHtml: N.html,
        intent: "richText",
        div: W
      }), W.lastChild.classList.add("richText", "popupContent");
    else {
      const X = this._formatContents(t);
      W.append(X);
    }
    let s = !!Q(this, qF), b = s ? Q(this, qF) : Q(this, NQ);
    for (const X of Q(this, tQ))
      if (!b || u.intersect(X.data.rect, b) !== null) {
        b = X.data.rect, s = !0;
        break;
      }
    const n = u.normalizeRect([b[0], l[3] - b[1] + l[1], b[2], l[3] - b[3] + l[1]]), h = 5, M = s ? b[2] - b[0] + h : 0, G = n[0] + M, J = n[1], {
      style: T
    } = Q(this, Ul);
    T.left = `${100 * (G - d) / U}%`, T.top = `${100 * (J - F) / Z}%`, Q(this, Ul).append(W);
  }
  _formatContents({
    str: l,
    dir: U
  }) {
    const Z = document.createElement("p");
    Z.classList.add("popupContent"), Z.dir = U;
    const d = l.split(/(?:\r\n?|\n)/);
    for (let F = 0, W = d.length; F < W; ++F) {
      const V = d[F];
      Z.append(document.createTextNode(V)), F < W - 1 && Z.append(document.createElement("br"));
    }
    return Z;
  }
  forceHide() {
    i(this, Ld, this.isVisible), Q(this, Ld) && (Q(this, Ul).hidden = !0);
  }
  maybeShow() {
    Q(this, Ld) && (i(this, Ld, !1), Q(this, Ul).hidden = !1);
  }
  get isVisible() {
    return Q(this, Ul).hidden === !1;
  }
}
fF = new WeakMap(), fc = new WeakMap(), _c = new WeakMap(), _F = new WeakMap(), ud = new WeakMap(), Ul = new WeakMap(), cQ = new WeakMap(), yd = new WeakMap(), tQ = new WeakMap(), RQ = new WeakMap(), qF = new WeakMap(), dZ = new WeakMap(), $F = new WeakMap(), NQ = new WeakMap(), sQ = new WeakMap(), bQ = new WeakMap(), Ld = new WeakMap(), qc = new WeakSet(), Nb = function(l) {
  l.altKey || l.shiftKey || l.ctrlKey || l.metaKey || (l.key === "Enter" || l.key === "Escape" && Q(this, dZ)) && m(this, l0, HV).call(this);
}, l0 = new WeakSet(), HV = function() {
  i(this, dZ, !Q(this, dZ)), Q(this, dZ) ? (m(this, aQ, gR).call(this), Q(this, Ul).addEventListener("click", Q(this, _F)), Q(this, Ul).addEventListener("keydown", Q(this, fF))) : (m(this, nQ, HR).call(this), Q(this, Ul).removeEventListener("click", Q(this, _F)), Q(this, Ul).removeEventListener("keydown", Q(this, fF)));
}, aQ = new WeakSet(), gR = function() {
  Q(this, $F) || this.render(), this.isVisible ? Q(this, dZ) && Q(this, Ul).classList.add("focused") : (Q(this, Ul).hidden = !1, Q(this, Ul).style.zIndex = parseInt(Q(this, Ul).style.zIndex) + 1e3);
}, nQ = new WeakSet(), HR = function() {
  Q(this, Ul).classList.remove("focused"), !(Q(this, dZ) || !this.isVisible) && (Q(this, Ul).hidden = !0, Q(this, Ul).style.zIndex = parseInt(Q(this, Ul).style.zIndex) - 1e3);
};
class sb extends Fl {
  constructor(l) {
    super(l, {
      isRenderable: !0,
      ignoreBorder: !0
    }), this.textContent = l.data.textContent, this.textPosition = l.data.textPosition, this.annotationEditorType = O.FREETEXT;
  }
  render() {
    if (this.container.classList.add("freeTextAnnotation"), this.textContent) {
      const l = document.createElement("div");
      l.classList.add("annotationTextContent"), l.setAttribute("role", "comment");
      for (const U of this.textContent) {
        const Z = document.createElement("span");
        Z.textContent = U, l.append(Z);
      }
      this.container.append(l);
    }
    return !this.data.popupRef && this.hasPopupData && this._createPopup(), this._editOnDoubleClick(), this.container;
  }
  get _isEditable() {
    return this.data.hasOwnCanvas;
  }
}
var hQ;
class $n extends Fl {
  constructor(U) {
    super(U, {
      isRenderable: !0,
      ignoreBorder: !0
    });
    a(this, hQ, null);
  }
  render() {
    this.container.classList.add("lineAnnotation");
    const U = this.data, {
      width: Z,
      height: d
    } = hZ(U.rect), F = this.svgFactory.create(Z, d, !0), W = i(this, hQ, this.svgFactory.createElement("svg:line"));
    return W.setAttribute("x1", U.rect[2] - U.lineCoordinates[0]), W.setAttribute("y1", U.rect[3] - U.lineCoordinates[1]), W.setAttribute("x2", U.rect[2] - U.lineCoordinates[2]), W.setAttribute("y2", U.rect[3] - U.lineCoordinates[3]), W.setAttribute("stroke-width", U.borderStyle.width || 1), W.setAttribute("stroke", "transparent"), W.setAttribute("fill", "transparent"), F.append(W), this.container.append(F), !U.popupRef && this.hasPopupData && this._createPopup(), this.container;
  }
  getElementsToTriggerPopup() {
    return Q(this, hQ);
  }
  addHighlightArea() {
    this.container.classList.add("highlightArea");
  }
}
hQ = new WeakMap();
var mQ;
class lh extends Fl {
  constructor(U) {
    super(U, {
      isRenderable: !0,
      ignoreBorder: !0
    });
    a(this, mQ, null);
  }
  render() {
    this.container.classList.add("squareAnnotation");
    const U = this.data, {
      width: Z,
      height: d
    } = hZ(U.rect), F = this.svgFactory.create(Z, d, !0), W = U.borderStyle.width, V = i(this, mQ, this.svgFactory.createElement("svg:rect"));
    return V.setAttribute("x", W / 2), V.setAttribute("y", W / 2), V.setAttribute("width", Z - W), V.setAttribute("height", d - W), V.setAttribute("stroke-width", W || 1), V.setAttribute("stroke", "transparent"), V.setAttribute("fill", "transparent"), F.append(V), this.container.append(F), !U.popupRef && this.hasPopupData && this._createPopup(), this.container;
  }
  getElementsToTriggerPopup() {
    return Q(this, mQ);
  }
  addHighlightArea() {
    this.container.classList.add("highlightArea");
  }
}
mQ = new WeakMap();
var iQ;
class Uh extends Fl {
  constructor(U) {
    super(U, {
      isRenderable: !0,
      ignoreBorder: !0
    });
    a(this, iQ, null);
  }
  render() {
    this.container.classList.add("circleAnnotation");
    const U = this.data, {
      width: Z,
      height: d
    } = hZ(U.rect), F = this.svgFactory.create(Z, d, !0), W = U.borderStyle.width, V = i(this, iQ, this.svgFactory.createElement("svg:ellipse"));
    return V.setAttribute("cx", Z / 2), V.setAttribute("cy", d / 2), V.setAttribute("rx", Z / 2 - W / 2), V.setAttribute("ry", d / 2 - W / 2), V.setAttribute("stroke-width", W || 1), V.setAttribute("stroke", "transparent"), V.setAttribute("fill", "transparent"), F.append(V), this.container.append(F), !U.popupRef && this.hasPopupData && this._createPopup(), this.container;
  }
  getElementsToTriggerPopup() {
    return Q(this, iQ);
  }
  addHighlightArea() {
    this.container.classList.add("highlightArea");
  }
}
iQ = new WeakMap();
var MQ;
class bb extends Fl {
  constructor(U) {
    super(U, {
      isRenderable: !0,
      ignoreBorder: !0
    });
    a(this, MQ, null);
    this.containerClassName = "polylineAnnotation", this.svgElementName = "svg:polyline";
  }
  render() {
    this.container.classList.add(this.containerClassName);
    const U = this.data, {
      width: Z,
      height: d
    } = hZ(U.rect), F = this.svgFactory.create(Z, d, !0);
    let W = [];
    for (const c of U.vertices) {
      const t = c.x - U.rect[0], N = U.rect[3] - c.y;
      W.push(t + "," + N);
    }
    W = W.join(" ");
    const V = i(this, MQ, this.svgFactory.createElement(this.svgElementName));
    return V.setAttribute("points", W), V.setAttribute("stroke-width", U.borderStyle.width || 1), V.setAttribute("stroke", "transparent"), V.setAttribute("fill", "transparent"), F.append(V), this.container.append(F), !U.popupRef && this.hasPopupData && this._createPopup(), this.container;
  }
  getElementsToTriggerPopup() {
    return Q(this, MQ);
  }
  addHighlightArea() {
    this.container.classList.add("highlightArea");
  }
}
MQ = new WeakMap();
class Zh extends bb {
  constructor(l) {
    super(l), this.containerClassName = "polygonAnnotation", this.svgElementName = "svg:polygon";
  }
}
class dh extends Fl {
  constructor(l) {
    super(l, {
      isRenderable: !0,
      ignoreBorder: !0
    });
  }
  render() {
    return this.container.classList.add("caretAnnotation"), !this.data.popupRef && this.hasPopupData && this._createPopup(), this.container;
  }
}
var JQ;
class ab extends Fl {
  constructor(U) {
    super(U, {
      isRenderable: !0,
      ignoreBorder: !0
    });
    a(this, JQ, []);
    this.containerClassName = "inkAnnotation", this.svgElementName = "svg:polyline", this.annotationEditorType = O.INK;
  }
  render() {
    this.container.classList.add(this.containerClassName);
    const U = this.data, {
      width: Z,
      height: d
    } = hZ(U.rect), F = this.svgFactory.create(Z, d, !0);
    for (const W of U.inkLists) {
      let V = [];
      for (const t of W) {
        const N = t.x - U.rect[0], s = U.rect[3] - t.y;
        V.push(`${N},${s}`);
      }
      V = V.join(" ");
      const c = this.svgFactory.createElement(this.svgElementName);
      Q(this, JQ).push(c), c.setAttribute("points", V), c.setAttribute("stroke-width", U.borderStyle.width || 1), c.setAttribute("stroke", "transparent"), c.setAttribute("fill", "transparent"), !U.popupRef && this.hasPopupData && this._createPopup(), F.append(c);
    }
    return this.container.append(F), this.container;
  }
  getElementsToTriggerPopup() {
    return Q(this, JQ);
  }
  addHighlightArea() {
    this.container.classList.add("highlightArea");
  }
}
JQ = new WeakMap();
class Fh extends Fl {
  constructor(l) {
    super(l, {
      isRenderable: !0,
      ignoreBorder: !0,
      createQuadrilaterals: !0
    });
  }
  render() {
    return !this.data.popupRef && this.hasPopupData && this._createPopup(), this.container.classList.add("highlightAnnotation"), this.container;
  }
}
class Wh extends Fl {
  constructor(l) {
    super(l, {
      isRenderable: !0,
      ignoreBorder: !0,
      createQuadrilaterals: !0
    });
  }
  render() {
    return !this.data.popupRef && this.hasPopupData && this._createPopup(), this.container.classList.add("underlineAnnotation"), this.container;
  }
}
class Qh extends Fl {
  constructor(l) {
    super(l, {
      isRenderable: !0,
      ignoreBorder: !0,
      createQuadrilaterals: !0
    });
  }
  render() {
    return !this.data.popupRef && this.hasPopupData && this._createPopup(), this.container.classList.add("squigglyAnnotation"), this.container;
  }
}
class Vh extends Fl {
  constructor(l) {
    super(l, {
      isRenderable: !0,
      ignoreBorder: !0,
      createQuadrilaterals: !0
    });
  }
  render() {
    return !this.data.popupRef && this.hasPopupData && this._createPopup(), this.container.classList.add("strikeoutAnnotation"), this.container;
  }
}
class nb extends Fl {
  constructor(l) {
    super(l, {
      isRenderable: !0,
      ignoreBorder: !0
    });
  }
  render() {
    return this.container.classList.add("stampAnnotation"), !this.data.popupRef && this.hasPopupData && this._createPopup(), this.container;
  }
}
var GQ, TQ, vR;
class ch extends Fl {
  constructor(U) {
    var d;
    super(U, {
      isRenderable: !0
    });
    a(this, TQ);
    a(this, GQ, null);
    const {
      file: Z
    } = this.data;
    this.filename = Z.filename, this.content = Z.content, (d = this.linkService.eventBus) == null || d.dispatch("fileattachmentannotation", {
      source: this,
      ...Z
    });
  }
  render() {
    this.container.classList.add("fileAttachmentAnnotation");
    const {
      container: U,
      data: Z
    } = this;
    let d;
    Z.hasAppearance || Z.fillAlpha === 0 ? d = document.createElement("div") : (d = document.createElement("img"), d.src = `${this.imageResourcesPath}annotation-${/paperclip/i.test(Z.name) ? "paperclip" : "pushpin"}.svg`, Z.fillAlpha && Z.fillAlpha < 1 && (d.style = `filter: opacity(${Math.round(Z.fillAlpha * 100)}%);`)), d.addEventListener("dblclick", m(this, TQ, vR).bind(this)), i(this, GQ, d);
    const {
      isMac: F
    } = xl.platform;
    return U.addEventListener("keydown", (W) => {
      W.key === "Enter" && (F ? W.metaKey : W.ctrlKey) && m(this, TQ, vR).call(this);
    }), !Z.popupRef && this.hasPopupData ? this._createPopup() : d.classList.add("popupTriggerArea"), U.append(d), U;
  }
  getElementsToTriggerPopup() {
    return Q(this, GQ);
  }
  addHighlightArea() {
    this.container.classList.add("highlightArea");
  }
}
GQ = new WeakMap(), TQ = new WeakSet(), vR = function() {
  var U;
  (U = this.downloadManager) == null || U.openOrDownloadData(this.content, this.filename);
};
var XQ, zd, U0, $c, hb, YQ, PR;
class th {
  constructor({
    div: l,
    accessibilityManager: U,
    annotationCanvasMap: Z,
    annotationEditorUIManager: d,
    page: F,
    viewport: W
  }) {
    a(this, $c);
    a(this, YQ);
    a(this, XQ, null);
    a(this, zd, null);
    a(this, U0, /* @__PURE__ */ new Map());
    this.div = l, i(this, XQ, U), i(this, zd, Z), this.page = F, this.viewport = W, this.zIndex = 0, this._annotationEditorUIManager = d;
  }
  async render(l) {
    var W;
    const {
      annotations: U
    } = l, Z = this.div;
    WF(Z, this.viewport);
    const d = /* @__PURE__ */ new Map(), F = {
      data: null,
      layer: Z,
      linkService: l.linkService,
      downloadManager: l.downloadManager,
      imageResourcesPath: l.imageResourcesPath || "",
      renderForms: l.renderForms !== !1,
      svgFactory: new JN(),
      annotationStorage: l.annotationStorage || new SN(),
      enableScripting: l.enableScripting === !0,
      hasJSActions: l.hasJSActions,
      fieldObjects: l.fieldObjects,
      parent: this,
      elements: null
    };
    for (const V of U) {
      if (V.noHTML)
        continue;
      const c = V.annotationType === Ql.POPUP;
      if (c) {
        const s = d.get(V.id);
        if (!s)
          continue;
        F.elements = s;
      } else {
        const {
          width: s,
          height: b
        } = hZ(V.rect);
        if (s <= 0 || b <= 0)
          continue;
      }
      F.data = V;
      const t = gn.create(F);
      if (!t.isRenderable)
        continue;
      if (!c && V.popupRef) {
        const s = d.get(V.popupRef);
        s ? s.push(t) : d.set(V.popupRef, [t]);
      }
      const N = t.render();
      V.hidden && (N.style.visibility = "hidden"), m(this, $c, hb).call(this, N, V.id), t.annotationEditorType > 0 && (Q(this, U0).set(t.data.id, t), (W = this._annotationEditorUIManager) == null || W.renderAnnotationElement(t));
    }
    m(this, YQ, PR).call(this);
  }
  update({
    viewport: l
  }) {
    const U = this.div;
    this.viewport = l, WF(U, {
      rotation: l.rotation
    }), m(this, YQ, PR).call(this), U.hidden = !1;
  }
  getEditableAnnotations() {
    return Array.from(Q(this, U0).values());
  }
  getEditableAnnotation(l) {
    return Q(this, U0).get(l);
  }
}
XQ = new WeakMap(), zd = new WeakMap(), U0 = new WeakMap(), $c = new WeakSet(), hb = function(l, U) {
  var d;
  const Z = l.firstChild || l;
  Z.id = `${as}${U}`, this.div.append(l), (d = Q(this, XQ)) == null || d.moveElementInDOM(this.div, l, Z, !1);
}, YQ = new WeakSet(), PR = function() {
  if (!Q(this, zd))
    return;
  const l = this.div;
  for (const [U, Z] of Q(this, zd)) {
    const d = l.querySelector(`[data-annotation-id="${U}"]`);
    if (!d)
      continue;
    Z.className = "annotationContent";
    const {
      firstChild: F
    } = d;
    F ? F.nodeName === "CANVAS" ? F.replaceWith(Z) : F.classList.contains("annotationContent") ? F.after(Z) : F.before(Z) : d.append(Z);
  }
  Q(this, zd).clear();
};
const yV = /\r\n?|\n/g;
var SQ, BQ, eQ, pQ, uQ, NU, ql, yQ, gl, Z0, lt, mb, Ut, ib, Zt, Mb, d0, vV, F0, PV, W0, AV, dt, Jb, LQ, AR, Ft, Gb;
const Vl = class extends r {
  constructor(U) {
    super({
      ...U,
      name: "freeTextEditor"
    });
    a(this, lt);
    a(this, Ut);
    a(this, Zt);
    a(this, d0);
    a(this, W0);
    a(this, dt);
    a(this, Ft);
    a(this, SQ, this.editorDivBlur.bind(this));
    a(this, BQ, this.editorDivFocus.bind(this));
    a(this, eQ, this.editorDivInput.bind(this));
    a(this, pQ, this.editorDivKeydown.bind(this));
    a(this, uQ, this.editorDivPaste.bind(this));
    a(this, NU, void 0);
    a(this, ql, "");
    a(this, yQ, `${this.id}-editor`);
    a(this, gl, void 0);
    a(this, Z0, null);
    i(this, NU, U.color || Vl._defaultColor || r._defaultLineColor), i(this, gl, U.fontSize || Vl._defaultFontSize);
  }
  static get _keyboardManager() {
    const U = Vl.prototype, Z = (W) => W.isEmpty(), d = aZ.TRANSLATE_SMALL, F = aZ.TRANSLATE_BIG;
    return K(this, "_keyboardManager", new JV([[["ctrl+s", "mac+meta+s", "ctrl+p", "mac+meta+p"], U.commitOrRemove, {
      bubbles: !0
    }], [["ctrl+Enter", "mac+meta+Enter", "Escape", "mac+Escape"], U.commitOrRemove], [["ArrowLeft", "mac+ArrowLeft"], U._translateEmpty, {
      args: [-d, 0],
      checker: Z
    }], [["ctrl+ArrowLeft", "mac+shift+ArrowLeft"], U._translateEmpty, {
      args: [-F, 0],
      checker: Z
    }], [["ArrowRight", "mac+ArrowRight"], U._translateEmpty, {
      args: [d, 0],
      checker: Z
    }], [["ctrl+ArrowRight", "mac+shift+ArrowRight"], U._translateEmpty, {
      args: [F, 0],
      checker: Z
    }], [["ArrowUp", "mac+ArrowUp"], U._translateEmpty, {
      args: [0, -d],
      checker: Z
    }], [["ctrl+ArrowUp", "mac+shift+ArrowUp"], U._translateEmpty, {
      args: [0, -F],
      checker: Z
    }], [["ArrowDown", "mac+ArrowDown"], U._translateEmpty, {
      args: [0, d],
      checker: Z
    }], [["ctrl+ArrowDown", "mac+shift+ArrowDown"], U._translateEmpty, {
      args: [0, F],
      checker: Z
    }]]));
  }
  static initialize(U, Z) {
    r.initialize(U, Z, {
      strings: ["pdfjs-free-text-default-content"]
    });
    const d = getComputedStyle(document.documentElement);
    this._internalPadding = parseFloat(d.getPropertyValue("--freetext-padding"));
  }
  static updateDefaultParams(U, Z) {
    switch (U) {
      case D.FREETEXT_SIZE:
        Vl._defaultFontSize = Z;
        break;
      case D.FREETEXT_COLOR:
        Vl._defaultColor = Z;
        break;
    }
  }
  updateParams(U, Z) {
    switch (U) {
      case D.FREETEXT_SIZE:
        m(this, lt, mb).call(this, Z);
        break;
      case D.FREETEXT_COLOR:
        m(this, Ut, ib).call(this, Z);
        break;
    }
  }
  static get defaultPropertiesToUpdate() {
    return [[D.FREETEXT_SIZE, Vl._defaultFontSize], [D.FREETEXT_COLOR, Vl._defaultColor || r._defaultLineColor]];
  }
  get propertiesToUpdate() {
    return [[D.FREETEXT_SIZE, Q(this, gl)], [D.FREETEXT_COLOR, Q(this, NU)]];
  }
  _translateEmpty(U, Z) {
    this._uiManager.translateSelectedEditors(U, Z, !0);
  }
  getInitialTranslation() {
    const U = this.parentScale;
    return [-Vl._internalPadding * U, -(Vl._internalPadding + Q(this, gl)) * U];
  }
  rebuild() {
    this.parent && (super.rebuild(), this.div !== null && (this.isAttachedToDOM || this.parent.add(this)));
  }
  enableEditMode() {
    this.isInEditMode() || (this.parent.setEditingState(!1), this.parent.updateToolbar(O.FREETEXT), super.enableEditMode(), this.overlayDiv.classList.remove("enabled"), this.editorDiv.contentEditable = !0, this._isDraggable = !1, this.div.removeAttribute("aria-activedescendant"), this.editorDiv.addEventListener("keydown", Q(this, pQ)), this.editorDiv.addEventListener("focus", Q(this, BQ)), this.editorDiv.addEventListener("blur", Q(this, SQ)), this.editorDiv.addEventListener("input", Q(this, eQ)), this.editorDiv.addEventListener("paste", Q(this, uQ)));
  }
  disableEditMode() {
    this.isInEditMode() && (this.parent.setEditingState(!0), super.disableEditMode(), this.overlayDiv.classList.add("enabled"), this.editorDiv.contentEditable = !1, this.div.setAttribute("aria-activedescendant", Q(this, yQ)), this._isDraggable = !0, this.editorDiv.removeEventListener("keydown", Q(this, pQ)), this.editorDiv.removeEventListener("focus", Q(this, BQ)), this.editorDiv.removeEventListener("blur", Q(this, SQ)), this.editorDiv.removeEventListener("input", Q(this, eQ)), this.editorDiv.removeEventListener("paste", Q(this, uQ)), this.div.focus({
      preventScroll: !0
    }), this.isEditing = !1, this.parent.div.classList.add("freetextEditing"));
  }
  focusin(U) {
    this._focusEventsAllowed && (super.focusin(U), U.target !== this.editorDiv && this.editorDiv.focus());
  }
  onceAdded() {
    var U;
    this.width || (this.enableEditMode(), this.editorDiv.focus(), (U = this._initialOptions) != null && U.isCentered && this.center(), this._initialOptions = null);
  }
  isEmpty() {
    return !this.editorDiv || this.editorDiv.innerText.trim() === "";
  }
  remove() {
    this.isEditing = !1, this.parent && (this.parent.setEditingState(!0), this.parent.div.classList.add("freetextEditing")), super.remove();
  }
  commit() {
    if (!this.isInEditMode())
      return;
    super.commit(), this.disableEditMode();
    const U = Q(this, ql), Z = i(this, ql, m(this, Zt, Mb).call(this).trimEnd());
    if (U === Z)
      return;
    const d = (F) => {
      if (i(this, ql, F), !F) {
        this.remove();
        return;
      }
      m(this, W0, AV).call(this), this._uiManager.rebuild(this), m(this, d0, vV).call(this);
    };
    this.addCommands({
      cmd: () => {
        d(Z);
      },
      undo: () => {
        d(U);
      },
      mustExec: !1
    }), m(this, d0, vV).call(this);
  }
  shouldGetKeyboardEvents() {
    return this.isInEditMode();
  }
  enterInEditMode() {
    this.enableEditMode(), this.editorDiv.focus();
  }
  dblclick(U) {
    this.enterInEditMode();
  }
  keydown(U) {
    U.target === this.div && U.key === "Enter" && (this.enterInEditMode(), U.preventDefault());
  }
  editorDivKeydown(U) {
    Vl._keyboardManager.exec(this, U);
  }
  editorDivFocus(U) {
    this.isEditing = !0;
  }
  editorDivBlur(U) {
    this.isEditing = !1;
  }
  editorDivInput(U) {
    this.parent.div.classList.toggle("freetextEditing", this.isEmpty());
  }
  disableEditing() {
    this.editorDiv.setAttribute("role", "comment"), this.editorDiv.removeAttribute("aria-multiline");
  }
  enableEditing() {
    this.editorDiv.setAttribute("role", "textbox"), this.editorDiv.setAttribute("aria-multiline", !0);
  }
  render() {
    if (this.div)
      return this.div;
    let U, Z;
    this.width && (U = this.x, Z = this.y), super.render(), this.editorDiv = document.createElement("div"), this.editorDiv.className = "internal", this.editorDiv.setAttribute("id", Q(this, yQ)), this.editorDiv.setAttribute("data-l10n-id", "pdfjs-free-text"), this.enableEditing(), r._l10nPromise.get("pdfjs-free-text-default-content").then((F) => {
      var W;
      return (W = this.editorDiv) == null ? void 0 : W.setAttribute("default-content", F);
    }), this.editorDiv.contentEditable = !0;
    const {
      style: d
    } = this.editorDiv;
    if (d.fontSize = `calc(${Q(this, gl)}px * var(--scale-factor))`, d.color = Q(this, NU), this.div.append(this.editorDiv), this.overlayDiv = document.createElement("div"), this.overlayDiv.classList.add("overlay", "enabled"), this.div.append(this.overlayDiv), Vc(this, this.div, ["dblclick", "keydown"]), this.width) {
      const [F, W] = this.parentDimensions;
      if (this.annotationElementId) {
        const {
          position: V
        } = Q(this, Z0);
        let [c, t] = this.getInitialTranslation();
        [c, t] = this.pageTranslationToScreen(c, t);
        const [N, s] = this.pageDimensions, [b, n] = this.pageTranslation;
        let h, M;
        switch (this.rotation) {
          case 0:
            h = U + (V[0] - b) / N, M = Z + this.height - (V[1] - n) / s;
            break;
          case 90:
            h = U + (V[0] - b) / N, M = Z - (V[1] - n) / s, [c, t] = [t, -c];
            break;
          case 180:
            h = U - this.width + (V[0] - b) / N, M = Z - (V[1] - n) / s, [c, t] = [-c, -t];
            break;
          case 270:
            h = U + (V[0] - b - this.height * s) / N, M = Z + (V[1] - n - this.width * N) / s, [c, t] = [-t, c];
            break;
        }
        this.setAt(h * F, M * W, c, t);
      } else
        this.setAt(U * F, Z * W, this.width * F, this.height * W);
      m(this, W0, AV).call(this), this._isDraggable = !0, this.editorDiv.contentEditable = !1;
    } else
      this._isDraggable = !1, this.editorDiv.contentEditable = !0;
    return this.div;
  }
  editorDivPaste(U) {
    var h, M, G;
    const Z = U.clipboardData || window.clipboardData, {
      types: d
    } = Z;
    if (d.length === 1 && d[0] === "text/plain")
      return;
    U.preventDefault();
    const F = m(h = Vl, LQ, AR).call(h, Z.getData("text") || "").replaceAll(yV, `
`);
    if (!F)
      return;
    const W = window.getSelection();
    if (!W.rangeCount)
      return;
    this.editorDiv.normalize(), W.deleteFromDocument();
    const V = W.getRangeAt(0);
    if (!F.includes(`
`)) {
      V.insertNode(document.createTextNode(F)), this.editorDiv.normalize(), W.collapseToStart();
      return;
    }
    const {
      startContainer: c,
      startOffset: t
    } = V, N = [], s = [];
    if (c.nodeType === Node.TEXT_NODE) {
      const J = c.parentElement;
      if (s.push(c.nodeValue.slice(t).replaceAll(yV, "")), J !== this.editorDiv) {
        let T = N;
        for (const X of this.editorDiv.childNodes) {
          if (X === J) {
            T = s;
            continue;
          }
          T.push(m(M = Vl, F0, PV).call(M, X));
        }
      }
      N.push(c.nodeValue.slice(0, t).replaceAll(yV, ""));
    } else if (c === this.editorDiv) {
      let J = N, T = 0;
      for (const X of this.editorDiv.childNodes)
        T++ === t && (J = s), J.push(m(G = Vl, F0, PV).call(G, X));
    }
    i(this, ql, `${N.join(`
`)}${F}${s.join(`
`)}`), m(this, W0, AV).call(this);
    const b = new Range();
    let n = N.reduce((J, T) => J + T.length, 0);
    for (const {
      firstChild: J
    } of this.editorDiv.childNodes)
      if (J.nodeType === Node.TEXT_NODE) {
        const T = J.nodeValue.length;
        if (n <= T) {
          b.setStart(J, n), b.setEnd(J, n);
          break;
        }
        n -= T;
      }
    W.removeAllRanges(), W.addRange(b);
  }
  get contentDiv() {
    return this.editorDiv;
  }
  static deserialize(U, Z, d) {
    var V;
    let F = null;
    if (U instanceof sb) {
      const {
        data: {
          defaultAppearanceData: {
            fontSize: c,
            fontColor: t
          },
          rect: N,
          rotation: s,
          id: b
        },
        textContent: n,
        textPosition: h,
        parent: {
          page: {
            pageNumber: M
          }
        }
      } = U;
      if (!n || n.length === 0)
        return null;
      F = U = {
        annotationType: O.FREETEXT,
        color: Array.from(t),
        fontSize: c,
        value: n.join(`
`),
        position: h,
        pageIndex: M - 1,
        rect: N.slice(0),
        rotation: s,
        id: b,
        deleted: !1
      };
    }
    const W = super.deserialize(U, Z, d);
    return i(W, gl, U.fontSize), i(W, NU, u.makeHexColor(...U.color)), i(W, ql, m(V = Vl, LQ, AR).call(V, U.value)), W.annotationElementId = U.id || null, i(W, Z0, F), W;
  }
  serialize(U = !1) {
    if (this.isEmpty())
      return null;
    if (this.deleted)
      return {
        pageIndex: this.pageIndex,
        id: this.annotationElementId,
        deleted: !0
      };
    const Z = Vl._internalPadding * this.parentScale, d = this.getRect(Z, Z), F = r._colorManager.convert(this.isAttachedToDOM ? getComputedStyle(this.editorDiv).color : Q(this, NU)), W = {
      annotationType: O.FREETEXT,
      color: F,
      fontSize: Q(this, gl),
      value: m(this, dt, Jb).call(this),
      pageIndex: this.pageIndex,
      rect: d,
      rotation: this.rotation,
      structTreeParentId: this._structTreeParentId
    };
    return U ? W : this.annotationElementId && !m(this, Ft, Gb).call(this, W) ? null : (W.id = this.annotationElementId, W);
  }
  renderAnnotationElement(U) {
    const Z = super.renderAnnotationElement(U);
    if (this.deleted)
      return Z;
    const {
      style: d
    } = Z;
    d.fontSize = `calc(${Q(this, gl)}px * var(--scale-factor))`, d.color = Q(this, NU), Z.replaceChildren();
    for (const W of Q(this, ql).split(`
`)) {
      const V = document.createElement("div");
      V.append(W ? document.createTextNode(W) : document.createElement("br")), Z.append(V);
    }
    const F = Vl._internalPadding * this.parentScale;
    return U.updateEdited({
      rect: this.getRect(F, F)
    }), Z;
  }
  resetAnnotationElement(U) {
    super.resetAnnotationElement(U), U.resetEdited();
  }
};
let dU = Vl;
SQ = new WeakMap(), BQ = new WeakMap(), eQ = new WeakMap(), pQ = new WeakMap(), uQ = new WeakMap(), NU = new WeakMap(), ql = new WeakMap(), yQ = new WeakMap(), gl = new WeakMap(), Z0 = new WeakMap(), lt = new WeakSet(), mb = function(U) {
  const Z = (F) => {
    this.editorDiv.style.fontSize = `calc(${F}px * var(--scale-factor))`, this.translate(0, -(F - Q(this, gl)) * this.parentScale), i(this, gl, F), m(this, d0, vV).call(this);
  }, d = Q(this, gl);
  this.addCommands({
    cmd: Z.bind(this, U),
    undo: Z.bind(this, d),
    post: this._uiManager.updateUI.bind(this._uiManager, this),
    mustExec: !0,
    type: D.FREETEXT_SIZE,
    overwriteIfSameType: !0,
    keepUndo: !0
  });
}, Ut = new WeakSet(), ib = function(U) {
  const Z = (F) => {
    i(this, NU, this.editorDiv.style.color = F);
  }, d = Q(this, NU);
  this.addCommands({
    cmd: Z.bind(this, U),
    undo: Z.bind(this, d),
    post: this._uiManager.updateUI.bind(this._uiManager, this),
    mustExec: !0,
    type: D.FREETEXT_COLOR,
    overwriteIfSameType: !0,
    keepUndo: !0
  });
}, Zt = new WeakSet(), Mb = function() {
  var Z;
  const U = [];
  this.editorDiv.normalize();
  for (const d of this.editorDiv.childNodes)
    U.push(m(Z = Vl, F0, PV).call(Z, d));
  return U.join(`
`);
}, d0 = new WeakSet(), vV = function() {
  const [U, Z] = this.parentDimensions;
  let d;
  if (this.isAttachedToDOM)
    d = this.div.getBoundingClientRect();
  else {
    const {
      currentLayer: F,
      div: W
    } = this, V = W.style.display, c = W.classList.contains("hidden");
    W.classList.remove("hidden"), W.style.display = "hidden", F.div.append(this.div), d = W.getBoundingClientRect(), W.remove(), W.style.display = V, W.classList.toggle("hidden", c);
  }
  this.rotation % 180 === this.parentRotation % 180 ? (this.width = d.width / U, this.height = d.height / Z) : (this.width = d.height / U, this.height = d.width / Z), this.fixAndSetPosition();
}, F0 = new WeakSet(), PV = function(U) {
  return (U.nodeType === Node.TEXT_NODE ? U.nodeValue : U.innerText).replaceAll(yV, "");
}, W0 = new WeakSet(), AV = function() {
  if (this.editorDiv.replaceChildren(), !!Q(this, ql))
    for (const U of Q(this, ql).split(`
`)) {
      const Z = document.createElement("div");
      Z.append(U ? document.createTextNode(U) : document.createElement("br")), this.editorDiv.append(Z);
    }
}, dt = new WeakSet(), Jb = function() {
  return Q(this, ql).replaceAll(" ", " ");
}, LQ = new WeakSet(), AR = function(U) {
  return U.replaceAll(" ", " ");
}, Ft = new WeakSet(), Gb = function(U) {
  const {
    value: Z,
    fontSize: d,
    color: F,
    pageIndex: W
  } = Q(this, Z0);
  return this._hasBeenMoved || U.value !== Z || U.fontSize !== d || U.color.some((V, c) => V !== F[c]) || U.pageIndex !== W;
}, a(dU, F0), a(dU, LQ), I(dU, "_freeTextDefaultContent", ""), I(dU, "_internalPadding", 0), I(dU, "_defaultColor", null), I(dU, "_defaultFontSize", 10), I(dU, "_type", "freetext"), I(dU, "_editorType", O.FREETEXT);
var zQ, EZ, sU, Wt, Tb, Q0, fV, Qt, Xb, Vt, Yb, kQ, _R;
class fR {
  constructor(l, U = 0, Z = 0, d = !0) {
    a(this, Wt);
    a(this, Q0);
    a(this, Qt);
    a(this, Vt);
    a(this, kQ);
    a(this, zQ, void 0);
    a(this, EZ, []);
    a(this, sU, []);
    let F = 1 / 0, W = -1 / 0, V = 1 / 0, c = -1 / 0;
    const N = 10 ** -4;
    for (const {
      x: J,
      y: T,
      width: X,
      height: S
    } of l) {
      const e = Math.floor((J - U) / N) * N, Y = Math.ceil((J + X + U) / N) * N, B = Math.floor((T - U) / N) * N, p = Math.ceil((T + S + U) / N) * N, L = [e, B, p, !0], E = [Y, B, p, !1];
      Q(this, EZ).push(L, E), F = Math.min(F, e), W = Math.max(W, Y), V = Math.min(V, B), c = Math.max(c, p);
    }
    const s = W - F + 2 * Z, b = c - V + 2 * Z, n = F - Z, h = V - Z, M = Q(this, EZ).at(d ? -1 : -2), G = [M[0], M[2]];
    for (const J of Q(this, EZ)) {
      const [T, X, S] = J;
      J[0] = (T - n) / s, J[1] = (X - h) / b, J[2] = (S - h) / b;
    }
    i(this, zQ, {
      x: n,
      y: h,
      width: s,
      height: b,
      lastPoint: G
    });
  }
  getOutlines() {
    Q(this, EZ).sort((U, Z) => U[0] - Z[0] || U[1] - Z[1] || U[2] - Z[2]);
    const l = [];
    for (const U of Q(this, EZ))
      U[3] ? (l.push(...m(this, kQ, _R).call(this, U)), m(this, Qt, Xb).call(this, U)) : (m(this, Vt, Yb).call(this, U), l.push(...m(this, kQ, _R).call(this, U)));
    return m(this, Wt, Tb).call(this, l);
  }
}
zQ = new WeakMap(), EZ = new WeakMap(), sU = new WeakMap(), Wt = new WeakSet(), Tb = function(l) {
  const U = [], Z = /* @__PURE__ */ new Set();
  for (const W of l) {
    const [V, c, t] = W;
    U.push([V, c, W], [V, t, W]);
  }
  U.sort((W, V) => W[1] - V[1] || W[0] - V[0]);
  for (let W = 0, V = U.length; W < V; W += 2) {
    const c = U[W][2], t = U[W + 1][2];
    c.push(t), t.push(c), Z.add(c), Z.add(t);
  }
  const d = [];
  let F;
  for (; Z.size > 0; ) {
    const W = Z.values().next().value;
    let [V, c, t, N, s] = W;
    Z.delete(W);
    let b = V, n = c;
    for (F = [V, t], d.push(F); ; ) {
      let h;
      if (Z.has(N))
        h = N;
      else if (Z.has(s))
        h = s;
      else
        break;
      Z.delete(h), [V, c, t, N, s] = h, b !== V && (F.push(b, n, V, n === c ? c : t), b = V), n = n === c ? t : c;
    }
    F.push(b, n);
  }
  return new Rh(d, Q(this, zQ));
}, Q0 = new WeakSet(), fV = function(l) {
  const U = Q(this, sU);
  let Z = 0, d = U.length - 1;
  for (; Z <= d; ) {
    const F = Z + d >> 1, W = U[F][0];
    if (W === l)
      return F;
    W < l ? Z = F + 1 : d = F - 1;
  }
  return d + 1;
}, Qt = new WeakSet(), Xb = function([, l, U]) {
  const Z = m(this, Q0, fV).call(this, l);
  Q(this, sU).splice(Z, 0, [l, U]);
}, Vt = new WeakSet(), Yb = function([, l, U]) {
  const Z = m(this, Q0, fV).call(this, l);
  for (let d = Z; d < Q(this, sU).length; d++) {
    const [F, W] = Q(this, sU)[d];
    if (F !== l)
      break;
    if (F === l && W === U) {
      Q(this, sU).splice(d, 1);
      return;
    }
  }
  for (let d = Z - 1; d >= 0; d--) {
    const [F, W] = Q(this, sU)[d];
    if (F !== l)
      break;
    if (F === l && W === U) {
      Q(this, sU).splice(d, 1);
      return;
    }
  }
}, kQ = new WeakSet(), _R = function(l) {
  const [U, Z, d] = l, F = [[U, Z, d]], W = m(this, Q0, fV).call(this, d);
  for (let V = 0; V < W; V++) {
    const [c, t] = Q(this, sU)[V];
    for (let N = 0, s = F.length; N < s; N++) {
      const [, b, n] = F[N];
      if (!(t <= b || n <= c)) {
        if (b >= c) {
          if (n > t)
            F[N][1] = t;
          else {
            if (s === 1)
              return [];
            F.splice(N, 1), N--, s--;
          }
          continue;
        }
        F[N][2] = c, n > t && F.push([U, t, n]);
      }
    }
  }
  return F;
};
class Sb {
  toSVGPath() {
    throw new Error("Abstract method `toSVGPath` must be implemented.");
  }
  get box() {
    throw new Error("Abstract getter `box` must be implemented.");
  }
  serialize(l, U) {
    throw new Error("Abstract method `serialize` must be implemented.");
  }
  get free() {
    return this instanceof $R;
  }
}
var oQ, V0;
class Rh extends Sb {
  constructor(U, Z) {
    super();
    a(this, oQ, void 0);
    a(this, V0, void 0);
    i(this, V0, U), i(this, oQ, Z);
  }
  toSVGPath() {
    const U = [];
    for (const Z of Q(this, V0)) {
      let [d, F] = Z;
      U.push(`M${d} ${F}`);
      for (let W = 2; W < Z.length; W += 2) {
        const V = Z[W], c = Z[W + 1];
        V === d ? (U.push(`V${c}`), F = c) : c === F && (U.push(`H${V}`), d = V);
      }
      U.push("Z");
    }
    return U.join(" ");
  }
  serialize([U, Z, d, F], W) {
    const V = [], c = d - U, t = F - Z;
    for (const N of Q(this, V0)) {
      const s = new Array(N.length);
      for (let b = 0; b < N.length; b += 2)
        s[b] = U + N[b] * c, s[b + 1] = F - N[b + 1] * t;
      V.push(s);
    }
    return V;
  }
  get box() {
    return Q(this, oQ);
  }
}
oQ = new WeakMap(), V0 = new WeakMap();
var pU, FZ, c0, t0, uU, j, kd, od, DQ, IQ, R0, N0, CZ, EQ, ct, tt, CQ, qR;
const JF = class {
  constructor({
    x: l,
    y: U
  }, Z, d, F, W, V = 0) {
    a(this, CQ);
    a(this, pU, void 0);
    a(this, FZ, []);
    a(this, c0, void 0);
    a(this, t0, void 0);
    a(this, uU, []);
    a(this, j, new Float64Array(18));
    a(this, kd, void 0);
    a(this, od, void 0);
    a(this, DQ, void 0);
    a(this, IQ, void 0);
    a(this, R0, void 0);
    a(this, N0, void 0);
    a(this, CZ, []);
    i(this, pU, Z), i(this, N0, F * d), i(this, t0, W), Q(this, j).set([NaN, NaN, NaN, NaN, l, U], 6), i(this, c0, V), i(this, IQ, Q(JF, EQ) * d), i(this, DQ, Q(JF, tt) * d), i(this, R0, d), Q(this, CZ).push(l, U);
  }
  get free() {
    return !0;
  }
  isEmpty() {
    return isNaN(Q(this, j)[8]);
  }
  add({
    x: l,
    y: U
  }) {
    var L;
    i(this, kd, l), i(this, od, U);
    const [Z, d, F, W] = Q(this, pU);
    let [V, c, t, N] = Q(this, j).subarray(8, 12);
    const s = l - t, b = U - N, n = Math.hypot(s, b);
    if (n < Q(this, DQ))
      return !1;
    const h = n - Q(this, IQ), M = h / n, G = M * s, J = M * b;
    let T = V, X = c;
    V = t, c = N, t += G, N += J, (L = Q(this, CZ)) == null || L.push(l, U);
    const S = -J / h, e = G / h, Y = S * Q(this, N0), B = e * Q(this, N0);
    return Q(this, j).set(Q(this, j).subarray(2, 8), 0), Q(this, j).set([t + Y, N + B], 4), Q(this, j).set(Q(this, j).subarray(14, 18), 12), Q(this, j).set([t - Y, N - B], 16), isNaN(Q(this, j)[6]) ? (Q(this, uU).length === 0 && (Q(this, j).set([V + Y, c + B], 2), Q(this, uU).push(NaN, NaN, NaN, NaN, (V + Y - Z) / F, (c + B - d) / W), Q(this, j).set([V - Y, c - B], 14), Q(this, FZ).push(NaN, NaN, NaN, NaN, (V - Y - Z) / F, (c - B - d) / W)), Q(this, j).set([T, X, V, c, t, N], 6), !this.isEmpty()) : (Q(this, j).set([T, X, V, c, t, N], 6), Math.abs(Math.atan2(X - c, T - V) - Math.atan2(J, G)) < Math.PI / 2 ? ([V, c, t, N] = Q(this, j).subarray(2, 6), Q(this, uU).push(NaN, NaN, NaN, NaN, ((V + t) / 2 - Z) / F, ((c + N) / 2 - d) / W), [V, c, T, X] = Q(this, j).subarray(14, 18), Q(this, FZ).push(NaN, NaN, NaN, NaN, ((T + V) / 2 - Z) / F, ((X + c) / 2 - d) / W), !0) : ([T, X, V, c, t, N] = Q(this, j).subarray(0, 6), Q(this, uU).push(((T + 5 * V) / 6 - Z) / F, ((X + 5 * c) / 6 - d) / W, ((5 * V + t) / 6 - Z) / F, ((5 * c + N) / 6 - d) / W, ((V + t) / 2 - Z) / F, ((c + N) / 2 - d) / W), [t, N, V, c, T, X] = Q(this, j).subarray(12, 18), Q(this, FZ).push(((T + 5 * V) / 6 - Z) / F, ((X + 5 * c) / 6 - d) / W, ((5 * V + t) / 6 - Z) / F, ((5 * c + N) / 6 - d) / W, ((V + t) / 2 - Z) / F, ((c + N) / 2 - d) / W), !0));
  }
  toSVGPath() {
    if (this.isEmpty())
      return "";
    const l = Q(this, uU), U = Q(this, FZ), Z = Q(this, j).subarray(4, 6), d = Q(this, j).subarray(16, 18), [F, W, V, c] = Q(this, pU), [t, N, s, b] = m(this, CQ, qR).call(this);
    if (isNaN(Q(this, j)[6]) && !this.isEmpty())
      return `M${(Q(this, j)[2] - F) / V} ${(Q(this, j)[3] - W) / c} L${(Q(this, j)[4] - F) / V} ${(Q(this, j)[5] - W) / c} L${t} ${N} L${s} ${b} L${(Q(this, j)[16] - F) / V} ${(Q(this, j)[17] - W) / c} L${(Q(this, j)[14] - F) / V} ${(Q(this, j)[15] - W) / c} Z`;
    const n = [];
    n.push(`M${l[4]} ${l[5]}`);
    for (let h = 6; h < l.length; h += 6)
      isNaN(l[h]) ? n.push(`L${l[h + 4]} ${l[h + 5]}`) : n.push(`C${l[h]} ${l[h + 1]} ${l[h + 2]} ${l[h + 3]} ${l[h + 4]} ${l[h + 5]}`);
    n.push(`L${(Z[0] - F) / V} ${(Z[1] - W) / c} L${t} ${N} L${s} ${b} L${(d[0] - F) / V} ${(d[1] - W) / c}`);
    for (let h = U.length - 6; h >= 6; h -= 6)
      isNaN(U[h]) ? n.push(`L${U[h + 4]} ${U[h + 5]}`) : n.push(`C${U[h]} ${U[h + 1]} ${U[h + 2]} ${U[h + 3]} ${U[h + 4]} ${U[h + 5]}`);
    return n.push(`L${U[4]} ${U[5]} Z`), n.join(" ");
  }
  getOutlines() {
    var J;
    const l = Q(this, uU), U = Q(this, FZ), Z = Q(this, j), d = Z.subarray(4, 6), F = Z.subarray(16, 18), [W, V, c, t] = Q(this, pU), N = new Float64Array((((J = Q(this, CZ)) == null ? void 0 : J.length) ?? 0) + 2);
    for (let T = 0, X = N.length - 2; T < X; T += 2)
      N[T] = (Q(this, CZ)[T] - W) / c, N[T + 1] = (Q(this, CZ)[T + 1] - V) / t;
    N[N.length - 2] = (Q(this, kd) - W) / c, N[N.length - 1] = (Q(this, od) - V) / t;
    const [s, b, n, h] = m(this, CQ, qR).call(this);
    if (isNaN(Z[6]) && !this.isEmpty()) {
      const T = new Float64Array(36);
      return T.set([NaN, NaN, NaN, NaN, (Z[2] - W) / c, (Z[3] - V) / t, NaN, NaN, NaN, NaN, (Z[4] - W) / c, (Z[5] - V) / t, NaN, NaN, NaN, NaN, s, b, NaN, NaN, NaN, NaN, n, h, NaN, NaN, NaN, NaN, (Z[16] - W) / c, (Z[17] - V) / t, NaN, NaN, NaN, NaN, (Z[14] - W) / c, (Z[15] - V) / t], 0), new $R(T, N, Q(this, pU), Q(this, R0), Q(this, c0), Q(this, t0));
    }
    const M = new Float64Array(Q(this, uU).length + 24 + Q(this, FZ).length);
    let G = l.length;
    for (let T = 0; T < G; T += 2) {
      if (isNaN(l[T])) {
        M[T] = M[T + 1] = NaN;
        continue;
      }
      M[T] = l[T], M[T + 1] = l[T + 1];
    }
    M.set([NaN, NaN, NaN, NaN, (d[0] - W) / c, (d[1] - V) / t, NaN, NaN, NaN, NaN, s, b, NaN, NaN, NaN, NaN, n, h, NaN, NaN, NaN, NaN, (F[0] - W) / c, (F[1] - V) / t], G), G += 24;
    for (let T = U.length - 6; T >= 6; T -= 6)
      for (let X = 0; X < 6; X += 2) {
        if (isNaN(U[T + X])) {
          M[G] = M[G + 1] = NaN, G += 2;
          continue;
        }
        M[G] = U[T + X], M[G + 1] = U[T + X + 1], G += 2;
      }
    return M.set([NaN, NaN, NaN, NaN, U[4], U[5]], G), new $R(M, N, Q(this, pU), Q(this, R0), Q(this, c0), Q(this, t0));
  }
};
let ld = JF;
pU = new WeakMap(), FZ = new WeakMap(), c0 = new WeakMap(), t0 = new WeakMap(), uU = new WeakMap(), j = new WeakMap(), kd = new WeakMap(), od = new WeakMap(), DQ = new WeakMap(), IQ = new WeakMap(), R0 = new WeakMap(), N0 = new WeakMap(), CZ = new WeakMap(), EQ = new WeakMap(), ct = new WeakMap(), tt = new WeakMap(), CQ = new WeakSet(), qR = function() {
  const l = Q(this, j).subarray(4, 6), U = Q(this, j).subarray(16, 18), [Z, d, F, W] = Q(this, pU);
  return [(Q(this, kd) + (l[0] - U[0]) / 2 - Z) / F, (Q(this, od) + (l[1] - U[1]) / 2 - d) / W, (Q(this, kd) + (U[0] - l[0]) / 2 - Z) / F, (Q(this, od) + (U[1] - l[1]) / 2 - d) / W];
}, a(ld, EQ, 8), a(ld, ct, 2), a(ld, tt, Q(JF, EQ) + Q(JF, ct));
var s0, Dd, WZ, wQ, Hl, xQ, dl, Id, K0, Ed, g0, Rt, Bb;
class $R extends Sb {
  constructor(U, Z, d, F, W, V) {
    super();
    a(this, Id);
    a(this, Ed);
    a(this, Rt);
    a(this, s0, void 0);
    a(this, Dd, null);
    a(this, WZ, void 0);
    a(this, wQ, void 0);
    a(this, Hl, void 0);
    a(this, xQ, void 0);
    a(this, dl, void 0);
    i(this, dl, U), i(this, Hl, Z), i(this, s0, d), i(this, xQ, F), i(this, WZ, W), i(this, wQ, V), m(this, Rt, Bb).call(this, V);
    const {
      x: c,
      y: t,
      width: N,
      height: s
    } = Q(this, Dd);
    for (let b = 0, n = U.length; b < n; b += 2)
      U[b] = (U[b] - c) / N, U[b + 1] = (U[b + 1] - t) / s;
    for (let b = 0, n = Z.length; b < n; b += 2)
      Z[b] = (Z[b] - c) / N, Z[b + 1] = (Z[b + 1] - t) / s;
  }
  toSVGPath() {
    const U = [`M${Q(this, dl)[4]} ${Q(this, dl)[5]}`];
    for (let Z = 6, d = Q(this, dl).length; Z < d; Z += 6) {
      if (isNaN(Q(this, dl)[Z])) {
        U.push(`L${Q(this, dl)[Z + 4]} ${Q(this, dl)[Z + 5]}`);
        continue;
      }
      U.push(`C${Q(this, dl)[Z]} ${Q(this, dl)[Z + 1]} ${Q(this, dl)[Z + 2]} ${Q(this, dl)[Z + 3]} ${Q(this, dl)[Z + 4]} ${Q(this, dl)[Z + 5]}`);
    }
    return U.push("Z"), U.join(" ");
  }
  serialize([U, Z, d, F], W) {
    const V = d - U, c = F - Z;
    let t, N;
    switch (W) {
      case 0:
        t = m(this, Id, K0).call(this, Q(this, dl), U, F, V, -c), N = m(this, Id, K0).call(this, Q(this, Hl), U, F, V, -c);
        break;
      case 90:
        t = m(this, Ed, g0).call(this, Q(this, dl), U, Z, V, c), N = m(this, Ed, g0).call(this, Q(this, Hl), U, Z, V, c);
        break;
      case 180:
        t = m(this, Id, K0).call(this, Q(this, dl), d, Z, -V, c), N = m(this, Id, K0).call(this, Q(this, Hl), d, Z, -V, c);
        break;
      case 270:
        t = m(this, Ed, g0).call(this, Q(this, dl), d, F, -V, -c), N = m(this, Ed, g0).call(this, Q(this, Hl), d, F, -V, -c);
        break;
    }
    return {
      outline: Array.from(t),
      points: [Array.from(N)]
    };
  }
  get box() {
    return Q(this, Dd);
  }
  getNewOutline(U, Z) {
    const {
      x: d,
      y: F,
      width: W,
      height: V
    } = Q(this, Dd), [c, t, N, s] = Q(this, s0), b = W * N, n = V * s, h = d * N + c, M = F * s + t, G = new ld({
      x: Q(this, Hl)[0] * b + h,
      y: Q(this, Hl)[1] * n + M
    }, Q(this, s0), Q(this, xQ), U, Q(this, wQ), Z ?? Q(this, WZ));
    for (let J = 2; J < Q(this, Hl).length; J += 2)
      G.add({
        x: Q(this, Hl)[J] * b + h,
        y: Q(this, Hl)[J + 1] * n + M
      });
    return G.getOutlines();
  }
}
s0 = new WeakMap(), Dd = new WeakMap(), WZ = new WeakMap(), wQ = new WeakMap(), Hl = new WeakMap(), xQ = new WeakMap(), dl = new WeakMap(), Id = new WeakSet(), K0 = function(U, Z, d, F, W) {
  const V = new Float64Array(U.length);
  for (let c = 0, t = U.length; c < t; c += 2)
    V[c] = Z + U[c] * F, V[c + 1] = d + U[c + 1] * W;
  return V;
}, Ed = new WeakSet(), g0 = function(U, Z, d, F, W) {
  const V = new Float64Array(U.length);
  for (let c = 0, t = U.length; c < t; c += 2)
    V[c] = Z + U[c + 1] * F, V[c + 1] = d + U[c] * W;
  return V;
}, Rt = new WeakSet(), Bb = function(U) {
  const Z = Q(this, dl);
  let d = Z[4], F = Z[5], W = d, V = F, c = d, t = F, N = d, s = F;
  const b = U ? Math.max : Math.min;
  for (let J = 6, T = Z.length; J < T; J += 6) {
    if (isNaN(Z[J]))
      W = Math.min(W, Z[J + 4]), V = Math.min(V, Z[J + 5]), c = Math.max(c, Z[J + 4]), t = Math.max(t, Z[J + 5]), s < Z[J + 5] ? (N = Z[J + 4], s = Z[J + 5]) : s === Z[J + 5] && (N = b(N, Z[J + 4]));
    else {
      const X = u.bezierBoundingBox(d, F, ...Z.slice(J, J + 6));
      W = Math.min(W, X[0]), V = Math.min(V, X[1]), c = Math.max(c, X[2]), t = Math.max(t, X[3]), s < X[3] ? (N = X[2], s = X[3]) : s === X[3] && (N = b(N, X[2]));
    }
    d = Z[J + 4], F = Z[J + 5];
  }
  const n = W - Q(this, WZ), h = V - Q(this, WZ), M = c - W + 2 * Q(this, WZ), G = t - V + 2 * Q(this, WZ);
  i(this, Dd, {
    x: n,
    y: h,
    width: M,
    height: G,
    lastPoint: [N, s]
  });
};
var jQ, OQ, bU, Cd, b0, tl, rQ, a0, KQ, gQ, wZ, n0, HQ, lN, vQ, UN, Nt, eb, QZ, qZ, st, pb, yU, TZ;
const jU = class {
  constructor({
    editor: l = null,
    uiManager: U = null
  }) {
    a(this, HQ);
    a(this, vQ);
    a(this, Nt);
    a(this, QZ);
    a(this, st);
    a(this, yU);
    a(this, jQ, m(this, Nt, eb).bind(this));
    a(this, OQ, m(this, st, pb).bind(this));
    a(this, bU, null);
    a(this, Cd, null);
    a(this, b0, void 0);
    a(this, tl, null);
    a(this, rQ, !1);
    a(this, a0, !1);
    a(this, KQ, null);
    a(this, gQ, void 0);
    a(this, wZ, null);
    a(this, n0, void 0);
    var Z;
    l ? (i(this, a0, !1), i(this, n0, D.HIGHLIGHT_COLOR), i(this, KQ, l)) : (i(this, a0, !0), i(this, n0, D.HIGHLIGHT_DEFAULT_COLOR)), i(this, wZ, (l == null ? void 0 : l._uiManager) || U), i(this, gQ, Q(this, wZ)._eventBus), i(this, b0, (l == null ? void 0 : l.color) || ((Z = Q(this, wZ)) == null ? void 0 : Z.highlightColors.values().next().value) || "#FFFF98");
  }
  static get _keyboardManager() {
    return K(this, "_keyboardManager", new JV([[["Escape", "mac+Escape"], jU.prototype._hideDropdownFromKeyboard], [[" ", "mac+ "], jU.prototype._colorSelectFromKeyboard], [["ArrowDown", "ArrowRight", "mac+ArrowDown", "mac+ArrowRight"], jU.prototype._moveToNext], [["ArrowUp", "ArrowLeft", "mac+ArrowUp", "mac+ArrowLeft"], jU.prototype._moveToPrevious], [["Home", "mac+Home"], jU.prototype._moveToBeginning], [["End", "mac+End"], jU.prototype._moveToEnd]]));
  }
  renderButton() {
    const l = i(this, bU, document.createElement("button"));
    l.className = "colorPicker", l.tabIndex = "0", l.setAttribute("data-l10n-id", "pdfjs-editor-colorpicker-button"), l.setAttribute("aria-haspopup", !0), l.addEventListener("click", m(this, QZ, qZ).bind(this)), l.addEventListener("keydown", Q(this, jQ));
    const U = i(this, Cd, document.createElement("span"));
    return U.className = "swatch", U.setAttribute("aria-hidden", !0), U.style.backgroundColor = Q(this, b0), l.append(U), l;
  }
  renderMainDropdown() {
    const l = i(this, tl, m(this, HQ, lN).call(this));
    return l.setAttribute("aria-orientation", "horizontal"), l.setAttribute("aria-labelledby", "highlightColorPickerLabel"), l;
  }
  _colorSelectFromKeyboard(l) {
    if (l.target === Q(this, bU)) {
      m(this, QZ, qZ).call(this, l);
      return;
    }
    const U = l.target.getAttribute("data-color");
    U && m(this, vQ, UN).call(this, U, l);
  }
  _moveToNext(l) {
    var U, Z;
    if (!Q(this, yU, TZ)) {
      m(this, QZ, qZ).call(this, l);
      return;
    }
    if (l.target === Q(this, bU)) {
      (U = Q(this, tl).firstChild) == null || U.focus();
      return;
    }
    (Z = l.target.nextSibling) == null || Z.focus();
  }
  _moveToPrevious(l) {
    var U, Z;
    if (l.target === ((U = Q(this, tl)) == null ? void 0 : U.firstChild) || l.target === Q(this, bU)) {
      Q(this, yU, TZ) && this._hideDropdownFromKeyboard();
      return;
    }
    Q(this, yU, TZ) || m(this, QZ, qZ).call(this, l), (Z = l.target.previousSibling) == null || Z.focus();
  }
  _moveToBeginning(l) {
    var U;
    if (!Q(this, yU, TZ)) {
      m(this, QZ, qZ).call(this, l);
      return;
    }
    (U = Q(this, tl).firstChild) == null || U.focus();
  }
  _moveToEnd(l) {
    var U;
    if (!Q(this, yU, TZ)) {
      m(this, QZ, qZ).call(this, l);
      return;
    }
    (U = Q(this, tl).lastChild) == null || U.focus();
  }
  hideDropdown() {
    var l;
    (l = Q(this, tl)) == null || l.classList.add("hidden"), window.removeEventListener("pointerdown", Q(this, OQ));
  }
  _hideDropdownFromKeyboard() {
    var l;
    if (!Q(this, a0)) {
      if (!Q(this, yU, TZ)) {
        (l = Q(this, KQ)) == null || l.unselect();
        return;
      }
      this.hideDropdown(), Q(this, bU).focus({
        preventScroll: !0,
        focusVisible: Q(this, rQ)
      });
    }
  }
  updateColor(l) {
    if (Q(this, Cd) && (Q(this, Cd).style.backgroundColor = l), !Q(this, tl))
      return;
    const U = Q(this, wZ).highlightColors.values();
    for (const Z of Q(this, tl).children)
      Z.setAttribute("aria-selected", U.next().value === l);
  }
  destroy() {
    var l, U;
    (l = Q(this, bU)) == null || l.remove(), i(this, bU, null), i(this, Cd, null), (U = Q(this, tl)) == null || U.remove(), i(this, tl, null);
  }
};
let tc = jU;
jQ = new WeakMap(), OQ = new WeakMap(), bU = new WeakMap(), Cd = new WeakMap(), b0 = new WeakMap(), tl = new WeakMap(), rQ = new WeakMap(), a0 = new WeakMap(), KQ = new WeakMap(), gQ = new WeakMap(), wZ = new WeakMap(), n0 = new WeakMap(), HQ = new WeakSet(), lN = function() {
  const l = document.createElement("div");
  l.addEventListener("contextmenu", jl), l.className = "dropdown", l.role = "listbox", l.setAttribute("aria-multiselectable", !1), l.setAttribute("aria-orientation", "vertical"), l.setAttribute("data-l10n-id", "pdfjs-editor-colorpicker-dropdown");
  for (const [U, Z] of Q(this, wZ).highlightColors) {
    const d = document.createElement("button");
    d.tabIndex = "0", d.role = "option", d.setAttribute("data-color", Z), d.title = U, d.setAttribute("data-l10n-id", `pdfjs-editor-colorpicker-${U}`);
    const F = document.createElement("span");
    d.append(F), F.className = "swatch", F.style.backgroundColor = Z, d.setAttribute("aria-selected", Z === Q(this, b0)), d.addEventListener("click", m(this, vQ, UN).bind(this, Z)), l.append(d);
  }
  return l.addEventListener("keydown", Q(this, jQ)), l;
}, vQ = new WeakSet(), UN = function(l, U) {
  U.stopPropagation(), Q(this, gQ).dispatch("switchannotationeditorparams", {
    source: this,
    type: Q(this, n0),
    value: l
  });
}, Nt = new WeakSet(), eb = function(l) {
  jU._keyboardManager.exec(this, l);
}, QZ = new WeakSet(), qZ = function(l) {
  if (Q(this, yU, TZ)) {
    this.hideDropdown();
    return;
  }
  if (i(this, rQ, l.detail === 0), window.addEventListener("pointerdown", Q(this, OQ)), Q(this, tl)) {
    Q(this, tl).classList.remove("hidden");
    return;
  }
  const U = i(this, tl, m(this, HQ, lN).call(this));
  Q(this, bU).append(U);
}, st = new WeakSet(), pb = function(l) {
  var U;
  (U = Q(this, tl)) != null && U.contains(l.target) || this.hideDropdown();
}, yU = new WeakSet(), TZ = function() {
  return Q(this, tl) && !Q(this, tl).classList.contains("hidden");
};
var h0, PQ, xZ, wd, m0, $l, AQ, fQ, xd, aU, kl, vl, bt, i0, jd, Rl, M0, LU, _Q, qQ, ZN, $Q, dN, at, ub, nt, yb, ht, Lb, lV, FN, Od, H0, jZ, mF, mt, zb, J0, _V, rd, v0, it, kb, Mt, ob, Jt, Db, Gt, Ib;
const Zl = class extends r {
  constructor(U) {
    super({
      ...U,
      name: "highlightEditor"
    });
    a(this, qQ);
    a(this, $Q);
    a(this, at);
    a(this, nt);
    a(this, ht);
    a(this, lV);
    a(this, Od);
    a(this, mt);
    a(this, J0);
    a(this, rd);
    a(this, it);
    a(this, Mt);
    a(this, h0, null);
    a(this, PQ, 0);
    a(this, xZ, void 0);
    a(this, wd, null);
    a(this, m0, null);
    a(this, $l, null);
    a(this, AQ, null);
    a(this, fQ, 0);
    a(this, xd, null);
    a(this, aU, null);
    a(this, kl, null);
    a(this, vl, !1);
    a(this, bt, m(this, mt, zb).bind(this));
    a(this, i0, null);
    a(this, jd, void 0);
    a(this, Rl, null);
    a(this, M0, "");
    a(this, LU, void 0);
    a(this, _Q, "");
    this.color = U.color || Zl._defaultColor, i(this, LU, U.thickness || Zl._defaultThickness), i(this, jd, U.opacity || Zl._defaultOpacity), i(this, xZ, U.boxes || null), i(this, _Q, U.methodOfCreation || ""), i(this, M0, U.text || ""), this._isDraggable = !1, U.highlightId > -1 ? (i(this, vl, !0), m(this, $Q, dN).call(this, U), m(this, Od, H0).call(this)) : (i(this, h0, U.anchorNode), i(this, PQ, U.anchorOffset), i(this, AQ, U.focusNode), i(this, fQ, U.focusOffset), m(this, qQ, ZN).call(this), m(this, Od, H0).call(this), this.rotate(this.rotation));
  }
  static get _keyboardManager() {
    const U = Zl.prototype;
    return K(this, "_keyboardManager", new JV([[["ArrowLeft", "mac+ArrowLeft"], U._moveCaret, {
      args: [0]
    }], [["ArrowRight", "mac+ArrowRight"], U._moveCaret, {
      args: [1]
    }], [["ArrowUp", "mac+ArrowUp"], U._moveCaret, {
      args: [2]
    }], [["ArrowDown", "mac+ArrowDown"], U._moveCaret, {
      args: [3]
    }]]));
  }
  get telemetryInitialData() {
    return {
      action: "added",
      type: Q(this, vl) ? "free_highlight" : "highlight",
      color: this._uiManager.highlightColorNames.get(this.color),
      thickness: Q(this, LU),
      methodOfCreation: Q(this, _Q)
    };
  }
  get telemetryFinalData() {
    return {
      type: "highlight",
      color: this._uiManager.highlightColorNames.get(this.color)
    };
  }
  static computeTelemetryFinalData(U) {
    return {
      numberOfColors: U.get("color").size
    };
  }
  static initialize(U, Z) {
    var d;
    r.initialize(U, Z), Zl._defaultColor || (Zl._defaultColor = ((d = Z.highlightColors) == null ? void 0 : d.values().next().value) || "#fff066");
  }
  static updateDefaultParams(U, Z) {
    switch (U) {
      case D.HIGHLIGHT_DEFAULT_COLOR:
        Zl._defaultColor = Z;
        break;
      case D.HIGHLIGHT_THICKNESS:
        Zl._defaultThickness = Z;
        break;
    }
  }
  translateInPage(U, Z) {
  }
  get toolbarPosition() {
    return Q(this, i0);
  }
  updateParams(U, Z) {
    switch (U) {
      case D.HIGHLIGHT_COLOR:
        m(this, at, ub).call(this, Z);
        break;
      case D.HIGHLIGHT_THICKNESS:
        m(this, nt, yb).call(this, Z);
        break;
    }
  }
  static get defaultPropertiesToUpdate() {
    return [[D.HIGHLIGHT_DEFAULT_COLOR, Zl._defaultColor], [D.HIGHLIGHT_THICKNESS, Zl._defaultThickness]];
  }
  get propertiesToUpdate() {
    return [[D.HIGHLIGHT_COLOR, this.color || Zl._defaultColor], [D.HIGHLIGHT_THICKNESS, Q(this, LU) || Zl._defaultThickness], [D.HIGHLIGHT_FREE, Q(this, vl)]];
  }
  async addEditToolbar() {
    const U = await super.addEditToolbar();
    return U ? (this._uiManager.highlightColors && (i(this, m0, new tc({
      editor: this
    })), U.addColorPicker(Q(this, m0))), U) : null;
  }
  disableEditing() {
    super.disableEditing(), this.div.classList.toggle("disabled", !0);
  }
  enableEditing() {
    super.enableEditing(), this.div.classList.toggle("disabled", !1);
  }
  fixAndSetPosition() {
    return super.fixAndSetPosition(m(this, rd, v0).call(this));
  }
  getBaseTranslation() {
    return [0, 0];
  }
  getRect(U, Z) {
    return super.getRect(U, Z, m(this, rd, v0).call(this));
  }
  onceAdded() {
    this.parent.addUndoableEditor(this), this.div.focus();
  }
  remove() {
    m(this, lV, FN).call(this), this._reportTelemetry({
      action: "deleted"
    }), super.remove();
  }
  rebuild() {
    this.parent && (super.rebuild(), this.div !== null && (m(this, Od, H0).call(this), this.isAttachedToDOM || this.parent.add(this)));
  }
  setParent(U) {
    var d;
    let Z = !1;
    this.parent && !U ? m(this, lV, FN).call(this) : U && (m(this, Od, H0).call(this, U), Z = !this.parent && ((d = this.div) == null ? void 0 : d.classList.contains("selectedEditor"))), super.setParent(U), this.show(this._isVisible), Z && this.select();
  }
  rotate(U) {
    var F, W, V;
    const {
      drawLayer: Z
    } = this.parent;
    let d;
    Q(this, vl) ? (U = (U - this.rotation + 360) % 360, d = m(F = Zl, jZ, mF).call(F, Q(this, aU).box, U)) : d = m(W = Zl, jZ, mF).call(W, this, U), Z.rotate(Q(this, kl), U), Z.rotate(Q(this, Rl), U), Z.updateBox(Q(this, kl), d), Z.updateBox(Q(this, Rl), m(V = Zl, jZ, mF).call(V, Q(this, $l).box, U));
  }
  render() {
    if (this.div)
      return this.div;
    const U = super.render();
    Q(this, M0) && (U.setAttribute("aria-label", Q(this, M0)), U.setAttribute("role", "mark")), Q(this, vl) ? U.classList.add("free") : this.div.addEventListener("keydown", Q(this, bt));
    const Z = i(this, xd, document.createElement("div"));
    U.append(Z), Z.setAttribute("aria-hidden", "true"), Z.className = "internal", Z.style.clipPath = Q(this, wd);
    const [d, F] = this.parentDimensions;
    return this.setDims(this.width * d, this.height * F), Vc(this, Q(this, xd), ["pointerover", "pointerleave"]), this.enableEditing(), U;
  }
  pointerover() {
    this.parent.drawLayer.addClass(Q(this, Rl), "hovered");
  }
  pointerleave() {
    this.parent.drawLayer.removeClass(Q(this, Rl), "hovered");
  }
  _moveCaret(U) {
    switch (this.parent.unselect(this), U) {
      case 0:
      case 2:
        m(this, J0, _V).call(this, !0);
        break;
      case 1:
      case 3:
        m(this, J0, _V).call(this, !1);
        break;
    }
  }
  select() {
    var U, Z;
    super.select(), Q(this, Rl) && ((U = this.parent) == null || U.drawLayer.removeClass(Q(this, Rl), "hovered"), (Z = this.parent) == null || Z.drawLayer.addClass(Q(this, Rl), "selected"));
  }
  unselect() {
    var U;
    super.unselect(), Q(this, Rl) && ((U = this.parent) == null || U.drawLayer.removeClass(Q(this, Rl), "selected"), Q(this, vl) || m(this, J0, _V).call(this, !1));
  }
  get _mustFixPosition() {
    return !Q(this, vl);
  }
  show(U = this._isVisible) {
    super.show(U), this.parent && (this.parent.drawLayer.show(Q(this, kl), U), this.parent.drawLayer.show(Q(this, Rl), U));
  }
  static startHighlighting(U, Z, {
    target: d,
    x: F,
    y: W
  }) {
    const {
      x: V,
      y: c,
      width: t,
      height: N
    } = d.getBoundingClientRect(), s = (M) => {
      m(this, Jt, Db).call(this, U, M);
    }, b = {
      capture: !0,
      passive: !1
    }, n = (M) => {
      M.preventDefault(), M.stopPropagation();
    }, h = (M) => {
      d.removeEventListener("pointermove", s), window.removeEventListener("blur", h), window.removeEventListener("pointerup", h), window.removeEventListener("pointerdown", n, b), window.removeEventListener("contextmenu", jl), m(this, Gt, Ib).call(this, U, M);
    };
    window.addEventListener("blur", h), window.addEventListener("pointerup", h), window.addEventListener("pointerdown", n, b), window.addEventListener("contextmenu", jl), d.addEventListener("pointermove", s), this._freeHighlight = new ld({
      x: F,
      y: W
    }, [V, c, t, N], U.scale, this._defaultThickness / 2, Z, 1e-3), {
      id: this._freeHighlightId,
      clipPathId: this._freeHighlightClipId
    } = U.drawLayer.highlight(this._freeHighlight, this._defaultColor, this._defaultOpacity, !0);
  }
  static deserialize(U, Z, d) {
    var M;
    const F = super.deserialize(U, Z, d), {
      rect: [W, V, c, t],
      color: N,
      quadPoints: s
    } = U;
    F.color = u.makeHexColor(...N), i(F, jd, U.opacity);
    const [b, n] = F.pageDimensions;
    F.width = (c - W) / b, F.height = (t - V) / n;
    const h = i(F, xZ, []);
    for (let G = 0; G < s.length; G += 8)
      h.push({
        x: (s[4] - c) / b,
        y: (t - (1 - s[G + 5])) / n,
        width: (s[G + 2] - s[G]) / b,
        height: (s[G + 5] - s[G + 1]) / n
      });
    return m(M = F, qQ, ZN).call(M), F;
  }
  serialize(U = !1) {
    if (this.isEmpty() || U)
      return null;
    const Z = this.getRect(0, 0), d = r._colorManager.convert(this.color);
    return {
      annotationType: O.HIGHLIGHT,
      color: d,
      opacity: Q(this, jd),
      thickness: Q(this, LU),
      quadPoints: m(this, it, kb).call(this),
      outlines: m(this, Mt, ob).call(this, Z),
      pageIndex: this.pageIndex,
      rect: Z,
      rotation: m(this, rd, v0).call(this),
      structTreeParentId: this._structTreeParentId
    };
  }
  static canCreateNewEmptyEditor() {
    return !1;
  }
};
let el = Zl;
h0 = new WeakMap(), PQ = new WeakMap(), xZ = new WeakMap(), wd = new WeakMap(), m0 = new WeakMap(), $l = new WeakMap(), AQ = new WeakMap(), fQ = new WeakMap(), xd = new WeakMap(), aU = new WeakMap(), kl = new WeakMap(), vl = new WeakMap(), bt = new WeakMap(), i0 = new WeakMap(), jd = new WeakMap(), Rl = new WeakMap(), M0 = new WeakMap(), LU = new WeakMap(), _Q = new WeakMap(), qQ = new WeakSet(), ZN = function() {
  const U = new fR(Q(this, xZ), 1e-3);
  i(this, aU, U.getOutlines()), {
    x: this.x,
    y: this.y,
    width: this.width,
    height: this.height
  } = Q(this, aU).box;
  const Z = new fR(Q(this, xZ), 25e-4, 1e-3, this._uiManager.direction === "ltr");
  i(this, $l, Z.getOutlines());
  const {
    lastPoint: d
  } = Q(this, $l).box;
  i(this, i0, [(d[0] - this.x) / this.width, (d[1] - this.y) / this.height]);
}, $Q = new WeakSet(), dN = function({
  highlightOutlines: U,
  highlightId: Z,
  clipPathId: d
}) {
  var s, b;
  i(this, aU, U);
  const F = 1.5;
  if (i(this, $l, U.getNewOutline(Q(this, LU) / 2 + F, 25e-4)), Z >= 0)
    i(this, kl, Z), i(this, wd, d), this.parent.drawLayer.finalizeLine(Z, U), i(this, Rl, this.parent.drawLayer.highlightOutline(Q(this, $l)));
  else if (this.parent) {
    const n = this.parent.viewport.rotation;
    this.parent.drawLayer.updateLine(Q(this, kl), U), this.parent.drawLayer.updateBox(Q(this, kl), m(s = Zl, jZ, mF).call(s, Q(this, aU).box, (n - this.rotation + 360) % 360)), this.parent.drawLayer.updateLine(Q(this, Rl), Q(this, $l)), this.parent.drawLayer.updateBox(Q(this, Rl), m(b = Zl, jZ, mF).call(b, Q(this, $l).box, n));
  }
  const {
    x: W,
    y: V,
    width: c,
    height: t
  } = U.box;
  switch (this.rotation) {
    case 0:
      this.x = W, this.y = V, this.width = c, this.height = t;
      break;
    case 90: {
      const [n, h] = this.parentDimensions;
      this.x = V, this.y = 1 - W, this.width = c * h / n, this.height = t * n / h;
      break;
    }
    case 180:
      this.x = 1 - W, this.y = 1 - V, this.width = c, this.height = t;
      break;
    case 270: {
      const [n, h] = this.parentDimensions;
      this.x = 1 - V, this.y = W, this.width = c * h / n, this.height = t * n / h;
      break;
    }
  }
  const {
    lastPoint: N
  } = Q(this, $l).box;
  i(this, i0, [(N[0] - W) / c, (N[1] - V) / t]);
}, at = new WeakSet(), ub = function(U) {
  const Z = (F) => {
    var W, V;
    this.color = F, (W = this.parent) == null || W.drawLayer.changeColor(Q(this, kl), F), (V = Q(this, m0)) == null || V.updateColor(F);
  }, d = this.color;
  this.addCommands({
    cmd: Z.bind(this, U),
    undo: Z.bind(this, d),
    post: this._uiManager.updateUI.bind(this._uiManager, this),
    mustExec: !0,
    type: D.HIGHLIGHT_COLOR,
    overwriteIfSameType: !0,
    keepUndo: !0
  }), this._reportTelemetry({
    action: "color_changed",
    color: this._uiManager.highlightColorNames.get(U)
  }, !0);
}, nt = new WeakSet(), yb = function(U) {
  const Z = Q(this, LU), d = (F) => {
    i(this, LU, F), m(this, ht, Lb).call(this, F);
  };
  this.addCommands({
    cmd: d.bind(this, U),
    undo: d.bind(this, Z),
    post: this._uiManager.updateUI.bind(this._uiManager, this),
    mustExec: !0,
    type: D.INK_THICKNESS,
    overwriteIfSameType: !0,
    keepUndo: !0
  }), this._reportTelemetry({
    action: "thickness_changed",
    thickness: U
  }, !0);
}, ht = new WeakSet(), Lb = function(U) {
  if (!Q(this, vl))
    return;
  m(this, $Q, dN).call(this, {
    highlightOutlines: Q(this, aU).getNewOutline(U / 2)
  }), this.fixAndSetPosition();
  const [Z, d] = this.parentDimensions;
  this.setDims(this.width * Z, this.height * d);
}, lV = new WeakSet(), FN = function() {
  Q(this, kl) === null || !this.parent || (this.parent.drawLayer.remove(Q(this, kl)), i(this, kl, null), this.parent.drawLayer.remove(Q(this, Rl)), i(this, Rl, null));
}, Od = new WeakSet(), H0 = function(U = this.parent) {
  Q(this, kl) === null && ({
    id: ZU(this, kl)._,
    clipPathId: ZU(this, wd)._
  } = U.drawLayer.highlight(Q(this, aU), this.color, Q(this, jd)), i(this, Rl, U.drawLayer.highlightOutline(Q(this, $l))), Q(this, xd) && (Q(this, xd).style.clipPath = Q(this, wd)));
}, jZ = new WeakSet(), mF = function({
  x: U,
  y: Z,
  width: d,
  height: F
}, W) {
  switch (W) {
    case 90:
      return {
        x: 1 - Z - F,
        y: U,
        width: F,
        height: d
      };
    case 180:
      return {
        x: 1 - U - d,
        y: 1 - Z - F,
        width: d,
        height: F
      };
    case 270:
      return {
        x: Z,
        y: 1 - U - d,
        width: F,
        height: d
      };
  }
  return {
    x: U,
    y: Z,
    width: d,
    height: F
  };
}, mt = new WeakSet(), zb = function(U) {
  Zl._keyboardManager.exec(this, U);
}, J0 = new WeakSet(), _V = function(U) {
  if (!Q(this, h0))
    return;
  const Z = window.getSelection();
  U ? Z.setPosition(Q(this, h0), Q(this, PQ)) : Z.setPosition(Q(this, AQ), Q(this, fQ));
}, rd = new WeakSet(), v0 = function() {
  return Q(this, vl) ? this.rotation : 0;
}, it = new WeakSet(), kb = function() {
  if (Q(this, vl))
    return null;
  const [U, Z] = this.pageDimensions, d = Q(this, xZ), F = new Array(d.length * 8);
  let W = 0;
  for (const {
    x: V,
    y: c,
    width: t,
    height: N
  } of d) {
    const s = V * U, b = (1 - c - N) * Z;
    F[W] = F[W + 4] = s, F[W + 1] = F[W + 3] = b, F[W + 2] = F[W + 6] = s + t * U, F[W + 5] = F[W + 7] = b + N * Z, W += 8;
  }
  return F;
}, Mt = new WeakSet(), ob = function(U) {
  return Q(this, aU).serialize(U, m(this, rd, v0).call(this));
}, Jt = new WeakSet(), Db = function(U, Z) {
  this._freeHighlight.add(Z) && U.drawLayer.updatePath(this._freeHighlightId, this._freeHighlight);
}, Gt = new WeakSet(), Ib = function(U, Z) {
  this._freeHighlight.isEmpty() ? U.drawLayer.removeFreeHighlight(this._freeHighlightId) : U.createAndAddNewEditor(Z, !1, {
    highlightId: this._freeHighlightId,
    highlightOutlines: this._freeHighlight.getOutlines(),
    clipPathId: this._freeHighlightClipId,
    methodOfCreation: "main_toolbar"
  }), this._freeHighlightId = -1, this._freeHighlight = null, this._freeHighlightClipId = "";
}, a(el, jZ), a(el, Jt), a(el, Gt), I(el, "_defaultColor", null), I(el, "_defaultOpacity", 1), I(el, "_defaultThickness", 12), I(el, "_l10nPromise"), I(el, "_type", "highlight"), I(el, "_editorType", O.HIGHLIGHT), I(el, "_freeHighlightId", -1), I(el, "_freeHighlight", null), I(el, "_freeHighlightClipId", "");
var Kd, gd, UV, ZV, dV, Hd, zU, VZ, lU, vd, Pd, Ad, fd, _d, OZ, Tt, Eb, Xt, Cb, Yt, wb, St, xb, FV, WN, Bt, jb, WV, QN, et, Ob, pt, rb, ut, Kb, yt, gb, Lt, Hb, cZ, $Z, QV, VN, G0, qV, T0, $V, rZ, iF, VV, cN, X0, lc, zt, vb, cV, tN, kt, Pb, ot, Ab, tV, RN, Y0, Uc, qd, P0;
const ml = class extends r {
  constructor(U) {
    super({
      ...U,
      name: "inkEditor"
    });
    a(this, Tt);
    a(this, Xt);
    a(this, Yt);
    a(this, St);
    a(this, FV);
    a(this, Bt);
    a(this, WV);
    a(this, et);
    a(this, pt);
    a(this, ut);
    a(this, yt);
    a(this, Lt);
    a(this, cZ);
    a(this, QV);
    a(this, G0);
    a(this, T0);
    a(this, rZ);
    a(this, VV);
    a(this, X0);
    a(this, ot);
    a(this, tV);
    a(this, Y0);
    a(this, qd);
    a(this, Kd, 0);
    a(this, gd, 0);
    a(this, UV, this.canvasPointermove.bind(this));
    a(this, ZV, this.canvasPointerleave.bind(this));
    a(this, dV, this.canvasPointerup.bind(this));
    a(this, Hd, this.canvasPointerdown.bind(this));
    a(this, zU, null);
    a(this, VZ, new Path2D());
    a(this, lU, !1);
    a(this, vd, !1);
    a(this, Pd, !1);
    a(this, Ad, null);
    a(this, fd, 0);
    a(this, _d, 0);
    a(this, OZ, null);
    this.color = U.color || null, this.thickness = U.thickness || null, this.opacity = U.opacity || null, this.paths = [], this.bezierPath2D = [], this.allRawPaths = [], this.currentPath = [], this.scaleFactor = 1, this.translationX = this.translationY = 0, this.x = 0, this.y = 0, this._willKeepAspectRatio = !0;
  }
  static initialize(U, Z) {
    r.initialize(U, Z);
  }
  static updateDefaultParams(U, Z) {
    switch (U) {
      case D.INK_THICKNESS:
        ml._defaultThickness = Z;
        break;
      case D.INK_COLOR:
        ml._defaultColor = Z;
        break;
      case D.INK_OPACITY:
        ml._defaultOpacity = Z / 100;
        break;
    }
  }
  updateParams(U, Z) {
    switch (U) {
      case D.INK_THICKNESS:
        m(this, Tt, Eb).call(this, Z);
        break;
      case D.INK_COLOR:
        m(this, Xt, Cb).call(this, Z);
        break;
      case D.INK_OPACITY:
        m(this, Yt, wb).call(this, Z);
        break;
    }
  }
  static get defaultPropertiesToUpdate() {
    return [[D.INK_THICKNESS, ml._defaultThickness], [D.INK_COLOR, ml._defaultColor || r._defaultLineColor], [D.INK_OPACITY, Math.round(ml._defaultOpacity * 100)]];
  }
  get propertiesToUpdate() {
    return [[D.INK_THICKNESS, this.thickness || ml._defaultThickness], [D.INK_COLOR, this.color || ml._defaultColor || r._defaultLineColor], [D.INK_OPACITY, Math.round(100 * (this.opacity ?? ml._defaultOpacity))]];
  }
  rebuild() {
    this.parent && (super.rebuild(), this.div !== null && (this.canvas || (m(this, G0, qV).call(this), m(this, T0, $V).call(this)), this.isAttachedToDOM || (this.parent.add(this), m(this, rZ, iF).call(this)), m(this, qd, P0).call(this)));
  }
  remove() {
    this.canvas !== null && (this.isEmpty() || this.commit(), this.canvas.width = this.canvas.height = 0, this.canvas.remove(), this.canvas = null, Q(this, zU) && (clearTimeout(Q(this, zU)), i(this, zU, null)), Q(this, Ad).disconnect(), i(this, Ad, null), super.remove());
  }
  setParent(U) {
    !this.parent && U ? this._uiManager.removeShouldRescale(this) : this.parent && U === null && this._uiManager.addShouldRescale(this), super.setParent(U);
  }
  onScaleChanging() {
    const [U, Z] = this.parentDimensions, d = this.width * U, F = this.height * Z;
    this.setDimensions(d, F);
  }
  enableEditMode() {
    Q(this, lU) || this.canvas === null || (super.enableEditMode(), this._isDraggable = !1, this.canvas.addEventListener("pointerdown", Q(this, Hd)));
  }
  disableEditMode() {
    !this.isInEditMode() || this.canvas === null || (super.disableEditMode(), this._isDraggable = !this.isEmpty(), this.div.classList.remove("editing"), this.canvas.removeEventListener("pointerdown", Q(this, Hd)));
  }
  onceAdded() {
    this._isDraggable = !this.isEmpty();
  }
  isEmpty() {
    return this.paths.length === 0 || this.paths.length === 1 && this.paths[0].length === 0;
  }
  commit() {
    Q(this, lU) || (super.commit(), this.isEditing = !1, this.disableEditMode(), this.setInForeground(), i(this, lU, !0), this.div.classList.add("disabled"), m(this, qd, P0).call(this, !0), this.select(), this.parent.addInkEditorIfNeeded(!0), this.moveInDOM(), this.div.focus({
      preventScroll: !0
    }));
  }
  focusin(U) {
    this._focusEventsAllowed && (super.focusin(U), this.enableEditMode());
  }
  canvasPointerdown(U) {
    U.button !== 0 || !this.isInEditMode() || Q(this, lU) || (this.setInForeground(), U.preventDefault(), this.div.contains(document.activeElement) || this.div.focus({
      preventScroll: !0
    }), m(this, Bt, jb).call(this, U.offsetX, U.offsetY));
  }
  canvasPointermove(U) {
    U.preventDefault(), m(this, WV, QN).call(this, U.offsetX, U.offsetY);
  }
  canvasPointerup(U) {
    U.preventDefault(), m(this, QV, VN).call(this, U);
  }
  canvasPointerleave(U) {
    m(this, QV, VN).call(this, U);
  }
  get isResizable() {
    return !this.isEmpty() && Q(this, lU);
  }
  render() {
    if (this.div)
      return this.div;
    let U, Z;
    this.width && (U = this.x, Z = this.y), super.render(), this.div.setAttribute("data-l10n-id", "pdfjs-ink");
    const [d, F, W, V] = m(this, St, xb).call(this);
    if (this.setAt(d, F, 0, 0), this.setDims(W, V), m(this, G0, qV).call(this), this.width) {
      const [c, t] = this.parentDimensions;
      this.setAspectRatio(this.width * c, this.height * t), this.setAt(U * c, Z * t, this.width * c, this.height * t), i(this, Pd, !0), m(this, rZ, iF).call(this), this.setDims(this.width * c, this.height * t), m(this, cZ, $Z).call(this), this.div.classList.add("disabled");
    } else
      this.div.classList.add("editing"), this.enableEditMode();
    return m(this, T0, $V).call(this), this.div;
  }
  setDimensions(U, Z) {
    const d = Math.round(U), F = Math.round(Z);
    if (Q(this, fd) === d && Q(this, _d) === F)
      return;
    i(this, fd, d), i(this, _d, F), this.canvas.style.visibility = "hidden";
    const [W, V] = this.parentDimensions;
    this.width = U / W, this.height = Z / V, this.fixAndSetPosition(), Q(this, lU) && m(this, VV, cN).call(this, U, Z), m(this, rZ, iF).call(this), m(this, cZ, $Z).call(this), this.canvas.style.visibility = "visible", this.fixDims();
  }
  static deserialize(U, Z, d) {
    var G, J, T;
    if (U instanceof ab)
      return null;
    const F = super.deserialize(U, Z, d);
    F.thickness = U.thickness, F.color = u.makeHexColor(...U.color), F.opacity = U.opacity;
    const [W, V] = F.pageDimensions, c = F.width * W, t = F.height * V, N = F.parentScale, s = U.thickness / 2;
    i(F, lU, !0), i(F, fd, Math.round(c)), i(F, _d, Math.round(t));
    const {
      paths: b,
      rect: n,
      rotation: h
    } = U;
    for (let {
      bezier: X
    } of b) {
      X = m(G = ml, kt, Pb).call(G, X, n, h);
      const S = [];
      F.paths.push(S);
      let e = N * (X[0] - s), Y = N * (X[1] - s);
      for (let p = 2, L = X.length; p < L; p += 6) {
        const E = N * (X[p] - s), y = N * (X[p + 1] - s), g = N * (X[p + 2] - s), x = N * (X[p + 3] - s), H = N * (X[p + 4] - s), v = N * (X[p + 5] - s);
        S.push([[e, Y], [E, y], [g, x], [H, v]]), e = H, Y = v;
      }
      const B = m(this, zt, vb).call(this, S);
      F.bezierPath2D.push(B);
    }
    const M = m(J = F, tV, RN).call(J);
    return i(F, gd, Math.max(r.MIN_SIZE, M[2] - M[0])), i(F, Kd, Math.max(r.MIN_SIZE, M[3] - M[1])), m(T = F, VV, cN).call(T, c, t), F;
  }
  serialize() {
    if (this.isEmpty())
      return null;
    const U = this.getRect(0, 0), Z = r._colorManager.convert(this.ctx.strokeStyle);
    return {
      annotationType: O.INK,
      color: Z,
      thickness: this.thickness,
      opacity: this.opacity,
      paths: m(this, ot, Ab).call(this, this.scaleFactor / this.parentScale, this.translationX, this.translationY, U),
      pageIndex: this.pageIndex,
      rect: U,
      rotation: this.rotation,
      structTreeParentId: this._structTreeParentId
    };
  }
};
let FU = ml;
Kd = new WeakMap(), gd = new WeakMap(), UV = new WeakMap(), ZV = new WeakMap(), dV = new WeakMap(), Hd = new WeakMap(), zU = new WeakMap(), VZ = new WeakMap(), lU = new WeakMap(), vd = new WeakMap(), Pd = new WeakMap(), Ad = new WeakMap(), fd = new WeakMap(), _d = new WeakMap(), OZ = new WeakMap(), Tt = new WeakSet(), Eb = function(U) {
  const Z = (F) => {
    this.thickness = F, m(this, qd, P0).call(this);
  }, d = this.thickness;
  this.addCommands({
    cmd: Z.bind(this, U),
    undo: Z.bind(this, d),
    post: this._uiManager.updateUI.bind(this._uiManager, this),
    mustExec: !0,
    type: D.INK_THICKNESS,
    overwriteIfSameType: !0,
    keepUndo: !0
  });
}, Xt = new WeakSet(), Cb = function(U) {
  const Z = (F) => {
    this.color = F, m(this, cZ, $Z).call(this);
  }, d = this.color;
  this.addCommands({
    cmd: Z.bind(this, U),
    undo: Z.bind(this, d),
    post: this._uiManager.updateUI.bind(this._uiManager, this),
    mustExec: !0,
    type: D.INK_COLOR,
    overwriteIfSameType: !0,
    keepUndo: !0
  });
}, Yt = new WeakSet(), wb = function(U) {
  const Z = (F) => {
    this.opacity = F, m(this, cZ, $Z).call(this);
  };
  U /= 100;
  const d = this.opacity;
  this.addCommands({
    cmd: Z.bind(this, U),
    undo: Z.bind(this, d),
    post: this._uiManager.updateUI.bind(this._uiManager, this),
    mustExec: !0,
    type: D.INK_OPACITY,
    overwriteIfSameType: !0,
    keepUndo: !0
  });
}, St = new WeakSet(), xb = function() {
  const {
    parentRotation: U,
    parentDimensions: [Z, d]
  } = this;
  switch (U) {
    case 90:
      return [0, d, d, Z];
    case 180:
      return [Z, d, Z, d];
    case 270:
      return [Z, 0, d, Z];
    default:
      return [0, 0, Z, d];
  }
}, FV = new WeakSet(), WN = function() {
  const {
    ctx: U,
    color: Z,
    opacity: d,
    thickness: F,
    parentScale: W,
    scaleFactor: V
  } = this;
  U.lineWidth = F * W / V, U.lineCap = "round", U.lineJoin = "round", U.miterLimit = 10, U.strokeStyle = `${Z}${La(d)}`;
}, Bt = new WeakSet(), jb = function(U, Z) {
  this.canvas.addEventListener("contextmenu", jl), this.canvas.addEventListener("pointerleave", Q(this, ZV)), this.canvas.addEventListener("pointermove", Q(this, UV)), this.canvas.addEventListener("pointerup", Q(this, dV)), this.canvas.removeEventListener("pointerdown", Q(this, Hd)), this.isEditing = !0, Q(this, Pd) || (i(this, Pd, !0), m(this, rZ, iF).call(this), this.thickness || (this.thickness = ml._defaultThickness), this.color || (this.color = ml._defaultColor || r._defaultLineColor), this.opacity ?? (this.opacity = ml._defaultOpacity)), this.currentPath.push([U, Z]), i(this, vd, !1), m(this, FV, WN).call(this), i(this, OZ, () => {
    m(this, ut, Kb).call(this), Q(this, OZ) && window.requestAnimationFrame(Q(this, OZ));
  }), window.requestAnimationFrame(Q(this, OZ));
}, WV = new WeakSet(), QN = function(U, Z) {
  const [d, F] = this.currentPath.at(-1);
  if (this.currentPath.length > 1 && U === d && Z === F)
    return;
  const W = this.currentPath;
  let V = Q(this, VZ);
  if (W.push([U, Z]), i(this, vd, !0), W.length <= 2) {
    V.moveTo(...W[0]), V.lineTo(U, Z);
    return;
  }
  W.length === 3 && (i(this, VZ, V = new Path2D()), V.moveTo(...W[0])), m(this, yt, gb).call(this, V, ...W.at(-3), ...W.at(-2), U, Z);
}, et = new WeakSet(), Ob = function() {
  if (this.currentPath.length === 0)
    return;
  const U = this.currentPath.at(-1);
  Q(this, VZ).lineTo(...U);
}, pt = new WeakSet(), rb = function(U, Z) {
  i(this, OZ, null), U = Math.min(Math.max(U, 0), this.canvas.width), Z = Math.min(Math.max(Z, 0), this.canvas.height), m(this, WV, QN).call(this, U, Z), m(this, et, Ob).call(this);
  let d;
  if (this.currentPath.length !== 1)
    d = m(this, Lt, Hb).call(this);
  else {
    const t = [U, Z];
    d = [[t, t.slice(), t.slice(), t]];
  }
  const F = Q(this, VZ), W = this.currentPath;
  this.currentPath = [], i(this, VZ, new Path2D());
  const V = () => {
    this.allRawPaths.push(W), this.paths.push(d), this.bezierPath2D.push(F), this._uiManager.rebuild(this);
  }, c = () => {
    this.allRawPaths.pop(), this.paths.pop(), this.bezierPath2D.pop(), this.paths.length === 0 ? this.remove() : (this.canvas || (m(this, G0, qV).call(this), m(this, T0, $V).call(this)), m(this, qd, P0).call(this));
  };
  this.addCommands({
    cmd: V,
    undo: c,
    mustExec: !0
  });
}, ut = new WeakSet(), Kb = function() {
  if (!Q(this, vd))
    return;
  i(this, vd, !1);
  const U = Math.ceil(this.thickness * this.parentScale), Z = this.currentPath.slice(-3), d = Z.map((V) => V[0]), F = Z.map((V) => V[1]);
  Math.min(...d) - U, Math.max(...d) + U, Math.min(...F) - U, Math.max(...F) + U;
  const {
    ctx: W
  } = this;
  W.save(), W.clearRect(0, 0, this.canvas.width, this.canvas.height);
  for (const V of this.bezierPath2D)
    W.stroke(V);
  W.stroke(Q(this, VZ)), W.restore();
}, yt = new WeakSet(), gb = function(U, Z, d, F, W, V, c) {
  const t = (Z + F) / 2, N = (d + W) / 2, s = (F + V) / 2, b = (W + c) / 2;
  U.bezierCurveTo(t + 2 * (F - t) / 3, N + 2 * (W - N) / 3, s + 2 * (F - s) / 3, b + 2 * (W - b) / 3, s, b);
}, Lt = new WeakSet(), Hb = function() {
  const U = this.currentPath;
  if (U.length <= 2)
    return [[U[0], U[0], U.at(-1), U.at(-1)]];
  const Z = [];
  let d, [F, W] = U[0];
  for (d = 1; d < U.length - 2; d++) {
    const [n, h] = U[d], [M, G] = U[d + 1], J = (n + M) / 2, T = (h + G) / 2, X = [F + 2 * (n - F) / 3, W + 2 * (h - W) / 3], S = [J + 2 * (n - J) / 3, T + 2 * (h - T) / 3];
    Z.push([[F, W], X, S, [J, T]]), [F, W] = [J, T];
  }
  const [V, c] = U[d], [t, N] = U[d + 1], s = [F + 2 * (V - F) / 3, W + 2 * (c - W) / 3], b = [t + 2 * (V - t) / 3, N + 2 * (c - N) / 3];
  return Z.push([[F, W], s, b, [t, N]]), Z;
}, cZ = new WeakSet(), $Z = function() {
  if (this.isEmpty()) {
    m(this, X0, lc).call(this);
    return;
  }
  m(this, FV, WN).call(this);
  const {
    canvas: U,
    ctx: Z
  } = this;
  Z.setTransform(1, 0, 0, 1, 0, 0), Z.clearRect(0, 0, U.width, U.height), m(this, X0, lc).call(this);
  for (const d of this.bezierPath2D)
    Z.stroke(d);
}, QV = new WeakSet(), VN = function(U) {
  this.canvas.removeEventListener("pointerleave", Q(this, ZV)), this.canvas.removeEventListener("pointermove", Q(this, UV)), this.canvas.removeEventListener("pointerup", Q(this, dV)), this.canvas.addEventListener("pointerdown", Q(this, Hd)), Q(this, zU) && clearTimeout(Q(this, zU)), i(this, zU, setTimeout(() => {
    i(this, zU, null), this.canvas.removeEventListener("contextmenu", jl);
  }, 10)), m(this, pt, rb).call(this, U.offsetX, U.offsetY), this.addToAnnotationStorage(), this.setInBackground();
}, G0 = new WeakSet(), qV = function() {
  this.canvas = document.createElement("canvas"), this.canvas.width = this.canvas.height = 0, this.canvas.className = "inkEditorCanvas", this.canvas.setAttribute("data-l10n-id", "pdfjs-ink-canvas"), this.div.append(this.canvas), this.ctx = this.canvas.getContext("2d");
}, T0 = new WeakSet(), $V = function() {
  i(this, Ad, new ResizeObserver((U) => {
    const Z = U[0].contentRect;
    Z.width && Z.height && this.setDimensions(Z.width, Z.height);
  })), Q(this, Ad).observe(this.div);
}, rZ = new WeakSet(), iF = function() {
  if (!Q(this, Pd))
    return;
  const [U, Z] = this.parentDimensions;
  this.canvas.width = Math.ceil(this.width * U), this.canvas.height = Math.ceil(this.height * Z), m(this, X0, lc).call(this);
}, VV = new WeakSet(), cN = function(U, Z) {
  const d = m(this, Y0, Uc).call(this), F = (U - d) / Q(this, gd), W = (Z - d) / Q(this, Kd);
  this.scaleFactor = Math.min(F, W);
}, X0 = new WeakSet(), lc = function() {
  const U = m(this, Y0, Uc).call(this) / 2;
  this.ctx.setTransform(this.scaleFactor, 0, 0, this.scaleFactor, this.translationX * this.scaleFactor + U, this.translationY * this.scaleFactor + U);
}, zt = new WeakSet(), vb = function(U) {
  const Z = new Path2D();
  for (let d = 0, F = U.length; d < F; d++) {
    const [W, V, c, t] = U[d];
    d === 0 && Z.moveTo(...W), Z.bezierCurveTo(V[0], V[1], c[0], c[1], t[0], t[1]);
  }
  return Z;
}, cV = new WeakSet(), tN = function(U, Z, d) {
  const [F, W, V, c] = Z;
  switch (d) {
    case 0:
      for (let t = 0, N = U.length; t < N; t += 2)
        U[t] += F, U[t + 1] = c - U[t + 1];
      break;
    case 90:
      for (let t = 0, N = U.length; t < N; t += 2) {
        const s = U[t];
        U[t] = U[t + 1] + F, U[t + 1] = s + W;
      }
      break;
    case 180:
      for (let t = 0, N = U.length; t < N; t += 2)
        U[t] = V - U[t], U[t + 1] += W;
      break;
    case 270:
      for (let t = 0, N = U.length; t < N; t += 2) {
        const s = U[t];
        U[t] = V - U[t + 1], U[t + 1] = c - s;
      }
      break;
    default:
      throw new Error("Invalid rotation");
  }
  return U;
}, kt = new WeakSet(), Pb = function(U, Z, d) {
  const [F, W, V, c] = Z;
  switch (d) {
    case 0:
      for (let t = 0, N = U.length; t < N; t += 2)
        U[t] -= F, U[t + 1] = c - U[t + 1];
      break;
    case 90:
      for (let t = 0, N = U.length; t < N; t += 2) {
        const s = U[t];
        U[t] = U[t + 1] - W, U[t + 1] = s - F;
      }
      break;
    case 180:
      for (let t = 0, N = U.length; t < N; t += 2)
        U[t] = V - U[t], U[t + 1] -= W;
      break;
    case 270:
      for (let t = 0, N = U.length; t < N; t += 2) {
        const s = U[t];
        U[t] = c - U[t + 1], U[t + 1] = V - s;
      }
      break;
    default:
      throw new Error("Invalid rotation");
  }
  return U;
}, ot = new WeakSet(), Ab = function(U, Z, d, F) {
  var N, s;
  const W = [], V = this.thickness / 2, c = U * Z + V, t = U * d + V;
  for (const b of this.paths) {
    const n = [], h = [];
    for (let M = 0, G = b.length; M < G; M++) {
      const [J, T, X, S] = b[M];
      if (J[0] === S[0] && J[1] === S[1] && G === 1) {
        const x = U * J[0] + c, H = U * J[1] + t;
        n.push(x, H), h.push(x, H);
        break;
      }
      const e = U * J[0] + c, Y = U * J[1] + t, B = U * T[0] + c, p = U * T[1] + t, L = U * X[0] + c, E = U * X[1] + t, y = U * S[0] + c, g = U * S[1] + t;
      M === 0 && (n.push(e, Y), h.push(e, Y)), n.push(B, p, L, E, y, g), h.push(B, p), M === G - 1 && h.push(y, g);
    }
    W.push({
      bezier: m(N = ml, cV, tN).call(N, n, F, this.rotation),
      points: m(s = ml, cV, tN).call(s, h, F, this.rotation)
    });
  }
  return W;
}, tV = new WeakSet(), RN = function() {
  let U = 1 / 0, Z = -1 / 0, d = 1 / 0, F = -1 / 0;
  for (const W of this.paths)
    for (const [V, c, t, N] of W) {
      const s = u.bezierBoundingBox(...V, ...c, ...t, ...N);
      U = Math.min(U, s[0]), d = Math.min(d, s[1]), Z = Math.max(Z, s[2]), F = Math.max(F, s[3]);
    }
  return [U, d, Z, F];
}, Y0 = new WeakSet(), Uc = function() {
  return Q(this, lU) ? Math.ceil(this.thickness * this.parentScale) : 0;
}, qd = new WeakSet(), P0 = function(U = !1) {
  if (this.isEmpty())
    return;
  if (!Q(this, lU)) {
    m(this, cZ, $Z).call(this);
    return;
  }
  const Z = m(this, tV, RN).call(this), d = m(this, Y0, Uc).call(this);
  i(this, gd, Math.max(r.MIN_SIZE, Z[2] - Z[0])), i(this, Kd, Math.max(r.MIN_SIZE, Z[3] - Z[1]));
  const F = Math.ceil(d + Q(this, gd) * this.scaleFactor), W = Math.ceil(d + Q(this, Kd) * this.scaleFactor), [V, c] = this.parentDimensions;
  this.width = F / V, this.height = W / c, this.setAspectRatio(F, W);
  const t = this.translationX, N = this.translationY;
  this.translationX = -Z[0], this.translationY = -Z[1], m(this, rZ, iF).call(this), m(this, cZ, $Z).call(this), i(this, fd, F), i(this, _d, W), this.setDims(F, W);
  const s = U ? d / this.scaleFactor / 2 : 0;
  this.translate(t - this.translationX - s, N - this.translationY - s);
}, a(FU, zt), a(FU, cV), a(FU, kt), I(FU, "_defaultColor", null), I(FU, "_defaultOpacity", 1), I(FU, "_defaultThickness", 1), I(FU, "_type", "ink"), I(FU, "_editorType", O.INK);
var Xl, Yl, KZ, tZ, gZ, S0, kU, $d, oU, nU, RV, lF, f0, UF, _0, B0, Zc, NV, NN, Dt, fb, It, _b, sV, sN, e0, dc, Et, qb;
const IN = class extends r {
  constructor(U) {
    super({
      ...U,
      name: "stampEditor"
    });
    a(this, lF);
    a(this, UF);
    a(this, B0);
    a(this, NV);
    a(this, Dt);
    a(this, It);
    a(this, sV);
    a(this, e0);
    a(this, Et);
    a(this, Xl, null);
    a(this, Yl, null);
    a(this, KZ, null);
    a(this, tZ, null);
    a(this, gZ, null);
    a(this, S0, "");
    a(this, kU, null);
    a(this, $d, null);
    a(this, oU, null);
    a(this, nU, !1);
    a(this, RV, !1);
    i(this, tZ, U.bitmapUrl), i(this, gZ, U.bitmapFile);
  }
  static initialize(U, Z) {
    r.initialize(U, Z);
  }
  static get supportedTypes() {
    return K(this, "supportedTypes", ["apng", "avif", "bmp", "gif", "jpeg", "png", "svg+xml", "webp", "x-icon"].map((Z) => `image/${Z}`));
  }
  static get supportedTypesStr() {
    return K(this, "supportedTypesStr", this.supportedTypes.join(","));
  }
  static isHandlingMimeForPasting(U) {
    return this.supportedTypes.includes(U);
  }
  static paste(U, Z) {
    Z.pasteEditor(O.STAMP, {
      bitmapFile: U.getAsFile()
    });
  }
  remove() {
    var U, Z;
    Q(this, Yl) && (i(this, Xl, null), this._uiManager.imageManager.deleteId(Q(this, Yl)), (U = Q(this, kU)) == null || U.remove(), i(this, kU, null), (Z = Q(this, $d)) == null || Z.disconnect(), i(this, $d, null), Q(this, oU) && (clearTimeout(Q(this, oU)), i(this, oU, null))), super.remove();
  }
  rebuild() {
    if (!this.parent) {
      Q(this, Yl) && m(this, B0, Zc).call(this);
      return;
    }
    super.rebuild(), this.div !== null && (Q(this, Yl) && Q(this, kU) === null && m(this, B0, Zc).call(this), this.isAttachedToDOM || this.parent.add(this));
  }
  onceAdded() {
    this._isDraggable = !0, this.div.focus();
  }
  isEmpty() {
    return !(Q(this, KZ) || Q(this, Xl) || Q(this, tZ) || Q(this, gZ) || Q(this, Yl));
  }
  get isResizable() {
    return !0;
  }
  render() {
    if (this.div)
      return this.div;
    let U, Z;
    if (this.width && (U = this.x, Z = this.y), super.render(), this.div.hidden = !0, this.addAltTextButton(), Q(this, Xl) ? m(this, NV, NN).call(this) : m(this, B0, Zc).call(this), this.width) {
      const [d, F] = this.parentDimensions;
      this.setAt(U * d, Z * F, this.width * d, this.height * F);
    }
    return this.div;
  }
  getImageForAltText() {
    return Q(this, kU);
  }
  static deserialize(U, Z, d) {
    if (U instanceof nb)
      return null;
    const F = super.deserialize(U, Z, d), {
      rect: W,
      bitmapUrl: V,
      bitmapId: c,
      isSvg: t,
      accessibilityData: N
    } = U;
    c && d.imageManager.isValidId(c) ? i(F, Yl, c) : i(F, tZ, V), i(F, nU, t);
    const [s, b] = F.pageDimensions;
    return F.width = (W[2] - W[0]) / s, F.height = (W[3] - W[1]) / b, N && (F.altTextData = N), F;
  }
  serialize(U = !1, Z = null) {
    if (this.isEmpty())
      return null;
    const d = {
      annotationType: O.STAMP,
      bitmapId: Q(this, Yl),
      pageIndex: this.pageIndex,
      rect: this.getRect(0, 0),
      rotation: this.rotation,
      isSvg: Q(this, nU),
      structTreeParentId: this._structTreeParentId
    };
    if (U)
      return d.bitmapUrl = m(this, e0, dc).call(this, !0), d.accessibilityData = this.altTextData, d;
    const {
      decorative: F,
      altText: W
    } = this.altTextData;
    if (!F && W && (d.accessibilityData = {
      type: "Figure",
      alt: W
    }), Z === null)
      return d;
    Z.stamps || (Z.stamps = /* @__PURE__ */ new Map());
    const V = Q(this, nU) ? (d.rect[2] - d.rect[0]) * (d.rect[3] - d.rect[1]) : null;
    if (!Z.stamps.has(Q(this, Yl)))
      Z.stamps.set(Q(this, Yl), {
        area: V,
        serialized: d
      }), d.bitmap = m(this, e0, dc).call(this, !1);
    else if (Q(this, nU)) {
      const c = Z.stamps.get(Q(this, Yl));
      V > c.area && (c.area = V, c.serialized.bitmap.close(), c.serialized.bitmap = m(this, e0, dc).call(this, !1));
    }
    return d;
  }
};
let A0 = IN;
Xl = new WeakMap(), Yl = new WeakMap(), KZ = new WeakMap(), tZ = new WeakMap(), gZ = new WeakMap(), S0 = new WeakMap(), kU = new WeakMap(), $d = new WeakMap(), oU = new WeakMap(), nU = new WeakMap(), RV = new WeakMap(), lF = new WeakSet(), f0 = function(U, Z = !1) {
  if (!U) {
    this.remove();
    return;
  }
  i(this, Xl, U.bitmap), Z || (i(this, Yl, U.id), i(this, nU, U.isSvg)), U.file && i(this, S0, U.file.name), m(this, NV, NN).call(this);
}, UF = new WeakSet(), _0 = function() {
  i(this, KZ, null), this._uiManager.enableWaiting(!1), Q(this, kU) && this.div.focus();
}, B0 = new WeakSet(), Zc = function() {
  if (Q(this, Yl)) {
    this._uiManager.enableWaiting(!0), this._uiManager.imageManager.getFromId(Q(this, Yl)).then((Z) => m(this, lF, f0).call(this, Z, !0)).finally(() => m(this, UF, _0).call(this));
    return;
  }
  if (Q(this, tZ)) {
    const Z = Q(this, tZ);
    i(this, tZ, null), this._uiManager.enableWaiting(!0), i(this, KZ, this._uiManager.imageManager.getFromUrl(Z).then((d) => m(this, lF, f0).call(this, d)).finally(() => m(this, UF, _0).call(this)));
    return;
  }
  if (Q(this, gZ)) {
    const Z = Q(this, gZ);
    i(this, gZ, null), this._uiManager.enableWaiting(!0), i(this, KZ, this._uiManager.imageManager.getFromFile(Z).then((d) => m(this, lF, f0).call(this, d)).finally(() => m(this, UF, _0).call(this)));
    return;
  }
  const U = document.createElement("input");
  U.type = "file", U.accept = IN.supportedTypesStr, i(this, KZ, new Promise((Z) => {
    U.addEventListener("change", async () => {
      if (!U.files || U.files.length === 0)
        this.remove();
      else {
        this._uiManager.enableWaiting(!0);
        const d = await this._uiManager.imageManager.getFromFile(U.files[0]);
        m(this, lF, f0).call(this, d);
      }
      Z();
    }), U.addEventListener("cancel", () => {
      this.remove(), Z();
    });
  }).finally(() => m(this, UF, _0).call(this))), U.click();
}, NV = new WeakSet(), NN = function() {
  const {
    div: U
  } = this;
  let {
    width: Z,
    height: d
  } = Q(this, Xl);
  const [F, W] = this.pageDimensions, V = 0.75;
  if (this.width)
    Z = this.width * F, d = this.height * W;
  else if (Z > V * F || d > V * W) {
    const s = Math.min(V * F / Z, V * W / d);
    Z *= s, d *= s;
  }
  const [c, t] = this.parentDimensions;
  this.setDims(Z * c / F, d * t / W), this._uiManager.enableWaiting(!1);
  const N = i(this, kU, document.createElement("canvas"));
  U.append(N), U.hidden = !1, m(this, sV, sN).call(this, Z, d), m(this, Et, qb).call(this), Q(this, RV) || (this.parent.addUndoableEditor(this), i(this, RV, !0)), this._reportTelemetry({
    action: "inserted_image"
  }), Q(this, S0) && N.setAttribute("aria-label", Q(this, S0));
}, Dt = new WeakSet(), fb = function(U, Z) {
  var V;
  const [d, F] = this.parentDimensions;
  this.width = U / d, this.height = Z / F, this.setDims(U, Z), (V = this._initialOptions) != null && V.isCentered ? this.center() : this.fixAndSetPosition(), this._initialOptions = null, Q(this, oU) !== null && clearTimeout(Q(this, oU)), i(this, oU, setTimeout(() => {
    i(this, oU, null), m(this, sV, sN).call(this, U, Z);
  }, 200));
}, It = new WeakSet(), _b = function(U, Z) {
  const {
    width: d,
    height: F
  } = Q(this, Xl);
  let W = d, V = F, c = Q(this, Xl);
  for (; W > 2 * U || V > 2 * Z; ) {
    const t = W, N = V;
    W > 2 * U && (W = W >= 16384 ? Math.floor(W / 2) - 1 : Math.ceil(W / 2)), V > 2 * Z && (V = V >= 16384 ? Math.floor(V / 2) - 1 : Math.ceil(V / 2));
    const s = new OffscreenCanvas(W, V);
    s.getContext("2d").drawImage(c, 0, 0, t, N, 0, 0, W, V), c = s.transferToImageBitmap();
  }
  return c;
}, sV = new WeakSet(), sN = function(U, Z) {
  U = Math.ceil(U), Z = Math.ceil(Z);
  const d = Q(this, kU);
  if (!d || d.width === U && d.height === Z)
    return;
  d.width = U, d.height = Z;
  const F = Q(this, nU) ? Q(this, Xl) : m(this, It, _b).call(this, U, Z);
  if (this._uiManager.hasMLManager && !this.hasAltText()) {
    const V = new OffscreenCanvas(U, Z);
    V.getContext("2d").drawImage(F, 0, 0, F.width, F.height, 0, 0, U, Z), V.convertToBlob().then((t) => {
      const N = new FileReader();
      N.onload = () => {
        const s = N.result;
        this._uiManager.mlGuess({
          service: "image-to-text",
          request: {
            imageData: s
          }
        }).then((b) => {
          const n = (b == null ? void 0 : b.output) || "";
          this.parent && n && !this.hasAltText() && (this.altTextData = {
            altText: n,
            decorative: !1
          });
        });
      }, N.readAsDataURL(t);
    });
  }
  const W = d.getContext("2d");
  W.filter = this._uiManager.hcmFilter, W.drawImage(F, 0, 0, F.width, F.height, 0, 0, U, Z);
}, e0 = new WeakSet(), dc = function(U) {
  if (U) {
    if (Q(this, nU)) {
      const F = this._uiManager.imageManager.getSvgUrl(Q(this, Yl));
      if (F)
        return F;
    }
    const Z = document.createElement("canvas");
    return {
      width: Z.width,
      height: Z.height
    } = Q(this, Xl), Z.getContext("2d").drawImage(Q(this, Xl), 0, 0), Z.toDataURL();
  }
  if (Q(this, nU)) {
    const [Z, d] = this.pageDimensions, F = Math.round(this.width * Z * hU.PDF_TO_CSS_UNITS), W = Math.round(this.height * d * hU.PDF_TO_CSS_UNITS), V = new OffscreenCanvas(F, W);
    return V.getContext("2d").drawImage(Q(this, Xl), 0, 0, Q(this, Xl).width, Q(this, Xl).height, 0, 0, F, W), V.transferToImageBitmap();
  }
  return structuredClone(Q(this, Xl));
}, Et = new WeakSet(), qb = function() {
  i(this, $d, new ResizeObserver((U) => {
    const Z = U[0].contentRect;
    Z.width && Z.height && m(this, Dt, fb).call(this, Z.width, Z.height);
  })), Q(this, $d).observe(this.div);
}, I(A0, "_type", "stamp"), I(A0, "_editorType", O.STAMP);
var ZF, p0, DU, dF, RZ, NZ, sZ, Pl, HZ, u0, y0, ol, k, vZ, Ct, $b, bV, bN, aV, aN, nV, nN, L0, Fc;
const OU = class {
  constructor({
    uiManager: l,
    pageIndex: U,
    div: Z,
    accessibilityManager: d,
    annotationLayer: F,
    drawLayer: W,
    textLayer: V,
    viewport: c,
    l10n: t
  }) {
    a(this, Ct);
    a(this, bV);
    a(this, aV);
    a(this, nV);
    a(this, L0);
    a(this, ZF, void 0);
    a(this, p0, !1);
    a(this, DU, null);
    a(this, dF, null);
    a(this, RZ, null);
    a(this, NZ, null);
    a(this, sZ, null);
    a(this, Pl, /* @__PURE__ */ new Map());
    a(this, HZ, !1);
    a(this, u0, !1);
    a(this, y0, !1);
    a(this, ol, null);
    a(this, k, void 0);
    const N = [...Q(OU, vZ).values()];
    if (!OU._initialized) {
      OU._initialized = !0;
      for (const s of N)
        s.initialize(t, l);
    }
    l.registerEditorTypes(N), i(this, k, l), this.pageIndex = U, this.div = Z, i(this, ZF, d), i(this, DU, F), this.viewport = c, i(this, ol, V), this.drawLayer = W, Q(this, k).addLayer(this);
  }
  get isEmpty() {
    return Q(this, Pl).size === 0;
  }
  get isInvisible() {
    return this.isEmpty && Q(this, k).getMode() === O.NONE;
  }
  updateToolbar(l) {
    Q(this, k).updateToolbar(l);
  }
  updateMode(l = Q(this, k).getMode()) {
    switch (m(this, L0, Fc).call(this), l) {
      case O.NONE:
        this.disableTextSelection(), this.togglePointerEvents(!1), this.toggleAnnotationLayerPointerEvents(!0), this.disableClick();
        return;
      case O.INK:
        this.addInkEditorIfNeeded(!1), this.disableTextSelection(), this.togglePointerEvents(!0), this.disableClick();
        break;
      case O.HIGHLIGHT:
        this.enableTextSelection(), this.togglePointerEvents(!1), this.disableClick();
        break;
      default:
        this.disableTextSelection(), this.togglePointerEvents(!0), this.enableClick();
    }
    this.toggleAnnotationLayerPointerEvents(!1);
    const {
      classList: U
    } = this.div;
    for (const Z of Q(OU, vZ).values())
      U.toggle(`${Z._type}Editing`, l === Z._editorType);
    this.div.hidden = !1;
  }
  hasTextLayer(l) {
    var U;
    return l === ((U = Q(this, ol)) == null ? void 0 : U.div);
  }
  addInkEditorIfNeeded(l) {
    if (Q(this, k).getMode() !== O.INK)
      return;
    if (!l) {
      for (const Z of Q(this, Pl).values())
        if (Z.isEmpty()) {
          Z.setInBackground();
          return;
        }
    }
    this.createAndAddNewEditor({
      offsetX: 0,
      offsetY: 0
    }, !1).setInBackground();
  }
  setEditingState(l) {
    Q(this, k).setEditingState(l);
  }
  addCommands(l) {
    Q(this, k).addCommands(l);
  }
  togglePointerEvents(l = !1) {
    this.div.classList.toggle("disabled", !l);
  }
  toggleAnnotationLayerPointerEvents(l = !1) {
    var U;
    (U = Q(this, DU)) == null || U.div.classList.toggle("disabled", !l);
  }
  enable() {
    this.div.tabIndex = 0, this.togglePointerEvents(!0);
    const l = /* @__PURE__ */ new Set();
    for (const Z of Q(this, Pl).values())
      Z.enableEditing(), Z.show(!0), Z.annotationElementId && (Q(this, k).removeChangedExistingAnnotation(Z), l.add(Z.annotationElementId));
    if (!Q(this, DU))
      return;
    const U = Q(this, DU).getEditableAnnotations();
    for (const Z of U) {
      if (Z.hide(), Q(this, k).isDeletedAnnotationElement(Z.data.id) || l.has(Z.data.id))
        continue;
      const d = this.deserialize(Z);
      d && (this.addOrRebuild(d), d.enableEditing());
    }
  }
  disable() {
    var d;
    i(this, y0, !0), this.div.tabIndex = -1, this.togglePointerEvents(!1);
    const l = /* @__PURE__ */ new Map(), U = /* @__PURE__ */ new Map();
    for (const F of Q(this, Pl).values())
      if (F.disableEditing(), !!F.annotationElementId) {
        if (F.serialize() !== null) {
          l.set(F.annotationElementId, F);
          continue;
        } else
          U.set(F.annotationElementId, F);
        (d = this.getEditableAnnotation(F.annotationElementId)) == null || d.show(), F.remove();
      }
    if (Q(this, DU)) {
      const F = Q(this, DU).getEditableAnnotations();
      for (const W of F) {
        const {
          id: V
        } = W.data;
        if (Q(this, k).isDeletedAnnotationElement(V))
          continue;
        let c = U.get(V);
        if (c) {
          c.resetAnnotationElement(W), c.show(!1), W.show();
          continue;
        }
        c = l.get(V), c && (Q(this, k).addChangedExistingAnnotation(c), c.renderAnnotationElement(W), c.show(!1)), W.show();
      }
    }
    m(this, L0, Fc).call(this), this.isEmpty && (this.div.hidden = !0);
    const {
      classList: Z
    } = this.div;
    for (const F of Q(OU, vZ).values())
      Z.remove(`${F._type}Editing`);
    this.disableTextSelection(), this.toggleAnnotationLayerPointerEvents(!0), i(this, y0, !1);
  }
  getEditableAnnotation(l) {
    var U;
    return ((U = Q(this, DU)) == null ? void 0 : U.getEditableAnnotation(l)) || null;
  }
  setActiveEditor(l) {
    Q(this, k).getActive() !== l && Q(this, k).setActiveEditor(l);
  }
  enableTextSelection() {
    var l;
    this.div.tabIndex = -1, (l = Q(this, ol)) != null && l.div && !Q(this, NZ) && (i(this, NZ, m(this, Ct, $b).bind(this)), Q(this, ol).div.addEventListener("pointerdown", Q(this, NZ)), Q(this, ol).div.classList.add("highlighting"));
  }
  disableTextSelection() {
    var l;
    this.div.tabIndex = 0, (l = Q(this, ol)) != null && l.div && Q(this, NZ) && (Q(this, ol).div.removeEventListener("pointerdown", Q(this, NZ)), i(this, NZ, null), Q(this, ol).div.classList.remove("highlighting"));
  }
  enableClick() {
    Q(this, RZ) || (i(this, RZ, this.pointerdown.bind(this)), i(this, dF, this.pointerup.bind(this)), this.div.addEventListener("pointerdown", Q(this, RZ)), this.div.addEventListener("pointerup", Q(this, dF)));
  }
  disableClick() {
    Q(this, RZ) && (this.div.removeEventListener("pointerdown", Q(this, RZ)), this.div.removeEventListener("pointerup", Q(this, dF)), i(this, RZ, null), i(this, dF, null));
  }
  attach(l) {
    Q(this, Pl).set(l.id, l);
    const {
      annotationElementId: U
    } = l;
    U && Q(this, k).isDeletedAnnotationElement(U) && Q(this, k).removeDeletedAnnotationElement(l);
  }
  detach(l) {
    var U;
    Q(this, Pl).delete(l.id), (U = Q(this, ZF)) == null || U.removePointerInTextLayer(l.contentDiv), !Q(this, y0) && l.annotationElementId && Q(this, k).addDeletedAnnotationElement(l);
  }
  remove(l) {
    this.detach(l), Q(this, k).removeEditor(l), l.div.remove(), l.isAttachedToDOM = !1, Q(this, u0) || this.addInkEditorIfNeeded(!1);
  }
  changeParent(l) {
    var U;
    l.parent !== this && (l.parent && l.annotationElementId && (Q(this, k).addDeletedAnnotationElement(l.annotationElementId), r.deleteAnnotationElement(l), l.annotationElementId = null), this.attach(l), (U = l.parent) == null || U.detach(l), l.setParent(this), l.div && l.isAttachedToDOM && (l.div.remove(), this.div.append(l.div)));
  }
  add(l) {
    if (!(l.parent === this && l.isAttachedToDOM)) {
      if (this.changeParent(l), Q(this, k).addEditor(l), this.attach(l), !l.isAttachedToDOM) {
        const U = l.render();
        this.div.append(U), l.isAttachedToDOM = !0;
      }
      l.fixAndSetPosition(), l.onceAdded(), Q(this, k).addToAnnotationStorage(l), l._reportTelemetry(l.telemetryInitialData);
    }
  }
  moveEditorInDOM(l) {
    var Z;
    if (!l.isAttachedToDOM)
      return;
    const {
      activeElement: U
    } = document;
    l.div.contains(U) && !Q(this, sZ) && (l._focusEventsAllowed = !1, i(this, sZ, setTimeout(() => {
      i(this, sZ, null), l.div.contains(document.activeElement) ? l._focusEventsAllowed = !0 : (l.div.addEventListener("focusin", () => {
        l._focusEventsAllowed = !0;
      }, {
        once: !0
      }), U.focus());
    }, 0))), l._structTreeParentId = (Z = Q(this, ZF)) == null ? void 0 : Z.moveElementInDOM(this.div, l.div, l.contentDiv, !0);
  }
  addOrRebuild(l) {
    l.needsToBeRebuilt() ? (l.parent || (l.parent = this), l.rebuild(), l.show()) : this.add(l);
  }
  addUndoableEditor(l) {
    const U = () => l._uiManager.rebuild(l), Z = () => {
      l.remove();
    };
    this.addCommands({
      cmd: U,
      undo: Z,
      mustExec: !1
    });
  }
  getNextId() {
    return Q(this, k).getId();
  }
  canCreateNewEmptyEditor() {
    var l;
    return (l = Q(this, bV, bN)) == null ? void 0 : l.canCreateNewEmptyEditor();
  }
  pasteEditor(l, U) {
    Q(this, k).updateToolbar(l), Q(this, k).updateMode(l);
    const {
      offsetX: Z,
      offsetY: d
    } = m(this, nV, nN).call(this), F = this.getNextId(), W = m(this, aV, aN).call(this, {
      parent: this,
      id: F,
      x: Z,
      y: d,
      uiManager: Q(this, k),
      isCentered: !0,
      ...U
    });
    W && this.add(W);
  }
  deserialize(l) {
    var U;
    return ((U = Q(OU, vZ).get(l.annotationType ?? l.annotationEditorType)) == null ? void 0 : U.deserialize(l, this, Q(this, k))) || null;
  }
  createAndAddNewEditor(l, U, Z = {}) {
    const d = this.getNextId(), F = m(this, aV, aN).call(this, {
      parent: this,
      id: d,
      x: l.offsetX,
      y: l.offsetY,
      uiManager: Q(this, k),
      isCentered: U,
      ...Z
    });
    return F && this.add(F), F;
  }
  addNewEditor() {
    this.createAndAddNewEditor(m(this, nV, nN).call(this), !0);
  }
  setSelected(l) {
    Q(this, k).setSelected(l);
  }
  toggleSelected(l) {
    Q(this, k).toggleSelected(l);
  }
  isSelected(l) {
    return Q(this, k).isSelected(l);
  }
  unselect(l) {
    Q(this, k).unselect(l);
  }
  pointerup(l) {
    const {
      isMac: U
    } = xl.platform;
    if (!(l.button !== 0 || l.ctrlKey && U) && l.target === this.div && Q(this, HZ)) {
      if (i(this, HZ, !1), !Q(this, p0)) {
        i(this, p0, !0);
        return;
      }
      if (Q(this, k).getMode() === O.STAMP) {
        Q(this, k).unselectAll();
        return;
      }
      this.createAndAddNewEditor(l, !1);
    }
  }
  pointerdown(l) {
    if (Q(this, k).getMode() === O.HIGHLIGHT && this.enableTextSelection(), Q(this, HZ)) {
      i(this, HZ, !1);
      return;
    }
    const {
      isMac: U
    } = xl.platform;
    if (l.button !== 0 || l.ctrlKey && U || l.target !== this.div)
      return;
    i(this, HZ, !0);
    const Z = Q(this, k).getActive();
    i(this, p0, !Z || Z.isEmpty());
  }
  findNewParent(l, U, Z) {
    const d = Q(this, k).findParent(U, Z);
    return d === null || d === this ? !1 : (d.changeParent(l), !0);
  }
  destroy() {
    var l, U;
    ((l = Q(this, k).getActive()) == null ? void 0 : l.parent) === this && (Q(this, k).commitOrRemove(), Q(this, k).setActiveEditor(null)), Q(this, sZ) && (clearTimeout(Q(this, sZ)), i(this, sZ, null));
    for (const Z of Q(this, Pl).values())
      (U = Q(this, ZF)) == null || U.removePointerInTextLayer(Z.contentDiv), Z.setParent(null), Z.isAttachedToDOM = !1, Z.div.remove();
    this.div = null, Q(this, Pl).clear(), Q(this, k).removeLayer(this);
  }
  render({
    viewport: l
  }) {
    this.viewport = l, WF(this.div, l);
    for (const U of Q(this, k).getEditors(this.pageIndex))
      this.add(U), U.rebuild();
    this.updateMode();
  }
  update({
    viewport: l
  }) {
    Q(this, k).commitOrRemove(), m(this, L0, Fc).call(this);
    const U = this.viewport.rotation, Z = l.rotation;
    if (this.viewport = l, WF(this.div, {
      rotation: Z
    }), U !== Z)
      for (const d of Q(this, Pl).values())
        d.rotate(Z);
    this.addInkEditorIfNeeded(!1);
  }
  get pageDimensions() {
    const {
      pageWidth: l,
      pageHeight: U
    } = this.viewport.rawDims;
    return [l, U];
  }
  get scale() {
    return Q(this, k).viewParameters.realScale;
  }
};
let q0 = OU;
ZF = new WeakMap(), p0 = new WeakMap(), DU = new WeakMap(), dF = new WeakMap(), RZ = new WeakMap(), NZ = new WeakMap(), sZ = new WeakMap(), Pl = new WeakMap(), HZ = new WeakMap(), u0 = new WeakMap(), y0 = new WeakMap(), ol = new WeakMap(), k = new WeakMap(), vZ = new WeakMap(), Ct = new WeakSet(), $b = function(l) {
  if (Q(this, k).unselectAll(), l.target === Q(this, ol).div) {
    const {
      isMac: U
    } = xl.platform;
    if (l.button !== 0 || l.ctrlKey && U)
      return;
    Q(this, k).showAllEditors("highlight", !0, !0), Q(this, ol).div.classList.add("free"), el.startHighlighting(this, Q(this, k).direction === "ltr", l), Q(this, ol).div.addEventListener("pointerup", () => {
      Q(this, ol).div.classList.remove("free");
    }, {
      once: !0
    }), l.preventDefault();
  }
}, bV = new WeakSet(), bN = function() {
  return Q(OU, vZ).get(Q(this, k).getMode());
}, aV = new WeakSet(), aN = function(l) {
  const U = Q(this, bV, bN);
  return U ? new U.prototype.constructor(l) : null;
}, nV = new WeakSet(), nN = function() {
  const {
    x: l,
    y: U,
    width: Z,
    height: d
  } = this.div.getBoundingClientRect(), F = Math.max(0, l), W = Math.max(0, U), V = Math.min(window.innerWidth, l + Z), c = Math.min(window.innerHeight, U + d), t = (F + V) / 2 - l, N = (W + c) / 2 - U, [s, b] = this.viewport.rotation % 180 === 0 ? [t, N] : [N, t];
  return {
    offsetX: s,
    offsetY: b
  };
}, L0 = new WeakSet(), Fc = function() {
  i(this, u0, !0);
  for (const l of Q(this, Pl).values())
    l.isEmpty() && l.remove();
  i(this, u0, !1);
}, I(q0, "_initialized", !1), a(q0, vZ, new Map([dU, FU, A0, el].map((l) => [l._editorType, l])));
var IU, hV, Nl, PZ, mV, hN, iV, mN, wt, la;
const pl = class {
  constructor({
    pageIndex: l
  }) {
    a(this, iV);
    a(this, wt);
    a(this, IU, null);
    a(this, hV, 0);
    a(this, Nl, /* @__PURE__ */ new Map());
    a(this, PZ, /* @__PURE__ */ new Map());
    this.pageIndex = l;
  }
  setParent(l) {
    if (!Q(this, IU)) {
      i(this, IU, l);
      return;
    }
    if (Q(this, IU) !== l) {
      if (Q(this, Nl).size > 0)
        for (const U of Q(this, Nl).values())
          U.remove(), l.append(U);
      i(this, IU, l);
    }
  }
  static get _svgFactory() {
    return K(this, "_svgFactory", new JN());
  }
  highlight(l, U, Z, d = !1) {
    const F = ZU(this, hV)._++, W = m(this, iV, mN).call(this, l.box);
    W.classList.add("highlight"), l.free && W.classList.add("free");
    const V = pl._svgFactory.createElement("defs");
    W.append(V);
    const c = pl._svgFactory.createElement("path");
    V.append(c);
    const t = `path_p${this.pageIndex}_${F}`;
    c.setAttribute("id", t), c.setAttribute("d", l.toSVGPath()), d && Q(this, PZ).set(F, c);
    const N = m(this, wt, la).call(this, V, t), s = pl._svgFactory.createElement("use");
    return W.append(s), W.setAttribute("fill", U), W.setAttribute("fill-opacity", Z), s.setAttribute("href", `#${t}`), Q(this, Nl).set(F, W), {
      id: F,
      clipPathId: `url(#${N})`
    };
  }
  highlightOutline(l) {
    const U = ZU(this, hV)._++, Z = m(this, iV, mN).call(this, l.box);
    Z.classList.add("highlightOutline");
    const d = pl._svgFactory.createElement("defs");
    Z.append(d);
    const F = pl._svgFactory.createElement("path");
    d.append(F);
    const W = `path_p${this.pageIndex}_${U}`;
    F.setAttribute("id", W), F.setAttribute("d", l.toSVGPath()), F.setAttribute("vector-effect", "non-scaling-stroke");
    let V;
    if (l.free) {
      Z.classList.add("free");
      const N = pl._svgFactory.createElement("mask");
      d.append(N), V = `mask_p${this.pageIndex}_${U}`, N.setAttribute("id", V), N.setAttribute("maskUnits", "objectBoundingBox");
      const s = pl._svgFactory.createElement("rect");
      N.append(s), s.setAttribute("width", "1"), s.setAttribute("height", "1"), s.setAttribute("fill", "white");
      const b = pl._svgFactory.createElement("use");
      N.append(b), b.setAttribute("href", `#${W}`), b.setAttribute("stroke", "none"), b.setAttribute("fill", "black"), b.setAttribute("fill-rule", "nonzero"), b.classList.add("mask");
    }
    const c = pl._svgFactory.createElement("use");
    Z.append(c), c.setAttribute("href", `#${W}`), V && c.setAttribute("mask", `url(#${V})`);
    const t = c.cloneNode();
    return Z.append(t), c.classList.add("mainOutline"), t.classList.add("secondaryOutline"), Q(this, Nl).set(U, Z), U;
  }
  finalizeLine(l, U) {
    const Z = Q(this, PZ).get(l);
    Q(this, PZ).delete(l), this.updateBox(l, U.box), Z.setAttribute("d", U.toSVGPath());
  }
  updateLine(l, U) {
    Q(this, Nl).get(l).firstChild.firstChild.setAttribute("d", U.toSVGPath());
  }
  removeFreeHighlight(l) {
    this.remove(l), Q(this, PZ).delete(l);
  }
  updatePath(l, U) {
    Q(this, PZ).get(l).setAttribute("d", U.toSVGPath());
  }
  updateBox(l, U) {
    var Z;
    m(Z = pl, mV, hN).call(Z, Q(this, Nl).get(l), U);
  }
  show(l, U) {
    Q(this, Nl).get(l).classList.toggle("hidden", !U);
  }
  rotate(l, U) {
    Q(this, Nl).get(l).setAttribute("data-main-rotation", U);
  }
  changeColor(l, U) {
    Q(this, Nl).get(l).setAttribute("fill", U);
  }
  changeOpacity(l, U) {
    Q(this, Nl).get(l).setAttribute("fill-opacity", U);
  }
  addClass(l, U) {
    Q(this, Nl).get(l).classList.add(U);
  }
  removeClass(l, U) {
    Q(this, Nl).get(l).classList.remove(U);
  }
  remove(l) {
    Q(this, IU) !== null && (Q(this, Nl).get(l).remove(), Q(this, Nl).delete(l));
  }
  destroy() {
    i(this, IU, null);
    for (const l of Q(this, Nl).values())
      l.remove();
    Q(this, Nl).clear();
  }
};
let Wc = pl;
IU = new WeakMap(), hV = new WeakMap(), Nl = new WeakMap(), PZ = new WeakMap(), mV = new WeakSet(), hN = function(l, {
  x: U = 0,
  y: Z = 0,
  width: d = 1,
  height: F = 1
} = {}) {
  const {
    style: W
  } = l;
  W.top = `${100 * Z}%`, W.left = `${100 * U}%`, W.width = `${100 * d}%`, W.height = `${100 * F}%`;
}, iV = new WeakSet(), mN = function(l) {
  var Z;
  const U = pl._svgFactory.create(1, 1, !0);
  return Q(this, IU).append(U), U.setAttribute("aria-hidden", !0), m(Z = pl, mV, hN).call(Z, U, l), U;
}, wt = new WeakSet(), la = function(l, U) {
  const Z = pl._svgFactory.createElement("clipPath");
  l.append(Z);
  const d = `clip_${U}`;
  Z.setAttribute("id", d), Z.setAttribute("clipPathUnits", "objectBoundingBox");
  const F = pl._svgFactory.createElement("use");
  return Z.append(F), F.setAttribute("href", `#${U}`), F.classList.add("clip"), d;
}, a(Wc, mV);
o.AbortException;
o.AnnotationEditorLayer;
o.AnnotationEditorParamsType;
o.AnnotationEditorType;
o.AnnotationEditorUIManager;
var Nh = o.AnnotationLayer, Ws = o.AnnotationMode;
o.CMapCompressionType;
o.ColorPicker;
o.DOMSVGFactory;
o.DrawLayer;
o.FeatureTest;
var Qc = o.GlobalWorkerOptions;
o.ImageKind;
o.InvalidPDFException;
o.MissingPDFException;
o.OPS;
o.Outliner;
o.PDFDataRangeTransport;
o.PDFDateString;
o.PDFWorker;
o.PasswordResponses;
o.PermissionFlag;
o.PixelsPerInch;
o.RenderingCancelledException;
o.UnexpectedResponseException;
o.Util;
o.VerbosityLevel;
var sh = o.XfaLayer;
o.build;
o.createValidAbsoluteUrl;
o.fetchData;
var bh = o.getDocument;
o.getFilenameFromUrl;
o.getPdfFilenameFromUrl;
o.getXfaPageViewport;
o.isDataScheme;
o.isPdfFile;
o.noContextMenu;
o.normalizeUnicode;
var ah = o.renderTextLayer;
o.setLayerDimensions;
o.shadow;
o.updateTextLayer;
o.version;
const Qs = "internal-link", nh = "link", hh = "file-attachment", mh = "form-text", ih = "form-select", Mh = "form-checkbox", Jh = "form-radio", Gh = "form-button", Vs = ["click", "dblclick", "mouseover", "input", "change"];
function D0(R, l, U) {
  const Z = [];
  if (U)
    for (const d of U)
      d[R] === l && Z.push(d);
  return Z;
}
function bZ(R, l) {
  return { type: R, data: l };
}
function sF(R, l) {
  switch (R.type) {
    case "textarea":
    case "text":
      return bZ(mh, {
        fieldName: R.name,
        value: R.value
      });
    case "select-one":
    case "select-multiple":
      const U = [];
      for (const d of R.options)
        U.push({
          value: d.value,
          label: d.label
        });
      const Z = [];
      for (const d of R.selectedOptions)
        Z.push({
          value: d.value,
          label: d.label
        });
      return bZ(ih, {
        fieldName: R.name,
        value: Z,
        options: U
      });
    case "checkbox":
      return bZ(Mh, {
        fieldName: R.name,
        checked: R.checked
      });
    case "radio":
      return bZ(Jh, {
        fieldName: R.name,
        ...l
      });
    case "button":
      return bZ(Gh, {
        fieldName: R.name,
        ...l
      });
  }
}
function Th(R) {
  return bZ(hh, R.file);
}
async function Xh(R, l) {
  if (R.dest) {
    if (typeof R.dest == "string")
      return bZ(Qs, {
        referencedPage: Number(R.dest.substring(1, R.dest.length)),
        offset: null
      });
    {
      const U = await l.getPageIndex(R.dest[0]);
      return bZ(Qs, {
        referencedPage: U + 1,
        offset: {
          left: R.dest[2],
          bottom: R.dest[3]
        }
      });
    }
  } else if (R.url)
    return bZ(nh, {
      url: R.url,
      unsafeUrl: R.unsafeUrl
    });
}
function cs(R) {
  for (const l of R.getElementsByTagName("span")) {
    let U = l.textContent;
    const Z = JSON.parse(l.dataset.l10nArgs ?? "{}");
    if (U)
      for (const d in Z)
        U = U.replace(`{{${d}}}`, Z[d]);
    l.textContent = U;
  }
}
function Yh(R, l, U) {
  var d;
  let Z = R.target.parentNode;
  if (Z.tagName === "DIV" && (Z = Z.firstChild), Z.className === "linkAnnotation" && R.type === "click") {
    const F = (d = Z.dataset) == null ? void 0 : d.annotationId;
    if (F)
      return Xh(D0("id", F, U)[0], l);
  } else if (Z.className.includes("popupAnnotation") || Z.className.includes("textAnnotation"))
    cs(Z);
  else if (Z.className.includes("fileAttachmentAnnotation")) {
    cs(Z);
    const F = Z.dataset.annotationId;
    if (F && R.type === "dblclick")
      return Th(D0("id", F, U)[0]);
  } else if (Z.className.includes("textWidgetAnnotation") && R.type === "input") {
    let F = Z.getElementsByTagName("input")[0];
    return F || (F = Z.getElementsByTagName("textarea")[0]), sF(F);
  } else {
    if (Z.className.includes("choiceWidgetAnnotation") && R.type === "input")
      return sF(Z.getElementsByTagName("select")[0]);
    if (Z.className.includes("buttonWidgetAnnotation checkBox") && R.type === "change")
      return sF(Z.getElementsByTagName("input")[0]);
    if (Z.className.includes("buttonWidgetAnnotation radioButton") && R.type === "change") {
      const F = Z.dataset.annotationId;
      if (F) {
        const W = D0("id", F, U)[0], V = [];
        for (const c of D0("fieldName", W.fieldName, U))
          c.buttonValue && V.push(c.buttonValue);
        return sF(Z.getElementsByTagName("input")[0], {
          value: W.buttonValue,
          defaultValue: W.fieldValue,
          options: V
        });
      }
    } else if (Z.className.includes("buttonWidgetAnnotation pushButton") && R.type === "click") {
      const F = Z.dataset.annotationId;
      if (F) {
        const W = D0("id", F, U)[0];
        return W.resetForm ? sF(
          { name: W.fieldName, type: "button" },
          { actions: W.actions, reset: !0 }
        ) : sF(
          { name: W.fieldName, type: "button" },
          { actions: W.actions, reset: !1 }
        );
      }
    }
  }
}
class Ua {
  constructor() {
    I(this, "externalLinkEnabled");
    this.externalLinkEnabled = !0;
  }
  /**
     * @type {number}
     */
  get pagesCount() {
    return 0;
  }
  /**
     * @type {number}
     */
  get page() {
    return 0;
  }
  /**
     * @param {number} _value
     */
  set page(l) {
  }
  /**
     * @type {number}
     */
  get rotation() {
    return 0;
  }
  /**
     * @param {number} _value
     */
  set rotation(l) {
  }
  /**
     * @type {boolean}
     */
  get isInPresentationMode() {
    return !1;
  }
  /**
     * @param {string|Array} _dest - The named, or explicit, PDF destination.
     */
  async goToDestination(l) {
  }
  /**
     * @param {number|string} _val - The page number, or page label.
     */
  goToPage(l) {
  }
  /**
     * @param {HTMLAnchorElement} link
     * @param {string} url
     * @param {boolean} [_newWindow]
     */
  addLinkAttributes(l, U, Z = !1) {
  }
  /**
     * @param _dest - The PDF destination object.
     * @returns {string} The hyperlink to the PDF object.
     */
  getDestinationHash(l) {
    return "#";
  }
  /**
     * @param _hash - The PDF parameters/hash.
     * @returns {string} The hyperlink to the PDF object.
     */
  getAnchorUrl(l) {
    return "#";
  }
  /**
     * @param {string} _hash
     */
  setHash(l) {
  }
  /**
     * @param {string} _action
     */
  executeNamedAction(l) {
  }
  /**
     * @param {Object} _action
     */
  executeSetOCGState(l) {
  }
  /**
     * @param {number} _pageNum - page number.
     * @param {Object} _pageRef - reference to the page.
     */
  cachePageRef(l, U) {
  }
}
const Sh = /* @__PURE__ */ xt({
  __name: "AnnotationLayer",
  props: {
    page: {},
    viewport: {},
    document: {},
    annotationsFilter: {},
    annotationsMap: {},
    imageResourcesPath: {},
    hideForms: { type: Boolean },
    enableScripting: { type: Boolean },
    intent: {}
  },
  emits: ["annotation", "annotationLoaded"],
  setup(R, { emit: l }) {
    const U = R, Z = AZ(), d = AZ();
    function F(N) {
      const s = Yh(N, U.document, d.value);
      Promise.resolve(s).then((b) => {
        b && l("annotation", b);
      });
    }
    async function W() {
      var s;
      return await ((s = $0(U.document)) == null ? void 0 : s.getFieldObjects());
    }
    async function V() {
      var s;
      return await ((s = $0(U.document)) == null ? void 0 : s.hasJSActions());
    }
    async function c() {
      const N = U.page;
      let s = await (N == null ? void 0 : N.getAnnotations({ intent: U.intent }));
      if (U.annotationsFilter) {
        const b = U.annotationsFilter;
        s = s.filter((n) => {
          const h = n.subtype, M = n.fieldType ? `${h}.${n.fieldType}` : null;
          return (b == null ? void 0 : b.includes(h)) || M !== null && (b == null ? void 0 : b.includes(M));
        });
      }
      return s;
    }
    async function t() {
      var T, X;
      (X = (T = Z.value).replaceChildren) == null || X.call(T);
      for (const S of Vs)
        Z.value.removeEventListener(S, F);
      const N = $0(U.document), s = U.page, b = U.viewport;
      d.value = await c();
      const n = /* @__PURE__ */ new Map([]);
      for (const S of d.value)
        if (S.subtype === "Widget" && S.fieldType === "Btn" && S.pushButton) {
          const e = S.rect[2] - S.rect[0], Y = S.rect[3] - S.rect[1], B = document.createElement("canvas");
          B.setAttribute("width", (e * b.scale).toString()), B.setAttribute("height", (Y * b.scale).toString()), n.set(S.id, B);
        }
      const h = N.annotationStorage;
      if (U.annotationsMap)
        for (const [S, e] of Object.entries(U.annotationsMap))
          h.setValue(S, e);
      const M = {
        accessibilityManager: void 0,
        annotationCanvasMap: n,
        div: Z.value,
        l10n: null,
        page: s,
        viewport: b.clone({ dontFlip: !0 })
      }, G = {
        annotations: d.value,
        viewport: b.clone({ dontFlip: !0 }),
        linkService: new Ua(),
        annotationCanvasMap: n,
        div: Z.value,
        annotationStorage: h,
        renderForms: !U.hideForms,
        page: s,
        enableScripting: !1,
        hasJSActions: await V(),
        fieldObjects: await W(),
        downloadManager: null,
        imageResourcesPath: U.imageResourcesPath
      };
      new Nh(M).render(G).then(async () => {
        l("annotationLoaded", await c());
      });
      for (const S of Vs)
        Z.value.addEventListener(S, F);
    }
    return FF(() => U.viewport, () => {
      U.page && U.viewport && Z.value && t();
    }), jt(() => {
      U.page && U.viewport && Z.value && t();
    }), (N, s) => (GF(), Ot("div", {
      ref_key: "layer",
      ref: Z,
      class: "annotationLayer",
      style: { display: "block" }
    }, null, 512));
  }
});
function Bh(R, l, U) {
  const Z = [];
  for (const N of R.items)
    Z.push(N.str), N.hasEOL && Z.push(`
`);
  const d = Z.join("").replace(/\n/g, " "), F = ["g"];
  U.ignoreCase && F.push("i");
  let W = l.trim();
  U.completeWords && (W = `\\b${W}\\b`);
  const V = new RegExp(W, F.join("")), c = [];
  let t;
  for (; (t = V.exec(d)) !== null; )
    c.push([t.index, t[0].length, t[0]]);
  return c;
}
function eh(R, l) {
  let U = 0, Z = 0;
  const d = l.items, F = d.length - 1, W = [];
  for (let V = 0; V < R.length; V++) {
    let c = R[V][0];
    for (; U !== F && c >= Z + d[U].str.length; )
      Z += d[U].str.length + (d[U].hasEOL ? 1 : 0), U++;
    const t = {
      idx: U,
      offset: c - Z
    };
    for (c += R[V][1]; U !== F && c > Z + d[U].str.length; )
      Z += d[U].str.length + (d[U].hasEOL ? 1 : 0), U++;
    const N = {
      idx: U,
      offset: c - Z
    };
    W.push({
      start: t,
      end: N,
      str: R[V][2],
      oindex: R[V][0]
    });
  }
  return W;
}
function ph(R, l, U) {
  function Z(d, F = -1, W = -1) {
    const V = l.items[d], c = [];
    let t = "", N = "", s = "", b = U[d];
    if (!b)
      return;
    if (b.nodeType === Node.TEXT_NODE) {
      const M = document.createElement("span");
      b.before(M), M.append(b), U[d] = M, b = M;
    }
    F >= 0 && W >= 0 ? t = V.str.substring(F, W) : F < 0 && W < 0 ? t = V.str : F >= 0 ? t = V.str.substring(F) : W >= 0 && (t = V.str.substring(0, W));
    const n = document.createTextNode(t), h = document.createElement("span");
    if (h.className = "highlight appended", h.append(n), c.push(h), F > 0)
      if (b.childNodes.length === 1 && b.childNodes[0].nodeType === Node.TEXT_NODE) {
        N = V.str.substring(0, F);
        const M = document.createTextNode(N);
        c.unshift(M);
      } else {
        let M = 0;
        const G = [];
        for (const J of b.childNodes) {
          const T = J.nodeType === Node.TEXT_NODE ? J.nodeValue : J.firstChild.nodeValue;
          M += T.length, M <= F ? G.push(J) : F >= M - T.length && W <= M && G.push(document.createTextNode(T.substring(0, F - (M - T.length))));
        }
        c.unshift(...G);
      }
    if (W > 0) {
      s = V.str.substring(W);
      const M = document.createTextNode(s);
      c.push(M);
    }
    b.replaceChildren(...c);
  }
  for (const d of R)
    if (d.start.idx === d.end.idx)
      Z(d.start.idx, d.start.offset, d.end.offset);
    else
      for (let F = d.start.idx, W = d.end.idx; F <= W; F++)
        F === d.start.idx ? Z(F, d.start.offset) : F === d.end.idx ? Z(F, -1, d.end.offset) : Z(F);
}
function uh(R, l) {
  const U = R.items.map((Z) => Z.str);
  for (let Z = 0; Z < l.length; Z++) {
    const d = l[Z];
    if (d && d.nodeType !== Node.TEXT_NODE) {
      const F = document.createTextNode(U[Z]);
      d.replaceChildren(F);
    }
  }
}
function yh(R, l, U) {
  const Z = [];
  for (const d of R) {
    const F = Bh(l, d, U);
    Z.push(...eh(F, l));
  }
  return Z;
}
const Lh = /* @__PURE__ */ xt({
  __name: "TextLayer",
  props: {
    page: {},
    viewport: {},
    highlightText: {},
    highlightOptions: {}
  },
  emits: ["highlight", "textLoaded"],
  setup(R, { emit: l }) {
    const U = R, Z = AZ(), d = AZ(), F = [];
    function W() {
      return Object.assign({}, {
        ignoreCase: !0,
        completeWords: !1
      }, U.highlightOptions);
    }
    async function V(s = !1) {
      const b = U.page, n = await (b == null ? void 0 : b.getTextContent());
      if (n && (s && uh(n, F), U.highlightText)) {
        const h = typeof U.highlightText == "string" ? [U.highlightText] : U.highlightText, M = yh(h, n, W());
        ph(M, n, F), l("highlight", {
          matches: M,
          textContent: n,
          textDivs: F,
          page: (b == null ? void 0 : b.pageNumber) || 1
        });
      }
    }
    function c() {
      var G, J;
      (J = (G = Z.value).replaceChildren) == null || J.call(G), F.splice(0, F.length);
      const s = U.page, b = U.viewport, h = {
        textContentSource: s == null ? void 0 : s.streamTextContent({ includeMarkedContent: !0, disableNormalization: !0 }),
        viewport: b,
        container: Z.value,
        isOffscreenCanvasSupported: !0,
        textDivs: F,
        textDivProperties: /* @__PURE__ */ new WeakMap()
      };
      ah(h).promise.then(async () => {
        var S;
        const T = await (s == null ? void 0 : s.getTextContent());
        l("textLoaded", {
          textDivs: F,
          textContent: T
        });
        const X = document.createElement("div");
        X.className = "endOfContent", (S = Z.value) == null || S.appendChild(X), d.value = X, V();
      });
    }
    function t() {
      d.value && d.value.classList.add("active");
    }
    function N() {
      d.value && d.value.classList.remove("active");
    }
    return FF(() => U.viewport, (s) => {
      U.page && U.viewport && Z.value && c();
    }), FF(() => [U.highlightText, U.highlightOptions], (s) => {
      V(!0);
    }, { deep: !0 }), jt(() => {
      U.page && U.viewport && Z.value && c();
    }), (s, b) => (GF(), Ot("div", {
      ref_key: "layer",
      ref: Z,
      class: "textLayer",
      style: { display: "block" },
      onMousedown: t,
      onMouseup: N
    }, null, 544));
  }
}), zh = /* @__PURE__ */ xt({
  __name: "XFALayer",
  props: {
    page: {},
    document: {},
    viewport: {}
  },
  emits: ["xfaLoaded"],
  setup(R, { emit: l }) {
    const U = R, Z = AZ();
    async function d() {
      var c, t;
      (t = (c = Z.value).replaceChildren) == null || t.call(c);
      const F = $0(U.document), W = U.page, V = U.viewport;
      if (F.isPureXfa) {
        const N = await W.getXfa(), s = {
          div: Z.value,
          viewport: V.clone({ dontFlip: !0 }),
          linkService: new Ua(),
          annotationStorage: F == null ? void 0 : F.annotationStorage,
          xfaHtml: N
        };
        sh.render(s), l("xfaLoaded");
      }
    }
    return FF(() => U.viewport, (F) => {
      U.page && U.viewport && Z.value && d();
    }), jt(() => {
      U.page && U.viewport && Z.value && d();
    }), (F, W) => (GF(), Ot("div", {
      ref_key: "layer",
      ref: Z,
      style: { display: "block" }
    }, null, 512));
  }
});
const kh = /* @__PURE__ */ Rs("canvas", {
  dir: "ltr",
  style: { display: "block" },
  role: "main"
}, null, -1), ts = /* @__PURE__ */ xt({
  __name: "VuePDF",
  props: {
    pdf: {},
    page: { default: 1 },
    scale: { default: 1 },
    rotation: {},
    fitParent: { type: Boolean },
    width: {},
    height: {},
    textLayer: { type: Boolean },
    imageResourcesPath: {},
    hideForms: { type: Boolean },
    intent: { default: "display" },
    annotationLayer: { type: Boolean },
    annotationsFilter: {},
    annotationsMap: {},
    watermarkText: {},
    watermarkOptions: {},
    highlightText: {},
    highlightOptions: {}
  },
  emits: ["annotation", "highlight", "loaded", "textLoaded", "annotationLoaded", "xfaLoaded"],
  setup(R, { expose: l, emit: U }) {
    const Z = R, d = AZ(), F = AZ(), W = AZ(!1);
    let V;
    const c = dR(() => ({
      viewport: void 0,
      document: void 0,
      page: void 0
    })), t = dR(() => ({
      annotationsMap: Z.annotationsMap,
      annotationsFilter: Z.annotationsFilter,
      imageResourcesPath: Z.imageResourcesPath,
      hideForms: Z.hideForms,
      intent: Z.intent
    })), N = dR(() => ({
      highlightText: Z.highlightText,
      highlightOptions: Z.highlightOptions
    }));
    function s() {
      return Object.assign({}, {
        columns: 4,
        rows: 4,
        rotation: 45,
        fontSize: 18,
        color: "rgba(211, 210, 211, 0.4)"
      }, Z.watermarkOptions);
    }
    function b(Y) {
      if (!(typeof Y == "number" && Y % 90 === 0))
        return 0;
      const B = Y / 90;
      return B > 4 ? b(Y - 360) : B < 0 ? b(Y + 360) : Y;
    }
    function n(Y) {
      let B = Z.scale;
      if (Z.fitParent) {
        const p = d.value.parentNode.clientWidth, L = Y.getViewport({ scale: 1 }).width;
        B = p / L;
      } else if (Z.width) {
        const p = Y.getViewport({ scale: 1 }).width;
        B = Z.width / p;
      } else if (Z.height) {
        const p = Y.getViewport({ scale: 1 }).height;
        B = Z.height / p;
      }
      return B;
    }
    function h(Y = 1) {
      if (!Z.watermarkText)
        return;
      const B = M();
      if (!B)
        return;
      const p = B.getContext("2d");
      if (!p)
        return;
      const L = s(), E = Z.watermarkText, y = L.columns, g = L.rows, x = y * g, H = L.rotation, v = L.fontSize * Y;
      p.font = `${v}px Trebuchet MS`, p.fillStyle = L.color;
      for (let q = 0; q < x; q++) {
        const z = q % y * (B.width / y) + B.width / (y * 2), C = Math.floor(q / y) * (B.height / g) + B.height / (g * 2), RF = p.measureText(E).width;
        p.save(), p.translate(z, C), p.rotate(-H * (Math.PI / 180)), p.fillText(E, -RF / 2, v / 2), p.restore();
      }
    }
    function M() {
      var B;
      let Y = null;
      return (B = d.value) == null || B.childNodes.forEach((p) => {
        p.tagName === "CANVAS" && (Y = p);
      }), Y;
    }
    function G(Y) {
      var E;
      let B;
      const p = M();
      p && (p == null ? void 0 : p.getAttribute("role")) === "main" ? B = p : (B = document.createElement("canvas"), B.style.display = "block", B.setAttribute("dir", "ltr"));
      const L = window.devicePixelRatio || 1;
      return B.width = Math.floor(Y.width * L), B.height = Math.floor(Y.height * L), B.style.width = `${Math.floor(Y.width)}px`, B.style.height = `${Math.floor(Y.height)}px`, (E = d.value) == null || E.style.setProperty("--scale-factor", `${Y.scale}`), F.value.style.width = `${Math.floor(Y.width)}px`, F.value.style.height = `${Math.floor(Y.height)}px`, F.value.style.top = "0", F.value.style.left = "0", W.value = !0, B;
    }
    function J() {
      V && V.cancel();
    }
    function T(Y) {
      var B;
      (B = $0(c.value.document)) == null || B.getPage(Y).then((p) => {
        var z;
        J();
        const L = p.getViewport(), E = {
          scale: n(p),
          rotation: b((Z.rotation || 0) + L.rotation)
        }, y = p.getViewport(E), g = M(), x = G(y), H = window.devicePixelRatio || 1, v = H !== 1 ? [H, 0, 0, H, 0, 0] : void 0, q = {
          canvasContext: x.getContext("2d"),
          viewport: y,
          annotationMode: Z.hideForms ? Ws.ENABLE : Ws.ENABLE_FORMS,
          transform: v,
          intent: Z.intent
        };
        (x == null ? void 0 : x.getAttribute("role")) !== "main" ? g && ((z = d.value) == null || z.replaceChild(x, g)) : x.removeAttribute("role"), c.value.page = p, c.value.viewport = y, V = p.render(q), V.promise.then(() => {
          W.value = !1, h(y.scale), U("loaded", c.value.viewport);
        }).catch(() => {
        });
      });
    }
    function X(Y) {
      Y.promise.then(async (B) => {
        c.value.document = B, T(Z.page);
      });
    }
    FF(() => Z.pdf, (Y) => {
      Y !== void 0 && X(Y);
    }), FF(() => [
      Z.scale,
      Z.width,
      Z.height,
      Z.rotation,
      Z.page,
      Z.hideForms,
      Z.intent
    ], () => {
      T(Z.page);
    }), jt(() => {
      Z.pdf !== void 0 && X(Z.pdf);
    });
    function S() {
      T(Z.page);
    }
    function e() {
      J();
    }
    return l({
      reload: S,
      cancel: e
    }), (Y, B) => (GF(), Ot("div", {
      ref_key: "container",
      ref: d,
      style: { position: "relative", display: "block" }
    }, [
      kh,
      Y.annotationLayer ? (GF(), EN(Sh, FR({ key: 0 }, { ...c.value, ...t.value }, {
        onAnnotation: B[0] || (B[0] = (p) => U("annotation", p)),
        onAnnotationLoaded: B[1] || (B[1] = (p) => U("annotationLoaded", p))
      }), null, 16)) : CN("", !0),
      Y.textLayer ? (GF(), EN(Lh, FR({ key: 1 }, { ...c.value, ...N.value }, {
        onHighlight: B[2] || (B[2] = (p) => U("highlight", p)),
        onTextLoaded: B[3] || (B[3] = (p) => U("textLoaded", p))
      }), null, 16)) : CN("", !0),
      Fa(zh, FR({ ...c.value }, {
        onXfaLoaded: B[4] || (B[4] = (p) => U("xfaLoaded"))
      }), null, 16),
      Wa(Rs("div", {
        ref_key: "loadingLayer",
        ref: F,
        style: { position: "absolute" }
      }, [
        Qa(Y.$slots, "default")
      ], 512), [
        [Va, W.value]
      ])
    ], 512));
  }
function Dh(R) {
  return !!(typeof R == "object" && R && "gen" in R && "num" in R);
}
async function Ih(R, l) {
  return typeof l == "string" ? R.getDestination(l) : l;
}
async function Eh(R, l) {
  return l && Dh(l[0]) ? l[0] : null;
}
const Ch = (R) => R.type === "XYZ" && R.spec.length === 3, wh = (R) => R.type === "Fit" && R.spec.length === 0, xh = (R) => R.type === "FitH" && R.spec.length === 1, jh = (R) => R.type === "FitV" && R.spec.length === 1, Oh = (R) => R.type === "FitR" && R.spec.length === 4, rh = (R) => R.type === "FitB" && R.spec.length === 0, Kh = (R) => R.type === "FitBH" && R.spec.length === 1, gh = (R) => R.type === "FitBV" && R.spec.length === 1;
function Hh(R, l) {
  const U = { type: R, spec: l };
  return Ch(U) || wh(U) || xh(U) || jh(U) || Oh(U) || rh(U) || Kh(U) || gh(U) ? U : (console.warn("no location type found for ", R, l), null);
}
const vh = (R) => R && R.every((l) => !isNaN(l));
function Ph(R) {
  Qc.workerSrc = R;
}
function qh(R, l = {
  onProgress: void 0,
  onPassword: void 0,
  onError: void 0,
  password: ""
}) {
  Qc != null && Qc.workerSrc || Ph(oh);
  const U = YV(), Z = YV(), d = YV(0), F = YV({});
  function W(c) {
    Z.value && Z.value.destroy();
    const t = bh(c);
    if (l.onProgress && (t.onProgress = l.onProgress), l.onPassword)
      t.onPassword = l.onPassword;
    else if (l.password) {
      const N = (s, b) => {
        s(l.password ?? "");
      };
      t.onPassword = N;
    }
    t.promise.then(
      async (N) => {
        Z.value = N, U.value = N.loadingTask, d.value = N.numPages;
        const s = await N.getMetadata(), b = await N.getAttachments(), n = await N.getJSActions(), h = await N.getOutline();
        F.value = {
          metadata: s,
          attachments: b,
          javascript: n,
          outline: h
        };
      },
      (N) => {
        typeof l.onError == "function" && l.onError(N);
      }
    );
  }
  async function V(c) {
    var G;
    const t = await ((G = U.value) == null ? void 0 : G.promise);
    if (!t)
      return null;
    const N = await Ih(t, c), s = await Eh(t, N);
    if (!s || !N)
      return null;
    const b = await t.getPageIndex(s), n = N[1].name, h = N.slice(2), M = vh(h) ? Hh(n, h) : null;
    return { pageIndex: b, location: M ?? { type: "Fit", spec: [] } };
  }
  return ca(R) ? (R.value && W(R.value), FF(R, () => {
    R.value && W(R.value);
  })) : R && W(R), {
    pdf: U,
    pages: d,
    info: F,
    getPDFDestination: V
  };
}
const $h = {
  install(R) {
    R.component(ts.name, ts);
  }
};
export {
  ts as VuePDF,
  $h as VuePDFPlugin,
  $h as default,
  qh as usePDF
};