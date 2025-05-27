import { ActionButton, ActionButtonProps } from '@/components'
import { deletNoteAtom } from '@/store'
import { useSetAtom } from 'jotai'
import { FaRegTrashCan } from 'react-icons/fa6'

export const DeleteNoteButton = ({ ...prpos }: ActionButtonProps) => {
  const deleteNote = useSetAtom(deletNoteAtom)

  const handleNoteSelect = async () => {
    await deleteNote()
  }

  return (
    <ActionButton onClick={handleNoteSelect} {...prpos}>
      <FaRegTrashCan className="w-4 h-4 text-zinc-300"></FaRegTrashCan>
    </ActionButton>
  )
}
