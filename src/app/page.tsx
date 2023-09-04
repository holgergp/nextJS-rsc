import Link from "next/link";

export default function Home() {
  return (
    <div>
      <ol>
        <li>
          <Link
            className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
            href={"/fall1"}
          >
            <p> Fall 1: Client und Server nebeneinander ✅</p>
          </Link>
        </li>
        <li>
          <Link
            className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
            href={"/fall2"}
          >
            <p> Fall 2: Server Component bekommt Client Component per Prop ✅</p>
          </Link>
        </li>
        <li>
          <Link
            className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
            href={"/fall3"}
          >
            <p> Fall 3: Client Component bekommt Server Component per Prop ✅</p>
          </Link>
        </li>
        <li>
          <Link
            className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
            href={"/fall4"}
          >
               <p> Fall 4: Server Component importiert Client Component ✅</p>
          </Link>
        </li>
        <li>
          <Link
            className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
            href={"/fall5"}
          >
               <p> Fall 5: Client Component importiert Server Component ❌</p>
          </Link>
        </li>
      </ol>
    </div>
  );
}
