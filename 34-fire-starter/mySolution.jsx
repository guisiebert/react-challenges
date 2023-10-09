import React from "react"
import Fire from "./components/Fire"
import Torch from "./components/Torch"
import runBackgroundEffects from "./utilities/runBackgroundEffects"

export default function App() {
    
	const [torchEquipped, setTorchEquipped] = React.useState(false)
	const [woodKindling, setWoodKindling] = React.useState(false)
	const [woodOnFire, setWoodOnFire] = React.useState(false)
    const [cursorPosition, setCursorPosition] = React.useState({x: null, y: null})
	const kindleClass = woodKindling && !woodOnFire && "kindle"
   
    runBackgroundEffects(
	    torchEquipped,
	    woodOnFire,
	    setWoodKindling,
	    setWoodOnFire,
	    setCursorPosition
    )
	
	let torchStyle = {
		position: "absolute",
        left: cursorPosition.x - 10,
		top: cursorPosition.y - 60,
	}
/*----------------------------------------------------------------- */  


	function handleMouseDown() {
		console.log("down")
		setTorchEquipped(true)
	}
	
	function handleMouseUp() {
		console.log("up")
		setTorchEquipped(false)
	}
	
	function handleMouseEnter() {
		if (torchEquipped) {
			setWoodKindling(true)
		}
	}	
  
	function handleMouseLeave() {
		if (torchEquipped && woodKindling) {
			setWoodOnFire(true)
		}
	}

	return (
		<div 
			className={`wrapper ${torchEquipped && "relative no-cursor"}`} 							onMouseUp={handleMouseUp}
		>
			<div className={`game-area ${!torchEquipped && "relative"}`}>
	
				<div
					className={`torch-container ${torchEquipped && "torch-equipped"}`}

					style={torchEquipped ? torchStyle : null}
					onMouseDown={handleMouseDown}
					
				>
					<Torch />	
				</div>
				
				<div 
					className={`wood-container ${kindleClass}`}
					onMouseEnter={handleMouseEnter}
					onMouseLeave={handleMouseLeave}
				>
					🪵
					<Fire woodOnFire={woodOnFire} />
				</div>
				
			</div>
		</div>
	)
}
