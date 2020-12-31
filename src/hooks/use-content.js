import { useState, useEffect, useContext } from 'react'
import { FirebaseContext } from '../context/firebase'

export default function useContent(target) {
    const [content, setContent] = useState([])
    const { firebase } = useContent(FirebaseContext)

    useEffect(() => {
        firebase.
            .firestore()
            .collection(target)
    }, [])
}
