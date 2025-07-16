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
    }
    function Restart() {
        const tds = document.getElementsByClassName('tds');
        for (let i = 0; i < tds.length; i++) {
            tds[i].innerHTML = '';
            tds[i].style.backgroundColor = ''; // reset background
        }
        prev = '';
    }

    // Winner logic
    function checkWinner(tds) {
        if (tds[0].innerHTML && tds[0].innerHTML === tds[3].innerHTML && tds[3].innerHTML === tds[6].innerHTML) {
            tds[0].style.backgroundColor = 'lightgreen';
            tds[3].style.backgroundColor = 'lightgreen';
            tds[6].style.backgroundColor = 'lightgreen';
            return true;
        }
        if (tds[1].innerHTML && tds[1].innerHTML === tds[4].innerHTML && tds[4].innerHTML === tds[7].innerHTML) {
            tds[1].style.backgroundColor = 'lightgreen';
            tds[4].style.backgroundColor = 'lightgreen';
            tds[7].style.backgroundColor = 'lightgreen';
            return true;
        }
        if (tds[2].innerHTML && tds[2].innerHTML === tds[5].innerHTML && tds[5].innerHTML === tds[8].innerHTML) {
            tds[2].style.backgroundColor = 'lightgreen';
            tds[5].style.backgroundColor = 'lightgreen';
            tds[8].style.backgroundColor = 'lightgreen';
            return true;
        }
        if (tds[0].innerHTML && tds[0].innerHTML === tds[1].innerHTML && tds[1].innerHTML === tds[2].innerHTML) {
            tds[0].style.backgroundColor = 'lightgreen';
            tds[1].style.backgroundColor = 'lightgreen';
            tds[2].style.backgroundColor = 'lightgreen';
            return true;
        }
        if (tds[3].innerHTML && tds[3].innerHTML === tds[4].innerHTML && tds[4].innerHTML === tds[5].innerHTML) {
            tds[3].style.backgroundColor = 'lightgreen';
            tds[4].style.backgroundColor = 'lightgreen';
            tds[5].style.backgroundColor = 'lightgreen';
            return true;
        }
        if (tds[6].innerHTML && tds[6].innerHTML === tds[7].innerHTML && tds[7].innerHTML === tds[8].innerHTML) {
            tds[6].style.backgroundColor = 'lightgreen';
            tds[7].style.backgroundColor = 'lightgreen';
            tds[8].style.backgroundColor = 'lightgreen';
            return true;
        }
        if (tds[0].innerHTML && tds[0].innerHTML === tds[4].innerHTML && tds[4].innerHTML === tds[8].innerHTML) {
            tds[0].style.backgroundColor = 'lightgreen';
            tds[4].style.backgroundColor = 'lightgreen';
            tds[8].style.backgroundColor = 'lightgreen';
            return true;
        }
        if (tds[2].innerHTML && tds[2].innerHTML === tds[4].innerHTML && tds[4].innerHTML === tds[6].innerHTML) {
            tds[2].style.backgroundColor = 'lightgreen';
            tds[4].style.backgroundColor = 'lightgreen';
            tds[6].style.backgroundColor = 'lightgreen';
            return true;
        }
        return false;
    }

    return (
        <div style={styles.container}>
            <h1 style={styles.heading}> TicTacToe</h1>
            <div style={styles.boardWrapper}>
                <table style={styles.board}>
                    <tbody>
                        <tr>
                            <td id="td1" className="tds" onClick={() => OnclickMiddle(1)}
                                style={{ ...styles.cellStyle, borderRight: '2px solid #444', borderBottom: '2px solid #444' }}></td>
                            <td id="td2" className="tds" onClick={() => OnclickMiddle(2)}
                                style={{ ...styles.cellStyle, borderRight: '2px solid #444', borderBottom: '2px solid #444' }}></td>
                            <td id="td3" className="tds" onClick={() => OnclickMiddle(3)}
                                style={{ ...styles.cellStyle, borderBottom: '2px solid #444' }}></td>
                        </tr>
                        <tr>
                            <td id="td4" className="tds" onClick={() => OnclickMiddle(4)}
                                style={{ ...styles.cellStyle, borderRight: '2px solid #444', borderBottom: '2px solid #444' }}></td>
                            <td id="td5" className="tds" onClick={() => OnclickMiddle(5)}
                                style={{ ...styles.cellStyle, borderRight: '2px solid #444', borderBottom: '2px solid #444' }}></td>
                            <td id="td6" className="tds" onClick={() => OnclickMiddle(6)}
                                style={{ ...styles.cellStyle, borderBottom: '2px solid #444' }}></td>
                        </tr>
                        <tr>
                            <td id="td7" className="tds" onClick={() => OnclickMiddle(7)}
                                style={{ ...styles.cellStyle, borderRight: '2px solid #444' }}></td>
                            <td id="td8" className="tds" onClick={() => OnclickMiddle(8)}
                                style={{ ...styles.cellStyle, borderRight: '2px solid #444' }}></td>
                            <td id="td9" className="tds" onClick={() => OnclickMiddle(9)}
                                style={styles.cellStyle}></td>
                        </tr>

                    </tbody>
                </table>
            </div>
            {winner && (
                <p style={styles.winnerText}>{winner}</p>
            )}
            <div>
                <button onClick={Restart} style={styles.restartBtn}>Restart</button>
            </div>

        </div>
    );
}

const styles = {
    container: {
        minHeight: '100vh',
        backgroundColor: '#f0f8ff',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        // paddingTop: '30px',
        fontFamily: 'Arial, sans-serif',
        justifyContent: 'center',       // center everything vertically too

    },
    heading: {
        fontSize: '50px',
        fontWeight: 'bold',
        color: '#333',
        marginBottom: '30px',
        textShadow: '1px 1px 2px #aaa'
    },
    boardWrapper: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    board: {
        borderCollapse: 'collapse',
    },
    cellStyle: {
        height: '100px',
        width: '100px',
        // border: '2px solid #444',
        fontSize: '2.5rem',
        cursor: 'pointer',
        textAlign: 'center',
        verticalAlign: 'middle',
        transition: 'background-color 0.3s ease'
    },
    winnerText: {
        fontSize: '28px',
        fontWeight: '600',
        color: 'green',
        marginTop: '20px',
        textShadow: '1px 1px 2px #ccc'
    },
    restartBtn: {
        backgroundColor: '#007BFF',
        color: '#fff',
        padding: '10px 25px',
        border: 'none',
        borderRadius: '8px',
        fontSize: '18px',
        marginTop: '10px',
        cursor: 'pointer',
    }
}

export default TicTacToe;
