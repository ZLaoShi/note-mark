import { ActionButton, ActionButtonProps } from '@/components'
import { FaRegTrashCan } from 'react-icons/fa6'

export const DeleteNoteButton = ({ ...prpos }: ActionButtonProps) => {
  return (
    <ActionButton {...prpos}>
      <FaRegTrashCan className="w-4 h-4 text-zinc-300"></FaRegTrashCan>
    </ActionButton>
  )
}
