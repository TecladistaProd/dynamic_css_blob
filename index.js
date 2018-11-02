$ = document.querySelector.bind(document)
const css = `
	* {
		box-sizing: border-box;
	}
	body {
		padding: 1rem 3rem;
		background-color: #23fcac;
	}
    p {
		margin: 2rem 0;
		background: #23cacf;
		padding: 1rem;
        border-radius: 10px;
        transition: all ease-in-out 350ms;
    }
    p:hover {
        background: #5f5f7c;
        color: #fff;
    }
	h1 {
		font-size: 2.5rem;
	}
`
const cssBlob = new Blob([css], {type: 'text/css'})

$('head link').href = URL.createObjectURL(cssBlob)

$('textarea').value = css

setTimeout(()=> $('[no-display]').removeAttribute('no-display'), 50)


$('textarea').addEventListener('keyup', () => {

	let bb = new Blob([$('textarea').value], {type: 'text/css'})

	$('head link').href = URL.createObjectURL(bb)
})