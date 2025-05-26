import { ActionButton, ActionButtonProps } from '@/components'
import { PiFileMdBold } from 'react-icons/pi'

export const NewNoteButton = ({ ...props }: ActionButtonProps) => {
  return (
    <ActionButton {...props}>
      <PiFileMdBold className="w-4 h-4 text-zinc-300"></PiFileMdBold>
    </ActionButton>
  )
}
