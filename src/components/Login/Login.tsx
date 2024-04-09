// 'use client'
import styles from './login.module.scss'
import { useState, useContext } from 'react'
import Modal from '../Modal/Modal'
import {AuthContext}  from "../../context/index";


const Login = () => {
	 // @ts-ignore:
	const {isAuth, setIsAuth} = useContext(AuthContext);
	const [modal, setModal] = useState(false)
	const [register, setRegister] = useState(true)


	const loginHandler = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setIsAuth(true)
		localStorage.setItem('auth', 'true')
		setModal(false)
	}
	const registerHandler = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setIsAuth(true)
		localStorage.setItem('auth', 'true')
		setModal(false)
	}

	const logout = () => {
			if(isAuth) {
				setIsAuth(false)
				localStorage.removeItem('auth')
			}
			else {setModal(true)}
	}

	return (
		<>
			<button 
			className={`${styles.button} ${!isAuth ?  styles.litebutton : ''}`}
			onClick={logout}
			
			>
				<svg
					className={`${styles.svg} ${isAuth ? styles.svgactive : ''}`}
					width='18'
					height='18'
					viewBox='0 0 18 18'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
				>
					<path
						d='M17.1601 9.10057H7.12598'
						stroke='white'
						strokeWidth='1.5'
						strokeLinecap='round'
						strokeLinejoin='round'
					/>
					<path
						d='M14.7212 6.67059L17.1612 9.10059L14.7212 11.5306'
						stroke='white'
						strokeWidth='1.5'
						strokeLinecap='round'
						strokeLinejoin='round'
					/>
					<path
						d='M12.6342 5.35823C12.3592 2.3749 11.2425 1.29156 6.80082 1.29156C0.883322 1.29156 0.883322 3.21656 0.883322 8.9999C0.883322 14.7832 0.883322 16.7082 6.80082 16.7082C11.2425 16.7082 12.3592 15.6249 12.6342 12.6416'
						stroke='white'
						strokeWidth='1.5'
						strokeLinecap='round'
						strokeLinejoin='round'
					/>
				</svg>
				<span className={styles.text}>
					{isAuth ? 'Logout' : 'Login'}
				</span>
				
			</button>
			<Modal openModal={modal} setModal={setModal}>
				<div className={styles.content}>

					<div className={styles.auth}>
						<button className={`${styles.authBtn} ${register ? styles.authBtnActive : ''}`} onClick={() => setRegister(true)}>Login</button>
						<button className={`${styles.authBtn} ${!register ? styles.authBtnActive : ''}`} onClick={() => setRegister(false)}>Register</button>
					</div>

					{
						register ?
						<form className={styles.form} onSubmit={(e) => loginHandler(e)}>
								{/* <label htmlFor="name" className={styles.label}>Name</label>
								<input type="text" className={styles.input} name='name' placeholder='Name' /> */}
								<label htmlFor="email" className={styles.label}>Email</label>
								<input required type="email" className={styles.input} name='email' placeholder='Email' />
								<label htmlFor="pass" className={styles.label}>Password</label>
								<input required type="text" className={styles.input} name='pass' placeholder='Password' />
								
								<button className={styles.btn} >Login</button>
		
						</form>
						:
						<form className={styles.form} onSubmit={(e) => registerHandler(e)}>
								<label htmlFor="name" className={styles.label}>Username</label>
								<input type="text" className={styles.input} name='name' placeholder='Name' required/>
								<label htmlFor="email" className={styles.label}>Email</label>
								<input required type="email" className={styles.input} name='email' placeholder='Email' />
								<label htmlFor="pass" className={styles.label}>Password</label>
								<input required type="text" className={styles.input} name='pass' placeholder='Password' />
								
								<button className={styles.btn}>Register</button>
		
						</form>
					}

					<button className={styles.close} onClick={() => setModal(false)}>&#x2718;</button>
				</div>
			</Modal>
		</>
	)
}

export default Login;
