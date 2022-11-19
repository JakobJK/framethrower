insert into framethrower_hidden.issued_tokens
(profile_id, token, token_type, expire_at)
values
($1, $2, 'access_token', now() + (interval '$4 seconds')),
($1, $3, 'refresh_token', now() + (interval '$5 seconds'))