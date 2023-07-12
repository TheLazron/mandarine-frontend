import React, { useEffect, useState, useRef } from "react";
import { toByteArray } from "base64-js";
import { FabricJSCanvas, useFabricJSEditor } from "fabricjs-react";
import { Box, Button } from "@chakra-ui/react";
import { log } from "console";
import axios from "axios";
const FabricCanvas = () => {
  const { editor, onReady } = useFabricJSEditor();
  const [previewImage, setPreviewImage] = useState<string>("");
  const onAddCircle = () => {
    editor!.addCircle();
  };
  const onAddRectangle = () => {
    editor!.addRectangle();
  };

  const exportPNG = () => {
    console.log("sending image");

    const canvas = editor?.canvas; // Assuming you have the Fabric.js canvas instance
    if (canvas) {
      const dataURL = canvas.toDataURL({
        format: "png",
        multiplier: 2,
      });

      const base64Data = dataURL.split(",")[1];
      const binaryData = toByteArray(base64Data);
      axios
        .post("http://localhost:3010/upload-image/J6KHTWXM", binaryData, {
          headers: {
            "Content-Type": "application/octet-stream",
          },
        })
        .then((response) => {
          console.log("sent image successfully");

          console.log("Response:", response.data);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    }
  };
  const containerRef = useRef<HTMLDivElement>(null);
  const [color, setColor] = useState("#000000");
  const downloadImage = () => {
    if (editor && editor.canvas) {
      const link = document.createElement("a");
      link.href = editor.canvas.toDataURL({
        format: "png",
        multiplier: 2,
      });
      link.download = "canvas.png";
      link.click();
    }
  };
  useEffect(() => {
    if (editor && containerRef.current) {
      editor!.canvas.freeDrawingBrush.color = color;
      editor!.canvas.isDrawingMode = true;
      editor!.canvas.setWidth(containerRef.current.clientWidth!);
      editor!.canvas.setHeight(containerRef.current.clientHeight!);
      editor!.canvas.setBackgroundColor("#FFFFFF", () => {});
      editor.canvas.freeDrawingBrush.width = 4;
    }
  }, [editor, color]);

  const exportSVG = () => {
    const svg = editor!.canvas.toSVG();
    console.info(svg);
  };
  return (
    <Box w="full" h="full" rounded={"2xl"}>
      {/* <Button onClick={onAddCircle}>Add circle</Button>
      <Button onClick={onAddRectangle}>Add Rectangle</Button> */}

      <Box
        ref={containerRef}
        w="full"
        h="full"
        bgColor={"whiteAlpha.800"}
        rounded="2xl"
      >
        <FabricJSCanvas className="sample-canvas" onReady={onReady} />
      </Box>
      <Button onClick={exportPNG}>Submit Image</Button>
    </Box>
  );
};

export default FabricCanvas;
