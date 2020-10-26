import firebase from 'firebase/app'
import 'firebase/firestore'

export const GetAllDocuments = async (collectionName) => {
    const documentsResult = [];

    const documents = await firebase.firestore().collection(collectionName).get();

    documents.forEach(document => {
        documentsResult.push({ id: document.id, ...document.data() });
    });

    return documentsResult;
};

export const GetDocument = () => { };

export const AddDocument = async (collectionName, document) => {
    await firebase.firestore().collection(collectionName).add(document);
};

export const UpdateDocument = () => { };

export const DeleteDocument = () => { };

