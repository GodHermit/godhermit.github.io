import './scss/app.scss';

function App() {
    return (
        <>
            <div className='card'>
                <div className='card-content'>
                    <h1 className='card-headline'>About me</h1>
                    <table className='card-table'>
                        <tbody>
                            <tr>
                                <td colSpan={2} className='card-table--divider'><hr /></td>
                            </tr>
                            <tr>
                                <td><b>Name:&nbsp;</b></td>
                                <td>Oleh Proidakov</td>
                            </tr>
                            <tr>
                                <td><b>Age:&nbsp;</b></td>
                                <td>{new Date(Date.now() - new Date('6 Nov 2003').getTime()).getUTCFullYear() - 1970}</td>
                            </tr>
                            <tr>
                                <td colSpan={2} className='card-table--divider'><hr /></td>
                            </tr>
                            <tr>
                                <td><b>Email:&nbsp;</b></td>
                                <td><a href='mailto:first.god.hermit@gmail.com' target='_blank'>Link</a></td>
                            </tr>
                            <tr>
                                <td colSpan={2} className='card-table--divider'><hr /></td>
                            </tr>
                            <tr>
                                <td><b>GitHub:&nbsp;</b></td>
                                <td><a href='https://github.com/GodHermit' target='_blank' rel='nofollow noopener noreferrer'>@GodHermit</a></td>
                            </tr>
                            <tr>
                                <td><b>CodePen:&nbsp;</b></td>
                                <td><a href='https://codepen.io/GodHermit' target='_blank' rel='nofollow noopener noreferrer'>@GodHermit</a></td>
                            </tr>
                            <tr>
                                <td colSpan={2} className='card-table--divider'><hr /></td>
                            </tr>
                            <tr>
                                <td><b>LinkedIn:&nbsp;</b></td>
                                <td><a href='https://www.linkedin.com/in/oleh-proidakov/' target='_blank' rel='nofollow noopener noreferrer'>Link</a></td>
                            </tr>
                            <tr>
                                <td><b>Telegram:&nbsp;</b></td>
                                <td><a href='https://t.me/GodHermit' target='_blank' rel='nofollow noopener noreferrer'>@GodHermit</a></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}

export default App;