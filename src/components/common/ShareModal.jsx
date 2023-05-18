import { Box, Modal, Typography, Stack, Link, Button, useTheme } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { setShareModalOpen, setLink } from "../../redux/features/shareModalSlice"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn, faWhatsapp, faFacebook, faTwitter, faReddit} from "@fortawesome/free-brands-svg-icons";
import {CopyToClipboard} from "react-copy-to-clipboard"
import { toast } from "react-toastify";
import Logo from "./Logo";
import uiConfigs from "../../configs/ui.configs";



const ShareModal = () => {
    const theme = useTheme()
    const { shareModalOpen } = useSelector((state) => state.shareModal)
    const { link } = useSelector((state) => state.shareModal)
    const dispatch = useDispatch();
    const title = "Check out this movie"
    const handleClose = () => {dispatch(setShareModalOpen(false)); dispatch(setLink(""));};
    const showMessage = () => {
        toast.success("Copied Link to clipboard")
    }
     
    return (
      <>
        <Modal open={shareModalOpen} onClose={handleClose}>
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "100%",
              maxWidth: "500px",
              padding: 4,
              outline: "none",
            }}
          >
            <Box
              sx={{
                padding: 4,
                boxShadow: 24,
                backgroundColor: "background.paper",
              }}
            >
              <Box sx={{ textAlign: "center", marginBottom: "0.1rem" }}>
                <Logo />
              </Box>
              <Typography
                sx={{
                  textAlign: "center",
                  marginBottom: "2rem",
                  fontSize: "1.3rem",
                }}
              >
                Share on
              </Typography>
              <Stack
                direction="row"
                spacing={{ xs: 1.7, sm: 2, md: 4 }}
                alignItems="center"
                useFlexGap
                flexWrap="wrap"
                mb={2}
              >
                <Link
                  target="_blank"
                  rel="noreferer"
                  href={`https://api.whatsapp.com/send?text=${title} ${link}`}
                >
                  <FontAwesomeIcon icon={faWhatsapp} size={"3x"} />
                </Link>
                <Link
                  target="_blank"
                  rel="noreferer"
                  href={`https://www.linkedin.com/shareArticle?url=${link}&title=${title}}`}
                >
                  <FontAwesomeIcon icon={faLinkedinIn} size="3x" />
                </Link>
                <Link
                  target="_blank"
                  rel="noreferer"
                  href={`https://www.facebook.com/sharer.php?u=${link}`}
                >
                  <FontAwesomeIcon icon={faFacebook} size="3x" />
                </Link>
                <Link
                  target="_blank"
                  rel="noreferer"
                  href={`https://twitter.com/share?url=${link}&text=${title}`}
                >
                  <FontAwesomeIcon icon={faTwitter} size="3x" />
                </Link>
                <Link
                  target="_blank"
                  rel="noreferer"
                  href={`https://reddit.com/submit?url=${link}&title=${title}`}
                >
                  <FontAwesomeIcon icon={faReddit} size="3x" />
                </Link>
              </Stack>
              <Stack direction="row" useFlexGap flexWrap="wrap">
                <Box
                  sx={{
                    position: "relative",
                    width: "100%",
                    maxWidth: "550px",
                    padding: 1,
                    borderRadius: "15px",
                    ...uiConfigs.style.textBgColor[theme.palette.mode],
                    marginBottom: "15px",
                    // outline: "none",
                  }}
                >
                  <Typography>{link}</Typography>
                </Box>
                <CopyToClipboard text={link}>
                  <Button variant="contained" onClick={() => showMessage()}>
                    Copy Link
                  </Button>
                </CopyToClipboard>
              </Stack>
            </Box>
          </Box>
        </Modal>
      </>
    );
}

export default ShareModal;