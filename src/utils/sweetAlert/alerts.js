import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const MySwal = withReactContent(Swal);

export function MessageAlert(message) {
  Swal.fire(message);
}
export function QuestionAlert(problem, message) {
  Swal.fire(`${problem}?`, message, 'question');
}
export function MessagePositionAlert(position, message) {
  Swal.fire({
    position: position,
    icon: 'success',
    title: message,
    showConfirmButton: false,
    timer: 1500
  });
}
export function SucessAndConformationAlert(
  isSuccess,
  titel,
  message = ''
) {
  var icon = !!isSuccess ? `success` : `error`;
  Swal.fire({
    icon: icon,
    title: titel,
    text: message
  });
}
export async function DeleteConformationAlert(message) {
  const permission = await Swal.fire({
    title: 'Are you sure?',
    text: message,
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, delete it!'
  });
  if (!!permission) {
    return permission.isConfirmed;
  }
}
