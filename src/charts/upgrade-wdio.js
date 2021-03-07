import ReactFlow, { Background, Controls } from "react-flow-renderer";

const UpgradeWDIOChart = () => {
  const elements = [
    {
      id: "1",
      data: { label: "Repositories" },
      position: { x: 500, y: 25 },
    },
    // default node
    {
      id: "2",
      data: { label: "Estimate total effort" },
      position: { x: 500, y: 100 },
    },
    {
      id: "3",
      data: { label: "Compute Source Lines of Code" },
      position: { x: 250, y: 175 },
    },
    {
      id: "4",
      data: { label: "Compute Number of Tests" },
      position: { x: 750, y: 175 },
    },
    {
      id: "5",
      data: { label: "Pick a repository" },
      position: { x: 500, y: 275 },
    },
    {
      id: "6",
      data: { label: "Remove all old packages" },
      position: { x: 250, y: 350 },
    },
    {
      id: "7",
      data: { label: "Install new packages" },
      position: { x: 350, y: 500 },
    },
    {
      id: "8",
      data: { label: "Run tests (and see them break)" },
      position: { x: 650, y: 500 },
    },
    {
      id: "9",
      data: { label: "Figure fractures in wdio.conf.js or the code itself" },
      position: { x: 750, y: 350 },
    },
    // animated edge
    { id: "e1-2", source: "1", target: "2", arrowHeadType: "arrow" },
    { id: "e2-3", source: "2", target: "3", arrowHeadType: "arrow" },
    { id: "e2-4", source: "2", target: "4", arrowHeadType: "arrow" },
    { id: "e3-5", source: "3", target: "5", arrowHeadType: "arrow" },
    { id: "e4-5", source: "4", target: "5", arrowHeadType: "arrow" },
    {
      id: "e5-6",
      source: "5",
      target: "6",
      arrowHeadType: "arrow",
      animated: true,
    },
    {
      id: "e6-7",
      source: "6",
      target: "7",
      arrowHeadType: "arrow",
      animated: true,
    },
    {
      id: "e7-8",
      source: "7",
      target: "8",
      arrowHeadType: "arrow",
      animated: true,
    },
    {
      id: "e8-9",
      source: "8",
      target: "9",
      arrowHeadType: "arrow",
      animated: true,
    },
    {
      id: "e9-5",
      source: "9",
      target: "5",
      arrowHeadType: "arrow",
      animated: true,
    },
  ];

  return (
    <div
      style={{
        height: "100%",
      }}
    >
      <ReactFlow elements={elements}>
        <Background variant="dots" gap={20} size={1} />
        <Controls />
      </ReactFlow>
    </div>
  );
};

export default UpgradeWDIOChart;
