import { database, ref, onValue } from "@/firebase";

const hideLoader = (commit) => {
  return commit("load/setLoader", false, { root: true });
};

const completeValueFromFirebase = (commit, collectionName, commitName) => {
  const collectionRef = ref(database, collectionName);
  onValue(collectionRef, (snapshot) => {
    const data = snapshot.val();
    if (data) hideLoader(commit);
    return commit(commitName, data);
  });
};

export { hideLoader, completeValueFromFirebase };
