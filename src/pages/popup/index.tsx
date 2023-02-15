import { createRoot } from "react-dom/client";
import Popup from "./popup";
import "../index.css";

const root = document.createElement("div");
root.id = "crx-root";
document.body.append(root);

createRoot(root).render(<Popup />);
