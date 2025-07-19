import Card from "@/components/Card"
import Button from "@/components/Button"

const Landing: React.FC = () => {
  return (
    <div>
        <h1 className="text-xl font-extralight">Landing Page</h1>
        <Card />
        {/* Small Buttons */}
      <div className="flex gap-4 m-4">
        <Button title="Small sm" styles="text-sm px-1 py-1 rounded-sm" />
        <Button title="Small md" styles="text-sm px-1 py-1 rounded-md" />
        <Button title="Small full" styles="text-sm px-1 py-1 rounded-lg" />
      </div>

      {/* Medium Buttons */}
      <div className="flex gap-4 m-4">
        <Button title="Medium sm" styles="text-base px-3 py-1 rounded-sm" />
        <Button title="Medium md" styles="text-base px-3 py-1 rounded-md" />
        <Button title="Medium full" styles="text-base px-3 py-1 rounded-lg" />
      </div>

      {/* Large Buttons */}
      <div className="flex gap-4">
        <Button title="Large sm" styles="text-lg px-5 py-2 rounded-sm" />
        <Button title="Large md" styles="text-lg px-5 py-2 rounded-md" />
        <Button title="Large full" styles="text-lg px-5 py-2 rounded-lg" />
      </div>
    </div>
  )
}

export default Landing;