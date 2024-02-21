import React, { useState, useEffect } from 'react';
import { demoData } from './App';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import InstallPWAButton from './InstallPwa';

const AviatorGame = () => {
    const [show, setShow] = useState(true);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    // const [altitude, setAltitude] = useState(1);
    // const [crashed, setCrashed] = useState(false);
    // const [bettingAmount, setBettingAmount] = useState(demoData)
    // const [totalBetAmount, setTotalBetAmount] = useState(demoData.reduce((total, item) => total + parseInt(item.amount), 0))
    // const [exitAmountTotal, setExitAmountTotal] = useState(0)
    // const [liability, setLiability] = useState(0)

    // // Simulate the plane's flight
    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         if (!crashed) {
    //             setAltitude((prevAltitude) => (prevAltitude + 0.1));
    //         }
    //     }, 40);

    //     return () => clearInterval(interval);
    // }, [crashed]);

    // const crashPlane = () => {
    //     setCrashed(true)
    //     const currentBalance = localStorage.getItem('wallet')
    //     localStorage.setItem('wallet', parseFloat(currentBalance) + (totalBetAmount - exitAmountTotal))
    //     setAltitude(1)
    //     setExitAmountTotal(0)
    //     setBettingAmount(demoData)
    //     setTimeout(() => {
    //         setCrashed(false)
    //     }, 5000);
    // }

    // const exitUser = (id) => {
    //     setBettingAmount(prevData => (
    //         prevData.map(item => (
    //             item.id === id ? { ...item, status: !item.status, exitAmount: item.amount * altitude } : item
    //         ))
    //     ))
    // }

    // // Handle crash
    // useEffect(() => {
    //     let amt = 0
    //     bettingAmount.map(item => item.status ? amt = amt + (item.amount * altitude) : "")
    //     setLiability(amt)
    //     if (altitude > 10) {
    //         crashPlane();
    //     }
    // }, [altitude]);

    // useEffect(() => {
    //     const total = bettingAmount.reduce((total, item) => total + parseInt(item.exitAmount), 0)
    //     setExitAmountTotal(total)
    //     console.log(bettingAmount)
    // }, [bettingAmount])

    const [supportsPWA, setSupportsPWA] = useState(false);
    const [promptInstall, setPromptInstall] = useState(null);

    useEffect(() => {
        const handler = e => {
            e.preventDefault();
            console.log("we are being triggered :D");
            setSupportsPWA(true);
            setPromptInstall(e);
        };
        window.addEventListener("beforeinstallprompt", handler);

        return () => window.removeEventListener("transitionend", handler);
    }, []);
    const onClick = evt => {
        evt.preventDefault();
        if (!promptInstall) {
            return;
        }
        promptInstall.prompt();
    };
    //   if (!supportsPWA) {
    //     return null;
    //   }


    return (
        <>
            <div className="grid grid-cols-4 h-80">
                {/* <div className="flex justify-center items-center bg-green-400">
                    {
                        crashed ? <>
                            <h3 className='text-white text-2xl font-bold'>
                                Plane Crashed
                            </h3>
                        </> :
                            <h3 className='text-4xl font-bold'>{altitude.toFixed(2)} X</h3>
                    }
                </div>
                <div>
                    {
                        !crashed && bettingAmount.map(item => {
                            return (
                                <div className="px-5 py-2 flex justify-between border-b-2 items-center" key={item.id}>
                                    <h3 className='text-xl font-bold p-3'>{item.user}</h3>
                                    <h3 className='text-xl font-bold p-3'>{!item.status && (item.exitAmount).toFixed(2)}</h3>
                                    <h3 className='text-xl font-bold'>{item.status && (item.amount * altitude).toFixed()}</h3>
                                    {
                                        item.status &&
                                        <button className='bg-red-500 p-3 font-bold text-white hover:bg-red-800 transition-all' onClick={e => exitUser(item.id)}>Exit Amount</button>
                                    }
                                </div>
                            )
                        })
                    }
                </div>
                <div className='m-3'>
                    <div className="flex p-3 justify-between rounded-lg bg-green-300 my-3 px-5">
                        <h2 className='text-xl font-bold'>Total Betting Amount :</h2>
                        <h2 className='text-xl font-bold'>{totalBetAmount}</h2>
                    </div>
                    <div className="flex p-3 justify-between rounded-lg bg-green-300 my-3 px-5">
                        <h2 className='text-xl font-bold'>Total Exit Amount :</h2>
                        <h2 className='text-xl font-bold'>{bettingAmount.reduce((total, item) => total + parseInt(item.exitAmount), 0)}</h2>
                    </div>
                    <div className={`flex p-3 justify-between rounded-lg ${(totalBetAmount - exitAmountTotal) < 0 ? 'bg-red-300' : 'bg-green-300'} my-3 px-5`}>
                        <h2 className='text-xl font-bold'>Total Profit Loss :</h2>
                        <h2 className='text-xl font-bold'>{totalBetAmount - exitAmountTotal}</h2>
                    </div>
                    <div className="flex p-3 justify-between rounded-lg bg-green-300 my-3 px-5">
                        <h2 className='text-xl font-bold'>Total Liablity :</h2>
                        <h2 className='text-xl font-bold'>{liability.toFixed(2)}</h2>
                    </div>
                    <div className="flex p-3 justify-between rounded-lg bg-green-300 my-3 px-5">
                        <h2 className='text-xl font-bold'>Total Balance :</h2>
                        <h2 className='text-xl font-bold'>{localStorage.getItem('wallet')}</h2>
                    </div>
                </div> */}
                <button className='p-3 bg-green-300' onClick={onClick}>Install App</button>
                <InstallPWAButton></InstallPWAButton>
            </div>
            <div className="grid grid-cols-1 my-3">
            </div>
            <Modal show={true} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
        // <div>
        //   <h1>Aviator Game</h1>
        //   <p>Altitude: {altitude} meters</p>
        //   {crashed ? (
        //     <p>Plane crashed! 😢</p>
        //   ) : (
        //     <button onClick={() => setCrashed(true)}>Crash</button>
        //   )}
        // </div>
    );
};

export default AviatorGame;
