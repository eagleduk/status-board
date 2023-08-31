import { SyncLoader } from "react-spinners";

function Loading() {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <SyncLoader color="#36d7b7" />
    </div>
  );
}

export default Loading;
