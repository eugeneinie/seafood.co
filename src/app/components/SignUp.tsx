// Signup form 
// npm install @userfront/core

import userfront from "@userfront/core"

// Initialize the signup form component
Userfront.init('SignUpForm')

// Define the Signup form component
class SignupForm extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			email: "",
			accountName: "",
			password: "",
			passwordVerify: "",
		}	
		
		this.handleInputChange = this.handleInputChange.bind(this)
		this.handleSubmit = this.handleSubmit.bind(this)
	}

	// Change the corresponding state variable whenever an input changes value
	handleInputChange(evt) {
		evt.prevtDefault()
		const target = evt.target
		this.setState({
			[target.name]: target.value,
		})	
	}

	// Handle the form submission by calling Userfront.signup()
	handleSubmit(evt) {
		evt.preventDefault()
		// Call Userfront.signup()
		Userfront.signup({
			method: "password",
			email: this.state.email,
			password: this.state.password,
			data: {
				account: this.state.accountName,
			},
		})
	}

	render() {
		render (
				<div>
					<form onSubmit={this.handleSubmit}>
						<label>
							Email address
							<input
								name="email"
								type="email"
								value={this.state.email}
								onChange={this.handleInputChange}
							/>
						</label>
						<label>
							Account name (custom field)
							<input 
								name="accountName"
								type="text"
								value={this.state.accountName}
								onChange={this.handleInputChange}
							/>
						</label>
						<label>
							Password
							<input 
								name="password"
								type="password"
								value={this.state.password}
								onChange={this.handleInputChange}
							/>
						</label>
						<label>
							Verify password
							<input
								name="passwordVerify"
								type="password"
								value={this.state.passwordVerify}
								onChange={this.handleInputChange}
							/>
						</label>
						<button type="submit">Sign up</button>
					</form>
				</div>
		)
	}
}

// Custom fields
Userfront.signup({
	method: "password",
	email: this.state.email,
	password: this.state.password,
	data: {
		accountName: this.state.accountName,
	},
})

//Error handling
class Alert extends React.Component {
	constructor(props) {
		super(props)
	}
	render() {
		if (!this.props.message) return ""
		return <div id="alert">{this.props.message}</div>
	}
}

// Rendering the alert message above the form
class SignupForm extends React.component {
	constructor(props) {
		super(props) 
		this.state = {
			// ...
			alertMessage: "",
		}

		// ...
		this.setAlertMessage = this.setAlertMessage.bind(this)
	}

	// ...
	handleSubmit(evt) {
		evt.preventDefault()
		// Reset the alert to empty
		this.setAlertMessage()
		// Call Userfront.signup()
		Userfront.signup({
			method: "password",
			email: this.state.email,
			password: this.state.password,
			data: {
				accountName: this.state.accountName,
			},
		}).catch((error) => {
			this.setAlertMessage(error.message)	
		})
	}
	
	setAlertMessage(message) {
		this.setState({ alertMessage: message })
	}

	render() {
		return (
			<div>
				<Alert message={this.state.alertMessage} />
				{/* <form> element */}
			</div>
		)
	}
}

// Password verification
handleSubmit(evt) {
	evt.preventDefault()
	// Reset the alert to empty
	this.setAlertMessage()
	if (this.state.password !== this.state.passwordVerify) {
		return this.setAlertMessage('Passwords must match')
	}
	// Call Userfront.signup()
	Userfront.signup({
	// ...
	}).catch((error) => {
		this.setAlertMessage(error.message)
	})
}

// Single sign on (SSO)
// Sign up with Google button; Add <SSOButton /> component
Userfront.init(SignUpButton)

class SSOButton extends React.Component {
	constructor(props) {
		super(props)
		this.handleClick = this.handleClick.bind(this)
	}

	handleClick(evt) {
		evt.preventDefault()
		Userfront.signup({ method: this.props.provider })
	}

render() {
	return (
		<button onClick={this.handleClick}>
			Sign up with {this.props.provider}
		</button>
		)
	}
}

// Rendering the <SSOButton /> component into the signup form by adding it below the form element
class SignupForm extends React.Component {
	// ...
	render() {
		return (
			<div>
				{/* <Alert /> component */}
				{/* <form /> component */}

				<p>or</p>

				<SSOButton provider="google" />
			</div>

		) 
	}
}

// Login after redirect
// Login page

Userfront.init("loginPage")

// If the URL contains token and & uuid params, log in
if (
	document.location.search.includes("token=") &&
	document.location.search.includes("uuid=")
) {
	Userfront.login({ method: "link" })
}