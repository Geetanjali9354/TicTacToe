import { useState } from "react";

function TicTacToe() {
    var prev = '';
    const [gameOver, setGameOver] = useState(false);
    const [winner, setWinner] = useState('');

    function OnclickMiddle(number) {
        if (gameOver) return;

        var GetTd = document.getElementById('td' + number);
        if (GetTd.innerHTML !== '') return;

        prev = GetTd.innerHTML = prev === 'X' ? 'O' : 'X';
        prev = GetTd.innerHTML;

        const tds = document.getElementsByClassName('tds');
        if (checkWinner(tds)) {
            setWinner(`${prev} Wins👌🎉`);
            setGameOver(true);

            setTimeout(() => {
                Restart(tds);
                setGameOver(false);
                setWinner('');
            }, 1500); // 1.5 second baad reset
        }

        // Restart logic
        function Restart(tds) {
            for (let i = 0; i < tds.length; i++) {
                tds[i].innerHTML = '';
            }
            prev = '';
        }

        // Winner logic
        function checkWinner(tds) {
            if (tds[0].innerHTML && tds[0].innerHTML === tds[3].innerHTML && tds[3].innerHTML === tds[6].innerHTML) return true;
            if (tds[1].innerHTML && tds[1].innerHTML === tds[4].innerHTML && tds[4].innerHTML === tds[7].innerHTML) return true;
            if (tds[2].innerHTML && tds[2].innerHTML === tds[5].innerHTML && tds[5].innerHTML === tds[8].innerHTML) return true;
            if (tds[0].innerHTML && tds[0].innerHTML === tds[1].innerHTML && tds[1].innerHTML === tds[2].innerHTML) return true;
            if (tds[3].innerHTML && tds[3].innerHTML === tds[4].innerHTML && tds[4].innerHTML === tds[5].innerHTML) return true;
            if (tds[6].innerHTML && tds[6].innerHTML === tds[7].innerHTML && tds[7].innerHTML === tds[8].innerHTML) return true;
            if (tds[0].innerHTML && tds[0].innerHTML === tds[4].innerHTML && tds[4].innerHTML === tds[8].innerHTML) return true;
            if (tds[2].innerHTML && tds[2].innerHTML === tds[4].innerHTML && tds[4].innerHTML === tds[6].innerHTML) return true;
            return false;
        }
    }

    return (
        <div>
            <h1 style={{ textAlign: 'center', fontSize: '40px' }}> TicTacToe</h1>
            <div style={{ display: 'flex', justifyContent: 'center', height: '60vh', alignItems: 'center', flexDirection: 'column' }}>
                <table style={{ border: '2px solid black', maxWidth: '300px' }}>
                    <tbody>
                        <tr style={{ textAlign: 'center', fontSize: '60px' }}>
                            <td className="tds" id="td1" onClick={() => OnclickMiddle(1)} style={cellStyle}></td>
                            <td className="tds" id="td2" onClick={() => OnclickMiddle(2)} style={cellStyle}></td>
                            <td className="tds" id="td3" onClick={() => OnclickMiddle(3)} style={cellStyle}></td>
                        </tr>
                        <tr style={{ textAlign: 'center', fontSize: '60px' }}>
                            <td className="tds" id="td4" onClick={() => OnclickMiddle(4)} style={cellStyle}></td>
                            <td className="tds" id="td5" onClick={() => OnclickMiddle(5)} style={cellStyle}></td>
                            <td className="tds" id="td6" onClick={() => OnclickMiddle(6)} style={cellStyle}></td>
                        </tr>
                        <tr style={{ textAlign: 'center', fontSize: '60px' }}>
                            <td className="tds" id="td7" onClick={() => OnclickMiddle(7)} style={cellStyle}></td>
                            <td className="tds" id="td8" onClick={() => OnclickMiddle(8)} style={cellStyle}></td>
                            <td className="tds" id="td9" onClick={() => OnclickMiddle(9)} style={cellStyle}></td>
                        </tr>
                    </tbody>
                </table>

                
            </div>
                {winner && (
                    <p style={{  fontSize: '30px', color: 'green',fontWeight:'bold',textAlign:'center' }}>
                        {winner}
                    </p>
                )}
        </div>
    );
}

const cellStyle = {
    height: '100px',
    width: '100px',
    border: '2px solid black',
    fontSize: '2.5rem',
    cursor: 'pointer',
    textAlign: 'center',
    verticalAlign: 'middle'
};

export default TicTacToe;
