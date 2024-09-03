import { Button } from "@/components/ui/button";
import CreateSplit from "../components/create-split";

export default function Dashboard() {
  return (
    <div>
      <div className="flex justify-between items-center px-40 mt-3">
        <h1>Dashboard</h1>
        <CreateSplit />
      </div>
    </div>
  );
}
