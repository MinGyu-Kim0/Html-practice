var x = 5
var y = 10

if (x < y) {
	console.log('True면 출력')
	} else if( x+15 > y ) {
    console.log('True면 출력')
	} else {
	console.log('위에 if문이 실행안되면(False) 출력')
	}

switch (x + y) { //표현식엔 함수가 들어갈 수도 있음!
	case 15:
		console.log('표현식의 값이 case의 값과 같으면 출력')
		break;
	case 20:
		console.log('표현식의 값이 case의 값과 같으면 출력')
		break;
	default:
		console.log('어떤 case에도 속하지 않으면 출력')
	}