import type { Image } from '@/general/viewModel'

export function getImageURL(image:Image):URL{
  return new URL(image.src, import.meta.url)
}