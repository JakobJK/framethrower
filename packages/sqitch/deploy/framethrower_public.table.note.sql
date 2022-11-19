-- Deploy flipr:framethrower_public.table.note to pg

BEGIN;

  CREATE TABLE framethrower_public.note(
    id TEXT PRIMARY KEY NOT NULL DEFAULT framethrower_hidden.generate_short_unique_id('framethrower_public.note', 12),
    submission_id TEXT NOT NULL REFERENCES framethrower_public.submission(id) ON DELETE CASCADE,
    body TEXT not null,
    paragraph TEXT not null,
    created_at TIMESTAMPTZ NOT NULL default NOW(),
    updated_at TIMESTAMPTZ NOT NULL default NOW(),
    profile_id uuid REFERENCES framethrower_public.profile(id),
    status framethrower_public.publish_status not null default 'published'
  );

  create unique index unique_note_submission_id_profile_id
  on framethrower_public.note (profile_id, submission_id);

  grant select on table framethrower_public.note TO framethrower_inactive, framethrower_banned, framethrower_anonymous, framethrower_user, framethrower_moderator, framethrower_admin;
  grant insert, update, delete on table framethrower_public.note to framethrower_user, framethrower_moderator, framethrower_admin;

COMMIT;