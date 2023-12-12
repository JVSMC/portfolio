import { useRef, useState } from 'react';
import { Toaster, toast } from 'sonner';
import emailjs from '@emailjs/browser';

import '../Formcontact/FormContact.css';

function FormContact() {

    const form = useRef();


    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!name || !email || !message) {
            toast.warning('Ups! Hay campos vacios en el formulario');
        } else {
            const sendEmailPromise = () => new Promise((resolve, reject) => {
                emailjs.sendForm("service_mzqwr9g", "template_8w15dud", form.current, "Sg72phZip1nRghifu")
                    .then((result) => {
                        resolve(result);
                        setName('');
                        setEmail('');
                        setMessage('');
                    })
                    .catch((error) => {
                        reject(error);
                    });
            })

            toast.promise(sendEmailPromise, {
                loading: 'Enviando correo...',
                success: (result) => {
                    return `${result.text}, Tu correo ha sido enviado`;
                },
                error: (error) => {
                    return `Ups! Ha ocurrido un error: ${error.text}`
                }
              });
        }
    }



    return (
        <>
            <Toaster
                richColors
                position="top-center"
            />
            <form ref={form} onSubmit={handleSubmit}>
                <input type="text" name="user_name" placeholder='José Javier Martínez Cano'
                    className='border-light round bk-w'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <input type="email" name="user_email" placeholder="javssmar@gmail.com"
                    className='border-light round bk-w'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                {/* <input type="tel" name="user_phone" placeholder=" +52 333 555 5555"
                className='border-light round bk-w'
            /> */}
                <textarea name="message" placeholder="Tu voz importa. Comenta cómo puedo ayudarte." rows="6"
                    className='border-light round bk-w'
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                ></textarea>

                <button type="submit" value='Send' className=' bk-w border-light cta round semi-bold'>Enviar</button>
            </form>
        </>
    );
}

export default FormContact;