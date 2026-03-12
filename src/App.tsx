import SelectCountry from "@/components/select-country";
import DisplayStatistics from "@/components/display-statistics";

function App() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <SelectCountry />
      <DisplayStatistics />
    </div>
  );
}

export default App;
