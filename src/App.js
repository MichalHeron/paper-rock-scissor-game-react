// import logo from './logo.svg';
import React from 'react'
import './App.css'

function ShowEnemyChoice(props) {
	if (props.enemyChoice === 1) {
		return (
			<div className='btnBorder paperBorder enemyPos'>
				<button className='btnGame paper'></button>
			</div>
		)
	}
	if (props.enemyChoice === 2) {
		return (
			<div className='btnBorder scissorsBorder enemyPos'>
				<button className='btnGame scissors'></button>
			</div>
		)
	}
	if (props.enemyChoice === 3) {
		return (
			<div className='btnBorder rockBorder enemyPos'>
				<button className='btnGame rock'></button>
			</div>
		)
	}

	// else return <div className='enemy enemyPos'></div>
}

function GameDuel(props) {
	if (props.choice === 'paper') {
		return (
			<div className='gameBox duelPos'>
				<div className='btnBorder paperBorder myPickPos'>
					<button className='btnGame paper'></button>
				</div>
				<ShowEnemyChoice enemyChoice={props.randomChoice} />
				<p className='youPicked'>You picked</p>
				<p className='theHousePicked'>the house picked</p>

				<div className='comebackBox'>
					<p>{props.winner}</p>
					<button className='btn btnAgain' onClick={props.return}>
						play again
					</button>
				</div>
			</div>
		)
	}
	if (props.choice === 'scissor') {
		return (
			<div className='gameBox duelPos'>
				<div className='btnBorder scissorsBorder myPickPos'>
					<button className='btnGame scissors'></button>
				</div>
				<ShowEnemyChoice enemyChoice={props.randomChoice} />
				<p className='youPicked'>You picked</p>
				<p className='theHousePicked'>the house picked</p>
				<div className='comebackBox'>
					<p>{props.winner}</p>
					<button className='btn btnAgain' onClick={props.return}>
						play again
					</button>
				</div>
			</div>
		)
	}
	if (props.choice === 'rock') {
		return (
			<div className='gameBox duelPos'>
				<div className='btnBorder rockBorder myPickPos'>
					<button className='btnGame rock'></button>
				</div>
				<ShowEnemyChoice enemyChoice={props.randomChoice} />
				<p className='youPicked'>You picked</p>
				<p className='theHousePicked'>the house picked</p>
				<div className='comebackBox'>
					<p>{props.winner}</p>
					<button className='btn btnAgain' onClick={props.return}>
						play again
					</button>
				</div>
			</div>
		)
	}
}

function GameBox(props) {
	if (props.clicked === 'play') {
		return (
			<div className='gameBox gameBoxBg'>
				<div className='btnBorder paperBorder paperStartPos' onClick={props.ChoicePaper}>
					<button className='btnGame paper'></button>
				</div>

				<div className='btnBorder scissorsBorder scissorsStartPos' onClick={props.ChoiceScissor}>
					<button className='btnGame scissors'></button>
				</div>

				<div className='btnBorder rockBorder rockStartPos' onClick={props.ChoiceRock}>
					<button className='btnGame rock'></button>
				</div>
			</div>
		)
	} else
		return (
			<GameDuel return={props.return} choice={props.clicked} randomChoice={props.randomChoice} winner={props.winner} />
		)
}

class App extends React.Component {
	constructor(props) {
		super(props)
		this.state = { rulesDisplay: 'none', randomChoice: 1, clicked: 'play', score: 0, winner: '' }
	}
	handleReturn() {
		this.setState({ clicked: 'play' })
	}
	handleRuleClick() {
		if (this.state.rulesDisplay == 'none') this.setState({ rulesDisplay: 'block' })
		else this.setState({ rulesDisplay: 'none' })
	}
	handleChoicePaper() {
		this.setState({ clicked: 'paper' })
		const enemyChoice = Math.floor(Math.random() * 3) + 1
		const score = this.state.score
		this.setState({ randomChoice: enemyChoice })
		if (enemyChoice === 1) {
			this.setState({ winner: "it's draw" })
		}
		if (enemyChoice === 2) {
			this.setState({ winner: 'you lose' })
			this.setState({ score: score - 1 })
		}
		if (enemyChoice === 3) {
			this.setState({ winner: 'you win' })
			this.setState({ score: score + 1 })
		}
	}
	handleChoiceScissor() {
		this.setState({ clicked: 'scissor' })
		const enemyChoice = Math.floor(Math.random() * 3) + 1
		const score = this.state.score
		this.setState({ randomChoice: enemyChoice })
		if (enemyChoice === 1) {
			this.setState({ winner: 'you win' })
			this.setState({ score: score + 1 })
		}
		if (enemyChoice === 2) {
			this.setState({ winner: "it's draw" })
		}
		if (enemyChoice === 3) {
			this.setState({ winner: 'you lose' })
			this.setState({ score: score - 1 })
		}
	}
	handleChoiceRock() {
		this.setState({ clicked: 'rock' })
		const enemyChoice = Math.floor(Math.random() * 3) + 1
		const score = this.state.score
		this.setState({ randomChoice: enemyChoice })
		if (enemyChoice === 1) {
			this.setState({ winner: 'you lose' })
			this.setState({ score: score - 1 })
		}
		if (enemyChoice === 2) {
			this.setState({ winner: 'you win' })
			this.setState({ score: score + 1 })
		}
		if (enemyChoice === 3) {
			this.setState({ winner: "it's draw" })
		}
	}

	render() {
		return (
			<div className='App'>
				<header className='App-header'>
					<p className='gameName'>Rock Paper Scissors</p>
					<div className='scoreBox'>
						<p>score</p>
						<div className='score'>{this.state.score}</div>
					</div>
				</header>

				<GameBox
					clicked={this.state.clicked}
					randomChoice={this.state.randomChoice}
					winner={this.state.winner}
					ChoicePaper={() => this.handleChoicePaper()}
					ChoiceScissor={() => this.handleChoiceScissor()}
					ChoiceRock={() => this.handleChoiceRock()}
					return={() => this.handleReturn()}
				/>

				<button
					className='btn btnRules'
					onClick={() => {
						this.handleRuleClick()
					}}>
					Rules
				</button>
				<div
					className='hero'
					style={{ display: this.state.rulesDisplay }}
					onClick={() => {
						this.handleRuleClick()
					}}></div>
				<div className='rulesBox' style={{ display: this.state.rulesDisplay }}>
					<p>rules</p>
					<div className='rulesImg'></div>
					<div
						className='btnClose'
						onClick={() => {
							this.handleRuleClick()
						}}></div>
				</div>
			</div>
		)
	}
}

export default App
