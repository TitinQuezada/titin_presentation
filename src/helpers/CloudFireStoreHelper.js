import firebase from 'firebase/app'
import 'firebase/firestore'

export const GetAllDocuments = async (collectionName) => {
    const documents = await firebase.firestore().collection(collectionName).get();

    return buildDocuments(documents.docs);
};

export const GetPaginatedDocuments = async (collectionName, numberOfRecors, page) => {
    let documents = [];

    const collection = await firebase.firestore().collection(collectionName).get();

    if (page === 1) {
        documents = await firebase.firestore().collection(collectionName).limit(numberOfRecors).get();
    }
    else {
        const limit = numberOfRecors * page;
        const documentSnapshots = await firebase.firestore().collection(collectionName).limit(limit).get();
        const lastVisible = documentSnapshots.docs[documentSnapshots.docs.length - 1];

        documents = await firebase.firestore().collection(collectionName).limit(numberOfRecors).startAt(lastVisible).get();
    }

    return { documents: buildDocuments(documents.docs), documentsNumber: collection.size }
}

const buildDocuments = (documents) => {
    return documents.map(document => ({ id: document.id, ...document.data() }));
};

export const GetDocument = () => { };

export const AddDocument = async (collectionName, document) => {
    await firebase.firestore().collection(collectionName).add(document);
};

export const UpdateDocument = () => { };

export const DeleteDocument = async (collectionName, documentId) => {
    const documentReference = firebase.firestore().collection(collectionName).doc(documentId);
    const document = await documentReference.get();

    if (document.exists) {
        await documentReference.delete();
    }
};

