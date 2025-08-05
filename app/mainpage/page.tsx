import Button from "../_components/page";

export default function yes(){

    return(
        <div className="flex flex-col items-center">
            <div className="text-4xl">Wellness Assistant </div>
            <div>Your personal AI companion for mindful moments and gentle guidance. Share how you're feeling and receive personalized wellness suggestions</div>
            <div className=" bg-amber-400 flex flex-col items-center p-5">
                <div className="text-black text-2xl">
                    How are you felling Today 
                </div>
                <div>
                    Select a mood or describe how you feel today
                </div>
                <div className="grid grid-cols-3 grid-rows-3 items-center space-x-2 space-y-2">
                    <Button image="https://cdn-icons-png.flaticon.com/128/2805/2805872.png" name="Tired"></Button>
                    <Button image="https://cdn-icons-png.flaticon.com/128/3475/3475118.png" name="Anxious"></Button>
                    <Button image="https://cdn-icons-png.flaticon.com/128/4814/4814852.png" name="Happy"></Button>
                    <Button image="https://cdn-icons-png.flaticon.com/128/7145/7145123.png" name="Stressed"></Button>
                    <Button image="https://cdn-icons-png.flaticon.com/128/2788/2788983.png" name="Energetic"></Button>
                    <Button image="https://cdn-icons-png.flaticon.com/128/18068/18068044.png" name="Peaceful"></Button>

                </div>
            </div>
        </div>
    )
}