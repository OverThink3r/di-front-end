import {UserInterface} from "../../interfaces";

export const UsersTableItem = (user: UserInterface) => {
  const {id, name, email, booksCount} = user
  return (

    <tr className="border-b border-gray-400 bg-slate-200 text-slate-900">
      <th scope="row" className="px-6 py-4 font-medium ">
        {id}
      </th>
      <td className="px-6 py-4">
        {name}
      </td>
      <td className="px-6 py-4">
        {email}
      </td>
      <td className="px-6 py-4">
        {booksCount}
      </td>
    </tr>
  );
};