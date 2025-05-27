import { ActionButton, ActionButtonProps } from '@/components'
import { createEmptyNoteAtom } from '@renderer/store'
import { useSetAtom } from 'jotai'
import { PiFileMdBold } from 'react-icons/pi'

export const NewNoteButton = ({ ...props }: ActionButtonProps) => {
  const createEmptyNote = useSetAtom(createEmptyNoteAtom)

  const handleNoteSelect = async () => {
    await createEmptyNote()
  }

  return (
    <ActionButton onClick={handleNoteSelect} {...props}>
      <PiFileMdBold className="w-4 h-4 text-zinc-300"></PiFileMdBold>
    </ActionButton>
  )
}
