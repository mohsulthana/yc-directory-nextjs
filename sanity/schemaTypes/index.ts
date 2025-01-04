import { author } from '@/sanity/schemaTypes/author'
import { playlist } from '@/sanity/schemaTypes/playlist'
import { startup } from '@/sanity/schemaTypes/startup'
import { type SchemaTypeDefinition } from 'sanity'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [author, startup, playlist],
}
