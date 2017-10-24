var commands = [

    {
		input: 'tail /etc/motd.tail',
		output: "Erro 404 - Página não encontrada.<br>"+
				"Não sei como, mas você entrou dentro da MATRIX! <a href='https://nork.digital'> clique aqui para voltar.</a><br>"
	},{
		input: 'tail -f ./SobreNós',
		output: "TECNOLOGIAS E ESTRATÉGIAS QUE GERAM RESULTADOS!<br>"+
				"Somos uma agência digital, localizada em Indaiatuba, especializada em<br />"+
				"desenvolver marcas, produtos e negócios.<br>"+
				"Confiamos em tecnologias inovadoras, soluções criativas e planejamentos para <br>"+
				"criar estratégias sólidas e duradouras. Atendemos a necessidade e particularidade de cada cliente.<br />"+
                "Você tem uma ideia, empresa ou negócio e precisa alavanca-lo? Nós podemos ajuda-lo!<br />"
	},{
		input: 'Disciplinas --full--',
		output: "Atuamos no desenvolvimento do seu negócio",
		timedOutput: [
				'[ + ]  Desenvolvimento Web ',
				'[ + ]  Marketing Digital ',
				'[ + ]  Design Gráfico '

		]

	},{
		input: 'ls -l ./contato',
		output: '<a target="_blank" href="mailto:hello@nork.digital">Say hello!</a><br> '+
				'<a target="_blank" href="http://facebook.com/norkdigital">Facebook</a><br>'
				

	},{
		input: 'dir root',
		output: 'dir: command not found <br />'
				

	},{
		
		input: 'python sqlmap.py -u "http://api.maps.google"',
		output: 'Trying to connect to server...',
		timedOutput: 
			[
				'Hacking: [#---------] 10%...',
				'Hacking: [##--------] 20%...',
				'Hacking: [###-------] 30%...',
				'Hacking: [####------] 40%...',
				'Hacking: [#####-----] 50%...',
				'Hacking: [######----] 60%...',
				'Hacking: [#######---] 70%...',
				'Hacking: [########--] 80%...',
				'Hacking: [#########-] 90%...',
				'Hacking: [##########] 100%...',
				'<br>[ACCESS GRANTED] <br>user/pass: admin/admin',
				'Never stop hacking! <br>',

			 ]	
	},

]
var commandIndex = 0;
function terminal(){
	inputCommand()
}
function inputCommand(){
	var cmd = commands[commandIndex]
	charIndex = 0
	lineIndex = 0
	$el = $('.prompt')
	$el.append('nork@digital:~$ ').addClass('active');

	var typeText = function(){
		setTimeout(function(){
			console.log(cmd);
			var char = cmd.input[charIndex]
			if (char == undefined) {
				
				$el.append('<br/><span class="output">' + cmd.output + '</span><br/>');
      			$el.removeClass('active');
      			setTimeout(function(){
					if (cmd.hasOwnProperty('timedOutput')) {
						typeTimedText()
					}else{
						inputCommand(++commandIndex)
					}
					
      			}, 1000)
				return
			}
			
			$el.append(char)
			charIndex++
			typeText()

			
		}, Math.round(Math.random() * 150) + 25)
	}
	var typeTimedText = function(){

		setTimeout(function(){
			text = cmd.timedOutput[lineIndex]
			if (text == undefined) {
				$el.append('<br>')
				inputCommand(++commandIndex)

				return
			}
			$el.append('<span class="output">' + text + '</span><br/>');
      		$el.removeClass('active');
      		lineIndex++;
      		typeTimedText();

		}, Math.round(Math.random() * 550) + 25)
		return
	}
	typeText()
}
terminal();












