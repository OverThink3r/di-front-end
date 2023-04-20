import {UserInterface} from "../../interfaces";
import {UsersTableItem} from "./UsersTableItem";
import {LoadingSection} from "../../share/LoadingSection";

interface Props {
  users: UserInterface[]
}
export const UsersTable = ({users}: Props) => {

  return (
    <div className="relative overflow-x-auto">
      <table className="w-full text-sm text-left text-gray-500 ">
        <thead className="text-xs uppercase bg-emerald-700 text-white">
          <tr>
            <th scope="col" className="px-6 py-3"> Id </th>
            <th scope="col" className="px-6 py-3"> Nombre </th>
            <th scope="col" className="px-6 py-3"> Email </th>
            <th scope="col" className="px-6 py-3"> No. Libros </th>
          </tr>
        </thead>
        <tbody>
          {
            users?.map(user => (
              <UsersTableItem {...user} key={user.id} />
            ))
          }
        </tbody>
      </table>
    </div>

  );
};