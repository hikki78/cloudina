import Dropzone from "@/components/Dropzone"; // Import the 'Dropzone' component
import TableWrapper from "@/components/table/TableWrapper";
import { db } from "@/firebase";
import { FileType } from "@/typings";
import { auth } from "@clerk/nextjs";
import { collection, getDocs } from "firebase/firestore";

async function Dashboard() {
  const { userId } = auth();

  const docsResults = await getDocs(collection(db, "users", userId!, "files"));
  const skeletonFiles: FileType[] = docsResults.docs.map((doc) => ({
    id: doc.id,
    fileName: doc.data().fileName || doc.id,
    fullname: doc.data().fullname,
    timestamp: new Date(doc.data().timestamp?.seconds * 1000) || undefined,
    downloadURL: doc.data().downloadURL,
    size: doc.data().size,
    type: doc.data().type || "", // Fix: Ensure the type property is of type string
  }));

  console.log(skeletonFiles);

  return (
    <div>
      <Dropzone />

      <section>
        <h2>All Files</h2>
        <div>
          {/* TableWrapper */}
          <TableWrapper skeletonFiles={skeletonFiles} />
        </div>
      </section>
    </div>
  );
}

export default Dashboard;
