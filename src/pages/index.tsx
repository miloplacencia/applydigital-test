import CardComponent from "../components/card/card";

export default function Index() {
  return (
    <div id="index" className="grid">
      {Array.from({ length: 10 }).map(() => (
        <CardComponent title="All the fundamental React.js concepts, jammed into this single Medium article (updated August 2019)" />
      ))}
    </div>
  );
}
