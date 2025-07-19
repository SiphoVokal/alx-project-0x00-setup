import Card from "@/components/Card"
import Button from "@/components/Button"

const Landing: React.FC = () => {
  return (
    <div>
        <h1 className="text-xl font-extralight">Landing Page</h1>
        <Card />
        <Button title="Special Offers" size="medium" shape="full" />
    </div>
  )
}

export default Landing;