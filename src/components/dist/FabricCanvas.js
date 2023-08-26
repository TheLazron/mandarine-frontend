"use strict";
exports.__esModule = true;
var react_1 = require("react");
var recoil_1 = require("recoil");
var _app_1 = require("@/pages/_app");
var base64_js_1 = require("base64-js");
var fabricjs_react_1 = require("fabricjs-react");
var react_2 = require("@chakra-ui/react");
var axios_1 = require("axios");
var FabricCanvas = function (_a) {
    var clearCall = _a.clearCall;
    var _b = fabricjs_react_1.useFabricJSEditor(), editor = _b.editor, onReady = _b.onReady;
    var _c = react_1.useState(""), previewImage = _c[0], setPreviewImage = _c[1];
    var user = recoil_1.useRecoilValue(_app_1.userState);
    var exportPNG = function () {
        console.log("sending image");
        var canvas = editor === null || editor === void 0 ? void 0 : editor.canvas; // Assuming you have the Fabric.js canvas instance
        if (canvas) {
            var dataURL = canvas.toDataURL({
                format: "png",
                multiplier: 2
            });
            var base64Data = dataURL.split(",")[1];
            var binaryData = base64_js_1.toByteArray(base64Data);
            axios_1["default"]
                .post("http://localhost:3010/upload-image/" + user.currentRoomCode, binaryData, {
                headers: {
                    "Content-Type": "application/octet-stream"
                }
            })
                .then(function (response) {
                console.log("sent image successfully");
                console.log("Response:", response.data);
            })["catch"](function (error) {
                console.error("Error:", error);
            });
        }
    };
    var containerRef = react_1.useRef(null);
    var _d = react_1.useState("#000000"), color = _d[0], setColor = _d[1];
    var downloadImage = function () {
        if (editor && editor.canvas) {
            var link = document.createElement("a");
            link.href = editor.canvas.toDataURL({
                format: "png",
                multiplier: 2
            });
            link.download = "canvas.png";
            link.click();
        }
    };
    react_1.useEffect(function () {
        if (editor && containerRef.current) {
            editor.canvas.freeDrawingBrush.color = color;
            editor.canvas.isDrawingMode = true;
            editor.canvas.setWidth(containerRef.current.clientWidth);
            editor.canvas.setHeight(containerRef.current.clientHeight);
            editor.canvas.setBackgroundColor("#FFFFFF", function () { });
            editor.canvas.freeDrawingBrush.width = 4;
        }
    }, [editor, color]);
    react_1.useEffect(function () {
        if (editor) {
            editor.canvas.clear();
        }
    }, [clearCall]);
    var exportSVG = function () {
        var svg = editor.canvas.toSVG();
        console.info(svg);
    };
    return (react_1["default"].createElement(react_2.Box, { w: "full", h: "full", rounded: "2xl" },
        react_1["default"].createElement(react_2.Box, { ref: containerRef, w: "full", h: "full", bgColor: "whiteAlpha.800", rounded: "2xl" },
            react_1["default"].createElement(fabricjs_react_1.FabricJSCanvas, { className: "sample-canvas", onReady: onReady })),
        react_1["default"].createElement(react_2.Button, { onClick: exportPNG }, "Submit Image")));
};
exports["default"] = FabricCanvas;
