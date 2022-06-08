import { useEffect, useState } from "react";
// firebase
import { projectFirestore } from "../firebase/config";

export const useCollection = (collection) => {
    const [documents, setDocuments] = useState(null)
    const [isPending, setIsPending] = useState(false)
    const [error, setError] = useState(null)

    useEffect(() => {
        setIsPending(true)

        const unsub = projectFirestore.collection(collection).onSnapshot((snapshot) => {
            if (snapshot.empty) {
                setError("Could not fetch docs or there is no such collection in firebase. Try adding very first document to the collection.")
                setIsPending(false)
            } else {
                let results = [];
                snapshot.docs.forEach(doc => {
                    results.push({ ...doc.data(), id: doc.id })
                });

                setDocuments(results)
                setIsPending(false)
                setError(null)
            }
        }, (err) => {
            console.log(err);
            setError("Failed to get the collection")
            setIsPending(false)
        });

        return () => unsub();

    }, [collection])

    return { documents, isPending, error }
}