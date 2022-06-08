import { useState, useEffect } from "react";
// firestore
import { projectFirestore } from "../firebase/config";

export const useDocument = (collection, id) => {
    const [document, setDocument] = useState(null)
    const [isPending, setIsPending] = useState(false)
    const [error, setError] = useState(null)

    useEffect(() => {
        setIsPending(true)

        const ref = projectFirestore.collection(collection).doc(id)

        const unsub = ref.onSnapshot((snapshot) => {
            if (snapshot.empty) {
                setError("Such document doesn't exist")
                setIsPending(false)
            } else {
                setDocument({ ...snapshot.data(), id: snapshot.id })
                setIsPending(false)
                setError(null)
            }
        }, (err) => {
            console.log(err)
            setIsPending(false)
            setError("Failed to get the document")
        })

        return () => unsub()
    }, [collection, id]);

    return { document, isPending, error }
}