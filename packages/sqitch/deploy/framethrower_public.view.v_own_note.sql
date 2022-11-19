
begin;
  create view framethrower_public.v_own_note as
  select note.id, note.body, note.status, submission_id, note.created_at, note.updated_at, paragraph, note.profile_id, count(note_comment.id) as note_comments from framethrower_public.note left join framethrower_public.note_comment ON note_comment.note_id = note.id where note.profile_id = current_setting('jwt.claims.id', true)::uuid group by note.id;
    comment on view framethrower_public.v_own_note is E'@foreignKey (profile_id) references framethrower_public.profile';
    grant select on framethrower_public.v_own_note to framethrower_inactive, framethrower_banned, framethrower_anonymous, framethrower_user, framethrower_moderator, framethrower_admin;
commit;