import { twMerge } from 'tailwind-merge'

type SkeletonProps = React.ComponentProps<'div'>

export function Skeleton({ className, ...props }: SkeletonProps) {
  return (
    <div
      className={twMerge('animate-pulse rounded-md bg-zinc-50/10', className)}
      {...props}
    />
  )
}
