import React from "react"
import { nanoid } from "nanoid"
import savedData from "../savedData"

export default function ToDoList() {
	const [listData, setListData] = React.useState(savedData)
	const [newItemInput, setNewItemInput] = React.useState("")
	const [autoCompleteRequested, setAutoCompleteRequested] = React.useState(false)
	const [inputInFocus, setInputInFocus] = React.useState(false)

	function handleCheckBoxChange(event) {
		setListData(prevList => {
			return prevList.map(item => {
				return item.id === event.target.name
					? { ...item, complete: !item.complete }
					: item
			})
		})
	}

	function handleNewItemInputChange(event) {
		setNewItemInput(event.target.value)
	}
    
    const div = document.querySelector(".to-do-list-container")

	React.useEffect(() => {
		if (div) {
			div.scrollTop = div.scrollHeight
		}
	}, [listData])

	function handleEnter(event) {
		if (newItemInput.trim()) {
			if (event.key === "Enter") {
				setListData(prevList => {
					const newListItem = {
						text: event.target.value,
						complete: false,
						id: nanoid(),
					}
					return [...prevList, newListItem]
				})
				setNewItemInput("")
			}
		}
	}

	function autoComplete() {
		setAutoCompleteRequested(true)
	}
	
	function toggleInputFocus() {
		setInputInFocus(!inputInFocus)
	}

	React.useEffect(() => {
		if (autoCompleteRequested) {
			let timeOut = setTimeout(() => {
				setAutoCompleteRequested(false)
				setListData(prevData => {
					return prevData.map(item => {
						return !item.complete ? { ...item, complete: true } : item
					})
				})
			}, 2000)
		}
	}, [autoCompleteRequested])

	const currentList = listData.map(item => {
		return (
			<div className="to-do-list-item-container" key={item.id}>
				<label className="checkbox-label">
					<input
						type="checkbox"
						name={item.id}
						onChange={handleCheckBoxChange}
						checked={item.complete}
					/>
					<span className="checkmark"></span>
					<p className={`to-do-list-item-text ${item.complete && "crossed-out"}`}>
						{item.text}
					</p>
				</label>
				<div className="all-progress-bars-container">
					{!item.complete && autoCompleteRequested && (
						<div className="progress-bar-container">
							<div className="progress-bar-content"></div>
						</div>
					)}
				</div>
			</div>
		)
	})
	
	return (
		<div>
			<div className="to-do-list-container">
				{currentList}
				<label className="new-item-label">
					<img
						src="./images/add-item.svg"
						className={`add-item-icon ${inputInFocus && "faded"}`}
					/>
					<input
						className="new-item-input"
						type="text"
						value={newItemInput}
						onKeyDown={handleEnter}
						onChange={handleNewItemInputChange}
						onFocus={toggleInputFocus}
						onBlur={toggleInputFocus}
					/>
				</label>
			</div>
			<div className="do-it-button-container">
				<button onClick={autoComplete}>AutoComplete</button>
			</div>
		</div>
	)
}
