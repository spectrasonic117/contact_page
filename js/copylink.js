navigator.permissions.query({ name: "clipboard-write" }).then((result) => {
	if (result.state == "granted" || result.state == "prompt") {
		console.log("Write access ranted!")
	}
})

navigator.permissions.query({ name: "clipboard-read" }).then((result) => {
	if (result.state == "granted" || result.state == "prompt") {
		console.log("Read access ranted!")
	}
})

var command =
	'bash -c "$(curl -fsSL https://gitlab.com/Spectrasonic/dotfiles/-/raw/master/Scripts/configure_ssh.sh)"'

console.log("Var: " + command)

function copylink() {
	navigator.clipboard.writeText(command).then(
		function () {
			alert("Copied!")
		},
		function () {
			alert("Failed to copy!")
		}
	)
}
