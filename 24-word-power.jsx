const navButtonsProps = {
	wordsDataArray: wordsDataArray,
	currentWord: currentWord,
	setCurrentWord: setCurrentWord,
	position: "top"
}

const wordProps = {
	word: currentWord.word,
	pronunciation: currentWord.pronunciation,
	definition: currentWord.definition,
	icon: currentWord.icon,
	category: currentWord.category,
	note: currentWord.note,
	partOfSpeech: currentWord.partOfSpeech,
	example: currentWord.example,
	synonyms: currentWord.synonyms,
	antonyms: currentWord.antonyms,
	etymology: currentWord.etymology,
	array: wordsDataArray,
}

const footerNavButtons = {
	wordsDataArray: wordsDataArray,
	currentWord: currentWord,
	setCurrentWord: setCurrentWord,
	position: "bottom",
}

	return (
		<div className="wrapper">
			<Header />
			
			<NavButtons 
				{...navButtonsProps}
			 />
			 
			<Word
				{...wordProps}
			/>
			
			<NavButtons 
				{...footerNavButtons}
			 />
			 
			<Footer />
		</div>
	)
