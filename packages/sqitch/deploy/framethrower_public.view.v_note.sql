-- Deploy flipr:framethrower_public.view.v_notes to pg


begin;
  create view framethrower_public.v_note as
  select note.id, note.body, submission_id, note.created_at, note.updated_at, note.status, note.paragraph, note.profile_id, count(note_comment.id) as note_comments from framethrower_public.note left join framethrower_public.note_comment on note_comment.note_id = note.id where note.profile_id != coalesce(current_setting('jwt.claims.id', true), '00000000-0000-0000-0000-000000000000')::uuid group by note.id;
    comment on view framethrower_public.v_note is E'@foreignKey (profile_id) references framethrower_public.profile';
    grant select on framethrower_public.v_note to framethrower_inactive, framethrower_banned, framethrower_anonymous, framethrower_user, framethrower_moderator, framethrower_admin;
commit;
